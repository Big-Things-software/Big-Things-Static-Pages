"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ACCENT = "#00C9FF";
const DEEP_NAVY = "#060A10";

type DropdownLink = { href: string; label: string; desc: string };

type DropdownColumn = { title: string; links: DropdownLink[] };

type NavItem = {
  href: string;
  label: string;
  columns?: DropdownColumn[];
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/hub",
    label: "Hub",
    columns: [
      {
        title: "Browse the Catalog",
        links: [
          { href: "/hub", label: "Browse All Software", desc: "skibidi" },
          { href: "/hub/categories", label: "Browse by Topic", desc: "skibidi" },
          { href: "/hub/bundles", label: "Curated Software Packs", desc: "skibidi" },
          { href: "/hub/discover", label: "Discover", desc: "skibidi" },
          { href: "/hub/funded", label: "Recently Funded", desc: "skibidi" },
          { href: "/hub/new", label: "New & Noteworthy", desc: "skibidi" },
        ],
      },
      {
        title: "Discovery",
        links: [
          { href: "/hub/discover/guides", label: "Guides & Playbooks", desc: "skibidi" },
          { href: "/hub/discover/newsletter", label: "Newsletter & Archive", desc: "skibidi" },
        ],
      },
    ],
  },
  {
    href: "/about",
    label: "About",
    columns: [
      {
        title: "About Big Things",
        links: [
          { href: "/about", label: "About", desc: "skibidi" },
          { href: "/about/partners", label: "Partners", desc: "skibidi" },
          { href: "/about/press", label: "Press Kit", desc: "skibidi" },
          { href: "/about/team", label: "Team", desc: "skibidi" },
          { href: "/about/transparency", label: "Transparency & Financials", desc: "skibidi" },
        ],
      },
    ],
  },
  {
    href: "/support",
    label: "Support",
    columns: [
      {
        title: "Support",
        links: [
          { href: "/support", label: "Support", desc: "skibidi" },
          { href: "/support/faq", label: "FAQ", desc: "skibidi" },
          { href: "/support/contact", label: "Contact", desc: "skibidi" },
          { href: "/support/builders", label: "For Builders", desc: "skibidi" },
          { href: "/support/communities", label: "For Communities", desc: "skibidi" },
        ],
      },
    ],
  },
  {
    href: "/legal",
    label: "Legal",
    columns: [
      {
        title: "Legal",
        links: [
          { href: "/legal", label: "Legal", desc: "skibidi" },
          { href: "/legal/privacy", label: "Privacy Policy", desc: "skibidi" },
          { href: "/legal/terms", label: "Terms of Service", desc: "skibidi" },
          { href: "/legal/security", label: "Security", desc: "skibidi" },
        ],
      },
    ],
  },
  { href: "/donate", label: "Donate" },
];

function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/icons/animated-logo.svg"
      alt="Big Things"
      width={24}
      height={24}
      className={className}
      unoptimized
    />
  );
}

function Chevron() {
  return (
    <svg
      className="size-4 shrink-0 text-[#7DE3FF] transition-transform data-[open]:rotate-180"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MegaDropdown({
  column,
  close,
}: {
  column: DropdownColumn;
  close: () => void;
}) {
  return (
    <div>
      <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
        {column.title}
      </h3>
      <ul className="space-y-1">
        {column.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={close}
              className="group flex flex-col gap-0.5 rounded-lg px-2.5 py-2 transition-colors hover:bg-zinc-100/70 dark:hover:bg-white/5"
            >
              <span className="text-[14px] font-medium text-zinc-800 group-hover:text-[#00C9FF] dark:text-zinc-100 dark:group-hover:text-[#7DE3FF]">
                {link.label}
              </span>
              <span className="max-w-sm text-[12.5px] leading-snug text-zinc-500 dark:text-zinc-400">
                {link.desc}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openMenu]);

  const closeMenu = () => setOpenMenu(null);

  return (
    <header className="fixed left-4 right-4 top-2 z-10 h-14 rounded-2xl border border-zinc-200/70 bg-white/85 shadow-2xl shadow-zinc-200/40 backdrop-blur-2xl backdrop-saturate-200 supports-[backdrop-filter]:bg-white/85 dark:border-white/10 dark:bg-[#060A10]/85 dark:shadow-[#060A10]/60">
      <div
        ref={containerRef}
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
        >
          <Logo className="size-6.5" />
          Big Things
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) =>
            item.columns ? (
              <div key={item.href} className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 text-[15px] font-medium text-zinc-800 transition-colors hover:text-[#00C9FF] dark:text-zinc-200 dark:hover:text-[#7DE3FF]"
                  onClick={() =>
                    setOpenMenu((open) => (open === item.href ? null : item.href))
                  }
                  aria-expanded={openMenu === item.href}
                >
                  {item.label}
                  <Chevron data-open={openMenu === item.href ? "true" : undefined} />
                </button>
                {openMenu === item.href && (
                  <div className="absolute left-0 top-full z-20 mt-3 grid w-[560px] grid-cols-2 gap-7 rounded-2xl border border-zinc-200/70 bg-white/95 p-5 shadow-2xl shadow-[#060A10]/15 backdrop-blur-2xl dark:border-white/10 dark:bg-[#060A10]/98">
                    {item.columns.map((column) => (
                      <MegaDropdown
                        key={column.title}
                        column={column}
                        close={closeMenu}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href} onClick={closeMenu} className="text-[15px] font-medium text-zinc-800 transition-colors hover:text-[#00C9FF] dark:text-zinc-200 dark:hover:text-[#7DE3FF]">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-zinc-800 hover:text-[#00C9FF] dark:text-zinc-200 dark:hover:text-[#7DE3FF] md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="size-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg className="size-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-zinc-200/70 dark:border-white/10 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 pb-4 pt-3">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-semibold text-zinc-800 hover:text-[#00C9FF] dark:text-zinc-200 dark:hover:text-[#7DE3FF]"
                >
                  {item.label}
                </Link>
                {item.columns?.map((column) =>
                  column.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="ml-3 block rounded-lg px-3 py-2 text-[14px] text-zinc-600 hover:bg-zinc-100/60 dark:text-zinc-400 dark:hover:bg-white/5"
                    >
                      {link.label}
                    </Link>
                  )),
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
