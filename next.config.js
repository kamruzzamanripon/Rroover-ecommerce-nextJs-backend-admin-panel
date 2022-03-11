/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['images.unsplash.com', 'via.placeholder.com', 'randomuser.me', 'https://via.placeholder.com/150'],
  },
  env: {
    ImagebaseUrl:'http://127.0.0.1:8000/',
    baseUrl:'http://localhost:8000/api/v1/backend'
  },
}

module.exports = nextConfig
