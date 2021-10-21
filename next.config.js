module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        // needs testing
        {
          source: "/",
          destination: "/",
          has: [
            { type: "header", key: "x-vicinity-cf-secret", value: "example" },
          ],
        },
        {
          source: "/:path*",
          destination: "/:path*",
          has: [
            { type: "header", key: "x-vicinity-cf-secret", value: "example" },
          ],
        },
        {
          source: "/(.*)",
          destination: "/no-header",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};
