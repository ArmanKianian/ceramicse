const aboutContent = {
  eyebrow: "درباره کارگاه",

  title: "تولید مستقیم،\nبرای پروژه‌های واقعی.",

  description:
    "Ceramicse یک کارگاه تخصصی در مشهد است که در زمینه تولید روشویی و سینک‌های سرامیکی فعالیت می‌کند. تمرکز ما روی ساخت محصولاتی با فرم مناسب، کیفیت ساخت قابل اعتماد و تنوع برای نیازهای مختلف است.",

  details: [
    {
      number: "01",
      title: "تولید مستقیم",
      text: "محصولات مستقیماً در کارگاه تولید می‌شوند.",
    },
    {
      number: "02",
      title: "تنوع مدل",
      text: "مدل‌های مختلف برای سلیقه و کاربردهای متفاوت.",
    },
    {
      number: "03",
      title: "همکاری پروژه‌ای",
      text: "مناسب همکاری با فروشندگان، سازندگان و پروژه‌ها.",
    },
  ],
};

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section border-t border-[var(--border)]"
    >
      <div className="container">
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[0.55fr_1.45fr]
            lg:gap-24
          "
        >
          {/* Section label */}
          <div className="flex items-start">
            <div className="sticky top-28">
              <span className="eyebrow">
                {aboutContent.eyebrow}
              </span>

              <div
                aria-hidden="true"
                className="
                  mt-8
                  hidden
                  h-px
                  w-20
                  bg-[var(--border)]
                  lg:block
                "
              />

              <span
                aria-hidden="true"
                className="
                  mt-5
                  hidden
                  text-[10px]
                  tracking-[0.2em]
                  text-[var(--muted)]
                  lg:block
                "
              >
                CERAMICSE / 01
              </span>
            </div>
          </div>

          {/* Main content */}
          <div>
            <h2
              id="about-title"
              className="
                font-display
                max-w-3xl
                whitespace-pre-line
                text-[2rem]
                font-semibold
                leading-[1.45]
                tracking-[-0.02em]
                sm:text-[2.5rem]
                md:text-[3.5rem]
                md:leading-[1.4]
              "
            >
              {aboutContent.title}
            </h2>

            <div
              className="
                mt-7
                grid
                gap-6
                lg:grid-cols-[1fr_0.35fr]
                lg:gap-12
              "
            >
              <p
                className="
                  max-w-2xl
                  text-[14px]
                  leading-8
                  text-[var(--muted)]
                  md:text-[15px]
                "
              >
                {aboutContent.description}
              </p>

              <div className="hidden self-end lg:block">
                <span className="block text-[10px] text-[var(--muted)]">
                  محل تولید
                </span>

                <span className="mt-1 block text-sm font-semibold">
                  مشهد
                </span>
              </div>
            </div>

            {/* Details */}
            <div
              className="
                mt-10
                grid
                border-t
                border-[var(--border)]
                sm:mt-14
                sm:grid-cols-3
              "
              role="list"
              aria-label="ویژگی‌های کارگاه"
            >
              {aboutContent.details.map((item) => (
                <article
                  key={item.number}
                  role="listitem"
                  className="
                    group
                    relative
                    border-b
                    border-[var(--border)]
                    py-7
                    last:border-b-0
                    sm:border-b-0
                    sm:border-r
                    sm:px-6
                    sm:py-8
                    sm:first:pr-0
                    sm:last:border-r-0
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      text-[10px]
                      font-semibold
                      tracking-[0.14em]
                      text-[var(--clay)]
                      sm:text-[11px]
                    "
                  >
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-[13px] font-semibold sm:mt-5 sm:text-sm">
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-xs
                      text-[11px]
                      leading-7
                      text-[var(--muted)]
                      sm:mt-3
                      sm:text-xs
                    "
                  >
                    {item.text}
                  </p>

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0
                      right-0
                      h-px
                      w-0
                      bg-[var(--clay)]
                      transition-all
                      duration-300
                      group-hover:w-12
                      sm:right-6
                    "
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}