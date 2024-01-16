"use strict";(self.webpackChunktasky_tasker=self.webpackChunktasky_tasker||[]).push([[993],{7993:(b,g,c)=>{c.r(g),c.d(g,{PollModule:()=>oe});var p=c(6895),u=c(9132),d=c(5861),S=c(6599);class P extends Error{constructor(){super("Request was cancelled"),this.name="CancelError"}get isCanceled(){return!0}}class R extends Error{constructor(v){super("Could not get the public IP address",v),this.name="IpNotFoundError"}}const _={timeout:5e3},h={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},M=(n,v,e)=>{const l=new XMLHttpRequest;let a;const s=new Promise((i,o)=>{a=o,l.addEventListener("error",o,{once:!0}),l.addEventListener("timeout",o,{once:!0}),l.addEventListener("load",()=>{const f=l.responseText.trim();f&&S[e](f)?i(f):o()},{once:!0}),l.open("GET",n),l.timeout=v.timeout,l.send()});return s.cancel=()=>{l.abort(),a(new P)},s},A=(n,v)=>{let e;const l=(0,d.Z)(function*(){const a=[...h[n],...v.fallbackUrls??[]];let s;for(const i of a)try{return e=M(i,v,n),yield e}catch(o){if(s=o,o instanceof P)throw o}throw new R({cause:s})})();return l.cancel=()=>{e.cancel()},l},O={v4:n=>A("v4",{..._,...n}),v6:n=>A("v6",{..._,...n})};function w(){return(w=(0,d.Z)(function*(n){if(n={timeout:5e3,ipVersion:4,...n},!navigator?.onLine)return!1;const v=4===n.ipVersion?"v4":"v6";try{return yield O[v](n),!0}catch{return!1}})).apply(this,arguments)}var t=c(4650),N=c(8826),D=c(7009),J=c(164),L=c(5412),Z=c(4859),$=c(7392),y=c(8255),k=c(4006);function U(n,v){if(1&n){const e=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"input",13),t.NdJ("change",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onChekAll())}),t.qZA()(),t.TgZ(3,"mat-icon",14),t._uU(4),t.qZA(),t.TgZ(5,"input",15),t.NdJ("ngModelChange",function(a){t.CHM(e);const s=t.oxw();return t.KtG(s.filtertext=a)})("change",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onViewSelected(!1))}),t.qZA()()}if(2&n){const e=t.oxw(),l=t.MAs(15);t.xp6(2),t.Q6J("checked",e.chekAll),t.xp6(1),t.Q6J("matMenuTriggerFor",l),t.xp6(1),t.Oqu(e.getView()),t.xp6(1),t.Q6J("ngModel",e.filtertext)}}function B(n,v){if(1&n){const e=t.EpF();t.TgZ(0,"div",18)(1,"input",19),t.NdJ("ngModelChange",function(a){t.CHM(e);const s=t.oxw().$implicit;return t.KtG(s.selected=a)}),t.qZA(),t.TgZ(2,"label",20),t._uU(3),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngModel",e.selected),t.xp6(2),t.Oqu(e.name)}}function I(n,v){if(1&n&&(t.TgZ(0,"div",16),t.YNc(1,B,4,2,"div",17),t.qZA()),2&n){const e=v.$implicit,l=t.oxw();t.xp6(1),t.Q6J("ngIf",l.getViewFilter(e))}}function V(n,v){if(1&n){const e=t.EpF();t.TgZ(0,"div",21)(1,"button",7),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onNew())}),t._uU(2," Nuevo\xa0 "),t.TgZ(3,"mat-icon"),t._uU(4,"add"),t.qZA()()()}}let G=(()=>{class n{constructor(e,l){this.dialogRef=e,this.data=l,this.filtertext="",this.selectedOptions=[],this.chekAll=!1,this.viewSelected=!1,e.disableClose=!0}onNew(){this.dialogRef.close({new:!0})}onChekAll(){this.chekAll=!this.chekAll,this.data.valuelst?.forEach(e=>{e.selected=this.chekAll})}getViewFilter(e){if(this.viewSelected)return e.selected||!1;const l=this.filtertext.toUpperCase();return!!(0===l.length||e&&e.name&&e.name.toUpperCase().includes(l))}onSave(){this.selectedOptions=[],this.data.valuelst?.forEach(e=>{e.selected&&this.selectedOptions.push(e)}),this.dialogRef.close(this.selectedOptions)}onDismiss(){this.dialogRef.close()}getView(){return this.viewSelected?"done":"visibility"}onViewSelected(e){this.viewSelected=e}static#e=this.\u0275fac=function(l){return new(l||n)(t.Y36(L.so),t.Y36(L.WI))};static#t=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-select-dialog"]],decls:24,vars:4,consts:[[1,"flex","flex-col","h-full"],[1,"h-12","p-3","text-2xl","bg-violet-600","text-white"],["class","h-10 w-full flex flex-row items-center border-b border-violet-500",4,"ngIf"],[1,"flex-1","overflow-auto","mt-2"],["class","flex flex-column",4,"ngFor","ngForOf"],[1,"flex","p-3","justify-end","border-t","border-violet-500"],["class","flex-1","fxFlex","",4,"ngIf"],["mat-stroked-button","","color","warn",3,"click"],["mat-stroked-button","","color","primary","cdkFocusInitia","",3,"click"],["selectView","matMenu"],["mat-menu-item","",3,"click"],[1,"h-10","w-full","flex","flex-row","items-center","border-b","border-violet-500"],[1,"w-6","ml-2","mt-2"],["type","checkbox",1,"w-4","h-4","focus:border-blue-500",3,"checked","change"],[1,"bg-gray-200","rounded-sm",3,"matMenuTriggerFor"],["type","search","placeholder","Filtrar...",1,"flex-1","ml-2","h-8","z-20","text-gray-900","outline-none","border-b","border-gray-200","focus:outline-none","focus:outline-none",3,"ngModel","ngModelChange","change"],[1,"flex","flex-column"],["class","flex flex-row h-7 ml-2",4,"ngIf"],[1,"flex","flex-row","h-7","ml-2"],["id","itemsel","type","checkbox",1,"w-4","h-4","text-violet-500","bg-gray-100","border-gray-300","rounded","dark:focus:ring-violet-500","dark:ring-offset-gray-800","focus:ring-2","dark:bg-gray-700","dark:border-gray-600",3,"ngModel","ngModelChange"],["for","itemsel",1,"ml-4","h-4","w-72","text-sm","text-gray-900","overflow-hidden"],["fxFlex","",1,"flex-1"]],template:function(l,a){1&l&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2),t.qZA(),t.YNc(3,U,6,4,"div",2),t.TgZ(4,"div",3),t.YNc(5,I,2,1,"div",4),t.qZA(),t.TgZ(6,"div",5),t.YNc(7,V,5,0,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return a.onDismiss()}),t.TgZ(9,"mat-icon"),t._uU(10,"close"),t.qZA()(),t.TgZ(11,"button",8),t.NdJ("click",function(){return a.onSave()}),t.TgZ(12,"mat-icon"),t._uU(13,"done"),t.qZA()()(),t.TgZ(14,"mat-menu",null,9)(16,"button",10),t.NdJ("click",function(){return a.onViewSelected(!0)}),t.TgZ(17,"mat-icon"),t._uU(18,"done"),t.qZA(),t._uU(19," Ver seleccionados "),t.qZA(),t.TgZ(20,"button",10),t.NdJ("click",function(){return a.onViewSelected(!1)}),t.TgZ(21,"mat-icon"),t._uU(22,"visibility"),t.qZA(),t._uU(23," Ver Todo "),t.qZA()()()),2&l&&(t.xp6(2),t.Oqu(a.data.title),t.xp6(1),t.Q6J("ngIf",a.data.viewfilter),t.xp6(2),t.Q6J("ngForOf",a.data.valuelst),t.xp6(2),t.Q6J("ngIf",a.data.viewAdd))},dependencies:[p.sg,p.O5,Z.lW,$.Hw,y.VK,y.OP,y.p6,k.Fj,k.Wl,k.JJ,k.On]})}return n})(),Y=(()=>{class n{constructor(e){this.dialog=e}aSelectDefault(e){let l=window.innerHeight-20;return e.dgheigth=e.dgheigth||l,l=l>600?600:l,this.dialogRef=this.dialog.open(G,{panelClass:"custom-dialog-container",height:l.toString()+"px",width:"350px",data:e}),this.dialogRef.afterClosed()}static#e=this.\u0275fac=function(l){return new(l||n)(t.LFG(L.uw))};static#t=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var H=c(2419),z=c(5377),q=c(1316),Q=c(9496),K=c(3646),j=c(2395);function W(n,v){if(1&n){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onBack())}),t.TgZ(1,"mat-icon"),t._uU(2,"arrow_back"),t.qZA()()}}function X(n,v){if(1&n){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onEndPoll())}),t._uU(1," Finalizar"),t.TgZ(2,"mat-icon"),t._uU(3,"done"),t.qZA()()}}function ee(n,v){if(1&n){const e=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onDelete())}),t.TgZ(1,"mat-icon"),t._uU(2,"delete"),t.qZA()()}}const te=[{path:"",component:(()=>{class n{constructor(e,l,a,s,i,o,f,x){this.dtb=e,this.snkBar=l,this.dg=a,this.ds=s,this.nvg=i,this.sharedvar=o,this.notifServ=f,this.htm2pdf=x,this.lchat=!1,this.goto=[],this.reset=0}ngOnInit(){var e=this;return(0,d.Z)(function*(){e.sharedvar.pollExecSelected.pollList.length>0?(e.selectedPoll=e.sharedvar.pollExecSelected.pollList[0],e.goto.push(e.selectedPoll.id)):(e.snkBar.open("Listado de actividades vac\xedo.","Ok",{duration:5e3}),e.nvg.onRouteBack());const l=e.dtb.getLocalPollResult(e.sharedvar.pollExecSelected.pollResult_id).subscribe(a=>{l&&l.unsubscribe(),e.sharedvar.selPollResult=a,e.sharedvar.selPollResult.status<2&&e.OnStartPoll(),e.subscribeChatEvent(),e.sharedvar.pollExecSelected.done&&e.onEndPoll()})})()}OnStartPoll(){var e=this;return(0,d.Z)(function*(){e.sharedvar.selPollResult.status=2,e.sharedvar.selPollResult.date_ini=1e4*Math.trunc(Number(Date.now())/1e4),e.sharedvar.pollExecSelected.onStart&&(e.sharedvar.pollExecSelected.onStart.sendMail2&&e.sharedvar.pollExecSelected.onStart.sendMail2.length>0&&e.dtb.notifMail(e.sharedvar.selPollResult,e.sharedvar.pollExecSelected.onStart.sendMail2,"","start"),e.sharedvar.pollExecSelected.onStart.geoLoc&&(e.sharedvar.selPollResult.geoLocStart=yield e.getLocalization())),e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult),e.dtb.updatePartialAsync(e.sharedvar.selPollResult,"status")})()}OnEndPoll(){var e=this;return(0,d.Z)(function*(){e.sharedvar.selPollResult.date_end=1e4*Math.trunc(Number(Date.now())/1e4),e.sharedvar.selPollResult.staff_picture="",e.sharedvar.pollExecSelected.onEnd&&e.sharedvar.pollExecSelected.onEnd.geoLoc&&(e.sharedvar.selPollResult.geoLocEnd=yield e.getLocalization())})()}subscribeChatEvent(){var l,e=this;this.chatSub=this.notifServ.dtb_notification().subscribe({next:(l=(0,d.Z)(function*(a){"chat"===a.collection&&a.field_id&&a.field_id===e.sharedvar.selPollResult._id&&e.getChatState()}),function(s){return l.apply(this,arguments)}),complete:()=>{console.log()}}),this.getChatState()}getChatState(){var e=this;return(0,d.Z)(function*(){const l=yield e.dtb.getChat(e.sharedvar.selPollResult._id);e.sharedvar.selPollResult.status_date=Date.now(),e.sharedvar.selPollResult.chats=l;const a=l.length-1;return a>=0&&"W"===l[a].type?(e.snkBar.open(`Mensaje: ${e.sharedvar.selPollResult.chats[a].msg}.`,"Ok",{duration:3e3}),e.lchat=!0):e.lchat=!1,a})()}ngOnDestroy(){this.subs&&this.subs.unsubscribe()}getClicked(e){3===e.index&&this.dg.aChat({title:"Chat",dgwidth:400,value:this.sharedvar.selPollResult})}onGetData(e){var l=this;return(0,d.Z)(function*(){const a=e._btnclick_,s=e._propName_;if(s&&l.selectedPoll.schema.controls){const i=l.selectedPoll.schema.controls.find(o=>o.name===s);if(i&&i.tags)if(a)switch(i.tags.type){case"goto":l.getGoto(s,i,e);break;case"geolocation":e[s]=yield l.getLocalization(),i.sideBtn="done",l.reset++;break;case"picture":l.getPicture(e,i,s);break;case"draw":l.getDraw(e,i,s);break;case"appoint":l.getAppoint(e,s);break;case"costumer":l.getCostumer(e,s);break;case"product":l.getProduct(e,s);break;case"duplicate":const o=l.findDupPollList(l.selectedPoll,s);i.avalue=o,e[s]=o,o&&l.getGoto(s,i,e)}else(e._btnclick_2_||"duplicate"===i.tags.type)&&l.getGoto(s,i,e)}l.updateLocalList(e)})()}onGetValid(e){this.selectedPoll.values._valid_!==e&&this.updateLocalList({_valid_:e})}getGoto(e,l,a){const s=this.sharedvar.pollExecSelected.pollList.find(i=>i.id===l.avalue);if(s&&l.avalue&&l.avalue.length>0)this.goto.push(l.avalue),this.sharedvar.selPollResult.metaValues[e]=a.urlrute||l.avalue,this.reset++,setTimeout(()=>{delete a._valid_,this.updateLocalList(a),this.selectedPoll=s,this.reset++},100);else if(l.selectOptions){const i=l.selectOptions.findIndex(o=>o.key===l.avalue);i>=0&&l.selectOptions.splice(i,1)}}getLocalization(){var e=this;return(0,d.Z)(function*(){const a=yield e.getPosition();return a.lng=Math.trunc(1e4*a.lng)/1e4,a.lat=Math.trunc(1e4*a.lat)/1e4,e.snkBar.open("Ubicaci\xf3n ingresada.","Ok",{duration:3e3}),a})()}updateLocalList(e){!this.selectedPoll.values||!e||(e._btnEvent_="",e._propName_="",this.selectedPoll.values=this.dg.updatePropResult(this.selectedPoll.values,e),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult))}updateValues2Save(e,l){l._btnEvent_="",l._propName_="",this.dg.updatePropResult(e,l)}onBack(){var e=this;this.selectedPoll.values&&!1===this.selectedPoll.values._valid_?this.snkBar.open("Hay campos sin llenar. \xbfSalir de todos modos?","Si",{duration:3e3}).onAction().subscribe((0,d.Z)(function*(){e.onBackProcess()})):this.onBackProcess()}onBackProcess(){if(this.goto.length>1){const e=this.sharedvar.pollExecSelected.pollList.find(l=>l.id===this.goto[this.goto.length-2]);e&&(this.selectedPoll=e,this.goto.splice(this.goto.length-1,1))}}onDelete(){var e=this;this.snkBar.open("\xbfBorrar \xe9ste grupo?","Ok",{duration:3e3}).onAction().subscribe((0,d.Z)(function*(){if(e.goto.length>1){const l=e.sharedvar.pollExecSelected.pollList.find(s=>s.id===e.goto[e.goto.length-2]),a=e.sharedvar.pollExecSelected.pollList.findIndex(s=>s.id===e.goto[e.goto.length-1]);a>=0&&e.sharedvar.pollExecSelected.pollList.splice(a,1),l&&(e.selectedPoll=l,e.goto.splice(e.goto.length-1,1))}}))}onEndPoll(){var e=this;return(0,d.Z)(function*(){e.isValid()?e.selectedPoll.allowEnd&&e.snkBar.open("\xbfFinalizar?","Ok",{duration:5e3}).onAction().subscribe((0,d.Z)(function*(){e.sharedvar.selPollResult=e.onResultDone(e.sharedvar.selPollResult),e.sharedvar.selPollResult?(e.sharedvar.selPollResult.ended=!0,e.sharedvar.selPollResult.status=3,e.sharedvar.selPollResult.status_date=Date.now(),(yield function F(n){return w.apply(this,arguments)}())?yield e.exportResultDataDevelop():(e.snkBar.open("No fue posible exportar la informaci\xf3n. Por favor sincronice cuando est\xe9 linea.","Ok",{duration:3e3}),e.sharedvar.pollExecSelected.done=!0,e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult)),e.nvg.onRouteBack()):e.snkBar.open("Existen campos sin llenar.","Ok",{duration:3e3})})):e.snkBar.open("Debe llenar los campos requeridos.","Ok",{duration:3e3})})()}isValid(){let e=!0;for(const l of this.sharedvar.pollExecSelected.pollList)if(Object.keys(l.values).length>1&&(e=l.values._valid_&&e),!e)break;return e}exportResultData(){var e=this;return(0,d.Z)(function*(){e.dtb.promiseMetaData(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult).then(function(){var l=(0,d.Z)(function*(a){a&&(e.sharedvar.selPollResult.values={},e.sharedvar.selPollResult.values_type={},e.sharedvar.pollExecSelected.pollList.forEach(s=>{e.updatePollPropResult(e.sharedvar.selPollResult.values,e.sharedvar.selPollResult.values_type,s)}),yield e.OnEndPoll(),e.sharedvar.selPollResult.metaValues=[],e.sharedvar.selPollResult=yield e.dtb.CreateUpdatePollResult(e.sharedvar.selPollResult),yield e.dtb.updateStaffAsync(e.sharedvar.staff),console.log(e.sharedvar.selPollResult),e.sharedvar.pollExecSelected&&e.sharedvar.pollExecSelected.onEnd?.sendMail2&&e.sharedvar.pollExecSelected.onEnd.sendMail2.length>0&&e.htm2pdf.buildHtml2Pdf(e.sharedvar.selPollResult,e.sharedvar.pollExecSelected.onEnd.sendMail2),e.dtb.delFromLocalList(e.sharedvar.pollExecSelected),e.snkBar.open('Encuesta finalizada. Siga el reporte de sus encuestas en "Estado de mi Cuenta".',"Ok",{duration:5e3}))});return function(a){return l.apply(this,arguments)}}())})()}exportResultDataDevelop(){var e=this;return(0,d.Z)(function*(){e.dg.aDefault({title:"Horario acomodado",schema:{controls:[{name:"date_ini",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"date_end",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}}]},value:{},dgwidth:400,dgheigth:360}).subscribe(s=>{s&&e.dtb.promiseMetaData(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult).then(function(){var i=(0,d.Z)(function*(o){o&&(e.sharedvar.selPollResult.values={},e.sharedvar.selPollResult.values_type={},e.sharedvar.pollExecSelected.pollList.forEach(f=>{e.updatePollPropResult(e.sharedvar.selPollResult.values,e.sharedvar.selPollResult.values_type,f)}),yield e.OnEndPoll(),e.sharedvar.selPollResult.metaValues=[],e.sharedvar.selPollResult.date_ini=s.date_ini,e.sharedvar.selPollResult.date_end=s.date_end,e.sharedvar.selPollResult=yield e.dtb.CreateUpdatePollResult(e.sharedvar.selPollResult),yield e.dtb.updateStaffAsync(e.sharedvar.staff),console.log(e.sharedvar.selPollResult),e.sharedvar.pollExecSelected&&e.sharedvar.pollExecSelected.onEnd?.sendMail2&&e.sharedvar.pollExecSelected.onEnd.sendMail2.length>0&&e.htm2pdf.buildHtml2Pdf(e.sharedvar.selPollResult,e.sharedvar.pollExecSelected.onEnd.sendMail2),e.dtb.delFromLocalList(e.sharedvar.pollExecSelected),e.snkBar.open('Encuesta finalizada. Siga el reporte de sus encuestas en "Estado de mi Cuenta".',"Ok",{duration:5e3}))});return function(o){return i.apply(this,arguments)}}())})})()}updatePollPropResult(e,l,a){return a.schema.controls?.forEach(s=>{if(a.values._btnEvent_="",a.values._propName_="",a.values._valid_="",a.values._btnclick_="",s.tags&&!0===s.tags.dtbase&&a.values[s.name]&&a.values[s.name].toString().length>0){let i=s.tags.type;switch(s.tags.type){case"draw":i="picture";break;case"product":case"multiselect":i="array";break;case"textarea":case"costumer":case"duplicate":case"goto":case"header":i="text"}e[s.name]=a.values[s.name],l[s.name]=i}}),e}geoloc(){var e=this;return(0,d.Z)(function*(){yield e.getPosition().then(a=>{a.lng=Math.trunc(100*a.lng)/100,a.lat=Math.trunc(100*a.lat)/100})})()}getPosition(){return new Promise((e,l)=>{navigator.geolocation.getCurrentPosition(a=>{e({lng:a.coords.longitude,lat:a.coords.latitude})},a=>{l(a)})})}getPicture(e,l,a){this.dg.aCamera({title:"C\xe1mara",value:{img:e,name:"pepito"}}).subscribe(o=>{o&&o.urlrute&&o.urlrute.length>0&&(e[a]=`${l.label} \u2714\ufe0f`,this.sharedvar.selPollResult.metaValues[a]=o.urlrute,this.updateLocalList(e),this.reset++)})}getDraw(e,l,a){this.dg.aDraw({title:"Dibujar",value:{img:this.sharedvar.selPollResult.metaValues[a]?this.sharedvar.selPollResult.metaValues[a]:l.avalue,name:"pepito"}}).subscribe(o=>{o&&o.urlrute&&o.urlrute.length>0&&(e[a]=`${l.label} \u2714\ufe0f`,this.sharedvar.selPollResult.metaValues[a]=o.urlrute,this.updateLocalList(e),this.reset++)})}getAppoint(e,l){var a=this;return(0,d.Z)(function*(){let s="No seleccionado",i={name:"contact",label:"Contacto",type:"text",style:"w-full",validators:{}};const o={};if(a.sharedvar.selPollResult.crm_costum_id){const r=yield a.dtb.getCMRCostumAsync(a.sharedvar.selPollResult.crm_costum_id);s=r&&r.name?r.name:s;const m=[];r?.linkup_1&&(o[r.linkup_1]={email:r.email_1||"none",phone:r.phone_1||"none"},m.push({key:r.linkup_1,value:r.linkup_1})),r?.linkup_2&&(o[r.linkup_2]={email:r.email_2||"one",phone:r.phone_2||"nonde"},m.push({key:r?.linkup_2,value:r?.linkup_2})),i.type="select",i.selectOptions=m}a.dg.aDefault({title:"Agendar",schema:{controls:[{name:"appoint_type",label:"Tipo de agenda:",type:"multiselect",style:"w-full",selectOptions:[{key:"appoint",value:"Agenda"},{key:"note",value:"Nota a Administraci\xf3n"}],validators:{required:!0}},{name:"datetime",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"costumer",label:"Cliente",type:"text",default:s,validators:{required:!0}},i,{name:"task",label:"Actividad/Compromiso:",type:"textarea",totalRows:4,style:"w-full",validators:{required:!0}}]},value:a.sharedvar.selPollResult.metaValues[l],dgwidth:400,dgheigth:615}).subscribe(r=>{if(r&&r.datetime){const m=o[r.contact]&&o[r.contact].phone?o[r.contact].phone:"phone",E=o[r.contact]&&o[r.contact].email?o[r.contact].email:"email",T=`${a.sharedvar.formatNumber2DateTime(r.datetime,"/")} - ${r.task||""}`;e[l]=T,r.phone=m,r.email=E,r.pollresult_id=a.sharedvar.selPollResult._id,a.sharedvar.selPollResult.metaValues[l]=r,a.updateLocalList(e),a.reset++}})})()}getCostumer(e,l){const a=this.sharedvar.pollExecSelected.costumerList;a&&a.length>0&&this.onSelCtrlList(a,"Seleccione Cliente",e,l,"costumer")}getProduct(e,l){const a=this.sharedvar.pollExecSelected.productList;a&&a.length>0&&this.onSelCtrlList(a,"Seleccione Producto",e,l,"product")}onSelCtrlList(e,l,a,s,i){var o=this;return(0,d.Z)(function*(){const f=[];e.forEach(r=>{if(r){const m=r.split(":"),E=o.sharedvar.selPollResult.crm_prod_id?.findIndex(ne=>ne===m[0]);f.push({selected:!!(E&&E>=0),myid:m[0],name:m[1]})}});const x={title:l,viewfilter:!0,viewAdd:!1,valuelst:f};return yield o.ds.aSelectDefault(x).subscribe(r=>{r&&("product"===i?(o.sharedvar.selPollResult.crm_prod_id=[],a[s]="",r.forEach(m=>{a[s]+=m.name+";"})):(o.sharedvar.selPollResult.crm_costum_id=r[0].myid,o.sharedvar.selPollResult.crm_costum_name=r[0].name,a[s]=r[0].name),o.updateLocalList(a),o.reset++)})})()}onResultDone(e){let l={...e};return this.sharedvar.pollExecSelected.pollList.forEach(a=>{l.values={...l.values,...a.values}}),l.values&&(l.values._btnEvent_="",l.values._valid_=!0),l}findDupPollList(e,l){const a=e.schema.controls?.find(o=>o.name==l);if(!a)return;const s=a.tags||{},i=this.sharedvar.pollExecSelected.pollList.find(o=>o.id===s.dupactivity);if(i){const o=JSON.parse(JSON.stringify(i));return o.title=`${i.title} ${i.dupTotal}`,i.dupTotal++,o.id=this.dtb.getSerialKey(3,4,"_"),o.duplicated=!0,this.updatePollNames(o),a.selectOptions?.push({key:o.id,value:o.title}),this.sharedvar.pollExecSelected.pollList.push(o),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult),this.reset++,o.id}}updatePollNames(e){e.schema.controls?.forEach(l=>{l.name=this.getUniqueName(l.name,this.sharedvar.pollExecSelected.pollList)})}getUniqueName(e,l){let a=0;for(let s=0;s<l.length;s++){const i=l[s].schema.controls||[];for(let o=0;o<i.length;o++)if(i[o].name===`${e}_${a}`){a++,s=-1;break}}return`${e}_${a}`}static#e=this.\u0275fac=function(l){return new(l||n)(t.Y36(N.k),t.Y36(D.ux),t.Y36(J.x),t.Y36(Y),t.Y36(H.$),t.Y36(z.D),t.Y36(q.$),t.Y36(Q.Q))};static#t=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-poll"]],decls:10,vars:8,consts:[[1,"flex","flex-col","max-h-screen"],[3,"buttons","lchat","onClicked"],[1,"grow","pt-3","mx-1","overflow-y-auto","overflow-x-hidden"],[3,"reset","jsonFormData","values","result","valid"],[1,"h-12","flex","flex-row","items-center","justify-center","border-t","border-violet-500"],["color","primary","mat-raised-button","",3,"click",4,"ngIf"],["color","warn","mat-raised-button","",3,"click",4,"ngIf"],["color","primary","mat-raised-button","",3,"click"],["color","warn","mat-raised-button","",3,"click"]],template:function(l,a){1&l&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("onClicked",function(i){return a.getClicked(i)}),t.qZA(),t.TgZ(2,"div",2)(3,"app-dynamic-form",3),t.NdJ("result",function(i){return a.onGetData(i)})("valid",function(i){return a.onGetValid(i)}),t.qZA()(),t.TgZ(4,"div",4),t.YNc(5,W,3,0,"button",5),t._uU(6," \xa0 "),t.YNc(7,X,4,0,"button",5),t._uU(8," \xa0 "),t.YNc(9,ee,3,0,"button",6),t.qZA()()),2&l&&(t.xp6(1),t.Q6J("buttons","000100")("lchat",a.lchat),t.xp6(2),t.Q6J("reset",a.reset)("jsonFormData",a.selectedPoll.schema)("values",a.selectedPoll.values),t.xp6(2),t.Q6J("ngIf",a.goto.length>1),t.xp6(2),t.Q6J("ngIf",a.selectedPoll.allowEnd),t.xp6(2),t.Q6J("ngIf",a.selectedPoll.duplicated))},dependencies:[p.O5,K.G,j.r,Z.lW,$.Hw]})}return n})()}];let le=(()=>{class n{static#e=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275mod=t.oAB({type:n});static#l=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(te),u.Bz]})}return n})();var ae=c(8471),se=c(6842);let oe=(()=>{class n{static#e=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275mod=t.oAB({type:n});static#l=this.\u0275inj=t.cJS({imports:[p.ez,le,ae.O,se.N,y.Tx,Z.ot,$.Ps,D.ZX]})}return n})()},4066:b=>{const g="[a-fA-F\\d:]",c=h=>h&&h.includeBoundaries?`(?:(?<=\\s|^)(?=${g})|(?<=${g})(?=\\s|$))`:"",p="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",u="[a-fA-F\\d]{1,4}",d=`\n(?:\n(?:${u}:){7}(?:${u}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${u}:){6}(?:${p}|:${u}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${u}:){5}(?::${p}|(?::${u}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${u}:){4}(?:(?::${u}){0,1}:${p}|(?::${u}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${u}:){3}(?:(?::${u}){0,2}:${p}|(?::${u}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${u}:){2}(?:(?::${u}){0,3}:${p}|(?::${u}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${u}:){1}(?:(?::${u}){0,4}:${p}|(?::${u}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::${u}){0,5}:${p}|(?::${u}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),S=new RegExp(`(?:^${p}$)|(?:^${d}$)`),P=new RegExp(`^${p}$`),R=new RegExp(`^${d}$`),_=h=>h&&h.exact?S:new RegExp(`(?:${c(h)}${p}${c(h)})|(?:${c(h)}${d}${c(h)})`,"g");_.v4=h=>h&&h.exact?P:new RegExp(`${c(h)}${p}${c(h)}`,"g"),_.v6=h=>h&&h.exact?R:new RegExp(`${c(h)}${d}${c(h)}`,"g"),b.exports=_},6599:(b,g,c)=>{const p=c(4066),u=d=>p({exact:!0}).test(d);u.v4=d=>p.v4({exact:!0}).test(d),u.v6=d=>p.v6({exact:!0}).test(d),u.version=d=>u(d)?u.v4(d)?4:6:void 0,b.exports=u}}]);