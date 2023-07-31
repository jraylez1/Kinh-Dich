import { openBlock, createElementBlock, createElementVNode, warn, inject, ref, computed, unref, defineComponent, mergeProps, renderSlot } from "vue";
import { fromPairs } from "lodash-unified";
import { isString, isObject, hasOwn } from "@vue/shared";
const isUndefined = (val) => val === void 0;
const isNumber = (val) => typeof val === "number";
const isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
const isStringNumber = (val) => {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};
class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function debugWarn(scope, message) {
  if (process.env.NODE_ENV !== "production") {
    const error = isString(scope) ? new ElementPlusError(`[${scope}] ${message}`) : scope;
    console.warn(error);
  }
}
const SCOPE = "utils/dom/style";
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString(value)) {
    return value;
  }
  debugWarn(SCOPE, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.1.0 */
var export_helper_default = (sfc, props) => {
  let target = sfc.__vccOpts || sfc;
  for (let [key, val] of props)
    target[key] = val;
  return target;
};
var avatar_vue_vue_type_script_lang_default = {
  name: "Avatar"
};
var _hoisted_113 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_213 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_313 = [
  _hoisted_213
];
function _sfc_render13(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_113, _hoisted_313);
}
var avatar_default = /* @__PURE__ */ export_helper_default(avatar_vue_vue_type_script_lang_default, [["render", _sfc_render13], ["__file", "avatar.vue"]]);
var calendar_vue_vue_type_script_lang_default = {
  name: "Calendar"
};
var _hoisted_129 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_229 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_328 = [
  _hoisted_229
];
function _sfc_render29(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_129, _hoisted_328);
}
var calendar_default = /* @__PURE__ */ export_helper_default(calendar_vue_vue_type_script_lang_default, [["render", _sfc_render29], ["__file", "calendar.vue"]]);
var chrome_filled_vue_vue_type_script_lang_default = {
  name: "ChromeFilled"
};
var _hoisted_147 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, _hoisted_247 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_346 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_414 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zm117.56 604.72H512zm-97.25-236.73a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_54 = [
  _hoisted_247,
  _hoisted_346,
  _hoisted_414
];
function _sfc_render47(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_147, _hoisted_54);
}
var chrome_filled_default = /* @__PURE__ */ export_helper_default(chrome_filled_vue_vue_type_script_lang_default, [["render", _sfc_render47], ["__file", "chrome-filled.vue"]]);
var circle_close_filled_vue_vue_type_script_lang_default = {
  name: "CircleCloseFilled"
};
var _hoisted_150 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_250 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_349 = [
  _hoisted_250
];
function _sfc_render50(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_150, _hoisted_349);
}
var circle_close_filled_default = /* @__PURE__ */ export_helper_default(circle_close_filled_vue_vue_type_script_lang_default, [["render", _sfc_render50], ["__file", "circle-close-filled.vue"]]);
var close_vue_vue_type_script_lang_default = {
  name: "Close"
};
var _hoisted_156 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_256 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_355 = [
  _hoisted_256
];
function _sfc_render56(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_156, _hoisted_355);
}
var close_default = /* @__PURE__ */ export_helper_default(close_vue_vue_type_script_lang_default, [["render", _sfc_render56], ["__file", "close.vue"]]);
var collection_vue_vue_type_script_lang_default = {
  name: "Collection"
};
var _hoisted_163 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_263 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_362 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_420 = [
  _hoisted_263,
  _hoisted_362
];
function _sfc_render63(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_163, _hoisted_420);
}
var collection_default = /* @__PURE__ */ export_helper_default(collection_vue_vue_type_script_lang_default, [["render", _sfc_render63], ["__file", "collection.vue"]]);
var info_filled_vue_vue_type_script_lang_default = {
  name: "InfoFilled"
};
var _hoisted_1143 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_2143 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_3142 = [
  _hoisted_2143
];
function _sfc_render143(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1143, _hoisted_3142);
}
var info_filled_default = /* @__PURE__ */ export_helper_default(info_filled_vue_vue_type_script_lang_default, [["render", _sfc_render143], ["__file", "info-filled.vue"]]);
var location_vue_vue_type_script_lang_default = {
  name: "Location"
};
var _hoisted_1153 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_2153 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_3152 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_441 = [
  _hoisted_2153,
  _hoisted_3152
];
function _sfc_render153(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1153, _hoisted_441);
}
var location_default = /* @__PURE__ */ export_helper_default(location_vue_vue_type_script_lang_default, [["render", _sfc_render153], ["__file", "location.vue"]]);
var message_vue_vue_type_script_lang_default = {
  name: "Message"
};
var _hoisted_1165 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_2165 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_3164 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_447 = [
  _hoisted_2165,
  _hoisted_3164
];
function _sfc_render165(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1165, _hoisted_447);
}
var message_default = /* @__PURE__ */ export_helper_default(message_vue_vue_type_script_lang_default, [["render", _sfc_render165], ["__file", "message.vue"]]);
var phone_filled_vue_vue_type_script_lang_default = {
  name: "PhoneFilled"
};
var _hoisted_1193 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_2193 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_3192 = [
  _hoisted_2193
];
function _sfc_render193(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1193, _hoisted_3192);
}
var phone_filled_default = /* @__PURE__ */ export_helper_default(phone_filled_vue_vue_type_script_lang_default, [["render", _sfc_render193], ["__file", "phone-filled.vue"]]);
var success_filled_vue_vue_type_script_lang_default = {
  name: "SuccessFilled"
};
var _hoisted_1249 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_2249 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_3248 = [
  _hoisted_2249
];
function _sfc_render249(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1249, _hoisted_3248);
}
var success_filled_default = /* @__PURE__ */ export_helper_default(success_filled_vue_vue_type_script_lang_default, [["render", _sfc_render249], ["__file", "success-filled.vue"]]);
var user_filled_vue_vue_type_script_lang_default = {
  name: "UserFilled"
};
var _hoisted_1276 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_2276 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_3275 = [
  _hoisted_2276
];
function _sfc_render276(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1276, _hoisted_3275);
}
var user_filled_default = /* @__PURE__ */ export_helper_default(user_filled_vue_vue_type_script_lang_default, [["render", _sfc_render276], ["__file", "user-filled.vue"]]);
var warning_filled_vue_vue_type_script_lang_default = {
  name: "WarningFilled"
};
var _hoisted_1287 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_2287 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_3286 = [
  _hoisted_2287
];
function _sfc_render287(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1287, _hoisted_3286);
}
var warning_filled_default = /* @__PURE__ */ export_helper_default(warning_filled_vue_vue_type_script_lang_default, [["render", _sfc_render287], ["__file", "warning-filled.vue"]]);
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withInstallFunction = (fn, name) => {
  fn.install = (app) => {
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn;
};
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const namespaceContextKey = Symbol("namespaceContextKey");
const useGetDerivedNamespace = (namespaceOverrides) => {
  const derivedNamespace = namespaceOverrides || inject(namespaceContextKey, ref(defaultNamespace));
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};
const useNamespace = (block, namespaceOverrides) => {
  const namespace = useGetDerivedNamespace(namespaceOverrides);
  const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__ = /* @__PURE__ */ defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      const { size, color } = props;
      if (!size && !color)
        return {};
      return {
        fontSize: isUndefined(size) ? void 0 : addUnit(size),
        "--color": color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const ElIcon = withInstall(Icon);
const _imports_0 = "data:image/jpeg;base64,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";
const base = "";
const elIcon = "";
export {
  ElIcon as E,
  _imports_0 as _,
  avatar_default as a,
  collection_default as b,
  calendar_default as c,
  chrome_filled_default as d,
  definePropType as e,
  circle_close_filled_default as f,
  close_default as g,
  isNumber as h,
  info_filled_default as i,
  buildProp as j,
  useNamespace as k,
  location_default as l,
  message_default as m,
  defaultNamespace as n,
  debugWarn as o,
  phone_filled_default as p,
  namespaceContextKey as q,
  buildProps as r,
  success_filled_default as s,
  _export_sfc as t,
  user_filled_default as u,
  withInstall as v,
  warning_filled_default as w,
  isElement as x,
  withInstallFunction as y
};
//# sourceMappingURL=el-icon-c0a0f4d5.js.map
