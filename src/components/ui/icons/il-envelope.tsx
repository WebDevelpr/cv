import * as React from "react";

export function EnvelopeIcon({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M348 250q22 6 45 0l348-87v371q0 10-6 16t-17 7H23q-10 0-16-7t-7-16V163zM718 1q10 0 17 6t6 17v70l-348 87q-23 5-45 0L0 94V24Q0 14 7 7t16-6z"/>
    </svg>
  );
}
