(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8145],{594:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(7462),i=t(7294),o=t(5987),c=t(6010),u=t(9788),a=t(3871),l=i.forwardRef((function(e,n){var t=e.children,u=e.classes,l=e.className,s=e.color,f=void 0===s?"inherit":s,d=e.component,m=void 0===d?"svg":d,h=e.fontSize,v=void 0===h?"medium":h,p=e.htmlColor,w=e.titleAccess,y=e.viewBox,Z=void 0===y?"0 0 24 24":y,x=(0,o.Z)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return i.createElement(m,(0,r.Z)({className:(0,c.Z)(u.root,l,"inherit"!==f&&u["color".concat((0,a.Z)(f))],"default"!==v&&"medium"!==v&&u["fontSize".concat((0,a.Z)(v))]),focusable:"false",viewBox:Z,color:p,"aria-hidden":!w||void 0,role:w?"img":void 0,ref:n},x),t,w?i.createElement("title",null,w):null)}));l.muiName="SvgIcon";var s=(0,u.Z)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(l);function f(e,n){var t=function(n,t){return i.createElement(s,(0,r.Z)({ref:t},n),e)};return t.muiName=s.muiName,i.memo(i.forwardRef(t))}},9437:function(e,n,t){"use strict";function r(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var c=this,u=function(){e.apply(c,i)};clearTimeout(n),n=setTimeout(u,t)}return r.clear=function(){clearTimeout(n)},r}t.d(n,{Z:function(){return r}})},626:function(e,n,t){"use strict";function r(e){return e&&e.ownerDocument||document}t.d(n,{Z:function(){return r}})},713:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(626);function i(e){return(0,r.Z)(e).defaultView||window}},4236:function(e,n,t){"use strict";function r(e,n){"function"===typeof e?e(n):e&&(e.current=n)}t.d(n,{Z:function(){return r}})},5192:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(7294),i="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;function o(e){var n=r.useRef(e);return i((function(){n.current=e})),r.useCallback((function(){return n.current.apply(void 0,arguments)}),[])}},3834:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(7294),i=t(4236);function o(e,n){return r.useMemo((function(){return null==e&&null==n?null:function(t){(0,i.Z)(e,t),(0,i.Z)(n,t)}}),[e,n])}},4896:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(7294),i=t(3935),o=!0,c=!1,u=null,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function s(){o=!1}function f(){"hidden"===this.visibilityState&&c&&(o=!0)}function d(e){var n=e.target;try{return n.matches(":focus-visible")}catch(t){}return o||function(e){var n=e.type,t=e.tagName;return!("INPUT"!==t||!a[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}(n)}function m(){c=!0,window.clearTimeout(u),u=window.setTimeout((function(){c=!1}),100)}function h(){return{isFocusVisible:d,onBlurVisible:m,ref:r.useCallback((function(e){var n,t=i.findDOMNode(e);null!=t&&((n=t.ownerDocument).addEventListener("keydown",l,!0),n.addEventListener("mousedown",s,!0),n.addEventListener("pointerdown",s,!0),n.addEventListener("touchstart",s,!0),n.addEventListener("visibilitychange",f,!0))}),[])}}},1647:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ProfileTabs",function(){return t(1290)}])},1290:function(e,n,t){"use strict";t.r(n);var r=t(4111),i=t(1438),o=t(2951),c=t(4924),u=t(8029),a=t(460),l=t(5893),s=t(7294),f=t(1735),d=t(1423),m=t(2318),h=t(9788),v=function(e){(0,u.Z)(t,e);var n=(0,a.Z)(t);function t(){var e;return(0,i.Z)(this,t),e=n.apply(this,arguments),(0,c.Z)((0,r.Z)(e),"state",{activeIndex:0}),(0,c.Z)((0,r.Z)(e),"handleChange",(function(n,t){return e.setState({activeIndex:t})})),e}return(0,o.Z)(t,[{key:"render",value:function(){var e=this.state.activeIndex;return(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsxs)(p,{value:e,onChange:this.handleChange,children:[(0,l.jsx)(d.Z,{style:{color:"red !important"},children:"hi"}),(0,l.jsx)(d.Z,{label:"item two"}),(0,l.jsx)(d.Z,{label:"item three"}),(0,l.jsx)(w,{label:"item one"}),(0,l.jsx)(w,{label:"item two"}),(0,l.jsx)(w,{label:"item three"}),(0,l.jsx)(w,{label:"item one"}),(0,l.jsx)(w,{label:"item two"}),(0,l.jsx)(w,{label:"item three"})]}),0===e&&(0,l.jsx)(y,{children:"Item One"}),1===e&&(0,l.jsx)(y,{children:"Item Two"}),2===e&&(0,l.jsx)(y,{children:"Item Three"})]})}}]),t}(s.PureComponent),p=(0,h.Z)((function(e){return{flexContainer:{flexDirection:"column"},indicator:{display:"none"}}}))(f.Z),w=(0,h.Z)((function(e){return{root:{backgroundColor:"#ccc"},wrapper:{padding:e.spacing(2)},selected:{color:"tomato",borderLeft:"2px solid tomato"},flexContainer:{flexDirection:"column"}}}))(d.Z);function y(e){return(0,l.jsx)(m.Z,{component:"div",style:{padding:24},children:e.children})}n.default=v}},function(e){e.O(0,[34,2318,2764,9774,2888,179],(function(){return n=1647,e(e.s=n);var n}));var n=e.O();_N_E=n}]);