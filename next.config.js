const { BUSINESS_URL, DEV_URL, BACKOFFICE_URL, BLOG_URL } = process.env
const pages = require("./pages")

module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        ...pages,
        {
          source: "/business",
          destination: `${BUSINESS_URL}/business/`,
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
        },
        {
          source: "/backoffice",
          destination: `${BACKOFFICE_URL}/backoffice`,
        },
        {
          source: "/backoffice/:path*",
          destination: `${BACKOFFICE_URL}/backoffice/:path*`,
        },
        {
          source: "/blog",
          destination: `${BLOG_URL}/blog`,
        },
        {
          source: "/blog/:path*",
          destination: `${BLOG_URL}/blog/:path*`,
        },
      ],
      afterFiles: [
        ...pages,
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
        },
        {
          source: "/backoffice",
          destination: `${BACKOFFICE_URL}/backoffice`,
        },
        {
          source: "/backoffice/:path*",
          destination: `${BACKOFFICE_URL}/backoffice/:path*`,
        },
        {
          source: "/blog",
          destination: `${BLOG_URL}/blog`,
        },
        {
          source: "/blog/:path*",
          destination: `${BLOG_URL}/blog/:path*`,
        },
      ],
      fallback: [
        ...pages,
        {
          source: "/:path*",
          destination: `/:path*`,
        },
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
        },
        {
          source: "/backoffice",
          destination: `${BACKOFFICE_URL}/backoffice`,
        },
        {
          source: "/backoffice/:path*",
          destination: `${BACKOFFICE_URL}/backoffice/:path*`,
        },
        {
          source: "/blog",
          destination: `${BLOG_URL}/blog`,
        },
        {
          source: "/blog/:path*",
          destination: `${BLOG_URL}/blog/:path*`,
        },
      ],
    }
  },
}
