(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Dh1X:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return p})),r.d(e,"c",(function(){return m})),r.d(e,"d",(function(){return b}));var s=r("EM62"),n=r("sN6X"),i=r("ycWL"),o=r("w0kG"),a=r("8j5Y"),c=function(t){return t[t.LocalStorage=0]="LocalStorage",t[t.SessionStorage=1]="SessionStorage",t}({});const l=c.LocalStorage,h=new s.q("ngrx-browser-storage-store Internal Browser Storage"),d=new s.q("ngrx-browser-storage-store Internal feature name");let u=(()=>{let t=class{constructor(t,e){this.feature=e,this.storage=this.getStorage(t)}loadInitialState(){const t=this.getStorageKey(this.feature),e=this.storage.getItem(t);return e?JSON.parse(e):{}}set(t){const e=this.getStorageKey(this.feature);this.storage.setItem(e,JSON.stringify(t))}getStorageKey(t){return t?`app-state-${t}`:"app-state"}getStorage(t){switch(t||l){case c.SessionStorage:return sessionStorage;case c.LocalStorage:return localStorage}}};return t.\u0275fac=function(e){return new(e||t)(s.Wb(h),s.Wb(d))},t.\u0275prov=s.Ib({token:t,factory:t.\u0275fac}),t})(),m=(()=>{let t=class{constructor(t){this.browserStorageService=t}get(){return t=>(e,r)=>{const s=t(e,r);return[n.b.toString(),n.l.toString()].includes(r.type)?Object.assign(Object.assign({},s),this.browserStorageService.loadInitialState()):s}}};return t.\u0275fac=function(e){return new(e||t)(s.Wb(u))},t.\u0275prov=s.Ib({token:t,factory:t.\u0275fac}),t})(),p=(()=>{let t=class{constructor(t,e){this.browserStorageService=t,this.store=e}saveForFeature(t,e){return Object(i.c)(()=>t.pipe(Object(o.a)(this.store.pipe(Object(n.t)(e))),Object(a.a)(([t,e])=>this.browserStorageService.set(e))),{dispatch:!1})}saveForRoot(t){return Object(i.c)(()=>t.pipe(Object(o.a)(this.store),Object(a.a)(([t,e])=>this.browserStorageService.set(e))),{dispatch:!1})}};return t.\u0275fac=function(e){return new(e||t)(s.Wb(u),s.Wb(n.h))},t.\u0275prov=s.Ib({token:t,factory:t.\u0275fac}),t})(),g=(()=>{let t=class{};return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)}}),t})(),f=(()=>{let t=class{};return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)}}),t})(),b=(()=>{let t=class{static forRoot(t){return{ngModule:g,providers:[p,m,u,{provide:h,useValue:t&&t.storage||l},{provide:d,useValue:void 0}]}}static forFeature(t,e){return{ngModule:f,providers:[p,m,u,{provide:h,useValue:e&&e.storage||l},{provide:d,useValue:t}]}}};return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)}}),t})()},Meci:function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return m})),r.d(e,"e",(function(){return h})),r.d(e,"f",(function(){return l}));var s=r("5lCh"),n=r("mFH5"),i=r("EM62");const o=["*",[["mat-card-footer"]]],a=["*","mat-card-footer"];let c=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Hb({type:t,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Hb({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Hb({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),t})(),d=(()=>{class t{constructor(){this.align="start"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Hb({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(t,e){2&t&&i.Db("mat-card-actions-align-end","end"===e.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),t})(),u=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(s.a,8))},t.\u0275cmp=i.Gb({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,e){2&t&&i.Db("_mat-animation-noopable","NoopAnimations"===e._animationMode)},exportAs:["matCard"],ngContentSelectors:a,decls:2,vars:0,template:function(t,e){1&t&&(i.ic(o),i.hc(0),i.hc(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),m=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)},imports:[[n.c],n.c]}),t})()},bFHC:function(t,e,r){"use strict";r.d(e,"a",(function(){return q})),r.d(e,"b",(function(){return K}));var s=r("EM62"),n=r("mFH5"),i=r("5XID"),o=r("2kYt"),a=r("8j5Y"),c=r("YtkY"),l=r("4e/d"),h=r("ruxD"),d=r("7ntQ"),u=r("J+dc"),m=r("ROBh"),p=(r("IdLP"),r("5uDM")),g=r("xVbo");class f{}class b{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(t=>{const e=t.indexOf(":");if(e>0){const r=t.slice(0,e),s=r.toLowerCase(),n=t.slice(e+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(n):this.headers.set(s,[n])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let r=t[e];const s=e.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(s,r),this.maybeSetNormalizedName(e,s))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof b?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new b;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof b?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,e);const s=("a"===t.op?this.headers.get(e):void 0)||[];s.push(...r),this.headers.set(e,s);break;case"d":const n=t.value;if(n){let t=this.headers.get(e);if(!t)return;t=t.filter(t=>-1===n.indexOf(t)),0===t.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,t)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class y{encodeKey(t){return v(t)}encodeValue(t){return v(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}function v(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}class S{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new y,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(t,e){const r=new Map;return t.length>0&&t.split("&").forEach(t=>{const s=t.indexOf("="),[n,i]=-1==s?[e.decodeKey(t),""]:[e.decodeKey(t.slice(0,s)),e.decodeValue(t.slice(s+1))],o=r.get(n)||[];o.push(i),r.set(n,o)}),r}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const r=t.fromObject[e];this.map.set(e,Array.isArray(r)?r:[r])})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new S({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat([t]),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(t.value),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let e=this.map.get(t.param)||[];const r=e.indexOf(t.value);-1!==r&&e.splice(r,1),e.length>0?this.map.set(t.param,e):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}function _(t){return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer}function w(t){return"undefined"!=typeof Blob&&t instanceof Blob}function I(t){return"undefined"!=typeof FormData&&t instanceof FormData}class C{constructor(t,e,r,s){let n;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==r?r:null,n=s):n=r,n&&(this.reportProgress=!!n.reportProgress,this.withCredentials=!!n.withCredentials,n.responseType&&(this.responseType=n.responseType),n.headers&&(this.headers=n.headers),n.params&&(this.params=n.params)),this.headers||(this.headers=new b),this.params){const t=this.params.toString();if(0===t.length)this.urlWithParams=e;else{const r=e.indexOf("?");this.urlWithParams=e+(-1===r?"?":r<e.length-1?"&":"")+t}}else this.params=new S,this.urlWithParams=e}serializeBody(){return null===this.body?null:_(this.body)||w(this.body)||I(this.body)||"string"==typeof this.body?this.body:this.body instanceof S?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||I(this.body)?null:w(this.body)?this.body.type||null:_(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof S?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}clone(t={}){const e=t.method||this.method,r=t.url||this.url,s=t.responseType||this.responseType,n=void 0!==t.body?t.body:this.body,i=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,o=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let a=t.headers||this.headers,c=t.params||this.params;return void 0!==t.setHeaders&&(a=Object.keys(t.setHeaders).reduce((e,r)=>e.set(r,t.setHeaders[r]),a)),t.setParams&&(c=Object.keys(t.setParams).reduce((e,r)=>e.set(r,t.setParams[r]),c)),new C(e,r,n,{params:c,headers:a,reportProgress:o,responseType:s,withCredentials:i})}}const x=function(){var t={Sent:0,UploadProgress:1,ResponseHeader:2,DownloadProgress:3,Response:4,User:5};return t[t.Sent]="Sent",t[t.UploadProgress]="UploadProgress",t[t.ResponseHeader]="ResponseHeader",t[t.DownloadProgress]="DownloadProgress",t[t.Response]="Response",t[t.User]="User",t}();class E extends class{constructor(t,e=200,r="OK"){this.headers=t.headers||new b,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}{constructor(t={}){super(t),this.type=x.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new E({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}function F(t,e){return{body:e,headers:t.headers,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials}}let O=(()=>{class t{constructor(t){this.handler=t}request(t,e,r={}){let s;if(t instanceof C)s=t;else{let n=void 0;n=r.headers instanceof b?r.headers:new b(r.headers);let i=void 0;r.params&&(i=r.params instanceof S?r.params:new S({fromObject:r.params})),s=new C(t,e,void 0!==r.body?r.body:null,{headers:n,params:i,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials})}const n=Object(m.a)(s).pipe(Object(p.a)(t=>this.handler.handle(t)));if(t instanceof C||"events"===r.observe)return n;const i=n.pipe(Object(g.a)(t=>t instanceof E));switch(r.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return i.pipe(Object(c.a)(t=>{if(null!==t.body&&!(t.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return t.body}));case"blob":return i.pipe(Object(c.a)(t=>{if(null!==t.body&&!(t.body instanceof Blob))throw new Error("Response is not a Blob.");return t.body}));case"text":return i.pipe(Object(c.a)(t=>{if(null!==t.body&&"string"!=typeof t.body)throw new Error("Response is not a string.");return t.body}));case"json":default:return i.pipe(Object(c.a)(t=>t.body))}case"response":return i;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(t,e={}){return this.request("DELETE",t,e)}get(t,e={}){return this.request("GET",t,e)}head(t,e={}){return this.request("HEAD",t,e)}jsonp(t,e){return this.request("JSONP",t,{params:(new S).append(e,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,e={}){return this.request("OPTIONS",t,e)}patch(t,e,r={}){return this.request("PATCH",t,F(r,e))}post(t,e,r={}){return this.request("POST",t,F(r,e))}put(t,e,r={}){return this.request("PUT",t,F(r,e))}}return t.\u0275fac=function(e){return new(e||t)(s.Wb(f))},t.\u0275prov=s.Ib({token:t,factory:t.\u0275fac}),t})();var j=r("e4iD"),A=r("47ST"),N=r("P4Xx");const R=["*"];function z(t){return Error(`Unable to find icon with the name "${t}"`)}function P(t){return Error("The URL provided to MatIconRegistry was not trusted as a resource URL "+`via Angular's DomSanitizer. Attempted URL was "${t}".`)}function U(t){return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by "+`Angular's DomSanitizer. Attempted literal was "${t}".`)}class T{constructor(t,e){this.options=e,t.nodeName?this.svgElement=t:this.url=t}}let k=(()=>{class t{constructor(t,e,r,s){this._httpClient=t,this._sanitizer=e,this._errorHandler=s,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._defaultFontSetClass="material-icons",this._document=r}addSvgIcon(t,e,r){return this.addSvgIconInNamespace("",t,e,r)}addSvgIconLiteral(t,e,r){return this.addSvgIconLiteralInNamespace("",t,e,r)}addSvgIconInNamespace(t,e,r,s){return this._addSvgIconConfig(t,e,new T(r,s))}addSvgIconLiteralInNamespace(t,e,r,n){const i=this._sanitizer.sanitize(s.I.HTML,r);if(!i)throw U(r);const o=this._createSvgElementForSingleIcon(i,n);return this._addSvgIconConfig(t,e,new T(o,n))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,r){return this._addSvgIconSetConfig(t,new T(e,r))}addSvgIconSetLiteralInNamespace(t,e,r){const n=this._sanitizer.sanitize(s.I.HTML,e);if(!n)throw U(e);const i=this._svgElementFromString(n);return this._addSvgIconSetConfig(t,new T(i,r))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){const e=this._sanitizer.sanitize(s.I.RESOURCE_URL,t);if(!e)throw P(t);const r=this._cachedIconsByUrl.get(e);return r?Object(m.a)(L(r)):this._loadSvgIconFromConfig(new T(t)).pipe(Object(a.a)(t=>this._cachedIconsByUrl.set(e,t)),Object(c.a)(t=>L(t)))}getNamedSvgIcon(t,e=""){const r=M(e,t),s=this._svgIconConfigs.get(r);if(s)return this._getSvgFromConfig(s);const n=this._iconSetConfigs.get(e);return n?this._getSvgFromIconSetConfigs(t,n):Object(A.a)(z(r))}ngOnDestroy(){this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgElement?Object(m.a)(L(t.svgElement)):this._loadSvgIconFromConfig(t).pipe(Object(a.a)(e=>t.svgElement=e),Object(c.a)(t=>L(t)))}_getSvgFromIconSetConfigs(t,e){const r=this._extractIconWithNameFromAnySet(t,e);if(r)return Object(m.a)(r);const n=e.filter(t=>!t.svgElement).map(t=>this._loadSvgIconSetFromConfig(t).pipe(Object(l.a)(e=>{const r=`Loading icon set URL: ${this._sanitizer.sanitize(s.I.RESOURCE_URL,t.url)} failed: ${e.message}`;return this._errorHandler?this._errorHandler.handleError(new Error(r)):console.error(r),Object(m.a)(null)})));return Object(N.a)(n).pipe(Object(c.a)(()=>{const r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw z(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let r=e.length-1;r>=0;r--){const s=e[r];if(s.svgElement){const e=this._extractSvgIconFromSet(s.svgElement,t,s.options);if(e)return e}}return null}_loadSvgIconFromConfig(t){return this._fetchUrl(t.url).pipe(Object(c.a)(e=>this._createSvgElementForSingleIcon(e,t.options)))}_loadSvgIconSetFromConfig(t){return t.svgElement?Object(m.a)(t.svgElement):this._fetchUrl(t.url).pipe(Object(c.a)(e=>(t.svgElement||(t.svgElement=this._svgElementFromString(e)),t.svgElement)))}_createSvgElementForSingleIcon(t,e){const r=this._svgElementFromString(t);return this._setSvgAttributes(r,e),r}_extractSvgIconFromSet(t,e,r){const s=t.querySelector(`[id="${e}"]`);if(!s)return null;const n=s.cloneNode(!0);if(n.removeAttribute("id"),"svg"===n.nodeName.toLowerCase())return this._setSvgAttributes(n,r);if("symbol"===n.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(n),r);const i=this._svgElementFromString("<svg></svg>");return i.appendChild(n),this._setSvgAttributes(i,r)}_svgElementFromString(t){const e=this._document.createElement("DIV");e.innerHTML=t;const r=e.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(t){const e=this._svgElementFromString("<svg></svg>"),r=t.attributes;for(let s=0;s<r.length;s++){const{name:t,value:n}=r[s];"id"!==t&&e.setAttribute(t,n)}for(let s=0;s<t.childNodes.length;s++)t.childNodes[s].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[s].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchUrl(t){if(!this._httpClient)throw Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");if(null==t)throw Error(`Cannot fetch icon from URL "${t}".`);const e=this._sanitizer.sanitize(s.I.RESOURCE_URL,t);if(!e)throw P(t);const r=this._inProgressUrlFetches.get(e);if(r)return r;const n=this._httpClient.get(e,{responseType:"text"}).pipe(Object(h.a)(()=>this._inProgressUrlFetches.delete(e)),Object(d.a)());return this._inProgressUrlFetches.set(e,n),n}_addSvgIconConfig(t,e,r){return this._svgIconConfigs.set(M(t,e),r),this}_addSvgIconSetConfig(t,e){const r=this._iconSetConfigs.get(t);return r?r.push(e):this._iconSetConfigs.set(t,[e]),this}}return t.\u0275fac=function(e){return new(e||t)(s.Wb(O,8),s.Wb(j.b),s.Wb(o.d,8),s.Wb(s.m,8))},t.\u0275prov=Object(s.Ib)({factory:function(){return new t(Object(s.Wb)(O,8),Object(s.Wb)(j.b),Object(s.Wb)(o.d,8),Object(s.Wb)(s.m,8))},token:t,providedIn:"root"}),t})();function L(t){return t.cloneNode(!0)}function M(t,e){return t+":"+e}class W{constructor(t){this._elementRef=t}}const D=Object(n.j)(W),H=new s.q("mat-icon-location",{providedIn:"root",factory:function(){const t=Object(s.U)(o.d),e=t?t.location:null;return{getPathname:()=>e?e.pathname+e.search:""}}}),B=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],V=B.map(t=>`[${t}]`).join(", "),$=/^url\(['"]?#(.*?)['"]?\)$/;let q=(()=>{class t extends D{constructor(t,e,r,s,n){super(t),this._iconRegistry=e,this._location=s,this._errorHandler=n,this._inline=!1,r||t.nativeElement.setAttribute("aria-hidden","true")}get inline(){return this._inline}set inline(t){this._inline=Object(i.b)(t)}get fontSet(){return this._fontSet}set fontSet(t){this._fontSet=this._cleanupFontValue(t)}get fontIcon(){return this._fontIcon}set fontIcon(t){this._fontIcon=this._cleanupFontValue(t)}_splitIconName(t){if(!t)return["",""];const e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnChanges(t){const e=t.svgIcon;if(e)if(this.svgIcon){const[t,e]=this._splitIconName(this.svgIcon);this._iconRegistry.getNamedSvgIcon(e,t).pipe(Object(u.a)(1)).subscribe(t=>this._setSvgElement(t),r=>{const s=`Error retrieving icon ${t}:${e}! ${r.message}`;this._errorHandler?this._errorHandler.handleError(new Error(s)):console.error(s)})}else e.previousValue&&this._clearSvgElement();this._usingFontIcon()&&this._updateFontIconClasses()}ngOnInit(){this._usingFontIcon()&&this._updateFontIconClasses()}ngAfterViewChecked(){const t=this._elementsWithExternalReferences;if(t&&this._location&&t.size){const t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();const e=t.querySelectorAll("style");for(let r=0;r<e.length;r++)e[r].textContent+=" ";if(this._location){const e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e)}this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){const t=this._elementRef.nativeElement;let e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){const r=t.childNodes[e];1===r.nodeType&&"svg"!==r.nodeName.toLowerCase()||t.removeChild(r)}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const t=this._elementRef.nativeElement,e=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();e!=this._previousFontSetClass&&(this._previousFontSetClass&&t.classList.remove(this._previousFontSetClass),e&&t.classList.add(e),this._previousFontSetClass=e),this.fontIcon!=this._previousFontIconClass&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return"string"==typeof t?t.trim().split(" ")[0]:t}_prependPathToReferences(t){const e=this._elementsWithExternalReferences;e&&e.forEach((e,r)=>{e.forEach(e=>{r.setAttribute(e.name,`url('${t}#${e.value}')`)})})}_cacheChildrenWithExternalReferences(t){const e=t.querySelectorAll(V),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let s=0;s<e.length;s++)B.forEach(t=>{const n=e[s],i=n.getAttribute(t),o=i?i.match($):null;if(o){let e=r.get(n);e||(e=[],r.set(n,e)),e.push({name:t,value:o[1]})}})}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(s.l),s.Mb(k),s.Xb("aria-hidden"),s.Mb(H,8),s.Mb(s.m,8))},t.\u0275cmp=s.Gb({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:4,hostBindings:function(t,e){2&t&&s.Db("mat-icon-inline",e.inline)("mat-icon-no-color","primary"!==e.color&&"accent"!==e.color&&"warn"!==e.color)},inputs:{color:"color",inline:"inline",fontSet:"fontSet",fontIcon:"fontIcon",svgIcon:"svgIcon"},exportAs:["matIcon"],features:[s.yb,s.zb],ngContentSelectors:R,decls:1,vars:0,template:function(t,e){1&t&&(s.ic(),s.hc(0))},styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],encapsulation:2,changeDetection:0}),t})(),K=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},imports:[[n.c],n.c]}),t})()}}]);