(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1lTL":function(e,t,r){"use strict";r.r(t),r.d(t,"BenchmarksModule",function(){return h});var i=r("ofXK"),n=r("tyNb"),c=r("fXoL");function s(e,t){if(1&e&&(c.Ob(0,"div"),c.Ob(1,"p"),c.kc(2),c.Nb(),c.Nb()),2&e){const e=t.$implicit;c.Bb(2),c.lc(e)}}function a(e,t){if(1&e&&(c.Ob(0,"div",4),c.Ob(1,"div",5),c.Ob(2,"h1"),c.kc(3),c.Nb(),c.Ob(4,"h3"),c.kc(5),c.Nb(),c.Nb(),c.Nb()),2&e){const e=t.$implicit;c.Bb(3),c.lc(e.name),c.Bb(2),c.lc(e.desc)}}const o=[{path:"angular-crud",component:(()=>{class e{constructor(e){this.cdr=e,this.array=[],this.ROWS_NUMBER=1e3,this.isCreating=!1,this.createTime=0,this.createRenderTime=0,this.createRenderTimeArr=[]}create1000rows(){this.isCreating=!0,this.createTime=performance.now(),this.createRenderTime=performance.now();for(let e=0;e<this.ROWS_NUMBER;e++)this.array.push({name:"TEST: "+e,desc:"DESC "+e});this.createTime=performance.now()-this.createTime}ngAfterViewChecked(){this.isCreating&&(this.createRenderTime=performance.now()-this.createRenderTime,this.createRenderTimeArr.push(this.createRenderTime),this.array=[],this.isCreating=!1,this.cdr.detectChanges())}clear(){this.array=[],this.createRenderTimeArr=[],this.createTime=0,this.createRenderTime=0}run5Times(){return e=this,void 0,r=function*(){for(let t=0;t<5;t++)this.create1000rows(),yield this.delay(2e3);const e=this.createRenderTimeArr.reduce((e,t)=>e+t,0);this.createRenderTime=e/this.createRenderTimeArr.length||0},new((t=void 0)||(t=Promise))(function(i,n){function c(e){try{a(r.next(e))}catch(t){n(t)}}function s(e){try{a(r.throw(e))}catch(t){n(t)}}function a(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(c,s)}a((r=r.apply(e,[])).next())});var e,t,r}delay(e){return new Promise(t=>setTimeout(t,e))}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(c.h))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-angular-crud"]],decls:12,vars:5,consts:[["type","button","id","create",3,"click"],["type","button",3,"click"],[4,"ngFor","ngForOf"],["id","list",4,"ngFor","ngForOf"],["id","list"],["id","item"]],template:function(e,t){1&e&&(c.Ob(0,"h1"),c.kc(1,"TEST"),c.Nb(),c.Ob(2,"button",0),c.Vb("click",function(){return t.create1000rows()}),c.kc(3),c.Nb(),c.Ob(4,"button",1),c.Vb("click",function(){return t.run5Times()}),c.kc(5,"Execute"),c.Nb(),c.Ob(6,"button",1),c.Vb("click",function(){return t.clear()}),c.kc(7,"CLEAR"),c.Nb(),c.Ob(8,"p"),c.kc(9),c.Nb(),c.jc(10,s,3,1,"div",2),c.jc(11,a,6,2,"div",3)),2&e&&(c.Bb(3),c.mc("CREATE ",t.ROWS_NUMBER," ROWS"),c.Bb(6),c.nc("","CREATE: "+t.createTime,", ","Render: "+t.createRenderTime,""),c.Bb(1),c.ac("ngForOf",t.createRenderTimeArr),c.Bb(1),c.ac("ngForOf",t.array))},directives:[i.h],styles:[""]}),e})()}];let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({imports:[[n.b.forChild(o)],n.b]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({imports:[[i.b,u]]}),e})()}}]);