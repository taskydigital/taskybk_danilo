"use strict";(self.webpackChunktasky_tasker=self.webpackChunktasky_tasker||[]).push([[739],{7739:(D,f,o)=>{o.r(f),o.d(f,{AppointListModule:()=>N});var p=o(214),h=o(6870),c=o(3241),t=o(6637),m=o(1238),u=o(6090),_=o(9104),g=o(9818),x=o(5715),A=o(106),v=o(6213),Z=o(2767),T=o(4565);function w(a,l){if(1&a&&(t.TgZ(0,"div",23)(1,"div")(2,"strong"),t._uU(3,"Contacto:"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"div")(6,"strong"),t._uU(7,"Correo:"),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"div")(10,"strong"),t._uU(11,"Tel\xe9fono:"),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"div")(14,"strong"),t._uU(15,"Direcci\xf3n:"),t.qZA(),t._uU(16),t.qZA()()),2&a){const i=t.oxw(2).$implicit;t.xp6(4),t.hij(" ",i.contact,""),t.xp6(4),t.hij(" ",i.email,""),t.xp6(4),t.hij(" ",i.phone,""),t.xp6(4),t.hij(" ",i.address,"")}}function y(a,l){if(1&a){const i=t.EpF();t.TgZ(0,"div",9)(1,"div",10)(2,"div",11)(3,"div",12),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"div",13)(7,"mat-icon",14),t.NdJ("click",function(){t.CHM(i);const n=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.onchangefull(n))}),t._uU(8),t.qZA()()(),t.TgZ(9,"div",15)(10,"div",14),t.NdJ("click",function(){t.CHM(i);const n=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.buildHtml2Pdf(n.pollresult_id))}),t._uU(11),t.qZA(),t.TgZ(12,"div",16),t._uU(13),t.qZA()()(),t.YNc(14,w,17,4,"div",17),t.TgZ(15,"div",18)(16,"div",19),t._uU(17),t.qZA(),t.TgZ(18,"mat-icon",20),t.NdJ("click",function(){t.CHM(i);const n=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.onAddGoogleCalendar(n))}),t._uU(19,"calendar_month"),t.qZA(),t._uU(20," \xa0\xa0 "),t.TgZ(21,"div",21),t.NdJ("click",function(){t.CHM(i);const n=t.oxw().index,s=t.oxw(2);return t.KtG(s.onDoneAppoint(n))}),t.TgZ(22,"div",22),t._uU(23),t.qZA()()()()}if(2&a){const i=t.oxw().$implicit,e=t.oxw(2);t.xp6(4),t.Oqu(t.xi3(5,7,i.datetime,"MMM dd, yyyy hh:mm a")),t.xp6(4),t.Oqu(e.getAppIcon(i)),t.xp6(3),t.Oqu(i.costumer),t.xp6(2),t.Oqu(i.notes),t.xp6(1),t.Q6J("ngIf",i.full),t.xp6(3),t.Oqu(e.getOwner(i)),t.xp6(6),t.hij("",i.pollgrp_model_name," \u2714")}}function S(a,l){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,y,24,10,"div",8),t.qZA()),2&a){const i=l.$implicit,e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.appointVisible(i))}}function C(a,l){if(1&a&&(t.TgZ(0,"div",6),t.YNc(1,S,2,1,"div",7),t.qZA()),2&a){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.sharedvar.staff.appoint)}}function b(a,l){if(1&a&&(t.TgZ(0,"div",24),t._UZ(1,"app-map",25),t.qZA()),2&a){const i=t.oxw();t.xp6(1),t.Q6J("edit",!1)("markerlist",i.dataList)}}const L=[{path:"",component:(()=>{class a{constructor(i,e,n,s,r,d){this.sharedvar=i,this.snkBar=e,this.dtb=n,this.dg=s,this.htm2pdf=r,this.nvg=d,this.datafilterText="",this.switchview=!0,this.appointStatus={active:!0,date_ini:(new Date).getTime(),date_end:(new Date).getTime()},i.staff.appoint&&(i.staff.appoint=i.staff.appoint.sort(function($,J){return $.datetime-J.datetime}))}ngOnInit(){const i=this.sharedvar.dateTime2StartEnd(this.appointStatus.date_ini,this.appointStatus.date_end);this.appointStatus.active=!0,this.appointStatus.date_ini=i.date_ini,this.appointStatus.date_end=i.date_end,this.getText2Show()}getClicked(i){2===i.index&&this.filterDialog(),5===i.index&&this.getSwitched()}getSwitched(){if(this.dataList=[],this.switchview=!this.switchview,!1===this.switchview&&this.sharedvar.staff.appoint){let i=0;this.sharedvar.staff.appoint.forEach(e=>{this.appointVisible(e)&&(this.dataList.push({_id:`${this.sharedvar.staff._id}:${i}`,date_ini:e.datetime,date_end:e.dateend,geoLocStart:e.geoLoc,tasker_id:this.sharedvar.staff._id||"",tasker_name:this.sharedvar.staff.names+" "+(this.sharedvar.staff.lastnames||""),activity_id:e.pollgrp_id||"",activity_name:e.pollgrp_model_name||"No asignada",costumer_name:e.costumer||"",crm_products:[]}),i++)})}this.dataList.sort((i,e)=>Number(e.date_ini)-Number(i.date_ini))}filterDialog(){var i=this;this.dg.aDefault({schema:{controls:[{name:"active",label:"Activas",type:"checkbox",validators:{}},{name:"date_ini",label:"Fecha inicio:",type:"date",validators:{}},{name:"date_end",label:"Fecha final:",type:"date",validators:{}}]},title:"Filtros",value:this.appointStatus,dgwidth:250,dgheigth:350}).subscribe(function(){var s=(0,c.Z)(function*(r){if(r){const d=i.sharedvar.dateTime2StartEnd(r.date_ini,r.date_end);i.appointStatus.date_ini=d.date_ini,i.appointStatus.date_end=d.date_end,i.appointStatus.active=r.active,i.getText2Show()}});return function(r){return s.apply(this,arguments)}}())}getText2Show(){this.datafilterText=!0===this.appointStatus.active?"Activas":`\n      Fechas: ${this.sharedvar.formatNumber2Date(this.appointStatus.date_ini,"/")} - \n      ${this.sharedvar.formatNumber2Date(this.appointStatus.date_end,"/")}\n      `}appointVisible(i){let e=!0;return e=!0===this.appointStatus.active?!1===i.ended:!1===i.ended&&this.appointStatus.date_ini<i.datetime&&i.datetime<this.appointStatus.date_end,e}onchangefull(i){i.full=!i.full}getOwner(i){return i.owner!=this.sharedvar.staff._id?"De Administraci\xf3n":""}onAddGoogleCalendar(i){alert(`Agregar a google calendar ${i.costumer}`)}getAppIcon(i){return i.full?"expand_less":"expand_more"}onDoneAppoint(i){if(!this.sharedvar.staff.appoint||!this.sharedvar.staff.appoint[i])return;const e=this.sharedvar.staff.appoint[i].pollgrp_model_name;e&&e.length>0?this.onGet2Model(i):this.done(i)}done(i){this.snkBar.open("Finalizar agenda?.","Ok",{duration:5e3}).onAction().subscribe(e=>{this.sharedvar.staff.appoint&&(this.sharedvar.staff.appoint[i].ended=!0,this.sharedvar.staff.appoint[i].full=!1,this.dtb.updateStaffAsync(this.sharedvar.staff))})}onGet2Model(i){var e=this;return(0,c.Z)(function*(){if(!e.sharedvar.staff.appoint||!e.sharedvar.staff.appoint[i])return;const n=e.sharedvar.staff.appoint[i];if(e.sharedvar.pollExecListLocal.length>0)return void e.snkBar.open("Tiene actividades pendientes, intente m\xe1s tarde","Ok",{duration:5e3});const s=n.pollgrp_id||"0";e.snkBar.open(`Ejecutar Actividad: ${n.pollgrp_model_name}?.`,"Ok",{duration:5e3}).onAction().subscribe(function(){var r=(0,c.Z)(function*(d){n.ended=!0,n.full=!1,e.sharedvar.staff.appoint&&(e.sharedvar.staff.appoint[i]=n),e.dtb.updateStaffAsync(e.sharedvar.staff),yield e.dtb.onPollPartialSelected(s),e.nvg.onRouteDetail(`${e.sharedvar.pollExecSelected.name}/${e.sharedvar.pollExecSelected.model_name}`,"","poll",!0)});return function(d){return r.apply(this,arguments)}}())})()}buildHtml2Pdf(i){var e=this;return(0,c.Z)(function*(){if(void 0===i)return;const n=yield e.dtb.getPollResultAsync(i);e.htm2pdf.buildHtml2Pdf(n,null)})()}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(m.D),t.Y36(u.ux),t.Y36(_.k),t.Y36(g.x),t.Y36(x.Q),t.Y36(A.$))};static#i=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-appoint-list"]],decls:7,vars:4,consts:[[1,"flex","flex-col","h-full"],[3,"buttons","onClicked"],[1,"flex","flex-row","justify-center","content-center","text-violet-400","h-7","border-b","border-violet-500"],[1,"mt-1"],["class","overflow-auto p-2 flex flex-wrap justify-center gap-2",4,"ngIf"],["class","flex-1 m-2 h-screen overflow-scroll",4,"ngIf"],[1,"overflow-auto","p-2","flex","flex-wrap","justify-center","gap-2"],[4,"ngFor","ngForOf"],["class","p-1 w-96 border rounded-md border-violet-500",4,"ngIf"],[1,"p-1","w-96","border","rounded-md","border-violet-500"],[1,"h-24","items-center"],[1,"flex","flex-row","mt-1","gap-1","text-xs","text-violet-500"],[1,"flex-1"],[1,"flex"],[3,"click"],[1,"text-xs","ml-1"],[1,"ml-2","h-16","text-sm","text-gray-500","overflow-hidden"],["class","ml-2 p-1 bg-gray-100 text-xs text-gray-400",4,"ngIf"],[1,"flex","my-1","text-xs","text-violet-500"],[1,"grow","mt-1","font-medium","text-red-900"],[1,"hover:text-violet-600",3,"click"],[1,"min-w-min","border","border-violet-500","rounded-md","hover:text-violet-600",3,"click"],[1,"mt-1","px-1"],[1,"ml-2","p-1","bg-gray-100","text-xs","text-gray-400"],[1,"flex-1","m-2","h-screen","overflow-scroll"],[3,"edit","markerlist"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("onClicked",function(r){return n.getClicked(r)}),t.qZA(),t.TgZ(2,"div",2)(3,"span",3),t._uU(4),t.qZA()(),t.YNc(5,C,2,1,"div",4),t.YNc(6,b,2,2,"div",5),t.qZA()),2&e&&(t.xp6(1),t.Q6J("buttons","11100010"),t.xp6(3),t.Oqu(n.datafilterText),t.xp6(1),t.Q6J("ngIf",!0===n.switchview),t.xp6(1),t.Q6J("ngIf",!1===n.switchview))},dependencies:[p.sg,p.O5,v.Hw,Z.G,T.G,p.uU]})}return a})()}];let k=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#i=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(L),h.Bz]})}return a})();var U=o(1569),O=o(814);let N=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#i=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[p.ez,k,v.Ps,U.O,u.ZX,O.R]})}return a})()}}]);