import { ArrowUpLeft, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container py-8 sm:py-10 md:py-12">
        <div
          className="
            grid
            gap-8
            md:grid-cols-[1fr_auto_auto]
            md:items-start
            md:gap-16
          "
        >
          {/* Brand */}
          <div>
            <a
              href="/"
              aria-label="صفحه اصلی Ceramicse"
              className="inline-flex items-center gap-3"
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
                "
              >
                C
              </span>

              <span className="english-display text-lg tracking-wide">
                {site.name}
              </span>
            </a>

            <p
              className="
                mt-3
                max-w-sm
                text-[11px]
                leading-7
                text-[var(--muted)]
                sm:mt-4
                sm:text-xs
              "
            >
              تولید و عرضه روشویی و سینک سرامیکی
              با تمرکز بر کیفیت ساخت و تنوع مدل.
            </p>
          </div>

          {/* Contact */}
          <div>
            <span className="text-[10px] font-semibold tracking-[0.08em] text-[var(--clay)]">
              تماس
            </span>

            <a
              href={`tel:${site.phone}`}
              className="
                mt-3
                inline-flex
                min-h-10
                items-center
                gap-2
                text-[13px]
                transition-colors
                hover:text-[var(--clay)]
                sm:mt-4
                sm:text-sm
              "
            >
              <Phone
                aria-hidden="true"
                size={14}
                strokeWidth={1.7}
              />

              <span dir="ltr">{site.phone}</span>
            </a>

            <a
              href="#contact"
              className="
                group
                mt-2
                flex
                min-h-10
                w-fit
                items-center
                gap-2
                text-[11px]
                text-[var(--muted)]
                transition-colors
                hover:text-[var(--foreground)]
                sm:mt-3
                sm:text-xs
              "
            >
              ارتباط با ما

              <ArrowUpLeft
                aria-hidden="true"
                size={13}
                strokeWidth={1.7}
                className="
                  transition-transform
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>

          {/* Address */}
          <div className="max-w-xs">
            <span className="text-[10px] font-semibold tracking-[0.08em] text-[var(--clay)]">
              آدرس کارگاه
            </span>

            <div className="mt-3 flex items-start gap-2 sm:mt-4">
              <MapPin
                aria-hidden="true"
                size={14}
                strokeWidth={1.7}
                className="mt-1 shrink-0"
              />

              <p className="text-[11px] leading-7 text-[var(--muted)] sm:text-xs">
                {site.address.city}
                <br />
                {site.address.text}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-7
            flex
            flex-col
            gap-2
            border-t
            border-[var(--border)]
            pt-5
            text-[9px]
            text-[var(--muted)]
            sm:mt-10
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:pt-6
            sm:text-[10px]
          "
        >
          <span>© 2026 {site.name}</span>

          <span>
            تولید روشویی و سینک سرامیکی در مشهد
          </span>
        </div>
      </div>
    </footer>
  );
}