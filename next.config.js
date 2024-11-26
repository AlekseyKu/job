/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https', // или 'https' в зависимости от сервера
        hostname: 'cmsbase24.top', // IP-адрес Strapi-сервера
        port: '', // порт, если используется
        pathname: '/**', // Этот паттерн разрешает любые изображения с этого хоста
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
