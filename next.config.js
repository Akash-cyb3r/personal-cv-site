/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
// const withVideos = require("next-videos");

// module.exports = withVideos();

module.exports = nextConfig;

// module.exports = {
//   webpack: (config, options) => {
//     config.module.rules.push(
//       {
//         test: /\.(png|jpeg)$/,
//         loader: "url-loader?limit=8192",
//       }
//       // {
//       //   test: /\.mp4$/,
//       //   use: "file-loader?name=videos/[name].[ext]",
//       // }
//     );
//     return config;
//   },
// };

module.exports = {
  images: {
    disableStaticImages: true,
  },
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.(png|jpeg)$/,
        use: [
          options.defaultLoaders.babel,
          {
            loader: "url-loader?limit=8192",
          },
        ],
      },
      {
        test: /\.(mov|mp4)$/,
        use: ["file-loader"],
      }
    );

    return config;
  },
};
