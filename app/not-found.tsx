import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        px-5
        py-20
        text-center
      "
    >
      <div className="w-full max-w-xl">
        {/* Number */}
        <span
          aria-hidden="true"
          className="
            english-display
            block
            text-[7rem]
            leading-none
            text-[var(--clay)]
            opacity-20
            sm:text-[10rem]
          "
        >
          404
        </span>

        {/* Content */}
        <div className="-mt-6 sm:-mt-10">
          <span className="eyebrow">
            صفحه پیدا نشد
          </span>

          <h1
            className="
              font-display
              mt-5
              text-2xl
              font-semibold
              leading-[1.5]
              tracking-[-0.02em]
              sm:text-3xl
            "
          >
            این صفحه وجود ندارد.
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-md
              text-[13px]
              leading-8
              text-[var(--muted)]
              sm:text-sm
            "
          >
            ممکن است آدرس صفحه تغییر کرده باشد یا
            لینک واردشده صحیح نباشد.
          </p>

          {/* Actions */}
          <div
            className="
              mt-7
              flex
              flex-col
              justify-center
              gap-2.5
              sm:flex-row
              sm:gap-3
            "
          >
            <Link
              href="/"
              className="button button-primary"
            >
              <Home
                aria-hidden="true"
                size={15}
                strokeWidth={1.8}
              />

              بازگشت به صفحه اصلی
            </Link>

            <Link
              href="/#works"
              className="button button-outline"
            >
              مشاهده نمونه‌کارها

              <ArrowRight
                aria-hidden="true"
                size={15}
                strokeWidth={1.8}
              />
            </Link>
          </div>
        </div>

        {/* Brand */}
        <div className="mt-14">
          <span className="english-display text-sm tracking-[0.18em] text-[var(--muted)]">
            CERAMICSE
          </span>
        </div>
      </div>
    </main>
  );
}