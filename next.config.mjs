/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'X-Content-Type-Options',
                value: 'nosniff',
              }
            ],
          },
          {
            source: '/(.*\\.svg)',
            headers: [
              {
                "key": "Content-Type",
                "value": "image/svg+xml; charset=utf-8"
              },
            ],
          },
        ]
    },
};

export default nextConfig;