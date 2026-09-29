"use client";

import React from "react";
import Image from "next/image";

interface AboutEditorProps {
  name?: string;
  role?: string;
  bio?: string;
  avatarUrl?: string;
}

export const AboutEditor: React.FC<AboutEditorProps> = ({
  name = "David Welch",
  bio = "David Welch is a product researcher with a passion for finding and analyzing trending products. On his free time, he enjoys spending time outdoors with his family and German Shepherd named Zeus.",
  avatarUrl = "/images/david-welch.jpg",
}) => {
  return (
    <section className="w-full py-8 my-8 text-center">
      <div className="max-w-2xl mx-auto px-4 space-y-3.5">
        <h3 className="text-sm sm:text-base font-bold text-slate-900">
          About the Editor
        </h3>

        {/* Circular Avatar */}
        <div className="flex justify-center">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-slate-200 shadow-xs bg-slate-100 flex items-center justify-center">
            <Image
              src={avatarUrl}
              alt={name}
              fill
              sizes="64px"
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Bio text */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
          {bio}
        </p>
      </div>
    </section>
  );
};

export default AboutEditor;
