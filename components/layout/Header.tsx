"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavLink = { href: string; label: string };

type NavItem = {
  href: string;
  label: string;
  children?: NavLink[];
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/hub",
    label: "Hub",
    children: [
      { href: "/hub", label: "Browse All Software" },
      { href: "/hub/bundles", label: "Bundles" },
      { href: "/hub/categories", label: "Categories" },
      { href: "/hub/discover", label: "Discover" },
      { href: "/hub/discover/guides", label: "Guides & Playbooks" },
      { href: "/hub/discover/newsletter", label: "Newsletter & Archive" },
      { href: "/hub/funded", label: "Featured" },
      { href: "/hub/new", label: "New & Noteworthy" },
    ],
  },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "About" },
      { href: "/about/partners", label: "Partners" },
      { href: "/about/press", label: "Press Kit" },
      { href: "/about/team", label: "Team" },
      { href: "/about/transparency", label: "Transparency & Financials" },
    ],
  },
  { href: "/donate", label: "Donate" },
  {
    href: "/support",
    label: "Support",
    children: [
      { href: "/support", label: "Support" },
      { href: "/support/faq", label: "FAQ" },
      { href: "/support/contact", label: "Contact" },
      { href: "/support/builders", label: "For Builders" },
      { href: "/support/communities", label: "For Communities" },
    ],
  },
  {
    href: "/legal",
    label: "Legal",
    children: [
      { href: "/legal", label: "Legal" },
      { href: "/legal/privacy", label: "Privacy Policy" },
      { href: "/legal/terms", label: "Terms of Service" },
      { href: "/legal/security", label: "Security" },
    ],
  },
];

const linkClassName =
  "text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50";

const dropdownItemClassName =
  "block rounded-md px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100/80 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900/80 dark:hover:text-zinc-50";

function Chevron() {
  return (
    <svg
      className="size-4 shrink-0 text-zinc-400 transition-transform data-[open]:rotate-180"
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

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-white/70 dark:border-zinc-800/80 dark:bg-black/80">
      <div
        ref={containerRef}
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
        >
          Big Things
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href} className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                  onClick={() =>
                    setOpenMenu((open) => (open === item.href ? null : item.href))
                  }
                  aria-expanded={openMenu === item.href}
                >
                  {item.label}
                  <Chevron data-open={openMenu === item.href ? "true" : undefined} />
                </button>
                {openMenu === item.href && (
                  <div className="absolute right-0 top-full mt-2 min-w-[230px] rounded-lg border border-zinc-200/80 bg-white p-1.5 shadow-lg dark:border-zinc-800/80 dark:bg-black">
                    <Link
                      href={item.href}
                      className={dropdownItemClassName}
                      onClick={() => setOpenMenu(null)}
                    >
                      {item.label}
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={dropdownItemClassName}
                        onClick={() => setOpenMenu(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={linkClassName}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-zinc-200/80 dark:border-zinc-800/80 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100/80 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900/80 dark:hover:text-zinc-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded-md px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100/80 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900/80 dark:hover:text-zinc-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
