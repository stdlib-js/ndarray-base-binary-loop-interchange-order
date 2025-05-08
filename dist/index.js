"use strict";var g=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var x=g(function(C,d){
function b(a,r){var n,f,t,e,v,u,i,s,l,p;for(t=1,e=1,p=1;p<a.length;p++){for(i=a[t],n=i<0?-i:i,s=r[e],v=t-1,u=e-1;v>=0&&(l=a[v],f=l<0?-l:l,!(f<=n));)a[v+1]=l,r[u+1]=r[u],v-=1,u-=1;a[v+1]=i,r[u+1]=s,t+=1,e+=1}}d.exports=b
});var m=g(function(D,k){
var w=require('@stdlib/array-base-zero-to/dist'),N=require('@stdlib/array-base-copy-indexed/dist'),h=require('@stdlib/array-base-take-indexed/dist'),q=require('@stdlib/ndarray-base-strides2order/dist'),O=x(),j=3;function T(a,r,n,f){var t,e,v,u,i,s,l,p,o,c;if(t=w(a.length),s=q(r),l=q(n),p=q(f),e=[[],[],[],[]],e[s].push(r),e[l].push(n),e[p].push(f),v=e[0].length,v===j)i=r;else if(v===j-1){for(o=1;o<4;o++)if(e[o].length){i=e[o][0];break}}else{for(c=0,o=1;o<4;o++)u=e[o].length,u>=v&&(v=u,c=o);i=e[c][0]}return i=N(i),O(i,t),a=h(a,t),r=h(r,t),n=h(n,t),f=h(f,t),{sh:a,sx:r,sy:n,sz:f}}k.exports=T
});var A=m();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
