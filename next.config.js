/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http', // или 'https' в зависимости от твоего сервера
        hostname: '62.84.182.126', // IP-адрес Strapi-сервера
        port: '1337', // Укажи порт, если он используется
        pathname: '/**', // Этот паттерн разрешает любые изображения с этого хоста
      },
    ],
  },
}

module.exports = nextConfig;
