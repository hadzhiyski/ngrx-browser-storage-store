(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{J3rI:function(t,n,c){"use strict";c.r(n),c.d(n,"COUNTER_FEATURE_CONFIG",(function(){return w})),c.d(n,"getCounterFeatureConfig",(function(){return S})),c.d(n,"CounterModule",(function(){return F}));var e=c("2kYt"),r=c("EM62"),o=c("PBFl"),a=c("Meci"),s=c("Pq5H"),i=c("ycWL"),u=c("sN6X"),b=c("Dh1X"),d=c("sEIs");const f=Object(u.n)("[Counter] Add"),p=Object(u.n)("[Counter] Subtract"),l=Object(u.p)({count:0},Object(u.r)(f,t=>Object.assign(Object.assign({},t),{count:t.count+1})),Object(u.r)(p,t=>Object.assign(Object.assign({},t),{count:t.count-1}))),g=Object(u.o)("counter"),h=Object(u.q)(g,t=>t.count),O=function(){return["fas","plus"]},j=function(){return["fas","minus"]},m=[{path:"",component:(()=>{class t{constructor(t){this.store=t,this.count$=this.store.pipe(Object(u.t)(h))}add(){this.store.dispatch(f())}subtract(){this.store.dispatch(p())}}return t.\u0275fac=function(n){return new(n||t)(r.Mb(u.h))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-counter-index"]],decls:13,vars:7,consts:[[1,"counter-card"],[1,"counter-card-title"],[1,"counter-card-container"],[1,"mat-display-4"],["mat-icon-button","",3,"click"],[3,"icon"]],template:function(t,n){1&t&&(r.Sb(0,"mat-card",0),r.Sb(1,"mat-card-title",1),r.yc(2,"Counter"),r.Rb(),r.Sb(3,"mat-card-content"),r.Sb(4,"div",2),r.Sb(5,"span",3),r.yc(6),r.fc(7,"async"),r.Rb(),r.Rb(),r.Rb(),r.Sb(8,"mat-card-actions"),r.Sb(9,"button",4),r.ac("click",(function(){return n.add()})),r.Nb(10,"fa-icon",5),r.Rb(),r.Sb(11,"button",4),r.ac("click",(function(){return n.subtract()})),r.Nb(12,"fa-icon",5),r.Rb(),r.Rb(),r.Rb()),2&t&&(r.Bb(6),r.zc(r.gc(7,3,n.count$)),r.Bb(4),r.jc("icon",r.kc(5,O)),r.Bb(2),r.jc("icon",r.kc(6,j)))},directives:[a.a,a.f,a.c,a.b,o.a,s.a],pipes:[e.b],styles:["[_nghost-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center}.counter-card[_ngcontent-%COMP%]{width:300px}.counter-card-title[_ngcontent-%COMP%]{text-align:center}.counter-card-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.counter-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"],changeDetection:0}),t})()}];let y=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(n){return new(n||t)},imports:[[d.f.forChild(m)],d.f]}),t})(),C=(()=>{class t{constructor(t,n){this.actions$=t,this.browserStorageEffects=n,this.saveToLocalStorage$=this.browserStorageEffects.saveForFeature(this.actions$,g)}}return t.\u0275fac=function(n){return new(n||t)(r.Wb(i.a),r.Wb(b.b))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})();const w=new r.q("Counter Feature Config");function S(t){return{metaReducers:[t.get()]}}let F=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(n){return new(n||t)},providers:[{provide:w,deps:[b.c],useFactory:S}],imports:[[e.c,o.b,a.d,s.c,y,b.d.forFeature("counter",{storage:b.a.SessionStorage}),u.j.forFeature("counter",l,w),i.b.forFeature([C])]]}),t})()}}]);