"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[226],{15746:function(Xe,he,h){var a=h(21584);he.Z=a.Z},71230:function(Xe,he,h){var a=h(92820);he.Z=a.Z},64970:function(Xe,he,h){h.d(he,{Z:function(){return Qa}});var a=h(67294),Rt=h(62208),wt=h(35872),oe=h(87462),It={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},Nt=It,Lt=h(93771),Zt=function(t,n){return a.createElement(Lt.Z,(0,oe.Z)({},t,{ref:n,icon:Nt}))},Mt=a.forwardRef(Zt),_t=Mt,Ot=h(93967),X=h.n(Ot),Y=h(4942),ae=h(1413),N=h(97685),_e=h(71002),pe=h(91),Fe=h(21770),zt=h(31131),Ee=(0,a.createContext)(null),Ue=h(74902),Oe=h(9220),At=h(66680),ye=h(42550),ze=h(75164),Bt=function(t){var n=t.activeTabOffset,r=t.horizontal,i=t.rtl,l=t.indicator,c=l===void 0?{}:l,o=c.size,s=c.align,d=s===void 0?"center":s,m=(0,a.useState)(),f=(0,N.Z)(m,2),g=f[0],E=f[1],L=(0,a.useRef)(),P=a.useCallback(function(p){return typeof o=="function"?o(p):typeof o=="number"?o:p},[o]);function I(){ze.Z.cancel(L.current)}return(0,a.useEffect)(function(){var p={};if(n)if(r){p.width=P(n.width);var v=i?"right":"left";d==="start"&&(p[v]=n[v]),d==="center"&&(p[v]=n[v]+n.width/2,p.transform=i?"translateX(50%)":"translateX(-50%)"),d==="end"&&(p[v]=n[v]+n.width,p.transform="translateX(-100%)")}else p.height=P(n.height),d==="start"&&(p.top=n.top),d==="center"&&(p.top=n.top+n.height/2,p.transform="translateY(-50%)"),d==="end"&&(p.top=n.top+n.height,p.transform="translateY(-100%)");return I(),L.current=(0,ze.Z)(function(){E(p)}),I},[n,r,i,d,P]),{style:g}},Dt=Bt,Ye={width:0,height:0,left:0,top:0};function Wt(e,t,n){return(0,a.useMemo)(function(){for(var r,i=new Map,l=t.get((r=e[0])===null||r===void 0?void 0:r.key)||Ye,c=l.left+l.width,o=0;o<e.length;o+=1){var s=e[o].key,d=t.get(s);if(!d){var m;d=t.get((m=e[o-1])===null||m===void 0?void 0:m.key)||Ye}var f=i.get(s)||(0,ae.Z)({},d);f.right=c-f.left-f.width,i.set(s,f)}return i},[e.map(function(r){return r.key}).join("_"),t,n])}function Qe(e,t){var n=a.useRef(e),r=a.useState({}),i=(0,N.Z)(r,2),l=i[1];function c(o){var s=typeof o=="function"?o(n.current):o;s!==n.current&&t(s,n.current),n.current=s,l({})}return[n.current,c]}var kt=.1,Je=.01,Pe=20,qe=Math.pow(.995,Pe);function Ht(e,t){var n=(0,a.useState)(),r=(0,N.Z)(n,2),i=r[0],l=r[1],c=(0,a.useState)(0),o=(0,N.Z)(c,2),s=o[0],d=o[1],m=(0,a.useState)(0),f=(0,N.Z)(m,2),g=f[0],E=f[1],L=(0,a.useState)(),P=(0,N.Z)(L,2),I=P[0],p=P[1],v=(0,a.useRef)();function Z(b){var R=b.touches[0],y=R.screenX,w=R.screenY;l({x:y,y:w}),window.clearInterval(v.current)}function D(b){if(i){b.preventDefault();var R=b.touches[0],y=R.screenX,w=R.screenY;l({x:y,y:w});var u=y-i.x,C=w-i.y;t(u,C);var V=Date.now();d(V),E(V-s),p({x:u,y:C})}}function W(){if(i&&(l(null),p(null),I)){var b=I.x/g,R=I.y/g,y=Math.abs(b),w=Math.abs(R);if(Math.max(y,w)<kt)return;var u=b,C=R;v.current=window.setInterval(function(){if(Math.abs(u)<Je&&Math.abs(C)<Je){window.clearInterval(v.current);return}u*=qe,C*=qe,t(u*Pe,C*Pe)},Pe)}}var M=(0,a.useRef)();function _(b){var R=b.deltaX,y=b.deltaY,w=0,u=Math.abs(R),C=Math.abs(y);u===C?w=M.current==="x"?R:y:u>C?(w=R,M.current="x"):(w=y,M.current="y"),t(-w,-w)&&b.preventDefault()}var T=(0,a.useRef)(null);T.current={onTouchStart:Z,onTouchMove:D,onTouchEnd:W,onWheel:_},a.useEffect(function(){function b(u){T.current.onTouchStart(u)}function R(u){T.current.onTouchMove(u)}function y(u){T.current.onTouchEnd(u)}function w(u){T.current.onWheel(u)}return document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",y,{passive:!1}),e.current.addEventListener("touchstart",b,{passive:!1}),e.current.addEventListener("wheel",w),function(){document.removeEventListener("touchmove",R),document.removeEventListener("touchend",y)}},[])}var Gt=h(8410);function et(e){var t=(0,a.useState)(0),n=(0,N.Z)(t,2),r=n[0],i=n[1],l=(0,a.useRef)(0),c=(0,a.useRef)();return c.current=e,(0,Gt.o)(function(){var o;(o=c.current)===null||o===void 0||o.call(c)},[r]),function(){l.current===r&&(l.current+=1,i(l.current))}}function Vt(e){var t=(0,a.useRef)([]),n=(0,a.useState)({}),r=(0,N.Z)(n,2),i=r[1],l=(0,a.useRef)(typeof e=="function"?e():e),c=et(function(){var s=l.current;t.current.forEach(function(d){s=d(s)}),t.current=[],l.current=s,i({})});function o(s){t.current.push(s),c()}return[l.current,o]}var tt={width:0,height:0,left:0,top:0,right:0};function jt(e,t,n,r,i,l,c){var o=c.tabs,s=c.tabPosition,d=c.rtl,m,f,g;return["top","bottom"].includes(s)?(m="width",f=d?"right":"left",g=Math.abs(n)):(m="height",f="top",g=-n),(0,a.useMemo)(function(){if(!o.length)return[0,0];for(var E=o.length,L=E,P=0;P<E;P+=1){var I=e.get(o[P].key)||tt;if(I[f]+I[m]>g+t){L=P-1;break}}for(var p=0,v=E-1;v>=0;v-=1){var Z=e.get(o[v].key)||tt;if(Z[f]<g){p=v+1;break}}return p>=L?[0,0]:[p,L]},[e,t,r,i,l,g,s,o.map(function(E){return E.key}).join("_"),d])}function at(e){var t;return e instanceof Map?(t={},e.forEach(function(n,r){t[r]=n})):t=e,JSON.stringify(t)}var Kt="TABS_DQ";function nt(e){return String(e).replace(/"/g,Kt)}function rt(e,t,n,r){return!(!n||r||e===!1||e===void 0&&(t===!1||t===null))}var Xt=a.forwardRef(function(e,t){var n=e.prefixCls,r=e.editable,i=e.locale,l=e.style;return!r||r.showAdd===!1?null:a.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:l,"aria-label":(i==null?void 0:i.addAriaLabel)||"Add tab",onClick:function(o){r.onEdit("add",{event:o})}},r.addIcon||"+")}),it=Xt,Ft=a.forwardRef(function(e,t){var n=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var l,c={};return(0,_e.Z)(i)==="object"&&!a.isValidElement(i)?c=i:c.right=i,n==="right"&&(l=c.right),n==="left"&&(l=c.left),l?a.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},l):null}),ot=Ft,Ut=h(40228),ne=h(15105),Yt=ne.Z.ESC,Qt=ne.Z.TAB;function Jt(e){var t=e.visible,n=e.triggerRef,r=e.onVisibleChange,i=e.autoFocus,l=e.overlayRef,c=a.useRef(!1),o=function(){if(t){var f,g;(f=n.current)===null||f===void 0||(g=f.focus)===null||g===void 0||g.call(f),r==null||r(!1)}},s=function(){var f;return(f=l.current)!==null&&f!==void 0&&f.focus?(l.current.focus(),c.current=!0,!0):!1},d=function(f){switch(f.keyCode){case Yt:o();break;case Qt:{var g=!1;c.current||(g=s()),g?f.preventDefault():o();break}}};a.useEffect(function(){return t?(window.addEventListener("keydown",d),i&&(0,ze.Z)(s,3),function(){window.removeEventListener("keydown",d),c.current=!1}):function(){c.current=!1}},[t])}var qt=(0,a.forwardRef)(function(e,t){var n=e.overlay,r=e.arrow,i=e.prefixCls,l=(0,a.useMemo)(function(){var o;return typeof n=="function"?o=n():o=n,o},[n]),c=(0,ye.sQ)(t,l==null?void 0:l.ref);return a.createElement(a.Fragment,null,r&&a.createElement("div",{className:"".concat(i,"-arrow")}),a.cloneElement(l,{ref:(0,ye.Yr)(l)?c:void 0}))}),ea=qt,ve={adjustX:1,adjustY:1},be=[0,0],ta={topLeft:{points:["bl","tl"],overflow:ve,offset:[0,-4],targetOffset:be},top:{points:["bc","tc"],overflow:ve,offset:[0,-4],targetOffset:be},topRight:{points:["br","tr"],overflow:ve,offset:[0,-4],targetOffset:be},bottomLeft:{points:["tl","bl"],overflow:ve,offset:[0,4],targetOffset:be},bottom:{points:["tc","bc"],overflow:ve,offset:[0,4],targetOffset:be},bottomRight:{points:["tr","br"],overflow:ve,offset:[0,4],targetOffset:be}},aa=ta,na=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function ra(e,t){var n,r=e.arrow,i=r===void 0?!1:r,l=e.prefixCls,c=l===void 0?"rc-dropdown":l,o=e.transitionName,s=e.animation,d=e.align,m=e.placement,f=m===void 0?"bottomLeft":m,g=e.placements,E=g===void 0?aa:g,L=e.getPopupContainer,P=e.showAction,I=e.hideAction,p=e.overlayClassName,v=e.overlayStyle,Z=e.visible,D=e.trigger,W=D===void 0?["hover"]:D,M=e.autoFocus,_=e.overlay,T=e.children,b=e.onVisibleChange,R=(0,pe.Z)(e,na),y=a.useState(),w=(0,N.Z)(y,2),u=w[0],C=w[1],V="visible"in e?Z:u,j=a.useRef(null),Q=a.useRef(null),K=a.useRef(null);a.useImperativeHandle(t,function(){return j.current});var J=function(A){C(A),b==null||b(A)};Jt({visible:V,triggerRef:K,onVisibleChange:J,autoFocus:M,overlayRef:Q});var re=function(A){var ee=e.onOverlayClick;C(!1),ee&&ee(A)},q=function(){return a.createElement(ea,{ref:Q,overlay:_,prefixCls:c,arrow:i})},S=function(){return typeof _=="function"?q:q()},O=function(){var A=e.minOverlayWidthMatchTrigger,ee=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?A:!ee},F=function(){var A=e.openClassName;return A!==void 0?A:"".concat(c,"-open")},G=a.cloneElement(T,{className:X()((n=T.props)===null||n===void 0?void 0:n.className,V&&F()),ref:(0,ye.Yr)(T)?(0,ye.sQ)(K,T.ref):void 0}),k=I;return!k&&W.indexOf("contextMenu")!==-1&&(k=["click"]),a.createElement(Ut.Z,(0,oe.Z)({builtinPlacements:E},R,{prefixCls:c,ref:j,popupClassName:X()(p,(0,Y.Z)({},"".concat(c,"-show-arrow"),i)),popupStyle:v,action:W,showAction:P,hideAction:k,popupPlacement:f,popupAlign:d,popupTransitionName:o,popupAnimation:s,popupVisible:V,stretch:O()?"minWidth":"",popup:S(),onPopupVisibleChange:J,onPopupClick:re,getPopupContainer:L}),G)}var ia=a.forwardRef(ra),oa=ia,lt=h(72512),la=a.forwardRef(function(e,t){var n=e.prefixCls,r=e.id,i=e.tabs,l=e.locale,c=e.mobile,o=e.moreIcon,s=o===void 0?"More":o,d=e.moreTransitionName,m=e.style,f=e.className,g=e.editable,E=e.tabBarGutter,L=e.rtl,P=e.removeAriaLabel,I=e.onTabClick,p=e.getPopupContainer,v=e.popupClassName,Z=(0,a.useState)(!1),D=(0,N.Z)(Z,2),W=D[0],M=D[1],_=(0,a.useState)(null),T=(0,N.Z)(_,2),b=T[0],R=T[1],y="".concat(r,"-more-popup"),w="".concat(n,"-dropdown"),u=b!==null?"".concat(y,"-").concat(b):null,C=l==null?void 0:l.dropdownAriaLabel;function V(S,O){S.preventDefault(),S.stopPropagation(),g.onEdit("remove",{key:O,event:S})}var j=a.createElement(lt.ZP,{onClick:function(O){var F=O.key,G=O.domEvent;I(F,G),M(!1)},prefixCls:"".concat(w,"-menu"),id:y,tabIndex:-1,role:"listbox","aria-activedescendant":u,selectedKeys:[b],"aria-label":C!==void 0?C:"expanded dropdown"},i.map(function(S){var O=S.closable,F=S.disabled,G=S.closeIcon,k=S.key,U=S.label,A=rt(O,G,g,F);return a.createElement(lt.sN,{key:k,id:"".concat(y,"-").concat(k),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(k),disabled:F},a.createElement("span",null,U),A&&a.createElement("button",{type:"button","aria-label":P||"remove",tabIndex:0,className:"".concat(w,"-menu-item-remove"),onClick:function(le){le.stopPropagation(),V(le,k)}},G||g.removeIcon||"\xD7"))}));function Q(S){for(var O=i.filter(function(A){return!A.disabled}),F=O.findIndex(function(A){return A.key===b})||0,G=O.length,k=0;k<G;k+=1){F=(F+S+G)%G;var U=O[F];if(!U.disabled){R(U.key);return}}}function K(S){var O=S.which;if(!W){[ne.Z.DOWN,ne.Z.SPACE,ne.Z.ENTER].includes(O)&&(M(!0),S.preventDefault());return}switch(O){case ne.Z.UP:Q(-1),S.preventDefault();break;case ne.Z.DOWN:Q(1),S.preventDefault();break;case ne.Z.ESC:M(!1);break;case ne.Z.SPACE:case ne.Z.ENTER:b!==null&&I(b,S);break}}(0,a.useEffect)(function(){var S=document.getElementById(u);S&&S.scrollIntoView&&S.scrollIntoView(!1)},[b]),(0,a.useEffect)(function(){W||R(null)},[W]);var J=(0,Y.Z)({},L?"marginRight":"marginLeft",E);i.length||(J.visibility="hidden",J.order=1);var re=X()((0,Y.Z)({},"".concat(w,"-rtl"),L)),q=c?null:a.createElement(oa,{prefixCls:w,overlay:j,trigger:["hover"],visible:i.length?W:!1,transitionName:d,onVisibleChange:M,overlayClassName:X()(re,v),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:p},a.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:J,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":y,id:"".concat(r,"-more"),"aria-expanded":W,onKeyDown:K},s));return a.createElement("div",{className:X()("".concat(n,"-nav-operations"),f),style:m,ref:t},q,a.createElement(it,{prefixCls:n,locale:l,editable:g}))}),ca=a.memo(la,function(e,t){return t.tabMoving}),sa=function(t){var n=t.prefixCls,r=t.id,i=t.active,l=t.tab,c=l.key,o=l.label,s=l.disabled,d=l.closeIcon,m=l.icon,f=t.closable,g=t.renderWrapper,E=t.removeAriaLabel,L=t.editable,P=t.onClick,I=t.onFocus,p=t.style,v="".concat(n,"-tab"),Z=rt(f,d,L,s);function D(T){s||P(T)}function W(T){T.preventDefault(),T.stopPropagation(),L.onEdit("remove",{key:c,event:T})}var M=a.useMemo(function(){return m&&typeof o=="string"?a.createElement("span",null,o):o},[o,m]),_=a.createElement("div",{key:c,"data-node-key":nt(c),className:X()(v,(0,Y.Z)((0,Y.Z)((0,Y.Z)({},"".concat(v,"-with-remove"),Z),"".concat(v,"-active"),i),"".concat(v,"-disabled"),s)),style:p,onClick:D},a.createElement("div",{role:"tab","aria-selected":i,id:r&&"".concat(r,"-tab-").concat(c),className:"".concat(v,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(c),"aria-disabled":s,tabIndex:s?null:0,onClick:function(b){b.stopPropagation(),D(b)},onKeyDown:function(b){[ne.Z.SPACE,ne.Z.ENTER].includes(b.which)&&(b.preventDefault(),D(b))},onFocus:I},m&&a.createElement("span",{className:"".concat(v,"-icon")},m),o&&M),Z&&a.createElement("button",{type:"button","aria-label":E||"remove",tabIndex:0,className:"".concat(v,"-remove"),onClick:function(b){b.stopPropagation(),W(b)}},d||L.removeIcon||"\xD7"));return g?g(_):_},da=sa,ua=function(t,n){var r=t.offsetWidth,i=t.offsetHeight,l=t.offsetTop,c=t.offsetLeft,o=t.getBoundingClientRect(),s=o.width,d=o.height,m=o.x,f=o.y;return Math.abs(s-r)<1?[s,d,m-n.x,f-n.y]:[r,i,c,l]},me=function(t){var n=t.current||{},r=n.offsetWidth,i=r===void 0?0:r,l=n.offsetHeight,c=l===void 0?0:l;if(t.current){var o=t.current.getBoundingClientRect(),s=o.width,d=o.height;if(Math.abs(s-i)<1)return[s,d]}return[i,c]},Re=function(t,n){return t[n?0:1]},fa=a.forwardRef(function(e,t){var n=e.className,r=e.style,i=e.id,l=e.animated,c=e.activeKey,o=e.rtl,s=e.extra,d=e.editable,m=e.locale,f=e.tabPosition,g=e.tabBarGutter,E=e.children,L=e.onTabClick,P=e.onTabScroll,I=e.indicator,p=a.useContext(Ee),v=p.prefixCls,Z=p.tabs,D=(0,a.useRef)(null),W=(0,a.useRef)(null),M=(0,a.useRef)(null),_=(0,a.useRef)(null),T=(0,a.useRef)(null),b=(0,a.useRef)(null),R=(0,a.useRef)(null),y=f==="top"||f==="bottom",w=Qe(0,function(B,x){y&&P&&P({direction:B>x?"left":"right"})}),u=(0,N.Z)(w,2),C=u[0],V=u[1],j=Qe(0,function(B,x){!y&&P&&P({direction:B>x?"top":"bottom"})}),Q=(0,N.Z)(j,2),K=Q[0],J=Q[1],re=(0,a.useState)([0,0]),q=(0,N.Z)(re,2),S=q[0],O=q[1],F=(0,a.useState)([0,0]),G=(0,N.Z)(F,2),k=G[0],U=G[1],A=(0,a.useState)([0,0]),ee=(0,N.Z)(A,2),le=ee[0],Se=ee[1],Ae=(0,a.useState)([0,0]),Ce=(0,N.Z)(Ae,2),Be=Ce[0],z=Ce[1],de=Vt(new Map),ge=(0,N.Z)(de,2),Ja=ge[0],qa=ge[1],we=Wt(Z,Ja,k[0]),De=Re(S,y),xe=Re(k,y),We=Re(le,y),vt=Re(Be,y),bt=De<xe+We,ie=bt?De-vt:De-We,en="".concat(v,"-nav-operations-hidden"),ce=0,ue=0;y&&o?(ce=0,ue=Math.max(0,xe-ie)):(ce=Math.min(0,ie-xe),ue=0);function ke(B){return B<ce?ce:B>ue?ue:B}var He=(0,a.useRef)(null),tn=(0,a.useState)(),mt=(0,N.Z)(tn,2),Ie=mt[0],gt=mt[1];function Ge(){gt(Date.now())}function Ve(){He.current&&clearTimeout(He.current)}Ht(_,function(B,x){function H(te,fe){te(function(se){var Ze=ke(se+fe);return Ze})}return bt?(y?H(V,B):H(J,x),Ve(),Ge(),!0):!1}),(0,a.useEffect)(function(){return Ve(),Ie&&(He.current=setTimeout(function(){gt(0)},100)),Ve},[Ie]);var an=jt(we,ie,y?C:K,xe,We,vt,(0,ae.Z)((0,ae.Z)({},e),{},{tabs:Z})),ht=(0,N.Z)(an,2),nn=ht[0],rn=ht[1],pt=(0,At.Z)(function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c,x=we.get(B)||{width:0,height:0,left:0,right:0,top:0};if(y){var H=C;o?x.right<C?H=x.right:x.right+x.width>C+ie&&(H=x.right+x.width-ie):x.left<-C?H=-x.left:x.left+x.width>-C+ie&&(H=-(x.left+x.width-ie)),J(0),V(ke(H))}else{var te=K;x.top<-K?te=-x.top:x.top+x.height>-K+ie&&(te=-(x.top+x.height-ie)),V(0),J(ke(te))}}),Ne={};f==="top"||f==="bottom"?Ne[o?"marginRight":"marginLeft"]=g:Ne.marginTop=g;var yt=Z.map(function(B,x){var H=B.key;return a.createElement(da,{id:i,prefixCls:v,key:H,tab:B,style:x===0?void 0:Ne,closable:B.closable,editable:d,active:H===c,renderWrapper:E,removeAriaLabel:m==null?void 0:m.removeAriaLabel,onClick:function(fe){L(H,fe)},onFocus:function(){pt(H),Ge(),_.current&&(o||(_.current.scrollLeft=0),_.current.scrollTop=0)}})}),$t=function(){return qa(function(){var x,H=new Map,te=(x=T.current)===null||x===void 0?void 0:x.getBoundingClientRect();return Z.forEach(function(fe){var se,Ze=fe.key,Pt=(se=T.current)===null||se===void 0?void 0:se.querySelector('[data-node-key="'.concat(nt(Ze),'"]'));if(Pt){var dn=ua(Pt,te),Me=(0,N.Z)(dn,4),un=Me[0],fn=Me[1],vn=Me[2],bn=Me[3];H.set(Ze,{width:un,height:fn,left:vn,top:bn})}}),H})};(0,a.useEffect)(function(){$t()},[Z.map(function(B){return B.key}).join("_")]);var Le=et(function(){var B=me(D),x=me(W),H=me(M);O([B[0]-x[0]-H[0],B[1]-x[1]-H[1]]);var te=me(R);Se(te);var fe=me(b);z(fe);var se=me(T);U([se[0]-te[0],se[1]-te[1]]),$t()}),on=Z.slice(0,nn),ln=Z.slice(rn+1),St=[].concat((0,Ue.Z)(on),(0,Ue.Z)(ln)),Ct=we.get(c),cn=Dt({activeTabOffset:Ct,horizontal:y,indicator:I,rtl:o}),sn=cn.style;(0,a.useEffect)(function(){pt()},[c,ce,ue,at(Ct),at(we),y]),(0,a.useEffect)(function(){Le()},[o]);var xt=!!St.length,Te="".concat(v,"-nav-wrap"),je,Ke,Tt,Et;return y?o?(Ke=C>0,je=C!==ue):(je=C<0,Ke=C!==ce):(Tt=K<0,Et=K!==ce),a.createElement(Oe.Z,{onResize:Le},a.createElement("div",{ref:(0,ye.x1)(t,D),role:"tablist",className:X()("".concat(v,"-nav"),n),style:r,onKeyDown:function(){Ge()}},a.createElement(ot,{ref:W,position:"left",extra:s,prefixCls:v}),a.createElement(Oe.Z,{onResize:Le},a.createElement("div",{className:X()(Te,(0,Y.Z)((0,Y.Z)((0,Y.Z)((0,Y.Z)({},"".concat(Te,"-ping-left"),je),"".concat(Te,"-ping-right"),Ke),"".concat(Te,"-ping-top"),Tt),"".concat(Te,"-ping-bottom"),Et)),ref:_},a.createElement(Oe.Z,{onResize:Le},a.createElement("div",{ref:T,className:"".concat(v,"-nav-list"),style:{transform:"translate(".concat(C,"px, ").concat(K,"px)"),transition:Ie?"none":void 0}},yt,a.createElement(it,{ref:R,prefixCls:v,locale:m,editable:d,style:(0,ae.Z)((0,ae.Z)({},yt.length===0?void 0:Ne),{},{visibility:xt?"hidden":null})}),a.createElement("div",{className:X()("".concat(v,"-ink-bar"),(0,Y.Z)({},"".concat(v,"-ink-bar-animated"),l.inkBar)),style:sn}))))),a.createElement(ca,(0,oe.Z)({},e,{removeAriaLabel:m==null?void 0:m.removeAriaLabel,ref:b,prefixCls:v,tabs:St,className:!xt&&en,tabMoving:!!Ie})),a.createElement(ot,{ref:M,position:"right",extra:s,prefixCls:v})))}),ct=fa,va=a.forwardRef(function(e,t){var n=e.prefixCls,r=e.className,i=e.style,l=e.id,c=e.active,o=e.tabKey,s=e.children;return a.createElement("div",{id:l&&"".concat(l,"-panel-").concat(o),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":l&&"".concat(l,"-tab-").concat(o),"aria-hidden":!c,style:i,className:X()(n,c&&"".concat(n,"-active"),r),ref:t},s)}),st=va,ba=["renderTabBar"],ma=["label","key"],ga=function(t){var n=t.renderTabBar,r=(0,pe.Z)(t,ba),i=a.useContext(Ee),l=i.tabs;if(n){var c=(0,ae.Z)((0,ae.Z)({},r),{},{panes:l.map(function(o){var s=o.label,d=o.key,m=(0,pe.Z)(o,ma);return a.createElement(st,(0,oe.Z)({tab:s,key:d,tabKey:d},m))})});return n(c,ct)}return a.createElement(ct,r)},ha=ga,pa=h(82225),ya=["key","forceRender","style","className","destroyInactiveTabPane"],$a=function(t){var n=t.id,r=t.activeKey,i=t.animated,l=t.tabPosition,c=t.destroyInactiveTabPane,o=a.useContext(Ee),s=o.prefixCls,d=o.tabs,m=i.tabPane,f="".concat(s,"-tabpane");return a.createElement("div",{className:X()("".concat(s,"-content-holder"))},a.createElement("div",{className:X()("".concat(s,"-content"),"".concat(s,"-content-").concat(l),(0,Y.Z)({},"".concat(s,"-content-animated"),m))},d.map(function(g){var E=g.key,L=g.forceRender,P=g.style,I=g.className,p=g.destroyInactiveTabPane,v=(0,pe.Z)(g,ya),Z=E===r;return a.createElement(pa.ZP,(0,oe.Z)({key:E,visible:Z,forceRender:L,removeOnLeave:!!(c||p),leavedClassName:"".concat(f,"-hidden")},i.tabPaneMotion),function(D,W){var M=D.style,_=D.className;return a.createElement(st,(0,oe.Z)({},v,{prefixCls:f,id:n,tabKey:E,animated:m,active:Z,style:(0,ae.Z)((0,ae.Z)({},P),M),className:X()(I,_),ref:W}))})})))},Sa=$a,mn=h(80334);function Ca(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=(0,ae.Z)({inkBar:!0},(0,_e.Z)(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var xa=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicator"],dt=0,Ta=a.forwardRef(function(e,t){var n=e.id,r=e.prefixCls,i=r===void 0?"rc-tabs":r,l=e.className,c=e.items,o=e.direction,s=e.activeKey,d=e.defaultActiveKey,m=e.editable,f=e.animated,g=e.tabPosition,E=g===void 0?"top":g,L=e.tabBarGutter,P=e.tabBarStyle,I=e.tabBarExtraContent,p=e.locale,v=e.moreIcon,Z=e.moreTransitionName,D=e.destroyInactiveTabPane,W=e.renderTabBar,M=e.onChange,_=e.onTabClick,T=e.onTabScroll,b=e.getPopupContainer,R=e.popupClassName,y=e.indicator,w=(0,pe.Z)(e,xa),u=a.useMemo(function(){return(c||[]).filter(function(z){return z&&(0,_e.Z)(z)==="object"&&"key"in z})},[c]),C=o==="rtl",V=Ca(f),j=(0,a.useState)(!1),Q=(0,N.Z)(j,2),K=Q[0],J=Q[1];(0,a.useEffect)(function(){J((0,zt.Z)())},[]);var re=(0,Fe.Z)(function(){var z;return(z=u[0])===null||z===void 0?void 0:z.key},{value:s,defaultValue:d}),q=(0,N.Z)(re,2),S=q[0],O=q[1],F=(0,a.useState)(function(){return u.findIndex(function(z){return z.key===S})}),G=(0,N.Z)(F,2),k=G[0],U=G[1];(0,a.useEffect)(function(){var z=u.findIndex(function(ge){return ge.key===S});if(z===-1){var de;z=Math.max(0,Math.min(k,u.length-1)),O((de=u[z])===null||de===void 0?void 0:de.key)}U(z)},[u.map(function(z){return z.key}).join("_"),S,k]);var A=(0,Fe.Z)(null,{value:n}),ee=(0,N.Z)(A,2),le=ee[0],Se=ee[1];(0,a.useEffect)(function(){n||(Se("rc-tabs-".concat(dt)),dt+=1)},[]);function Ae(z,de){_==null||_(z,de);var ge=z!==S;O(z),ge&&(M==null||M(z))}var Ce={id:le,activeKey:S,animated:V,tabPosition:E,rtl:C,mobile:K},Be=(0,ae.Z)((0,ae.Z)({},Ce),{},{editable:m,locale:p,moreIcon:v,moreTransitionName:Z,tabBarGutter:L,onTabClick:Ae,onTabScroll:T,extra:I,style:P,panes:null,getPopupContainer:b,popupClassName:R,indicator:y});return a.createElement(Ee.Provider,{value:{tabs:u,prefixCls:i}},a.createElement("div",(0,oe.Z)({ref:t,id:n,className:X()(i,"".concat(i,"-").concat(E),(0,Y.Z)((0,Y.Z)((0,Y.Z)({},"".concat(i,"-mobile"),K),"".concat(i,"-editable"),m),"".concat(i,"-rtl"),C),l)},w),a.createElement(ha,(0,oe.Z)({},Be,{renderTabBar:W})),a.createElement(Sa,(0,oe.Z)({destroyInactiveTabPane:D},Ce,{animated:V}))))}),Ea=Ta,Pa=Ea,Ra=h(53124),wa=h(35792),Ia=h(98675),Na=h(33603);const La={motionAppear:!1,motionEnter:!0,motionLeave:!0};function Za(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},n;return t===!1?n={inkBar:!1,tabPane:!1}:t===!0?n={inkBar:!0,tabPane:!0}:n=Object.assign({inkBar:!0},typeof t=="object"?t:{}),n.tabPane&&(n.tabPaneMotion=Object.assign(Object.assign({},La),{motionName:(0,Na.m)(e,"switch")})),n}var Ma=h(50344),_a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Oa(e){return e.filter(t=>t)}function za(e,t){if(e)return e;const n=(0,Ma.Z)(t).map(r=>{if(a.isValidElement(r)){const{key:i,props:l}=r,c=l||{},{tab:o}=c,s=_a(c,["tab"]);return Object.assign(Object.assign({key:String(i)},s),{label:o})}return null});return Oa(n)}var $=h(6731),$e=h(14747),Aa=h(91945),Ba=h(45503),ut=h(67771),Da=e=>{const{componentCls:t,motionDurationSlow:n}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${n}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${n}`}}}}},[(0,ut.oN)(e,"slide-up"),(0,ut.oN)(e,"slide-down")]]};const Wa=e=>{const{componentCls:t,tabsCardPadding:n,cardBg:r,cardGutter:i,colorBorderSecondary:l,itemSelectedColor:c}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:n,background:r,border:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${l}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:c,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:(0,$.bf)(i)}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${(0,$.bf)(e.borderRadiusLG)} ${(0,$.bf)(e.borderRadiusLG)} 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${(0,$.bf)(e.borderRadiusLG)} ${(0,$.bf)(e.borderRadiusLG)}`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:(0,$.bf)(i)}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,$.bf)(e.borderRadiusLG)} 0 0 ${(0,$.bf)(e.borderRadiusLG)}`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,$.bf)(e.borderRadiusLG)} ${(0,$.bf)(e.borderRadiusLG)} 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},ka=e=>{const{componentCls:t,itemHoverColor:n,dropdownEdgeChildVerticalPadding:r}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},(0,$e.Wf)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${(0,$.bf)(r)} 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},$e.vS),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${(0,$.bf)(e.paddingXXS)} ${(0,$.bf)(e.paddingSM)}`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:n}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Ha=e=>{const{componentCls:t,margin:n,colorBorderSecondary:r,horizontalMargin:i,verticalItemPadding:l,verticalItemMargin:c,calc:o}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:i,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${r}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:n,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:o(e.controlHeight).mul(1.25).equal(),[`${t}-tab`]:{padding:l,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:c},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:(0,$.bf)(o(e.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:o(e.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},Ga=e=>{const{componentCls:t,cardPaddingSM:n,cardPaddingLG:r,horizontalItemPaddingSM:i,horizontalItemPaddingLG:l}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:i,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:l,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:n}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${(0,$.bf)(e.borderRadius)} ${(0,$.bf)(e.borderRadius)}`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${(0,$.bf)(e.borderRadius)} ${(0,$.bf)(e.borderRadius)} 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,$.bf)(e.borderRadius)} ${(0,$.bf)(e.borderRadius)} 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,$.bf)(e.borderRadius)} 0 0 ${(0,$.bf)(e.borderRadius)}`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r}}}}}},Va=e=>{const{componentCls:t,itemActiveColor:n,itemHoverColor:r,iconCls:i,tabsHorizontalItemMargin:l,horizontalItemPadding:c,itemSelectedColor:o,itemColor:s}=e,d=`${t}-tab`;return{[d]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:c,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:s,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:n}},(0,$e.Qy)(e)),"&-btn":{outline:"none",transition:"all 0.3s",[`${d}-icon:not(:last-child)`]:{marginInlineEnd:e.marginSM}},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:e.calc(e.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:r},[`&${d}-active ${d}-btn`]:{color:o,textShadow:e.tabsActiveTextShadow},[`&${d}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${d}-disabled ${d}-btn, &${d}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${d}-remove ${i}`]:{margin:0},[`${i}:not(:last-child)`]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${d} + ${d}`]:{margin:{_skip_check_:!0,value:l}}}},ja=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:n,iconCls:r,cardGutter:i,calc:l}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:n},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[r]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:(0,$.bf)(e.marginSM)}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:(0,$.bf)(e.marginXS)},marginLeft:{_skip_check_:!0,value:(0,$.bf)(l(e.marginXXS).mul(-1).equal())},[r]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:i},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Ka=e=>{const{componentCls:t,tabsCardPadding:n,cardHeight:r,cardGutter:i,itemHoverColor:l,itemActiveColor:c,colorBorderSecondary:o}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,$e.Wf)(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:n,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.calc(e.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:r,minHeight:r,marginLeft:{_skip_check_:!0,value:i},padding:`0 ${(0,$.bf)(e.paddingXS)}`,background:"transparent",border:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${o}`,borderRadius:`${(0,$.bf)(e.borderRadiusLG)} ${(0,$.bf)(e.borderRadiusLG)} 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:l},"&:active, &:focus:not(:focus-visible)":{color:c}},(0,$e.Qy)(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),Va(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},Xa=e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,cardPaddingSM:`${e.paddingXXS*1.5}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${e.paddingXXS*1.5}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}};var Fa=(0,Aa.I$)("Tabs",e=>{const t=(0,Ba.TS)(e,{tabsCardPadding:e.cardPadding,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${(0,$.bf)(e.horizontalItemGutter)}`,tabsHorizontalItemMarginRTL:`0 0 0 ${(0,$.bf)(e.horizontalItemGutter)}`});return[Ga(t),ja(t),Ha(t),ka(t),Wa(t),Ka(t),Da(t)]},Xa),Ua=()=>null,Ya=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const ft=e=>{var t,n,r,i,l,c,o,s;const{type:d,className:m,rootClassName:f,size:g,onEdit:E,hideAdd:L,centered:P,addIcon:I,removeIcon:p,moreIcon:v,popupClassName:Z,children:D,items:W,animated:M,style:_,indicatorSize:T,indicator:b}=e,R=Ya(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","removeIcon","moreIcon","popupClassName","children","items","animated","style","indicatorSize","indicator"]),{prefixCls:y}=R,{direction:w,tabs:u,getPrefixCls:C,getPopupContainer:V}=a.useContext(Ra.E_),j=C("tabs",y),Q=(0,wa.Z)(j),[K,J,re]=Fa(j,Q);let q;d==="editable-card"&&(q={onEdit:(A,ee)=>{let{key:le,event:Se}=ee;E==null||E(A==="add"?Se:le,A)},removeIcon:(t=p!=null?p:u==null?void 0:u.removeIcon)!==null&&t!==void 0?t:a.createElement(Rt.Z,null),addIcon:(I!=null?I:u==null?void 0:u.addIcon)||a.createElement(_t,null),showAdd:L!==!0});const S=C(),O=(0,Ia.Z)(g),F=za(W,D),G=Za(j,M),k=Object.assign(Object.assign({},u==null?void 0:u.style),_),U={align:(n=b==null?void 0:b.align)!==null&&n!==void 0?n:(r=u==null?void 0:u.indicator)===null||r===void 0?void 0:r.align,size:(o=(l=(i=b==null?void 0:b.size)!==null&&i!==void 0?i:T)!==null&&l!==void 0?l:(c=u==null?void 0:u.indicator)===null||c===void 0?void 0:c.size)!==null&&o!==void 0?o:u==null?void 0:u.indicatorSize};return K(a.createElement(Pa,Object.assign({direction:w,getPopupContainer:V,moreTransitionName:`${S}-slide-up`},R,{items:F,className:X()({[`${j}-${O}`]:O,[`${j}-card`]:["card","editable-card"].includes(d),[`${j}-editable-card`]:d==="editable-card",[`${j}-centered`]:P},u==null?void 0:u.className,m,f,J,re,Q),popupClassName:X()(Z,J,re,Q),style:k,editable:q,moreIcon:(s=v!=null?v:u==null?void 0:u.moreIcon)!==null&&s!==void 0?s:a.createElement(wt.Z,null),prefixCls:j,animated:G,indicator:U})))};ft.TabPane=Ua;var Qa=ft}}]);