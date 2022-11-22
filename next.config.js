/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// module.exports = () => {
//   const rewrites = () => {
//     return [
//       {
//         source: "/cats",
//         destination: "https://meowfacts.herokuapp.com",
//       },
//       {
//         source: "/",
//         destination: "https://avetti-subsite.netlify.app",
//       },
//     ];
//   };
//   return {
//     rewrites,
//     reactStrictMode: true,
//     swcMinify: true,
//   };
// };
