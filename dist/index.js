"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var v=f(function(q,s){
var m=require('@stdlib/assert-is-collection/dist'),o=require('@stdlib/assert-is-function/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function g(e,r,n){var a,t,u;if(!m(e))throw new TypeError(i('1VzAh',e));if(!o(r))throw new TypeError(i('1Vz2H',r));for(t=e.length,u=0;u<t;u++){if(a=r.call(n,e[u],u,e),a)return!1;t=e.length}return!0}s.exports=g
});var h=v();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
