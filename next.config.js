/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // Кешируем изображения на месяц
    remotePatterns: [
      {
        protocol: 'https', // или 'http' в зависимости от сервера
        hostname: 'cmsbase24.top', // IP-адрес Strapi-сервера
        port: '', // порт, если используется
        pathname: '/**', // Этот паттерн разрешает любые изображения с этого хоста
      },
      {
        protocol: 'https',
        hostname: 'mc.yandex.ru',
        port: '',
        pathname: '/**', // Разрешает любые изображения с этого домена
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt', // Когда пользователь запрашивает /robots.txt
        destination: '/api/robots', // Перенаправляем запрос на API-роут
      },
    ];
  },
}

module.exports = nextConfig;
