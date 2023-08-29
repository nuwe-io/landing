const { BUSINESS_URL, DEV_URL } = process.env
const pages = require("./pages")


const sharedPaths = [
  {
    source: "/business",
    destination: `${BUSINESS_URL}/business`,
  },
  {
    source: "/business/:path*",
    destination: `${BUSINESS_URL}/business/:path*`,
  },
  {
    source: "/dev",
    destination: `${DEV_URL}/dev`,
  },
  {
    source: "/dev/:path*",
    destination: `${DEV_URL}/dev/:path*`,
  }
]


// This redirects are for the old pages and will be removed in the future
const redirects = [
  {
    source: "/dev/login",
    destination: "/dev",
    permanent: true,
  },
  {
    source: "/blog",
    destination: `https://blog.nuwe.io/`,
    permanent: true,
  },
  {
    source: "/blog/:path*",
    destination: `https://blog.nuwe.io/`,
    permanent: true,
  },
  {
    source: "/blog/blog/:path*",
    destination: `https://blog.nuwe.io/`,
    permanent: true,
  },
  {
    source: "/event/:path*",
    destination: `${DEV_URL}/dev/competitions/:path*`,
    permanent: true,
  },
  {
    source: "/competitions",
    destination: `${DEV_URL}/dev/competitions`,
    permanent: true,
  },
  {
    source: "/competitions/:path*",
    destination: `${DEV_URL}/dev/competitions/:path*`,
    permanent: true,
  },
  {
    source: "/train",
    destination: `${DEV_URL}/dev/tech-hubs`,
    permanent: true,
  },
  {
    source: "/train/:path*",
    destination: `${DEV_URL}/dev/tech-hubs/:path*`,
    permanent: true,
  },
  {
    source: "/dev/train",
    destination: `${DEV_URL}/dev/tech-hubs`,
    permanent: true,
  },
  {
    source: "/dev/train/:path*",
    destination: `${DEV_URL}/dev/tech-hubs/:path*`,
    permanent: true,
  },
  {
    source: "/developers/events/:path*",
    destination: `${DEV_URL}/dev/competitions/:path*`,
    permanent: true,
  },
  {
    source: "/login",
    destination: `${DEV_URL}/dev`,
    permanent: true,
  },
  {
    source: "/posts",
    destination: `https://blog.nuwe.io/`,
    permanent: true,
  },
  {
    source: "/posts/:path*",
    destination: `https://blog.nuwe.io/`,
    permanent: true,
  },
  {
    source: "/users/:path*",
    destination: `${DEV_URL}/dev/users/:path*`,
    permanent: true,
  }
]

module.exports = {
  output: "standalone",
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        ...pages,
        ...sharedPaths
      ],
      afterFiles: [
        ...pages,
        ...sharedPaths
      ],
      fallback: [
        ...pages,
        {
          source: "/:path*",
          destination: `/:path*`,
        },
        ...sharedPaths
      ],
    }
  },
  async redirects() {
    return redirects
  }
}
