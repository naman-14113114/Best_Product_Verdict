import React from "react";

interface StarRatingProps {
  score?: number | string; // Score out of 10 (e.g. 9.9) or out of 5 (e.g. 4.95)
  maxStars?: number;
  size?: number;
  className?: string;
  showScoreText?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({
  score = 9.8,
  maxStars = 5,
  size = 18,
  className = "",
  showScoreText = false,
}) => {
  // Normalize score to 5-star scale
  const numericScore = typeof score === "string" ? parseFloat(score) : score;
  const ratingOutOf5 = numericScore > 5 ? numericScore / 2 : numericScore;
  const clampedRating = Math.max(0, Math.min(5, isNaN(ratingOutOf5) ? 4.9 : ratingOutOf5));

  // Unique ID for SVG gradients
  const uniqueId = React.useId().replace(/:/g, "");

  return (
    <div
      className={`inline-flex items-center gap-1 ${className}`}
      aria-label={`Rating: ${clampedRating.toFixed(1)} out of 5 stars`}
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxStars }).map((_, index) => {
          const fillPercentage = Math.max(0, Math.min(100, (clampedRating - index) * 100));
          const gradientId = `star-grad-${uniqueId}-${index}`;

          return (
            <svg
              key={index}
              width={size}
              height={size}
              viewBox="0 0 24 24"
              className="shrink-0 transition-transform duration-150"
            >
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset={`${fillPercentage}%`} stopColor="#f59e0b" />
                  <stop offset={`${fillPercentage}%`} stopColor="#e2e8f0" />
                </linearGradient>
              </defs>
              <path
                fill={`url(#${gradientId})`}
                stroke="#d97706"
                strokeWidth="0.5"
                strokeLinejoin="round"
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
          );
        })}
      </div>
      {showScoreText && (
        <span className="ml-1 text-xs sm:text-sm font-bold text-slate-700">
          {numericScore.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;
