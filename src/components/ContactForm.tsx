import { SUPPORT_EMAIL } from "@/lib/site";
export function ContactForm() { return <a href={"mailto:" + SUPPORT_EMAIL} className="text-blue-600 hover:underline">Email {SUPPORT_EMAIL}</a>; }
export default ContactForm;
