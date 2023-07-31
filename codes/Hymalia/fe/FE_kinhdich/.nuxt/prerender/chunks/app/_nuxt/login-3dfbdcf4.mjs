import { u as useHomeStore, _ as __nuxt_component_0, a as __nuxt_component_2 } from './homeStore-19a9ff2f.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-563b35af.mjs';
import { unref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/vue/server-renderer/index.mjs';
import { Form, Field, ErrorMessage } from 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/vee-validate/dist/vee-validate.js';
import './el-icon-c0a0f4d5.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/lodash-unified/import.js';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/@vue/shared/index.js';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
import '../server.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/ofetch/dist/node.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/hookable/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/unctx/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/h3/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/ufo/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/unhead/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/destr/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/scule/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/klona/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/ohash/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/unstorage/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/pathe/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/axios/index.js';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/@vueuse/core/index.mjs';

const __default__ = {
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      code: ""
    };
  },
  methods: {
    validateCode(value) {
      if (!value) {
        return "Vui l\xF2ng \u0111i\u1EC1n th\xF4ng tin";
      }
      return true;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const homeStore = useHomeStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderLogin = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_FooterLogin = __nuxt_component_2;
      _push(ssrRenderComponent(unref(Form), mergeProps({
        onSubmit: ($event) => unref(homeStore).checkNumber(unref(homeStore).number)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HeaderLogin, null, null, _parent2, _scopeId));
            _push2(`<div class="mt-24 w-full h-[60vh] flex justify-center items-center bg-white"${_scopeId}><div class="desktop:w-[50%] laptop:w-[80%] tablet:w-[90%] mobile:w-[95%] p-4 loginShadow rounded-2xl bg-[#E2FFEB]"${_scopeId}><h1 class="uppercase desktop:text-[36px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5 text-[#0a3b50] pt-4 text-center"${_scopeId}> Tham gia l\u1EDBp h\u1ECDc </h1><p class="text-base text-[#009030] font-semibold pb-2"${_scopeId}> M\xE3 h\u1ECDc vi\xEAn <span class="text-red-600"${_scopeId}>*</span></p><div class="w-full flex flex-col mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "code",
              type: "text",
              rules: _ctx.validateCode,
              modelValue: unref(homeStore).number,
              "onUpdate:modelValue": ($event) => unref(homeStore).number = $event,
              placeholder: "\u0110i\u1EC1n m\xE3 h\u1ECDc vi\xEAn",
              class: "border-2 border-[#ced4da] px-4 py-2 rounded-lg focus:border-[#009030]"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "code",
              class: "text-red-600 text-sm mt-2 mx-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-center w-full mb-4"${_scopeId}><p class="text-lg font-medium"${_scopeId}> B\u1EA1n ch\u01B0a l\xE0 h\u1ECDc vi\xEAn? `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/signUp",
              class: "font-semibold text-[#007bff]",
              onClick: ($event) => unref(homeStore).resetModal()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0110\u0103ng k\xFD ngay `);
                } else {
                  return [
                    createTextVNode(" \u0110\u0103ng k\xFD ngay ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p></div><div class="w-full flex justify-center items-center"${_scopeId}><button class="bgMainColor text-center px-12 py-3 rounded-full text-white ease-in duration-300 hover:opacity-80 w-full"${_scopeId}> V\xE0o L\u1EDBp </button></div></div></div>`);
            _push2(ssrRenderComponent(_component_FooterLogin, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_HeaderLogin),
              createVNode("div", { class: "mt-24 w-full h-[60vh] flex justify-center items-center bg-white" }, [
                createVNode("div", { class: "desktop:w-[50%] laptop:w-[80%] tablet:w-[90%] mobile:w-[95%] p-4 loginShadow rounded-2xl bg-[#E2FFEB]" }, [
                  createVNode("h1", { class: "uppercase desktop:text-[36px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5 text-[#0a3b50] pt-4 text-center" }, " Tham gia l\u1EDBp h\u1ECDc "),
                  createVNode("p", { class: "text-base text-[#009030] font-semibold pb-2" }, [
                    createTextVNode(" M\xE3 h\u1ECDc vi\xEAn "),
                    createVNode("span", { class: "text-red-600" }, "*")
                  ]),
                  createVNode("div", { class: "w-full flex flex-col mb-4" }, [
                    createVNode(unref(Field), {
                      name: "code",
                      type: "text",
                      rules: _ctx.validateCode,
                      modelValue: unref(homeStore).number,
                      "onUpdate:modelValue": ($event) => unref(homeStore).number = $event,
                      placeholder: "\u0110i\u1EC1n m\xE3 h\u1ECDc vi\xEAn",
                      class: "border-2 border-[#ced4da] px-4 py-2 rounded-lg focus:border-[#009030]"
                    }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(ErrorMessage), {
                      name: "code",
                      class: "text-red-600 text-sm mt-2 mx-2"
                    })
                  ]),
                  createVNode("div", { class: "text-center w-full mb-4" }, [
                    createVNode("p", { class: "text-lg font-medium" }, [
                      createTextVNode(" B\u1EA1n ch\u01B0a l\xE0 h\u1ECDc vi\xEAn? "),
                      createVNode(_component_NuxtLink, {
                        to: "/signUp",
                        class: "font-semibold text-[#007bff]",
                        onClick: ($event) => unref(homeStore).resetModal()
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0110\u0103ng k\xFD ngay ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "w-full flex justify-center items-center" }, [
                    createVNode("button", { class: "bgMainColor text-center px-12 py-3 rounded-full text-white ease-in duration-300 hover:opacity-80 w-full" }, " V\xE0o L\u1EDBp ")
                  ])
                ])
              ]),
              createVNode(_component_FooterLogin)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-3dfbdcf4.mjs.map
