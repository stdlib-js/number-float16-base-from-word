"use strict";var _=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var v=_(function(P,n){
var A=require('@stdlib/constants-float16-ninf/dist'),T=require('@stdlib/constants-float16-pinf/dist'),a=require('@stdlib/math-base-special-exp2/dist'),t=require('@stdlib/constants-float16-exponent-bias/dist'),I=require('@stdlib/constants-float16-sign-mask/dist'),O=require('@stdlib/constants-float16-exponent-mask/dist'),f=require('@stdlib/constants-float16-significand-mask/dist'),q=require('@stdlib/constants-float16-num-significand-bits/dist'),E=require('@stdlib/constants-float16-num-exponent-bits/dist'),F=a(E)-1,S=1-t;function s(i){var r,u,N,e;return N=(i&I)>>>15,u=(i&O)>>>q,r=i&f,u===F?r===0?N===1?A:T:NaN:u===0?r===0?N===1?-0:0:(e=a(S)*(r/1024),N?-e:e):(e=a(u-t)*(1+r/1024),N?-e:e)}n.exports=s
});var L=v();module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
