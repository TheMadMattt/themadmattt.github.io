(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1lTL":function(e,t,i){"use strict";i.r(t),i.d(t,"BenchmarksModule",function(){return d});var r=i("ofXK"),n=i("tyNb");class c{constructor(){this.startTime=0,this.endTime=0,this.time=0,this.times=[],this.averageTime=0}stopTimer(){this.endTime=performance.now(),this.time=this.endTime-this.startTime,this.times.push(this.time)}startTimer(){this.startTime=performance.now()}getAverageTime(){if(this.times.length>0){const e=this.times.reduce((e,t)=>e+t);return this.averageTime=e/this.times.length}return 0}}var s=i("fXoL"),a=i("bTqV");function o(e,t){if(1&e&&(s.Ob(0,"div"),s.Ob(1,"p"),s.kc(2),s.Nb(),s.Nb()),2&e){const e=t.$implicit;s.Bb(2),s.lc(e)}}function m(e,t){if(1&e&&(s.Ob(0,"div",6),s.Ob(1,"div",7),s.Ob(2,"h1"),s.kc(3),s.Nb(),s.Ob(4,"h3"),s.kc(5),s.Nb(),s.Nb(),s.Nb()),2&e){const e=t.$implicit;s.Bb(3),s.lc(e.name),s.Bb(2),s.lc(e.desc)}}const u=[{path:"angular-crud",component:(()=>{class e{constructor(e){this.cdr=e,this.array=[],this.ROWS_NUMBER=1e3,this.isCreating=!1,this.createRenderTime=new c}createRows(e){this.ROWS_NUMBER=e,this.isCreating=!0,this.createRenderTime.startTimer();const t=[];for(let i=0;i<e;i++)t.push({name:"TEST: "+i,desc:"DESC "+i});this.array=[...t]}ngAfterViewChecked(){this.isCreating&&(this.createRenderTime.stopTimer(),this.isCreating=!1,this.cdr.detectChanges())}clear(){this.array=[],this.createRenderTime=new c}run5Times(){return e=this,void 0,i=function*(){for(let e=0;e<5;e++)this.createRows(this.ROWS_NUMBER),yield this.delay(0);this.createRenderTime.getAverageTime()},new((t=void 0)||(t=Promise))(function(r,n){function c(e){try{a(i.next(e))}catch(t){n(t)}}function s(e){try{a(i.throw(e))}catch(t){n(t)}}function a(e){var i;e.done?r(e.value):(i=e.value,i instanceof t?i:new t(function(e){e(i)})).then(c,s)}a((i=i.apply(e,[])).next())});var e,t,i}delay(e){return new Promise(t=>setTimeout(t,e))}}return e.\u0275fac=function(t){return new(t||e)(s.Lb(s.h))},e.\u0275cmp=s.Fb({type:e,selectors:[["app-angular-crud"]],decls:13,vars:3,consts:[["id","angular-crud",1,"crud-container"],["mat-raised-button","","color","primary","type","button","id","create1000",3,"click"],["mat-raised-button","","color","primary","type","button","id","create10000",3,"click"],["mat-raised-button","","color","primary","type","button",3,"click"],[4,"ngFor","ngForOf"],["id","list",4,"ngFor","ngForOf"],["id","list"],["id","item"]],template:function(e,t){1&e&&(s.Ob(0,"div",0),s.Ob(1,"button",1),s.Vb("click",function(){return t.createRows(1e3)}),s.kc(2,"CREATE 1000 ROWS"),s.Nb(),s.Ob(3,"button",2),s.Vb("click",function(){return t.createRows(1e4)}),s.kc(4,"CREATE 10000 ROWS"),s.Nb(),s.Ob(5,"button",3),s.Vb("click",function(){return t.run5Times()}),s.kc(6,"Execute"),s.Nb(),s.Ob(7,"button",3),s.Vb("click",function(){return t.clear()}),s.kc(8,"CLEAR"),s.Nb(),s.Ob(9,"h2"),s.kc(10),s.Nb(),s.jc(11,o,3,1,"div",4),s.jc(12,m,6,2,"div",5),s.Nb()),2&e&&(s.Bb(10),s.mc("Creating and rendering 1000 rows: ",t.createRenderTime.averageTime>0?t.createRenderTime.averageTime:t.createRenderTime.time," ms"),s.Bb(1),s.ac("ngForOf",null==t.createRenderTime?null:t.createRenderTime.times),s.Bb(1),s.ac("ngForOf",t.array))},directives:[a.a,r.h],styles:["button[_ngcontent-%COMP%]{margin-right:10px}.example-viewport[_ngcontent-%COMP%]{height:80vh;width:90vw}.example-item[_ngcontent-%COMP%]{height:100%}"]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Jb({type:e}),e.\u0275inj=s.Ib({imports:[[n.b.forChild(u)],n.b]}),e})();var b=i("PCNd");let d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Jb({type:e}),e.\u0275inj=s.Ib({imports:[[r.b,h,b.a]]}),e})()}}]);