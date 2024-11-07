/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https', // или 'https' в зависимости от твоего сервера
        hostname: 'cmsbase24.top', // IP-адрес Strapi-сервера
        port: '', // Укажи порт, если он используется
        pathname: '/**', // Этот паттерн разрешает любые изображения с этого хоста
      },
    ],
  },
}

module.exports = nextConfig;
