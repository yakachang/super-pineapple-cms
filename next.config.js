const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = async phase => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: phase !== PHASE_DEVELOPMENT_SERVER ? "export" : undefined,
    images: {
      unoptimized: true,
    },
    skipTrailingSlashRedirect: true,
  }

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    nextConfig.rewrites = async () => {
      return [
        {
          source: "/api/super/:path*/",
          destination:
            "https://pineapple-api-ogiggielsa-de.a.run.app/api/super/:path*/",
        },
        {
          source: "/api/super/:path*",
          destination:
            "https://pineapple-api-ogiggielsa-de.a.run.app/api/super/:path*",
        },
      ]
    }
  }
  return nextConfig
}
