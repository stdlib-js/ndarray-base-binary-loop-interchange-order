// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,e;n=this,e=function(){"use strict";function n(n,e){var r,t;for(r=[],t=0;t<e.length;t++)r.push(n[e[t]]);return r}function e(n){return Math.abs(n)}function r(n){var r,t,f,u,o,i;if(0===(t=n.length))return 0;for(r=!0,f=!0,u=e(n[0]),i=1;i<t;i++){if(o=e(n[i]),r&&o<u?r=!1:f&&o>u&&(f=!1),!f&&!r)return 0;u=o}return f&&r?3:f?1:2}return function(e,t,f,u){var o,i,s,h,l,a,p,c,d,g;if(o=function(n){var e,r;if(e=[],n<=0)return e;for(r=0;r<n;r++)e.push(r);return e}(e.length),a=r(t),p=r(f),c=r(u),i=function(n,e){var r,t;for(r=[],t=0;t<e;t++)r.push(n);return r}([],4),i[a].push(t),i[p].push(f),i[c].push(u),3===(s=i[0].length))l=t;else if(2===s){for(d=1;d<4;d++)if(i[d].length){l=i[d][0];break}}else{for(g=0,d=1;d<4;d++)(h=i[d].length)>=s&&(s=h,g=d);l=i[g][0]}return l=function(n){var e,r,t;for(r=n.length,e=[],t=0;t<r;t++)e.push(n[t]);return e}(l),function(n,e){var r,t,f,u,o,i,s,h,l;for(t=1,f=1,l=1;l<n.length;l++){for(r=(i=n[t])<0?-i:i,s=e[f],u=t-1,o=f-1;u>=0&&!(((h=n[u])<0?-h:h)<=r);)n[u+1]=h,e[o+1]=e[o],u-=1,o-=1;n[u+1]=i,e[o+1]=s,t+=1,f+=1}}(l,o),{sh:e=n(e,o),sx:t=t===l?l:n(t,o),sy:f=f===l?l:n(f,o),sz:u=u===l?l:n(u,o)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n="undefined"!=typeof globalThis?globalThis:n||self).binaryLoopOrder=e();
//# sourceMappingURL=browser.js.map
