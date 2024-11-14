/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Statik dışa aktarma ayarı
  trailingSlash: true, // URL'lerin sonuna eğik çizgi eklemek için
  images: {
    domains: [
      'via.placeholder.com',
      'landingfoliocom.imgix.net',
      'unsplash.com',
      'w3.org',
      'www.citynet.az',
      'www.google.com',
      'ilrorwxhjqkkjr5q-static.micyjz.com',
    ],
  },
};

export default nextConfig;
