"use strict";(self.webpackChunktasky_tasker=self.webpackChunktasky_tasker||[]).push([[902],{8902:(J,h,s)=>{s.r(h),s.d(h,{AppointListModule:()=>I});var f=s(6895),v=s(9132),c=s(5861),t=s(4650),x=s(5377),_=s(7009),g=s(8826),A=s(3028),Z=s(9496),y=s(2419),m=s(7392),T=s(3646);function b(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"div",18)(1,"mat-icon",16),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2).$implicit,o=t.oxw();return t.KtG(o.onchangefull(n))}),t._uU(2),t.qZA()()}if(2&a){const e=t.oxw(2).$implicit,i=t.oxw();t.xp6(2),t.Oqu(i.getAppIcon(e))}}function C(a,p){1&a&&(t.TgZ(0,"div",19),t._uU(1," FINALIZADO "),t.qZA())}function k(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"div",10)(1,"div",11)(2,"div",12),t._uU(3),t.ALo(4,"date"),t.qZA(),t.YNc(5,b,3,1,"div",13),t.YNc(6,C,2,0,"div",14),t.qZA(),t.TgZ(7,"div",15)(8,"div",16),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,o=t.oxw();return t.KtG(o.buildHtml2Pdf(n.pollresult_id))}),t._uU(9),t.qZA(),t.TgZ(10,"div",17),t._uU(11),t.qZA()()()}if(2&a){const e=t.oxw().$implicit;t.xp6(3),t.Oqu(t.xi3(4,5,e.datetime,"MMM dd, yyyy hh:mm a")),t.xp6(2),t.Q6J("ngIf",!0!==e.ended),t.xp6(1),t.Q6J("ngIf",!0===e.ended),t.xp6(3),t.Oqu(e.costumer),t.xp6(2),t.Oqu(e.notes)}}function w(a,p){if(1&a&&(t.TgZ(0,"div",20)(1,"div")(2,"strong"),t._uU(3,"Contacto:"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"div")(6,"strong"),t._uU(7,"Correo:"),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"div")(10,"strong"),t._uU(11,"Tel\xe9fono:"),t.qZA(),t._uU(12),t.qZA()()),2&a){const e=t.oxw().$implicit;t.xp6(4),t.hij(" ",e.contact,""),t.xp6(4),t.hij(" ",e.email,""),t.xp6(4),t.hij(" ",e.phone,"")}}function S(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"div",21)(1,"div")(2,"div",22),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().index,o=t.oxw();return t.KtG(o.onGet2Model(n))}),t.TgZ(3,"div",23),t._uU(4),t.qZA()()(),t._UZ(5,"div",24),t.TgZ(6,"div")(7,"mat-icon",25),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,o=t.oxw();return t.KtG(o.onAddGoogleCalendar(n))}),t._uU(8,"calendar_month"),t.qZA(),t.TgZ(9,"mat-icon",25),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().index,o=t.oxw();return t.KtG(o.onEditAppoint(n))}),t._uU(10,"edit"),t.qZA(),t.TgZ(11,"mat-icon",25),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().index,o=t.oxw();return t.KtG(o.onDelAppoint(n))}),t._uU(12,"delete_outline"),t.qZA(),t.TgZ(13,"mat-icon",25),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().index,o=t.oxw();return t.KtG(o.onDoneAppoint(n))}),t._uU(14,"done"),t.qZA()()()}if(2&a){const e=t.oxw().$implicit;t.xp6(4),t.hij("",e.pollgrp_model_name," >")}}function L(a,p){if(1&a&&(t.TgZ(0,"div",6),t.YNc(1,k,12,8,"div",7),t.YNc(2,w,13,3,"div",8),t.YNc(3,S,15,1,"div",9),t.qZA()),2&a){const e=p.$implicit,i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.appointVisible(e)),t.xp6(1),t.Q6J("ngIf",e.full),t.xp6(1),t.Q6J("ngIf",!0!==e.ended)}}const U=[{path:"",component:(()=>{class a{constructor(e,i,n,o,d,l){this.sharedvar=e,this.snkBar=i,this.dtb=n,this.dg=o,this.htm2pdf=d,this.nvg=l,this.datafilterText="",this.appointStatus={ended:!1,date:!0,date_ini:(new Date).getTime(),date_end:(new Date).getTime()},e.staff.appoint&&(e.staff.appoint=e.staff.appoint.sort(function(r,u){return r.datetime-u.datetime}))}ngOnInit(){if(!this.sharedvar.staff.appoint)return;let e=new Date,i=0;for(;i<this.sharedvar.staff.appoint.length;)e>new Date(this.sharedvar.staff.appoint[i].datetime)?this.sharedvar.staff.appoint.splice(i,1):i++;this.dtb.updateStaffAsync(this.sharedvar.staff),this.filterDialog()}getClicked(e){2===e.index&&this.filterDialog()}filterDialog(){var e=this;if(!1===this.appointStatus.date){const o=this.sharedvar.dateTime2StartEnd(this.appointStatus.date_ini,this.appointStatus.date_end);this.appointStatus.date_ini=o.date_ini,this.appointStatus.date_end=o.date_end}this.dg.aDefault({schema:{controls:[{name:"ended",label:"Incluir finalizados",type:"checkbox",validators:{}},{name:"date",label:"Filtar por fecha",type:"checkbox",validators:{}},{name:"date_ini",label:"Fecha inicio:",type:"date",validators:{}},{name:"date_end",label:"Fecha final:",type:"date",validators:{}}]},title:"Filtros",value:this.appointStatus,dgwidth:250,dgheigth:400}).subscribe(function(){var o=(0,c.Z)(function*(d){if(d){e.appointStatus.ended=!0===d.ended;let l=0,r=99999999999999;if(e.appointStatus.date=d.date,!0===d.date){const u=e.sharedvar.dateTime2StartEnd(d.date_ini,d.date_end);l=u.date_ini,r=u.date_end}e.appointStatus.date_ini=l,e.appointStatus.date_end=r,e.datafilterText=e.appointStatus.ended?"Incluye finalizados ":"",e.datafilterText=`${e.datafilterText}\n         Fechas: ${e.sharedvar.formatNumber2Date(e.appointStatus.date_ini,"/")} - \n         ${e.sharedvar.formatNumber2Date(e.appointStatus.date_end,"/")}\n         `}});return function(d){return o.apply(this,arguments)}}())}appointVisible(e){let i=!1===e.ended||!0===this.appointStatus.ended&&!0===e.ended;return i=i&&this.appointStatus.date_end>e.datetime&&this.appointStatus.date_ini<e.datetime,i}onchangefull(e){e.full=!e.full}onAddGoogleCalendar(e){alert(`Agregar a google calendar ${e.costumer}`)}getAppIcon(e){return e.full?"expand_less":"expand_more"}onDelAppoint(e){!this.sharedvar.staff.appoint||0===this.sharedvar.staff.appoint.length||this.snkBar.open("Eliminar item de la agenda?.","Ok",{duration:5e3}).onAction().subscribe(i=>{this.sharedvar.staff.appoint?.splice(e,1),this.dtb.updateStaffAsync(this.sharedvar.staff)})}onDoneAppoint(e){this.sharedvar.staff.appoint&&this.sharedvar.staff.appoint[e]&&this.snkBar.open("Finalizar agenda?.","Ok",{duration:5e3}).onAction().subscribe(i=>{this.sharedvar.staff.appoint&&(this.sharedvar.staff.appoint[e].ended=!0,this.sharedvar.staff.appoint[e].full=!1,this.dtb.updateStaffAsync(this.sharedvar.staff))})}onGet2Model(e){var i=this;return(0,c.Z)(function*(){if(!i.sharedvar.staff.appoint||!i.sharedvar.staff.appoint[e])return;const n=i.sharedvar.staff.appoint[e].pollgrp_id||"0";i.snkBar.open(`Ejecutar Actividad: ${i.sharedvar.staff.appoint[e].pollgrp_model_name}?.`,"Ok",{duration:5e3}).onAction().subscribe(function(){var o=(0,c.Z)(function*(d){yield i.dtb.onPollPartialSelected(n),i.nvg.onRouteDetail(`${i.sharedvar.pollExecSelected.name}/${i.sharedvar.pollExecSelected.model_name}`,"","poll",!0)});return function(d){return o.apply(this,arguments)}}())})()}onEditAppoint(e){var i=this;if(!this.sharedvar.staff.appoint||!this.sharedvar.staff.appoint[e])return;let o="Editar agenda: ";this.sharedvar.staff.appoint&&this.sharedvar.staff.appoint[e].costumer&&(o+=this.sharedvar.staff.appoint[e].costumer),this.dg.aDefault({schema:{controls:[{name:"datetime",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"notes",label:"Actividad/Compromiso:",type:"textarea",totalRows:4,style:"w-full",validators:{required:!0}}]},value:this.sharedvar.staff.appoint[e],title:o,dgwidth:400,dgheigth:400}).subscribe(function(){var l=(0,c.Z)(function*(r){r&&i.sharedvar.staff.appoint&&(i.sharedvar.staff.appoint[e].datetime=r.datetime,i.sharedvar.staff.appoint[e].notes=r.notes,i.dtb.updateStaffAsync(i.sharedvar.staff))});return function(r){return l.apply(this,arguments)}}())}buildHtml2Pdf(e){var i=this;return(0,c.Z)(function*(){if(void 0===e)return;const n=yield i.dtb.getPollResultAsync(e);i.htm2pdf.buildHtml2Pdf(n,null)})()}static#t=this.\u0275fac=function(i){return new(i||a)(t.Y36(x.D),t.Y36(_.ux),t.Y36(g.k),t.Y36(A.x),t.Y36(Z.Q),t.Y36(y.$))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-appoint-list"]],decls:7,vars:3,consts:[[1,"flex","flex-col","h-full"],[3,"buttons","onClicked"],[1,"flex","flex-row","justify-center","content-center","text-violet-400","h-7","border-b","border-violet-500"],[1,"mt-1"],[1,"overflow-auto","p-2","flex","flex-wrap","justify-center","gap-2"],["class","p-1 w-96 border rounded-md border-violet-500",4,"ngFor","ngForOf"],[1,"p-1","w-96","border","rounded-md","border-violet-500"],["class","h-24 items-center ",4,"ngIf"],["class","ml-2 p-1 bg-gray-100 text-xs text-gray-400",4,"ngIf"],["class","flex my-1 justify-end text-xs text-violet-500",4,"ngIf"],[1,"h-24","items-center"],[1,"flex","flex-row","mt-1","gap-1","text-xs","text-violet-500"],[1,"flex-1"],["class","flex",4,"ngIf"],["class","text-violet-500 pr-2 font-medium",4,"ngIf"],[1,"text-xs","ml-1"],[3,"click"],[1,"ml-2","h-16","text-sm","text-gray-500","overflow-hidden"],[1,"flex"],[1,"text-violet-500","pr-2","font-medium"],[1,"ml-2","p-1","bg-gray-100","text-xs","text-gray-400"],[1,"flex","my-1","justify-end","text-xs","text-violet-500"],[1,"border","border-violet-500","rounded-md","hover:text-violet-600",3,"click"],[1,"mt-1","px-1"],[1,"w-6"],[1,"hover:text-violet-600",3,"click"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("onClicked",function(d){return n.getClicked(d)}),t.qZA(),t.TgZ(2,"div",2)(3,"span",3),t._uU(4),t.qZA()(),t.TgZ(5,"div",4),t.YNc(6,L,4,3,"div",5),t.qZA()()),2&i&&(t.xp6(1),t.Q6J("buttons","11100000"),t.xp6(3),t.Oqu(n.datafilterText),t.xp6(2),t.Q6J("ngForOf",n.sharedvar.staff.appoint))},dependencies:[f.sg,f.O5,m.Hw,T.G,f.uU]})}return a})()}];let D=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275mod=t.oAB({type:a});static#i=this.\u0275inj=t.cJS({imports:[v.Bz.forChild(U),v.Bz]})}return a})();var F=s(8471);let I=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275mod=t.oAB({type:a});static#i=this.\u0275inj=t.cJS({imports:[f.ez,D,m.Ps,F.O,_.ZX]})}return a})()}}]);