import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";
const root=process.cwd();
const sourceFiles=[];
function walk(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,item.name);if(item.isDirectory())walk(f);else if(/\.(tsx?|css)$/.test(item.name))sourceFiles.push(f)}}
walk(path.join(root,"src"));
const prohibited=/David Welch|Eleanor Vance|Eliana Hayes|Consumer Picks|ConsumerPicks|bestproductverdict\.co\.uk|100\+ Products Analyzed|50k Reviews Evaluated|Ranked By Humans|Since Our Launch In 2020|8 million shoppers|100% Verified UK Market|Zero Paid Ranking|UK Hands-On Tested|NIST-certified|https:\/\/(?:www\.)?(?:amazon|ebay|walmart)\.com\b|schema\.org\/InStock|Our Rating|expert-tested|Featured Tested Guides|verified lab benchmarks|our experts|independent product comparison site|\/search\/id=/i;
for(const file of sourceFiles){const source=fs.readFileSync(file,"utf8").replace(/\/\*[\s\S]*?\*\//g,"");assert(!prohibited.test(source),path.relative(root,file)+" contains a removed claim or identity");}
let links=0;
for(const name of ["waterFlossers","meatThermometers","massageGuns"]){
 const ctx={exports:{}};
 vm.runInNewContext(ts.transpileModule(fs.readFileSync("src/data/"+name+".ts","utf8"),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,ctx);
 const data=Object.values(ctx.exports)[0];
 assert.equal(data.canonicalUrl,"https://www.bestproductverdict.com/top-10/"+data.slug);
 assert.equal(data.products.length,10);
 assert.equal(data.author.name,"Best Product Verdict");
 assert(data.guide.testingMethodology.includes("AI-assisted"));
 assert(data.sources.length>=3);
 for(const product of [...data.products,...data.consideredProducts]){
   const url=new URL(product.outboundUrl);
   assert.equal(url.hostname,"www.amazon.co.uk");assert.equal(url.pathname,"/s");assert.equal(url.searchParams.get("k"),product.title);
   for(const field of ["priceDisplay","originalPriceDisplay","discountPercent","score","reviewCount","dealTimer"])assert.equal(product[field],undefined,product.title+" has an unverified offer or rating");
   links++;
 }
}
for(const component of ["ProductCard","ComparisonTable","ConsideredProducts"]){
 const source=fs.readFileSync("src/components/"+component+".tsx","utf8");
 assert(source.includes("Find UK listings"));
 assert(source.includes('target="_blank"'));
 assert(source.includes("sponsored"));
 assert(!source.includes("preventDefault"));
}
assert(!fs.readFileSync("src/lib/tracking.ts","utf8").includes("setTimeout"));
assert(!fs.readFileSync("src/lib/tracking.ts","utf8").includes("window.open"));
for(const name of ["contact","careers","mailing-list","partnerships"])assert(!fs.readFileSync("src/app/"+name+"/page.tsx","utf8").includes("setTimeout"));
assert(!fs.readFileSync("src/components/JsonLdSchema.tsx","utf8").includes('"Offer"'));
assert(!fs.readFileSync("src/components/JsonLdSchema.tsx","utf8").includes('"Review"'));
console.log("Source checks passed: "+sourceFiles.length+" files and "+links+" UK listing links.");
const base=process.argv[2];
if(base){
 const pages=["/","/top-10","/top-10/best-cordless-water-flossers","/top-10/best-mini-massage-guns","/top-10/best-wireless-meat-thermometers","/about","/mission","/contact","/careers","/mailing-list","/partnerships","/privacy-policy","/terms-and-conditions","/advertiser-disclosure","/search?query=water"];
 const results=await Promise.all(pages.map(async route=>{
  const response=await fetch(new URL(route,base));assert.equal(response.status,200,route);
  const html=await response.text();assert(!prohibited.test(html),route+" has a removed claim");
  if(route.startsWith("/top-10/best-")){assert(html.includes("AI-assisted"));assert(html.includes('rel="canonical" href="https://www.bestproductverdict.com'+route+'"'));assert(html.includes("Find UK listings"));assert(!html.includes('"@type":"Offer"'));assert(!html.includes('"@type":"Review"'));}
  if(["/contact","/careers","/partnerships","/privacy-policy"].includes(route))assert(html.includes("mailto:support@bestproductverdict.com"));
  return {route,status:response.status};
 }));
 for(const route of ["/not-a-real-page","/top-10/air-fryers","/top-10/electric-toothbrushes","/top-10/espresso-machines","/top-10/not-a-real-category","/products/no-such-product"]){const response=await fetch(new URL(route,base));assert.equal(response.status,404,route);const html=await response.text();assert(!prohibited.test(html),route+" has a removed claim");assert(html.includes("Page not found"));results.push({route,status:response.status})}
 const robots=await fetch(new URL("/robots.txt",base));assert.equal(robots.status,200);assert(robots.headers.get("content-type").includes("text/plain"));assert((await robots.text()).includes("Sitemap: https://www.bestproductverdict.com/sitemap.xml"));
 const sitemap=await fetch(new URL("/sitemap.xml",base));assert.equal(sitemap.status,200);assert(sitemap.headers.get("content-type").includes("xml"));const xml=await sitemap.text();assert.equal((xml.match(/<loc>/g)||[]).length,14);assert(!xml.includes("bestproductverdict.co.uk"));
 for(const agent of ["AdsBot-Google (+http://www.google.com/adsbot.html)","bingbot/2.0 (+http://www.bing.com/bingbot.htm)"]){const response=await fetch(new URL("/top-10/best-cordless-water-flossers",base),{headers:{"user-agent":agent}});assert.equal(response.status,200);assert((await response.text()).includes("AI-assisted"));}
 console.log(JSON.stringify({base,results,robots:200,sitemapEntries:14,botChecks:2},null,2));
}
