"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[408],{85921:function(oo,E,i){i.d(E,{L:function(){return S},G:function(){return I}});var L=i(19632),C=i.n(L),D=i(64529),b=i(782),$=(0,D.ZP)((0,b.tJ)(function(r){return{infoStatus:[],addInfoStatus:function(l){return r(function(t){return t.infoStatus.unshift(l),{infoStatus:C()(t.infoStatus)}})},delInfoStatus:function(l){return r(function(t){return{infoStatus:t.infoStatus.filter(function(s){return s.id!==l})}})},topLanguage:[],addTopLanguage:function(l){return r(function(t){return t.topLanguage.unshift(l),{topLanguage:C()(t.topLanguage)}})},delTopLanguage:function(l){return r(function(t){return{topLanguage:t.topLanguage.filter(function(s){return s.id!==l})}})}}},{name:"card",getStorage:function(){return localStorage}})),d=$,e=(0,D.ZP)((0,b.tJ)(function(r){return{staticIniValues:{firstContent:"github",lastContent:"AZCodingAccount",staticColor:"#1677ff",style:"flat",align:"center",link:"https://github.com/AZCodingAccount"},updateStaticIniValues:function(l){return r(function(t){return{staticIniValues:l}})},dynamicIniValues:{type:"userAll",username:"AZCodingAccount",repoName:"iTime",style:"flat",logoColor:"#1677ff",labelColor:"rgb(89, 89, 89)",color:"rgb(3, 126, 187)",align:"center"},updateDynamicIniValues:function(l){return r(function(t){return{dynamicIniValues:l}})},type:"staticBadge",updateType:function(l){return r(function(t){return{type:l}})},staticBadge:[],addStaticBadge:function(l){return r(function(t){return t.staticBadge.unshift(l),{staticBadge:C()(t.staticBadge)}})},delStaticBadge:function(l){return r(function(t){return{staticBadge:t.staticBadge.filter(function(s){return s.id!==l})}})},dynamicBadge:[],addDynamicBadge:function(l){return r(function(t){return t.dynamicBadge.unshift(l),{dynamicBadge:C()(t.dynamicBadge)}})},delDynamicBadge:function(l){return r(function(t){return{dynamicBadge:t.dynamicBadge.filter(function(s){return s.id!==l})}})}}},{name:"badge",getStorage:function(){return localStorage}})),G=e,I=d,S=G},27549:function(oo,E,i){i.r(E),i.d(E,{default:function(){return ro}});var L=i(9783),C=i.n(L),D=i(97857),b=i.n(D),$=i(5574),d=i.n($),e=i(53025),G=i(2453),I=i(71230),S=i(15746),r=i(4393),a=i(83863),l=i(72862),t=i(78045),s=i(87052),H=i(78957),B=i(14726),no=i(32983),h=i(67294),to=i(83400),io=i(57416),lo=i(85921),n=i(85893),eo=function(){var ao=e.Z.useForm(),so=d()(ao,1),v=so[0],co=(0,h.useState)(!1),J=d()(co,2),R=J[0],A=J[1],uo=(0,h.useState)(!1),W=d()(uo,2),P=W[0],T=W[1],u=(0,lo.L)(),go=u.updateDynamicIniValues,N=u.dynamicIniValues,M=u.staticIniValues,mo=u.updateStaticIniValues,z=u.type,ho=u.updateType,fo=u.addStaticBadge,po=u.addDynamicBadge,Co=M!=null?M:{firstContent:"github",lastContent:"AZCodingAccount",staticColor:"#1677ff",style:"flat",align:"center",link:"https://github.com/AZCodingAccount"},yo=N!=null?N:{type:"userAll",username:"AZCodingAccount",repoName:"iTime",style:"flat",logoColor:"#1677ff",labelColor:"rgb(89, 89, 89)",color:"rgb(3, 126, 187)",align:"center"},xo=(0,h.useState)(""),K=d()(xo,2),O=K[0],jo=K[1],Zo=(0,h.useState)(""),Q=d()(Zo,2),X=Q[0],bo=Q[1],So=(0,h.useState)(z),Y=d()(So,2),V=Y[0],Bo=Y[1],Fo=function(o){A(!1),Bo(o),ho(o)},Eo=G.ZP.useMessage(),w=d()(Eo,2),Do=w[0],Io=w[1],vo=(0,h.useState)("#1677ff"),k=d()(vo,2),f=k[0],q=k[1],F=h.useMemo(function(){return typeof f=="string"?f:f==null?void 0:f.toHexString()},[f]),Ao=function(o){T(!0);var c=o.firstContent,m=o.lastContent,y=o.align,x=o.link,j=o.style;F=F.replace("#","%23"),c=c.replace(" ","_"),m=m.replace(" ","_");var p='<a href="'.concat(x,'" target="_blank"><img  align=').concat(y,' src="https://img.shields.io/badge/').concat(c,"-").concat(F,"?style=").concat(j,'"/></a>');m!==""&&(p='<a href="'.concat(x,'" target="_blank"><img  align=').concat(y,' src="https://img.shields.io/badge/').concat(c,"-").concat(m,"-").concat(F,"?style=").concat(j,'"/></a>')),jo(p),mo(b()(b()({},o),{},{staticColor:F})),fo({id:Date.now(),code:p,type:"staticBadge",genTime:new Date().toString()}),setTimeout(function(){T(!1)},2e3),A(!0)},_=function(){v.resetFields(),q("#1677ff")},Po=function(o){var c,m,y,x,j,p;T(!0),A(!1),o.logoColor=typeof(o==null?void 0:o.logoColor)=="string"?o==null||(c=o.logoColor)===null||c===void 0?void 0:c.replace("#","%23"):o==null||(m=o.logoColor.toHexString())===null||m===void 0?void 0:m.replace("#","%23"),o.labelColor=typeof(o==null?void 0:o.labelColor)=="string"?o==null||(y=o.labelColor)===null||y===void 0?void 0:y.replace("#","%23"):o==null||(x=o.labelColor.toHexString())===null||x===void 0?void 0:x.replace("#","%23"),o.color=typeof(o==null?void 0:o.color)=="string"?o==null||(j=o.color)===null||j===void 0?void 0:j.replace("#","%23"):o==null||(p=o.color.toHexString())===null||p===void 0?void 0:p.replace("#","%23");var Z="";if((o==null?void 0:o.type)==="repoAll")Z=`<div style="display: flex; align-items: center; justify-content: center; margin: 10px">
      <img
        align=`.concat(o==null?void 0:o.align,`
        src="https://img.shields.io/github/stars/`).concat(o==null?void 0:o.username,"/").concat(o==null?void 0:o.repoName,"?style=").concat(o==null?void 0:o.style,"&logoColor=").concat(o==null?void 0:o.logoColor,"&labelColor=").concat(o==null?void 0:o.labelColor,"&color=").concat(o==null?void 0:o.color,`"
        style="margin: 0 5px"
      /><img
        align=`).concat(o==null?void 0:o.align,`
        src="https://img.shields.io/github/watchers/`).concat(o==null?void 0:o.username,"/").concat(o==null?void 0:o.repoName,"?style=").concat(o==null?void 0:o.style,"&logoColor=").concat(o==null?void 0:o.logoColor,"&labelColor=").concat(o==null?void 0:o.labelColor,"&color=").concat(o==null?void 0:o.color,`""
        style="margin: 0 5px"
      />
      <img
        align=`).concat(o==null?void 0:o.align,`
        src="https://img.shields.io/github/forks/`).concat(o==null?void 0:o.username,"/").concat(o==null?void 0:o.repoName,"?style=").concat(o==null?void 0:o.style,"&logoColor=").concat(o==null?void 0:o.logoColor,"&labelColor=").concat(o==null?void 0:o.labelColor,"&color=").concat(o==null?void 0:o.color,`"
        style="margin: 0 5px"
      />
    </div>`);else if((o==null?void 0:o.type)!=="userAll")if((o==null?void 0:o.type)==="stars"||(o==null?void 0:o.type)==="followers")Z=`<img
            align=`.concat(o==null?void 0:o.align,`
            src="https://img.shields.io/github/`).concat(o==null?void 0:o.type,"/").concat(o==null?void 0:o.username,"?style=").concat(o==null?void 0:o.style,"&logoColor=").concat(o==null?void 0:o.logoColor,"&labelColor=").concat(o==null?void 0:o.labelColor,"&color=").concat(o==null?void 0:o.color,`"
            style="margin: 0 5px"
          />`);else{var To=o==null?void 0:o.type.replace("repo","").toLowerCase();Z=`<img
          align=`.concat(o==null?void 0:o.align,`
          src="https://img.shields.io/github/`).concat(To,"/").concat(o==null?void 0:o.username,"/").concat(o==null?void 0:o.repoName,"?style=").concat(o==null?void 0:o.style,"&logoColor=").concat(o==null?void 0:o.logoColor,"&labelColor=").concat(o==null?void 0:o.labelColor,"&color=").concat(o==null?void 0:o.color,`"
          style="margin: 0 5px"
        />`)}else Z=`<div style="display: flex; align-items: center; justify-content: center; margin: 10px">
        <img
          align=`.concat(o==null?void 0:o.align,`
          src="https://img.shields.io/github/stars/`).concat(o==null?void 0:o.username,"?style=").concat(o==null?void 0:o.style,"&logoColor=").concat(o==null?void 0:o.logoColor,"&labelColor=").concat(o==null?void 0:o.labelColor,"&color=").concat(o==null?void 0:o.color,`"
          style="margin: 0 5px"
        /><img
          align=`).concat(o==null?void 0:o.align,`
          src="https://img.shields.io/github/followers/`).concat(o==null?void 0:o.username,"?style=").concat(o==null?void 0:o.style,"&logoColor=").concat(o==null?void 0:o.logoColor,"&labelColor=").concat(o==null?void 0:o.labelColor,"&color=").concat(o==null?void 0:o.color,`""
          style="margin: 0 5px"
        />
      </div>`);bo(Z),go(o),po({id:Date.now(),code:Z,type:"dynamicBadge",genTime:new Date().toString()}),setTimeout(function(){T(!1),A(!0)},2e3)},U=function(o,c){v.setFieldsValue(C()({},o,c))};return(0,n.jsxs)("div",{children:[Io,(0,n.jsxs)(I.Z,{gutter:24,children:[(0,n.jsx)(S.Z,{span:12,children:(0,n.jsxs)(r.Z,{title:"\u8F93\u5165\u914D\u7F6E",extra:(0,n.jsx)(a.Z,{defaultValue:z,style:{width:200},onChange:Fo,options:[{value:"staticBadge",label:"\u9759\u6001\u5FBD\u7AE0"},{value:"dynamicBadge",label:"\u52A8\u6001\u5FBD\u7AE0"}]}),children:[V==="staticBadge"&&(0,n.jsxs)(e.Z,{labelAlign:"left",labelCol:{span:4},form:v,initialValues:Co,onFinish:Ao,children:[(0,n.jsx)(e.Z.Item,{label:"\u6807\u7B7E",name:"firstContent",children:(0,n.jsx)(l.Z,{placeholder:"\u6807\u7B7E"})}),(0,n.jsx)(e.Z.Item,{label:"\u6D88\u606F(\u975E\u5FC5\u586B)",name:"lastContent",children:(0,n.jsx)(l.Z,{placeholder:"\u6D88\u606F"})}),(0,n.jsx)(e.Z.Item,{label:"link(\u975E\u5FC5\u586B)",name:"link",children:(0,n.jsx)(l.Z,{placeholder:"link"})}),(0,n.jsx)(e.Z.Item,{label:"\u9009\u62E9\u4E3B\u9898",name:"style",children:(0,n.jsxs)(t.ZP.Group,{name:"themeGroup",children:[(0,n.jsx)(t.ZP,{value:"flat",children:"flat"}),(0,n.jsx)(t.ZP,{value:"flat-square",children:"flat-square"}),(0,n.jsx)(t.ZP,{value:"plastic",children:"plastic"}),(0,n.jsx)(t.ZP,{value:"for-the-badge",children:"for-the-badge"}),(0,n.jsx)(t.ZP,{value:"social",children:"social"})]})}),(0,n.jsx)(e.Z.Item,{label:"\u9009\u62E9\u989C\u8272",name:"staticColor",children:(0,n.jsx)(s.Z,{showText:!0,onChange:q,value:f})}),(0,n.jsx)(e.Z.Item,{label:"\u5BF9\u9F50\u65B9\u5F0F",name:"align",children:(0,n.jsxs)(t.ZP.Group,{buttonStyle:"solid",children:[(0,n.jsx)(t.ZP.Button,{value:"left",children:"\u5DE6\u5BF9\u9F50"}),(0,n.jsx)(t.ZP.Button,{value:"center",children:"\u5C45\u4E2D"}),(0,n.jsx)(t.ZP.Button,{value:"right",children:"\u53F3\u5BF9\u9F50"})]})}),(0,n.jsx)(e.Z.Item,{children:(0,n.jsxs)(H.Z,{children:[(0,n.jsx)(B.ZP,{type:"primary",htmlType:"submit",loading:P,disabled:P,children:"\u9884\u89C8"}),(0,n.jsx)(B.ZP,{htmlType:"button",onClick:_,children:"\u91CD\u7F6E"})]})})]}),V==="dynamicBadge"&&(0,n.jsxs)(e.Z,{labelAlign:"left",labelCol:{span:6},form:v,initialValues:yo,onFinish:Po,children:[(0,n.jsx)(e.Z.Item,{label:"\u9009\u62E9Github\u5FBD\u7AE0\u7C7B\u578B",name:"type",children:(0,n.jsx)(a.Z,{style:{width:200},options:[{value:"userAll",label:"\u7528\u6237\u5168\u90E8"},{value:"repoAll",label:"\u4ED3\u5E93\u5168\u90E8"},{value:"stars",label:"Stars"},{value:"followers",label:"Followers"},{value:"repoForks",label:"\u4ED3\u5E93Forks"},{value:"repoStars",label:"\u4ED3\u5E93Stars"},{value:"repoWatchers",label:"\u4ED3\u5E93Watchers"}]})}),(0,n.jsx)(e.Z.Item,{label:"\u8F93\u5165\u7528\u6237\u540D",name:"username",children:(0,n.jsx)(l.Z,{})}),(0,n.jsx)(e.Z.Item,{label:"\u8F93\u5165\u4ED3\u5E93\u540D",name:"repoName",children:(0,n.jsx)(l.Z,{})}),(0,n.jsx)(e.Z.Item,{label:"\u9009\u62E9\u4E3B\u9898",name:"style",children:(0,n.jsxs)(t.ZP.Group,{name:"themeGroup",children:[(0,n.jsx)(t.ZP,{value:"flat",children:"flat"}),(0,n.jsx)(t.ZP,{value:"flat-square",children:"flat-square"}),(0,n.jsx)(t.ZP,{value:"plastic",children:"plastic"}),(0,n.jsx)(t.ZP,{value:"for-the-badge",children:"for-the-badge"}),(0,n.jsx)(t.ZP,{value:"social",children:"social"})]})}),(0,n.jsx)(e.Z.Item,{label:"\u9009\u62E9\u5FBD\u6807\u989C\u8272",name:"logoColor",children:(0,n.jsx)(s.Z,{showText:!0,onChange:function(o){return U("logoColor",o)}})}),(0,n.jsx)(e.Z.Item,{label:"\u9009\u62E9\u5DE6\u4FA7\u90E8\u5206\u989C\u8272",name:"labelColor",children:(0,n.jsx)(s.Z,{showText:!0,onChange:function(o){return U("labelColor",o)}})}),(0,n.jsx)(e.Z.Item,{label:"\u9009\u62E9\u53F3\u4FA7\u90E8\u5206\u989C\u8272",name:"color",children:(0,n.jsx)(s.Z,{showText:!0,onChange:function(o){return U("color",o)}})}),(0,n.jsx)(e.Z.Item,{label:"\u5BF9\u9F50\u65B9\u5F0F",name:"align",children:(0,n.jsxs)(t.ZP.Group,{buttonStyle:"solid",children:[(0,n.jsx)(t.ZP.Button,{value:"left",children:"\u5DE6\u5BF9\u9F50"}),(0,n.jsx)(t.ZP.Button,{value:"center",children:"\u5C45\u4E2D"}),(0,n.jsx)(t.ZP.Button,{value:"right",children:"\u53F3\u5BF9\u9F50"})]})}),(0,n.jsx)(e.Z.Item,{children:(0,n.jsxs)(H.Z,{children:[(0,n.jsx)(B.ZP,{type:"primary",htmlType:"submit",loading:P,disabled:P,children:"\u9884\u89C8"}),(0,n.jsx)(B.ZP,{htmlType:"button",onClick:_,children:"\u91CD\u7F6E"})]})})]})]})}),(0,n.jsx)(S.Z,{span:12,children:(0,n.jsx)(r.Z,{title:"\u9884\u89C8\u7ED3\u679C",extra:(0,n.jsx)(H.Z,{children:(0,n.jsx)(B.ZP,{type:"primary",disabled:!R,onClick:function(){navigator.clipboard.writeText(V==="staticBadge"?O:X),Do.open({type:"success",content:"\u590D\u5236\u6210\u529F",duration:3})},children:"\u590D\u5236\u4EE3\u7801"})}),children:R?(0,n.jsx)(to.U,{rehypePlugins:[io.Z],className:"card",children:V==="staticBadge"?O:X}):(0,n.jsx)(no.Z,{description:(0,n.jsx)("div",{children:(0,n.jsx)("span",{children:"\u8BF7\u5148\u8BBE\u7F6E\u60A8\u7684\u914D\u7F6E\u5E76\u70B9\u51FB\u3010\u9884\u89C8\u3011"})})})})})]}),(0,n.jsx)("br",{}),(0,n.jsx)(I.Z,{gutter:24,children:(0,n.jsx)(S.Z,{span:24,children:(0,n.jsxs)(r.Z,{className:"card",children:["\u672C\u9875\u9762\u57FA\u4E8E\u5F00\u6E90\u9879\u76EEshields\uFF0C\u5982\u9700\u66F4\u591A\u914D\u7F6E\u4FE1\u606F\uFF0C\u8BF7\u8BBF\u95EE",(0,n.jsx)("a",{href:"https://shields.io/",target:"_blank",rel:"noopener noreferrer",children:"shields\u5B98\u7F51"})]})})})]})},ro=eo}}]);