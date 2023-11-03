"use strict";var g=function(v,e){return function(){return e||v((e={exports:{}}).exports,e),e.exports}};var j=g(function(D,s){
function b(v,e){var u,n,t,a,i,l,r,h,f,p;for(t=1,a=1,p=1;p<v.length;p++){for(r=v[t],u=r<0?-r:r,h=e[a],i=t-1,l=a-1;i>=0&&(f=v[i],n=f<0?-f:f,!(n<=u));)v[i+1]=f,e[l+1]=e[l],i-=1,l-=1;v[i+1]=r,e[l+1]=h,t+=1,a+=1}}s.exports=b
});var x=g(function(E,m){
var w=require('@stdlib/array-base-zero-to/dist'),N=require('@stdlib/array-base-copy-indexed/dist'),q=require('@stdlib/array-base-take/dist'),O=require('@stdlib/array-base-filled/dist'),d=require('@stdlib/ndarray-base-strides2order/dist'),T=j(),k=3;function A(v,e,u,n){var t,a,i,l,r,h,f,p,o,c;if(t=w(v.length),h=d(e),f=d(u),p=d(n),a=O([],4),a[h].push(e),a[f].push(u),a[p].push(n),i=a[0].length,i===k)r=e;else if(i===k-1){for(o=1;o<4;o++)if(a[o].length){r=a[o][0];break}}else{for(c=0,o=1;o<4;o++)l=a[o].length,l>=i&&(i=l,c=o);r=a[c][0]}return r=N(r),T(r,t),v=q(v,t),e=e===r?r:q(e,t),u=u===r?r:q(u,t),n=n===r?r:q(n,t),{sh:v,sx:e,sy:u,sz:n}}m.exports=A
});var B=x();module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
