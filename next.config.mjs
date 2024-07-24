/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    // Configuración para manejar archivos de video
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/videos/', // Ruta pública donde se servirán los videos
            outputPath: 'static/videos/' // Ruta de salida en el directorio de construcción
          }
        }
      ]
    })

    return config
  },

};

export default nextConfig;
