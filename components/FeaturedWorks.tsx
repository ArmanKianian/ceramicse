"use client";

import { ArrowLeft, Maximize2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { works } from "@/data/works";

export default function FeaturedWorks() {
  const [activeWork, setActiveWork] = useState<number | null>(
    null,
  );

  const closeButtonRef =
    useRef<HTMLButtonElement>(null);

  const secondaryCloseButtonRef =
    useRef<HTMLButtonElement>(null);

  const triggerRefs = useRef<
    Record<number, HTMLButtonElement | null>
  >({});

  const activeItem = works.find(
    (work) => work.id === activeWork,
  );

  const closeLightbox = () => {
    const previousTrigger =
      activeWork !== null
        ? triggerRefs.current[activeWork]
        : null;

    setActiveWork(null);

    requestAnimationFrame(() => {
      previousTrigger?.focus();
    });
  };

  useEffect(() => {
    if (!activeItem) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = [
        closeButtonRef.current,
        secondaryCloseButtonRef.current,
      ].filter(
        (
          element,
        ): element is HTMLButtonElement =>
          Boolean(element),
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];

      const lastElement =
        focusableElements[
          focusableElements.length - 1
        ];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow = "";

      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [activeItem, activeWork]);

  return (
    <>
      <section
        id="works"
        className="section border-t border-[var(--border)]"
      >
        <div className="container">
          {/* Header */}
          <div
            className="
              flex
              flex-col
              gap-7
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div className="max-w-2xl">
              <span className="eyebrow">
                نمونه‌کارها
              </span>

              <h2
                className="
                  font-display
                  mt-5
                  text-[2rem]
                  font-semibold
                  leading-[1.4]
                  tracking-[-0.02em]
                  sm:text-[2.5rem]
                  md:mt-6
                  md:text-[3.5rem]
                "
              >
                بخشی از نمونه‌کارهای تولیدی
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-[13px]
                  leading-8
                  text-[var(--muted)]
                  sm:text-sm
                  md:mt-5
                  md:text-[15px]
                "
              >
                تعدادی از نمونه‌کارهای واقعی روشویی و
                سینک سرامیکی تولیدشده در کارگاه Ceramicse.
              </p>
            </div>

            <a
              href="#contact"
              className="button button-outline w-fit"
            >
              سفارش و استعلام

              <ArrowLeft
                aria-hidden="true"
                size={15}
                strokeWidth={1.7}
              />
            </a>
          </div>

          {/* Gallery */}
          <div
            className="
              mt-10
              grid
              grid-cols-2
              gap-2.5
              sm:mt-14
              sm:gap-4
              lg:grid-cols-12
              lg:gap-5
            "
          >
            {works.map((work, index) => {
              const featured =
                index === 0 ||
                index === 5 ||
                index === 10;

              return (
                <button
                  key={work.id}
                  ref={(element) => {
                    triggerRefs.current[work.id] =
                      element;
                  }}
                  type="button"
                  aria-label={`مشاهده ${work.title}`}
                  onClick={() =>
                    setActiveWork(work.id)
                  }
                  className={`
                    group
                    relative
                    block
                    w-full
                    text-right
                    ${
                      featured
                        ? "lg:col-span-6"
                        : "lg:col-span-3"
                    }
                  `}
                >
                  <div
                    className={`
                      relative
                      overflow-hidden
                      rounded-[12px]
                      bg-[var(--surface)]
                      sm:rounded-[14px]
                      ${
                        featured
                          ? "aspect-[4/4.7]"
                          : "aspect-[4/5]"
                      }
                    `}
                  >
                    {/* Placeholder */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        bg-[linear-gradient(145deg,#e0d7ca,#b98c72)]
                      "
                    >
                      <div className="text-center">
                        <span
                          className="
                            block
                            font-display
                            text-3xl
                            font-semibold
                            text-white/30
                            transition-transform
                            duration-700
                            group-hover:scale-110
                            sm:text-5xl
                          "
                        >
                          {String(work.id).padStart(
                            2,
                            "0",
                          )}
                        </span>

                        <span
                          className="
                            mt-1
                            block
                            text-[8px]
                            tracking-[0.18em]
                            text-white/25
                            sm:text-[9px]
                          "
                        >
                          CERAMICSE
                        </span>
                      </div>
                    </div>

                    {/* Real image */}
                    {work.image && (
                      <img
                        src={work.image}
                        alt={work.title}
                        loading="lazy"
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.045]
                        "
                      />
                    )}

                    {/* Overlay */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/10
                        to-transparent
                        opacity-50
                        transition-opacity
                        duration-300
                        group-hover:opacity-90
                      "
                    />

                    {/* Number */}
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        left-3
                        top-3
                        text-[9px]
                        font-medium
                        tracking-[0.16em]
                        text-white/70
                        sm:left-4
                        sm:top-4
                        sm:text-[10px]
                      "
                    >
                      {String(work.id).padStart(2, "0")}
                    </span>

                    {/* Expand */}
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        right-3
                        top-3
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-black/10
                        text-white
                        opacity-0
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        sm:right-4
                        sm:top-4
                        sm:h-8
                        sm:w-8
                      "
                    >
                      <Maximize2
                        size={12}
                        strokeWidth={1.6}
                      />
                    </span>

                    {/* Info */}
                    <div
                      className="
                        absolute
                        inset-x-3
                        bottom-3
                        text-white
                        sm:inset-x-4
                        sm:bottom-4
                      "
                    >
                      <h3 className="text-[10px] font-semibold sm:text-sm">
                        {work.title}
                      </h3>

                      <p className="mt-0.5 text-[9px] text-white/60 sm:mt-1 sm:text-xs">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Gallery footer */}
          <div
            className="
              mt-8
              flex
              items-center
              justify-between
              border-t
              border-[var(--border)]
              pt-5
              text-[10px]
              text-[var(--muted)]
              sm:mt-10
              sm:text-xs
            "
          >
            <span>{works.length} نمونه‌کار</span>

            <span>
              نمونه‌کارهای واقعی Ceramicse
            </span>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeItem && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/80
            p-3
            backdrop-blur-md
            sm:p-5
          "
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          aria-describedby="lightbox-description"
          onClick={closeLightbox}
        >
          <div
            className="
              relative
              w-full
              max-w-5xl
              overflow-hidden
              rounded-[16px]
              bg-[var(--background)]
              shadow-[0_30px_100px_rgba(0,0,0,0.35)]
              sm:rounded-[20px]
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* Close */}
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="بستن تصویر"
              onClick={closeLightbox}
              className="
                absolute
                right-3
                top-3
                z-10
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/30
                text-white
                backdrop-blur-md
                transition-colors
                hover:bg-black/50
                sm:right-4
                sm:top-4
              "
            >
              <X
                aria-hidden="true"
                size={16}
                strokeWidth={1.7}
              />
            </button>

            {/* Image / Placeholder */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface)]">
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-[linear-gradient(145deg,#e0d7ca,#b98c72)]
                "
              >
                <div className="text-center">
                  <span className="font-display text-6xl font-semibold text-white/25 sm:text-8xl">
                    {String(activeItem.id).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <span className="mt-2 block text-[9px] tracking-[0.2em] text-white/20">
                    CERAMICSE
                  </span>
                </div>
              </div>

              {activeItem.image && (
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  loading="eager"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-contain
                  "
                />
              )}
            </div>

            {/* Info */}
            <div
              className="
                flex
                flex-col
                gap-4
                p-4
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:p-5
              "
            >
              <div>
                <h3
                  id="lightbox-title"
                  className="text-[13px] font-semibold sm:text-sm"
                >
                  {activeItem.title}
                </h3>

                <p
                  id="lightbox-description"
                  className="mt-1 text-[10px] text-[var(--muted)] sm:text-xs"
                >
                  {activeItem.description}
                </p>
              </div>

              <button
                ref={secondaryCloseButtonRef}
                type="button"
                onClick={closeLightbox}
                className="
                  w-full
                  rounded-[8px]
                  border
                  border-[var(--border)]
                  px-4
                  py-2.5
                  text-[11px]
                  text-[var(--muted)]
                  transition-colors
                  hover:text-[var(--foreground)]
                  sm:w-auto
                  sm:text-xs
                "
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}