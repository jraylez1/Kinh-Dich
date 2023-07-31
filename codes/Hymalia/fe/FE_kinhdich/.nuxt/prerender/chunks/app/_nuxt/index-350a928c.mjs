import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-563b35af.mjs';
import { useSSRContext, mergeProps, withCtx, unref, createVNode, createTextVNode } from 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/vue/server-renderer/index.mjs';
import { u as user_filled_default, c as calendar_default, a as avatar_default, b as collection_default, l as location_default, d as chrome_filled_default, _ as _imports_0$1, p as phone_filled_default, m as message_default, E as ElIcon } from './el-icon-c0a0f4d5.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/h3/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/devalue/index.js';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/ofetch/dist/node.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/destr/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/hookable/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/scule/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/klona/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/defu/dist/defu.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/ohash/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/unstorage/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/pathe/dist/index.mjs';
import '../server.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/unctx/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/unhead/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/lodash-unified/import.js';
import 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/@vue/shared/index.js';

const _sfc_main$8 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-24 py-5 px-12 flex justify-between items-center w-full fixed top-0 left-0 right-0 z-[99] bg-white shadow-xl" }, _attrs))}><div class="w-auto flex justify-start items-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="" class="h-20 w-[70px] mr-4"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            alt: "",
            class: "h-20 w-[70px] mr-4"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="text-center desktop:block laptop:block tablet:block mobile:hidden"><h1 class="desktop:text-2xl laptop:text-xl tablet:text-lg mobile:text-sm font-bold leading-[1em] my-1 text-[#009030] text-justify uppercase"> H\u1ECDc vi\u1EC7n y d\u01B0\u1EE3c c\u1ED5 truy\u1EC1n Vi\u1EC7t Nam </h1><span class="text-[#0a3b50] uppercase desktop:text-xl laptop:text-lg tablet:text-sm mobile:text-xs font-light">Viet Nam university of traditional medicine</span></div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/login",
    id: "linklogin",
    class: "bg-transparent border-2 border-[#009030] text-center text-[#009030] px-8 py-3 rounded-full hover:text-white hover:bg-[#009030] hover:scale-110 ease-in duration-300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` V\xE0o L\u1EDBp `);
      } else {
        return [
          createTextVNode(" V\xE0o L\u1EDBp ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderKinhDich.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-24 grid desktop:grid-cols-2 laptop:grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 gap-4 px-5 py-16" }, _attrs))}><div class="desktop:mx-14 laptop:mx-8 tablet:mx-6 mobile:mx-4 w-full flex justify-center items-center"><div class="mb-5 w-full"><h1 class="desktop:text-[67px] laptop:text-[50px] tablet:text-[50px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5 desktop:mr-28 laptop:mr-20 tablet:mr-12 mobile:mr-8 text-[#0a3b50] text-justify"> L\u1EDBp \u0111\xE0o t\u1EA1o li\xEAn t\u1EE5c: <span class="text-[#009030]">Ch\u1EE9ng minh c\u1EA5u tr\xFAc c\u1EE7a 64 qu\u1EBB kinh d\u1ECBch</span></h1><div class="inline-block w-full desktop:text-lg laptop:text-sm tablet:text-xl mobile:text-lg leading-6 mb-8"><p class="desktop:mr-40 laptop:mr-28 tablet:mr-12 mobile:mr-12 leading-[1.8em] font-medium text-[#909090] text-justify"> Minh ch\u1EE9ng m\u1EDBi v\u1EC1 ngu\u1ED3n g\u1ED1c, s\xE1ng t\u1EA1o kinh d\u1ECBch </p><p class="desktop:mr-40 laptop:mr-28 tablet:mr-12 mobile:mr-12 leading-[1.8em] font-medium text-[#909090] text-justify"> Minh ch\u1EE9ng c\u1EE7a L\u1EA1c Vi\u1EC7t trong s\xE1ng t\u1EA1o kinh d\u1ECBch </p><p class="desktop:mr-40 laptop:mr-28 tablet:mr-12 mobile:mr-12 leading-[1.8em] font-medium text-[#909090] text-justify"> Th\u1EC3 hi\u1EC7n qu\u1EBB Kinh D\u1ECBch c\u1EE7a Trung Thi\xEAn \u0110\u1ED3 L\u1EA1c Vi\u1EC7t tr\xEAn c\u1ED5 v\u1EADt </p></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/signup",
    id: "linklogin",
    class: "bgMainColor text-center px-12 py-4 rounded-full text-white hover:scale-110 ease-in duration-300 hover:opacity-80"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u0110\u0103ng k\xFD `);
      } else {
        return [
          createTextVNode(" \u0110\u0103ng k\xFD ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="w-full flex justify-center items-center"><div class="desktop:h-[500px] laptop:h-[400px] tablet:h-[300px] mobile:h-[300px] w-full rounded-tl-[150px] rounded-br-[150px] rounded-tr-2xl rounded-bl-2xl desktop:pr-12 laptop:pr-6 tablet:pr-0 mobile:pr-0"><div class="bg-no-repeat bg-center bg-cover w-full h-full desktop:rounded-tl-[150px] laptop:rounded-tl-[150px] tablet:rounded-tl-2xl mobile:rounded-tl-2xl desktop:rounded-br-[150px] laptop:rounded-br-[150px] tablet:rounded-br-2xl mobile:rounded-br-2xl rounded-tr-2xl rounded-bl-2xl object-cover border-[#009030] border-2" style="${ssrRenderStyle({ "background-image": "url('/8.jpg')" })}"></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SlideKinhDich.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$6 = {
  __name: "AboutKinhDich",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = ElIcon;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full desktop:py-16 laptop:py-12 tablet:py-18 mobile:py-4 px-5" }, _attrs))}><div class="w-full flex justify-center items-center flex-col"><img src="https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/divider-01-min.png" alt="" class="w-[400px] h-[30px] mb-5"><div class="mb-[10px] flex justify-center items-center flex-col desktop:py-12 laptop:py-4 tablet:py-4 mobile:py-4 w-full"><h1 class="desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[36px] font-semibold leading-[1em] fontSpaceGrotesk mb-5 text-[#0a3b50] pt-4 text-center"> Th\xF4ng tin l\u1EDBp \u0111\xE0o t\u1EA1o li\xEAn t\u1EE5c </h1><span class="text-[#009030] desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[36px] font-semibold leading-[1em] fontSpaceGrotesk mb-5">Kinh D\u1ECBch v\xE0 Y h\u1ECDc</span><div class="w-full desktop:px-[200px] laptop:px-[200px] tablet:px-[40px] mobile:px-[10px] desktop:py-6 tablet:py-4 laptop:py-8 mobile:py-2"><p class="leading-[1.8em] font-medium text-[#909090] text-center"> Kh\xF3a h\u1ECDc cung c\u1EA5p c\xE1c ki\u1EBFn th\u1EE9c b\u1ED5 tr\u1EE3 v\xE0 n\xE2ng cao ki\u1EBFn th\u1EE9c v\u1EC1 Kinh D\u1ECBch \u1EE9ng d\u1EE5ng trong Y h\u1ECDc c\u1ED5 truy\u1EC3n. V\u1EADn d\u1EE5ng nh\u1EEFng l\xFD thuy\u1EBFt c\u1EE7a Kinh D\u1ECBch v\xE0o ph\u01B0\u01A1ng ph\xE1p chu\u1EA9n \u0111o\xE1n v\xE0 di\u1EC1u tr\u1ECB b\u1EC7nh b\u1EB1ng \u0110\xF4ng y. Vi\u1EC7c ch\u1EEFa b\u1EC7nh trong ng\xE0nh Y h\u1ECDc C\u1ED5 Truy\u1EC1n d\u1EF1a tr\xEAn c\u01A1 s\u1EDF di\u1EC1u ch\u1EC9nh c\xE2n b\u1EB1ng \xC2m D\u01B0\u01A1ng - Ng\u0169 H\xE0nh c\xE2n \u0111\u1ED1i, k\u1EBFt h\u1EE3p v\u1EDBi c\xE1c b\xE0i thu\u1ED1c \u0111i\u1EC1u tr\u1ECB cho hi\u1EC7u qu\u1EA3 </p></div></div></div><div class="grid desktop:grid-cols-3 laptop:grid-cols-3 tablet:grid-cols-1 mobile:grid-cols-1 gap-4 desktop:mx-14 laptop:mx-10 tablet:mx-6 mobile:mx-2"><div class="flex p-10 bg-[#EFFFF4] shadow-xl rounded-lg">`);
      _push(ssrRenderComponent(_component_el_icon, {
        color: "#009030",
        class: "no-inherit text-6xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(user_filled_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(user_filled_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ml-5"><h3 class="fontSpaceGrotesk text-2xl font-semibold leading-[1.5em] text-[#0a3b50] mb-1"> \u0110\u1ED1i t\u01B0\u1EE3ng </h3><p class="leading-[1.8em] font-medium text-[#909090] text-justify text-sm"> B\xE1c s\u0129, c\xE1n b\u1ED9 y t\u1EBF, gi\u1EA3ng vi\xEAn v\xE0 h\u1ECDc vi\xEAn trong l\u0129nh v\u1EF1c y d\u01B0\u1EE3c c\u1ED5 truy\u1EC1n c\u1EE7a c\xE1c c\u01A1 s\u1EDF y t\u1EBF, c\xE1c c\xF4ng ty, c\xE1c \u0111\u01A1n v\u1ECB v\xE0 c\xE1 nh\xE2n trong to\xE0n qu\u1ED1c </p></div></div><div class="flex p-10 bg-white">`);
      _push(ssrRenderComponent(_component_el_icon, {
        color: "#009030",
        class: "no-inherit text-6xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(calendar_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(calendar_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ml-5"><h3 class="fontSpaceGrotesk text-2xl font-semibold leading-[1.5em] text-[#0a3b50] mb-1"> S\u1ED1 bu\u1ED5i &amp; th\u1EDDi gian gi\u1EA3ng d\u1EA1y </h3><p class="leading-[1.8em] font-medium text-[#909090] text-justify text-sm"> S\u1ED1 bu\u1ED5i: 6 bu\u1ED5i (30 ti\u1EBFt) </p><p class="leading-[1.8em] font-medium text-[#909090] text-justify text-sm"> Th\u1EDDi gian d\u1EF1 ki\u1EBFn 6 - 7/2023 </p></div></div><div class="flex p-10 bg-[#EFFFF4] shadow-xl rounded-lg">`);
      _push(ssrRenderComponent(_component_el_icon, {
        color: "#009030",
        class: "no-inherit text-6xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(avatar_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(avatar_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ml-5"><h3 class="fontSpaceGrotesk text-2xl font-semibold leading-[1.5em] text-[#0a3b50] mb-1"> Gi\u1EA3ng vi\xEAn </h3><p class="leading-[1.8em] font-medium text-[#909090] text-justify text-sm"> L\xE0 c\xE1c Gi\xE1o S\u01B0, Ph\xF3 gi\xE1o s\u01B0 v\xE0 Ti\u1EBFn S\u0129, Th\u1EA1c s\u0129 gi\xE0u kinh nghi\u1EC7m v\xE0 c\xF3 tr\xECnh \u0111\u1ED9 chuy\xEAn m\xF4n cao </p></div></div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutKinhDich.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$6;
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative px-5 pt-16 desktop:h-[850px] laptop:h-[850px] tablet:h-[750px] mobile:h-[550px]" }, _attrs))}><div class="absolute top-0 right-0 left-0 desktop:h-[70vh] laptop:h-[70vh] tablet:h-[60vh] mobile:h-[60vh] bg-cover brightness-75" style="${ssrRenderStyle({ "background-image": "url('https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/bg-01-min.jpg')" })}"></div><div class="absolute desktop:top-16 laptop:top-16 tablet:top-16 mobile:top-8 desktop:left-20 laptop:left-20 tablet:left-12 mobile:left-4 desktop:right-20 laptop:right-20 tablet:right-12 mobile:right-4 mb-10"><div class="flex justify-between items-start w-full desktop:flex-row laptop:flex-row tablet:flex-col mobile:flex-col"><div class=""><h2 class="text-white fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em]"> Tham gia kh\xF3a h\u1ECDc Kinh D\u1ECBch online </h2><h2 class="text-[#97dd55] fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em] py-4"> Kinh D\u1ECBch v\xE0 Y h\u1ECDc </h2></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/signup",
    id: "linklogin",
    class: "bg-transparent border-2 border-[#ffffff] text-center text-[#ffffff] px-12 py-4 rounded-full hover:text-white hover:scale-110 ease-in duration-300 desktop:w-auto laptop:w-auto tablet:w-full mobile:w-full"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u0110\u0103ng k\xFD `);
      } else {
        return [
          createTextVNode(" \u0110\u0103ng k\xFD ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="desktop:pt-16 laptop:pt-16 tablet:pt-8 mobile:pt-4 rounded-lg"><iframe class="desktop:h-[600px] laptop:h-[600px] tablet:h-[400px] mobile:h-[250px]" style="${ssrRenderStyle({ "width": "100%", "border-radius": "20px" })}" src="https://www.youtube.com/embed/rJN53XzC07o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoKinhDich.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {
  data() {
    return {};
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full desktop:py-16 laptop:py-12 tablet:py-18 mobile:py-4 desktop:px-32 laptop:px-20 tablet:px-8 mobile:px-4" }, _attrs))}><div class="w-full flex justify-center items-center flex-col"><img src="https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/divider-01-min.png" alt="" class="w-[400px] h-[30px] mb-5"><div class="mb-[10px] flex justify-center items-center flex-col desktop:py-12 laptop:py-4 tablet:py-4 mobile:py-4 w-full"><h1 class="desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5 text-[#0a3b50] pt-4"> N\u1ED9i dung ch\u01B0\u01A1ng tr\xECnh </h1><span class="text-[#009030] desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5">Kinh D\u1ECBch v\xE0 Y h\u1ECDc</span><div class="w-full py-8 flex justify-center items-center flex-col desktop:block laptop:block tablet:hidden mobile:hidden"><div class="grid grid-cols-6 w-full border-b-2 border-black"><div></div><div class="w-full"><div class="w-full flex flex-col justify-center items-center"><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Tr\xECnh b\xE0y \u0111\u01B0\u1EE3c ngu\u1ED3n ki\u1EBFn th\u1EE9c v\u1EC1: m\u1ED9t s\u1ED1 thu\u1EADt ng\u1EEF v\xE0 quy t\u1EAFc c\u1EA7n ghi nh\u1EDB. H\xECnh \u1EA3nh m\u1ED9t x\xE3 h\u1ED9i trung ch\xEDnh trong 64 qu\u1EBB; Ngu\u1ED3n g\u1ED1c v\u0169 tr\u1EE5 t\u1EEB nh\u1ECB nguy\xEAn t\u1EDBi nh\u1EA5t nguy\xEAn; \u0111\u1EA1o \xE2m d\u01B0\u01A1ng, \u0111\u1EA1o c\u1EE7a v\u0169 tr\u1EE5.</span><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk pb-4 text-[#0a3b50] mt-2 text-center"> Thu\u1EADt ng\u1EEF v\xE0 Quy t\u1EAFc c\u1EA7n ghi nh\u1EDB, Vi\u1EC7c ng\u01B0\u1EDDi, \u0110\u1EA1o tr\u1EDDi </h1></div><div class="w-full bg-[#08DAB8] rounded-t-full p-2"><h2 class="text-white font-semibold text-center">Bu\u1ED5i 2</h2></div></div><div></div><div class="w-full justify-end flex flex-col"><div class="w-full flex flex-col justify-center items-center"><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">N\u1EAFm \u0111\u01B0\u1EE3c ki\u1EBFn th\u1EE9c v\u1EC1: \xFD ngh\u0129a c\u1EE7a m\u1ED7i qu\u1EBB.</span><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk pb-4 text-[#0a3b50] mt-2 text-center"> Kinh v\xE0 truy\u1EC1n (ti\u1EBFp theo) Ph\u1EA7n 2. Kinh H\u1EA1 (t\xF3m t\u1EAFt \xFD ngh\u0129a c\u1EE7a 34 qu\u1EBB ti\u1EBFp theo) </h1></div><div class="w-full bg-[#FF9918] rounded-t-full p-2"><h2 class="text-white font-semibold text-center">Bu\u1ED5i 4</h2></div></div><div></div><div class="w-full justify-end flex flex-col"><div class="w-full flex flex-col justify-center items-center"><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Tr\xECnh b\xE0y \u0111\u01B0\u1EE3c \u1EE9ng c\xE1c nguy\xEAn t\u1EAFc v\u1EC1 \u0111\u1EA1o \u0111\u1EE9c nghi\xEAn c\u1EE9u trong Y d\u01B0\u1EE3c h\u1ECDc c\u1ED5 truy\u1EC1n.</span><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk pb-4 text-[#0a3b50] mt-2 text-center"> T\u1ED5ng k\u1EBFt - Th\u1EA3o lu\u1EADn - Ki\u1EC3m tra - \u0110\xE1nh gi\xE1 </h1></div><div class="w-full bg-[#EB3B7B] rounded-t-full p-2"><h2 class="text-white font-semibold text-center">Bu\u1ED5i 6</h2></div></div></div><div class="grid grid-cols-6 w-full"><div class="w-full"><div class="w-full bg-[#01A9BE] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Bu\u1ED5i 1</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> Ngu\u1ED1n g\u1ED1c Kinh D\u1ECBch v\xE0 c\xE1c ph\xE1i D\u1ECBch h\u1ECDc t\u1EEB H\xE1n \u0111\u1EBFn nay </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Tr\xECnh b\xE0y \u0111\u01B0\u1EE3c ngu\u1ED3n g\u1ED1c Kinh D\u1ECBch v\xE0 s\u1EF1 h\xECnh th\xE0nh c\xE1c ph\xE1i D\u1ECBch h\u1ECDc t\u1EEB th\u1EDDi H\xE1n \u0111\u1EBFn nay.</span></div></div><div></div><div class="w-full"><div class="w-full bg-[#FDB400] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Bu\u1ED5i 3</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> Kinh v\xE0 truy\u1EC7n Ph\u1EA7n 1. Kinh Th\u01B0\u1EE3ng (T\xF3m t\u1EAFt \xFD ngh\u0129a c\u1EE7a 30 qu\u1EBB) </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">N\u1EAFm \u0111\u01B0\u1EE3c ki\u1EBFn th\u1EE9c v\u1EC1: \xFD ngh\u0129a c\u1EE7a m\u1ED7i qu\u1EBB.</span></div></div><div></div><div class="w-full"><div class="w-full bg-[#A2CE23] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Bu\u1ED5i 5</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> H\u1EC7 t\u1EF1 truy\u1EC7n <br> 1. Thi\xEAn th\u01B0\u1EE3ng <br> 2. Thi\xEAn H\u1EA1 </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">N\u1EAFm \u0111\u01B0\u1EE3c ki\u1EBFn th\u1EE9c v\u1EC1: 12 ch\u01B0\u01A1ng thi\xEAn th\u01B0\u1EE3ng, 12 ch\u01B0\u01A1ng thi\xEAn h\u1EA1.</span></div></div><div></div></div></div><div class="w-full py-8 flex justify-center items-center flex-col desktop:hidden laptop:hidden tablet:block mobile:block"><div class="w-full grid desktop:grid-cols-2 laptop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1 gap-4"><div class="w-full"><div class="w-full bg-[#01A9BE] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Bu\u1ED5i 1</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> Ngu\u1ED1n g\u1ED1c Kinh D\u1ECBch v\xE0 c\xE1c ph\xE1i D\u1ECBch h\u1ECDc t\u1EEB H\xE1n \u0111\u1EBFn nay </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Tr\xECnh b\xE0y \u0111\u01B0\u1EE3c ngu\u1ED3n g\u1ED1c Kinh D\u1ECBch v\xE0 s\u1EF1 h\xECnh th\xE0nh c\xE1c ph\xE1i D\u1ECBch h\u1ECDc t\u1EEB th\u1EDDi H\xE1n \u0111\u1EBFn nay.</span></div></div><div class="w-full"><div class="w-full bg-[#08DAB8] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Bu\u1ED5i 2</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> Thu\u1EADt ng\u1EEF v\xE0 Quy t\u1EAFc c\u1EA7n ghi nh\u1EDB, Vi\u1EC7c ng\u01B0\u1EDDi, \u0110\u1EA1o tr\u1EDDi </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Tr\xECnh b\xE0y \u0111\u01B0\u1EE3c ngu\u1ED3n ki\u1EBFn th\u1EE9c v\u1EC1: m\u1ED9t s\u1ED1 thu\u1EADt ng\u1EEF v\xE0 quy t\u1EAFc c\u1EA7n ghi nh\u1EDB. H\xECnh \u1EA3nh m\u1ED9t x\xE3 h\u1ED9i trung ch\xEDnh trong 64 qu\u1EBB; Ngu\u1ED3n g\u1ED1c v\u0169 tr\u1EE5 t\u1EEB nh\u1ECB nguy\xEAn t\u1EDBi nh\u1EA5t nguy\xEAn; \u0111\u1EA1o \xE2m d\u01B0\u01A1ng, \u0111\u1EA1o c\u1EE7a v\u0169 tr\u1EE5.</span></div></div><div class="w-full"><div class="w-full bg-[#FDB400] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Bu\u1ED5i 3</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> Kinh v\xE0 truy\u1EC7n Ph\u1EA7n 1. Kinh Th\u01B0\u1EE3ng (T\xF3m t\u1EAFt \xFD ngh\u0129a c\u1EE7a 30 qu\u1EBB) </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">N\u1EAFm \u0111\u01B0\u1EE3c ki\u1EBFn th\u1EE9c v\u1EC1: \xFD ngh\u0129a c\u1EE7a m\u1ED7i qu\u1EBB.</span></div></div><div class="w-full"><div class="w-full bg-[#FF9918] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Bu\u1ED5i 4</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> T\u1ED5ng k\u1EBFt - Th\u1EA3o lu\u1EADn - Ki\u1EC3m tra - \u0110\xE1nh gi\xE1 </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">N\u1EAFm \u0111\u01B0\u1EE3c ki\u1EBFn th\u1EE9c v\u1EC1: \xFD ngh\u0129a c\u1EE7a m\u1ED7i qu\u1EBB.</span></div></div><div class="w-full"><div class="w-full bg-[#A2CE23] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Bu\u1ED5i 5</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> H\u1EC7 t\u1EF1 truy\u1EC7n <br> 1. Thi\xEAn th\u01B0\u1EE3ng <br> 2. Thi\xEAn H\u1EA1 </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">N\u1EAFm \u0111\u01B0\u1EE3c ki\u1EBFn th\u1EE9c v\u1EC1: 12 ch\u01B0\u01A1ng thi\xEAn th\u01B0\u1EE3ng, 12 ch\u01B0\u01A1ng thi\xEAn h\u1EA1.</span></div></div><div class="w-full"><div class="w-full bg-[#EB3B7B] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Bu\u1ED5i 6</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> T\u1ED5ng k\u1EBFt - Th\u1EA3o lu\u1EADn - Ki\u1EC3m tra - \u0110\xE1nh gi\xE1 </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Tr\xECnh b\xE0y \u0111\u01B0\u1EE3c \u1EE9ng c\xE1c nguy\xEAn t\u1EAFc v\u1EC1 \u0111\u1EA1o \u0111\u1EE9c nghi\xEAn c\u1EE9u trong Y d\u01B0\u1EE3c h\u1ECDc c\u1ED5 truy\u1EC1n.</span></div></div></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContentKinhDich.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + publicAssetsURL("9.jpg");
const _imports_1 = "" + publicAssetsURL("7.png");
const _sfc_main$3 = {
  __name: "InterestKinhDich",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = ElIcon;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative px-5 pt-16 desktop:h-screen laptop:h-screen tablet:h-[80vh] mobile:h-[120vh]" }, _attrs))}><div class="absolute top-0 right-0 left-0 h-full bg-cover brightness-50" style="${ssrRenderStyle({ "background-image": "url('https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/bg-01-min.jpg')" })}"></div><div class="absolute desktop:top-16 laptop:top-16 tablet:top-16 mobile:top-8 left-5 right-5 mb-10"><div class="flex justify-center desktop:items-center laptop:items-center tablet:items-start mobile:items-start w-full flex-col desktop:px-[52px] laptop:px-[52px] tablet:px-[52px] mobile:px-[10px]"><h2 class="text-white fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em]"> Quy\u1EC1n l\u1EE3i tham gia l\u1EDBp h\u1ECDc </h2><h2 class="text-[#97dd55] fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em]"> Kinh D\u1ECBch v\xE0 Y h\u1ECDc </h2></div><div class="grid desktop:grid-cols-2 tablet:grid-cols-1 laptop:grid-cols-2 mobile:grid-cols-1 gap-8 mt-8 desktop:px-[52px] laptop:px-[20px] tablet:px-[20px] mobile:px-[10px]"><div class="grid desktop:grid-cols-2 tablet:grid-cols-1 laptop:grid-cols-2 mobile:grid-cols-1 gap-4"><div class="w-full desktop:block laptop:block tablet:hidden mobile:hidden"><img${ssrRenderAttr("src", _imports_0)} class="w-full h-[270px] object-cover rounded-xl"></div><div class="w-full rounded-xl bg-[#E2FFEB] p-4 flex flex-col justify-center items-center">`);
      _push(ssrRenderComponent(_component_el_icon, {
        color: "#009030",
        class: "no-inherit text-4xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(avatar_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(avatar_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-xl font-semibold leading-[1em] fontSpaceGrotesk py-4 text-[#0a3b50] text-center"> Tham gia kh\xF3a h\u1ECDc c\xF9ng chuy\xEAn gia h\xE0ng \u0111\u1EA7u trong l\u0129nh v\u1EF1c Kinh D\u1ECBch </h1><p class="leading-[1.8em] font-medium text-[#909090] text-center text-sm"> L\xE0 c\xE1c Gi\xE1o S\u01B0, Ph\xF3 gi\xE1o s\u01B0 v\xE0 Ti\u1EBFn S\u0129, Th\u1EA1c s\u0129 gi\xE0u kinh nghi\u1EC7m v\xE0 c\xF3 tr\xECnh \u0111\u1ED9 chuy\xEAn m\xF4n cao </p></div><div class="w-full rounded-xl bg-[#E2FFEB] p-4 flex flex-col justify-center items-center">`);
      _push(ssrRenderComponent(_component_el_icon, {
        color: "#009030",
        class: "no-inherit text-4xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(collection_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(collection_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-xl font-semibold leading-[1em] fontSpaceGrotesk py-4 text-[#0a3b50] text-center"> Nh\u1EADn ch\u1EE9ng ch\u1EC9 sau \u0111\xE0o t\u1EA1o </h1><p class="leading-[1.8em] font-medium text-[#909090] text-center text-sm"> \u0110\u01B0\u1EE3c nh\u1EADn ch\u1EE9ng ch\u1EC9 \u0111\xE0o t\u1EA1o li\xEAn t\u1EE5c do H\u1ECDc Vi\xEAn Y - D\u01B0\u1EE3c h\u1ECDc c\u1ED5 truy\u1EC1n Vi\u1EC7t Nam c\u1EA5p theo quy \u0111\u1ECBnh </p></div><div class="w-full desktop:block laptop:block tablet:hidden mobile:hidden"><img${ssrRenderAttr("src", _imports_1)} class="w-full h-[270px] object-cover rounded-xl"></div></div><div class="flex justify-center w-full flex-col"><h2 class="text-white fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em] pr-8"> L\u1EDBp h\u1ECDc Online \u0111\u1EB7c bi\u1EC7t \u0111\xE0o t\u1EA1o li\xEAn t\u1EE5c </h2><h2 class="text-[#97dd55] fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em] py-4 pr-8"> Kinh D\u1ECBch v\xE0 Y h\u1ECDc </h2><p class="leading-[1.8em] font-medium text-[#909090] text-justify desktop:text-base laptop:text-base tablet:text-sm mobile:text-sm desktop:pr-12 laptop:pr-12 tablet:pr-0 mobile:pr-0"> Tham gia kh\xF3a h\u1ECDc Kinh D\u1ECBch tr\u1EF1c tuy\u1EBFn, c\xE1c h\u1ECDc vi\xEAn c\xF3 th\u1EC3 h\u1ECDc m\u1ECDi l\xFAc, m\u1ECDi n\u01A1i, tr\xEAn nhi\u1EC1u thi\u1EBFt b\u1ECB nh\u01B0 \u0111i\u1EC7n tho\u1EA1i, m\xE1y t\xEDnh, tivi\u2026 c\xF3 k\u1EBFt n\u1ED1i internet. <br> C\xE1c b\xE0i gi\u1EA3ng b\u1EB1ng video \u0111\u01B0\u1EE3c c\xE1c gi\u1EA3ng h\xE0ng \u0111\u1EA7u h\u01B0\u1EDBng d\u1EABn chi ti\u1EBFt t\u1EEB l\xFD thuy\u1EBFt \u0111\u1EBFn th\u1EF1c h\xE0nh, c\xE1c \u0111i\u1EC1u c\u1EA7n l\u01B0u \xFD khi h\u1ECDc t\u1EADp. <br> So v\u1EDBi c\xE1ch h\u1ECDc truy\u1EC1n th\u1ED1ng t\u1EA1i l\u1EDBp, h\u1ECDc tr\u1EF1c tuy\u1EBFn l\xE0 ph\u01B0\u01A1ng ph\xE1p h\u1ECDc v\xF4 c\xF9ng hi\u1EC7n \u0111\u1EA1i v\xE0 kinh t\u1EBF, kh\xF4ng b\u1ECB gi\u1EDBi h\u1EA1n c\u1EA3 v\u1EC1 kh\xF4ng gian v\xE0 th\u1EDDi gian. </p><div class="mt-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/signup",
        class: "bgMainColor text-center px-12 py-4 rounded-full text-white hover:scale-110 ease-in duration-300 hover:opacity-80"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0110\u0103ng k\xFD `);
          } else {
            return [
              createTextVNode(" \u0110\u0103ng k\xFD ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InterestKinhDich.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "SignInKinhDich",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = ElIcon;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full py-16 desktop:px-5 laptop:px-5tablet:px-2 mobile:px-2 mb-8" }, _attrs))}><div class="w-full flex justify-center items-center flex-col"><img src="https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/divider-01-min.png" alt="" class="w-[400px] h-[30px] mb-5"><div class="mb-[10px] flex justify-center items-center flex-col py-4 w-full"><h1 class="desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5 text-[#0a3b50] pt-4"> \u0110\u0103ng k\xFD l\u1EDBp h\u1ECDc </h1><span class="text-[#009030] desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5">Kinh D\u1ECBch v\xE0 Y h\u1ECDc</span></div><div class="grid desktop:grid-cols-3 laptop:grid-cols-3 tablet:grid-cols-1 mobile:grid-cols-1 desktop:px-5 laptop:px-[20px] tablet:px-[20px] mobile:px-[10px] desktop:gap-4 laptop:gap-4 tablet:gap-2 mobile:gap-0 w-full"><div><div class="w-full bgMainColor p-2 mb-2"><h2 class="text-center text-white text-xl">H\u1ED3 s\u01A1 \u0111\u0103ng k\xFD</h2></div><div class="w-full rounded-xl bg-[#a7f3d0] pl-4 flex flex-col justify-center items-start"><ul class="list-disc p-4"><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> 01 b\u1EA3n sao c\xF4ng ch\u1EE9ng B\u1EB1ng t\u1ED1t nghi\u1EC7p </li><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> 01 b\u1EA3n sao c\xF4ng ch\u1EE9ng C\u0103n c\u01B0\u1EDBc c\xF4ng d\xE2n </li></ul></div><div class="w-full bgMainColor p-2 my-2"><h2 class="text-center text-white text-xl">Th\xF4ng tin li\xEAn h\u1EC7</h2></div><div class="w-full rounded-xl bg-[#a7f3d0] pl-4 flex flex-col justify-center items-start mb-2"><ul class="list-disc p-4"><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> Ph\xF2ng \u0111\xE0o t\u1EA1o sau \u0111\u1EA1i h\u1ECDc - S\u0110T: 0969.530.077 </li><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> PGS. TS.\u0110o\xE0n Minh Th\u1EE5y - S\u0110T: 0912.933.156 </li><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> TS.Nguy\u1EC5n Chi L\xEA - S\u0110T: 0936.719.966 </li><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> ThS.Qu\xE1ch Di\u1EC5m H\u1EB1ng - S\u0110T: 0983.149.167 </li></ul></div></div><div class="col-span-2"><div class="w-full bgMainColor p-2 mb-2"><h2 class="text-center text-white text-xl">Chi ph\xED \u0111\u0103ng k\xFD l\u1EDBp h\u1ECDc</h2></div><div class="w-full rounded-xl bg-[#a7f3d0] p-4 flex flex-col justify-center items-start"><div class="w-full"><h2 class="text-center text-red-600 font-semibold text-xl"> H\u1ECDc ph\xED: 1.350.000 / 1 h\u1ECDc vi\xEAn </h2></div><h2 class="text-center text-[#0a3b50] font-semibold text-xl"> H\u1ECDc ph\xED tham d\u1EF1 l\u1EDBp h\u1ECDc xin \u0111\u01B0\u1EE3c chuy\u1EC3n v\xE0o: </h2><ul class="list-disc pl-4"><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> S\u1ED1 t\xE0i kho\u1EA3n: 118 000 186 262 </li><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> Ch\u1EE7 t\xE0i kho\u1EA3n: H\u1ECDc Vi\u1EC7n Y - D\u01B0\u1EE3c c\u1ED5 truy\u1EC1n Vi\u1EC7t Nam </li><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> Ng\xE2n h\xE0ng: Viettinbank - Ng\xE2n h\xE0ng th\u01B0\u01A1ng m\u1EA1i c\u1ED5 ph\u1EA7n C\xF4ng th\u01B0\u01A1ng Vi\u1EC7t Nam - chi nh\xE1nh \u0110\u1ED1ng \u0110a, H\xE0 N\u1ED9i </li><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> N\u1ED9i dung chuy\u1EC3n kho\u1EA3n: H\u1ECD t\xEAn - Ng\xE0y sinh - Kinh D\u1ECBch - S\u1ED1 \u0111i\u1EC7n tho\u1EA1i <br> (V\xED d\u1EE5: Nguyen Van A 12.10.1989 KINH DICH 098xxxxxxx) </li></ul></div><div class="w-full rounded-xl bg-[#a7f3d0] p-4 mt-1 flex desktop:flex-row laptop:flex-row tablet:flex-col mobile:flex-col"><div class="flex">`);
      _push(ssrRenderComponent(_component_el_icon, {
        color: "#009030",
        class: "no-inherit text-2xl mr-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(location_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(location_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="leading-[1.8em] font-medium text-[#0a3b50] text-base mr-4"> \u0110\u1ECBa ch\u1EC9: S\u1ED1 2, Tr\u1EA7n Ph\xFA, H\xE0 \u0110\xF4ng, H\xE0 N\u1ED9i </p></div><div class="flex">`);
      _push(ssrRenderComponent(_component_el_icon, {
        color: "#009030",
        class: "no-inherit text-2xl mr-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(chrome_filled_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(chrome_filled_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="http://vutm.edu.vn/" class="leading-[1.8em] font-medium text-[#0a3b50] text-base underline hover:text-blue-400"> http://vutm.edu.vn/ </a></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SignInKinhDich.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "FooterKinhDich",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_el_icon = ElIcon;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="bg-no-repeat bg-cover w-full desktop:h-[50vh] laptop:h-[40vh] tablet:h-[25vh] mobile:h-[40vh] object-cover brightness-50" style="${ssrRenderStyle({ "background-image": "url('https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/bg-01-min.jpg')" })}"></div><div class="absolute desktop:top-20 laptop:top-16 tablet:top-16 mobile:top-12 desktop:px-60 laptop:px-16 tablet:px-16 mobile:px-8 flex justify-center items-center"><div class="flex flex-col desktop:w-[80%] laptop:w-[80%] tablet:w-full mobile:w-full"><h2 class="text-white fontSpaceGrotesk desktop:text-[36px] laptop:text-[24px] tablet:text-[24px] mobile:text-[24px] font-semibold leading-[1.2em] text-justify"> Tham gia l\u1EDBp h\u1ECDc online \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u01B0\u1EDBng d\u1EABn chi ti\u1EBFt t\u1EEB c\xE1c gi\u1EA3ng vi\xEAn gi\xE0u kinh nghi\u1EC7m trong l\u0129nh v\u1EF1c </h2><h2 class="text-[#97dd55] fontSpaceGrotesk desktop:text-[36px] laptop:text-[24px] tablet:text-[24px] mobile:text-[24px] font-semibold leading-[1.2em] pt-4"> Kinh D\u1ECBch v\xE0 Y h\u1ECDc </h2><div class="mt-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/signup",
        id: "linklogin",
        class: "bgMainColor text-center px-12 py-4 rounded-full text-white hover:scale-110 ease-in duration-300 hover:opacity-80"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0110\u0103ng k\xFD `);
          } else {
            return [
              createTextVNode(" \u0110\u0103ng k\xFD ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="w-full desktop:px-[100px] laptop:px-[20px] tablet:px-[20px] mobile:px-[20px] pt-8 pb-8"><div class="w-full flex justify-between items-center border-b-2 border-[#97D84F] pb-2 desktop:flex-row laptop:flex-row tablet:flex-col mobile:flex-col"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="" class="h-20 w-[70px] mr-4"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "",
                class: "h-20 w-[70px] mr-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-center"><h1 class="desktop:text-2xl laptop:text-xl tablet:text-lg mobile:text-sm font-bold leading-[1em] my-1 text-[#009030] text-justify uppercase"> H\u1ECDc vi\u1EC7n y d\u01B0\u1EE3c c\u1ED5 truy\u1EC1n Vi\u1EC7t Nam </h1><span class="text-[#0a3b50] uppercase desktop:text-xl laptop:text-lg tablet:text-sm mobile:text-xs font-light">Viet Nam university of traditional medicine</span></div></div><div class="mt-4"><p class="leading-[1.8em] font-bold text-[#0a3b50] text-base mr-4"> B\u1EA2N QUY\u1EC0N THU\u1ED8C H\u1ECCC VI\u1EC6N Y - D\u01AF\u1EE2C H\u1ECCC C\u1ED4 TRUY\u1EC0N VI\u1EC6T NAM </p><div class="flex">`);
      _push(ssrRenderComponent(_component_el_icon, {
        color: "#009030",
        class: "no-inherit text-2xl mr-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(location_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(location_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="leading-[1.8em] font-medium text-[#0a3b50] text-base mr-4"> \u0110\u1ECBa ch\u1EC9: S\u1ED1 2, Tr\u1EA7n Ph\xFA, H\xE0 \u0110\xF4ng, H\xE0 N\u1ED9i </p></div><div class="flex">`);
      _push(ssrRenderComponent(_component_el_icon, {
        color: "#009030",
        class: "no-inherit text-2xl mr-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(phone_filled_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(phone_filled_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="leading-[1.8em] font-medium text-[#0a3b50] text-base mr-4">Tel: (84-24) 3382 4929</p></div><div class="flex">`);
      _push(ssrRenderComponent(_component_el_icon, {
        color: "#009030",
        class: "no-inherit text-2xl mr-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(message_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(message_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="leading-[1.8em] font-medium text-[#0a3b50] text-base mr-4"> Email: hocvienyduoc@vutm.edu.vn </p></div></div></div><div class="pt-4 text-[#0a3b50] font-semibold text-base">Copyright \xA9 2023 Vatm.edu.vn</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterKinhDich.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main$1;
const _sfc_main = {
  name: "app"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderKinhDich = __nuxt_component_0;
  const _component_SlideKinhDich = __nuxt_component_1;
  const _component_AboutKinhDich = __nuxt_component_2;
  const _component_VideoKinhDich = __nuxt_component_3;
  const _component_ContentKinhDich = __nuxt_component_4;
  const _component_InterestKinhDich = __nuxt_component_5;
  const _component_SignInKinhDich = __nuxt_component_6;
  const _component_FooterKinhDich = __nuxt_component_7;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_HeaderKinhDich, null, null, _parent));
  _push(ssrRenderComponent(_component_SlideKinhDich, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutKinhDich, null, null, _parent));
  _push(ssrRenderComponent(_component_VideoKinhDich, null, null, _parent));
  _push(ssrRenderComponent(_component_ContentKinhDich, null, null, _parent));
  _push(ssrRenderComponent(_component_InterestKinhDich, null, null, _parent));
  _push(ssrRenderComponent(_component_SignInKinhDich, null, null, _parent));
  _push(ssrRenderComponent(_component_FooterKinhDich, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-350a928c.mjs.map
