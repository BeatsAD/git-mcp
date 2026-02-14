import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isCloudflare = process.env.CLOUDFLARE === "true";

export default defineConfig(async () => {
  const plugins = [tailwindcss(), reactRouter(), tsconfigPaths()];

  if (isCloudflare) {
    const { cloudflare } = await import("@cloudflare/vite-plugin");
    plugins.unshift(cloudflare({ viteEnvironment: { name: "ssr" } }));
  }

  return { plugins };
});
