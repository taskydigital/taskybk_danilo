"use strict";(self.webpackChunktasky_tasker=self.webpackChunktasky_tasker||[]).push([[99],{3099:(F,u,n)=>{n.r(u),n.d(u,{AccountStatusModule:()=>b});var l=n(214),f=n(6870),r=n(3241),t=n(6637),h=n(1238),v=n(9104),g=n(3832),x=n(5715),A=n(2767);function y(i,m){if(1&i&&(t.TgZ(0,"div",13),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.price),"")}}function S(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"div",4),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.buildHtml2Pdf(a._id))}),t._UZ(1,"img",5),t.TgZ(2,"div",6)(3,"div",7),t._uU(4),t.qZA(),t.TgZ(5,"div",8)(6,"div",9),t._uU(7,"Cliente:\xa0"),t.qZA(),t.TgZ(8,"div"),t._uU(9),t.qZA()(),t.TgZ(10,"div",10)(11,"div"),t._uU(12),t.qZA(),t.TgZ(13,"div",11),t._uU(14),t.ALo(15,"date"),t.qZA()()(),t.YNc(16,y,3,3,"div",12),t.qZA()}if(2&i){const e=m.$implicit,o=t.oxw();t.xp6(1),t.Q6J("src",e.activity_logo||"./assets/images/favicon.png",t.LSH),t.xp6(3),t.Oqu(e.activity_name),t.xp6(5),t.Oqu(e.crm_costum_name||""),t.xp6(3),t.hij("",o.STATUS_STR[e.status],": "),t.xp6(2),t.Oqu(t.xi3(15,6,e.status_date,"dd/MM/yy hh:mm")),t.xp6(2),t.Q6J("ngIf",e.price&&e.price>0)}}const T=[{path:"",component:(()=>{class i{constructor(e,o,s,a){this.sharedvar=e,this.dtb=o,this.dg=s,this.htm2pdf=a,this.STATUS_STR=["Ninguno","Seleccionado","En proceso","Finalizado","Aprobado"]}ngOnInit(){var e=this;return(0,r.Z)(function*(){e.filterDialog()})()}getClicked(e){2===e.index&&this.filterDialog()}filterDialog(){var e=this;let s=new Date;s.setHours(0,0,0,0);let a={status:"3",date_ini:s.getTime(),date_end:s.getTime()};this.dg.aDefault({schema:{controls:[{name:"status",label:"Estado:",type:"select",validators:{},selectOptions:[{key:"3",value:"Finalizado"},{key:"4",value:"Aprobado"},{key:"5",value:"pagado"}]},{name:"date_ini",label:"Fecha inicio:",type:"date",validators:{}},{name:"date_end",label:"Fecha final:",type:"date",validators:{}}]},title:"Filtros",value:a,dgwidth:250,dgheigth:400}).subscribe(function(){var _=(0,r.Z)(function*(d){if(d){const p=e.sharedvar.dateTime2StartEnd(d.date_ini,d.date_end);e.resultStatusList=yield e.dtb.getPollResultByStatusAsync(d.status||3,p.date_ini,p.date_end)}});return function(d){return _.apply(this,arguments)}}())}buildHtml2Pdf(e){var o=this;return(0,r.Z)(function*(){o.htm2pdf.buildHtml2Pdf(e,null)})()}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(h.D),t.Y36(v.k),t.Y36(g.x),t.Y36(x.Q))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-account-status"]],decls:4,vars:2,consts:[[1,"flex","flex-col","h-full"],[3,"buttons","onClicked"],[1,"flex-1","overflow-auto"],["class","flex h-20 w-full flex-row text-sm border-b border-slate-200",3,"click",4,"ngFor","ngForOf"],[1,"flex","h-20","w-full","flex-row","text-sm","border-b","border-slate-200",3,"click"],["alt","logo",1,"h-12","w-12","rounded-md","object-fill","p-1",3,"src"],[1,"flex","grow","flex-col","justify-start"],[1,"grow","pl-2","text-lg"],[1,"pl-2","flex","flex-row","h-14","w-full","text-sm","text-slate-700"],[1,"font-medium"],[1,"flex","flex-row","pl-2","h-14","w-full","text-sm","font-medium","text-slate-700"],[1,"pl-2","text-blue-700"],["class","pt-1 text-red-700 font-semibold",4,"ngIf"],[1,"pt-1","text-red-700","font-semibold"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("onClicked",function(c){return s.getClicked(c)}),t.qZA(),t.TgZ(2,"div",2),t.YNc(3,S,17,9,"div",3),t.qZA()()),2&o&&(t.xp6(1),t.Q6J("buttons","11100000"),t.xp6(2),t.Q6J("ngForOf",s.resultStatusList))},dependencies:[l.sg,l.O5,A.G,l.H9,l.uU]})}return i})()}];let Z=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[f.Bz.forChild(T),f.Bz]})}return i})();var C=n(1569);let b=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[l.ez,Z,C.O]})}return i})()}}]);