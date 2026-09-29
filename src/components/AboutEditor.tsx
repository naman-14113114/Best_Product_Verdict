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
    <section className="w-full py-10 my-10 border-t border-b border-slate-200 bg-white">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-slate-900">
          About the Editor
        </h3>

        {/* Circular Avatar */}
        <div className="flex justify-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-slate-200 shadow-sm bg-slate-100 flex items-center justify-center">
            <Image
              src={avatarUrl}
              alt={name}
              fill
              sizes="80px"
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
