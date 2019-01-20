import { Instance, FlatpickrFn } from "./types/instance";
import {
  Options,
  ParsedOptions,
  defaults as defaultOptions,
} from "./types/options";

import Vue from "vue";
import "./components/aci-timer";
// import English from "./l10n/default";

import "./utils/polyfills";
if (!Date.prototype.aciDateFormat) {
  Date.prototype.aciDateFormat = function(fmt: string) {
    let o: any = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      S: this.getMilliseconds(), //毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return fmt;
  };
}

// function FlatpickrInstance(
//   element: HTMLElement,
//   instanceConfig?: Options
// ): Instance {
//   const self = {
//     config: {
//       ...flatpickr.defaultConfig,
//     } as ParsedOptions,
//     l10n: English,
//   } as Instance;
//   return self;
// }

/* istanbul ignore next */
var flatpickr = function(
  selector: ArrayLike<Node> | Node | string,
  config?: Options
) {} as FlatpickrFn;

new Vue({
  el: "#example",
  template: `<div><aci-timer></aci-timer></div>`,
});
export default flatpickr;
