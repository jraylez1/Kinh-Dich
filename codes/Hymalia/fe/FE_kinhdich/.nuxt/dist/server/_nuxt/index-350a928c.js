import { _ as __nuxt_component_0$1 } from "./nuxt-link-563b35af.js";
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0$1, u as user_filled_default, c as calendar_default, a as avatar_default, E as ElIcon, b as collection_default, l as location_default, d as chrome_filled_default, p as phone_filled_default, m as message_default } from "./el-icon-c0a0f4d5.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
import "lodash-unified";
import "@vue/shared";
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
  _push(`<div class="text-center desktop:block laptop:block tablet:block mobile:hidden"><h1 class="desktop:text-2xl laptop:text-xl tablet:text-lg mobile:text-sm font-bold leading-[1em] my-1 text-[#009030] text-justify uppercase"> Học viện y dược cổ truyền Việt Nam </h1><span class="text-[#0a3b50] uppercase desktop:text-xl laptop:text-lg tablet:text-sm mobile:text-xs font-light">Viet Nam university of traditional medicine</span></div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/login",
    id: "linklogin",
    class: "bg-transparent border-2 border-[#009030] text-center text-[#009030] px-8 py-3 rounded-full hover:text-white hover:bg-[#009030] hover:scale-110 ease-in duration-300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Vào Lớp `);
      } else {
        return [
          createTextVNode(" Vào Lớp ")
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-24 grid desktop:grid-cols-2 laptop:grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 gap-4 px-5 py-16" }, _attrs))}><div class="desktop:mx-14 laptop:mx-8 tablet:mx-6 mobile:mx-4 w-full flex justify-center items-center"><div class="mb-5 w-full"><h1 class="desktop:text-[67px] laptop:text-[50px] tablet:text-[50px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5 desktop:mr-28 laptop:mr-20 tablet:mr-12 mobile:mr-8 text-[#0a3b50] text-justify"> Lớp đào tạo liên tục: <span class="text-[#009030]">Chứng minh cấu trúc của 64 quẻ kinh dịch</span></h1><div class="inline-block w-full desktop:text-lg laptop:text-sm tablet:text-xl mobile:text-lg leading-6 mb-8"><p class="desktop:mr-40 laptop:mr-28 tablet:mr-12 mobile:mr-12 leading-[1.8em] font-medium text-[#909090] text-justify"> Minh chứng mới về nguồn gốc, sáng tạo kinh dịch </p><p class="desktop:mr-40 laptop:mr-28 tablet:mr-12 mobile:mr-12 leading-[1.8em] font-medium text-[#909090] text-justify"> Minh chứng của Lạc Việt trong sáng tạo kinh dịch </p><p class="desktop:mr-40 laptop:mr-28 tablet:mr-12 mobile:mr-12 leading-[1.8em] font-medium text-[#909090] text-justify"> Thể hiện quẻ Kinh Dịch của Trung Thiên Đồ Lạc Việt trên cổ vật </p></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/signup",
    id: "linklogin",
    class: "bgMainColor text-center px-12 py-4 rounded-full text-white hover:scale-110 ease-in duration-300 hover:opacity-80"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Đăng ký `);
      } else {
        return [
          createTextVNode(" Đăng ký ")
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full desktop:py-16 laptop:py-12 tablet:py-18 mobile:py-4 px-5" }, _attrs))}><div class="w-full flex justify-center items-center flex-col"><img src="https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/divider-01-min.png" alt="" class="w-[400px] h-[30px] mb-5"><div class="mb-[10px] flex justify-center items-center flex-col desktop:py-12 laptop:py-4 tablet:py-4 mobile:py-4 w-full"><h1 class="desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[36px] font-semibold leading-[1em] fontSpaceGrotesk mb-5 text-[#0a3b50] pt-4 text-center"> Thông tin lớp đào tạo liên tục </h1><span class="text-[#009030] desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[36px] font-semibold leading-[1em] fontSpaceGrotesk mb-5">Kinh Dịch và Y học</span><div class="w-full desktop:px-[200px] laptop:px-[200px] tablet:px-[40px] mobile:px-[10px] desktop:py-6 tablet:py-4 laptop:py-8 mobile:py-2"><p class="leading-[1.8em] font-medium text-[#909090] text-center"> Khóa học cung cấp các kiến thức bổ trợ và nâng cao kiến thức về Kinh Dịch ứng dụng trong Y học cổ truyển. Vận dụng những lý thuyết của Kinh Dịch vào phương pháp chuẩn đoán và diều trị bệnh bằng Đông y. Việc chữa bệnh trong ngành Y học Cổ Truyền dựa trên cơ sở diều chỉnh cân bằng Âm Dương - Ngũ Hành cân đối, kết hợp với các bài thuốc điều trị cho hiệu quả </p></div></div></div><div class="grid desktop:grid-cols-3 laptop:grid-cols-3 tablet:grid-cols-1 mobile:grid-cols-1 gap-4 desktop:mx-14 laptop:mx-10 tablet:mx-6 mobile:mx-2"><div class="flex p-10 bg-[#EFFFF4] shadow-xl rounded-lg">`);
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
      _push(`<div class="ml-5"><h3 class="fontSpaceGrotesk text-2xl font-semibold leading-[1.5em] text-[#0a3b50] mb-1"> Đối tượng </h3><p class="leading-[1.8em] font-medium text-[#909090] text-justify text-sm"> Bác sĩ, cán bộ y tế, giảng viên và học viên trong lĩnh vực y dược cổ truyền của các cơ sở y tế, các công ty, các đơn vị và cá nhân trong toàn quốc </p></div></div><div class="flex p-10 bg-white">`);
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
      _push(`<div class="ml-5"><h3 class="fontSpaceGrotesk text-2xl font-semibold leading-[1.5em] text-[#0a3b50] mb-1"> Số buổi &amp; thời gian giảng dạy </h3><p class="leading-[1.8em] font-medium text-[#909090] text-justify text-sm"> Số buổi: 6 buổi (30 tiết) </p><p class="leading-[1.8em] font-medium text-[#909090] text-justify text-sm"> Thời gian dự kiến 6 - 7/2023 </p></div></div><div class="flex p-10 bg-[#EFFFF4] shadow-xl rounded-lg">`);
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
      _push(`<div class="ml-5"><h3 class="fontSpaceGrotesk text-2xl font-semibold leading-[1.5em] text-[#0a3b50] mb-1"> Giảng viên </h3><p class="leading-[1.8em] font-medium text-[#909090] text-justify text-sm"> Là các Giáo Sư, Phó giáo sư và Tiến Sĩ, Thạc sĩ giàu kinh nghiệm và có trình độ chuyên môn cao </p></div></div></div></div>`);
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative px-5 pt-16 desktop:h-[850px] laptop:h-[850px] tablet:h-[750px] mobile:h-[550px]" }, _attrs))}><div class="absolute top-0 right-0 left-0 desktop:h-[70vh] laptop:h-[70vh] tablet:h-[60vh] mobile:h-[60vh] bg-cover brightness-75" style="${ssrRenderStyle({ "background-image": "url('https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/bg-01-min.jpg')" })}"></div><div class="absolute desktop:top-16 laptop:top-16 tablet:top-16 mobile:top-8 desktop:left-20 laptop:left-20 tablet:left-12 mobile:left-4 desktop:right-20 laptop:right-20 tablet:right-12 mobile:right-4 mb-10"><div class="flex justify-between items-start w-full desktop:flex-row laptop:flex-row tablet:flex-col mobile:flex-col"><div class=""><h2 class="text-white fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em]"> Tham gia khóa học Kinh Dịch online </h2><h2 class="text-[#97dd55] fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em] py-4"> Kinh Dịch và Y học </h2></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/signup",
    id: "linklogin",
    class: "bg-transparent border-2 border-[#ffffff] text-center text-[#ffffff] px-12 py-4 rounded-full hover:text-white hover:scale-110 ease-in duration-300 desktop:w-auto laptop:w-auto tablet:w-full mobile:w-full"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Đăng ký `);
      } else {
        return [
          createTextVNode(" Đăng ký ")
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full desktop:py-16 laptop:py-12 tablet:py-18 mobile:py-4 desktop:px-32 laptop:px-20 tablet:px-8 mobile:px-4" }, _attrs))}><div class="w-full flex justify-center items-center flex-col"><img src="https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/divider-01-min.png" alt="" class="w-[400px] h-[30px] mb-5"><div class="mb-[10px] flex justify-center items-center flex-col desktop:py-12 laptop:py-4 tablet:py-4 mobile:py-4 w-full"><h1 class="desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5 text-[#0a3b50] pt-4"> Nội dung chương trình </h1><span class="text-[#009030] desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5">Kinh Dịch và Y học</span><div class="w-full py-8 flex justify-center items-center flex-col desktop:block laptop:block tablet:hidden mobile:hidden"><div class="grid grid-cols-6 w-full border-b-2 border-black"><div></div><div class="w-full"><div class="w-full flex flex-col justify-center items-center"><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Trình bày được nguồn kiến thức về: một số thuật ngữ và quy tắc cần ghi nhớ. Hình ảnh một xã hội trung chính trong 64 quẻ; Nguồn gốc vũ trụ từ nhị nguyên tới nhất nguyên; đạo âm dương, đạo của vũ trụ.</span><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk pb-4 text-[#0a3b50] mt-2 text-center"> Thuật ngữ và Quy tắc cần ghi nhớ, Việc người, Đạo trời </h1></div><div class="w-full bg-[#08DAB8] rounded-t-full p-2"><h2 class="text-white font-semibold text-center">Buổi 2</h2></div></div><div></div><div class="w-full justify-end flex flex-col"><div class="w-full flex flex-col justify-center items-center"><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Nắm được kiến thức về: ý nghĩa của mỗi quẻ.</span><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk pb-4 text-[#0a3b50] mt-2 text-center"> Kinh và truyền (tiếp theo) Phần 2. Kinh Hạ (tóm tắt ý nghĩa của 34 quẻ tiếp theo) </h1></div><div class="w-full bg-[#FF9918] rounded-t-full p-2"><h2 class="text-white font-semibold text-center">Buổi 4</h2></div></div><div></div><div class="w-full justify-end flex flex-col"><div class="w-full flex flex-col justify-center items-center"><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Trình bày được ứng các nguyên tắc về đạo đức nghiên cứu trong Y dược học cổ truyền.</span><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk pb-4 text-[#0a3b50] mt-2 text-center"> Tổng kết - Thảo luận - Kiểm tra - Đánh giá </h1></div><div class="w-full bg-[#EB3B7B] rounded-t-full p-2"><h2 class="text-white font-semibold text-center">Buổi 6</h2></div></div></div><div class="grid grid-cols-6 w-full"><div class="w-full"><div class="w-full bg-[#01A9BE] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Buổi 1</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> Nguốn gốc Kinh Dịch và các phái Dịch học từ Hán đến nay </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Trình bày được nguồn gốc Kinh Dịch và sự hình thành các phái Dịch học từ thời Hán đến nay.</span></div></div><div></div><div class="w-full"><div class="w-full bg-[#FDB400] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Buổi 3</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> Kinh và truyện Phần 1. Kinh Thượng (Tóm tắt ý nghĩa của 30 quẻ) </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Nắm được kiến thức về: ý nghĩa của mỗi quẻ.</span></div></div><div></div><div class="w-full"><div class="w-full bg-[#A2CE23] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Buổi 5</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> Hệ tự truyện <br> 1. Thiên thượng <br> 2. Thiên Hạ </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Nắm được kiến thức về: 12 chương thiên thượng, 12 chương thiên hạ.</span></div></div><div></div></div></div><div class="w-full py-8 flex justify-center items-center flex-col desktop:hidden laptop:hidden tablet:block mobile:block"><div class="w-full grid desktop:grid-cols-2 laptop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1 gap-4"><div class="w-full"><div class="w-full bg-[#01A9BE] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Buổi 1</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> Nguốn gốc Kinh Dịch và các phái Dịch học từ Hán đến nay </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Trình bày được nguồn gốc Kinh Dịch và sự hình thành các phái Dịch học từ thời Hán đến nay.</span></div></div><div class="w-full"><div class="w-full bg-[#08DAB8] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Buổi 2</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> Thuật ngữ và Quy tắc cần ghi nhớ, Việc người, Đạo trời </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Trình bày được nguồn kiến thức về: một số thuật ngữ và quy tắc cần ghi nhớ. Hình ảnh một xã hội trung chính trong 64 quẻ; Nguồn gốc vũ trụ từ nhị nguyên tới nhất nguyên; đạo âm dương, đạo của vũ trụ.</span></div></div><div class="w-full"><div class="w-full bg-[#FDB400] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Buổi 3</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> Kinh và truyện Phần 1. Kinh Thượng (Tóm tắt ý nghĩa của 30 quẻ) </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Nắm được kiến thức về: ý nghĩa của mỗi quẻ.</span></div></div><div class="w-full"><div class="w-full bg-[#FF9918] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Buổi 4</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> Tổng kết - Thảo luận - Kiểm tra - Đánh giá </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Nắm được kiến thức về: ý nghĩa của mỗi quẻ.</span></div></div><div class="w-full"><div class="w-full bg-[#A2CE23] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Buổi 5</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> Hệ tự truyện <br> 1. Thiên thượng <br> 2. Thiên Hạ </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Nắm được kiến thức về: 12 chương thiên thượng, 12 chương thiên hạ.</span></div></div><div class="w-full"><div class="w-full bg-[#EB3B7B] rounded-b-full p-2"><h2 class="text-white font-semibold text-center">Buổi 6</h2></div><div class="w-full flex flex-col justify-center items-center"><h1 class="text-base font-semibold leading-[1em] fontSpaceGrotesk mb-2 text-[#0a3b50] pt-4 text-center"> Tổng kết - Thảo luận - Kiểm tra - Đánh giá </h1><span class="text-[#909090] text-sm font-semibold leading-[1em] text-center">Trình bày được ứng các nguyên tắc về đạo đức nghiên cứu trong Y dược học cổ truyền.</span></div></div></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContentKinhDich.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + __publicAssetsURL("9.jpg");
const _imports_1 = "" + __publicAssetsURL("7.png");
const _sfc_main$3 = {
  __name: "InterestKinhDich",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = ElIcon;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative px-5 pt-16 desktop:h-screen laptop:h-screen tablet:h-[80vh] mobile:h-[120vh]" }, _attrs))}><div class="absolute top-0 right-0 left-0 h-full bg-cover brightness-50" style="${ssrRenderStyle({ "background-image": "url('https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/bg-01-min.jpg')" })}"></div><div class="absolute desktop:top-16 laptop:top-16 tablet:top-16 mobile:top-8 left-5 right-5 mb-10"><div class="flex justify-center desktop:items-center laptop:items-center tablet:items-start mobile:items-start w-full flex-col desktop:px-[52px] laptop:px-[52px] tablet:px-[52px] mobile:px-[10px]"><h2 class="text-white fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em]"> Quyền lợi tham gia lớp học </h2><h2 class="text-[#97dd55] fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em]"> Kinh Dịch và Y học </h2></div><div class="grid desktop:grid-cols-2 tablet:grid-cols-1 laptop:grid-cols-2 mobile:grid-cols-1 gap-8 mt-8 desktop:px-[52px] laptop:px-[20px] tablet:px-[20px] mobile:px-[10px]"><div class="grid desktop:grid-cols-2 tablet:grid-cols-1 laptop:grid-cols-2 mobile:grid-cols-1 gap-4"><div class="w-full desktop:block laptop:block tablet:hidden mobile:hidden"><img${ssrRenderAttr("src", _imports_0)} class="w-full h-[270px] object-cover rounded-xl"></div><div class="w-full rounded-xl bg-[#E2FFEB] p-4 flex flex-col justify-center items-center">`);
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
      _push(`<h1 class="text-xl font-semibold leading-[1em] fontSpaceGrotesk py-4 text-[#0a3b50] text-center"> Tham gia khóa học cùng chuyên gia hàng đầu trong lĩnh vực Kinh Dịch </h1><p class="leading-[1.8em] font-medium text-[#909090] text-center text-sm"> Là các Giáo Sư, Phó giáo sư và Tiến Sĩ, Thạc sĩ giàu kinh nghiệm và có trình độ chuyên môn cao </p></div><div class="w-full rounded-xl bg-[#E2FFEB] p-4 flex flex-col justify-center items-center">`);
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
      _push(`<h1 class="text-xl font-semibold leading-[1em] fontSpaceGrotesk py-4 text-[#0a3b50] text-center"> Nhận chứng chỉ sau đào tạo </h1><p class="leading-[1.8em] font-medium text-[#909090] text-center text-sm"> Được nhận chứng chỉ đào tạo liên tục do Học Viên Y - Dược học cổ truyền Việt Nam cấp theo quy định </p></div><div class="w-full desktop:block laptop:block tablet:hidden mobile:hidden"><img${ssrRenderAttr("src", _imports_1)} class="w-full h-[270px] object-cover rounded-xl"></div></div><div class="flex justify-center w-full flex-col"><h2 class="text-white fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em] pr-8"> Lớp học Online đặc biệt đào tạo liên tục </h2><h2 class="text-[#97dd55] fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em] py-4 pr-8"> Kinh Dịch và Y học </h2><p class="leading-[1.8em] font-medium text-[#909090] text-justify desktop:text-base laptop:text-base tablet:text-sm mobile:text-sm desktop:pr-12 laptop:pr-12 tablet:pr-0 mobile:pr-0"> Tham gia khóa học Kinh Dịch trực tuyến, các học viên có thể học mọi lúc, mọi nơi, trên nhiều thiết bị như điện thoại, máy tính, tivi… có kết nối internet. <br> Các bài giảng bằng video được các giảng hàng đầu hướng dẫn chi tiết từ lý thuyết đến thực hành, các điều cần lưu ý khi học tập. <br> So với cách học truyền thống tại lớp, học trực tuyến là phương pháp học vô cùng hiện đại và kinh tế, không bị giới hạn cả về không gian và thời gian. </p><div class="mt-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/signup",
        class: "bgMainColor text-center px-12 py-4 rounded-full text-white hover:scale-110 ease-in duration-300 hover:opacity-80"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Đăng ký `);
          } else {
            return [
              createTextVNode(" Đăng ký ")
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full py-16 desktop:px-5 laptop:px-5tablet:px-2 mobile:px-2 mb-8" }, _attrs))}><div class="w-full flex justify-center items-center flex-col"><img src="https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/divider-01-min.png" alt="" class="w-[400px] h-[30px] mb-5"><div class="mb-[10px] flex justify-center items-center flex-col py-4 w-full"><h1 class="desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5 text-[#0a3b50] pt-4"> Đăng ký lớp học </h1><span class="text-[#009030] desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5">Kinh Dịch và Y học</span></div><div class="grid desktop:grid-cols-3 laptop:grid-cols-3 tablet:grid-cols-1 mobile:grid-cols-1 desktop:px-5 laptop:px-[20px] tablet:px-[20px] mobile:px-[10px] desktop:gap-4 laptop:gap-4 tablet:gap-2 mobile:gap-0 w-full"><div><div class="w-full bgMainColor p-2 mb-2"><h2 class="text-center text-white text-xl">Hồ sơ đăng ký</h2></div><div class="w-full rounded-xl bg-[#a7f3d0] pl-4 flex flex-col justify-center items-start"><ul class="list-disc p-4"><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> 01 bản sao công chứng Bằng tốt nghiệp </li><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> 01 bản sao công chứng Căn cước công dân </li></ul></div><div class="w-full bgMainColor p-2 my-2"><h2 class="text-center text-white text-xl">Thông tin liên hệ</h2></div><div class="w-full rounded-xl bg-[#a7f3d0] pl-4 flex flex-col justify-center items-start mb-2"><ul class="list-disc p-4"><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> Phòng đào tạo sau đại học - SĐT: 0969.530.077 </li><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> PGS. TS.Đoàn Minh Thụy - SĐT: 0912.933.156 </li><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> TS.Nguyễn Chi Lê - SĐT: 0936.719.966 </li><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> ThS.Quách Diễm Hằng - SĐT: 0983.149.167 </li></ul></div></div><div class="col-span-2"><div class="w-full bgMainColor p-2 mb-2"><h2 class="text-center text-white text-xl">Chi phí đăng ký lớp học</h2></div><div class="w-full rounded-xl bg-[#a7f3d0] p-4 flex flex-col justify-center items-start"><div class="w-full"><h2 class="text-center text-red-600 font-semibold text-xl"> Học phí: 1.350.000 / 1 học viên </h2></div><h2 class="text-center text-[#0a3b50] font-semibold text-xl"> Học phí tham dự lớp học xin được chuyển vào: </h2><ul class="list-disc pl-4"><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> Số tài khoản: 118 000 186 262 </li><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> Chủ tài khoản: Học Viện Y - Dược cổ truyền Việt Nam </li><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> Ngân hàng: Viettinbank - Ngân hàng thương mại cổ phần Công thương Việt Nam - chi nhánh Đống Đa, Hà Nội </li><li class="leading-[1.8em] font-medium text-[#0a3b50] text-base"> Nội dung chuyển khoản: Họ tên - Ngày sinh - Kinh Dịch - Số điện thoại <br> (Ví dụ: Nguyen Van A 12.10.1989 KINH DICH 098xxxxxxx) </li></ul></div><div class="w-full rounded-xl bg-[#a7f3d0] p-4 mt-1 flex desktop:flex-row laptop:flex-row tablet:flex-col mobile:flex-col"><div class="flex">`);
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
      _push(`<p class="leading-[1.8em] font-medium text-[#0a3b50] text-base mr-4"> Địa chỉ: Số 2, Trần Phú, Hà Đông, Hà Nội </p></div><div class="flex">`);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="bg-no-repeat bg-cover w-full desktop:h-[50vh] laptop:h-[40vh] tablet:h-[25vh] mobile:h-[40vh] object-cover brightness-50" style="${ssrRenderStyle({ "background-image": "url('https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/bg-01-min.jpg')" })}"></div><div class="absolute desktop:top-20 laptop:top-16 tablet:top-16 mobile:top-12 desktop:px-60 laptop:px-16 tablet:px-16 mobile:px-8 flex justify-center items-center"><div class="flex flex-col desktop:w-[80%] laptop:w-[80%] tablet:w-full mobile:w-full"><h2 class="text-white fontSpaceGrotesk desktop:text-[36px] laptop:text-[24px] tablet:text-[24px] mobile:text-[24px] font-semibold leading-[1.2em] text-justify"> Tham gia lớp học online để được hướng dẫn chi tiết từ các giảng viên giàu kinh nghiệm trong lĩnh vực </h2><h2 class="text-[#97dd55] fontSpaceGrotesk desktop:text-[36px] laptop:text-[24px] tablet:text-[24px] mobile:text-[24px] font-semibold leading-[1.2em] pt-4"> Kinh Dịch và Y học </h2><div class="mt-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/signup",
        id: "linklogin",
        class: "bgMainColor text-center px-12 py-4 rounded-full text-white hover:scale-110 ease-in duration-300 hover:opacity-80"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Đăng ký `);
          } else {
            return [
              createTextVNode(" Đăng ký ")
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
      _push(`<div class="text-center"><h1 class="desktop:text-2xl laptop:text-xl tablet:text-lg mobile:text-sm font-bold leading-[1em] my-1 text-[#009030] text-justify uppercase"> Học viện y dược cổ truyền Việt Nam </h1><span class="text-[#0a3b50] uppercase desktop:text-xl laptop:text-lg tablet:text-sm mobile:text-xs font-light">Viet Nam university of traditional medicine</span></div></div><div class="mt-4"><p class="leading-[1.8em] font-bold text-[#0a3b50] text-base mr-4"> BẢN QUYỀN THUỘC HỌC VIỆN Y - DƯỢC HỌC CỔ TRUYỀN VIỆT NAM </p><div class="flex">`);
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
      _push(`<p class="leading-[1.8em] font-medium text-[#0a3b50] text-base mr-4"> Địa chỉ: Số 2, Trần Phú, Hà Đông, Hà Nội </p></div><div class="flex">`);
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
      _push(`<p class="leading-[1.8em] font-medium text-[#0a3b50] text-base mr-4"> Email: hocvienyduoc@vutm.edu.vn </p></div></div></div><div class="pt-4 text-[#0a3b50] font-semibold text-base">Copyright © 2023 Vatm.edu.vn</div></div></div>`);
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
export {
  index as default
};
//# sourceMappingURL=index-350a928c.js.map
