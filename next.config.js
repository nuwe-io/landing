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
}
