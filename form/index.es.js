import { Input as zt, Textarea as ln, SelectOption as sn, Select as cn, Radio as Ft, RadioGroup as Lt, Checkbox as un, CheckboxGroup as dn, DatePicker as fn, InputNumber as pn, Button as vn, Upload as mn, Popconfirm as gn, TabPane as hn, Tabs as bn, Col as yn, Alert as _n, Row as On } from "ant-design-vue/es";
import "ant-design-vue/es/tabs/style/css";
import "ant-design-vue/es/col/style/css";
import "ant-design-vue/es/input/style/css";
import "ant-design-vue/es/radio/style/css";
import "ant-design-vue/es/alert/style/css";
import "ant-design-vue/es/row/style/css";
import { nextTick as ze, h as H, createVNode as d, defineComponent as It, ref as x, inject as tt, resolveComponent as wn, openBlock as s, createBlock as U, unref as Z, withCtx as m, createElementVNode as g, normalizeClass as pe, createElementBlock as u, Fragment as W, renderList as G, createCommentVNode as k, createTextVNode as S, toDisplayString as b, withDirectives as Ht, vShow as Cn, watch as nt, provide as at, normalizeStyle as Sn, resolveDynamicComponent as kn, renderSlot as Tn } from "vue";
import xe from "vuedraggable/src/vuedraggable";
import "ant-design-vue/es/select/style/css";
import "ant-design-vue/es/checkbox/style/css";
import "ant-design-vue/es/date-picker/style/css";
import "ant-design-vue/es/input-number/style/css";
import "ant-design-vue/es/button/style/css";
import "ant-design-vue/es/upload/style/css";
import "ant-design-vue/es/popconfirm/style/css";
import { message as rt } from "ant-design-vue";
const Pn = {
  input: "单行文本框",
  textarea: "多行文本框",
  select: "下拉框",
  selectPlaceholder: "请选择",
  option: "选项",
  multiple: "多选下拉框",
  radio: "单选框",
  checkbox: "复选框",
  date: "日期",
  dateFormatVal1: "YYYY-MM-DD",
  dateFormatVal2: "YYYY/MM/DD",
  inputNumber: "数字文本框",
  inputPlaceholder: "请输入",
  value: "数值",
  percent: "百分比",
  email: "邮箱",
  show: "显示",
  hide: "隐藏",
  link: "超链接",
  attachment: "附件",
  container12: "一行两列布局",
  container13: "一行三列布局",
  removeConfirm: "您确认删除这个组件吗？",
  remove: "删除组件",
  upload: "上传",
  uploaderFail: "上传失败！",
  actionWarning: "请先填写该附件的上传地址",
  fieldsTxt: "字段控件",
  dragToCanvas: "拖拽到页面中央",
  layoutTxt: "布局控件",
  setting: "模块设置",
  title: "标题",
  defaultVal: "默认提示语",
  optionsTxt: "选项设置",
  dateFormat: "日期格式",
  numberType: "数字类型",
  mailSuffix: "邮箱后缀",
  actionTxt: "上传地址",
  nameMapping: "文件名称映射",
  urlMapping: "文件地址映射",
  selectComponent: "请先选择控件",
  urlMappingWarning: "上传控件的文件地址映射为空"
}, xn = {
  input: "Input",
  textarea: "Textarea",
  select: "Select",
  selectPlaceholder: "Please select",
  option: "Option",
  multiple: "Multiple",
  radio: "Radio",
  checkbox: "Checkbox",
  date: "Date",
  dateFormatVal1: "YYYY-MM-DD",
  dateFormatVal2: "YYYY/MM/DD",
  inputNumber: "InputNumber",
  inputPlaceholder: "Please input",
  value: "value",
  percent: "percent",
  email: "Email",
  show: "show",
  hide: "hide",
  link: "Link",
  attachment: "Attachment",
  container12: "One row two cols",
  container13: "One row three cols",
  removeConfirm: "confrim to remove？",
  remove: "remove",
  upload: "upload",
  uploaderFail: "upload failed!",
  actionWarning: "action is empty!",
  fieldsTxt: "Fields control",
  dragToCanvas: "drag to layout",
  layoutTxt: "Layout control",
  setting: "Setting",
  title: "Title",
  defaultVal: "Placeholder",
  optionsTxt: "Options",
  dateFormat: "Date format",
  numberType: "Number type",
  mailSuffix: "Mail suffix",
  actionTxt: "Action",
  nameMapping: "Name mapping",
  urlMapping: "Url mapping",
  selectComponent: "Please select component",
  urlMappingWarning: "url mapping is null"
};
function Ut(e) {
  return e === "en-US" ? xn : Pn;
}
const $e = (e) => e === 1 ? {
  l: [],
  r: []
} : e === 5e3 ? {
  l: [],
  m: [],
  r: []
} : {}, $n = (e) => [
  {
    isTem: !0,
    id: 1,
    type: "container2",
    columns: $e(1),
    title: e.container12
  },
  {
    isTem: !0,
    id: 5e3,
    type: "container3",
    columns: $e(5e3),
    title: e.container13
  }
], Fe = {};
function Mn(e) {
  return e._vuebarState = {
    // config with default values that may be overwritten on directive intialization
    config: {
      scrollThrottle: 10,
      draggerThrottle: 10,
      resizeRefresh: !0,
      observerThrottle: 100,
      resizeDebounce: 100,
      unselectableBody: !0,
      overrideFloatingScrollbar: !0,
      scrollingPhantomDelay: 1e3,
      draggingPhantomDelay: 1e3,
      preventParentScroll: !1,
      useScrollbarPseudo: !1,
      // experimental
      el1Class: "vb",
      el1ScrollVisibleClass: "vb-visible",
      el1ScrollInvisibleClass: "vb-invisible",
      el1ScrollingClass: "vb-scrolling",
      el1ScrollingPhantomClass: "vb-scrolling-phantom",
      el1DraggingClass: "vb-dragging",
      el1DraggingPhantomClass: "vb-dragging-phantom",
      el2Class: "vb-content",
      draggerClass: "vb-dragger",
      draggerStylerClass: "vb-dragger-styler"
    },
    // reference to binding
    binding: null,
    // references to directive DOM elements
    el1: null,
    el2: null,
    dragger: null,
    // show dragger
    draggerEnabled: null,
    // properties computed for internal directive logic & DOM manipulations
    visibleArea: 0,
    // ratio between container height and scrollable content height
    scrollTop: 0,
    // position of content scrollTop in px
    barTop: 0,
    // position of dragger in px
    barHeight: 0,
    // height of dragger in px
    mouseBarOffsetY: 0,
    // relative position of mouse at the time of clicking on dragger
    barDragging: !1,
    // when the dragger is used
    // reference to MutationObserver
    mutationObserver: null,
    // references to timeouts for DOM class manipulation
    scrollingClassTimeout: null,
    draggingClassTimeout: null,
    scrollingPhantomClassTimeout: null,
    draggingPhantomClassTimeout: null,
    // references to a functions we'll need when removing events
    barMousedown: null,
    documentMousemove: null,
    documentMouseup: null,
    windowResize: null,
    scrollHandler: null,
    wheelHandler: null
  }, e._vuebarState;
}
function $(e) {
  return e._vuebarState;
}
function jn(e) {
  return !!e.firstChild;
}
function Me(e) {
  const n = $(e);
  n.visibleArea = n.el2.clientHeight / n.el2.scrollHeight;
}
function An(e) {
  const n = $(e);
  n.scrollTop = n.barTop * (n.el2.scrollHeight / n.el2.clientHeight);
}
function me(e, n) {
  const t = $(e);
  if (!n)
    return t.barTop = t.el2.scrollTop * t.visibleArea, !1;
  const a = n.clientY - t.el1.getBoundingClientRect().top;
  a <= t.mouseBarOffsetY && (t.barTop = 0), a > t.mouseBarOffsetY && (t.barTop = a - t.mouseBarOffsetY), t.barTop + t.barHeight >= t.el2.clientHeight && (t.barTop = t.el2.clientHeight - t.barHeight);
}
function je(e) {
  const n = $(e);
  n.visibleArea >= 1 ? n.barHeight = 0 : n.barHeight = n.el2.clientHeight * n.visibleArea;
}
function En(e) {
  const n = $(e), t = document.createElement("div"), a = document.createElement("div");
  return t.className = n.config.draggerClass, t.style.position = "absolute", n.draggerEnabled || (t.style.display = "none"), a.className = n.config.draggerStylerClass, t.appendChild(a), n.el1.appendChild(t), t;
}
function ge(e, n = {}) {
  const t = $(e);
  t.dragger.style.height = parseInt(Math.round(t.barHeight) + "") + "px", t.dragger.style.top = parseInt(Math.round(t.barTop) + "") + "px", t.draggerEnabled && t.visibleArea < 1 ? (N(t.el1, t.config.el1ScrollInvisibleClass), J(t.el1, t.config.el1ScrollVisibleClass)) : (N(t.el1, t.config.el1ScrollVisibleClass), J(t.el1, t.config.el1ScrollInvisibleClass)), n.withScrollingClasses && (J(t.el1, t.config.el1ScrollingClass), t.scrollingClassTimeout && clearTimeout(t.scrollingClassTimeout), t.scrollingClassTimeout = setTimeout(function() {
    N(t.el1, t.config.el1ScrollingClass);
  }, t.config.scrollThrottle + 5), J(t.el1, t.config.el1ScrollingPhantomClass), t.scrollingPhantomClassTimeout && clearTimeout(t.scrollingPhantomClassTimeout), t.scrollingPhantomClassTimeout = setTimeout(function() {
    N(t.el1, t.config.el1ScrollingPhantomClass);
  }, t.config.scrollThrottle + t.config.scrollingPhantomDelay));
}
function Dn(e) {
  const n = $(e), t = "vuebar-pseudo-element-styles", a = "." + n.config.el2Class + "::-webkit-scrollbar";
  let r = document.getElementById(t), i = null;
  r || (r = document.createElement("style"), r.id = t, document.head.appendChild(r)), i = r.sheet;
  let f = !1;
  for (let c = 0, w = i.rules.length; c < w; c++)
    i.rules[c].selectorText == a && (f = !0);
  if (f)
    return !1;
  i.insertRule && i.insertRule(a + "{display:none}", 0);
}
function zn(e, n) {
  const t = $(e);
  if (t.visibleArea >= 1)
    return !1;
  const a = t.el2.scrollHeight - t.el2.clientHeight, r = t.el2.scrollTop, i = n.deltaY < 0, f = n.deltaY > 0;
  if (r <= 0 && i || r >= a && f)
    return n.preventDefault(), !1;
}
function Fn(e) {
  const n = $(e);
  n.el2.scrollTop = n.scrollTop;
}
function se(e, n) {
  n = n || {}, n.immediate && (Me(e), me(e), je(e), ge(e)), ze(
    function() {
      if (!$(e))
        return !1;
      Me(e), me(e), je(e), ge(e);
    }.bind(this)
  );
}
function Ln(e) {
  const n = $(e);
  return Le(
    function() {
      Me(e), je(e), n.barDragging || (me(e), ge(e, { withScrollingClasses: !0 }));
    }.bind(this),
    n.config.scrollThrottle
  );
}
function In(e) {
  return function(n) {
    zn(e, n);
  }.bind(this);
}
function Hn(e) {
  const n = $(e);
  return Le(
    function(t) {
      me(e, t), ge(e), An(e), Fn(e);
    }.bind(this),
    n.config.draggerThrottle
  );
}
function Un(e) {
  const n = $(e);
  return function() {
    n.barDragging = !1, n.el1.style.userSelect = "", n.config.unselectableBody && Ie(document.body, "UserSelect", ""), N(n.el1, n.config.el1DraggingClass), n.draggingPhantomClassTimeout = setTimeout(function() {
      N(n.el1, n.config.el1DraggingPhantomClass);
    }, n.config.draggingPhantomDelay), document.removeEventListener("mousemove", n.documentMousemove, !1), document.removeEventListener("mouseup", n.documentMouseup, !1);
  }.bind(this);
}
function Nn(e) {
  const n = $(e);
  return function(t) {
    if (t.which !== 1)
      return !1;
    n.barDragging = !0, n.mouseBarOffsetY = t.offsetY, n.el1.style.userSelect = "none", n.config.unselectableBody && Ie(document.body, "UserSelect", "none"), J(n.el1, n.config.el1DraggingClass), n.draggingPhantomClassTimeout && clearTimeout(n.draggingPhantomClassTimeout), J(n.el1, n.config.el1DraggingPhantomClass), document.addEventListener("mousemove", n.documentMousemove, !1), document.addEventListener("mouseup", n.documentMouseup, !1);
  }.bind(this);
}
function Bn(e) {
  const n = $(e);
  return Rn(
    function() {
      se(e);
    }.bind(this),
    n.config.resizeDebounce
  );
}
function Vn(e) {
  if (typeof MutationObserver > "u")
    return null;
  const n = $(e), t = new MutationObserver(
    Le(function() {
      se(e);
    }, n.config.observerThrottle)
  );
  return t.observe(n.el2, {
    childList: !0,
    characterData: !0,
    subtree: !0
  }), t;
}
function Nt(e, n) {
  if (!jn.call(this, e) || e._vuebarState)
    return !1;
  const t = Mn(e), a = n.value ? n.value : n || {};
  for (const c in a)
    t.config[c] = a[c];
  const r = qn(), i = Wn(e.firstElementChild), f = i == 0;
  t.draggerEnabled = !f || t.config.overrideFloatingScrollbar ? 1 : 0, t.binding = n.value ? n : null, t.el1 = e, t.el2 = e.firstElementChild, t.dragger = En(e), t.barMousedown = Nn(e), t.documentMousemove = Hn(e), t.documentMouseup = Un(e), t.windowResize = Bn(e), t.scrollHandler = Ln(e), t.wheelHandler = In(e), t.mutationObserver = Vn(e), J(t.el1, t.config.el1Class), t.el1.style.position = "relative", t.el1.style.overflow = "hidden", J(t.el2, t.config.el2Class), t.el2.style.display = "block", t.el2.style.overflowX = "hidden", t.el2.style.overflowY = "scroll", t.el2.style.height = "100%", t.draggerEnabled && (t.config.useScrollbarPseudo && (r.chrome || r.safari) ? (t.el2.style.width = "100%", Dn(e)) : f ? (t.el2.style.width = "100%", Ie(t.el2, "BoxSizing", "content-box"), t.el2.style.paddingRight = "20px") : t.el2.style.width = "calc(100% + " + i + "px)"), t.el2.addEventListener("scroll", t.scrollHandler, 0), t.dragger.addEventListener("mousedown", t.barMousedown, 0), t.config.preventParentScroll && t.el2.addEventListener("wheel", t.wheelHandler, 0), t.config.resizeRefresh && window.addEventListener("resize", t.windowResize, !1), se(e, { immediate: !0 });
}
function Bt(e, n) {
  n = n || {};
  const t = $(e);
  t && (t.dragger.removeEventListener("mousedown", t.barMousedown, 0), t.el2.removeEventListener("scroll", t.scrollHandler, 0), t.el2.removeEventListener("wheel", t.scrollHandler, 0), window.removeEventListener("resize", t.windowResize, !1), t.mutationObserver && t.mutationObserver.disconnect(), N(t.el1, t.config.el1Class), N(t.el1, t.config.el1ScrollVisibleClass), N(t.el1, t.config.el1ScrollInvisibleClass), N(t.el1, t.config.el1ScrollingClass), N(t.el1, t.config.el1ScrollingPhantomClass), N(t.el1, t.config.el1DraggingClass), n.clearStyles && (t.el1.style.position = "", t.el1.style.overflow = ""), N(t.el2, t.config.el2Class), n.clearStyles && (t.el2.style.display = "", t.el2.style.overflowX = "", t.el2.style.overflowY = "", t.el2.style.msOverflowStyle = "", t.el2.style.height = "", t.el2.style.width = ""), t.dragger.removeChild(t.dragger.firstChild), t.el1.removeChild(t.dragger), t.scrollingPhantomClassTimeout && clearTimeout(t.scrollingPhantomClassTimeout), t.draggingPhantomClassTimeout && clearTimeout(t.draggingPhantomClassTimeout), delete e._vuebarState);
}
function Rn(e, n) {
  let t = null;
  return function() {
    const a = this, r = arguments;
    clearTimeout(t), t = setTimeout(function() {
      e.apply(a, r);
    }, n);
  };
}
function Le(e, n, t) {
  n || (n = 250);
  let a, r;
  return function() {
    const i = t || this, f = +/* @__PURE__ */ new Date(), c = arguments;
    a && f < a + n ? (clearTimeout(r), r = setTimeout(function() {
      a = f, e.apply(i, c);
    }, n)) : (a = f, e.apply(i, c));
  };
}
function Ie(e, n, t) {
  e.style["webkit" + n] = t, e.style["moz" + n] = t, e.style["ms" + n] = t, e.style["o" + n] = t, e.style[n.slice(0, 1).toLowerCase() + n.substring(1)] = t;
}
function Yn(e, n) {
  return e.classList ? e.classList.contains(n) : new RegExp("\\b" + n + "\\b").test(e.className);
}
function J(e, n) {
  e.classList ? e.classList.add(n) : Yn(e, n) || (e.className += " " + n);
}
function N(e, n) {
  e.classList ? e.classList.remove(n) : e.className = e.className.replace(
    new RegExp("\\b" + n + "\\b", "g"),
    ""
  );
}
function qn() {
  function e() {
    const V = window.navigator.userAgent.match(
      /(?:MSIE |Trident\/.*; rv:)(\d+)/
    );
    return V ? parseInt(V[1]) : void 0;
  }
  const n = window.navigator.userAgent, t = window.navigator.vendor, a = n.toLowerCase().indexOf("chrome") > -1 && t.toLowerCase().indexOf("google") > -1, r = n.indexOf("Edge") > -1, i = !!window.safari || n.toLowerCase().indexOf("safari") > -1 && t.toLowerCase().indexOf("apple") > -1, f = e() == 8, c = e() == 9, w = e() == 10, y = e() == 11, M = f || c || w || y, j = n || t || window.opera, E = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
    j
  ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    j.substr(0, 4)
  );
  return {
    edge: r,
    chrome: a,
    safari: i,
    mobile: E,
    ie: M,
    ie8: f,
    ie9: c,
    ie10: w,
    ie11: y
  };
}
function Wn(e) {
  e = e || document.body;
  let n = 0, t = 0;
  const a = document.createElement("div"), r = document.createElement("div");
  return a.style.position = "absolute", a.style.pointerEvents = "none", a.style.bottom = "0", a.style.right = "0", a.style.width = "100px", a.style.overflow = "hidden", a.appendChild(r), e.appendChild(a), n = r.offsetWidth, r.style.width = "100%", a.style.overflowY = "scroll", t = n - r.offsetWidth, e.removeChild(a), t;
}
Fe.install = function(e, n) {
  n = n || {}, n.directive = n.directive || "bar", e.directive(n.directive, {
    mounted: function(t, a) {
      Nt.call(this, t, a);
    },
    updated: function(t) {
      se.call(this, t);
    },
    unmounted: function(t) {
      Bt.call(this, t, { clearStyles: !1 });
    }
  });
};
Fe.directive = {
  mounted: function(e, n) {
    Nt.call(this, e, n);
  },
  updated: function(e) {
    se.call(this, e);
  },
  unmounted: function(e) {
    Bt.call(this, e, { clearStyles: !1 });
  }
};
function B(e, n) {
  Gn(e) && (e = "100%");
  var t = Xn(e);
  return e = n === 360 ? e : Math.min(n, Math.max(0, parseFloat(e))), t && (e = parseInt(String(e * n), 10) / 100), Math.abs(e - n) < 1e-6 ? 1 : (n === 360 ? e = (e < 0 ? e % n + n : e % n) / parseFloat(String(n)) : e = e % n / parseFloat(String(n)), e);
}
function Gn(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Xn(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Zn(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function ue(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Oe(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Jn(e, n, t) {
  return {
    r: B(e, 255) * 255,
    g: B(n, 255) * 255,
    b: B(t, 255) * 255
  };
}
function we(e, n, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (n - e) * (6 * t) : t < 1 / 2 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e;
}
function Qn(e, n, t) {
  var a, r, i;
  if (e = B(e, 360), n = B(n, 100), t = B(t, 100), n === 0)
    r = t, i = t, a = t;
  else {
    var f = t < 0.5 ? t * (1 + n) : t + n - t * n, c = 2 * t - f;
    a = we(c, f, e + 1 / 3), r = we(c, f, e), i = we(c, f, e - 1 / 3);
  }
  return { r: a * 255, g: r * 255, b: i * 255 };
}
function Kn(e, n, t) {
  e = B(e, 255), n = B(n, 255), t = B(t, 255);
  var a = Math.max(e, n, t), r = Math.min(e, n, t), i = 0, f = a, c = a - r, w = a === 0 ? 0 : c / a;
  if (a === r)
    i = 0;
  else {
    switch (a) {
      case e:
        i = (n - t) / c + (n < t ? 6 : 0);
        break;
      case n:
        i = (t - e) / c + 2;
        break;
      case t:
        i = (e - n) / c + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: w, v: f };
}
function ea(e, n, t) {
  e = B(e, 360) * 6, n = B(n, 100), t = B(t, 100);
  var a = Math.floor(e), r = e - a, i = t * (1 - n), f = t * (1 - r * n), c = t * (1 - (1 - r) * n), w = a % 6, y = [t, f, i, i, c, t][w], M = [c, t, t, f, i, i][w], j = [i, i, c, t, t, f][w];
  return { r: y * 255, g: M * 255, b: j * 255 };
}
function ta(e, n, t, a) {
  var r = [
    Oe(Math.round(e).toString(16)),
    Oe(Math.round(n).toString(16)),
    Oe(Math.round(t).toString(16))
  ];
  return a && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function ot(e) {
  return I(e) / 255;
}
function I(e) {
  return parseInt(e, 16);
}
var lt = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function oe(e) {
  var n = { r: 0, g: 0, b: 0 }, t = 1, a = null, r = null, i = null, f = !1, c = !1;
  return typeof e == "string" && (e = ra(e)), typeof e == "object" && (q(e.r) && q(e.g) && q(e.b) ? (n = Jn(e.r, e.g, e.b), f = !0, c = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : q(e.h) && q(e.s) && q(e.v) ? (a = ue(e.s), r = ue(e.v), n = ea(e.h, a, r), f = !0, c = "hsv") : q(e.h) && q(e.s) && q(e.l) && (a = ue(e.s), i = ue(e.l), n = Qn(e.h, a, i), f = !0, c = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (t = e.a)), t = Zn(t), {
    ok: f,
    format: e.format || c,
    r: Math.min(255, Math.max(n.r, 0)),
    g: Math.min(255, Math.max(n.g, 0)),
    b: Math.min(255, Math.max(n.b, 0)),
    a: t
  };
}
var na = "[-\\+]?\\d+%?", aa = "[-\\+]?\\d*\\.\\d+%?", Q = "(?:".concat(aa, ")|(?:").concat(na, ")"), Ce = "[\\s|\\(]+(".concat(Q, ")[,|\\s]+(").concat(Q, ")[,|\\s]+(").concat(Q, ")\\s*\\)?"), Se = "[\\s|\\(]+(".concat(Q, ")[,|\\s]+(").concat(Q, ")[,|\\s]+(").concat(Q, ")[,|\\s]+(").concat(Q, ")\\s*\\)?"), R = {
  CSS_UNIT: new RegExp(Q),
  rgb: new RegExp("rgb" + Ce),
  rgba: new RegExp("rgba" + Se),
  hsl: new RegExp("hsl" + Ce),
  hsla: new RegExp("hsla" + Se),
  hsv: new RegExp("hsv" + Ce),
  hsva: new RegExp("hsva" + Se),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function ra(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var n = !1;
  if (lt[e])
    e = lt[e], n = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var t = R.rgb.exec(e);
  return t ? { r: t[1], g: t[2], b: t[3] } : (t = R.rgba.exec(e), t ? { r: t[1], g: t[2], b: t[3], a: t[4] } : (t = R.hsl.exec(e), t ? { h: t[1], s: t[2], l: t[3] } : (t = R.hsla.exec(e), t ? { h: t[1], s: t[2], l: t[3], a: t[4] } : (t = R.hsv.exec(e), t ? { h: t[1], s: t[2], v: t[3] } : (t = R.hsva.exec(e), t ? { h: t[1], s: t[2], v: t[3], a: t[4] } : (t = R.hex8.exec(e), t ? {
    r: I(t[1]),
    g: I(t[2]),
    b: I(t[3]),
    a: ot(t[4]),
    format: n ? "name" : "hex8"
  } : (t = R.hex6.exec(e), t ? {
    r: I(t[1]),
    g: I(t[2]),
    b: I(t[3]),
    format: n ? "name" : "hex"
  } : (t = R.hex4.exec(e), t ? {
    r: I(t[1] + t[1]),
    g: I(t[2] + t[2]),
    b: I(t[3] + t[3]),
    a: ot(t[4] + t[4]),
    format: n ? "name" : "hex8"
  } : (t = R.hex3.exec(e), t ? {
    r: I(t[1] + t[1]),
    g: I(t[2] + t[2]),
    b: I(t[3] + t[3]),
    format: n ? "name" : "hex"
  } : !1)))))))));
}
function q(e) {
  return !!R.CSS_UNIT.exec(String(e));
}
var de = 2, it = 0.16, oa = 0.05, la = 0.05, ia = 0.15, Vt = 5, Rt = 4, sa = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function st(e) {
  var n = e.r, t = e.g, a = e.b, r = Kn(n, t, a);
  return {
    h: r.h * 360,
    s: r.s,
    v: r.v
  };
}
function fe(e) {
  var n = e.r, t = e.g, a = e.b;
  return "#".concat(ta(n, t, a, !1));
}
function ca(e, n, t) {
  var a = t / 100, r = {
    r: (n.r - e.r) * a + e.r,
    g: (n.g - e.g) * a + e.g,
    b: (n.b - e.b) * a + e.b
  };
  return r;
}
function ct(e, n, t) {
  var a;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? a = t ? Math.round(e.h) - de * n : Math.round(e.h) + de * n : a = t ? Math.round(e.h) + de * n : Math.round(e.h) - de * n, a < 0 ? a += 360 : a >= 360 && (a -= 360), a;
}
function ut(e, n, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var a;
  return t ? a = e.s - it * n : n === Rt ? a = e.s + it : a = e.s + oa * n, a > 1 && (a = 1), t && n === Vt && a > 0.1 && (a = 0.1), a < 0.06 && (a = 0.06), Number(a.toFixed(2));
}
function dt(e, n, t) {
  var a;
  return t ? a = e.v + la * n : a = e.v - ia * n, a > 1 && (a = 1), Number(a.toFixed(2));
}
function Ae(e) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], a = oe(e), r = Vt; r > 0; r -= 1) {
    var i = st(a), f = fe(oe({
      h: ct(i, r, !0),
      s: ut(i, r, !0),
      v: dt(i, r, !0)
    }));
    t.push(f);
  }
  t.push(fe(a));
  for (var c = 1; c <= Rt; c += 1) {
    var w = st(a), y = fe(oe({
      h: ct(w, c),
      s: ut(w, c),
      v: dt(w, c)
    }));
    t.push(y);
  }
  return n.theme === "dark" ? sa.map(function(M) {
    var j = M.index, E = M.opacity, V = fe(ca(oe(n.backgroundColor || "#141414"), oe(t[j]), E * 100));
    return V;
  }) : t;
}
var ke = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Te = {}, Pe = {};
Object.keys(ke).forEach(function(e) {
  Te[e] = Ae(ke[e]), Te[e].primary = Te[e][5], Pe[e] = Ae(ke[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Pe[e].primary = Pe[e][5];
});
var ft = [], le = [], ua = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function da() {
  var e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e;
}
function fa(e, n) {
  if (n = n || {}, e === void 0)
    throw new Error(ua);
  var t = n.prepend === !0 ? "prepend" : "append", a = n.container !== void 0 ? n.container : document.querySelector("head"), r = ft.indexOf(a);
  r === -1 && (r = ft.push(a) - 1, le[r] = {});
  var i;
  return le[r] !== void 0 && le[r][t] !== void 0 ? i = le[r][t] : (i = le[r][t] = da(), t === "prepend" ? a.insertBefore(i, a.childNodes[0]) : a.appendChild(i)), e.charCodeAt(0) === 65279 && (e = e.substr(1, e.length)), i.styleSheet ? i.styleSheet.cssText += e : i.textContent += e, i;
}
function pt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      pa(e, r, t[r]);
    });
  }
  return e;
}
function pa(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function va(e, n) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(n));
}
function ma(e, n) {
  va(e, "[@ant-design/icons-vue] ".concat(n));
}
function vt(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Ee(e, n, t) {
  return t ? H(e.tag, pt({
    key: n
  }, t, e.attrs), (e.children || []).map(function(a, r) {
    return Ee(a, "".concat(n, "-").concat(e.tag, "-").concat(r));
  })) : H(e.tag, pt({
    key: n
  }, e.attrs), (e.children || []).map(function(a, r) {
    return Ee(a, "".concat(n, "-").concat(e.tag, "-").concat(r));
  }));
}
function Yt(e) {
  return Ae(e)[0];
}
function qt(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var ga = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, mt = !1, ha = function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ga;
  ze(function() {
    mt || (typeof window < "u" && window.document && window.document.documentElement && fa(n, {
      prepend: !0
    }), mt = !0);
  });
}, ba = ["icon", "primaryColor", "secondaryColor"];
function ya(e, n) {
  if (e == null)
    return {};
  var t = _a(e, n), a, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      a = i[r], !(n.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (t[a] = e[a]);
  }
  return t;
}
function _a(e, n) {
  if (e == null)
    return {};
  var t = {}, a = Object.keys(e), r, i;
  for (i = 0; i < a.length; i++)
    r = a[i], !(n.indexOf(r) >= 0) && (t[r] = e[r]);
  return t;
}
function ve(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      Oa(e, r, t[r]);
    });
  }
  return e;
}
function Oa(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var ie = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function wa(e) {
  var n = e.primaryColor, t = e.secondaryColor;
  ie.primaryColor = n, ie.secondaryColor = t || Yt(n), ie.calculated = !!t;
}
function Ca() {
  return ve({}, ie);
}
var ne = function(n, t) {
  var a = ve({}, n, t.attrs), r = a.icon, i = a.primaryColor, f = a.secondaryColor, c = ya(a, ba), w = ie;
  if (i && (w = {
    primaryColor: i,
    secondaryColor: f || Yt(i)
  }), ha(), ma(vt(r), "icon should be icon definiton, but got ".concat(r)), !vt(r))
    return null;
  var y = r;
  return y && typeof y.icon == "function" && (y = ve({}, y, {
    icon: y.icon(w.primaryColor, w.secondaryColor)
  })), Ee(y.icon, "svg-".concat(y.name), ve({}, c, {
    "data-icon": y.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
ne.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
ne.inheritAttrs = !1;
ne.displayName = "IconBase";
ne.getTwoToneColors = Ca;
ne.setTwoToneColors = wa;
const He = ne;
function Sa(e, n) {
  return xa(e) || Pa(e, n) || Ta(e, n) || ka();
}
function ka() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ta(e, n) {
  if (e) {
    if (typeof e == "string")
      return gt(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return gt(e, n);
  }
}
function gt(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, a = new Array(n); t < n; t++)
    a[t] = e[t];
  return a;
}
function Pa(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var a = [], r = !0, i = !1, f, c;
    try {
      for (t = t.call(e); !(r = (f = t.next()).done) && (a.push(f.value), !(n && a.length === n)); r = !0)
        ;
    } catch (w) {
      i = !0, c = w;
    } finally {
      try {
        !r && t.return != null && t.return();
      } finally {
        if (i)
          throw c;
      }
    }
    return a;
  }
}
function xa(e) {
  if (Array.isArray(e))
    return e;
}
function Wt(e) {
  var n = qt(e), t = Sa(n, 2), a = t[0], r = t[1];
  return He.setTwoToneColors({
    primaryColor: a,
    secondaryColor: r
  });
}
function $a() {
  var e = He.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Ma = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function ja(e, n) {
  return za(e) || Da(e, n) || Ea(e, n) || Aa();
}
function Aa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ea(e, n) {
  if (e) {
    if (typeof e == "string")
      return ht(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ht(e, n);
  }
}
function ht(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, a = new Array(n); t < n; t++)
    a[t] = e[t];
  return a;
}
function Da(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var a = [], r = !0, i = !1, f, c;
    try {
      for (t = t.call(e); !(r = (f = t.next()).done) && (a.push(f.value), !(n && a.length === n)); r = !0)
        ;
    } catch (w) {
      i = !0, c = w;
    } finally {
      try {
        !r && t.return != null && t.return();
      } finally {
        if (i)
          throw c;
      }
    }
    return a;
  }
}
function za(e) {
  if (Array.isArray(e))
    return e;
}
function bt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      De(e, r, t[r]);
    });
  }
  return e;
}
function De(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Fa(e, n) {
  if (e == null)
    return {};
  var t = La(e, n), a, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      a = i[r], !(n.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (t[a] = e[a]);
  }
  return t;
}
function La(e, n) {
  if (e == null)
    return {};
  var t = {}, a = Object.keys(e), r, i;
  for (i = 0; i < a.length; i++)
    r = a[i], !(n.indexOf(r) >= 0) && (t[r] = e[r]);
  return t;
}
Wt("#1890ff");
var ae = function(n, t) {
  var a, r = bt({}, n, t.attrs), i = r.class, f = r.icon, c = r.spin, w = r.rotate, y = r.tabindex, M = r.twoToneColor, j = r.onClick, E = Fa(r, Ma), V = (a = {
    anticon: !0
  }, De(a, "anticon-".concat(f.name), !!f.name), De(a, i, i), a), Y = c === "" || c || f.name === "loading" ? "anticon-spin" : "", X = y;
  X === void 0 && j && (X = -1, E.tabindex = X);
  var K = w ? {
    msTransform: "rotate(".concat(w, "deg)"),
    transform: "rotate(".concat(w, "deg)")
  } : void 0, ce = qt(M), te = ja(ce, 2), ee = te[0], re = te[1];
  return d("span", bt({
    role: "img",
    "aria-label": f.name
  }, E, {
    onClick: j,
    class: V
  }), [d(He, {
    class: Y,
    icon: f,
    primaryColor: ee,
    secondaryColor: re,
    style: K
  }, null)]);
};
ae.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
ae.displayName = "AntdIcon";
ae.inheritAttrs = !1;
ae.getTwoToneColor = $a;
ae.setTwoToneColor = Wt;
const z = ae;
var Ia = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" } }] }, name: "calendar", theme: "outlined" };
const Ha = Ia;
function yt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      Ua(e, r, t[r]);
    });
  }
  return e;
}
function Ua(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var Ue = function(n, t) {
  var a = yt({}, n, t.attrs);
  return d(z, yt({}, a, {
    icon: Ha
  }), null);
};
Ue.displayName = "CalendarOutlined";
Ue.inheritAttrs = !1;
const Na = Ue;
var Ba = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, name: "caret-down", theme: "outlined" };
const Va = Ba;
function _t(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      Ra(e, r, t[r]);
    });
  }
  return e;
}
function Ra(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var Ne = function(n, t) {
  var a = _t({}, n, t.attrs);
  return d(z, _t({}, a, {
    icon: Va
  }), null);
};
Ne.displayName = "CaretDownOutlined";
Ne.inheritAttrs = !1;
const Ot = Ne;
var Ya = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
const qa = Ya;
function wt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      Wa(e, r, t[r]);
    });
  }
  return e;
}
function Wa(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var Be = function(n, t) {
  var a = wt({}, n, t.attrs);
  return d(z, wt({}, a, {
    icon: qa
  }), null);
};
Be.displayName = "CheckCircleOutlined";
Be.inheritAttrs = !1;
const Ga = Be;
var Xa = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M433.1 657.7a31.8 31.8 0 0051.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z" } }, { tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, name: "check-square", theme: "outlined" };
const Za = Xa;
function Ct(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      Ja(e, r, t[r]);
    });
  }
  return e;
}
function Ja(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var Ve = function(n, t) {
  var a = Ct({}, n, t.attrs);
  return d(z, Ct({}, a, {
    icon: Za
  }), null);
};
Ve.displayName = "CheckSquareOutlined";
Ve.inheritAttrs = !1;
const Qa = Ve;
var Ka = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" } }, { tag: "path", attrs: { d: "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "close-circle", theme: "outlined" };
const er = Ka;
function St(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      tr(e, r, t[r]);
    });
  }
  return e;
}
function tr(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var Re = function(n, t) {
  var a = St({}, n, t.attrs);
  return d(z, St({}, a, {
    icon: er
  }), null);
};
Re.displayName = "CloseCircleOutlined";
Re.inheritAttrs = !1;
const nr = Re;
var ar = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, name: "edit", theme: "outlined" };
const rr = ar;
function kt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      or(e, r, t[r]);
    });
  }
  return e;
}
function or(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var Ye = function(n, t) {
  var a = kt({}, n, t.attrs);
  return d(z, kt({}, a, {
    icon: rr
  }), null);
};
Ye.displayName = "EditOutlined";
Ye.inheritAttrs = !1;
const lr = Ye;
var ir = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M600 395.4h91V649h79V267c0-4.4-3.6-8-8-8h-48.2c-3.7 0-7 2.6-7.7 6.3-2.6 12.1-6.9 22.3-12.9 30.9a86.14 86.14 0 01-26.3 24.4c-10.3 6.2-22 10.5-35 12.9-10.4 1.9-21 3-32 3.1a8 8 0 00-7.9 8v42.8c0 4.4 3.6 8 8 8zM871 702H567c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM443.9 312.7c-16.1-19-34.4-32.4-55.2-40.4-21.3-8.2-44.1-12.3-68.4-12.3-23.9 0-46.4 4.1-67.7 12.3-20.8 8-39 21.4-54.8 40.3-15.9 19.1-28.7 44.7-38.3 77-9.6 32.5-14.5 73-14.5 121.5 0 49.9 4.9 91.4 14.5 124.4 9.6 32.8 22.4 58.7 38.3 77.7 15.8 18.9 34 32.3 54.8 40.3 21.3 8.2 43.8 12.3 67.7 12.3 24.4 0 47.2-4.1 68.4-12.3 20.8-8 39.2-21.4 55.2-40.4 16.1-19 29-44.9 38.6-77.7 9.6-33 14.5-74.5 14.5-124.4 0-48.4-4.9-88.9-14.5-121.5-9.5-32.1-22.4-57.7-38.6-76.8zm-29.5 251.7c-1 21.4-4.2 42-9.5 61.9-5.5 20.7-14.5 38.5-27 53.4-13.6 16.3-33.2 24.3-57.6 24.3-24 0-43.2-8.1-56.7-24.4-12.2-14.8-21.1-32.6-26.6-53.3-5.3-19.9-8.5-40.6-9.5-61.9-1-20.8-1.5-38.5-1.5-53.2 0-8.8.1-19.4.4-31.8.2-12.7 1.1-25.8 2.6-39.2 1.5-13.6 4-27.1 7.6-40.5 3.7-13.8 8.8-26.3 15.4-37.4 6.9-11.6 15.8-21.1 26.7-28.3 11.4-7.6 25.3-11.3 41.5-11.3 16.1 0 30.1 3.7 41.7 11.2a87.94 87.94 0 0127.4 28.2c6.9 11.2 12.1 23.8 15.6 37.7 3.3 13.2 5.8 26.6 7.5 40.1 1.8 13.5 2.8 26.6 3 39.4.2 12.4.4 23 .4 31.8.1 14.8-.4 32.5-1.4 53.3z" } }] }, name: "field-binary", theme: "outlined" };
const sr = ir;
function Tt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      cr(e, r, t[r]);
    });
  }
  return e;
}
function cr(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var qe = function(n, t) {
  var a = Tt({}, n, t.attrs);
  return d(z, Tt({}, a, {
    icon: sr
  }), null);
};
qe.displayName = "FieldBinaryOutlined";
qe.inheritAttrs = !1;
const ur = qe;
var dr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM402 549c0 5.4 4.4 9.5 9.8 9.5h32.4c5.4 0 9.8-4.2 9.8-9.4 0-28.2 25.8-51.6 58-51.6s58 23.4 58 51.5c0 25.3-21 47.2-49.3 50.9-19.3 2.8-34.5 20.3-34.7 40.1v32c0 5.5 4.5 10 10 10h32c5.5 0 10-4.5 10-10v-12.2c0-6 4-11.5 9.7-13.3 44.6-14.4 75-54 74.3-98.9-.8-55.5-49.2-100.8-108.5-101.6-61.4-.7-111.5 45.6-111.5 103zm78 195a32 32 0 1064 0 32 32 0 10-64 0z" } }] }, name: "file-unknown", theme: "outlined" };
const fr = dr;
function Pt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      pr(e, r, t[r]);
    });
  }
  return e;
}
function pr(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var We = function(n, t) {
  var a = Pt({}, n, t.attrs);
  return d(z, Pt({}, a, {
    icon: fr
  }), null);
};
We.displayName = "FileUnknownOutlined";
We.inheritAttrs = !1;
const vr = We;
var mr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" } }] }, name: "link", theme: "outlined" };
const gr = mr;
function xt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      hr(e, r, t[r]);
    });
  }
  return e;
}
function hr(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var Ge = function(n, t) {
  var a = xt({}, n, t.attrs);
  return d(z, xt({}, a, {
    icon: gr
  }), null);
};
Ge.displayName = "LinkOutlined";
Ge.inheritAttrs = !1;
const br = Ge;
var yr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" } }] }, name: "mail", theme: "outlined" };
const _r = yr;
function $t(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      Or(e, r, t[r]);
    });
  }
  return e;
}
function Or(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var Xe = function(n, t) {
  var a = $t({}, n, t.attrs);
  return d(z, $t({}, a, {
    icon: _r
  }), null);
};
Xe.displayName = "MailOutlined";
Xe.inheritAttrs = !1;
const wr = Xe;
var Cr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, name: "minus", theme: "outlined" };
const Sr = Cr;
function Mt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      kr(e, r, t[r]);
    });
  }
  return e;
}
function kr(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var Ze = function(n, t) {
  var a = Mt({}, n, t.attrs);
  return d(z, Mt({}, a, {
    icon: Sr
  }), null);
};
Ze.displayName = "MinusOutlined";
Ze.inheritAttrs = !1;
const Tr = Ze;
var Pr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" };
const xr = Pr;
function jt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      $r(e, r, t[r]);
    });
  }
  return e;
}
function $r(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var Je = function(n, t) {
  var a = jt({}, n, t.attrs);
  return d(z, jt({}, a, {
    icon: xr
  }), null);
};
Je.displayName = "PlusOutlined";
Je.inheritAttrs = !1;
const Mr = Je;
var jr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, name: "profile", theme: "outlined" };
const Ar = jr;
function At(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      Er(e, r, t[r]);
    });
  }
  return e;
}
function Er(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var Qe = function(n, t) {
  var a = At({}, n, t.attrs);
  return d(z, At({}, a, {
    icon: Ar
  }), null);
};
Qe.displayName = "ProfileOutlined";
Qe.inheritAttrs = !1;
const Dr = Qe;
var zr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "upload", theme: "outlined" };
const Fr = zr;
function Et(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    }))), a.forEach(function(r) {
      Lr(e, r, t[r]);
    });
  }
  return e;
}
function Lr(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var Ke = function(n, t) {
  var a = Et({}, n, t.attrs);
  return d(z, Et({}, a, {
    icon: Fr
  }), null);
};
Ke.displayName = "UploadOutlined";
Ke.inheritAttrs = !1;
const Ir = Ke, Gt = (e) => [
  {
    isTem: !0,
    id: 1e4,
    type: "input",
    model: "",
    title: e.input,
    icon: H(lr)
  },
  {
    isTem: !0,
    id: 4e4,
    type: "textarea",
    model: "",
    title: e.textarea,
    icon: H(Dr)
  },
  {
    isTem: !0,
    id: 2e4,
    type: "select",
    model: void 0,
    title: e.select,
    placeholder: e.selectPlaceholder,
    icon: H(Ot),
    value: [
      {
        value: `${e.option}1`,
        label: `${e.option}1`
      },
      {
        value: `${e.option}2`,
        label: `${e.option}2`
      }
    ]
  },
  {
    isTem: !0,
    id: 3e4,
    type: "multiple",
    model: [],
    title: e.multiple,
    placeholder: e.selectPlaceholder,
    icon: H(Ot),
    value: [
      {
        value: `${e.option}1`,
        label: `${e.option}1`
      },
      {
        value: `${e.option}2`,
        label: `${e.option}2`
      },
      {
        value: `${e.option}3`,
        label: `${e.option}3`
      }
    ]
  },
  {
    isTem: !0,
    id: 5e4,
    type: "radio",
    model: "",
    title: e.radio,
    icon: H(Ga),
    value: [
      {
        value: "option1",
        label: "radio1"
      },
      {
        value: "option2",
        label: "radio2"
      },
      {
        value: "option3",
        label: "radio3"
      }
    ]
  },
  {
    isTem: !0,
    id: 6e4,
    type: "checkbox",
    model: [],
    title: e.checkbox,
    icon: H(Qa),
    value: [
      {
        value: "option1",
        label: `${e.option}1`
      },
      {
        value: "option2",
        label: `${e.option}2`
      },
      {
        value: "option3",
        label: `${e.option}3`
      }
    ]
  },
  {
    isTem: !0,
    id: 7e4,
    type: "date",
    model: "",
    title: e.date,
    placeholder: e.selectPlaceholder,
    format: e.dateFormatVal1,
    formatOptions: [e.dateFormatVal1, e.dateFormatVal2],
    icon: H(Na)
  },
  {
    isTem: !0,
    id: 8e4,
    type: "inputNumber",
    model: 0,
    title: e.inputNumber,
    placeholder: e.inputPlaceholder,
    format: e.value,
    formatOptions: [e.value, e.percent],
    icon: H(ur)
  },
  {
    isTem: !0,
    id: 9e4,
    type: "email",
    model: "",
    title: e.email,
    placeholder: e.inputPlaceholder,
    append: ".com",
    hasSuffix: e.show,
    suffixOptions: [e.show, e.hide],
    icon: H(wr)
  },
  {
    isTem: !0,
    id: 1e6,
    type: "link",
    model: "",
    title: e.link,
    prepend: "http://",
    append: ".com",
    icon: H(br)
  },
  {
    isTem: !0,
    id: 2e6,
    type: "attachment",
    title: e.attachment,
    model: "",
    icon: H(vr),
    action: "",
    nameMapping: "",
    urlMapping: "response",
    fileName: "file",
    defaultList: []
  }
], Hr = {
  key: 1,
  class: "component"
}, Ur = { class: "component-title" }, Nr = { key: 0 }, Br = { class: "component-content" }, Vr = {
  key: 0,
  class: "view-model"
}, Rr = {
  key: 1,
  class: "nodrag"
}, Yr = {
  key: 2,
  class: "component"
}, qr = { class: "component-title" }, Wr = { key: 0 }, Gr = { class: "component-content" }, Xr = {
  key: 0,
  class: "view-model"
}, Zr = {
  key: 1,
  class: "nodrag"
}, Jr = {
  key: 3,
  class: "component"
}, Qr = { class: "component-title" }, Kr = { key: 0 }, eo = { class: "component-content" }, to = {
  key: 0,
  class: "view-model"
}, no = {
  key: 1,
  class: "nodrag"
}, ao = {
  key: 4,
  class: "component"
}, ro = { class: "component-title" }, oo = { key: 0 }, lo = { class: "component-content" }, io = {
  key: 0,
  class: "view-model"
}, so = {
  key: 1,
  class: "nodrag"
}, co = {
  key: 5,
  class: "component"
}, uo = { class: "component-title" }, fo = { key: 0 }, po = { class: "component-content" }, vo = {
  key: 0,
  class: "view-model"
}, mo = {
  key: 1,
  class: "nodrag"
}, go = {
  key: 6,
  class: "component"
}, ho = { class: "component-title" }, bo = { key: 0 }, yo = { class: "component-content" }, _o = {
  key: 0,
  class: "view-model"
}, Oo = {
  key: 1,
  class: "nodrag"
}, wo = {
  key: 7,
  class: "component"
}, Co = { class: "component-title" }, So = { key: 0 }, ko = { class: "component-content" }, To = {
  key: 0,
  class: "view-model"
}, Po = {
  key: 1,
  class: "nodrag"
}, xo = {
  key: 8,
  class: "component"
}, $o = { class: "component-title" }, Mo = { key: 0 }, jo = { class: "component-content" }, Ao = {
  key: 0,
  class: "view-model"
}, Eo = {
  key: 1,
  class: "nodrag"
}, Do = {
  key: 9,
  class: "component"
}, zo = { class: "component-title" }, Fo = { key: 0 }, Lo = { class: "component-content" }, Io = {
  key: 0,
  class: "view-model"
}, Ho = {
  key: 1,
  class: "nodrag"
}, Uo = {
  key: 10,
  class: "component"
}, No = { class: "component-title" }, Bo = { key: 0 }, Vo = { class: "component-content" }, Ro = ["href"], Yo = {
  key: 1,
  class: "nodrag"
}, qo = {
  key: 11,
  class: "component"
}, Wo = { class: "component-title" }, Go = { key: 0 }, Xo = { class: "component-content" }, Zo = { class: "nodrag attachment" }, Jo = /* @__PURE__ */ It({
  __name: "ListContainer",
  props: {
    uploadAction: { default: "" },
    list: { default: () => [] },
    selectedItem: { default: () => ({}) },
    mode: { default: "design" },
    lang: { default: "zh-CN" },
    header: { type: Function, default: () => {
    } },
    hasColon: { type: Boolean, default: !1 },
    domain: { default: "" },
    containerIndex: { default: void 0 },
    dragType: { default: "" },
    uploadInfo: {}
  },
  emits: ["handleDelete"],
  setup(e, { expose: n, emit: t }) {
    const a = e, r = x({}), i = x({}), f = x({}), c = x(a.mode === "design"), w = x(a.mode === "edit"), y = x(a.mode === "view"), M = x({}), j = (o) => {
      t("handleDelete", o);
    }, E = tt("handleSelect"), V = (o) => {
      E(a.list[o.oldIndex].id);
    }, Y = (o) => {
      E(a.list[o.newIndex].id);
    }, X = (o) => {
      o ? a.domain ? (o = a.domain + o, window.open(o.replace(/#/g, "%23"), "_blank")) : window.open(o.replace(/#/g, "%23"), "_blank") : console.log("url不存在");
    }, K = (o, C) => {
      M.value[C + ""] = o;
    }, ce = (o, C, O, A) => {
      if (o[a.uploadInfo.statusKey] === a.uploadInfo.successValue) {
        if (A.nameMapping) {
          let L = {};
          Object.assign(L, o), A.nameMapping.split(".").map((h) => {
            L = L[h];
          }), C.name = L.split("/").pop();
        }
        if (A.urlMapping) {
          let L = {};
          Object.assign(L, o), A.urlMapping.split(".").map((h) => {
            L = L[h];
          }), C.url = L;
        }
        A.defaultList = O;
      } else
        rt.warning(o.message || o.Message), O.splice(O.indexOf(C), 1);
    }, te = tt("setDragType"), ee = (o) => {
      te(a.list[o.oldIndex].type);
    }, re = () => {
      te("");
    }, he = ({ file: o, fileList: C }, O) => {
      o.error ? be(o.error, C, o) : o.response && ce(o.response, o, C, O);
    }, be = (o, C, O) => {
      rt.error(o && o.message || i.value.uploaderFail), C.splice(C.indexOf(O), 1);
    }, ye = () => {
      Object.assign(r.value, a.header());
    }, _e = (o, C) => {
      C.defaultList = M.value[C.id + ""].fileList;
    }, et = (o) => {
      console.log(o), X(o.response.Data.FileRelativePath);
    }, v = (o) => o.model && o.value ? o.value.filter((O) => o.model && o.model.includes(O.value)).map((O) => O.label).join(",") : [], _ = (o) => o.model && o.value ? o.value.map((O) => {
      if (O.value === o.model)
        return O.label;
    }).join("") : "", P = (o) => {
      if (o.model && typeof o.model == "string") {
        const C = o.model.split("/").pop(), { defaultList: O, ...A } = f.value;
        Object.assign(O, {
          name: C,
          response: {
            ResponseBody: o.model
          },
          url: o.model
        }), Object.assign(o, {
          ...A,
          defaultList: O
        });
      }
    }, T = (o, C) => (o.forEach((O) => {
      (O == null ? void 0 : O.type) === "attachment" && (Object.assign(O, {
        fileName: C || O.fileName
      }), P(O), O.defaultList ? O.defaultList.map((A) => {
        A.showProgress = !1;
      }) : Object.assign(O, {
        defaultList: []
      }));
    }), o);
    return (() => {
      i.value = Ut(a.lang), f.value = Gt(i.value).pop() || {}, T(a.list, a.uploadInfo.uploadFileName);
    })(), n({
      initPropsFile: T
    }), (o, C) => {
      const O = wn("ListContainer", !0), A = zt, L = ln, h = sn, D = cn, Xt = Ft, Zt = Lt, Jt = un, Qt = dn, Kt = fn, en = pn, tn = vn, nn = mn, an = gn;
      return s(), U(Z(xe), {
        itemKey: "id",
        ghostClass: "ghost",
        list: a.list,
        group: "container",
        class: "listContainer form-row-item",
        onChoose: V,
        onAdd: Y,
        onStart: ee,
        onEnd: re,
        disabled: (o.dragType === "container" || o.dragType === "container2" || o.dragType === "container3") && o.containerIndex !== void 0 || y.value || w.value
      }, {
        item: m(({ element: l, index: rn }) => [
          g("div", {
            class: pe(["componentBox", [
              o.selectedItem.id === l.id && c.value ? "form-row-item-active" : ""
            ]])
          }, [
            l.type === "container" || l.type === "container2" || l.type === "container3" ? (s(), u("div", {
              key: 0,
              class: pe(["component container-row-item", {
                "form-row-item-active": l.hasOwnProperty("columns") && c.value
              }])
            }, [
              (s(!0), u(W, null, G(l.columns, (p, on) => (s(), u("div", {
                class: "container-column",
                key: on
              }, [
                d(O, {
                  "upload-info": o.uploadInfo,
                  dragType: o.dragType,
                  "container-index": rn,
                  list: p,
                  domain: o.domain,
                  mode: o.mode,
                  "selected-item": o.selectedItem,
                  onHandleDelete: j,
                  header: o.header,
                  lang: o.lang,
                  hasColon: o.hasColon,
                  uploadAction: o.uploadAction
                }, null, 8, ["upload-info", "dragType", "container-index", "list", "domain", "mode", "selected-item", "header", "lang", "hasColon", "uploadAction"])
              ]))), 128))
            ], 2)) : k("", !0),
            l.type === "input" ? (s(), u("div", Hr, [
              g("div", Ur, [
                S(b(l.title) + " ", 1),
                o.hasColon ? (s(), u("span", Nr, "：")) : k("", !0)
              ]),
              g("div", Br, [
                y.value ? (s(), u("div", Vr, b(l.model), 1)) : (s(), u("div", Rr, [
                  d(A, {
                    value: l.model,
                    "onUpdate:value": (p) => l.model = p,
                    placeholder: l.placeholder
                  }, null, 8, ["value", "onUpdate:value", "placeholder"])
                ]))
              ])
            ])) : l.type === "textarea" ? (s(), u("div", Yr, [
              g("div", qr, [
                S(b(l.title) + " ", 1),
                o.hasColon ? (s(), u("span", Wr, "：")) : k("", !0)
              ]),
              g("div", Gr, [
                y.value ? (s(), u("div", Xr, b(l.model), 1)) : (s(), u("div", Zr, [
                  d(L, {
                    value: l.model,
                    "onUpdate:value": (p) => l.model = p,
                    placeholder: l.placeholder
                  }, null, 8, ["value", "onUpdate:value", "placeholder"])
                ]))
              ])
            ])) : l.type === "select" ? (s(), u("div", Jr, [
              g("div", Qr, [
                S(b(l.title) + " ", 1),
                o.hasColon ? (s(), u("span", Kr, "：")) : k("", !0)
              ]),
              g("div", eo, [
                y.value ? (s(), u("div", to, b(_(l)), 1)) : (s(), u("div", no, [
                  d(D, {
                    value: l.model,
                    "onUpdate:value": (p) => l.model = p,
                    placeholder: l.placeholder,
                    transfer: ""
                  }, {
                    default: m(() => [
                      (s(!0), u(W, null, G(l.value, (p) => (s(), U(h, {
                        value: p.value,
                        key: p.label
                      }, {
                        default: m(() => [
                          S(b(p.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["value", "onUpdate:value", "placeholder"])
                ]))
              ])
            ])) : l.type === "multiple" ? (s(), u("div", ao, [
              g("div", ro, [
                S(b(l.title) + " ", 1),
                o.hasColon ? (s(), u("span", oo, "：")) : k("", !0)
              ]),
              g("div", lo, [
                y.value ? (s(), u("div", io, b(v(l)), 1)) : (s(), u("div", so, [
                  d(D, {
                    value: l.model,
                    "onUpdate:value": (p) => l.model = p,
                    mode: "multiple",
                    placeholder: l.placeholder,
                    transfer: ""
                  }, {
                    default: m(() => [
                      (s(!0), u(W, null, G(l.value, (p) => (s(), U(h, {
                        value: p.value,
                        key: p.label
                      }, {
                        default: m(() => [
                          S(b(p.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["value", "onUpdate:value", "placeholder"])
                ]))
              ])
            ])) : l.type === "radio" ? (s(), u("div", co, [
              g("div", uo, [
                S(b(l.title) + " ", 1),
                o.hasColon ? (s(), u("span", fo, "：")) : k("", !0)
              ]),
              g("div", po, [
                y.value ? (s(), u("div", vo, b(l.model), 1)) : (s(), u("div", mo, [
                  d(Zt, {
                    value: l.model,
                    "onUpdate:value": (p) => l.model = p,
                    class: "ivu-middle-group"
                  }, {
                    default: m(() => [
                      (s(!0), u(W, null, G(l.value, (p) => (s(), U(Xt, {
                        value: p.label,
                        key: p.value,
                        disabled: l.isCheck
                      }, {
                        default: m(() => [
                          S(b(p.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["value", "disabled"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["value", "onUpdate:value"])
                ]))
              ])
            ])) : l.type === "checkbox" ? (s(), u("div", go, [
              g("div", ho, [
                S(b(l.title) + " ", 1),
                o.hasColon ? (s(), u("span", bo, "：")) : k("", !0)
              ]),
              g("div", yo, [
                y.value ? (s(), u("div", _o, b(l.model.join(",")), 1)) : (s(), u("div", Oo, [
                  d(Qt, {
                    value: l.model,
                    "onUpdate:value": (p) => l.model = p,
                    class: "ivu-middle-group"
                  }, {
                    default: m(() => [
                      (s(!0), u(W, null, G(l.value, (p) => (s(), U(Jt, {
                        key: p.value,
                        value: p.label
                      }, {
                        default: m(() => [
                          S(b(p.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["value", "onUpdate:value"])
                ]))
              ])
            ])) : l.type === "date" ? (s(), u("div", wo, [
              g("div", Co, [
                S(b(l.title) + " ", 1),
                o.hasColon ? (s(), u("span", So, "：")) : k("", !0)
              ]),
              g("div", ko, [
                y.value ? (s(), u("div", To, b(l.model), 1)) : (s(), u("div", Po, [
                  d(Kt, {
                    value: l.model,
                    "onUpdate:value": (p) => l.model = p,
                    type: "date",
                    format: l.format,
                    "value-format": l.format,
                    placeholder: l.placeholder,
                    transfer: ""
                  }, null, 8, ["value", "onUpdate:value", "format", "value-format", "placeholder"])
                ]))
              ])
            ])) : l.type === "inputNumber" ? (s(), u("div", xo, [
              g("div", $o, [
                S(b(l.title) + " ", 1),
                o.hasColon ? (s(), u("span", Mo, "：")) : k("", !0)
              ]),
              g("div", jo, [
                y.value ? (s(), u("div", Ao, b(l.model), 1)) : (s(), u("div", Eo, [
                  d(en, {
                    min: 0,
                    value: l.model,
                    "onUpdate:value": (p) => l.model = p
                  }, null, 8, ["value", "onUpdate:value"])
                ]))
              ])
            ])) : l.type === "email" ? (s(), u("div", Do, [
              g("div", zo, [
                S(b(l.title) + " ", 1),
                o.hasColon ? (s(), u("span", Fo, "：")) : k("", !0)
              ]),
              g("div", Lo, [
                y.value ? (s(), u("div", Io, b(l.model) + b(l.append), 1)) : (s(), u("div", Ho, [
                  d(A, {
                    value: l.model,
                    "onUpdate:value": (p) => l.model = p,
                    placeholder: l.placeholder
                  }, {
                    addonAfter: m(() => [
                      Ht(d(D, {
                        value: l.append,
                        "onUpdate:value": (p) => l.append = p,
                        style: { width: "100px" }
                      }, {
                        default: m(() => [
                          d(h, { value: ".com" }, {
                            default: m(() => [
                              S(".com")
                            ]),
                            _: 1
                          }),
                          d(h, { value: ".cn" }, {
                            default: m(() => [
                              S(".cn")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["value", "onUpdate:value"]), [
                        [Cn, ["显示", "show"].includes(l.hasSuffix)]
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value", "onUpdate:value", "placeholder"])
                ]))
              ])
            ])) : l.type === "link" ? (s(), u("div", Uo, [
              g("div", No, [
                S(b(l.title) + " ", 1),
                o.hasColon ? (s(), u("span", Bo, "：")) : k("", !0)
              ]),
              g("div", Vo, [
                y.value ? (s(), u("a", {
                  key: 0,
                  target: "_blank",
                  style: { display: "block" },
                  class: "view-model",
                  href: (l.prepend || "") + l.model + (l.append || "")
                }, b(l.prepend || "") + b(l.model) + b(l.append || ""), 9, Ro)) : (s(), u("div", Yo, [
                  d(A, {
                    value: l.model,
                    "onUpdate:value": (p) => l.model = p,
                    placeholder: l.placeholder
                  }, {
                    addonBefore: m(() => [
                      d(D, {
                        value: l.prepend,
                        "onUpdate:value": (p) => l.prepend = p,
                        style: { width: "100px" }
                      }, {
                        default: m(() => [
                          d(h, { value: "http://" }, {
                            default: m(() => [
                              S("http://")
                            ]),
                            _: 1
                          }),
                          d(h, { value: "https://" }, {
                            default: m(() => [
                              S("https://")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["value", "onUpdate:value"])
                    ]),
                    addonAfter: m(() => [
                      d(D, {
                        value: l.append,
                        "onUpdate:value": (p) => l.append = p,
                        style: { width: "100px" }
                      }, {
                        default: m(() => [
                          d(h, { value: ".com" }, {
                            default: m(() => [
                              S(".com")
                            ]),
                            _: 1
                          }),
                          d(h, { value: ".cn" }, {
                            default: m(() => [
                              S(".cn")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["value", "onUpdate:value"])
                    ]),
                    _: 2
                  }, 1032, ["value", "onUpdate:value", "placeholder"])
                ]))
              ])
            ])) : l.type === "attachment" ? (s(), u("div", qo, [
              g("div", Wo, [
                S(b(l.title) + " ", 1),
                o.hasColon ? (s(), u("span", Go, "：")) : k("", !0)
              ]),
              g("div", Xo, [
                g("div", Zo, [
                  d(nn, {
                    ref: (p) => {
                      K(p, l.id);
                    },
                    onPreview: et,
                    onRemove: (p) => {
                      _e(p, l);
                    },
                    "default-file-list": l.defaultList,
                    headers: r.value,
                    "before-upload": ye,
                    onChange: (p) => he(p, l),
                    action: y.value ? "" : o.uploadAction || l.action,
                    name: l.fileName,
                    class: pe({ "view-mode": y.value })
                  }, {
                    default: m(() => [
                      d(tn, null, {
                        default: m(() => [
                          d(Z(Ir)),
                          S(b(i.value.upload), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onRemove", "default-file-list", "headers", "onChange", "action", "name", "class"])
                ])
              ])
            ])) : k("", !0),
            l.type !== "container" && c.value ? (s(), U(an, {
              key: 12,
              class: "remove-btn",
              title: i.value.removeConfirm,
              width: "184",
              placement: "topRight",
              onConfirm: (p) => j(l),
              transfer: ""
            }, {
              default: m(() => [
                d(Z(nr), {
                  title: i.value.remove
                }, null, 8, ["title"])
              ]),
              _: 2
            }, 1032, ["title", "onConfirm"])) : k("", !0)
          ], 2)
        ]),
        _: 1
      }, 8, ["list", "disabled"]);
    };
  }
}), Qo = { class: "new-elements" }, Ko = { class: "panel panel--info" }, el = { class: "button draggable-button" }, tl = { class: "new-elements" }, nl = { class: "panel panel--info" }, al = { class: "button draggable-button" }, rl = { class: "form" }, ol = { key: 0 }, ll = {
  key: 0,
  class: "widget-option"
}, il = { class: "sub-title" }, sl = {
  key: 1,
  class: "widget-option"
}, cl = { class: "sub-title" }, ul = {
  key: 2,
  class: "widget-option"
}, dl = { class: "sub-title" }, fl = ["onClick"], pl = {
  key: 3,
  class: "widget-option"
}, vl = { class: "sub-title" }, ml = {
  key: 4,
  class: "widget-option"
}, gl = { class: "sub-title" }, hl = {
  key: 5,
  class: "widget-option"
}, bl = { class: "sub-title" }, yl = { key: 1 }, _l = {
  name: "NeoCustomFormNext"
}, Dt = /* @__PURE__ */ It({
  ..._l,
  props: {
    uploadAction: { default: "" },
    height: { default: "100%" },
    value: { default: () => [] },
    mode: { default: "design" },
    lang: { default: "zh-CN" },
    langPackage: { default: () => ({}) },
    header: { type: Function, default: () => {
    } },
    hasColon: { type: Boolean, default: !1 },
    domain: { default: "" },
    uploadInfo: { default: () => ({
      statusKey: "Status",
      successValue: 1,
      uploadFileName: ""
    }) }
  },
  emits: ["update:value"],
  setup(e, { emit: n }) {
    const t = e, a = Fe.directive, r = x({}), i = x(["select", "multiple", "radio", "checkbox"]), f = x(["input", "textarea"]), c = x({
      layoutTxt: "",
      fieldsTxt: "",
      dragToCanvas: "",
      option: ""
    }), w = x([]), y = x([]), M = x(t.mode === "design"), j = x("tab1"), E = x(""), V = (v) => {
      let _ = {
        icon: ""
      };
      return v.type === "attachment" && (_.fileName = t.uploadInfo.uploadFileName || v.fileName), {
        ...v,
        isTem: !1,
        id: Date.now(),
        ..._,
        ...["container2", "container3"].includes(v.type) ? { columns: $e(v.id) } : {}
      };
    }, Y = x([]);
    nt(
      () => t.value,
      () => {
        Y.value = t.value || [];
      },
      { immediate: !0 }
    ), nt(
      () => Y.value,
      () => {
        n("update:value", Y.value);
      },
      { deep: !0 }
    );
    const X = (v) => {
      var _;
      if ((_ = v.relatedContext) != null && _.element)
        return !v.relatedContext.element.isTem;
    }, K = (v, _) => {
      let P;
      for (let T = 0; T < v.length; T++)
        if (v[T].id === _) {
          P = v[T];
          break;
        } else
          Array.isArray(v[T]) ? P = K(v[T], _) : v[T].columns && Object.values(v[T].columns).forEach(
            (F) => {
              P || (P = K(
                F,
                _
              ));
            }
          );
      return P;
    };
    at("handleSelect", (v) => {
      r.value = K(Y.value, v);
    }), at("setDragType", (v) => {
      E.value = v;
    });
    const ee = (v, _, P, T) => {
      v.id === _.id ? P.splice(T, 1) : Array.isArray(v) ? v.map((F, o) => ee(F, _, v, o)) : v.columns && Object.values(v.columns).map(
        (F, o) => ee(F, _)
      );
    }, re = (v) => {
      ee(t.value, v), ze(() => {
        r.value = {};
      });
    }, he = () => {
      var v, _, P, T, F, o;
      (o = (v = r.value) == null ? void 0 : v.value) == null || o.push({
        value: `${c.value.option}${((P = (_ = r.value) == null ? void 0 : _.value) == null ? void 0 : P.length) + 1}`,
        label: `${c.value.option}${((F = (T = r.value) == null ? void 0 : T.value) == null ? void 0 : F.length) + 1}`
      });
    }, be = (v) => {
      var _, P;
      r.value.value && r.value.value.length === 1 || (r.value.value = (P = (_ = r.value) == null ? void 0 : _.value) == null ? void 0 : P.filter(
        (T) => T.value !== v
      ));
    }, ye = (v) => {
      E.value = w.value[v.oldIndex].type;
    }, _e = () => {
      E.value = "";
    };
    return (() => {
      c.value = Object.assign({}, Ut(t.lang), t.langPackage), w.value = $n(c.value), y.value = Gt(c.value);
    })(), (v, _) => {
      const P = hn, T = bn, F = yn, o = zt, C = Ft, O = Lt, A = _n, L = On;
      return s(), u("div", {
        class: "neo-form",
        style: Sn({ height: v.height })
      }, [
        d(L, {
          type: "flex",
          class: "neo-body"
        }, {
          default: m(() => [
            M.value ? (s(), U(F, {
              key: 0,
              class: "left-section"
            }, {
              default: m(() => [
                d(T, {
                  activeKey: j.value,
                  "onUpdate:activeKey": _[0] || (_[0] = (h) => j.value = h),
                  size: "small"
                }, {
                  default: m(() => [
                    d(P, {
                      tab: c.value.fieldsTxt,
                      key: "tab1"
                    }, {
                      default: m(() => [
                        g("div", Qo, [
                          g("div", Ko, [
                            d(Z(xe), {
                              move: X,
                              itemKey: "id",
                              list: y.value,
                              group: { name: "container", pull: "clone", put: !1 },
                              clone: V
                            }, {
                              item: m(({ element: h }) => [
                                g("div", el, [
                                  S(b(h.title) + " ", 1),
                                  (s(), U(kn(h.icon), { class: "buttonIcon" }))
                                ])
                              ]),
                              _: 1
                            }, 8, ["list"])
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["tab"]),
                    d(P, {
                      tab: c.value.layoutTxt,
                      key: "tab2"
                    }, {
                      default: m(() => [
                        g("div", tl, [
                          g("div", nl, [
                            d(Z(xe), {
                              move: X,
                              itemKey: "id",
                              list: w.value,
                              group: { name: "container", pull: "clone", put: !1 },
                              clone: V,
                              onStart: ye,
                              onEnd: _e
                            }, {
                              item: m(({ element: h }) => [
                                g("div", al, b(h.title), 1)
                              ]),
                              _: 1
                            }, 8, ["list"])
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["tab"])
                  ]),
                  _: 1
                }, 8, ["activeKey"])
              ]),
              _: 1
            })) : k("", !0),
            d(F, { class: "middle-section" }, {
              default: m(() => [
                Ht((s(), u("div", {
                  class: pe(["content", { shadow: M.value }])
                }, [
                  g("div", null, [
                    g("div", rl, [
                      Tn(v.$slots, "preset-fields", { class: "preset-fields" }),
                      d(Jo, {
                        "upload-info": v.uploadInfo,
                        dragType: E.value,
                        list: Y.value,
                        "selected-item": r.value,
                        "upload-action": v.uploadAction,
                        domain: v.domain,
                        mode: v.mode,
                        header: v.header,
                        lang: v.lang,
                        "has-colon": v.hasColon,
                        onHandleDelete: re
                      }, null, 8, ["upload-info", "dragType", "list", "selected-item", "upload-action", "domain", "mode", "header", "lang", "has-colon"])
                    ])
                  ])
                ], 2)), [
                  [Z(a)]
                ])
              ]),
              _: 3
            }),
            M.value ? (s(), U(F, {
              key: 1,
              class: "right-section"
            }, {
              default: m(() => [
                d(T, null, {
                  default: m(() => [
                    d(P, {
                      tab: c.value.setting,
                      key: "1"
                    }, {
                      default: m(() => [
                        r.value.id ? (s(), u("div", ol, [
                          r.value.id ? (s(), u("div", ll, [
                            g("div", il, b(c.value.title), 1),
                            d(o, {
                              value: r.value.title,
                              "onUpdate:value": _[1] || (_[1] = (h) => r.value.title = h)
                            }, null, 8, ["value"])
                          ])) : k("", !0),
                          f.value.includes(r.value.type) ? (s(), u("div", sl, [
                            g("div", cl, b(c.value.defaultVal), 1),
                            d(o, {
                              value: r.value.placeholder,
                              "onUpdate:value": _[2] || (_[2] = (h) => r.value.placeholder = h)
                            }, null, 8, ["value"])
                          ])) : k("", !0),
                          i.value.includes(r.value.type) ? (s(), u("div", ul, [
                            g("div", dl, b(c.value.optionsTxt), 1),
                            (s(!0), u(W, null, G(r.value.value, (h) => (s(), U(o, {
                              value: h.label,
                              "onUpdate:value": (D) => h.label = D,
                              key: h.value
                            }, {
                              addonBefore: m(() => [
                                g("div", {
                                  class: "inputBtn",
                                  onClick: (D) => be(h.value)
                                }, [
                                  d(Z(Tr))
                                ], 8, fl)
                              ]),
                              addonAfter: m(() => [
                                g("div", {
                                  onClick: he,
                                  class: "inputBtn"
                                }, [
                                  d(Z(Mr))
                                ])
                              ]),
                              _: 2
                            }, 1032, ["value", "onUpdate:value"]))), 128))
                          ])) : k("", !0),
                          r.value.type === "date" ? (s(), u("div", pl, [
                            g("div", vl, b(c.value.dateFormat), 1),
                            d(O, {
                              value: r.value.format,
                              "onUpdate:value": _[3] || (_[3] = (h) => r.value.format = h),
                              vertical: ""
                            }, {
                              default: m(() => [
                                (s(!0), u(W, null, G(r.value.formatOptions, (h, D) => (s(), U(C, {
                                  key: D,
                                  value: h
                                }, {
                                  default: m(() => [
                                    g("span", null, b(h), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]))), 128))
                              ]),
                              _: 1
                            }, 8, ["value"])
                          ])) : k("", !0),
                          r.value.type === "inputNumber" ? (s(), u("div", ml, [
                            g("div", gl, b(c.value.numberType), 1),
                            d(O, {
                              value: r.value.format,
                              "onUpdate:value": _[4] || (_[4] = (h) => r.value.format = h),
                              vertical: ""
                            }, {
                              default: m(() => [
                                (s(!0), u(W, null, G(r.value.formatOptions, (h, D) => (s(), U(C, {
                                  key: D,
                                  value: h
                                }, {
                                  default: m(() => [
                                    g("span", null, b(h), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]))), 128))
                              ]),
                              _: 1
                            }, 8, ["value"])
                          ])) : k("", !0),
                          r.value.type === "email" ? (s(), u("div", hl, [
                            g("div", bl, b(c.value.mailSuffix), 1),
                            d(O, {
                              value: r.value.hasSuffix,
                              "onUpdate:value": _[5] || (_[5] = (h) => r.value.hasSuffix = h),
                              vertical: ""
                            }, {
                              default: m(() => [
                                (s(!0), u(W, null, G(r.value.suffixOptions, (h, D) => (s(), U(C, {
                                  value: h,
                                  key: D
                                }, {
                                  default: m(() => [
                                    g("span", null, b(h), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]))), 128))
                              ]),
                              _: 1
                            }, 8, ["value"])
                          ])) : k("", !0)
                        ])) : (s(), u("div", yl, [
                          d(A, {
                            type: "warning",
                            "show-icon": ""
                          }, {
                            message: m(() => [
                              g("h4", null, b(c.value.selectComponent), 1)
                            ]),
                            _: 1
                          })
                        ]))
                      ]),
                      _: 1
                    }, 8, ["tab"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : k("", !0)
          ]),
          _: 3
        })
      ], 4);
    };
  }
});
const Il = {
  install: (e) => (e.component(Dt.name, Dt), e)
};
export {
  Dt as CustomForm,
  Il as default
};
//# sourceMappingURL=index.es.js.map
