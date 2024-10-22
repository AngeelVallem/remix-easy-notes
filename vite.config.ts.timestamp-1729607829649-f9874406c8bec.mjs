// vite.config.ts
import { vitePlugin as remix } from "file:///C:/Users/Admin/workspace/fun/easy-notes/node_modules/.pnpm/@remix-run+dev@2.13.1_@remix-run+react@2.13.1_@remix-run+serve@2.13.1_typescript@5.1.6_vite@5.1.0/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///C:/Users/Admin/workspace/fun/easy-notes/node_modules/.pnpm/vite@5.1.0/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///C:/Users/Admin/workspace/fun/easy-notes/node_modules/.pnpm/vite-tsconfig-paths@4.2.1_typescript@5.1.6_vite@5.1.0/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { vanillaExtractPlugin } from "file:///C:/Users/Admin/workspace/fun/easy-notes/node_modules/.pnpm/@vanilla-extract+vite-plugin@4.0.16_vite@5.1.0/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
var vite_config_default = defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true
      }
    }),
    tsconfigPaths(),
    vanillaExtractPlugin()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pblxcXFx3b3Jrc3BhY2VcXFxcZnVuXFxcXGVhc3ktbm90ZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEFkbWluXFxcXHdvcmtzcGFjZVxcXFxmdW5cXFxcZWFzeS1ub3Rlc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQWRtaW4vd29ya3NwYWNlL2Z1bi9lYXN5LW5vdGVzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgdml0ZVBsdWdpbiBhcyByZW1peCB9IGZyb20gXCJAcmVtaXgtcnVuL2RldlwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5pbXBvcnQgeyB2YW5pbGxhRXh0cmFjdFBsdWdpbiB9IGZyb20gXCJAdmFuaWxsYS1leHRyYWN0L3ZpdGUtcGx1Z2luXCI7XG5cbmRlY2xhcmUgbW9kdWxlIFwiQHJlbWl4LXJ1bi9ub2RlXCIge1xuICBpbnRlcmZhY2UgRnV0dXJlIHtcbiAgICB2M19zaW5nbGVGZXRjaDogdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVtaXgoe1xuICAgICAgZnV0dXJlOiB7XG4gICAgICAgIHYzX2ZldGNoZXJQZXJzaXN0OiB0cnVlLFxuICAgICAgICB2M19yZWxhdGl2ZVNwbGF0UGF0aDogdHJ1ZSxcbiAgICAgICAgdjNfdGhyb3dBYm9ydFJlYXNvbjogdHJ1ZSxcbiAgICAgICAgdjNfc2luZ2xlRmV0Y2g6IHRydWUsXG4gICAgICAgIHYzX2xhenlSb3V0ZURpc2NvdmVyeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgdHNjb25maWdQYXRocygpLFxuICAgIHZhbmlsbGFFeHRyYWN0UGx1Z2luKCksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVQsU0FBUyxjQUFjLGFBQWE7QUFDdlYsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUyw0QkFBNEI7QUFRckMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osUUFBUTtBQUFBLFFBQ04sbUJBQW1CO0FBQUEsUUFDbkIsc0JBQXNCO0FBQUEsUUFDdEIscUJBQXFCO0FBQUEsUUFDckIsZ0JBQWdCO0FBQUEsUUFDaEIsdUJBQXVCO0FBQUEsTUFDekI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxJQUNkLHFCQUFxQjtBQUFBLEVBQ3ZCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
