"use strict";(self.webpackChunktasky_tasker=self.webpackChunktasky_tasker||[]).push([[516],{6516:(S,P,c)=>{c.r(P),c.d(P,{PollModule:()=>de});var p=c(6895),u=c(9132),d=c(5861),C=c(6599);class y extends Error{constructor(){super("Request was cancelled"),this.name="CancelError"}get isCanceled(){return!0}}class E extends Error{constructor(m){super("Could not get the public IP address",m),this.name="IpNotFoundError"}}const k={timeout:5e3},v={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},O=(i,m,e)=>{const o=new XMLHttpRequest;let l;const s=new Promise((a,n)=>{l=n,o.addEventListener("error",n,{once:!0}),o.addEventListener("timeout",n,{once:!0}),o.addEventListener("load",()=>{const h=o.responseText.trim();h&&C[e](h)?a(h):n()},{once:!0}),o.open("GET",i),o.timeout=m.timeout,o.send()});return s.cancel=()=>{o.abort(),l(new y)},s},M=(i,m)=>{let e;const o=(0,d.Z)(function*(){const l=[...v[i],...m.fallbackUrls??[]];let s;for(const a of l)try{return e=O(a,m,i),yield e}catch(n){if(s=n,n instanceof y)throw n}throw new E({cause:s})})();return o.cancel=()=>{e.cancel()},o},J={v4:i=>M("v4",{...k,...i}),v6:i=>M("v6",{...k,...i})};function T(){return(T=(0,d.Z)(function*(i){if(i={timeout:5e3,ipVersion:4,...i},!navigator?.onLine)return!1;const m=4===i.ipVersion?"v4":"v6";try{return yield J[m](i),!0}catch{return!1}})).apply(this,arguments)}var t=c(4650),U=c(8826),F=c(7009),B=c(8391),Z=c(5412),$=c(4859),A=c(7392),f=c(8255),R=c(4006);function I(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"div",15)(1,"input",16),t.NdJ("change",function(){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onChekAll())}),t.qZA()()}if(2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("checked",e.chekAll)}}function V(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"div",11),t.YNc(1,I,2,1,"div",12),t.TgZ(2,"mat-icon",13),t._uU(3),t.qZA(),t.TgZ(4,"input",14),t.NdJ("ngModelChange",function(l){t.CHM(e);const s=t.oxw();return t.KtG(s.filtertext=l)})("change",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onViewSelected(!1))}),t.qZA()()}if(2&i){const e=t.oxw(),o=t.MAs(15);t.xp6(1),t.Q6J("ngIf",e.multiSelect),t.xp6(1),t.Q6J("matMenuTriggerFor",o),t.xp6(1),t.Oqu(e.getView()),t.xp6(1),t.Q6J("ngModel",e.filtertext)}}function G(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"div",19)(1,"input",20),t.NdJ("ngModelChange",function(l){t.CHM(e);const s=t.oxw().$implicit;return t.KtG(s.selected=l)})("change",function(){t.CHM(e);const l=t.oxw().$implicit,s=t.oxw();return t.KtG(s.onSelected(l))}),t.qZA(),t.TgZ(2,"label",21),t._uU(3),t.qZA()()}if(2&i){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngModel",e.selected),t.xp6(2),t.Oqu(e.name)}}function Y(i,m){if(1&i&&(t.TgZ(0,"div",17),t.YNc(1,G,4,2,"div",18),t.qZA()),2&i){const e=m.$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.getViewFilter(e))}}function q(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"div",22)(1,"button",7),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onNew())}),t._uU(2," Nuevo\xa0 "),t.TgZ(3,"mat-icon"),t._uU(4,"add"),t.qZA()()()}}let H=(()=>{class i{constructor(e,o){this.dialogRef=e,this.data=o,this.filtertext="",this.selectedOptions=[],this.chekAll=!1,this.viewSelected=!1,this.multiSelect=!1,e.disableClose=!0,this.multiSelect=o.multiSelect||!1}onNew(){this.dialogRef.close({new:!0})}onChekAll(){this.chekAll=!this.chekAll,this.data.valuelst?.forEach(e=>{e.selected=this.chekAll})}getViewFilter(e){if(this.viewSelected)return e.selected||!1;const o=this.filtertext.toUpperCase();return!!(0===o.length||e&&e.name&&e.name.toUpperCase().includes(o))}onSelected(e){this.multiSelect||(this.selectedOptions=[e],this.dialogRef.close(this.selectedOptions))}onSave(){this.selectedOptions=[],this.data.valuelst?.forEach(e=>{e.selected&&this.selectedOptions.push(e)}),this.dialogRef.close(this.selectedOptions)}onDismiss(){this.dialogRef.close()}getView(){return this.viewSelected?"done":"visibility"}onViewSelected(e){this.viewSelected=e}static#e=this.\u0275fac=function(o){return new(o||i)(t.Y36(Z.so),t.Y36(Z.WI))};static#t=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-select-dialog"]],decls:24,vars:4,consts:[[1,"flex","flex-col","h-full"],[1,"h-12","p-3","text-2xl","bg-violet-600","text-white"],["class","h-10 w-full flex flex-row items-center border-b border-violet-500",4,"ngIf"],[1,"flex-1","overflow-auto","mt-2"],["class","flex flex-column",4,"ngFor","ngForOf"],[1,"flex","p-3","justify-end","border-t","border-violet-500"],["class","flex-1","fxFlex","",4,"ngIf"],["mat-stroked-button","","color","warn",3,"click"],["mat-stroked-button","","color","primary","cdkFocusInitia","",3,"click"],["selectView","matMenu"],["mat-menu-item","",3,"click"],[1,"h-10","w-full","flex","flex-row","items-center","border-b","border-violet-500"],["class","w-6 ml-2 mt-2",4,"ngIf"],[1,"bg-gray-200","rounded-sm",3,"matMenuTriggerFor"],["type","search","placeholder","Filtrar...",1,"flex-1","ml-2","h-8","z-20","text-gray-900","outline-none","border-b","border-gray-200","focus:outline-none","focus:outline-none",3,"ngModel","ngModelChange","change"],[1,"w-6","ml-2","mt-2"],["type","checkbox",1,"w-4","h-4","focus:border-blue-500",3,"checked","change"],[1,"flex","flex-column"],["class","flex flex-row h-8 ml-2",4,"ngIf"],[1,"flex","flex-row","h-8","ml-2"],["id","itemsel","type","checkbox",1,"w-4","h-4","text-violet-500","bg-gray-100","border-gray-300","rounded","dark:focus:ring-violet-500","dark:ring-offset-gray-800","focus:ring-2","dark:bg-gray-700","dark:border-gray-600",3,"ngModel","ngModelChange","change"],["for","itemsel",1,"ml-4","h-4","w-72","text-sm","text-gray-900","overflow-hidden"],["fxFlex","",1,"flex-1"]],template:function(o,l){1&o&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2),t.qZA(),t.YNc(3,V,5,4,"div",2),t.TgZ(4,"div",3),t.YNc(5,Y,2,1,"div",4),t.qZA(),t.TgZ(6,"div",5),t.YNc(7,q,5,0,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return l.onDismiss()}),t.TgZ(9,"mat-icon"),t._uU(10,"close"),t.qZA()(),t.TgZ(11,"button",8),t.NdJ("click",function(){return l.onSave()}),t.TgZ(12,"mat-icon"),t._uU(13,"done"),t.qZA()()(),t.TgZ(14,"mat-menu",null,9)(16,"button",10),t.NdJ("click",function(){return l.onViewSelected(!0)}),t.TgZ(17,"mat-icon"),t._uU(18,"done"),t.qZA(),t._uU(19," Ver seleccionados "),t.qZA(),t.TgZ(20,"button",10),t.NdJ("click",function(){return l.onViewSelected(!1)}),t.TgZ(21,"mat-icon"),t._uU(22,"visibility"),t.qZA(),t._uU(23," Ver Todo "),t.qZA()()()),2&o&&(t.xp6(2),t.Oqu(l.data.title),t.xp6(1),t.Q6J("ngIf",l.data.viewfilter),t.xp6(2),t.Q6J("ngForOf",l.data.valuelst),t.xp6(2),t.Q6J("ngIf",l.data.viewAdd))},dependencies:[p.sg,p.O5,$.lW,A.Hw,f.VK,f.OP,f.p6,R.Fj,R.Wl,R.JJ,R.On]})}return i})(),Q=(()=>{class i{constructor(e){this.dialog=e}aSelectDefault(e){let o=window.innerHeight-20;return e.dgheigth=e.dgheigth||o,o=o>600?600:o,this.dialogRef=this.dialog.open(H,{panelClass:"custom-dialog-container",height:o.toString()+"px",width:"350px",data:e}),this.dialogRef.afterClosed()}static#e=this.\u0275fac=function(o){return new(o||i)(t.LFG(Z.uw))};static#t=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var z=c(2419),K=c(5377),j=c(9055),W=c(9496);let X=(()=>{class i{constructor(){this.recognition=new webkitSpeechRecognition,this.isRecording=!1,this.text="",this.tempWords=""}init(){this.recognition.interimResults=!0,this.recognition.lang="es-CO",this.recognition.addEventListener("result",e=>{const o=Array.from(e.results).map(l=>l[0]).map(l=>l.transcript).join("");this.tempWords=o,console.log(this.tempWords)})}voiceRecogition(){return this.isRecording?this.stop():this.start(),this.text}start(){this.isRecording||(this.isRecording=!0,this.recognition.start(),console.log("Speech recognition started"),this.recognition.addEventListener("end",e=>{this.isRecording?(this.wordConcat(),this.recognition.start()):(this.recognition.stop(),console.log("End speech recognition"))}))}stop(){this.isRecording&&(this.isRecording=!1,this.wordConcat(),this.recognition.stop(),console.log("End speech recognition"))}wordConcat(){this.text=this.text+" "+this.tempWords+".",this.tempWords=""}static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ee=c(3646),te=c(2395);function le(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onBack())}),t.TgZ(1,"mat-icon"),t._uU(2,"arrow_back"),t.qZA()()}}function oe(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onEndPoll())}),t._uU(1," Finalizar"),t.TgZ(2,"mat-icon"),t._uU(3,"done"),t.qZA()()}}function se(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onDelete())}),t.TgZ(1,"mat-icon"),t._uU(2,"delete"),t.qZA()()}}function ie(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.visiteByAvailTitle(s))}),t._uU(1),t.qZA()}if(2&i){const e=m.$implicit,o=t.oxw();t.xp6(1),t.hij(" ",o.getAvailPollTitle(e)," ")}}const ae=[{path:"",component:(()=>{class i{constructor(e,o,l,s,a,n,h,_,w){this.dtb=e,this.snkBar=o,this.dg=l,this.ds=s,this.nvg=a,this.sharedvar=n,this.notifServ=h,this.htm2pdf=_,this.service=w,this.lchat=!1,this.goto=[],this.visitePollList=[],this.reset=0,this.commands="",this.service.init()}ngOnInit(){var e=this;return(0,d.Z)(function*(){e.sharedvar.pollExecSelected.pollList.length>0?(e.selectedPoll=e.sharedvar.pollExecSelected.pollList[0],e.goto.push(e.selectedPoll.id),e.availablePolls(e.selectedPoll.title,e.selectedPoll.id)):(e.snkBar.open("Listado de actividades vac\xedo.","Ok",{duration:5e3}),e.nvg.onRouteBack());const o=e.dtb.getLocalPollResult(e.sharedvar.pollExecSelected.pollResult_id).subscribe(l=>{o&&o.unsubscribe(),e.sharedvar.selPollResult=l,e.sharedvar.selPollResult.status<2&&e.OnStartPoll(),e.subscribeChatEvent(),e.sharedvar.pollExecSelected.done&&e.onEndPoll()})})()}OnStartPoll(){var e=this;return(0,d.Z)(function*(){e.sharedvar.selPollResult.status=2,e.sharedvar.selPollResult.date_ini=1e4*Math.trunc(Number(Date.now())/1e4),e.sharedvar.pollExecSelected.onStart&&(e.sharedvar.pollExecSelected.onStart.sendMail2&&e.sharedvar.pollExecSelected.onStart.sendMail2.length>0&&e.dtb.notifMail(e.sharedvar.selPollResult,e.sharedvar.pollExecSelected.onStart.sendMail2,"","start"),e.sharedvar.pollExecSelected.onStart.geoLoc&&(e.sharedvar.selPollResult.geoLocStart=yield e.getLocalization())),e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult),e.dtb.updatePartialAsync(e.sharedvar.selPollResult,"status")})()}OnEndPoll(){var e=this;return(0,d.Z)(function*(){e.sharedvar.selPollResult.date_end=1e4*Math.trunc(Number(Date.now())/1e4),e.sharedvar.selPollResult.staff_picture="",e.sharedvar.pollExecSelected.onEnd&&e.sharedvar.pollExecSelected.onEnd.geoLoc&&(e.sharedvar.selPollResult.geoLocEnd=yield e.getLocalization())})()}availablePolls(e,o){this.visitePollList.find(l=>l===`${e}:${o}`)||this.visitePollList.push(`${e}:${o}`)}getAvailPollTitle(e){return e.split(":")[0]}visiteByAvailTitle(e){const o=e.split(":")[1];if(this.goto[this.goto.length-1]===o)return;const l=this.sharedvar.pollExecSelected.pollList.find(s=>s.id===o);l&&(this.goto.push(o),this.selectedPoll=l,this.reset++)}subscribeChatEvent(){var o,e=this;this.chatSub=this.notifServ.dtb_notification().subscribe({next:(o=(0,d.Z)(function*(l){"chat"===l.collection&&l.field_id&&l.field_id===e.sharedvar.selPollResult._id&&e.getChatState()}),function(s){return o.apply(this,arguments)}),complete:()=>{console.log()}}),this.getChatState()}getChatState(){var e=this;return(0,d.Z)(function*(){const o=yield e.dtb.getChat(e.sharedvar.selPollResult._id);e.sharedvar.selPollResult.status_date=Date.now(),e.sharedvar.selPollResult.chats=o;const l=o.length-1;return l>=0&&"W"===o[l].type?(e.snkBar.open(`Mensaje: ${e.sharedvar.selPollResult.chats[l].msg}.`,"Ok",{duration:3e3}),e.lchat=!0):e.lchat=!1,l})()}ngOnDestroy(){this.subs&&this.subs.unsubscribe()}getClicked(e){switch(e.index){case 4:this.dg.aChat({title:"Chat",dgwidth:400,value:this.sharedvar.selPollResult});break;case 5:this.getAppoint(null,"_note_","note");break;case 7:this.commands="question_mark"===this.commands?"":"question_mark"}}onGetData(e){var o=this;return(0,d.Z)(function*(){const l=e._btnclick_,s=e._propName_;if(s&&o.selectedPoll.schema.controls){const a=o.selectedPoll.schema.controls.find(n=>n.name===s);if(a&&a.tags)if(l)switch(a.tags.type){case"goto":o.getGoto(s,a,e);break;case"geolocation":e[s]=yield o.getLocalization(),a.sideBtn="done",o.reset++;break;case"picture":o.getPicture(e,a,s);break;case"draw":o.getDraw(e,a,s);break;case"appoint":o.getAppoint(e,s);break;case"costumer":o.getCostumer(e,s);break;case"product":o.getProduct(e,s);break;case"duplicate":const n=o.findDupPollList(o.selectedPoll,s);a.avalue=n,e[s]=n,n&&o.getGoto(s,a,e);break;case"text":case"textarea":e[s]=o.service.voiceRecogition(),o.reset++}else e._command_&&e._command_===o.commands&&a.tags.help?o.snkBar.open(a.tags.help,"Listo",{duration:1e4}):(e._btnclick_2_||"duplicate"===a.tags.type)&&o.getGoto(s,a,e)}o.updateLocalList(e)})()}onGetValid(e){this.selectedPoll.values._valid_!==e&&this.updateLocalList({_valid_:e})}getGoto(e,o,l){const s=this.sharedvar.pollExecSelected.pollList.find(a=>a.id===o.avalue);if(s&&o.avalue&&o.avalue.length>0)this.goto.push(o.avalue),this.sharedvar.selPollResult.metaValues[e]=l.urlrute||o.avalue,this.reset++,setTimeout(()=>{delete l._valid_,this.updateLocalList(l),this.selectedPoll=s,this.availablePolls(this.selectedPoll.title,this.selectedPoll.id),this.reset++},100);else if(o.selectOptions){const a=o.selectOptions.findIndex(n=>n.key===o.avalue);a>=0&&o.selectOptions.splice(a,1)}}getLocalization(){var e=this;return(0,d.Z)(function*(){const l=yield e.getPosition();return l.lng=Math.trunc(1e4*l.lng)/1e4,l.lat=Math.trunc(1e4*l.lat)/1e4,e.snkBar.open("Ubicaci\xf3n ingresada.","Ok",{duration:3e3}),l})()}updateLocalList(e){!this.selectedPoll.values||!e||(e._btnEvent_="",e._propName_="",this.selectedPoll.values=this.dg.updatePropResult(this.selectedPoll.values,e),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult))}updateValues2Save(e,o){o._btnEvent_="",o._propName_="",this.dg.updatePropResult(e,o)}onBack(){var e=this;this.selectedPoll.values&&!1===this.selectedPoll.values._valid_?this.snkBar.open("Hay campos sin llenar. \xbfSalir de todos modos?","Si",{duration:3e3}).onAction().subscribe((0,d.Z)(function*(){e.onBackProcess()})):this.onBackProcess()}onBackProcess(){if(this.goto.length>1){const e=this.sharedvar.pollExecSelected.pollList.find(o=>o.id===this.goto[this.goto.length-2]);e&&(this.selectedPoll=e,this.goto.splice(this.goto.length-1,1))}}onDelete(){var e=this;this.snkBar.open("\xbfBorrar \xe9ste grupo?","Ok",{duration:3e3}).onAction().subscribe((0,d.Z)(function*(){if(e.goto.length>1){const o=e.sharedvar.pollExecSelected.pollList.find(s=>s.id===e.goto[e.goto.length-2]),l=e.sharedvar.pollExecSelected.pollList.findIndex(s=>s.id===e.goto[e.goto.length-1]);l>=0&&e.sharedvar.pollExecSelected.pollList.splice(l,1),o&&(e.selectedPoll=o,e.goto.splice(e.goto.length-1,1))}}))}onEndPoll(){var e=this;return(0,d.Z)(function*(){const o=e.isValid();""===o?e.selectedPoll.allowEnd&&e.snkBar.open("\xbfFinalizar?","Ok",{duration:5e3}).onAction().subscribe((0,d.Z)(function*(){e.sharedvar.selPollResult=e.onResultDone(e.sharedvar.selPollResult),e.sharedvar.selPollResult?(e.sharedvar.selPollResult.ended=!0,e.sharedvar.selPollResult.status=3,e.sharedvar.selPollResult.status_date=Date.now(),(yield function N(i){return T.apply(this,arguments)}())?"tasky-danilo-prod.up.railway.app/tasker"===window.location.hostname||"localhost"===window.location.hostname?yield e.exportResultDataDevelop():yield e.exportResultData():(e.snkBar.open("No fue posible exportar la informaci\xf3n. Por favor sincronice cuando est\xe9 linea.","Ok",{duration:3e3}),e.sharedvar.pollExecSelected.done=!0,e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult)),e.nvg.onRouteBack()):e.snkBar.open("Existen campos sin llenar.","Ok",{duration:3e3})})):e.snkBar.open(`Debe llenar campos requeridos en "${o}".`,"Ok",{duration:3e3})})()}isValid(){let e="",o=!0,l=[];for(const s of this.visitePollList){l=s.split(":");const a=this.sharedvar.pollExecSelected.pollList.find(n=>n.id===l[1]);if(a&&(o=a.values._valid_&&o,!o)){e=a.title;break}}return""!==e&&this.visiteByAvailTitle(l.join(":")),e}exportResultData(e=0,o=0){var l=this;return(0,d.Z)(function*(){l.dtb.promiseMetaData(l.sharedvar.pollExecSelected,l.sharedvar.selPollResult).then(function(){var s=(0,d.Z)(function*(a){a&&(l.sharedvar.selPollResult.values={},l.sharedvar.selPollResult.values_type={},l.sharedvar.pollExecSelected.pollList.forEach(n=>{l.updatePollPropResult(l.sharedvar.selPollResult.values,l.sharedvar.selPollResult.values_type,n)}),yield l.OnEndPoll(),l.sharedvar.selPollResult.metaValues=[],e>0&&o>0&&(l.sharedvar.selPollResult.date_ini=e,l.sharedvar.selPollResult.date_end=o),l.sharedvar.selPollResult=yield l.dtb.CreateUpdatePollResult(l.sharedvar.selPollResult),yield l.dtb.updateStaffAsync(l.sharedvar.staff),console.log(l.sharedvar.selPollResult),l.sharedvar.pollExecSelected&&l.sharedvar.pollExecSelected.onEnd?.sendMail2&&l.sharedvar.pollExecSelected.onEnd.sendMail2.length>0&&l.htm2pdf.buildHtml2Pdf(l.sharedvar.selPollResult,l.sharedvar.pollExecSelected.onEnd.sendMail2),l.dtb.delFromLocalList(l.sharedvar.pollExecSelected),l.snkBar.open('Encuesta finalizada. Siga el reporte de sus encuestas en "Estado de mi Cuenta".',"Ok",{duration:5e3}))});return function(a){return s.apply(this,arguments)}}())})()}exportResultDataDevelop(){var e=this;return(0,d.Z)(function*(){const o=new Date;o.setHours(o.getHours(),o.getMinutes(),0,0),e.dg.aDefault({title:"Horario acomodado",schema:{controls:[{name:"date_ini",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"date_end",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}}]},value:{date_ini:o,date_end:o},dgwidth:400,dgheigth:360}).subscribe(n=>{n&&e.exportResultData(n.date_ini,n.date_end)})})()}updatePollPropResult(e,o,l){return l.schema.controls?.forEach(s=>{if(l.values._btnEvent_="",l.values._propName_="",l.values._valid_="",l.values._btnclick_="",s.tags&&!0===s.tags.dtbase&&l.values[s.name]&&l.values[s.name].toString().length>0){let a=s.tags.type;switch(s.tags.type){case"draw":a="picture";break;case"product":case"multiselect":a="array";break;case"textarea":case"costumer":case"duplicate":case"goto":case"header":a="text"}e[s.name]=l.values[s.name],o[s.name]=a}}),e}geoloc(){var e=this;return(0,d.Z)(function*(){yield e.getPosition().then(l=>{l.lng=Math.trunc(100*l.lng)/100,l.lat=Math.trunc(100*l.lat)/100})})()}getPosition(){return new Promise((e,o)=>{navigator.geolocation.getCurrentPosition(l=>{e({lng:l.coords.longitude,lat:l.coords.latitude})},l=>{o(l)})})}getPicture(e,o,l){this.dg.aCamera({title:"C\xe1mara",value:{img:e,name:"pepito"}}).subscribe(n=>{n&&n.urlrute&&n.urlrute.length>0&&(e[l]=`${o.label} \u2714\ufe0f`,this.sharedvar.selPollResult.metaValues[l]=n.urlrute,this.updateLocalList(e),this.reset++)})}getDraw(e,o,l){this.dg.aDraw({title:"Dibujar",value:{img:this.sharedvar.selPollResult.metaValues[l]?this.sharedvar.selPollResult.metaValues[l]:o.avalue,name:"pepito"}}).subscribe(n=>{n&&n.urlrute&&n.urlrute.length>0&&(e[l]=`${o.label} \u2714\ufe0f`,this.sharedvar.selPollResult.metaValues[l]=n.urlrute,this.updateLocalList(e),this.reset++)})}getAppoint(e,o,l="appoint"){var s=this;return(0,d.Z)(function*(){let a="No seleccionado",n={name:"contact",label:"Contacto",type:"text",style:"w-full",validators:{}};const h={};if(s.sharedvar.selPollResult.crm_costum_id){const r=yield s.dtb.getCMRCostumAsync(s.sharedvar.selPollResult.crm_costum_id);a=r&&r.name?r.name:a;const b=[];r?.linkup_1&&(h[r.linkup_1]={email:r.email_1||"none",phone:r.phone_1||"none"},b.push({key:r.linkup_1,value:r.linkup_1})),r?.linkup_2&&(h[r.linkup_2]={email:r.email_2||"one",phone:r.phone_2||"nonde"},b.push({key:r?.linkup_2,value:r?.linkup_2})),n.type="select",n.selectOptions=b}const _=new Date;_.setSeconds(0),s.dg.aDefault({title:"Appoint"===l?"Agenda":"Nota",schema:{controls:[{name:"datetime",label:"Fecha y hora:",type:"datetime-local",default:_,disabled:"note"===l,validators:{required:!0}},{name:"costumer",label:"Cliente",type:"text",default:a,validators:{required:!0}},n,{name:"task",label:"Actividad/Compromiso:",type:"textarea",totalRows:4,style:"w-full",validators:{required:!0}}]},value:s.sharedvar.selPollResult.metaValues[o],dgwidth:400,dgheigth:615}).subscribe(r=>{if(r&&r.datetime){const b=h[r.contact]&&h[r.contact].phone?h[r.contact].phone:"phone",D=h[r.contact]&&h[r.contact].email?h[r.contact].email:"email",ue=`${s.sharedvar.formatNumber2DateTime(r.datetime,"/")} - ${r.task||""}`;if(r.appoint_type=l,r.phone=b,r.email=D,r.pollresult_id=s.sharedvar.selPollResult._id,"appoint"!==l)return r;e[o]=ue,s.sharedvar.selPollResult.metaValues[o]=r,s.updateLocalList(e),s.reset++}})})()}getCostumer(e,o){const l=this.sharedvar.pollExecSelected.costumerList;l&&l.length>0&&this.onSelCtrlList(l,"Seleccione Cliente",e,o,"costumer",!1)}getProduct(e,o){const l=this.sharedvar.pollExecSelected.productList;l&&l.length>0&&this.onSelCtrlList(l,"Seleccione Producto",e,o,"product",!0)}onSelCtrlList(e,o,l,s,a,n){var h=this;return(0,d.Z)(function*(){const _=[];e.forEach(g=>{if(g){const x=g.split(":"),r=h.sharedvar.selPollResult.crm_prod_id?.findIndex(D=>D===x[0]);_.push({selected:!!(r&&r>=0),myid:x[0],name:x[1]})}});const w={title:o,viewfilter:!0,viewAdd:!1,multiSelect:n,valuelst:_};return yield h.ds.aSelectDefault(w).subscribe(g=>{g&&("product"===a?(h.sharedvar.selPollResult.crm_prod_id=[],l[s]="",g.forEach(x=>{l[s]+=x.name+",\n"})):(h.sharedvar.selPollResult.crm_costum_id=g[0].myid,h.sharedvar.selPollResult.crm_costum_name=g[0].name,l[s]=g[0].name),h.updateLocalList(l),h.reset++)})})()}onResultDone(e){let o={...e};return this.sharedvar.pollExecSelected.pollList.forEach(l=>{o.values={...o.values,...l.values}}),o.values&&(o.values._btnEvent_="",o.values._valid_=!0),o}findDupPollList(e,o){const l=e.schema.controls?.find(n=>n.name==o);if(!l)return;const s=l.tags||{},a=this.sharedvar.pollExecSelected.pollList.find(n=>n.id===s.dupactivity);if(a){const n=JSON.parse(JSON.stringify(a));return n.title=`${a.title} ${a.dupTotal}`,a.dupTotal++,n.totalDup=0,n.id=this.dtb.getSerialKey(3,4,"_"),n.duplicated=!0,this.updatePollNames(n),l.selectOptions?.push({key:n.id,value:n.title}),this.sharedvar.pollExecSelected.pollList.push(n),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult),this.reset++,n.id}}updatePollNames(e){e.schema.controls?.forEach(o=>{o.name=this.getUniqueName(o.name,this.sharedvar.pollExecSelected.pollList)})}getUniqueName(e,o){let l=0;for(let s=0;s<o.length;s++){const a=o[s].schema.controls||[];for(let n=0;n<a.length;n++)if(a[n].name===`${e}_${l}`){l++,s=-1;break}}return`${e}_${l}`}static#e=this.\u0275fac=function(o){return new(o||i)(t.Y36(U.k),t.Y36(F.ux),t.Y36(B.x),t.Y36(Q),t.Y36(z.$),t.Y36(K.D),t.Y36(j.$),t.Y36(W.Q),t.Y36(X))};static#t=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-poll"]],decls:18,vars:13,consts:[[1,"flex","flex-col","max-h-screen"],[3,"buttons","lchat","onClicked"],[1,"flex","align-middle","justify-center","h-8","border-b","border-violet-500","font-medium","text-lg","p-1","mb-1","text-violet-900"],[3,"matMenuTriggerFor"],[1,"grow","pt-3","mx-1","overflow-y-auto","overflow-x-hidden"],[3,"reset","jsonFormData","values","commands","result","valid"],[1,"h-12","flex","flex-row","items-center","justify-center","border-t","border-violet-500"],["color","primary","mat-raised-button","",3,"click",4,"ngIf"],["color","warn","mat-raised-button","",3,"click",4,"ngIf"],["visitedmenu","matMenu"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["color","primary","mat-raised-button","",3,"click"],["color","warn","mat-raised-button","",3,"click"],["mat-menu-item","",3,"click"]],template:function(o,l){if(1&o&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("onClicked",function(a){return l.getClicked(a)}),t.qZA(),t.TgZ(2,"div",2)(3,"span",3),t._uU(4),t.qZA(),t.TgZ(5,"mat-icon",3),t._uU(6,"arrow_drop_down"),t.qZA()(),t.TgZ(7,"div",4)(8,"app-dynamic-form",5),t.NdJ("result",function(a){return l.onGetData(a)})("valid",function(a){return l.onGetValid(a)}),t.qZA()(),t.TgZ(9,"div",6),t.YNc(10,le,3,0,"button",7),t._uU(11," \xa0 "),t.YNc(12,oe,4,0,"button",7),t._uU(13," \xa0 "),t.YNc(14,se,3,0,"button",8),t.qZA()(),t.TgZ(15,"mat-menu",null,9),t.YNc(17,ie,2,1,"button",10),t.qZA()),2&o){const s=t.MAs(16);t.xp6(1),t.Q6J("buttons","00001001")("lchat",l.lchat),t.xp6(2),t.Q6J("matMenuTriggerFor",s),t.xp6(1),t.Oqu(l.selectedPoll.title),t.xp6(1),t.Q6J("matMenuTriggerFor",s),t.xp6(3),t.Q6J("reset",l.reset)("jsonFormData",l.selectedPoll.schema)("values",l.selectedPoll.values)("commands",l.commands),t.xp6(2),t.Q6J("ngIf",l.goto.length>1),t.xp6(2),t.Q6J("ngIf",l.selectedPoll.allowEnd),t.xp6(2),t.Q6J("ngIf",l.selectedPoll.duplicated),t.xp6(3),t.Q6J("ngForOf",l.visitePollList)}},dependencies:[p.sg,p.O5,ee.G,te.r,f.VK,f.OP,f.p6,$.lW,A.Hw]})}return i})()}];let ne=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=t.oAB({type:i});static#l=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(ae),u.Bz]})}return i})();var re=c(8471),ce=c(6842);let de=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=t.oAB({type:i});static#l=this.\u0275inj=t.cJS({imports:[p.ez,ne,re.O,ce.N,f.Tx,$.ot,A.Ps,F.ZX]})}return i})()},4066:S=>{const P="[a-fA-F\\d:]",c=v=>v&&v.includeBoundaries?`(?:(?<=\\s|^)(?=${P})|(?<=${P})(?=\\s|$))`:"",p="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",u="[a-fA-F\\d]{1,4}",d=`\n(?:\n(?:${u}:){7}(?:${u}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${u}:){6}(?:${p}|:${u}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${u}:){5}(?::${p}|(?::${u}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${u}:){4}(?:(?::${u}){0,1}:${p}|(?::${u}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${u}:){3}(?:(?::${u}){0,2}:${p}|(?::${u}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${u}:){2}(?:(?::${u}){0,3}:${p}|(?::${u}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${u}:){1}(?:(?::${u}){0,4}:${p}|(?::${u}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::${u}){0,5}:${p}|(?::${u}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),C=new RegExp(`(?:^${p}$)|(?:^${d}$)`),y=new RegExp(`^${p}$`),E=new RegExp(`^${d}$`),k=v=>v&&v.exact?C:new RegExp(`(?:${c(v)}${p}${c(v)})|(?:${c(v)}${d}${c(v)})`,"g");k.v4=v=>v&&v.exact?y:new RegExp(`${c(v)}${p}${c(v)}`,"g"),k.v6=v=>v&&v.exact?E:new RegExp(`${c(v)}${d}${c(v)}`,"g"),S.exports=k},6599:(S,P,c)=>{const p=c(4066),u=d=>p({exact:!0}).test(d);u.v4=d=>p.v4({exact:!0}).test(d),u.v6=d=>p.v6({exact:!0}).test(d),u.version=d=>u(d)?u.v4(d)?4:6:void 0,S.exports=u}}]);