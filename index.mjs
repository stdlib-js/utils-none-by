// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function e(e,i,n){var o,d;if(!r(e))throw new TypeError(s("0kqBO",e));if(!t(i))throw new TypeError(s("0kq2S",i));for(o=e.length,d=0;d<o;d++){if(i.call(n,e[d],d,e))return!1;o=e.length}return!0}export{e as default};
//# sourceMappingURL=index.mjs.map
