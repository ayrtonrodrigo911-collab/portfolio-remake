import type { ReactNode } from "react";

interface ToolItem {
  name: string;
  icon: ReactNode;
}

const tools: ToolItem[] = [
  {
    name: "HTML5",
    icon: (
      <svg viewBox="0 0 32 32" className="size-7 sm:size-8" aria-hidden="true">
        <path fill="#E44D26" d="M6 3l2.2 24.5L16 30l7.8-2.5L26 3H6z" />
        <path fill="#F16529" d="M16 5.2v22.4l5.9-1.9 1.7-18.6H16z" />
        <path
          fill="#EBEBEB"
          d="M16 11.2H11l.3 4h4.7v-4zm0 7.8H11.5l.3 4 4.2 1.4v-4l-2.1-.7-.1-1.3H16v-4h-4.8l.3 4H16v4z"
          opacity=".2"
        />
        <path
          fill="#FFFFFF"
          d="M11 11.2h10l-.9 9.8-4.1 1.4-4.2-1.4-.3-3.6h3.1l.1 1.6 1.3.4 1.3-.4.3-3.8h-6.6l-.3-4z"
        />
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg viewBox="0 0 32 32" className="size-7 sm:size-8" aria-hidden="true">
        <path fill="#1572B6" d="M6 3l2.2 24.5L16 30l7.8-2.5L26 3H6z" />
        <path fill="#33A9DC" d="M16 5.2v22.4l5.9-1.9 1.7-18.6H16z" />
        <path
          fill="#FFFFFF"
          d="M11 11.2h10l-.3 3.6h-6.4l.2 2.6h6l-.6 6.8-3.9 1.3-4-1.3-.3-3.1h3.1l.1 1.4 1.1.3 1.1-.3.2-2.5H11.2l-.2-8.7z"
        />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 32 32" className="size-7 sm:size-8" aria-hidden="true">
        <rect width="32" height="32" rx="2" fill="#F7DF1E" />
        <path
          fill="#000000"
          d="M18.5 22.8c.6.9 1.4 1.5 2.7 1.5 1.2 0 1.9-.6 1.9-1.4 0-1-.8-1.4-2.1-2l-.7-.3c-2.1-.9-3.5-2-3.5-4.4 0-2.2 1.7-3.9 4.3-3.9 1.9 0 3.2.7 4.1 2.3l-2.2 1.4c-.5-.8-1-1.2-1.9-1.2-.9 0-1.5.5-1.5 1.2 0 .8.6 1.2 1.8 1.7l.7.3c2.5 1.1 3.9 2.1 3.9 4.7 0 2.7-2.1 4.2-4.8 4.2-2.7 0-4.4-1.3-5.2-3l2.5-1.4zm-9.3.3c.4.7.9 1.3 1.8 1.3.8 0 1.4-.4 1.4-1.7V12.5h2.9v10.3c0 2.8-1.7 4.1-4.2 4.1-2.3 0-3.7-1.2-4.4-2.7l2.5-1.1z"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 32 32" className="size-7 sm:size-8" aria-hidden="true">
        <rect width="32" height="32" rx="2" fill="#3178C6" />
        <path
          fill="#FFFFFF"
          d="M13.8 15.2h-3.4v-2.4h9.6v2.4h-3.4v9.6h-2.8v-9.6zm8.1 7.6c.6.9 1.4 1.5 2.7 1.5 1.2 0 1.9-.6 1.9-1.4 0-1-.8-1.4-2.1-2l-.7-.3c-2.1-.9-3.5-2-3.5-4.4 0-2.2 1.7-3.9 4.3-3.9 1.9 0 3.2.7 4.1 2.3l-2.2 1.4c-.5-.8-1-1.2-1.9-1.2-.9 0-1.5.5-1.5 1.2 0 .8.6 1.2 1.8 1.7l.7.3c2.5 1.1 3.9 2.1 3.9 4.7 0 2.7-2.1 4.2-4.8 4.2-2.7 0-4.4-1.3-5.2-3l2.5-1.4z"
        />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 32 32" className="size-7 sm:size-8" aria-hidden="true">
        <circle cx="16" cy="16" r="2.5" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="1.6">
          <ellipse cx="16" cy="16" rx="12" ry="4.5" />
          <ellipse cx="16" cy="16" rx="12" ry="4.5" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="12" ry="4.5" transform="rotate(120 16 16)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 32 32" className="size-7 sm:size-8" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill="#000000" />
        <path
          fill="#FFFFFF"
          d="M21.5 22.8L13.2 11h-2.2v10h2.2v-6.8l7.2 10.3c.4-.5.8-1.1 1.1-1.7zm1.1-6.8h-2.1v2h2.1v-2z"
        />
        <path fill="url(#nextG)" d="M20.5 11h2.2v10h-2.2z" />
        <defs>
          <linearGradient
            id="nextG"
            x1="20.5"
            y1="11"
            x2="20.5"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFF" />
            <stop offset="1" stopColor="#FFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 32 32" className="size-7 sm:size-8" aria-hidden="true">
        <path
          fill="#06B6D4"
          d="M16 10.5c-3 0-4.9 1.5-5.6 4.5 1.1-1.5 2.4-2.1 3.9-1.7.9.2 1.5.8 2.2 1.5 1.1 1.1 2.4 2.5 5.2 2.5 3 0 4.9-1.5 5.6-4.5-1.1 1.5-2.4 2.1-3.9 1.7-.9-.2-1.5-.8-2.2-1.5-1.1-1.2-2.4-2.5-5.2-2.5zm-7 6.8c-3 0-4.9 1.5-5.6 4.5 1.1-1.5 2.4-2.1 3.9-1.7.9.2 1.5.8 2.2 1.5 1.1 1.1 2.4 2.4 5.2 2.4 3 0 4.9-1.5 5.6-4.5-1.1 1.5-2.4 2.1-3.9 1.7-.9-.2-1.5-.8-2.2-1.5-1.1-1.1-2.4-2.4-5.2-2.4z"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 32 32" className="size-7 sm:size-8" aria-hidden="true">
        <path fill="#539E43" d="M16 4l10.5 6v12L16 28 5.5 22V10L16 4z" />
        <path
          fill="#FFFFFF"
          d="M16 11c-2.8 0-4.5 1.5-4.5 3.8 0 2.2 1.5 3 3.5 3.5l1 .3c1.2.3 1.8.6 1.8 1.4 0 .9-.7 1.4-1.8 1.4-1.2 0-2-.5-2.5-1.3l-1.8 1.2c.8 1.4 2.3 2.1 4.3 2.1 2.8 0 4.5-1.5 4.5-3.8 0-2-1.5-3-3.5-3.5l-1-.3c-1.2-.3-1.8-.6-1.8-1.4 0-.8.7-1.3 1.7-1.3 1.1 0 1.8.5 2.3 1.2l1.8-1.2c-.8-1.4-2.2-2.1-4-2.1z"
        />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg viewBox="0 0 32 32" className="size-7 sm:size-8" aria-hidden="true">
        <path fill="#F24E1E" d="M11 6h5v5h-5z" />
        <path fill="#FF7262" d="M16 6h5a2.5 2.5 0 0 1 0 5h-5z" />
        <path fill="#1ABCFE" d="M16 16h5a2.5 2.5 0 0 1 0 5h-5z" />
        <path fill="#A259FF" d="M11 11h5v5h-5z" />
        <circle cx="13.5" cy="18.5" r="2.5" fill="#A259FF" />
        <circle cx="13.5" cy="23.5" r="2.5" fill="#0ACF83" />
        <circle cx="18.5" cy="18.5" r="2.5" fill="#1ABCFE" />
      </svg>
    ),
  },
  {
    name: "Sass",
    icon: (
      <svg viewBox="0 0 32 32" className="size-7 sm:size-8" aria-hidden="true">
        <path
          fill="#CD6799"
          d="M16 5C9.9 5 5 9.9 5 16s4.9 11 11 11 11-4.9 11-11S22.1 5 16 5zm4.8 15.3c-.6.9-1.6 1.4-2.8 1.4-1.8 0-3.1-1.1-3.1-2.9 0-1.7 1.2-2.7 2.7-3.2l.9-.3c.9-.3 1.3-.6 1.3-1.2 0-.6-.5-1-1.3-1-.9 0-1.5.4-1.8 1.1l-1.6-.9c.6-1.3 1.9-2.1 3.5-2.1 2 0 3.3 1.1 3.3 2.8 0 1.6-1 2.5-2.5 3l-.9.3c-1 .3-1.4.7-1.4 1.3 0 .7.6 1.2 1.4 1.2.8 0 1.4-.4 1.8-1l1.6.9z"
        />
      </svg>
    ),
  },
];

export function ToolsStack() {
  return (
    <section className="bg-paper py-8 sm:py-10">
      <div className="mx-auto max-w-[1760px] px-4 sm:px-8 lg:px-12">
        <h2 className="mb-5 text-sm font-black uppercase tracking-wider text-black sm:text-base reveal-on-scroll">
          FERRAMENTAS &amp; TECNOLOGIAS
        </h2>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-10">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className="reveal-on-scroll flex aspect-square flex-col items-center justify-center gap-2.5 rounded-[2px] border border-black/15 bg-white p-2 transition-all hover:border-black hover:bg-lime/10"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="flex size-9 items-center justify-center sm:size-10">{tool.icon}</div>
              <span className="text-center text-[10px] font-black uppercase tracking-tight text-black sm:text-[11px]">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
