import { ArrowLeft, Phone } from "lucide-react";
import { site } from "@/data/site";

const heroContent = {
  eyebrow: "تولید مستقیم در کارگاه",

  title: "روشویی سرامیکی\nبا کیفیت ساخت بالا.",

  description:
    "Ceramicse تولیدکننده روشویی و سینک‌های سرامیکی برای پروژه‌های ساختمانی، فروشگاه‌ها و سفارش‌های مستقیم است.",

  primaryAction: "مشاهده نمونه‌کارها",

  secondaryAction: "تماس برای سفارش",
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-[28%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[var(--clay)]
          opacity-[0.06]
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[-100px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[var(--terracotta)]
          opacity-[0.07]
          blur-[130px]
        "
      />

      <div
        className="
          container
          relative
          flex
          min-h-[100svh]
          items-center
          pb-12
          pt-28
          sm:pb-16
          sm:pt-32
          md:min-h-screen
          md:pb-20
          md:pt-36
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-10
            lg:grid-cols-[1fr_0.9fr]
            lg:gap-20
          "
        >
          <div className="max-w-2xl">
            <span className="eyebrow">
              {heroContent.eyebrow}
            </span>

            <h1
              className="
                font-display
                mt-5
                max-w-[680px]
                whitespace-pre-line
                text-[2rem]
                font-semibold
                leading-[1.45]
                tracking-[-0.025em]
                sm:mt-6
                sm:text-[2.6rem]
                sm:leading-[1.38]
                md:text-[3.25rem]
                md:leading-[1.35]
                lg:text-[3.75rem]
                lg:leading-[1.3]
                xl:text-[4rem]
              "
            >
              {heroContent.title}
            </h1>

            <p
              className="
                mt-5
                max-w-lg
                text-[13px]
                leading-8
                text-[var(--muted)]
                sm:mt-6
                sm:text-[14px]
                md:mt-7
                md:text-[15px]
              "
            >
              {heroContent.description}
            </p>

            <div
              className="
                mt-7
                flex
                flex-col
                gap-2.5
                sm:mt-8
                sm:flex-row
                sm:gap-3
              "
            >
              <a
                href="#works"
                className="button button-primary"
              >
                {heroContent.primaryAction}

                <ArrowLeft
                  aria-hidden="true"
                  size={15}
                  strokeWidth={1.8}
                />
              </a>

              <a
                href={`tel:${site.phone}`}
                className="button button-outline"
              >
                <Phone
                  aria-hidden="true"
                  size={15}
                  strokeWidth={1.8}
                />

                {heroContent.secondaryAction}
              </a>
            </div>

            <div
              className="
                mt-9
                grid
                max-w-xl
                grid-cols-2
                border-t
                border-[var(--border)]
                pt-5
                sm:mt-11
                sm:grid-cols-3
              "
            >
              <div>
                <span className="block text-base font-semibold sm:text-lg">
                  مستقیم
                </span>

                <span className="mt-1 block text-[11px] leading-5 text-[var(--muted)]">
                  تولید در کارگاه
                </span>
              </div>

              <div className="border-r border-[var(--border)] pr-4">
                <span className="block text-base font-semibold sm:text-lg">
                  متنوع
                </span>

                <span className="mt-1 block text-[11px] leading-5 text-[var(--muted)]">
                  مدل و طراحی
                </span>
              </div>

              <div className="hidden border-r border-[var(--border)] pr-4 sm:block">
                <span className="block text-base font-semibold sm:text-lg">
                  مشهد
                </span>

                <span className="mt-1 block text-[11px] leading-5 text-[var(--muted)]">
                  محل کارگاه
                </span>
              </div>
            </div>
          </div>

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[520px]
              lg:mx-0
            "
          >
            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[20px]
                border
                border-white/30
                bg-[var(--surface)]
                shadow-[0_30px_80px_rgba(75,45,32,0.12)]
                sm:rounded-[22px]
                sm:shadow-[0_35px_100px_rgba(75,45,32,0.14)]
              "
            >
              <img
                src="/images/hero/hero-washbasin.webp"
                alt="روشویی سرامیکی Ceramicse"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/55
                  via-transparent
                  to-black/5
                "
              />

              <div
                className="
                  absolute
                  inset-x-5
                  top-5
                  flex
                  items-start
                  justify-between
                  sm:inset-x-6
                  sm:top-6
                "
              >
                <span className="text-[9px] font-medium tracking-[0.2em] text-white/75">
                  CERAMICSE
                </span>

                <span className="text-[9px] tracking-[0.18em] text-white/60">
                  01 / 15
                </span>
              </div>

              <div
                className="
                  absolute
                  inset-x-5
                  bottom-5
                  border-t
                  border-white/25
                  pt-4
                  sm:inset-x-6
                  sm:bottom-6
                "
              >
                <div className="flex items-end justify-between gap-4 text-white">
                  <div>
                    <span className="block text-[11px] font-medium sm:text-xs">
                      روشویی سرامیکی
                    </span>

                    <span className="mt-1 block text-[9px] text-white/60 sm:text-[10px]">
                      Ceramic Washbasin
                    </span>
                  </div>

                  <span className="text-[9px] text-white/50">
                    مشهد
                  </span>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-4
                -left-2
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--background)]/95
                shadow-[0_15px_40px_rgba(37,35,31,0.08)]
                sm:-bottom-6
                sm:-left-6
                sm:h-20
                sm:w-20
              "
            >
              <span className="english-display text-xl text-[var(--clay)]">
                C
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}