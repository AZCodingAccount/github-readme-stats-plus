"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[366],{81909:function(Pe,H,e){e.r(H),e.d(H,{default:function(){return Ae}});var Q=e(15009),m=e.n(Q),J=e(97857),x=e.n(J),X=e(99289),b=e.n(X),Y=e(5574),V=e.n(Y),q=e(69221),_=e(2618),C=e(80854);function ee(a,l){return G.apply(this,arguments)}function G(){return G=b()(m()().mark(function a(l,h){return m()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.abrupt("return",(0,C.request)("/api/login/captcha",x()({method:"GET",params:x()({},l)},h||{})));case 1:case"end":return S.stop()}},a)})),G.apply(this,arguments)}var re=e(87547),k=e(94149),y=e(1413),f=e(67294),te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"mobile",theme:"outlined"},ae=te,ne=e(91146),se=function(l,h){return f.createElement(ne.Z,(0,y.Z)((0,y.Z)({},l),{},{ref:h,icon:ae}))},ie=f.forwardRef(se),le=ie,ue=e(84942),$=e(9209),B=e(74165),N=e(15861),oe=e(91),z=e(97685),ce=e(53025),de=e(72862),fe=e(14726),he=e(42348),r=e(85893),ve=["rules","name","phoneName","fieldProps","onTiming","captchaTextRender","captchaProps"],me=f.forwardRef(function(a,l){var h=ce.Z.useFormInstance(),F=(0,f.useState)(a.countDown||60),S=(0,z.Z)(F,2),I=S[0],L=S[1],T=(0,f.useState)(!1),M=(0,z.Z)(T,2),Z=M[0],g=M[1],w=(0,f.useState)(),E=(0,z.Z)(w,2),D=E[0],R=E[1],K=a.rules,O=a.name,A=a.phoneName,n=a.fieldProps,i=a.onTiming,u=a.captchaTextRender,c=u===void 0?function(d,t){return d?"".concat(t," \u79D2\u540E\u91CD\u65B0\u83B7\u53D6"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"}:u,v=a.captchaProps,s=(0,oe.Z)(a,ve),j=function(){var d=(0,N.Z)((0,B.Z)().mark(function t(P){return(0,B.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.prev=0,R(!0),p.next=4,s.onGetCaptcha(P);case 4:R(!1),g(!0),p.next=13;break;case 8:p.prev=8,p.t0=p.catch(0),g(!1),R(!1),console.log(p.t0);case 13:case"end":return p.stop()}},t,null,[[0,8]])}));return function(P){return d.apply(this,arguments)}}();return(0,f.useImperativeHandle)(l,function(){return{startTiming:function(){return g(!0)},endTiming:function(){return g(!1)}}}),(0,f.useEffect)(function(){var d=0,t=a.countDown;return Z&&(d=window.setInterval(function(){L(function(P){return P<=1?(g(!1),clearInterval(d),t||60):P-1})},1e3)),function(){return clearInterval(d)}},[Z]),(0,f.useEffect)(function(){i&&i(I)},[I,i]),(0,r.jsxs)("div",{style:(0,y.Z)((0,y.Z)({},n==null?void 0:n.style),{},{display:"flex",alignItems:"center"}),ref:l,children:[(0,r.jsx)(de.Z,(0,y.Z)((0,y.Z)({},n),{},{style:(0,y.Z)({flex:1,transition:"width .3s",marginRight:8},n==null?void 0:n.style)})),(0,r.jsx)(fe.ZP,(0,y.Z)((0,y.Z)({style:{display:"block"},disabled:Z,loading:D},v),{},{onClick:(0,N.Z)((0,B.Z)().mark(function d(){var t;return(0,B.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(o.prev=0,!A){o.next=9;break}return o.next=4,h.validateFields([A].flat(1));case 4:return t=h.getFieldValue([A].flat(1)),o.next=7,j(t);case 7:o.next=11;break;case 9:return o.next=11,j("");case 11:o.next=16;break;case 13:o.prev=13,o.t0=o.catch(0),console.log(o.t0);case 16:case"end":return o.stop()}},d,null,[[0,13]])})),children:c(Z,I)}))]})}),ge=(0,he.G)(me),pe=ge,ye=e(38925),U=e(2453),Se=e(64970),Ze=e(46477),je=e(73935),xe=e(67610),Ce=(0,Ze.kc)(function(a){var l=a.token;return{action:{marginLeft:"8px",color:"rgba(0, 0, 0, 0.2)",fontSize:"24px",verticalAlign:"middle",cursor:"pointer",transition:"color 0.3s","&:hover":{color:l.colorPrimaryActive}},lang:{width:42,height:42,lineHeight:"42px",position:"fixed",right:16,borderRadius:l.borderRadius,":hover":{backgroundColor:l.colorBgTextHover}},container:{display:"flex",flexDirection:"column",height:"100vh",overflow:"auto",backgroundImage:"url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",backgroundSize:"100% 100%"}}}),W=function(l){var h=l.content;return(0,r.jsx)(ye.Z,{style:{marginBottom:24},message:h,type:"error",showIcon:!0})},Te=function(){var l=(0,f.useState)({}),h=V()(l,2),F=h[0],S=h[1],I=(0,f.useState)("account"),L=V()(I,2),T=L[0],M=L[1],Z=(0,C.useModel)("@@initialState"),g=Z.initialState,w=Z.setInitialState,E=Ce(),D=E.styles,R=function(){var n=b()(m()().mark(function i(){var u,c;return m()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,g==null||(u=g.fetchUserInfo)===null||u===void 0?void 0:u.call(g);case 2:c=s.sent,c&&(0,je.flushSync)(function(){w(function(j){return x()(x()({},j),{},{currentUser:c})})});case 4:case"end":return s.stop()}},i)}));return function(){return n.apply(this,arguments)}}(),K=function(){var n=b()(m()().mark(function i(u){var c,v,s,j;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,_.x4)(x()(x()({},u),{},{type:T}));case 3:if(c=t.sent,c.status!=="ok"){t.next=12;break}return v="\u767B\u5F55\u6210\u529F\uFF01",U.ZP.success(v),t.next=9,R();case 9:return s=new URL(window.location.href).searchParams,C.history.push(s.get("redirect")||"/"),t.abrupt("return");case 12:console.log(c),S(c),t.next=21;break;case 16:t.prev=16,t.t0=t.catch(0),j="\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01",console.log(t.t0),U.ZP.error(j);case 21:case"end":return t.stop()}},i,null,[[0,16]])}));return function(u){return n.apply(this,arguments)}}(),O=F.status,A=F.type;return(0,r.jsxs)("div",{className:D.container,children:[(0,r.jsx)(C.Helmet,{children:(0,r.jsxs)("title",{children:["\u767B\u5F55","- ",xe.Z.title]})}),(0,r.jsx)("div",{style:{flex:"1",padding:"32px 0"},children:(0,r.jsxs)(ue.U,{contentStyle:{minWidth:280,maxWidth:"75vw"},logo:(0,r.jsx)("img",{alt:"logo",src:"./logo.svg"}),title:" Github-readme-stats++",subTitle:(0,r.jsx)("a",{href:"https://github.com/AZCodingAccount/github-readme-stats-plus",target:"_blank",rel:"noreferrer",children:"\u4E00\u4E2A\u53EF\u89C6\u5316\u7684Github\u72B6\u6001\u5361\u7247\u751F\u6210\u5668"}),initialValues:{autoLogin:!0},onFinish:function(){var n=b()(m()().mark(function i(u){return m()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,K(u);case 2:case"end":return v.stop()}},i)}));return function(i){return n.apply(this,arguments)}}(),children:[(0,r.jsx)(Se.Z,{activeKey:T,onChange:M,centered:!0,items:[{key:"account",label:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"},{key:"mobile",label:"\u624B\u673A\u53F7\u767B\u5F55"}]}),O==="error"&&A==="account"&&(0,r.jsx)(W,{content:"\u9519\u8BEF\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801"}),T==="account"&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)($.Z,{name:"username",fieldProps:{size:"large",prefix:(0,r.jsx)(re.Z,{})},placeholder:"\u7528\u6237\u540D: admin or user",rules:[{required:!0,message:"\u7528\u6237\u540D\u662F\u5FC5\u586B\u9879\uFF01"}]}),(0,r.jsx)($.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,r.jsx)(k.Z,{})},placeholder:"\u5BC6\u7801: github-readme-stats++",rules:[{required:!0,message:"\u5BC6\u7801\u662F\u5FC5\u586B\u9879\uFF01"}]})]}),O==="error"&&A==="mobile"&&(0,r.jsx)(W,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF"}),T==="mobile"&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)($.Z,{fieldProps:{size:"large",prefix:(0,r.jsx)(le,{})},name:"mobile",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01",rules:[{required:!0,message:"\u624B\u673A\u53F7\u662F\u5FC5\u586B\u9879\uFF01"},{pattern:/^1\d{10}$/,message:"\u4E0D\u5408\u6CD5\u7684\u624B\u673A\u53F7\uFF01"}]}),(0,r.jsx)(pe,{fieldProps:{size:"large",prefix:(0,r.jsx)(k.Z,{})},captchaProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01",captchaTextRender:function(i,u){return i?"".concat(u," ","\u79D2\u540E\u91CD\u65B0\u83B7\u53D6"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"},name:"captcha",rules:[{required:!0,message:"\u9A8C\u8BC1\u7801\u662F\u5FC5\u586B\u9879\uFF01"}],onGetCaptcha:function(){var n=b()(m()().mark(function i(u){var c;return m()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,ee({phone:u});case 2:if(c=s.sent,c){s.next=5;break}return s.abrupt("return");case 5:U.ZP.success("\u6A21\u62DF\u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F\uFF01\u9A8C\u8BC1\u7801\u4E3A\uFF1A1234");case 6:case"end":return s.stop()}},i)}));return function(i){return n.apply(this,arguments)}}()})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{style:{float:"left",marginBottom:24},onClick:function(){C.history.push("/")},children:"\u56DE\u5230\u4E3B\u9875"}),(0,r.jsx)("a",{style:{float:"right",marginBottom:24},onClick:function(){C.history.push("/user/register")},children:"\u53BB\u6CE8\u518C"})]})]})}),(0,r.jsx)(q.$_,{})]})},Ae=Te}}]);