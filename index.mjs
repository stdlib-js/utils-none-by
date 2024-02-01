// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(n,s,i){var o,l;if(!t(n))throw new TypeError(r("invalid argument. First argument must be a collection. Value: `%s`.",n));if(!e(s))throw new TypeError(r("invalid argument. Second argument must be a function. Value: `%s`.",s));for(o=n.length,l=0;l<o;l++){if(s.call(i,n[l],l,n))return!1;o=n.length}return!0}export{n as default};
//# sourceMappingURL=index.mjs.map
