import { Link } from "react-router-dom";

function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">درباره‌ی این فروشگاه</h1>

          <p className="text-gray-500">
            جایی که تکنولوژی تصمیم گرفته کمی به گذشته برگردد.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">درباره‌ی پروژه</h2>

          <p className="leading-7 text-gray-600">
            شیتی‌کالا یک فروشگاه اینترنتی کوچک است که با React، TypeScript و
            Tailwind CSS ساخته شده و هدفش تمرین و پیاده‌سازی یک پروژه‌ی واقعی
            فرانت‌اند، از رابط کاربری گرفته تا مدیریت state و routing بوده است.
          </p>

          <p className="leading-7 text-gray-600">
            {" "}
            در طول ساخت پروژه با مفاهیمی مثل React Context، مدیریت سبد خرید،
            جستجو، فیلتر و مرتب‌سازی محصولات، React Router، TypeScript و طراحی
            responsive با Tailwind CSS سروکله زدم. طبیعتاً همه‌چیز هم آن‌قدر
            راحت پیش نرفت که فقط بنویسم و تمام شود. البته مرسی از ChatGPT که
            کنارم بود و وقتی صدبار می‌پرسیدم «کاربرد Context Provider چیه؟»، بار
            صد و یکم هم دوباره توضیح می‌داد.{" "}
          </p>

          <p className="leading-7 text-gray-600">
            یکی از چیزهایی که در طول پروژه یاد گرفتم این بود که بعضی تصمیم‌های
            کوچک در ابتدای پروژه، بعدها می‌توانند به یک دردسر نسبتاً بزرگ تبدیل
            شوند.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">یکی از اشتباهات من</h2>

          <p className="leading-7 text-gray-600">
            مثلاً همین دکمه‌ی «بازگشت به فروشگاه» را به صورت یک کامپوننت
            reusable نساختم و هر بار آن را جداگانه داخل صفحات نوشتم. نتیجه؟ حالا
            اگر تصمیم بگیرم ظاهر این دکمه را کمی تغییر بدهم، باید کل پروژه را
            بگردم و ببینم کجا از آن استفاده کرده‌ام تا همه را دستی بروزرسانی
            کنم.
          </p>

          <blockquote dir="ltr" className="font-medium italic text-gray-500">
            Sometimes my genius is almost frightening.
          </blockquote>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">چرا این محصولات؟</h2>

          <p className="leading-7 text-gray-600">
            چون ظاهراً ساختن یک فروشگاه با جدیدترین گوشی‌های پرچمدار زیادی منطقی
            بود. بنابراین تصمیم گرفتم سراغ محصولاتی بروم که بعضی از آن‌ها
            احتمالاً از آخرین باری که دیده‌اید، خاطرات بیشتری دارند.
          </p>

          <p className="leading-7 text-gray-600">
            بله، Nokia N900 هم اینجاست. هنوز هم زنده است. به نوعی.
          </p>
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
