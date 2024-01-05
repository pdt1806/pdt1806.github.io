import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), pluginPurgeCss()],
});
