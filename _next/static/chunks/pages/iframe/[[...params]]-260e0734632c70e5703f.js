(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[528],{5478:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),a=t(7294),s=t(436),u=t(3563),o=t(9265),c=t.n(o);function i(e){var n,t=e.color,o=e.focus,i=e.signaturesReached;switch(t){case"dark":n=c().dark;break;case"light":n=c().light;break;case"customDark":n=c().customDark;break;default:n=c().dark}var l,_=(0,a.useRef)();return(0,a.useEffect)((function(){o&&_.current.focus()}),[o]),l=i?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{format:"banner",countReverse:!1})," signatures pour notre autonomie : je signe !"]}):(0,r.jsxs)(r.Fragment,{children:["J-",(0,r.jsx)(s.Z,{format:"banner"})," pour obtenir"," ",(0,r.jsx)(u.Z,{format:"banner",countReverse:!0})," signatures : je signe !"]}),(0,r.jsx)("a",{href:"https://petitions.senat.fr/initiatives/i-416",target:"_blank",rel:"noreferrer",className:"".concat(c().counters," ").concat(n),ref:_,children:l})}i.defaultProps={color:"dark",focus:!1}},436:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),a=t(7294),s=t(4097),u=t.n(s);function o(e){var n=e.remainingTime;return(0,r.jsxs)("div",{className:u().counter__container,role:"paragraph",children:[(0,r.jsx)("span",{className:u().counter__text,children:"Temps restant pour signer :"}),(0,r.jsxs)("div",{className:u().counter__units,children:[(0,r.jsxs)("div",{className:u().counter__unit,children:[(0,r.jsx)("span",{className:u().counter__value,children:n.days})," ","jours"]}),(0,r.jsxs)("div",{className:u().counter__unit,children:[(0,r.jsx)("span",{className:u().counter__value,children:n.hours})," ","heures"]}),(0,r.jsxs)("div",{className:u().counter__unit,children:[(0,r.jsx)("span",{className:u().counter__value,children:n.minutes})," ","minutes"]})]})]})}function c(e){var n=e.expirationDate,t=e.updateInterval,s=e.format,u=(0,a.useState)(i(new Date,n)),c=u[0],l=u[1];return(0,a.useEffect)((function(){var e=setInterval((function(){var t=new Date;t>n?(clearInterval(e),l({days:0,hours:0,minutes:0,seconds:0})):l(i(t,n))}),1e3*t)}),[]),"block"===s?(0,r.jsx)(o,{remainingTime:c}):c.days}function i(e,n){if(n<e)return{days:0,hours:0,minutes:0,seconds:0};var t={},r=n-e;return r=Math.floor(r/1e3),t.seconds=r%60,r=Math.floor((r-t.seconds)/60),t.minutes=r%60,r=Math.floor((r-t.minutes)/60),t.hours=r%24,r=Math.floor((r-t.hours)/24),t.days=r,t}c.defaultProps={expirationDate:new Date(2021,2,10,23,59,59),updateInterval:60}},3563:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(5893),a=t(809),s=t.n(a),u=t(2447),o=t(7294),c=t(5350),i=t.n(c);function l(e){var n=e.count;return(0,r.jsxs)("p",{className:i().counter__container,children:[(0,r.jsx)("span",{className:i().counter__text,children:"Nombre total de signatures :"}),(0,r.jsx)("span",{className:i().counter__value,children:n.toLocaleString()}),(0,r.jsx)("span",{children:" /100 000"})]})}var _=t(9669),f=t.n(_),p=1e5;function d(){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)(s().mark((function e(){var n,t,r=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:m,e.next=3,f().get("https://petitions.senat.fr/initiatives/i-416");case 3:return t=e.sent,e.abrupt("return",n(t.data));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){var n=(new DOMParser).parseFromString(e,"text/html");return parseInt(n.querySelector("#initiative-416-votes-count span.progress__bar__number").textContent)}var v=s().mark(j);function x(e){var n=e.value,t=e.initialTimeToWait,a=e.growingFactor,c=e.growingLimit,i=e.maxTotalRequests,_=e.countAnimationFrames,f=e.countAnimationDelay,h=e.format,m=e.countReverse,v=(0,o.useState)(null!==n?n:"block"===h||"banner"===h&&!m?0:p),x=v[0],b=v[1],k=(0,o.useState)(t),w=k[0],N=k[1],y=(0,o.useRef)(j(t,a,c)),R=(0,o.useRef)(0);return(0,o.useEffect)((function(){var e=!0;function n(){return(n=(0,u.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:if(n=e.sent,"block"!==h&&("banner"!==h||m)){e.next=8;break}return e.next=6,t(n);case 6:e.next=10;break;case 8:return e.next=10,a(p-n);case 10:return e.next=12,g(w);case 12:R.current+=1,R.current<i&&N(y.current.next().value);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(e){return r.apply(this,arguments)}function r(){return(r=(0,u.Z)(s().mark((function n(t){var r,a,u;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:_?(r=Math.abs(Math.abs(t-x)-.1)/_,a=x,u=setInterval((function(){a>t||!e?clearInterval(u):b(Math.ceil(a)),a+=r}),f)):b(t);case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function a(e){return o.apply(this,arguments)}function o(){return(o=(0,u.Z)(s().mark((function n(t){var r,a,u;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t<x&&(_?(r=Math.abs(Math.abs(t-x)-.1)/_,a=x,u=setInterval((function(){a<t||!e?clearInterval(u):b(Math.floor(a)),a-=r}),f)):b(t));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return R.current<i&&function(){n.apply(this,arguments)}(),function(){e=!1}}),[w]),"block"===h?(0,r.jsx)(l,{count:x}):x.toLocaleString()}function g(e){return b.apply(this,arguments)}function b(){return(b=(0,u.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout(e,n)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,n,t){var r,a;return s().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:r=e;case 1:return r=(a=r*n)<t?a:t,s.next=6,r;case 6:s.next=1;break;case 8:case"end":return s.stop()}}),v)}x.defaultProps={value:null,initialTimeToWait:3e3,growingFactor:1.2,growingLimit:864e5,maxTotalRequests:150,countAnimationFrames:20,countAnimationDelay:30,countReverse:!0}},8481:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(5893),a=t(5478),s=t(7294),u=t(436),o=t(3563),c=t(282);function i(e){var n=e.focus,t=(0,s.useRef)();return(0,s.useEffect)((function(){n&&t.current.focus()}),[n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{format:"block"}),(0,r.jsx)(o.Z,{format:"block"}),(0,r.jsx)(c.Z,{variant:"contained",href:"https://petitions.senat.fr/initiatives/i-416",style:{textTransform:"none",backgroundColor:"#333",color:"white"},target:"_blank",rel:"noreferrer",ref:t,children:"Signez la p\xe9tition sur le site du S\xe9nat"})]})}i.defaultProps={focus:!1};var l=t(301),_=t.n(l);function f(e){var n=e.format,t=e.color,s=e.focus,u=e.signaturesReached;return(0,r.jsx)("div",{className:_().container,children:"block"===n?(0,r.jsx)(i,{focus:s}):(0,r.jsx)(a.Z,{color:t,focus:s,signaturesReached:u})})}},1653:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return o},default:function(){return c}});var r=t(5893),a=t(9008),s=t(8481),u=t(1163),o=!0;function c(e){var n=e.signaturesReached,t=(0,u.useRouter)(),o=null,c=null;if(t.isReady&&(o="banner",c="dark","params"in t.query)){var i=t.query.params;i.length>0&&(o=i[0],i.length>1&&"banner"===o&&(c=i[1]))}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"D\xe9solidarisation des revenus du conjoint pour le paiement de l'Allocation aux Adultes Handicap\xe9s (AAH)"})}),(0,r.jsx)("main",{role:"main",children:o&&(0,r.jsx)(s.Z,{format:o,color:c,signaturesReached:n})})]})}},2344:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/iframe/[[...params]]",function(){return t(1653)}])},9265:function(e){e.exports={counters:"counter_banner_counters__3ReQQ",dark:"counter_banner_dark__1e8xI",light:"counter_banner_light__UIDkM",customDark:"counter_banner_customDark__2K7nz"}},4097:function(e){e.exports={counter__container:"date_counter_counter__container__3_uxX",counter__text:"date_counter_counter__text__aEDNn",counter__units:"date_counter_counter__units__1NpvO",counter__unit:"date_counter_counter__unit__3NJIi",counter__value:"date_counter_counter__value__1XQPV"}},5350:function(e){e.exports={counter__container:"signatures_counter_counter__container__Qxmmn",counter__text:"signatures_counter_counter__text__1jbVp",counter__value:"signatures_counter_counter__value__3RgXp"}},301:function(e){e.exports={container:"iframe_content_container__OEz3f"}},1163:function(e,n,t){e.exports=t(2441)}},function(e){e.O(0,[774,210,888,179],(function(){return n=2344,e(e.s=n);var n}));var n=e.O();_N_E=n}]);