(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Dh1X:function(t,a,r){"use strict";r.d(a,"a",(function(){return s})),r.d(a,"b",(function(){return g})),r.d(a,"c",(function(){return p})),r.d(a,"d",(function(){return b}));var e=r("EM62"),i=r("sN6X"),n=r("ycWL"),o=r("w0kG"),c=r("8j5Y"),s=function(t){return t[t.LocalStorage=0]="LocalStorage",t[t.SessionStorage=1]="SessionStorage",t}({});const d=s.LocalStorage,m=new e.q("ngrx-browser-storage-store Internal Browser Storage"),l=new e.q("ngrx-browser-storage-store Internal feature name");let u=(()=>{let t=class{constructor(t,a){this.feature=a,this.storage=this.getStorage(t)}loadInitialState(){const t=this.getStorageKey(this.feature),a=this.storage.getItem(t);return a?JSON.parse(a):{}}set(t){const a=this.getStorageKey(this.feature);this.storage.setItem(a,JSON.stringify(t))}getStorageKey(t){return t?`app-state-${t}`:"app-state"}getStorage(t){switch(t||d){case s.SessionStorage:return sessionStorage;case s.LocalStorage:return localStorage}}};return t.\u0275fac=function(a){return new(a||t)(e.Wb(m),e.Wb(l))},t.\u0275prov=e.Ib({token:t,factory:t.\u0275fac}),t})(),p=(()=>{let t=class{constructor(t){this.browserStorageService=t}get(){return t=>(a,r)=>{const e=t(a,r);return[i.b.toString(),i.l.toString()].includes(r.type)?Object.assign(Object.assign({},e),this.browserStorageService.loadInitialState()):e}}};return t.\u0275fac=function(a){return new(a||t)(e.Wb(u))},t.\u0275prov=e.Ib({token:t,factory:t.\u0275fac}),t})(),g=(()=>{let t=class{constructor(t,a){this.browserStorageService=t,this.store=a}saveForFeature(t,a){return Object(n.c)(()=>t.pipe(Object(o.a)(this.store.pipe(Object(i.t)(a))),Object(c.a)(([t,a])=>this.browserStorageService.set(a))),{dispatch:!1})}saveForRoot(t){return Object(n.c)(()=>t.pipe(Object(o.a)(this.store),Object(c.a)(([t,a])=>this.browserStorageService.set(a))),{dispatch:!1})}};return t.\u0275fac=function(a){return new(a||t)(e.Wb(u),e.Wb(i.h))},t.\u0275prov=e.Ib({token:t,factory:t.\u0275fac}),t})(),h=(()=>{let t=class{};return t.\u0275mod=e.Kb({type:t}),t.\u0275inj=e.Jb({factory:function(a){return new(a||t)}}),t})(),f=(()=>{let t=class{};return t.\u0275mod=e.Kb({type:t}),t.\u0275inj=e.Jb({factory:function(a){return new(a||t)}}),t})(),b=(()=>{let t=class{static forRoot(t){return{ngModule:h,providers:[g,p,u,{provide:m,useValue:t&&t.storage||d},{provide:l,useValue:void 0}]}}static forFeature(t,a){return{ngModule:f,providers:[g,p,u,{provide:m,useValue:a&&a.storage||d},{provide:l,useValue:t}]}}};return t.\u0275mod=e.Kb({type:t}),t.\u0275inj=e.Jb({factory:function(a){return new(a||t)}}),t})()},Meci:function(t,a,r){"use strict";r.d(a,"a",(function(){return u})),r.d(a,"b",(function(){return l})),r.d(a,"c",(function(){return s})),r.d(a,"d",(function(){return p})),r.d(a,"e",(function(){return m})),r.d(a,"f",(function(){return d}));var e=r("5lCh"),i=r("mFH5"),n=r("EM62");const o=["*",[["mat-card-footer"]]],c=["*","mat-card-footer"];let s=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=n.Hb({type:t,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=n.Hb({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=n.Hb({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),t})(),l=(()=>{class t{constructor(){this.align="start"}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=n.Hb({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(t,a){2&t&&n.Db("mat-card-actions-align-end","end"===a.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),t})(),u=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(a){return new(a||t)(n.Mb(e.a,8))},t.\u0275cmp=n.Gb({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,a){2&t&&n.Db("_mat-animation-noopable","NoopAnimations"===a._animationMode)},exportAs:["matCard"],ngContentSelectors:c,decls:2,vars:0,template:function(t,a){1&t&&(n.ic(o),n.hc(0),n.hc(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),p=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(a){return new(a||t)},imports:[[i.c],i.c]}),t})()}}]);