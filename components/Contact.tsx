import {
  ArrowUpLeft,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section border-t border-[var(--border)]"
    >
      <div className="container">
        <div
          className="
            relative
            overflow-hidden
            rounded-[20px]
            bg-[var(--foreground)]
            px-5
            py-12
            text-[var(--background)]
            sm:px-8
            sm:py-14
            md:rounded-[24px]
            md:px-12
            md:py-16
            lg:px-16
            lg:py-20
          "
        >
          {/* Ambient decoration */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-32
              -top-32
              h-72
              w-72
              rounded-full
              border
              border-white/10
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-40
              -right-24
              h-96
              w-96
              rounded-full
              border
              border-white/10
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[18%]
              top-[18%]
              h-40
              w-40
              rounded-full
              bg-[var(--clay)]
              opacity-[0.08]
              blur-[80px]
            "
          />

          <div className="relative">
            {/* Header */}
            <div className="max-w-3xl">
              <span className="eyebrow text-[var(--terracotta)]">
                سفارش و همکاری
              </span>

              <h2
                id="contact-title"
                className="
                  font-display
                  mt-6
                  max-w-2xl
                  text-[2rem]
                  font-semibold
                  leading-[1.4]
                  tracking-[-0.02em]
                  sm:text-[2.5rem]
                  md:mt-7
                  md:text-[3.5rem]
                "
              >
                برای سفارش،
                <br />
                با ما در تماس باشید.
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-[13px]
                  leading-8
                  text-white/55
                  sm:text-sm
                  md:mt-7
                  md:text-[15px]
                "
              >
                برای دریافت اطلاعات بیشتر، استعلام قیمت و
                هماهنگی سفارش، مستقیماً با کارگاه در تماس باشید.
              </p>
            </div>

            {/* Contact cards */}
            <div
              className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3"
              aria-label="راه‌های ارتباطی"
            >
              {/* Phone */}
              <a
                href={`tel:${site.phone}`}
                aria-label={`تماس با کارگاه به شماره ${site.phone}`}
                className="
                  group
                  rounded-[14px]
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/[0.07]
                  sm:rounded-[16px]
                  sm:p-6
                "
              >
                <div className="flex items-center justify-between">
                  <div
                    aria-hidden="true"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white/[0.08]
                    "
                  >
                    <Phone
                      size={17}
                      strokeWidth={1.7}
                    />
                  </div>

                  <ArrowUpLeft
                    aria-hidden="true"
                    size={17}
                    strokeWidth={1.7}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />
                </div>

                <p className="mt-7 text-[11px] text-white/45 sm:mt-8 sm:text-xs">
                  تماس مستقیم با کارگاه
                </p>

                <p
                  dir="ltr"
                  className="
                    mt-2
                    text-lg
                    font-medium
                    tracking-wide
                    sm:text-xl
                  "
                >
                  {site.phone}
                </p>

                <span className="mt-3 block text-[10px] text-white/30">
                  برای سفارش و استعلام تماس بگیرید
                </span>
              </a>

              {/* Google Maps */}
              <a
                href={site.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="مشاهده آدرس کارگاه در Google Maps"
                className="
                  group
                  rounded-[14px]
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/[0.07]
                  sm:rounded-[16px]
                  sm:p-6
                "
              >
                <div className="flex items-center justify-between">
                  <div
                    aria-hidden="true"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white/[0.08]
                    "
                  >
                    <MapPin
                      size={17}
                      strokeWidth={1.7}
                    />
                  </div>

                  <ArrowUpLeft
                    aria-hidden="true"
                    size={17}
                    strokeWidth={1.7}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />
                </div>

                <p className="mt-7 text-[11px] text-white/45 sm:mt-8 sm:text-xs">
                  آدرس کارگاه
                </p>

                <p className="mt-2 text-[12px] leading-7 text-white/85 sm:text-sm">
                  {site.address.city}
                  <br />
                  {site.address.text}
                </p>

                <span className="mt-3 block text-[10px] text-white/30">
                  مشاهده موقعیت در Google Maps
                </span>
              </a>

              {/* Rubika */}
              <a
                href={site.links.rubika}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="مشاهده صفحه Ceramicse در روبیکا"
                className="
                  group
                  rounded-[14px]
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/[0.07]
                  sm:rounded-[16px]
                  sm:p-6
                "
              >
                <div className="flex items-center justify-between">
                  <div
                    aria-hidden="true"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white/[0.08]
                    "
                  >
                    <Send
                      size={17}
                      strokeWidth={1.7}
                    />
                  </div>

                  <ArrowUpLeft
                    aria-hidden="true"
                    size={17}
                    strokeWidth={1.7}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />
                </div>

                <p className="mt-7 text-[11px] text-white/45 sm:mt-8 sm:text-xs">
                  پیام‌رسان روبیکا
                </p>

                <p
                  dir="ltr"
                  className="
                    mt-2
                    text-[13px]
                    font-medium
                    tracking-wide
                    sm:text-sm
                  "
                >
                  @roshoyiseramiki
                </p>

                <span className="mt-3 block text-[10px] text-white/30">
                  مشاهده صفحه Ceramicse در روبیکا
                </span>
              </a>
            </div>

            {/* Bottom CTA */}
            <div
              className="
                mt-5
                flex
                flex-col
                gap-5
                border-t
                border-white/10
                pt-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <span className="block text-[11px] font-medium text-white/70">
                  آماده همکاری هستیم.
                </span>

                <p className="mt-1 max-w-md text-[10px] leading-6 text-white/35 sm:text-xs">
                  برای دریافت اطلاعات مدل‌ها و هماهنگی سفارش
                  با کارگاه تماس بگیرید.
                </p>
              </div>

              <a
                href={`tel:${site.phone}`}
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-[8px]
                  bg-[var(--background)]
                  px-5
                  py-3.5
                  text-[13px]
                  font-semibold
                  !text-[var(--foreground)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-white
                  hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]
                  sm:w-fit
                "
              >
                تماس برای سفارش

                <Phone
                  aria-hidden="true"
                  size={15}
                  strokeWidth={1.8}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}