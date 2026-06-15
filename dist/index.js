"use strict";var _=function(N,r){return function(){try{return r||N((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=_(function(P,n){
var A=require('@stdlib/constants-float16-ninf/dist'),T=require('@stdlib/constants-float16-pinf/dist'),a=require('@stdlib/math-base-special-exp2/dist'),t=require('@stdlib/constants-float16-exponent-bias/dist'),I=require('@stdlib/constants-float16-sign-mask/dist'),O=require('@stdlib/constants-float16-exponent-mask/dist'),f=require('@stdlib/constants-float16-significand-mask/dist'),q=require('@stdlib/constants-float16-num-significand-bits/dist'),E=require('@stdlib/constants-float16-num-exponent-bits/dist'),F=a(E)-1,S=1-t;function s(N){var r,e,u,i;return u=(N&I)>>>15,e=(N&O)>>>q,r=N&f,e===F?r===0?u===1?A:T:NaN:e===0?r===0?u===1?-0:0:(i=a(S)*(r/1024),u?-i:i):(i=a(e-t)*(1+r/1024),u?-i:i)}n.exports=s
});var L=v();module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
