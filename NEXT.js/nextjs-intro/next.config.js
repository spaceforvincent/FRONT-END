/** @type {import('next').NextConfig} */
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
module.exports = {
  reactStrictMode: true,
  async redirects() { //source의 URL을 destination으로 바꿔서 연결해줌
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() { //실제 URL은 destination 이지만 source라고 구라침
    return [
      {
        source: "/api/movies",
        destination: `http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `http://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
