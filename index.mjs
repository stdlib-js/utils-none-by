// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function e(e,i,n){var o,d;if(!r(e))throw new TypeError(s("1VzAh",e));if(!t(i))throw new TypeError(s("1Vz2H",i));for(o=e.length,d=0;d<o;d++){if(i.call(n,e[d],d,e))return!1;o=e.length}return!0}export{e as default};
//# sourceMappingURL=index.mjs.map
