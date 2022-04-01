// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var n=t,s=e,i=r;var o=function(t,e,r){var o,a;if(!n(t))throw new TypeError(i("invalid argument. First argument must be a collection. Value: `%s`.",t));if(!s(e))throw new TypeError(i("invalid argument. Second argument must be a function. Value: `%s`.",e));for(o=t.length,a=0;a<o;a++){if(e.call(r,t[a],a,t))return!1;o=t.length}return!0};export{o as default};
//# sourceMappingURL=index.mjs.map
