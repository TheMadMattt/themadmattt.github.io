(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1lTL":function(e,t,n){"use strict";n.r(t),n.d(t,"BenchmarksModule",function(){return y});var i=n("ofXK"),r=n("tyNb");class o{constructor(){this.startTime=0,this.endTime=0,this.time=0,this.times=[],this.averageTime=0}stopTimer(){this.endTime=performance.now(),this.time=this.endTime-this.startTime,this.times.push(this.time)}startTimer(){this.startTime=performance.now()}getAverageTime(){if(this.times.length>0){const e=this.times.reduce((e,t)=>e+t);return this.averageTime=e/this.times.length}return 0}}var a=n("3Pt+"),s=n("fXoL");let c=(()=>{class e{constructor(){this.adjectives=["bad","best","better","big","certain","clear","different","early","easy","economic","federal","free","full","good","great","hard","high","human","important","international","large","late","little","local","long","low","major","military","national","new","old","only","other","political","possible","public","real","recent","right","small","social","special","strong","sure","true","white","whole","young","crazy","helpful","mushy"],this.colors=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],this.nouns=["area","book","business","case","child","company","country","day","eye","fact","family","government","group","hand","home","job","life","lot","man","money","month","mother","Mr","night","number","part","people","place","point","problem","program","question","right","room","school","state","story","student","study","system","thing","time","water","way","week","woman","word","work","world","year"]}random(e){return Math.round(1e3*Math.random())%e}buildData(e){const t=[];for(let n=0;n<e;n++)t.push({id:n,name:this.nouns[this.random(this.nouns.length)],description:`${this.adjectives[this.random(this.adjectives.length)]} ${this.colors[this.random(this.colors.length)]} ${this.nouns[this.random(this.nouns.length)]}`});return t}buildOneItem(e){return{id:e,name:this.nouns[this.random(this.nouns.length)],description:`${this.adjectives[this.random(this.adjectives.length)]} ${this.colors[this.random(this.colors.length)]} ${this.nouns[this.random(this.nouns.length)]}`}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=n("kmnG"),m=n("d3UM"),d=n("bTqV"),h=n("FKr1");function u(e,t){if(1&e&&(s.Rb(0,"mat-option",12),s.nc(1),s.Qb()),2&e){const e=t.$implicit;s.dc("value",e),s.Bb(1),s.oc(e)}}function b(e,t){if(1&e&&(s.Rb(0,"div"),s.Rb(1,"p"),s.nc(2),s.Qb(),s.Qb()),2&e){const e=t.$implicit;s.Bb(2),s.oc(e)}}function p(e,t){if(1&e&&(s.Rb(0,"tr"),s.Rb(1,"td"),s.nc(2),s.Qb(),s.Rb(3,"td"),s.nc(4),s.Qb(),s.Rb(5,"td"),s.nc(6),s.Qb(),s.Qb()),2&e){const e=t.$implicit;s.Bb(2),s.oc(e.id),s.Bb(2),s.oc(e.name),s.Bb(2),s.oc(e.description)}}const g=[{path:"angular-crud",component:(()=>{class e{constructor(e,t){this.dummyDataService=e,this.cdr=t,this.dummyData=[],this.ROWS_NUMBER=[1e3,5e3,1e4],this.rowsNumber=new a.a(this.ROWS_NUMBER[0]),this.headers=["id","name","description"],this.isCreating=!1,this.createRenderTime=new o}createRows(){this.isCreating=!0,this.createRenderTime.startTimer(),this.dummyData=this.dummyDataService.buildData(this.rowsNumber.value)}ngAfterViewChecked(){this.isCreating&&(this.createRenderTime.stopTimer(),this.isCreating=!1,this.cdr.detectChanges())}clear(){this.dummyData=[],this.createRenderTime=new o}run5Times(){return e=this,void 0,n=function*(){for(let e=0;e<5;e++)this.createRows(),yield this.delay(0);this.createRenderTime.getAverageTime()},new((t=void 0)||(t=Promise))(function(i,r){function o(e){try{s(n.next(e))}catch(t){r(t)}}function a(e){try{s(n.throw(e))}catch(t){r(t)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(o,a)}s((n=n.apply(e,[])).next())});var e,t,n}delay(e){return new Promise(t=>setTimeout(t,e))}}return e.\u0275fac=function(t){return new(t||e)(s.Mb(c),s.Mb(s.h))},e.\u0275cmp=s.Gb({type:e,selectors:[["app-angular-crud"]],decls:22,vars:6,consts:[["id","lifecycle-hooks-crud",1,"crud-container"],[1,"actions"],[1,"create-operations"],["appearance","outline"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary","type","button","id","create",3,"click"],["mat-raised-button","","color","primary","type","button",3,"click"],[4,"ngFor","ngForOf"],[1,"data-container"],[1,"data-table"],["id","table"],[3,"value"]],template:function(e,t){1&e&&(s.Rb(0,"div",0),s.Rb(1,"div",1),s.Rb(2,"div",2),s.Rb(3,"mat-form-field",3),s.Rb(4,"mat-label"),s.nc(5,"Choose rows number"),s.Qb(),s.Rb(6,"mat-select",4),s.mc(7,u,2,2,"mat-option",5),s.Qb(),s.Qb(),s.Rb(8,"button",6),s.Yb("click",function(){return t.createRows()}),s.nc(9),s.Qb(),s.Rb(10,"button",7),s.Yb("click",function(){return t.run5Times()}),s.nc(11,"Execute"),s.Qb(),s.Qb(),s.Rb(12,"button",7),s.Yb("click",function(){return t.clear()}),s.nc(13,"CLEAR"),s.Qb(),s.Qb(),s.Rb(14,"h2"),s.nc(15),s.Qb(),s.mc(16,b,3,1,"div",8),s.Rb(17,"div",9),s.Rb(18,"div",10),s.Rb(19,"table",11),s.Rb(20,"tbody"),s.mc(21,p,7,3,"tr",8),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&e&&(s.Bb(6),s.dc("formControl",t.rowsNumber),s.Bb(1),s.dc("ngForOf",t.ROWS_NUMBER),s.Bb(2),s.pc("CREATE ",t.rowsNumber.value," ROWS"),s.Bb(6),s.pc("Creating and rendering 1000 rows: ",t.createRenderTime.averageTime>0?t.createRenderTime.averageTime:t.createRenderTime.time," ms"),s.Bb(1),s.dc("ngForOf",null==t.createRenderTime?null:t.createRenderTime.times),s.Bb(5),s.dc("ngForOf",t.dummyData))},directives:[l.b,l.e,m.a,a.g,a.b,i.i,d.a,h.g],styles:[".actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:20px}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px}.example-viewport[_ngcontent-%COMP%]{height:80vh;width:90vw}.example-item[_ngcontent-%COMP%]{height:100%}.data-container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.data-list[_ngcontent-%COMP%], .data-table[_ngcontent-%COMP%]{flex:1}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({imports:[[r.b.forChild(g)],r.b]}),e})();var w=n("PCNd");let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({imports:[[i.b,f,w.a]]}),e})()}}]);