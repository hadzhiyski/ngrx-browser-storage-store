function _slicedToArray(t,r){return _arrayWithHoles(t)||_iterableToArrayLimit(t,r)||_unsupportedIterableToArray(t,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return _arrayLikeToArray(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(t,r):void 0}}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var a=0,e=new Array(r);a<r;a++)e[a]=t[a];return e}function _iterableToArrayLimit(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var a=[],e=!0,n=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(e=(o=c.next()).done)&&(a.push(o.value),!r||a.length!==r);e=!0);}catch(s){n=!0,i=s}finally{try{e||null==c.return||c.return()}finally{if(n)throw i}}return a}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,r){for(var a=0;a<r.length;a++){var e=r[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _createClass(t,r,a){return r&&_defineProperties(t.prototype,r),a&&_defineProperties(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Dh1X:function(t,r,a){"use strict";a.d(r,"a",(function(){return s})),a.d(r,"b",(function(){return h})),a.d(r,"c",(function(){return f})),a.d(r,"d",(function(){return b}));var e=a("EM62"),n=a("sN6X"),i=a("ycWL"),o=a("w0kG"),c=a("8j5Y"),s=function(t){return t.LocalStorage="LocalStorage",t.SessionStorage="SessionStorage",t}({}),u=s.LocalStorage,l=new e.q("ngrx-browser-storage-store Internal Browser Storage"),d=new e.q("ngrx-browser-storage-store Internal feature name"),m=function(){var t=function(){function t(r,a){_classCallCheck(this,t),this.feature=a,this.initialStateLoaded=!1,this.storage=this.getStorage(r)}return _createClass(t,[{key:"loadInitialState",value:function(){var t=this.getStorageKey(this.feature),r=this.storage.getItem(t);return r?(this.initialStateLoaded=!0,JSON.parse(r)):{}}},{key:"set",value:function(t){if(!t)throw new Error("Value can not be falsy.");var r=this.getStorageKey(this.feature);this.storage.setItem(r,JSON.stringify(t))}},{key:"getStorageKey",value:function(t){return t?"app-state-".concat(t):"app-state"}},{key:"getStorage",value:function(t){switch(t||u){case s.SessionStorage:return sessionStorage;case s.LocalStorage:return localStorage}}}]),t}();return t.\u0275fac=function(r){return new(r||t)(e.Wb(l),e.Wb(d))},t.\u0275prov=e.Ib({token:t,factory:t.\u0275fac}),t}(),f=function(){var t=function(){function t(r){_classCallCheck(this,t),this.browserStorageService=r}return _createClass(t,[{key:"get",value:function(){var t=this;return function(r){return function(a,e){if(n.l.toString()===e.type&&!t.browserStorageService.initialStateLoaded){var i=r(a,e);return Object.assign(Object.assign({},i),t.browserStorageService.loadInitialState())}return a}}}}]),t}();return t.\u0275fac=function(r){return new(r||t)(e.Wb(m))},t.\u0275prov=e.Ib({token:t,factory:t.\u0275fac}),t}(),h=function(){var t=function(){function t(r,a){_classCallCheck(this,t),this.browserStorageService=r,this.store=a}return _createClass(t,[{key:"saveForFeature",value:function(t,r){var a=this;return Object(i.c)((function(){return t.pipe(Object(o.a)(a.store.pipe(Object(n.t)(r))),Object(c.a)((function(t){var r=_slicedToArray(t,2),e=(r[0],r[1]);return a.browserStorageService.set(e)})))}),{dispatch:!1})}},{key:"saveForRoot",value:function(t){var r=this;return Object(i.c)((function(){return t.pipe(Object(o.a)(r.store),Object(c.a)((function(t){var a=_slicedToArray(t,2),e=(a[0],a[1]);return r.browserStorageService.set(e)})))}),{dispatch:!1})}}]),t}();return t.\u0275fac=function(r){return new(r||t)(e.Wb(m),e.Wb(n.h))},t.\u0275prov=e.Ib({token:t,factory:t.\u0275fac}),t}(),p=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=e.Kb({type:t}),t.\u0275inj=e.Jb({factory:function(r){return new(r||t)}}),t}(),g=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=e.Kb({type:t}),t.\u0275inj=e.Jb({factory:function(r){return new(r||t)}}),t}(),b=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"forRoot",value:function(t){return{ngModule:p,providers:[h,f,m,{provide:l,useValue:t&&t.storage||u},{provide:d,useValue:void 0}]}}},{key:"forFeature",value:function(t,r){return{ngModule:g,providers:[h,f,m,{provide:l,useValue:r&&r.storage||u},{provide:d,useValue:t}]}}}]),t}();return t.\u0275mod=e.Kb({type:t}),t.\u0275inj=e.Jb({factory:function(r){return new(r||t)}}),t}()},Meci:function(t,r,a){"use strict";a.d(r,"a",(function(){return m})),a.d(r,"b",(function(){return d})),a.d(r,"c",(function(){return s})),a.d(r,"d",(function(){return f})),a.d(r,"e",(function(){return l})),a.d(r,"f",(function(){return u}));var e=a("5lCh"),n=a("mFH5"),i=a("EM62"),o=["*",[["mat-card-footer"]]],c=["*","mat-card-footer"],s=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=i.Hb({type:t,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),t}(),u=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=i.Hb({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),t}(),l=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=i.Hb({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),t}(),d=function(){var t=function t(){_classCallCheck(this,t),this.align="start"};return t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=i.Hb({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(t,r){2&t&&i.Db("mat-card-actions-align-end","end"===r.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),t}(),m=function(){var t=function t(r){_classCallCheck(this,t),this._animationMode=r};return t.\u0275fac=function(r){return new(r||t)(i.Mb(e.a,8))},t.\u0275cmp=i.Gb({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,r){2&t&&i.Db("_mat-animation-noopable","NoopAnimations"===r._animationMode)},exportAs:["matCard"],ngContentSelectors:c,decls:2,vars:0,template:function(t,r){1&t&&(i.ic(o),i.hc(0),i.hc(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t}(),f=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(r){return new(r||t)},imports:[[n.c],n.c]}),t}()}}]);