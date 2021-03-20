(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1lTL":function(t,e,i){"use strict";i.r(e),i.d(e,"BenchmarksModule",function(){return R});var n=i("ofXK"),r=i("tyNb");function a(t,e,i,n){return new(i||(i=Promise))(function(r,a){function o(t){try{m(n.next(t))}catch(e){a(e)}}function s(t){try{m(n.throw(t))}catch(e){a(e)}}function m(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(o,s)}m((n=n.apply(t,e||[])).next())})}class o{constructor(){this.startTime=0,this.endTime=0,this.time=0,this.times=[],this.averageTime=0}stopTimer(){this.endTime=performance.now(),this.time=this.endTime-this.startTime,this.times.push(this.time)}startTimer(){this.startTime=performance.now()}getAverageTime(){if(this.times.length>0){const t=this.times.reduce((t,e)=>t+e);return this.averageTime=t/this.times.length}return 0}}var s=i("3Pt+"),m=i("fXoL");let d=(()=>{class t{constructor(){this.adjectives=["bad","best","better","big","certain","clear","different","early","easy","economic","federal","free","full","good","great","hard","high","human","important","international","large","late","little","local","long","low","major","military","national","new","old","only","other","political","possible","public","real","recent","right","small","social","special","strong","sure","true","white","whole","young","crazy","helpful","mushy"],this.colors=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],this.nouns=["area","book","business","case","child","company","country","day","eye","fact","family","government","group","hand","home","job","life","lot","man","money","month","mother","Mr","night","number","part","people","place","point","problem","program","question","right","room","school","state","story","student","study","system","thing","time","water","way","week","woman","word","work","world","year"]}random(t){return Math.round(1e3*Math.random())%t}buildData(t){const e=[];for(let i=0;i<t;i++)e.push({id:i,name:this.nouns[this.random(this.nouns.length)],description:`${this.adjectives[this.random(this.adjectives.length)]} ${this.colors[this.random(this.colors.length)]} ${this.nouns[this.random(this.nouns.length)]}`});return e}buildOneItem(t){return{id:t,name:this.nouns[this.random(this.nouns.length)],description:`${this.adjectives[this.random(this.adjectives.length)]} ${this.colors[this.random(this.colors.length)]} ${this.nouns[this.random(this.nouns.length)]}`}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=m.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var c=i("kmnG"),l=i("d3UM"),u=i("bTqV"),h=i("Qu3c"),b=i("FKr1");function p(t,e){if(1&t&&(m.Rb(0,"mat-option",23),m.rc(1),m.Qb()),2&t){const t=e.$implicit;m.fc("value",t),m.Bb(1),m.sc(t)}}function g(t,e){if(1&t&&(m.Rb(0,"div",24),m.rc(1),m.Qb()),2&t){const t=m.ac();m.Bb(1),m.vc(" ",t.selectedDummyItem.id," | ",t.selectedDummyItem.name," | ",t.selectedDummyItem.description," ")}}function y(t,e){if(1&t&&(m.Rb(0,"tr"),m.Rb(1,"td"),m.rc(2),m.Qb(),m.Rb(3,"td"),m.rc(4),m.Qb(),m.Rb(5,"td"),m.rc(6),m.Qb(),m.Qb()),2&t){const t=e.$implicit;m.Bb(2),m.sc(t.id),m.Bb(2),m.sc(t.name),m.Bb(2),m.sc(t.description)}}const T=[{path:"angular-crud",component:(()=>{class t{constructor(t,e){this.dummyDataService=t,this.cdr=e,this.dummyData=[],this.ROWS_NUMBER=[1e3,5e3,1e4],this.rowsNumber=new s.a(this.ROWS_NUMBER[0]),this.isCreating=!1,this.isUpdating=!1,this.isAppending=!1,this.isDeleting=!1,this.isReading=!1,this.createTimer=new o,this.updateTimer=new o,this.appendTimer=new o,this.deleteTimer=new o,this.readTimer=new o}createRows(){this.isCreating=!0,this.createTimer.startTimer(),this.dummyData=this.dummyDataService.buildData(this.rowsNumber.value)}updateRandomRow(){this.isUpdating=!0;const t=this.dummyDataService.random(this.dummyData.length);this.updateTimer.startTimer();let e=this.dummyData[t];e.name+=" UPDATED",e.description+=" UPDATED",this.dummyData[t]=e}appendRow(){this.isAppending=!0,this.appendTimer.startTimer(),this.dummyData.push(this.dummyDataService.buildOneItem(this.dummyData.length))}readRandomRow(){this.isReading=!0;const t=this.dummyDataService.random(this.dummyData.length);this.readTimer.startTimer(),this.selectedDummyItem=this.dummyData[t]}deleteRandomRow(){this.isDeleting=!0;const t=this.dummyDataService.random(this.dummyData.length);this.deleteTimer.startTimer(),this.dummyData.splice(t,1)}ngAfterViewChecked(){this.isCreating?(this.createTimer.stopTimer(),this.isCreating=!1):this.isUpdating?(this.updateTimer.stopTimer(),this.isUpdating=!1):this.isAppending?(this.appendTimer.stopTimer(),this.isAppending=!1):this.isDeleting?(this.deleteTimer.stopTimer(),this.isDeleting=!1):this.isReading&&(this.readTimer.stopTimer(),this.isReading=!1),this.cdr.detectChanges()}runCreatingTest(t){return a(this,void 0,void 0,function*(){for(let e=0;e<t;e++)this.createRows(),yield this.delay(0);this.createTimer.getAverageTime()})}runUpdatingTest(t){return a(this,void 0,void 0,function*(){for(let e=0;e<t;e++){const t=this.dummyData;this.updateRandomRow(),yield this.delay(0).then(()=>{this.dummyData=[...t]})}this.updateTimer.getAverageTime()})}runAppendingTest(t){return a(this,void 0,void 0,function*(){for(let e=0;e<t;e++){const t=this.dummyData;this.appendRow(),yield this.delay(0).then(()=>{this.dummyData=[...t]})}this.appendTimer.getAverageTime()})}runDeletingTest(t){return a(this,void 0,void 0,function*(){for(let e=0;e<t;e++){const t=this.dummyData;this.deleteRandomRow(),yield this.delay(0).then(()=>{this.dummyData=[...t]})}this.deleteTimer.getAverageTime()})}runReadingTest(t){return a(this,void 0,void 0,function*(){for(let e=0;e<t;e++)this.readRandomRow(),yield this.delay(0);this.readTimer.getAverageTime()})}delay(t){return new Promise(e=>setTimeout(e,t))}clear(){this.dummyData=[],this.selectedDummyItem=null,this.createTimer=new o,this.appendTimer=new o,this.updateTimer=new o,this.deleteTimer=new o,this.readTimer=new o}}return t.\u0275fac=function(e){return new(e||t)(m.Mb(d),m.Mb(m.h))},t.\u0275cmp=m.Gb({type:t,selectors:[["app-angular-crud"]],decls:47,vars:20,consts:[["id","lifecycle-hooks-crud",1,"crud-container"],[1,"actions"],["appearance","outline"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"operations"],["mat-raised-button","","id","create","color","primary","type","button",3,"click"],["mat-raised-button","","id","update","color","primary","type","button",3,"disabled","click"],["mat-raised-button","","id","append","color","primary","type","button",3,"disabled","click"],["mat-raised-button","","id","delete","color","primary","type","button",3,"disabled","click"],["mat-raised-button","","id","read","color","primary","type","button",3,"disabled","click"],[1,"measurement-tests"],["mat-raised-button","","color","primary","type","button","matTooltipPosition","above","matTooltipHideDelay","2000",3,"matTooltip","click"],["mat-raised-button","","color","primary","type","button","matTooltip","Run 10 time measurements of updating row","matTooltipPosition","above","matTooltipHideDelay","2000",3,"disabled","click"],["mat-raised-button","","color","primary","type","button","matTooltip","Run 10 time measurements of appending row","matTooltipPosition","above","matTooltipHideDelay","2000",3,"disabled","click"],["mat-raised-button","","color","primary","type","button","matTooltip","Run 10 time measurements of deleting row","matTooltipPosition","above","matTooltipHideDelay","2000",3,"disabled","click"],["mat-raised-button","","color","primary","type","button","matTooltip","Run 10 time measurements of selecting (reading) row","matTooltipPosition","above","matTooltipHideDelay","2000",3,"disabled","click"],["mat-raised-button","","color","primary","type","button",3,"click"],["class","selected-dummy-item",4,"ngIf"],[1,"data-container"],[1,"data-table"],["id","table"],[4,"ngFor","ngForOf"],[3,"value"],[1,"selected-dummy-item"]],template:function(t,e){1&t&&(m.Rb(0,"div",0),m.Rb(1,"div",1),m.Rb(2,"mat-form-field",2),m.Rb(3,"mat-label"),m.rc(4,"Choose rows number"),m.Qb(),m.Rb(5,"mat-select",3),m.qc(6,p,2,2,"mat-option",4),m.Qb(),m.Qb(),m.Rb(7,"div",5),m.Rb(8,"button",6),m.Yb("click",function(){return e.createRows()}),m.rc(9),m.Qb(),m.Rb(10,"button",7),m.Yb("click",function(){return e.updateRandomRow()}),m.rc(11,"Update random row"),m.Qb(),m.Rb(12,"button",8),m.Yb("click",function(){return e.appendRow()}),m.rc(13,"Append row"),m.Qb(),m.Rb(14,"button",9),m.Yb("click",function(){return e.deleteRandomRow()}),m.rc(15,"Delete random row"),m.Qb(),m.Rb(16,"button",10),m.Yb("click",function(){return e.readRandomRow()}),m.rc(17,"Select random row (read)"),m.Qb(),m.Qb(),m.Rb(18,"div",11),m.Rb(19,"button",12),m.Yb("click",function(){return e.runCreatingTest(10)}),m.rc(20,"Run creating test"),m.Qb(),m.Rb(21,"button",13),m.Yb("click",function(){return e.runUpdatingTest(10)}),m.rc(22,"Run updating test"),m.Qb(),m.Rb(23,"button",14),m.Yb("click",function(){return e.runAppendingTest(10)}),m.rc(24,"Run appending test"),m.Qb(),m.Rb(25,"button",15),m.Yb("click",function(){return e.runDeletingTest(10)}),m.rc(26,"Run deleting test"),m.Qb(),m.Rb(27,"button",16),m.Yb("click",function(){return e.runReadingTest(10)}),m.rc(28,"Run reading test"),m.Qb(),m.Qb(),m.Rb(29,"button",17),m.Yb("click",function(){return e.clear()}),m.rc(30,"CLEAR"),m.Qb(),m.Qb(),m.qc(31,g,2,3,"div",18),m.Rb(32,"h2"),m.rc(33),m.Qb(),m.Rb(34,"h2"),m.rc(35),m.Qb(),m.Rb(36,"h2"),m.rc(37),m.Qb(),m.Rb(38,"h2"),m.rc(39),m.Qb(),m.Rb(40,"h2"),m.rc(41),m.Qb(),m.Rb(42,"div",19),m.Rb(43,"div",20),m.Rb(44,"table",21),m.Rb(45,"tbody"),m.qc(46,y,7,3,"tr",22),m.Qb(),m.Qb(),m.Qb(),m.Qb(),m.Qb()),2&t&&(m.Bb(5),m.fc("formControl",e.rowsNumber),m.Bb(1),m.fc("ngForOf",e.ROWS_NUMBER),m.Bb(3),m.tc("Create ",e.rowsNumber.value," rows"),m.Bb(1),m.fc("disabled",e.dummyData.length<=0),m.Bb(2),m.fc("disabled",e.dummyData.length<=0),m.Bb(2),m.fc("disabled",e.dummyData.length<=0),m.Bb(2),m.fc("disabled",e.dummyData.length<=0),m.Bb(3),m.gc("matTooltip","Run 10 time measurements of creating ",e.rowsNumber.value," rows"),m.Bb(2),m.fc("disabled",e.dummyData.length<=0),m.Bb(2),m.fc("disabled",e.dummyData.length<=0),m.Bb(2),m.fc("disabled",e.dummyData.length<=0),m.Bb(2),m.fc("disabled",e.dummyData.length<=0),m.Bb(4),m.fc("ngIf",e.selectedDummyItem),m.Bb(2),m.uc("Creating ",e.rowsNumber.value," rows: ",e.createTimer.averageTime>0?e.createTimer.averageTime:e.createTimer.time," ms"),m.Bb(2),m.tc("Updating random row: ",e.updateTimer.averageTime>0?e.updateTimer.averageTime:e.updateTimer.time," ms"),m.Bb(2),m.tc("Appending row: ",e.appendTimer.averageTime>0?e.appendTimer.averageTime:e.appendTimer.time," ms"),m.Bb(2),m.tc("Deleting random row: ",e.deleteTimer.averageTime>0?e.deleteTimer.averageTime:e.deleteTimer.time," ms"),m.Bb(2),m.tc("Selecting (reading) random row: ",e.readTimer.averageTime>0?e.readTimer.averageTime:e.readTimer.time," ms"),m.Bb(5),m.fc("ngForOf",e.dummyData))},directives:[c.b,c.e,l.a,s.g,s.b,n.j,u.a,h.a,n.k,b.g],styles:[".actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;padding:20px}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px}.example-viewport[_ngcontent-%COMP%]{height:80vh;width:90vw}.example-item[_ngcontent-%COMP%]{height:100%}.data-container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.data-list[_ngcontent-%COMP%], .data-table[_ngcontent-%COMP%]{flex:1}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.Kb({type:t}),t.\u0275inj=m.Jb({imports:[[r.b.forChild(T)],r.b]}),t})();var w=i("PCNd");let R=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.Kb({type:t}),t.\u0275inj=m.Jb({imports:[[n.c,f,w.a]]}),t})()}}]);