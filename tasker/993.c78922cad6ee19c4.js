"use strict";(self.webpackChunktasky_tasker=self.webpackChunktasky_tasker||[]).push([[993],{7993:(x,m,d)=>{d.r(m),d.d(m,{PollModule:()=>oe});var p=d(6895),u=d(9132),c=d(5861),S=d(6599);class b extends Error{constructor(){super("Request was cancelled"),this.name="CancelError"}get isCanceled(){return!0}}class k extends Error{constructor(f){super("Could not get the public IP address",f),this.name="IpNotFoundError"}}const _={timeout:5e3},h={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},D=(a,f,e)=>{const l=new XMLHttpRequest;let o;const s=new Promise((i,n)=>{o=n,l.addEventListener("error",n,{once:!0}),l.addEventListener("timeout",n,{once:!0}),l.addEventListener("load",()=>{const v=l.responseText.trim();v&&S[e](v)?i(v):n()},{once:!0}),l.open("GET",a),l.timeout=f.timeout,l.send()});return s.cancel=()=>{l.abort(),o(new b)},s},$=(a,f)=>{let e;const l=(0,c.Z)(function*(){const o=[...h[a],...f.fallbackUrls??[]];let s;for(const i of o)try{return e=D(i,f,a),yield e}catch(n){if(s=n,n instanceof b)throw n}throw new k({cause:s})})();return l.cancel=()=>{e.cancel()},l},M={v4:a=>$("v4",{..._,...a}),v6:a=>$("v6",{..._,...a})};function R(){return(R=(0,c.Z)(function*(a){if(a={timeout:5e3,ipVersion:4,...a},!navigator?.onLine)return!1;const f=4===a.ipVersion?"v4":"v6";try{return yield M[f](a),!0}catch{return!1}})).apply(this,arguments)}var t=d(4650),F=d(8826),T=d(7009),J=d(164),C=d(5412),w=d(4859),L=d(7392),P=d(8255),E=d(4006);function N(a,f){if(1&a){const e=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"input",13),t.NdJ("change",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onChekAll())}),t.qZA()(),t.TgZ(3,"mat-icon",14),t._uU(4),t.qZA(),t.TgZ(5,"input",15),t.NdJ("ngModelChange",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.filtertext=o)})("change",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onViewSelected(!1))}),t.qZA()()}if(2&a){const e=t.oxw(),l=t.MAs(15);t.xp6(2),t.Q6J("checked",e.chekAll),t.xp6(1),t.Q6J("matMenuTriggerFor",l),t.xp6(1),t.Oqu(e.getView()),t.xp6(1),t.Q6J("ngModel",e.filtertext)}}function U(a,f){if(1&a){const e=t.EpF();t.TgZ(0,"div",18)(1,"input",19),t.NdJ("ngModelChange",function(o){t.CHM(e);const s=t.oxw().$implicit;return t.KtG(s.selected=o)}),t.qZA(),t.TgZ(2,"label",20),t._uU(3),t.qZA()()}if(2&a){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngModel",e.selected),t.xp6(2),t.Oqu(e.name)}}function B(a,f){if(1&a&&(t.TgZ(0,"div",16),t.YNc(1,U,4,2,"div",17),t.qZA()),2&a){const e=f.$implicit,l=t.oxw();t.xp6(1),t.Q6J("ngIf",l.getViewFilter(e))}}function I(a,f){if(1&a){const e=t.EpF();t.TgZ(0,"div",21)(1,"button",7),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onNew())}),t._uU(2," Nuevo\xa0 "),t.TgZ(3,"mat-icon"),t._uU(4,"add"),t.qZA()()()}}let V=(()=>{class a{constructor(e,l){this.dialogRef=e,this.data=l,this.filtertext="",this.selectedOptions=[],this.chekAll=!1,this.viewSelected=!1,e.disableClose=!0}onNew(){this.dialogRef.close({new:!0})}onChekAll(){this.chekAll=!this.chekAll,this.data.valuelst?.forEach(e=>{e.selected=this.chekAll})}getViewFilter(e){if(this.viewSelected)return e.selected||!1;const l=this.filtertext.toUpperCase();return!!(0===l.length||e&&e.name&&e.name.toUpperCase().includes(l))}onSave(){this.selectedOptions=[],this.data.valuelst?.forEach(e=>{e.selected&&this.selectedOptions.push(e)}),this.dialogRef.close(this.selectedOptions)}onDismiss(){this.dialogRef.close()}getView(){return this.viewSelected?"done":"visibility"}onViewSelected(e){this.viewSelected=e}static#e=this.\u0275fac=function(l){return new(l||a)(t.Y36(C.so),t.Y36(C.WI))};static#t=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-select-dialog"]],decls:24,vars:4,consts:[[1,"flex","flex-col","h-full"],[1,"h-12","p-3","text-2xl","bg-violet-600","text-white"],["class","h-10 w-full flex flex-row items-center border-b border-violet-500",4,"ngIf"],[1,"flex-1","overflow-auto","mt-2"],["class","flex flex-column",4,"ngFor","ngForOf"],[1,"flex","p-3","justify-end","border-t","border-violet-500"],["class","flex-1","fxFlex","",4,"ngIf"],["mat-stroked-button","","color","warn",3,"click"],["mat-stroked-button","","color","primary","cdkFocusInitia","",3,"click"],["selectView","matMenu"],["mat-menu-item","",3,"click"],[1,"h-10","w-full","flex","flex-row","items-center","border-b","border-violet-500"],[1,"w-6","ml-2","mt-2"],["type","checkbox",1,"w-4","h-4","focus:border-blue-500",3,"checked","change"],[1,"bg-gray-200","rounded-sm",3,"matMenuTriggerFor"],["type","search","placeholder","Filtrar...",1,"flex-1","ml-2","h-8","z-20","text-gray-900","outline-none","border-b","border-gray-200","focus:outline-none","focus:outline-none",3,"ngModel","ngModelChange","change"],[1,"flex","flex-column"],["class","flex flex-row h-5 ml-2",4,"ngIf"],[1,"flex","flex-row","h-5","ml-2"],["id","itemsel","type","checkbox",1,"w-4","h-4","text-violet-500","bg-gray-100","border-gray-300","rounded","dark:focus:ring-violet-500","dark:ring-offset-gray-800","focus:ring-2","dark:bg-gray-700","dark:border-gray-600",3,"ngModel","ngModelChange"],["for","itemsel",1,"ml-4","h-4","w-72","text-sm","text-gray-900","overflow-hidden"],["fxFlex","",1,"flex-1"]],template:function(l,o){1&l&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2),t.qZA(),t.YNc(3,N,6,4,"div",2),t.TgZ(4,"div",3),t.YNc(5,B,2,1,"div",4),t.qZA(),t.TgZ(6,"div",5),t.YNc(7,I,5,0,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return o.onDismiss()}),t.TgZ(9,"mat-icon"),t._uU(10,"close"),t.qZA()(),t.TgZ(11,"button",8),t.NdJ("click",function(){return o.onSave()}),t.TgZ(12,"mat-icon"),t._uU(13,"done"),t.qZA()()(),t.TgZ(14,"mat-menu",null,9)(16,"button",10),t.NdJ("click",function(){return o.onViewSelected(!0)}),t.TgZ(17,"mat-icon"),t._uU(18,"done"),t.qZA(),t._uU(19," Ver seleccionados "),t.qZA(),t.TgZ(20,"button",10),t.NdJ("click",function(){return o.onViewSelected(!1)}),t.TgZ(21,"mat-icon"),t._uU(22,"visibility"),t.qZA(),t._uU(23," Ver Todo "),t.qZA()()()),2&l&&(t.xp6(2),t.Oqu(o.data.title),t.xp6(1),t.Q6J("ngIf",o.data.viewfilter),t.xp6(2),t.Q6J("ngForOf",o.data.valuelst),t.xp6(2),t.Q6J("ngIf",o.data.viewAdd))},dependencies:[p.sg,p.O5,w.lW,L.Hw,P.VK,P.OP,P.p6,E.Fj,E.Wl,E.JJ,E.On]})}return a})(),G=(()=>{class a{constructor(e){this.dialog=e}aSelectDefault(e){let l=window.innerHeight-20;return e.dgheigth=e.dgheigth||l,l=l>e.dgheigth?e.dgheigth:l,this.dialogRef=this.dialog.open(V,{panelClass:"custom-dialog-container",height:l.toString()+"px",width:"350px",data:e}),this.dialogRef.afterClosed()}static#e=this.\u0275fac=function(l){return new(l||a)(t.LFG(C.uw))};static#t=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var H=d(2419),Y=d(5377),z=d(1316),q=d(3646),Q=d(2395);function K(a,f){if(1&a){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onBack())}),t.TgZ(1,"mat-icon"),t._uU(2,"arrow_back"),t.qZA()()}}function j(a,f){if(1&a){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onEndPoll())}),t._uU(1," Finalizar"),t.TgZ(2,"mat-icon"),t._uU(3,"done"),t.qZA()()}}function W(a,f){if(1&a){const e=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onDelete())}),t.TgZ(1,"mat-icon"),t._uU(2,"delete"),t.qZA()()}}const X=[{path:"",component:(()=>{class a{constructor(e,l,o,s,i,n,v){this.dtb=e,this.snkBar=l,this.dg=o,this.ds=s,this.nvg=i,this.sharedvar=n,this.notifServ=v,this.lchat=!1,this.goto=[],this.reset=0}ngOnInit(){var e=this;return(0,c.Z)(function*(){e.sharedvar.pollExecSelected.pollList.length>0?(e.selectedPoll=e.sharedvar.pollExecSelected.pollList[0],e.goto.push(e.selectedPoll.id)):(e.snkBar.open("Listado de actividades vac\xedo.","Ok",{duration:5e3}),e.nvg.onRouteBack());const l=e.dtb.getLocalPollResult(e.sharedvar.pollExecSelected.pollResult_id).subscribe(o=>{l&&l.unsubscribe(),e.sharedvar.selPollResult=o,e.sharedvar.selPollResult.status<2&&e.OnStartPoll(),e.subscribeChatEvent(),e.sharedvar.pollExecSelected.done&&e.onEndPoll()})})()}OnStartPoll(){var e=this;return(0,c.Z)(function*(){e.sharedvar.selPollResult.status=2,e.sharedvar.selPollResult.date_ini=1e4*Math.trunc(Number(Date.now())/1e4),e.sharedvar.pollExecSelected.onStart&&(e.sharedvar.pollExecSelected.onStart.sendMail2&&e.sharedvar.pollExecSelected.onStart.sendMail2.length>0&&e.dtb.notifMail(e.sharedvar.selPollResult,e.sharedvar.pollExecSelected.onStart.sendMail2,"","start"),e.sharedvar.selPollResult.crm=e.sharedvar.pollExecSelected.crm||!1,e.sharedvar.pollExecSelected.onStart.geoLoc&&(e.sharedvar.selPollResult.geoLocStart=yield e.getLocalization())),e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult),e.dtb.updatePartialAsync(e.sharedvar.selPollResult,"status")})()}OnEndPoll(){var e=this;return(0,c.Z)(function*(){e.sharedvar.selPollResult.date_end=1e4*Math.trunc(Number(Date.now())/1e4),e.sharedvar.selPollResult.staff_picture="",e.sharedvar.pollExecSelected.onEnd&&e.sharedvar.pollExecSelected.onEnd.geoLoc&&(e.sharedvar.selPollResult.geoLocEnd=yield e.getLocalization())})()}subscribeChatEvent(){var l,e=this;this.chatSub=this.notifServ.dtb_notification().subscribe({next:(l=(0,c.Z)(function*(o){"chat"===o.collection&&o.field_id&&o.field_id===e.sharedvar.selPollResult._id&&e.getChatState()}),function(s){return l.apply(this,arguments)}),complete:()=>{console.log()}}),this.getChatState()}getChatState(){var e=this;return(0,c.Z)(function*(){const l=yield e.dtb.getChat(e.sharedvar.selPollResult._id);e.sharedvar.selPollResult.status_date=Date.now(),e.sharedvar.selPollResult.chats=l;const o=l.length-1;return o>=0&&"W"===l[o].type?(e.snkBar.open(`Mensaje: ${e.sharedvar.selPollResult.chats[o].msg}.`,"Ok",{duration:3e3}),e.lchat=!0):e.lchat=!1,o})()}ngOnDestroy(){this.subs&&this.subs.unsubscribe()}getClicked(e){3===e.index&&this.dg.aChat({title:"Chat",dgwidth:400,value:this.sharedvar.selPollResult})}onGetData(e){var l=this;return(0,c.Z)(function*(){const o=e._btnclick_,s=e._propName_;if(s&&l.selectedPoll.schema.controls){const i=l.selectedPoll.schema.controls.find(n=>n.name===s);if(i&&i.tags)if(o)switch(i.tags.type){case"goto":l.getGoto(i.avalue||"",e);break;case"geolocation":e[s]=yield l.getLocalization(),i.sideBtn="done";break;case"picture":l.getPicture(e,i,s);break;case"draw":l.getDraw(e,i,s);break;case"appoint":l.getAppoint(e,s);break;case"costumer":l.getCostumer(e,s);break;case"product":l.getProduct(e,s);break;case"duplicate":l.findDupPollList(l.selectedPoll,s),l.getGoto(i.avalue||"",e)}else if("duplicate"===i.tags.type&&!l.getGoto(i.avalue||"",e)){const n=i.selectOptions?.findIndex(v=>v.key===i.avalue);n&&n>=0&&i.selectOptions?.splice(n,1)}l.updateLocalList(l.selectedPoll.values,e)}})()}getGoto(e,l){const o=this.sharedvar.pollExecSelected.pollList.find(s=>s.id===e);return!!(o&&e&&e.length>0)&&(this.goto.push(e),this.updateLocalList(this.selectedPoll.values,l),this.selectedPoll=o,!0)}getLocalization(){var e=this;return(0,c.Z)(function*(){const o=yield e.getPosition();o.lng=Math.trunc(1e4*o.lng)/1e4,o.lat=Math.trunc(1e4*o.lat)/1e4;const s=`${o.lat},${o.lng}`;return e.snkBar.open("Ubicaci\xf3n ingresada.","Ok",{duration:3e3}),e.dtb.getLink2geo(s)})()}updateLocalList(e,l){!e||!l||(l._btnEvent_="",l._propName_="",this.dg.updatePropResult(e,l),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult),this.reset++)}updateValues2Save(e,l){l._btnEvent_="",l._propName_="",this.dg.updatePropResult(e,l)}onBack(){var e=this;this.selectedPoll.values&&!1===this.selectedPoll.values._valid_?this.snkBar.open("Hay campos sin llenar. \xbfSalir de todos modos?","Si",{duration:3e3}).onAction().subscribe((0,c.Z)(function*(){e.onBackProcess()})):this.onBackProcess()}onBackProcess(){if(this.goto.length>1){const e=this.sharedvar.pollExecSelected.pollList.find(l=>l.id===this.goto[this.goto.length-2]);e&&(this.selectedPoll=e,this.goto.splice(this.goto.length-1,1))}}onDelete(){var e=this;this.snkBar.open("\xbfBorrar \xe9ste grupo?","Ok",{duration:3e3}).onAction().subscribe((0,c.Z)(function*(){if(e.goto.length>1){const l=e.sharedvar.pollExecSelected.pollList.find(s=>s.id===e.goto[e.goto.length-2]),o=e.sharedvar.pollExecSelected.pollList.findIndex(s=>s.id===e.goto[e.goto.length-1]);o>=0&&e.sharedvar.pollExecSelected.pollList.splice(o,1),l&&(e.selectedPoll=l,e.goto.splice(e.goto.length-1,1))}}))}onEndPoll(){var e=this;return(0,c.Z)(function*(){e.selectedPoll.values&&!1===e.selectedPoll.values._valid_?e.snkBar.open("Debe llenar los campos requeridos.","Ok",{duration:3e3}):e.selectedPoll.allowEnd&&e.snkBar.open("\xbfFinalizar?","Ok",{duration:5e3}).onAction().subscribe((0,c.Z)(function*(){e.sharedvar.selPollResult=e.onResultDone(e.sharedvar.selPollResult),e.sharedvar.selPollResult?(e.sharedvar.selPollResult.ended=!0,e.sharedvar.selPollResult.status=3,e.sharedvar.selPollResult.status_date=Date.now(),(yield function O(a){return R.apply(this,arguments)}())?yield e.exportResultDataDevelop():(e.snkBar.open("No fue posible exportar la informaci\xf3n. Por favor sincronice cuando est\xe9 linea.","Ok",{duration:3e3}),e.sharedvar.pollExecSelected.done=!0,e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult)),e.nvg.onRouteBack()):e.snkBar.open("Existen campos sin llenar.","Ok",{duration:3e3})}))})()}exportResultData(){var e=this;return(0,c.Z)(function*(){e.dtb.promiseMetaData(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult).then(function(){var l=(0,c.Z)(function*(o){o&&(e.sharedvar.pollExecSelected.pollList.forEach(s=>{e.updateValues2Save(e.sharedvar.selPollResult.values,s.values)}),yield e.OnEndPoll(),e.sharedvar.selPollResult.metaValues=[],e.sharedvar.selPollResult=yield e.dtb.CreateUpdatePollResult(e.sharedvar.selPollResult),yield e.dtb.updateStaffAsync(e.sharedvar.staff),console.log(e.sharedvar.selPollResult),e.sharedvar.pollExecSelected&&e.sharedvar.pollExecSelected.onEnd?.sendMail2&&e.sharedvar.pollExecSelected.onEnd.sendMail2.length>0&&e.buildHtml2Pdf(e.sharedvar.pollExecSelected.onEnd.sendMail2),e.dtb.delFromLocalList(e.sharedvar.pollExecSelected),e.snkBar.open('Encuesta finalizada. Siga el reporte de sus encuestas en "Estado de mi Cuenta".',"Ok",{duration:5e3}))});return function(o){return l.apply(this,arguments)}}())})()}exportResultDataDevelop(){var e=this;return(0,c.Z)(function*(){e.dg.aDefault({title:"Agendar",schema:{controls:[{name:"date_ini",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"date_end",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}}]},value:{},dgwidth:400,dgheigth:360}).subscribe(s=>{s&&e.dtb.promiseMetaData(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult).then(function(){var i=(0,c.Z)(function*(n){n&&(e.sharedvar.pollExecSelected.pollList.forEach(v=>{e.updateValues2Save(e.sharedvar.selPollResult.values,v.values)}),yield e.OnEndPoll(),e.sharedvar.selPollResult.metaValues=[],e.sharedvar.selPollResult.date_ini=s.date_ini,e.sharedvar.selPollResult.date_end=s.date_end,e.sharedvar.selPollResult=yield e.dtb.CreateUpdatePollResult(e.sharedvar.selPollResult),yield e.dtb.updateStaffAsync(e.sharedvar.staff),console.log(e.sharedvar.selPollResult),e.sharedvar.pollExecSelected&&e.sharedvar.pollExecSelected.onEnd?.sendMail2&&e.sharedvar.pollExecSelected.onEnd.sendMail2.length>0&&e.buildHtml2Pdf(e.sharedvar.pollExecSelected.onEnd.sendMail2),e.dtb.delFromLocalList(e.sharedvar.pollExecSelected),e.snkBar.open('Encuesta finalizada. Siga el reporte de sus encuestas en "Estado de mi Cuenta".',"Ok",{duration:5e3}))});return function(n){return i.apply(this,arguments)}}())})})()}buildHtml2Pdf(e){let l;l={pollresult:this.sharedvar.selPollResult,emails:e},this.dg.aPollResult({schema:{},value:l,title:"Datos de la encuesta: "+this.sharedvar.selPollResult.staff_name}).subscribe(s=>{s&&this.sharedvar.pollExecSelected.onEnd&&this.sharedvar.pollExecSelected.onEnd.sendMail2&&this.dtb.notifMail(this.sharedvar.selPollResult,s.emaildata,s.html,"end")})}geoloc(){var e=this;return(0,c.Z)(function*(){yield e.getPosition().then(o=>{o.lng=Math.trunc(100*o.lng)/100,o.lat=Math.trunc(100*o.lat)/100})})()}getPosition(){return new Promise((e,l)=>{navigator.geolocation.getCurrentPosition(o=>{e({lng:o.coords.longitude,lat:o.coords.latitude})},o=>{l(o)})})}getPicture(e,l,o){this.dg.aCamera({title:"C\xe1mara",value:{img:e,name:"pepito"}}).subscribe(n=>{n&&n.urlrute&&n.urlrute.length>0&&(e[o]=n.urlrute,e[o]=`${l.label} \u2714\ufe0f`,this.sharedvar.selPollResult.metaValues[o]=n.urlrute,this.updateLocalList(this.selectedPoll.values,e))})}getDraw(e,l,o){this.dg.aDraw({title:"Dibujar",value:{img:this.sharedvar.selPollResult.metaValues[o]?this.sharedvar.selPollResult.metaValues[o]:l.avalue,name:"pepito"}}).subscribe(n=>{n&&n.urlrute&&n.urlrute.length>0&&(e[o]=`${l.label} \u2714\ufe0f`,this.sharedvar.selPollResult.metaValues[o]=n.urlrute,this.updateLocalList(this.selectedPoll.values,e))})}getAppoint(e,l){var o=this;return(0,c.Z)(function*(){let s="No seleccionado",i={name:"contact",label:"Contacto",type:"text",style:"w-full",validators:{}};const n={};if(o.sharedvar.selPollResult.crm_costum_id){const r=yield o.dtb.getCMRCostumAsync(o.sharedvar.selPollResult.crm_costum_id);s=r&&r.name?r.name:s;const g=[];r?.linkup_1&&(n[r.linkup_1]={email:r.email_1||"none",phone:r.phone_1||"none"},g.push({key:r.linkup_1,value:r.linkup_1})),r?.linkup_2&&(n[r.linkup_2]={email:r.email_2||"one",phone:r.phone_2||"nonde"},g.push({key:r?.linkup_2,value:r?.linkup_2})),i.type="select",i.selectOptions=g}o.dg.aDefault({title:"Agendar",schema:{controls:[{name:"datetime",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"costumer",label:"Cliente",type:"text",default:s,validators:{required:!0}},i,{name:"task",label:"Actividad/Compromiso:",type:"textarea",totalRows:4,style:"w-full",validators:{required:!0}}]},value:o.sharedvar.selPollResult.metaValues[l],dgwidth:400,dgheigth:550}).subscribe(r=>{r&&r.datetime&&r.datetime.length>0&&(e[l]=`${r.datetime}: ${r.task||""}`,r.datetime=new Date(r.datetime).getTime(),r.phone=n[r.contact].phone||"none",r.email=n[r.contact].email||"none",o.sharedvar.selPollResult.metaValues[l]=r,o.updateLocalList(o.selectedPoll.values,e))})})()}getCostumer(e,l){const o=this.sharedvar.pollExecSelected.costumerList;o&&o.length>0&&this.onSelCtrlList(o,"Seleccione Cliente",e,l,"costumer")}getProduct(e,l){const o=this.sharedvar.pollExecSelected.productList;o&&o.length>0&&this.onSelCtrlList(o,"Seleccione Producto",e,l,"product")}onSelCtrlList(e,l,o,s,i){var n=this;return(0,c.Z)(function*(){const v=[];e.forEach(r=>{if(r){const g=r.split(":"),A=n.sharedvar.selPollResult.crm_prod_key?.findIndex(ae=>ae.key===g[0]);v.push({selected:!!(A&&A>=0),myid:g[0],name:g[1]})}});const Z={title:l,viewfilter:!0,viewAdd:!1,valuelst:v};return yield n.ds.aSelectDefault(Z).subscribe(r=>{r&&("product"===i?(n.sharedvar.selPollResult.crm_prod_key=[],o[s]="",r.forEach(g=>{o[s]+=g.name+";"})):(n.sharedvar.selPollResult.crm_costum_id=r[0].myid,n.sharedvar.selPollResult.crm_costum_name=r[0].name,o[s]=r[0].name),n.updateLocalList(n.selectedPoll.values,o))})})()}onResultDone(e){let l={...e};return this.sharedvar.pollExecSelected.pollList.forEach(o=>{l.values={...l.values,...o.values}}),l.values&&(l.values._btnEvent_="",l.values._valid_=!0),l}findDupPollList(e,l){const o=e.schema.controls?.find(n=>n.name==l);if(!o)return;const s=o.tags||{},i=this.sharedvar.pollExecSelected.pollList.find(n=>n.id===s.dupactivity);if(i){const n=JSON.parse(JSON.stringify(i));n.title=`${i.title} ${i.dupTotal}`,i.dupTotal++,n.id=this.dtb.getSerialKey(3,4,"_"),n.duplicated=!0,this.updatePollNames(n),o.selectOptions?.push({key:n.id,value:n.title}),this.sharedvar.pollExecSelected.pollList.push(n),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult)}}updatePollNames(e){e.schema.controls?.forEach(l=>{l.name=this.getUniqueName(l.name,this.sharedvar.pollExecSelected.pollList)})}getUniqueName(e,l){let o=1,s=e;for(let i=0;i<l.length;i++){const n=l[i].schema.controls||[];for(let v=0;v<n.length;v++)if(n[v].name===s){o++,s=`${s}_${o}`,i=-1;break}}return s}static#e=this.\u0275fac=function(l){return new(l||a)(t.Y36(F.k),t.Y36(T.ux),t.Y36(J.x),t.Y36(G),t.Y36(H.$),t.Y36(Y.D),t.Y36(z.$))};static#t=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-poll"]],decls:10,vars:8,consts:[[1,"flex","flex-col","h-screen","w-screen"],[3,"buttons","lchat","onClicked"],[1,"grow","mx-1","pt-3","overflow-auto"],[3,"reset","jsonFormData","values","result"],[1,"h-12","flex","flex-row","items-center","justify-center","border-t","border-violet-500"],["color","primary","mat-raised-button","",3,"click",4,"ngIf"],["color","warn","mat-raised-button","",3,"click",4,"ngIf"],["color","primary","mat-raised-button","",3,"click"],["color","warn","mat-raised-button","",3,"click"]],template:function(l,o){1&l&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("onClicked",function(i){return o.getClicked(i)}),t.qZA(),t.TgZ(2,"div",2)(3,"app-dynamic-form",3),t.NdJ("result",function(i){return o.onGetData(i)}),t.qZA()(),t.TgZ(4,"div",4),t.YNc(5,K,3,0,"button",5),t._uU(6," \xa0 "),t.YNc(7,j,4,0,"button",5),t._uU(8," \xa0 "),t.YNc(9,W,3,0,"button",6),t.qZA()()),2&l&&(t.xp6(1),t.Q6J("buttons","000100")("lchat",o.lchat),t.xp6(2),t.Q6J("reset",o.reset)("jsonFormData",o.selectedPoll.schema)("values",o.selectedPoll.values),t.xp6(2),t.Q6J("ngIf",o.goto.length>1),t.xp6(2),t.Q6J("ngIf",o.selectedPoll.allowEnd),t.xp6(2),t.Q6J("ngIf",o.selectedPoll.duplicated))},dependencies:[p.O5,q.G,Q.r,w.lW,L.Hw]})}return a})()}];let ee=(()=>{class a{static#e=this.\u0275fac=function(l){return new(l||a)};static#t=this.\u0275mod=t.oAB({type:a});static#l=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(X),u.Bz]})}return a})();var te=d(8471),le=d(6842);let oe=(()=>{class a{static#e=this.\u0275fac=function(l){return new(l||a)};static#t=this.\u0275mod=t.oAB({type:a});static#l=this.\u0275inj=t.cJS({imports:[p.ez,ee,te.O,le.N,P.Tx,w.ot,L.Ps,T.ZX]})}return a})()},4066:x=>{const m="[a-fA-F\\d:]",d=h=>h&&h.includeBoundaries?`(?:(?<=\\s|^)(?=${m})|(?<=${m})(?=\\s|$))`:"",p="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",u="[a-fA-F\\d]{1,4}",c=`\n(?:\n(?:${u}:){7}(?:${u}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${u}:){6}(?:${p}|:${u}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${u}:){5}(?::${p}|(?::${u}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${u}:){4}(?:(?::${u}){0,1}:${p}|(?::${u}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${u}:){3}(?:(?::${u}){0,2}:${p}|(?::${u}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${u}:){2}(?:(?::${u}){0,3}:${p}|(?::${u}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${u}:){1}(?:(?::${u}){0,4}:${p}|(?::${u}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::${u}){0,5}:${p}|(?::${u}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),S=new RegExp(`(?:^${p}$)|(?:^${c}$)`),b=new RegExp(`^${p}$`),k=new RegExp(`^${c}$`),_=h=>h&&h.exact?S:new RegExp(`(?:${d(h)}${p}${d(h)})|(?:${d(h)}${c}${d(h)})`,"g");_.v4=h=>h&&h.exact?b:new RegExp(`${d(h)}${p}${d(h)}`,"g"),_.v6=h=>h&&h.exact?k:new RegExp(`${d(h)}${c}${d(h)}`,"g"),x.exports=_},6599:(x,m,d)=>{const p=d(4066),u=c=>p({exact:!0}).test(c);u.v4=c=>p.v4({exact:!0}).test(c),u.v6=c=>p.v6({exact:!0}).test(c),u.version=c=>u(c)?u.v4(c)?4:6:void 0,x.exports=u}}]);