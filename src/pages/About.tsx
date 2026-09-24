import { Link } from "react-router-dom";

function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">درباره‌ی این فروشگاه</h1>

          <p className="text-gray-500">
            یک فروشگاه اینترنتی برای چیزهایی که احتمالاً دیگر تولید نمی‌شوند.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">درباره‌ی پروژه</h2>

          <p className="leading-7 text-gray-600">
            شیتی‌کالا یک پروژه‌ی تمرینی با React، TypeScript و Tailwind CSS است.
            ایده‌اش ساده بود: یک فروشگاه کوچک بسازم و در طول ساختش چیزهایی را که
            یاد گرفته‌ام واقعاً استفاده کنم، نه اینکه فقط چند تا tutorial ببینم
            و فکر کنم یاد گرفته‌ام.
          </p>

          <p className="leading-7 text-gray-600">
            توی پروژه از React Context برای سبد خرید، React Router برای صفحات،
            TypeScript برای typeها و Tailwind برای ظاهر سایت استفاده کردم.
            جستجو، فیلتر، مرتب‌سازی، صفحه‌ی محصول و سبد خرید هم جزو همین پروژه
            هستند.
          </p>

          <p className="leading-7 text-gray-600">
            البته ساختنش همیشه هم تمیز و مرتب پیش نرفت. بعضی چیزها را چند بار
            عوض کردم و بعضی جاها تازه بعد از تمام شدن یک بخش فهمیدم که می‌شد از
            اول بهتر طراحی‌اش کرد. فکر کنم همین قسمت برای من از خودِ کدنویسی
            مفیدتر بود.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">یکی از اشتباهات من</h2>

          <p className="leading-7 text-gray-600">
            مثلاً دکمه‌ی «بازگشت به فروشگاه» را از اول به صورت یک کامپوننت
            reusable نساختم و هر بار جداگانه داخل صفحات نوشتم. آن موقع مسئله‌ی
            بزرگی به نظر نمی‌رسید، ولی بعداً فهمیدم اگر بخواهم ظاهرش را تغییر
            بدهم، باید چند جای مختلف پروژه را پیدا کنم و تغییر بدهم.
          </p>

          <p className="leading-7 text-gray-600">
            از آن اشتباه‌های کوچکی بود که موقع ساختن پروژه خیلی راحت از کنارش رد
            می‌شوی، ولی بعداً برمی‌گردد و یقه‌ات را می‌گیرد.
          </p>

          <blockquote dir="ltr" className="font-medium italic text-gray-500">
            Sometimes my genius is almost frightening.
          </blockquote>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            بازگشت به فروشگاه
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
