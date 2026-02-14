import type { Config } from "@react-router/dev/config";

const isCloudflare = process.env.CLOUDFLARE === "true";

export default {
  ssr: true,
  future: {
    unstable_viteEnvironmentApi: isCloudflare,
  },
} satisfies Config;
