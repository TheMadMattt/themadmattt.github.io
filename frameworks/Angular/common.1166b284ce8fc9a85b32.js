(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{H0VJ:function(t,e,i){"use strict";i.d(e,"a",function(){return y});var o=i("0IaG"),r=i("3Pt+"),s=i("fXoL"),n=(i("PhQA"),i("kmnG")),a=i("qFsG"),c=i("ofXK"),l=i("bTqV");function m(t,e){1&t&&(s.Sb(0,"mat-error"),s.Ac(1,"Enter some value"),s.Rb())}function d(t,e){1&t&&(s.Sb(0,"mat-error"),s.Ac(1,"Enter some value"),s.Rb())}let b=(()=>{class t{constructor(t,e,i){this.dialogRef=t,this.post=e,this.fb=i,this.isEditing=!1,this.errorHandling=(t,e)=>this.postForm.controls[t].hasError(e)}ngOnInit(){this.isEditing=""!==this.post.title,this.postForm=this.fb.group({title:[null,r.o.required],body:[null,r.o.required]}),this.postForm.patchValue(this.post)}onSubmit(){if(this.postForm.invalid)return void this.postForm.markAllAsTouched();const t=this.postForm.getRawValue();this.post.title=t.title,this.post.body=t.body,this.dialogRef.close(this.post)}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(o.f),s.Nb(o.a),s.Nb(r.c))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-post-form"]],decls:20,vars:6,consts:[["mat-dialog-title",""],["novalidate","",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","title","type","text"],[4,"ngIf"],["matInput","","formControlName","body"],["mat-dialog-actions","","align","end"],["mat-raised-button","","color","primary",3,"mat-dialog-close"],["mat-raised-button","","color","primary","type","submit",3,"click"]],template:function(t,e){1&t&&(s.Sb(0,"div",0),s.Sb(1,"h1"),s.Ac(2),s.Rb(),s.Rb(),s.Sb(3,"div"),s.Sb(4,"form",1),s.Sb(5,"mat-form-field",2),s.Sb(6,"mat-label"),s.Ac(7,"Title"),s.Rb(),s.Ob(8,"input",3),s.yc(9,m,2,0,"mat-error",4),s.Rb(),s.Sb(10,"mat-form-field",2),s.Sb(11,"mat-label"),s.Ac(12,"Body"),s.Rb(),s.Ob(13,"textarea",5),s.yc(14,d,2,0,"mat-error",4),s.Rb(),s.Rb(),s.Rb(),s.Sb(15,"div",6),s.Sb(16,"button",7),s.Ac(17,"Close"),s.Rb(),s.Sb(18,"button",8),s.Zb("click",function(){return e.onSubmit()}),s.Ac(19),s.Rb(),s.Rb()),2&t&&(s.Bb(2),s.Bc(e.isEditing?"Edit post":"Add post"),s.Bb(2),s.jc("formGroup",e.postForm),s.Bb(5),s.jc("ngIf",e.errorHandling("title","required")),s.Bb(5),s.jc("ngIf",e.errorHandling("body","required")),s.Bb(2),s.jc("mat-dialog-close",null),s.Bb(3),s.Cc(" ",e.isEditing?"Edit post":"Add post"," "))},directives:[o.g,r.p,r.l,r.g,n.c,n.g,a.a,r.b,r.k,r.f,c.l,o.c,l.a,o.d,n.b],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column}mat-form-field[_ngcontent-%COMP%]{min-width:400px}@media (max-width:599px){mat-form-field[_ngcontent-%COMP%]{width:100%;min-width:0}}"]}),t})();i("XcCA");var u=i("bSwM");function p(t,e){1&t&&(s.Sb(0,"mat-error"),s.Ac(1,"Enter some value"),s.Rb())}function f(t,e){1&t&&(s.Sb(0,"mat-error"),s.Ac(1,"Enter some value"),s.Rb())}let h=(()=>{class t{constructor(t,e,i){this.dialogRef=t,this.task=e,this.fb=i,this.isEditing=!1,this.errorHandling=(t,e)=>this.taskForm.controls[t].hasError(e)}ngOnInit(){this.isEditing=""!==this.task.title,this.taskForm=this.fb.group({title:[null,r.o.required],description:[null,r.o.required],completed:[!1,r.o.required]}),this.taskForm.patchValue(this.task)}onSubmit(){if(this.taskForm.invalid)return void this.taskForm.markAllAsTouched();const t=this.taskForm.getRawValue();this.task.title=t.title,this.task.description=t.description,this.dialogRef.close(this.task)}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(o.f),s.Nb(o.a),s.Nb(r.c))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-task-form"]],decls:22,vars:6,consts:[["mat-dialog-title",""],["novalidate","",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","title","type","text"],[4,"ngIf"],["matInput","","formControlName","description"],["formControlName","completed"],["mat-dialog-actions","","align","end"],["mat-raised-button","","color","primary",3,"mat-dialog-close"],["mat-raised-button","","color","primary","type","submit",3,"click"]],template:function(t,e){1&t&&(s.Sb(0,"div",0),s.Sb(1,"h1"),s.Ac(2),s.Rb(),s.Rb(),s.Sb(3,"div"),s.Sb(4,"form",1),s.Sb(5,"mat-form-field",2),s.Sb(6,"mat-label"),s.Ac(7,"Title"),s.Rb(),s.Ob(8,"input",3),s.yc(9,p,2,0,"mat-error",4),s.Rb(),s.Sb(10,"mat-form-field",2),s.Sb(11,"mat-label"),s.Ac(12,"Description"),s.Rb(),s.Ob(13,"textarea",5),s.yc(14,f,2,0,"mat-error",4),s.Rb(),s.Sb(15,"mat-checkbox",6),s.Ac(16,"Is task completed?"),s.Rb(),s.Rb(),s.Rb(),s.Sb(17,"div",7),s.Sb(18,"button",8),s.Ac(19,"Close"),s.Rb(),s.Sb(20,"button",9),s.Zb("click",function(){return e.onSubmit()}),s.Ac(21),s.Rb(),s.Rb()),2&t&&(s.Bb(2),s.Bc(e.isEditing?"Edit task":"Add task"),s.Bb(2),s.jc("formGroup",e.taskForm),s.Bb(5),s.jc("ngIf",e.errorHandling("title","required")),s.Bb(5),s.jc("ngIf",e.errorHandling("description","required")),s.Bb(4),s.jc("mat-dialog-close",null),s.Bb(3),s.Cc(" ",e.isEditing?"Edit post":"Add post"," "))},directives:[o.g,r.p,r.l,r.g,n.c,n.g,a.a,r.b,r.k,r.f,c.l,u.a,o.c,l.a,o.d,n.b],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column}mat-form-field[_ngcontent-%COMP%]{min-width:400px}@media (max-width:599px){mat-form-field[_ngcontent-%COMP%]{width:100%;min-width:0}}"]}),t})();function g(t,e){if(1&t&&(s.Sb(0,"li"),s.Ac(1),s.ec(2,"number"),s.Rb()),2&t){const t=e.$implicit;s.Bb(1),s.Cc(" ",s.gc(2,1,t,".5-5")," ms ")}}function v(t,e){if(1&t&&(s.Sb(0,"div",3),s.Sb(1,"div",4),s.Sb(2,"p"),s.Sb(3,"b"),s.Ac(4,"Average time:"),s.Rb(),s.Ac(5),s.ec(6,"number"),s.Rb(),s.Rb(),s.Sb(7,"ul",5),s.yc(8,g,3,4,"li",6),s.Rb(),s.Rb()),2&t){const t=s.dc();s.Bb(5),s.Cc(" ",t.data.timer.averageTime>0?s.gc(6,2,t.data.timer.averageTime,".5-5")+" ms":"Too few measurements",""),s.Bb(3),s.jc("ngForOf",t.data.timer.times)}}function S(t,e){1&t&&(s.Sb(0,"div",5),s.Ac(1," No times to show. "),s.Rb())}let R=(()=>{class t{constructor(t){this.data=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(o.a))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-display-time-list"]],decls:6,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content","",4,"ngIf","ngIfElse"],["noTimesAvailable",""],["mat-dialog-content",""],[1,"average-time"],[1,"dropdown-overlay"],[4,"ngFor","ngForOf"]],template:function(t,e){if(1&t&&(s.Sb(0,"div",0),s.Sb(1,"h1"),s.Ac(2),s.Rb(),s.Rb(),s.yc(3,v,9,5,"div",1),s.yc(4,S,2,0,"ng-template",null,2,s.zc)),2&t){const t=s.oc(5);s.Bb(2),s.Bc(e.data.title),s.Bb(1),s.jc("ngIf",e.data.timer.times.length>0)("ngIfElse",t)}},directives:[c.l,c.k],pipes:[c.e],styles:[".average-time[_ngcontent-%COMP%]{text-align:center}"]}),t})(),y=(()=>{class t{constructor(t){this.dialog=t}openPostForm(t){return this.dialog.open(b,{data:t}).afterClosed()}openTaskForm(t){return this.dialog.open(h,{data:t}).afterClosed()}openTimeList(t,e){return this.dialog.open(R,{data:{title:t,timer:e}}).afterClosed()}}return t.\u0275fac=function(e){return new(e||t)(s.Wb(o.b))},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},PhQA:function(t,e,i){"use strict";i.d(e,"a",function(){return o});class o{constructor(){this.id=-1,this.title="",this.body=""}setPost(t,e,i){this.id=t,this.title=e,this.body=i}}},XcCA:function(t,e,i){"use strict";i.d(e,"a",function(){return o});class o{constructor(){this.id=-1,this.title="",this.description="",this.completed=!1}setTask(t,e,i,o){this.id=t,this.title=e,this.description=i,this.completed=o}}},nCue:function(t,e,i){"use strict";i.d(e,"a",function(){return o});class o{constructor(t){this.timerName="",this.startTime=0,this.endTime=0,this.totalTime=0,this.times=[],this.averageTime=0,this.timerName=t}startTimer(){this.startTime=performance.now()}stopTimer(){0!==this.startTime&&(this.endTime=performance.now(),this.totalTime=this.endTime-this.startTime,this.times.push(this.totalTime),this.times.length>2&&this.getAverageTime())}getAverageTime(){const t=this.times.reduce((t,e)=>t+e);return this.averageTime=t/this.times.length,this.averageTime}clear(){this.startTime=0,this.endTime=0,this.totalTime=0,this.times=[],this.averageTime=0}}},uqf4:function(t,e,i){"use strict";i.d(e,"a",function(){return d});var o=i("fXoL"),r=i("H0VJ"),s=i("ofXK"),n=i("bTqV"),a=i("TU8p"),c=i("NFeN");function l(t,e){if(1&t&&(o.Sb(0,"div"),o.Sb(1,"h3"),o.Ac(2),o.ec(3,"number"),o.ec(4,"number"),o.Rb(),o.Rb()),2&t){const t=o.dc();o.Bb(2),o.Cc("",t.timer.averageTime>0?o.gc(3,1,t.timer.averageTime,".5-5"):o.gc(4,4,t.timer.totalTime,".5-5")," ms")}}function m(t,e){if(1&t&&(o.Sb(0,"p",5),o.Ac(1),o.Rb()),2&t){const t=o.dc();o.Bb(1),o.Bc(t.errorMessage)}}let d=(()=>{class t{constructor(t){this.dialogService=t,this.isError=!1,this.showAllTimes=!1}openTimeList(){this.dialogService.openTimeList(this.title,this.timer)}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(r.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-display-time"]],inputs:{title:"title",timer:"timer",isError:"isError",errorMessage:"errorMessage"},decls:10,vars:4,consts:[[1,"display-time-container"],[4,"ngIf","ngIfElse"],["mat-flat-button","","type","button","matBadgePosition","after","matBadgeColor","accent",3,"matBadge"],[3,"click"],["noError",""],[1,"error"]],template:function(t,e){if(1&t&&(o.Sb(0,"div",0),o.Sb(1,"h3"),o.Sb(2,"strong"),o.Ac(3),o.Rb(),o.Rb(),o.yc(4,l,5,7,"div",1),o.Sb(5,"button",2),o.Sb(6,"mat-icon",3),o.Zb("click",function(){return e.openTimeList()}),o.Ac(7,"expand_more"),o.Rb(),o.Rb(),o.Rb(),o.yc(8,m,2,1,"ng-template",null,4,o.zc)),2&t){const t=o.oc(9);o.Bb(3),o.Bc(e.title),o.Bb(1),o.jc("ngIf",!e.isError)("ngIfElse",t),o.Bb(1),o.jc("matBadge",e.timer.times.length)}},directives:[s.l,n.a,a.a,c.a],pipes:[s.e],styles:[".display-time-container[_ngcontent-%COMP%]{padding:10px;text-align:center;border:2px solid #000;margin:5px}.error[_ngcontent-%COMP%]{color:red}"]}),t})()}}]);