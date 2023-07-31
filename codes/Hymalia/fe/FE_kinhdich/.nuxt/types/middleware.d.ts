import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "D:/_Web_PJ/Project/FE_kinhdich/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}