# ShittyKala

A small e-commerce project built with React, TypeScript, Tailwind CSS, and React Router.

## About

این پروژه یک فروشگاه اینترنتی کوچک است که با React، TypeScript و
Tailwind CSS ساخته شده و هدفش تمرین و پیاده‌سازی یک پروژه‌ی واقعی
فرانت‌اند، از رابط کاربری گرفته تا مدیریت state و routing بوده است.

در طول ساخت پروژه با مفاهیمی مثل React Context، مدیریت سبد خرید،
جستجو، فیلتر و مرتب‌سازی محصولات، React Router، TypeScript و طراحی
responsive با Tailwind CSS سروکله زدم. طبیعتاً همه‌چیز هم آن‌قدر راحت
پیش نرفت که فقط بنویسم و تمام شود. البته مرسی از ChatGPT که کنارم بود
و وقتی صدبار می‌پرسیدم «کاربرد Context Provider چیه؟»، بار صد و یکم هم
دوباره توضیح می‌داد.

یکی از چیزهایی که در طول پروژه یاد گرفتم این بود که بعضی تصمیم‌های
کوچک در ابتدای پروژه، بعدها می‌توانند به یک دردسر نسبتاً بزرگ تبدیل شوند.

مثلاً همین دکمه‌ی «بازگشت به فروشگاه» را به صورت یک کامپوننت reusable
نساختم و هر بار آن را جداگانه داخل صفحات نوشتم. نتیجه؟ حالا اگر تصمیم
بگیرم ظاهر این دکمه را کمی تغییر بدهم، باید کل پروژه را بگردم و ببینم
کجا از آن استفاده کرده‌ام تا همه را دستی بروزرسانی کنم.

> Sometimes my genius is almost frightening.

### Why these products?

چون ظاهراً ساختن یک فروشگاه با جدیدترین گوشی‌های پرچمدار زیادی منطقی
بود. بنابراین تصمیم گرفتم سراغ محصولاتی بروم که بعضی از آن‌ها احتمالاً
از آخرین باری که دیده‌اید، خاطرات بیشتری دارند.

بله، Nokia N900 هم اینجاست. هنوز هم زنده است. به نوعی.

## Features

- Product search
- Category filtering
- Brand filtering
- Price sorting
- Product details
- Shopping cart
- Quantity management
- Responsive design
- 404 Not Found page

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router
- Context API
- Vite

## Screenshots

### 1. Home

![Home Page](./screenshots/home.png)

### 2. Product Details

![Product Details](./screenshots/product-details.png)

### 3. Search, Filter & Sort

![Search, Filter & Sort](./screenshots/search-filter-sort.png)

### 4. Shopping Cart

![Shopping Cart](./screenshots/cart.png)

### 5. About

![About Page](./screenshots/about.png)
