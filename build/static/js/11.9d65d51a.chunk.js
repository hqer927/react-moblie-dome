(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector,a=e;for(;a;){if(n.call(a,t))return a;a=a.parentElement}return null},e.exports=t.default},230:function(e,t,n){"use strict";n(49),n(231)},231:function(e,t,n){},232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(233)),o=u(n(94)),r=u(n(234)),l=u(n(235));function u(e){return e&&e.__esModule?e:{default:e}}o.default.alert=a.default,o.default.prompt=l.default,o.default.operation=r.default,t.default=o.default,e.exports=t.default},233:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[{text:"\u786e\u5b9a"}],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ios",i=!1;if(!e&&!t)return{close:function(){}};var s=document.createElement("div");function f(){o.unmountComponentAtNode(s),s&&s.parentNode&&s.parentNode.removeChild(s)}document.body.appendChild(s);var c=n.map(function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!i){var e=t();e&&e.then?e.then(function(){i=!0,f()}).catch(function(){}):(i=!0,f())}},e}),d="am-modal";return o.render(a.createElement(l.default,{visible:!0,transparent:!0,title:e,transitionName:"am-zoom",closable:!1,maskClosable:!1,footer:c,maskTransitionName:"am-fade",platform:u,wrapProps:{onTouchStart:function(e){/iPhone|iPod|iPad/i.test(navigator.userAgent)&&((0,r.default)(e.target,"."+d+"-footer")||e.preventDefault())}}},a.createElement("div",{className:d+"-alert-content"},t)),s),{close:f}};var a=i(n(0)),o=i(n(15)),r=u(n(121)),l=u(n(94));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}e.exports=t.default},234:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{text:"\u786e\u5b9a"}],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ios",n=!1,u=document.createElement("div");function i(){o.unmountComponentAtNode(u),u&&u.parentNode&&u.parentNode.removeChild(u)}document.body.appendChild(u);var s=e.map(function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!n){var e=t();e&&e.then?e.then(function(){n=!0,i()}).catch(function(){}):(n=!0,i())}},e});return o.render(a.createElement(l.default,{visible:!0,operation:!0,transparent:!0,prefixCls:"am-modal",transitionName:"am-zoom",closable:!1,maskClosable:!0,onClose:i,footer:s,maskTransitionName:"am-fade",className:"am-modal-operation",platform:t,wrapProps:{onTouchStart:function(e){/iPhone|iPod|iPad/i.test(navigator.userAgent)&&((0,r.default)(e.target,".am-modal-footer")||e.preventDefault())}}}),u),{close:i}};var a=i(n(0)),o=i(n(15)),r=u(n(121)),l=u(n(94));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}e.exports=t.default},235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"default",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:["",""],f=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"ios",c=!1;if(i="string"===typeof i?i:"number"===typeof i?""+i:"",!n)return{close:function(){}};var d="am-modal",p={text:i};function m(e){var t=e.target,n=t.getAttribute("type");null!==n&&(p[n]=t.value)}function v(e){var t=e.currentTarget||e.target;t&&t.focus()}var h=void 0,y=function(e){setTimeout(function(){e&&e.focus()},500)};switch(u){case"login-password":h=a.createElement("div",{className:d+"-input-container"},a.createElement("div",{className:d+"-input"},a.createElement("label",null,a.createElement("input",{type:"text",defaultValue:p.text,ref:function(e){return y(e)},onClick:v,onChange:m,placeholder:s[0]}))),a.createElement("div",{className:d+"-input"},a.createElement("label",null,a.createElement("input",{type:"password",defaultValue:p.password,onClick:v,onChange:m,placeholder:s[1]}))));break;case"secure-text":h=a.createElement("div",{className:d+"-input-container"},a.createElement("div",{className:d+"-input"},a.createElement("label",null,a.createElement("input",{type:"password",defaultValue:p.password,ref:function(e){return y(e)},onClick:v,onChange:m,placeholder:s[0]}))));break;case"default":default:h=a.createElement("div",{className:d+"-input-container"},a.createElement("div",{className:d+"-input"},a.createElement("label",null,a.createElement("input",{type:"text",defaultValue:p.text,ref:function(e){return y(e)},onClick:v,onChange:m,placeholder:s[0]}))))}var b=a.createElement("div",null,t,h),N=document.createElement("div");function P(){o.unmountComponentAtNode(N),N&&N.parentNode&&N.parentNode.removeChild(N)}function g(e){if("function"===typeof e){var t=p.text,n=void 0===t?"":t,a=p.password,o=void 0===a?"":a,r="login-password"===u?[n,o]:"secure-text"===u?[o]:[n];return e.apply(void 0,r)}}document.body.appendChild(N);var _=void 0;_="function"===typeof n?[{text:"\u53d6\u6d88",onPress:function(){}},{text:"\u786e\u5b9a",onPress:function(){g(n)}}]:n.map(function(e){return{text:e.text,onPress:function(){return g(e.onPress)}}});var C=_.map(function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!c){var e=t();e&&e.then?e.then(function(){c=!0,P()}).catch(function(){}):(c=!0,P())}},e});return o.render(a.createElement(l.default,{visible:!0,transparent:!0,prefixCls:d,title:e,closable:!1,maskClosable:!1,transitionName:"am-zoom",footer:C,maskTransitionName:"am-fade",platform:f,wrapProps:{onTouchStart:function(e){/iPhone|iPod|iPad/i.test(navigator.userAgent)&&((0,r.default)(e.target,"."+d+"-content")||e.preventDefault())}}},a.createElement("div",{className:d+"-propmt-content"},b)),N),{close:P}};var a=i(n(0)),o=i(n(15)),r=u(n(121)),l=u(n(94));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}e.exports=t.default},94:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalComponent=void 0;var a=p(n(45)),o=p(n(48)),r=p(n(44)),l=p(n(41)),u=p(n(42)),i=p(n(43)),s=p(n(46)),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),c=p(n(152)),d=p(n(57));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(n[a[o]]=e[a[o]])}return n},v=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"renderFooterButton",value:function(e,t,n){var a={};if(e.style&&"string"===typeof(a=e.style)){a={cancel:{},default:{},destructive:{color:"red"}}[a]||{}}return f.createElement(d.default,{activeClassName:t+"-button-active",key:n},f.createElement("a",{className:t+"-button",role:"button",style:a,onClick:function(t){t.preventDefault(),e.onPress&&e.onPress()}},e.text||"Button"))}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.prefixCls,l=n.className,u=n.wrapClassName,i=n.transitionName,d=n.maskTransitionName,p=n.style,v=n.platform,h=n.footer,y=void 0===h?[]:h,b=n.operation,N=n.animated,P=n.transparent,g=n.popup,_=n.animationType,C=m(n,["prefixCls","className","wrapClassName","transitionName","maskTransitionName","style","platform","footer","operation","animated","transparent","popup","animationType"]),w=(0,s.default)(r+"-button-group-"+(2!==y.length||b?"v":"h"),r+"-button-group-"+(b?"operation":"normal")),E=y.length?f.createElement("div",{className:w,role:"group"},y.map(function(e,n){return t.renderFooterButton(e,r,n)})):null,x=void 0,O=void 0;N&&(x=O=P?"am-fade":"am-slide-up",g&&(x="slide-up"===_?"am-slide-up":"am-slide-down",O="am-fade"));var k=(0,s.default)(u,(0,o.default)({},r+"-wrap-popup",g)),M=(0,s.default)(l,(e={},(0,o.default)(e,r+"-transparent",P),(0,o.default)(e,r+"-popup",g),(0,o.default)(e,r+"-popup-"+_,g&&_),(0,o.default)(e,r+"-android","android"===v),e));return f.createElement(c.default,(0,a.default)({},C,{prefixCls:r,className:M,wrapClassName:k,transitionName:i||x,maskTransitionName:d||O,style:p,footer:E}))}}]),t}(t.ModalComponent=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,i.default)(t,e),t}(f.Component));t.default=v,v.defaultProps={prefixCls:"am-modal",transparent:!1,popup:!1,animationType:"slide-down",animated:!0,style:{},onShow:function(){},footer:[],closable:!1,operation:!1,platform:"ios"}}}]);
//# sourceMappingURL=11.9d65d51a.chunk.js.map