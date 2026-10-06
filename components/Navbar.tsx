"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container pt-3 sm:pt-4 md:pt-5">
        <nav
          aria-label="ناوبری اصلی"
          className="
            flex
            min-h-[62px]
            items-center
            justify-between
            rounded-[13px]
            border
            border-[var(--border)]
            bg-[rgba(243,239,231,0.9)]
            px-3
            backdrop-blur-xl
            sm:min-h-[68px]
            sm:px-4
            md:px-6
          "
        >
          {/* Logo */}
          <a
            href="/"
            aria-label="صفحه اصلی Ceramicse"
            className="group flex items-center gap-2.5 sm:gap-3"
          >
            <span
              aria-hidden="true"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-[var(--foreground)]
                text-[10px]
                font-semibold
                text-[var(--background)]
                transition-transform
                duration-300
                group-hover:rotate-12
              "
            >
              C
            </span>

            <span className="english-display text-[17px] tracking-wide sm:text-lg">
              {site.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {site.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  relative
                  text-[12px]
                  text-[var(--muted)]
                  transition-colors
                  duration-200
                  hover:text-[var(--foreground)]
                  after:absolute
                  after:-bottom-2
                  after:right-0
                  after:h-px
                  after:w-0
                  after:bg-[var(--foreground)]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Contact */}
          <a
            href={`tel:${site.phone}`}
            className="
              hidden
              items-center
              gap-2
              rounded-[8px]
              bg-[var(--foreground)]
              px-4
              py-2.5
              text-[12px]
              font-medium
              !text-[var(--background)]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[var(--clay-dark)]
              md:inline-flex
            "
          >
            <Phone
              aria-hidden="true"
              size={14}
              strokeWidth={1.8}
            />

            <span>ارتباط با ما</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={
              isOpen
                ? "بستن منوی اصلی"
                : "باز کردن منوی اصلی"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setIsOpen((value) => !value)
            }
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-[8px]
              border
              border-[var(--border)]
              text-[var(--foreground)]
              transition-colors
              hover:bg-[var(--surface)]
              md:hidden
            "
          >
            {isOpen ? (
              <X
                aria-hidden="true"
                size={17}
                strokeWidth={1.7}
              />
            ) : (
              <Menu
                aria-hidden="true"
                size={17}
                strokeWidth={1.7}
              />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          aria-hidden={!isOpen}
          className={`
            overflow-hidden
            transition-all
            duration-300
            md:hidden
            ${
              isOpen
                ? "mt-2 max-h-[400px] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              rounded-[13px]
              border
              border-[var(--border)]
              bg-[rgba(243,239,231,0.97)]
              p-2.5
              shadow-[0_20px_60px_rgba(37,35,31,0.08)]
              backdrop-blur-xl
            "
          >
            {site.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                tabIndex={isOpen ? 0 : -1}
                onClick={closeMenu}
                className="
                  block
                  rounded-[8px]
                  px-4
                  py-3
                  text-[13px]
                  text-[var(--muted)]
                  transition-colors
                  hover:bg-[var(--surface)]
                  hover:text-[var(--foreground)]
                "
              >
                {item.label}
              </a>
            ))}

            <a
              href={`tel:${site.phone}`}
              tabIndex={isOpen ? 0 : -1}
              onClick={closeMenu}
              className="
                mt-1
                flex
                items-center
                justify-center
                gap-2
                rounded-[8px]
                bg-[var(--foreground)]
                px-4
                py-3.5
                text-[13px]
                font-medium
                !text-[var(--background)]
              "
            >
              <Phone
                aria-hidden="true"
                size={15}
                strokeWidth={1.8}
              />

              ارتباط با ما
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}