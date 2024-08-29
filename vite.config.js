import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      data: "/src/data",
      components: "/src/components",
      store: "/src/redux",
    },
  },
  plugins: [react()],
});
