import { _ as __nuxt_component_0$1 } from './nuxt-link-563b35af.mjs';
import { ref, defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createVNode, Transition, withCtx, withDirectives, createElementVNode, toDisplayString, vShow, shallowReactive, watch, createBlock, normalizeStyle, createCommentVNode, resolveDynamicComponent, Fragment, withModifiers, useSSRContext, getCurrentInstance, provide, inject, isVNode, mergeProps, createTextVNode, isRef, render } from 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/vue/server-renderer/index.mjs';
import { e as buildProp, f as buildProps, g as useNamespace, i as isNumber, w as withInstall, h as definePropType, E as ElIcon, j as withInstallFunction, s as success_filled_default, k as warning_filled_default, n as circle_close_filled_default, o as info_filled_default, q as defaultNamespace, r as debugWarn, t as namespaceContextKey, _ as _imports_0, l as location_default, p as phone_filled_default, m as message_default, v as close_default, x as _export_sfc$1, y as isElement } from './el-icon-c0a0f4d5.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { d as defineStore, a as useRuntimeConfig, b as useRouter } from '../server.mjs';
import axios from 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/axios/index.js';
import { useEventListener, useResizeObserver, useTimeoutFn, isClient } from 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/@vueuse/core/index.mjs';
import { get } from 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/lodash-unified/import.js';
import { isString, isFunction } from 'file://D:/_Web_PJ/Project/FE_kinhdich/node_modules/@vue/shared/index.js';

const keysOf = (arr) => Object.keys(arr);
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const TypeComponents = {
  Close: close_default,
  SuccessFilled: success_filled_default,
  InfoFilled: info_filled_default,
  WarningFilled: warning_filled_default,
  CircleCloseFilled: circle_close_filled_default
};
const TypeComponentsMap = {
  success: success_filled_default,
  warning: warning_filled_default,
  error: circle_close_filled_default,
  info: info_filled_default
};
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
const componentSizes = ["", "default", "small", "large"];
const mutable = (val) => val;
var English = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));
const translate = (path, option, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
  var _a;
  return `${(_a = option == null ? void 0 : option[key]) != null ? _a : `{${key}}`}`;
});
const buildLocaleContext = (locale) => {
  const lang = computed(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};
const localeContextKey = Symbol("localeContextKey");
const useLocale = (localeOverrides) => {
  const locale = localeOverrides || inject(localeContextKey, ref());
  return buildLocaleContext(computed(() => locale.value || English));
};
const zIndex = ref(0);
const defaultInitialZIndex = 2e3;
const zIndexContextKey = Symbol("zIndexContextKey");
const useZIndex = (zIndexOverrides) => {
  const zIndexInjection = zIndexOverrides || inject(zIndexContextKey, void 0);
  const initialZIndex = computed(() => {
    const zIndexFromInjection = unref(zIndexInjection);
    return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
  });
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};
buildProp({
  type: String,
  values: componentSizes,
  required: false
});
const SIZE_INJECTION_KEY = Symbol("size");
const configProviderContextKey = Symbol();
const globalConfig = ref();
function useGlobalConfig(key, defaultValue = void 0) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return computed(() => {
      var _a, _b;
      return (_b = (_a = config.value) == null ? void 0 : _a[key]) != null ? _b : defaultValue;
    });
  } else {
    return config;
  }
}
function useGlobalComponentSettings(block, sizeFallback) {
  const config = useGlobalConfig();
  const ns = useNamespace(block, computed(() => {
    var _a;
    return ((_a = config.value) == null ? void 0 : _a.namespace) || defaultNamespace;
  }));
  const locale = useLocale(computed(() => {
    var _a;
    return (_a = config.value) == null ? void 0 : _a.locale;
  }));
  const zIndex2 = useZIndex(computed(() => {
    var _a;
    return ((_a = config.value) == null ? void 0 : _a.zIndex) || defaultInitialZIndex;
  }));
  const size = computed(() => {
    var _a;
    return unref(sizeFallback) || ((_a = config.value) == null ? void 0 : _a.size) || "";
  });
  provideGlobalConfig(computed(() => unref(config) || {}));
  return {
    ns,
    locale,
    zIndex: zIndex2,
    size
  };
}
const provideGlobalConfig = (config, app, global = false) => {
  var _a;
  const inSetup = !!getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : void 0;
  const provideFn = (_a = app == null ? void 0 : app.provide) != null ? _a : inSetup ? provide : void 0;
  if (!provideFn) {
    debugWarn("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const context = computed(() => {
    const cfg = unref(config);
    if (!(oldConfig == null ? void 0 : oldConfig.value))
      return cfg;
    return mergeConfig(oldConfig.value, cfg);
  });
  provideFn(configProviderContextKey, context);
  provideFn(localeContextKey, computed(() => context.value.locale));
  provideFn(namespaceContextKey, computed(() => context.value.namespace));
  provideFn(zIndexContextKey, computed(() => context.value.zIndex));
  provideFn(SIZE_INJECTION_KEY, {
    size: computed(() => context.value.size || "")
  });
  if (global || !globalConfig.value) {
    globalConfig.value = context.value;
  }
  return context;
};
const mergeConfig = (a, b) => {
  var _a;
  const keys = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
  const obj = {};
  for (const key of keys) {
    obj[key] = (_a = b[key]) != null ? _a : a[key];
  }
  return obj;
};
const messageConfig = {};
const badgeProps = buildProps({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
});
const _hoisted_1$1 = ["textContent"];
const __default__$1 = /* @__PURE__ */ defineComponent({
  name: "ElBadge"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: badgeProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("badge");
    const content = computed(() => {
      if (props.isDot)
        return "";
      if (isNumber(props.value) && isNumber(props.max)) {
        return props.max < props.value ? `${props.max}+` : `${props.value}`;
      }
      return `${props.value}`;
    });
    expose({
      content
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        renderSlot(_ctx.$slots, "default"),
        createVNode(Transition, {
          name: `${unref(ns).namespace.value}-zoom-in-center`,
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("sup", {
              class: normalizeClass([
                unref(ns).e("content"),
                unref(ns).em("content", _ctx.type),
                unref(ns).is("fixed", !!_ctx.$slots.default),
                unref(ns).is("dot", _ctx.isDot)
              ]),
              textContent: toDisplayString(unref(content))
            }, null, 10, _hoisted_1$1), [
              [vShow, !_ctx.hidden && (unref(content) || _ctx.isDot)]
            ])
          ]),
          _: 1
        }, 8, ["name"])
      ], 2);
    };
  }
});
var Badge = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const ElBadge = withInstall(Badge);
const messageTypes = ["success", "info", "warning", "error"];
const messageDefaults = mutable({
  customClass: "",
  center: false,
  dangerouslyUseHTMLString: false,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: false,
  type: "info",
  offset: 16,
  zIndex: 0,
  grouping: false,
  repeatNum: 1,
  appendTo: isClient ? document.body : void 0
});
const messageProps = buildProps({
  customClass: {
    type: String,
    default: messageDefaults.customClass
  },
  center: {
    type: Boolean,
    default: messageDefaults.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: messageDefaults.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: messageDefaults.duration
  },
  icon: {
    type: iconPropType,
    default: messageDefaults.icon
  },
  id: {
    type: String,
    default: messageDefaults.id
  },
  message: {
    type: definePropType([
      String,
      Object,
      Function
    ]),
    default: messageDefaults.message
  },
  onClose: {
    type: definePropType(Function),
    required: false
  },
  showClose: {
    type: Boolean,
    default: messageDefaults.showClose
  },
  type: {
    type: String,
    values: messageTypes,
    default: messageDefaults.type
  },
  offset: {
    type: Number,
    default: messageDefaults.offset
  },
  zIndex: {
    type: Number,
    default: messageDefaults.zIndex
  },
  grouping: {
    type: Boolean,
    default: messageDefaults.grouping
  },
  repeatNum: {
    type: Number,
    default: messageDefaults.repeatNum
  }
});
const messageEmits = {
  destroy: () => true
};
const instances = shallowReactive([]);
const getInstance = (id) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  const current = instances[idx];
  let prev;
  if (idx > 0) {
    prev = instances[idx - 1];
  }
  return { current, prev };
};
const getLastOffset = (id) => {
  const { prev } = getInstance(id);
  if (!prev)
    return 0;
  return prev.vm.exposed.bottom.value;
};
const getOffsetOrSpace = (id, offset) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  return idx > 0 ? 20 : offset;
};
const _hoisted_1 = ["id"];
const _hoisted_2 = ["innerHTML"];
const __default__ = /* @__PURE__ */ defineComponent({
  name: "ElMessage"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: messageProps,
  emits: messageEmits,
  setup(__props, { expose }) {
    const props = __props;
    const { Close } = TypeComponents;
    const { ns, zIndex: zIndex2 } = useGlobalComponentSettings("message");
    const { currentZIndex, nextZIndex } = zIndex2;
    const messageRef = ref();
    const visible = ref(false);
    const height = ref(0);
    let stopTimer = void 0;
    const badgeType = computed(() => props.type ? props.type === "error" ? "danger" : props.type : "info");
    const typeClass = computed(() => {
      const type = props.type;
      return { [ns.bm("icon", type)]: type && TypeComponentsMap[type] };
    });
    const iconComponent = computed(() => props.icon || TypeComponentsMap[props.type] || "");
    const lastOffset = computed(() => getLastOffset(props.id));
    const offset = computed(() => getOffsetOrSpace(props.id, props.offset) + lastOffset.value);
    const bottom = computed(() => height.value + offset.value);
    const customStyle = computed(() => ({
      top: `${offset.value}px`,
      zIndex: currentZIndex.value
    }));
    function startTimer() {
      if (props.duration === 0)
        return;
      ({ stop: stopTimer } = useTimeoutFn(() => {
        close();
      }, props.duration));
    }
    function clearTimer() {
      stopTimer == null ? void 0 : stopTimer();
    }
    function close() {
      visible.value = false;
    }
    function keydown({ code }) {
      if (code === EVENT_CODE.esc) {
        close();
      }
    }
    watch(() => props.repeatNum, () => {
      clearTimer();
      startTimer();
    });
    useEventListener(document, "keydown", keydown);
    useResizeObserver(messageRef, () => {
      height.value = messageRef.value.getBoundingClientRect().height;
    });
    expose({
      visible,
      bottom,
      close
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade"),
        onBeforeLeave: _ctx.onClose,
        onAfterLeave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("destroy")),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            id: _ctx.id,
            ref_key: "messageRef",
            ref: messageRef,
            class: normalizeClass([
              unref(ns).b(),
              { [unref(ns).m(_ctx.type)]: _ctx.type && !_ctx.icon },
              unref(ns).is("center", _ctx.center),
              unref(ns).is("closable", _ctx.showClose),
              _ctx.customClass
            ]),
            style: normalizeStyle(unref(customStyle)),
            role: "alert",
            onMouseenter: clearTimer,
            onMouseleave: startTimer
          }, [
            _ctx.repeatNum > 1 ? (openBlock(), createBlock(unref(ElBadge), {
              key: 0,
              value: _ctx.repeatNum,
              type: unref(badgeType),
              class: normalizeClass(unref(ns).e("badge"))
            }, null, 8, ["value", "type", "class"])) : createCommentVNode("v-if", true),
            unref(iconComponent) ? (openBlock(), createBlock(unref(ElIcon), {
              key: 1,
              class: normalizeClass([unref(ns).e("icon"), unref(typeClass)])
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(iconComponent))))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true),
            renderSlot(_ctx.$slots, "default", {}, () => [
              !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", {
                key: 0,
                class: normalizeClass(unref(ns).e("content"))
              }, toDisplayString(_ctx.message), 3)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "),
                createElementVNode("p", {
                  class: normalizeClass(unref(ns).e("content")),
                  innerHTML: _ctx.message
                }, null, 10, _hoisted_2)
              ], 2112))
            ]),
            _ctx.showClose ? (openBlock(), createBlock(unref(ElIcon), {
              key: 2,
              class: normalizeClass(unref(ns).e("closeBtn")),
              onClick: withModifiers(close, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(Close))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ], 46, _hoisted_1), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
      }, 8, ["name", "onBeforeLeave"]);
    };
  }
});
var MessageConstructor = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
let seed = 1;
const normalizeOptions = (params) => {
  const options = !params || isString(params) || isVNode(params) || isFunction(params) ? { message: params } : params;
  const normalized = {
    ...messageDefaults,
    ...options
  };
  if (!normalized.appendTo) {
    normalized.appendTo = document.body;
  } else if (isString(normalized.appendTo)) {
    let appendTo = document.querySelector(normalized.appendTo);
    if (!isElement(appendTo)) {
      debugWarn("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body.");
      appendTo = document.body;
    }
    normalized.appendTo = appendTo;
  }
  return normalized;
};
const closeMessage = (instance) => {
  const idx = instances.indexOf(instance);
  if (idx === -1)
    return;
  instances.splice(idx, 1);
  const { handler } = instance;
  handler.close();
};
const createMessage = ({ appendTo, ...options }, context) => {
  const id = `message_${seed++}`;
  const userOnClose = options.onClose;
  const container = document.createElement("div");
  const props = {
    ...options,
    id,
    onClose: () => {
      userOnClose == null ? void 0 : userOnClose();
      closeMessage(instance);
    },
    onDestroy: () => {
      render(null, container);
    }
  };
  const vnode = createVNode(MessageConstructor, props, isFunction(props.message) || isVNode(props.message) ? {
    default: isFunction(props.message) ? props.message : () => props.message
  } : null);
  vnode.appContext = context || message._context;
  render(vnode, container);
  appendTo.appendChild(container.firstElementChild);
  const vm = vnode.component;
  const handler = {
    close: () => {
      vm.exposed.visible.value = false;
    }
  };
  const instance = {
    id,
    vnode,
    vm,
    handler,
    props: vnode.component.props
  };
  return instance;
};
const message = (options = {}, context) => {
  if (!isClient)
    return { close: () => void 0 };
  if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) {
    return { close: () => void 0 };
  }
  const normalized = normalizeOptions(options);
  if (normalized.grouping && instances.length) {
    const instance2 = instances.find(({ vnode: vm }) => {
      var _a;
      return ((_a = vm.props) == null ? void 0 : _a.message) === normalized.message;
    });
    if (instance2) {
      instance2.props.repeatNum += 1;
      instance2.props.type = normalized.type;
      return instance2.handler;
    }
  }
  const instance = createMessage(normalized, context);
  instances.push(instance);
  return instance.handler;
};
messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    const normalized = normalizeOptions(options);
    return message({ ...normalized, type }, appContext);
  };
});
function closeAll(type) {
  for (const instance of instances) {
    if (!type || type === instance.props.type) {
      instance.handler.close();
    }
  }
}
message.closeAll = closeAll;
message._context = null;
const ElMessage = withInstallFunction(message, "$message");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-24 py-5 px-12 flex justify-between items-center w-full fixed top-0 left-0 right-0 z-[99] bg-white shadow-xl" }, _attrs))}><div class="w-auto flex justify-start items-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="h-20 w-[70px] mr-4"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
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
    to: "/",
    id: "linklogin",
    class: "bg-transparent border-2 border-[#009030] text-center text-[#009030] px-8 py-3 rounded-full hover:text-white hover:bg-[#009030] hover:scale-110 ease-in duration-300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Trang ch\u1EE7 `);
      } else {
        return [
          createTextVNode(" Trang ch\u1EE7 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderLogin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "FooterLogin",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_el_icon = ElIcon;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full desktop:px-[100px] laptop:px-[20px] tablet:px-[20px] mobile:px-[20px] pt-8 pb-8"><div class="w-full flex justify-between items-center border-b-2 border-[#97D84F] pb-2 desktop:flex-row laptop:flex-row tablet:flex-col mobile:flex-col"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="h-20 w-[70px] mr-4"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterLogin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;
const useHomeStore = defineStore("home", {
  state: () => ({
    user: {
      fullName: "",
      mobile: "",
      email: "",
      address: "",
      age: null,
      diseases: ""
    },
    number: "",
    runTimeConfig: /* @__PURE__ */ useRuntimeConfig()
  }),
  getters: {},
  actions: {
    async checkNumber(number) {
      try {
        const response = await axios.get(
          `${this.runTimeConfig.public.baseUrl}Api/Course/CheckNumber?number=${number}`
        );
        const data = response.data;
        if (data.error === true) {
          ElMessage.error(data.message);
        }
        const response2 = await axios.post(`${this.runTimeConfig.public.baseUrl}Api/Course/LoginLiveClass`, {
          transId: data.data.transId,
          displayName: data.data.displayName
        });
        const data2 = response2.data;
        if (data2.error === false) {
          if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
            window.location = `zoomus://zoom.us/join?action=join&confno=${data2.data.meetingID}&uid=${encodeURI(data2.data.displayName)}&uname=${encodeURI(
              data2.data.displayName
            )}&browser=chrome&pwd=${data2.data.password}`;
          } else {
            window.location = `zoommtg://zoom.us/join?action=join&confno=${data2.data.meetingID}&uid=${encodeURI(data2.data.displayName)}&uname=${encodeURI(
              data2.data.displayName
            )}&browser=chrome&pwd=${data2.data.password}`;
          }
        } else {
          ElMessage.error(data2.message);
        }
      } catch (error) {
        console.error("L\u1ED7i k\u1EBFt n\u1ED1i \u0111\u1EBFn m\xE1y ch\u1EE7. Vui l\xF2ng ki\u1EC3m tra k\u1EBFt n\u1ED1i internet tr\xEAn thi\u1EBFt b\u1ECB c\u1EE7a b\u1EA1n.");
      }
    },
    async resetModal() {
      this.user.fullName = "";
      this.user.mobile = "";
      this.user.email = "";
      this.user.address = "";
      this.user.age = null;
      this.user.diseases = "";
      this.number = "";
    },
    async addMember() {
      const router = useRouter();
      try {
        const response = await axios.post(`${this.runTimeConfig.public.baseUrl}Api/Course/Add`, {
          fullName: this.user.fullName,
          mobile: this.user.mobile,
          email: this.user.email,
          address: this.user.address,
          age: this.user.age,
          diseases: this.user.diseases
        });
        const data = response.data;
        if (data.error === false) {
          ElMessage({
            message: data.message,
            type: "success"
          });
          this.resetModal();
          router.push("/login");
        } else {
          ElMessage.error(data.message);
        }
      } catch (error) {
        console.error("L\u1ED7i k\u1EBFt n\u1ED1i \u0111\u1EBFn m\xE1y ch\u1EE7. Vui l\xF2ng ki\u1EC3m tra k\u1EBFt n\u1ED1i internet tr\xEAn thi\u1EBFt b\u1ECB c\u1EE7a b\u1EA1n.");
      }
    }
  }
});

export { __nuxt_component_0 as _, __nuxt_component_2 as a, useHomeStore as u };
//# sourceMappingURL=homeStore-19a9ff2f.mjs.map
