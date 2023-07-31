import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "D:/_Web_PJ/Project/FE_kinhdich/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}