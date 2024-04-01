"use strict";(self.webpackChunktasky_tasker=self.webpackChunktasky_tasker||[]).push([[516],{6516:(k,P,d)=>{d.r(P),d.d(P,{PollModule:()=>ue});var p=d(6895),u=d(9132),r=d(5861),w=d(6599);class S extends Error{constructor(){super("Request was cancelled"),this.name="CancelError"}get isCanceled(){return!0}}class E extends Error{constructor(g){super("Could not get the public IP address",g),this.name="IpNotFoundError"}}const y={timeout:5e3},m={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},F=(a,g,e)=>{const o=new XMLHttpRequest;let l;const s=new Promise((i,n)=>{l=n,o.addEventListener("error",n,{once:!0}),o.addEventListener("timeout",n,{once:!0}),o.addEventListener("load",()=>{const h=o.responseText.trim();h&&w[e](h)?i(h):n()},{once:!0}),o.open("GET",a),o.timeout=g.timeout,o.send()});return s.cancel=()=>{o.abort(),l(new S)},s},M=(a,g)=>{let e;const o=(0,r.Z)(function*(){const l=[...m[a],...g.fallbackUrls??[]];let s;for(const i of l)try{return e=F(i,g,a),yield e}catch(n){if(s=n,n instanceof S)throw n}throw new E({cause:s})})();return o.cancel=()=>{e.cancel()},o},J={v4:a=>M("v4",{...y,...a}),v6:a=>M("v6",{...y,...a})};function Z(){return(Z=(0,r.Z)(function*(a){if(a={timeout:5e3,ipVersion:4,...a},!navigator?.onLine)return!1;const g=4===a.ipVersion?"v4":"v6";try{return yield J[g](a),!0}catch{return!1}})).apply(this,arguments)}var t=d(4650),U=d(8826),O=d(7009),I=d(3028),L=d(5412),A=d(4859),$=d(7392),_=d(8255),C=d(4006);function B(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"div",15)(1,"input",16),t.NdJ("change",function(){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onChekAll())}),t.qZA()()}if(2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("checked",e.chekAll)}}function q(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"div",11),t.YNc(1,B,2,1,"div",12),t.TgZ(2,"mat-icon",13),t._uU(3),t.qZA(),t.TgZ(4,"input",14),t.NdJ("ngModelChange",function(l){t.CHM(e);const s=t.oxw();return t.KtG(s.filtertext=l)})("change",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onViewSelected(!1))}),t.qZA()()}if(2&a){const e=t.oxw(),o=t.MAs(15);t.xp6(1),t.Q6J("ngIf",e.multiSelect),t.xp6(1),t.Q6J("matMenuTriggerFor",o),t.xp6(1),t.Oqu(e.getView()),t.xp6(1),t.Q6J("ngModel",e.filtertext)}}function V(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"div",19)(1,"input",20),t.NdJ("ngModelChange",function(l){t.CHM(e);const s=t.oxw().$implicit;return t.KtG(s.selected=l)})("change",function(){t.CHM(e);const l=t.oxw().$implicit,s=t.oxw();return t.KtG(s.onSelected(l))}),t.qZA(),t.TgZ(2,"label",21),t._uU(3),t.qZA()()}if(2&a){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngModel",e.selected),t.xp6(2),t.Oqu(e.name)}}function G(a,g){if(1&a&&(t.TgZ(0,"div",17),t.YNc(1,V,4,2,"div",18),t.qZA()),2&a){const e=g.$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.getViewFilter(e))}}function Y(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"div",22)(1,"button",7),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onNew())}),t._uU(2," Nuevo\xa0 "),t.TgZ(3,"mat-icon"),t._uU(4,"add"),t.qZA()()()}}let Q=(()=>{class a{constructor(e,o){this.dialogRef=e,this.data=o,this.filtertext="",this.selectedOptions=[],this.chekAll=!1,this.viewSelected=!1,this.multiSelect=!1,e.disableClose=!0,this.multiSelect=o.multiSelect||!1}onNew(){this.dialogRef.close({new:!0})}onChekAll(){this.chekAll=!this.chekAll,this.data.valuelst?.forEach(e=>{e.selected=this.chekAll})}getViewFilter(e){if(this.viewSelected)return e.selected||!1;const o=this.filtertext.toUpperCase();return!!(0===o.length||e&&e.name&&e.name.toUpperCase().includes(o))}onSelected(e){this.multiSelect||(this.selectedOptions=[e],this.dialogRef.close(this.selectedOptions))}onSave(){this.selectedOptions=[],this.data.valuelst?.forEach(e=>{e.selected&&this.selectedOptions.push(e)}),this.dialogRef.close(this.selectedOptions)}onDismiss(){this.dialogRef.close()}getView(){return this.viewSelected?"done":"visibility"}onViewSelected(e){this.viewSelected=e}static#e=this.\u0275fac=function(o){return new(o||a)(t.Y36(L.so),t.Y36(L.WI))};static#t=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-select-dialog"]],decls:24,vars:4,consts:[[1,"flex","flex-col","h-full"],[1,"h-12","p-3","text-2xl","bg-violet-600","text-white"],["class","h-10 w-full flex flex-row items-center border-b border-violet-500",4,"ngIf"],[1,"flex-1","overflow-auto","mt-2"],["class","flex flex-column",4,"ngFor","ngForOf"],[1,"flex","p-3","justify-end","border-t","border-violet-500"],["class","flex-1","fxFlex","",4,"ngIf"],["mat-stroked-button","","color","warn",3,"click"],["mat-stroked-button","","color","primary","cdkFocusInitia","",3,"click"],["selectView","matMenu"],["mat-menu-item","",3,"click"],[1,"h-10","w-full","flex","flex-row","items-center","border-b","border-violet-500"],["class","w-6 ml-2 mt-2",4,"ngIf"],[1,"bg-gray-200","rounded-sm",3,"matMenuTriggerFor"],["type","search","placeholder","Filtrar...",1,"flex-1","ml-2","h-8","z-20","text-gray-900","outline-none","border-b","border-gray-200","focus:outline-none","focus:outline-none",3,"ngModel","ngModelChange","change"],[1,"w-6","ml-2","mt-2"],["type","checkbox",1,"w-4","h-4","focus:border-blue-500",3,"checked","change"],[1,"flex","flex-column"],["class","flex flex-row h-8 ml-2",4,"ngIf"],[1,"flex","flex-row","h-8","ml-2"],["id","itemsel","type","checkbox",1,"w-4","h-4","text-violet-500","bg-gray-100","border-gray-300","rounded","dark:focus:ring-violet-500","dark:ring-offset-gray-800","focus:ring-2","dark:bg-gray-700","dark:border-gray-600",3,"ngModel","ngModelChange","change"],["for","itemsel",1,"ml-4","h-4","w-72","text-sm","text-gray-900","overflow-hidden"],["fxFlex","",1,"flex-1"]],template:function(o,l){1&o&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2),t.qZA(),t.YNc(3,q,5,4,"div",2),t.TgZ(4,"div",3),t.YNc(5,G,2,1,"div",4),t.qZA(),t.TgZ(6,"div",5),t.YNc(7,Y,5,0,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return l.onDismiss()}),t.TgZ(9,"mat-icon"),t._uU(10,"close"),t.qZA()(),t.TgZ(11,"button",8),t.NdJ("click",function(){return l.onSave()}),t.TgZ(12,"mat-icon"),t._uU(13,"done"),t.qZA()()(),t.TgZ(14,"mat-menu",null,9)(16,"button",10),t.NdJ("click",function(){return l.onViewSelected(!0)}),t.TgZ(17,"mat-icon"),t._uU(18,"done"),t.qZA(),t._uU(19," Ver seleccionados "),t.qZA(),t.TgZ(20,"button",10),t.NdJ("click",function(){return l.onViewSelected(!1)}),t.TgZ(21,"mat-icon"),t._uU(22,"visibility"),t.qZA(),t._uU(23," Ver Todo "),t.qZA()()()),2&o&&(t.xp6(2),t.Oqu(l.data.title),t.xp6(1),t.Q6J("ngIf",l.data.viewfilter),t.xp6(2),t.Q6J("ngForOf",l.data.valuelst),t.xp6(2),t.Q6J("ngIf",l.data.viewAdd))},dependencies:[p.sg,p.O5,A.lW,$.Hw,_.VK,_.OP,_.p6,C.Fj,C.Wl,C.JJ,C.On]})}return a})(),H=(()=>{class a{constructor(e){this.dialog=e}aSelectDefault(e){let o=window.innerHeight-20;return e.dgheigth=e.dgheigth||o,o=o>600?600:o,this.dialogRef=this.dialog.open(Q,{panelClass:"custom-dialog-container",height:o.toString()+"px",width:"350px",data:e}),this.dialogRef.afterClosed()}static#e=this.\u0275fac=function(o){return new(o||a)(t.LFG(L.uw))};static#t=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var z=d(2419),K=d(5377),j=d(9055),W=d(9496);let X=(()=>{class a{constructor(){this.recognition=new webkitSpeechRecognition,this.isRecording=!1,this.text="",this.tempWords=""}init(){this.recognition.interimResults=!0,this.recognition.lang="es-CO",this.recognition.addEventListener("result",e=>{const o=Array.from(e.results).map(l=>l[0]).map(l=>l.transcript).join("");this.tempWords=o,console.log(this.tempWords)})}voiceRecogition(e){return this.text=e,this.isRecording?this.stop():this.start(),this.text}start(){this.isRecording||(this.isRecording=!0,this.recognition.start(),console.log("Speech recognition started"),this.recognition.addEventListener("end",e=>{this.isRecording?(this.wordConcat(),this.recognition.start()):(this.recognition.stop(),console.log("End speech recognition"))}))}stop(){this.isRecording&&(this.isRecording=!1,this.wordConcat(),this.recognition.stop(),console.log("End speech recognition"))}wordConcat(){this.text=this.text+" "+this.tempWords+".",this.tempWords=""}static#e=this.\u0275fac=function(o){return new(o||a)};static#t=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ee=d(3646),te=d(2395);const le=["editControlTrigger"];function oe(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onBack())}),t.TgZ(1,"mat-icon"),t._uU(2,"arrow_back"),t.qZA()()}}function se(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onEndPoll())}),t._uU(1," Finalizar"),t.TgZ(2,"mat-icon"),t._uU(3,"done"),t.qZA()()}}function ae(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onDelete())}),t.TgZ(1,"mat-icon"),t._uU(2,"delete"),t.qZA()()}}function ie(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){const s=t.CHM(e).$implicit,i=t.oxw();return t.KtG(i.visiteByAvailTitle(s))}),t._uU(1),t.qZA()}if(2&a){const e=g.$implicit,o=t.oxw();t.xp6(1),t.hij(" ",o.getAvailPollTitle(e)," ")}}const ne=[{path:"",component:(()=>{class a{constructor(e,o,l,s,i,n,h,f,R){this.dtb=e,this.snkBar=o,this.dg=l,this.ds=s,this.nvg=i,this.sharedvar=n,this.notifServ=h,this.htm2pdf=f,this.service=R,this.lchat=!1,this.goto=[],this.visitePollList=[],this.reset=0,this.commands="",this.service.init()}ngOnInit(){var e=this;return(0,r.Z)(function*(){e.sharedvar.pollExecSelected.pollList.length>0?(e.selectedPoll=e.sharedvar.pollExecSelected.pollList[0],e.goto.push(e.selectedPoll.id),e.availablePolls(e.selectedPoll.title,e.selectedPoll.id)):(e.snkBar.open("Listado de actividades vac\xedo.","Ok",{duration:5e3}),e.nvg.onRouteBack());const o=e.dtb.getLocalPollResult(e.sharedvar.pollExecSelected.pollResult_id).subscribe(l=>{o&&o.unsubscribe(),e.sharedvar.selPollResult=l,e.sharedvar.selPollResult.status<2&&e.OnStartPoll(),e.subscribeChatEvent(),e.sharedvar.pollExecSelected.done&&e.onEndPoll()})})()}OnStartPoll(){var e=this;return(0,r.Z)(function*(){e.sharedvar.selPollResult.status=2,e.sharedvar.selPollResult.date_ini=1e4*Math.trunc(Number(Date.now())/1e4),e.sharedvar.pollExecSelected.onStart&&(e.sharedvar.pollExecSelected.onStart.sendMail2&&e.sharedvar.pollExecSelected.onStart.sendMail2.length>0&&e.dtb.notifMail(e.sharedvar.selPollResult,e.sharedvar.pollExecSelected.onStart.sendMail2,"","start"),e.sharedvar.pollExecSelected.onStart.geoLoc&&(e.sharedvar.selPollResult.geoLocStart=yield e.getLocalization())),e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult),e.dtb.updatePartialAsync(e.sharedvar.selPollResult,"status")})()}OnEndPoll(){var e=this;return(0,r.Z)(function*(){e.sharedvar.selPollResult.date_end=1e4*Math.trunc(Number(Date.now())/1e4),e.sharedvar.selPollResult.staff_picture="",e.sharedvar.pollExecSelected.onEnd&&e.sharedvar.pollExecSelected.onEnd.geoLoc&&(e.sharedvar.selPollResult.geoLocEnd=yield e.getLocalization())})()}availablePolls(e,o){this.visitePollList.find(l=>l===`${e}:${o}`)||this.visitePollList.push(`${e}:${o}`)}getAvailPollTitle(e){return e.split(":")[0]}visiteByAvailTitle(e){const o=e.split(":")[1];if(this.goto[this.goto.length-1]===o)return;const l=this.sharedvar.pollExecSelected.pollList.find(s=>s.id===o);l&&(this.goto.push(o),this.selectedPoll=l,this.reset++)}subscribeChatEvent(){var o,e=this;this.chatSub=this.notifServ.dtb_notification().subscribe({next:(o=(0,r.Z)(function*(l){"chat"===l.collection&&l.field_id&&l.field_id===e.sharedvar.selPollResult._id&&e.getChatState()}),function(s){return o.apply(this,arguments)}),complete:()=>{console.log()}}),this.getChatState()}getChatState(){var e=this;return(0,r.Z)(function*(){const o=yield e.dtb.getChat(e.sharedvar.selPollResult._id);e.sharedvar.selPollResult.status_date=Date.now(),e.sharedvar.selPollResult.chats=o;const l=o.length-1;return l>=0&&"W"===o[l].type?(e.snkBar.open(`Mensaje: ${e.sharedvar.selPollResult.chats[l].msg}.`,"Ok",{duration:3e3}),e.lchat=!0):e.lchat=!1,l})()}ngOnDestroy(){this.subs&&this.subs.unsubscribe()}getClicked(e){switch(e.index){case 4:let o=document.getElementById("spanTrigger");o&&(o.style.display="",o.style.position="absolute",o.style.left=e.pageX+5+"px",o.style.top=e.pageY+5+"px",this.editControlTrigger.openMenu());break;case 5:this.updateResultParcial();break;case 7:this.commands="question_mark"===this.commands?"":"question_mark"}}chatExec(e){const l={title:0===e?"Administrador":"IA "+this.selectedPoll.title,dgwidth:400,value:this.sharedvar.selPollResult.chats,function:[this.adminChat,this.AI_Chat],tags:{chat:e.toString(),ai:"1",who:"T"}};this.dg.aChat(l)}adminChat(e,o,l){e.sharedvar.selPollResult.chats=o,e.dtb.updatePartialAsync(e.sharedvar.selPollResult,"chats")}AI_Chat(e,o,l){e.sharedvar.selPollResult.chats=o,e.dtb.updatePartialAsync(e.sharedvar.selPollResult,"chats")}onGetData(e){var o=this;return(0,r.Z)(function*(){const l=e._btnclick_,s=e._propName_;if(s&&o.selectedPoll.schema.controls){const i=o.selectedPoll.schema.controls.find(n=>n.name===s);if(i&&i.tags)if(l)switch(i.tags.type){case"goto":o.getGoto(s,i,e);break;case"geolocation":e[s]=yield o.getLocalization(),i.sideBtn="done",o.reset++;break;case"picture":o.getPicture(e,i,s);break;case"draw":o.getDraw(e,i,s);break;case"appoint":o.getAppoint(e,s);break;case"costumer":o.getCostumer(e,s);break;case"product":o.getProduct(e,s);break;case"duplicate":const n=o.findDupPollList(o.selectedPoll,s);i.avalue=n,e[s]=n,n&&o.getGoto(s,i,e);break;case"text":case"textarea":e[s]=o.service.voiceRecogition(e[s]),o.reset++}else e._command_&&e._command_===o.commands&&i.tags.help?o.snkBar.open(i.tags.help,"Listo",{duration:1e4}):(e._btnclick_2_||"duplicate"===i.tags.type)&&o.getGoto(s,i,e)}o.updateLocalList(e)})()}onGetValid(e){this.selectedPoll.values._valid_!==e&&this.updateLocalList({_valid_:e})}getGoto(e,o,l){const s=this.sharedvar.pollExecSelected.pollList.find(i=>i.id===o.avalue);if(s&&o.avalue&&o.avalue.length>0)this.goto.push(o.avalue),this.sharedvar.selPollResult.metaValues[e]=l.urlrute||o.avalue,this.reset++,setTimeout(()=>{delete l._valid_,this.updateLocalList(l),this.selectedPoll=s,this.availablePolls(this.selectedPoll.title,this.selectedPoll.id),this.reset++},100);else if(o.selectOptions){const i=o.selectOptions.findIndex(n=>n.key===o.avalue);i>=0&&o.selectOptions.splice(i,1)}}getLocalization(){var e=this;return(0,r.Z)(function*(){const l=yield e.getPosition();return l.lng=Math.trunc(1e4*l.lng)/1e4,l.lat=Math.trunc(1e4*l.lat)/1e4,e.snkBar.open("Ubicaci\xf3n ingresada.","Ok",{duration:3e3}),l})()}updateLocalList(e){!this.selectedPoll.values||!e||(e._btnEvent_="",e._propName_="",this.selectedPoll.values=this.dg.updatePropResult(this.selectedPoll.values,e),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult))}onBack(){var e=this;this.selectedPoll.values&&!1===this.selectedPoll.values._valid_?this.snkBar.open("Hay campos sin llenar. \xbfSalir de todos modos?","Si",{duration:3e3}).onAction().subscribe((0,r.Z)(function*(){e.onBackProcess()})):this.onBackProcess()}onBackProcess(){if(this.goto.length>1){const e=this.sharedvar.pollExecSelected.pollList.find(o=>o.id===this.goto[this.goto.length-2]);e&&(this.selectedPoll=e,this.goto.splice(this.goto.length-1,1))}}onDelete(){var e=this;this.snkBar.open("\xbfBorrar \xe9ste grupo?","Ok",{duration:3e3}).onAction().subscribe((0,r.Z)(function*(){if(e.goto.length>1){const o=e.sharedvar.pollExecSelected.pollList.find(s=>s.id===e.goto[e.goto.length-2]),l=e.sharedvar.pollExecSelected.pollList.findIndex(s=>s.id===e.goto[e.goto.length-1]);l>=0&&e.sharedvar.pollExecSelected.pollList.splice(l,1),o&&(e.selectedPoll=o,e.goto.splice(e.goto.length-1,1))}}))}onEndPoll(){var e=this;return(0,r.Z)(function*(){const o=e.isValid();""===o?e.selectedPoll.allowEnd&&e.snkBar.open("\xbfFinalizar?","Ok",{duration:5e3}).onAction().subscribe((0,r.Z)(function*(){e.sharedvar.selPollResult=e.onResultDone(e.sharedvar.selPollResult),e.sharedvar.selPollResult?(e.sharedvar.selPollResult.ended=!0,e.sharedvar.selPollResult.status=3,e.sharedvar.selPollResult.status_date=Date.now(),(yield function N(a){return Z.apply(this,arguments)}())?window.location.hostname.includes("tasky-danilo-prod.up.railway.app")||window.location.hostname.includes("localhost")?yield e.exportResultDataDevelop():yield e.exportResultData():(e.snkBar.open("No fue posible exportar la informaci\xf3n. Por favor sincronice cuando est\xe9 linea.","Ok",{duration:3e3}),e.sharedvar.pollExecSelected.done=!0,e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult)),e.nvg.onRouteBack()):e.snkBar.open("Existen campos sin llenar.","Ok",{duration:3e3})})):e.snkBar.open(`Debe llenar campos requeridos en "${o}".`,"Ok",{duration:3e3})})()}isValid(){let e="",o=!0,l=[];for(const s of this.visitePollList){l=s.split(":");const i=this.sharedvar.pollExecSelected.pollList.find(n=>n.id===l[1]);if(i&&(o=i.values._valid_&&o,!o)){e=i.title;break}}return""!==e&&this.visiteByAvailTitle(l.join(":")),e}updateResultParcial(){var e=this;return(0,r.Z)(function*(){const o=JSON.parse(JSON.stringify(e.sharedvar.pollExecSelected)),l=JSON.parse(JSON.stringify(e.sharedvar.selPollResult));e.dtb.promiseMetaData(o,l).then(function(){var s=(0,r.Z)(function*(i){l.date_end=1e4*Math.trunc(Number(Date.now())/1e4),l.values={},l.values_type={},o.pollList.forEach(n=>{e.updatePollPropResult(l.values,l.values_type,n)}),yield e.dtb.CreateUpdatePollResult(l),e.snkBar.open("Encuesta parcial enviada.","Listo",{duration:5e3})});return function(i){return s.apply(this,arguments)}}())})()}exportResultData(e=0,o=0){var l=this;return(0,r.Z)(function*(){l.dtb.promiseMetaData(l.sharedvar.pollExecSelected,l.sharedvar.selPollResult).then(function(){var s=(0,r.Z)(function*(i){i&&(l.sharedvar.selPollResult.values={},l.sharedvar.selPollResult.values_type={},l.sharedvar.pollExecSelected.pollList.forEach(n=>{l.updatePollPropResult(l.sharedvar.selPollResult.values,l.sharedvar.selPollResult.values_type,n)}),yield l.OnEndPoll(),l.sharedvar.selPollResult.metaValues=[],e>0&&o>0&&(l.sharedvar.selPollResult.date_ini=e,l.sharedvar.selPollResult.date_end=o),l.sharedvar.selPollResult=yield l.dtb.CreateUpdatePollResult(l.sharedvar.selPollResult),yield l.dtb.updateStaffAsync(l.sharedvar.staff),console.log(l.sharedvar.selPollResult),l.sharedvar.pollExecSelected&&l.sharedvar.pollExecSelected.onEnd?.sendMail2&&l.sharedvar.pollExecSelected.onEnd.sendMail2.length>0&&l.htm2pdf.buildHtml2Pdf(l.sharedvar.selPollResult,l.sharedvar.pollExecSelected.onEnd.sendMail2),l.dtb.delFromLocalList(l.sharedvar.pollExecSelected),l.snkBar.open('Encuesta finalizada. Siga el reporte de sus encuestas en "Estado de mi Cuenta".',"Ok",{duration:5e3}))});return function(i){return s.apply(this,arguments)}}())})()}exportResultDataDevelop(){var e=this;return(0,r.Z)(function*(){const o=e.sharedvar.dateNow(),l=o+e.sharedvar.addMinutes(30);e.dg.aDefault({title:"Horario acomodado",schema:{controls:[{name:"date_ini",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"date_end",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}}]},value:{date_ini:o,date_end:l},dgwidth:400,dgheigth:360}).subscribe(n=>{n&&e.exportResultData(n.date_ini,n.date_end)})})()}updatePollPropResult(e,o,l){return l.schema.controls?.forEach(s=>{if(l.values._btnEvent_="",l.values._propName_="",l.values._valid_="",l.values._btnclick_="",s.tags&&!0===s.tags.dtbase&&l.values[s.name]&&l.values[s.name].toString().length>0){let i=s.tags.type;switch(s.tags.type){case"draw":i="picture";break;case"product":case"multiselect":i="array";break;case"textarea":case"costumer":case"duplicate":case"goto":case"header":i="text"}e[s.name]=l.values[s.name],o[s.name]=i}}),e}geoloc(){var e=this;return(0,r.Z)(function*(){yield e.getPosition().then(l=>{l.lng=Math.trunc(100*l.lng)/100,l.lat=Math.trunc(100*l.lat)/100})})()}getPosition(){return new Promise((e,o)=>{navigator.geolocation.getCurrentPosition(l=>{e({lng:l.coords.longitude,lat:l.coords.latitude})},l=>{o(l)})})}getPicture(e,o,l){this.dg.aCamera({title:"C\xe1mara",value:{img:e,name:"pepito"}}).subscribe(n=>{n&&n.urlrute&&n.urlrute.length>0&&(e[l]=`${o.label} \u2714\ufe0f`,this.sharedvar.selPollResult.metaValues[l]=n.urlrute,this.updateLocalList(e),this.reset++)})}getDraw(e,o,l){this.dg.aDraw({title:"Dibujar",value:{img:this.sharedvar.selPollResult.metaValues[l]?this.sharedvar.selPollResult.metaValues[l]:o.avalue,name:"pepito"}}).subscribe(n=>{n&&n.urlrute&&n.urlrute.length>0&&(e[l]=`${o.label} \u2714\ufe0f`,this.sharedvar.selPollResult.metaValues[l]=n.urlrute,this.updateLocalList(e),this.reset++)})}getAppoint(e,o,l="appoint"){var s=this;return(0,r.Z)(function*(){let i="No seleccionado",n={name:"contact",label:"Contacto",type:"text",style:"w-full",validators:{}};const h={};if(s.sharedvar.selPollResult.crm_costum_id){const c=yield s.dtb.getCMRCostumAsync(s.sharedvar.selPollResult.crm_costum_id);i=c&&c.name?c.name:i;const b=[];c?.linkup_1&&(h[c.linkup_1]={email:c.email_1||"none",phone:c.phone_1||"none"},b.push({key:c.linkup_1,value:c.linkup_1})),c?.linkup_2&&(h[c.linkup_2]={email:c.email_2||"one",phone:c.phone_2||"nonde"},b.push({key:c?.linkup_2,value:c?.linkup_2})),n.type="select",n.selectOptions=b}const f=new Date;f.setSeconds(0),s.dg.aDefault({title:"Appoint"===l?"Agenda":"Nota",schema:{controls:[{name:"datetime",label:"Fecha y hora:",type:"datetime-local",default:f,disabled:"note"===l,validators:{required:!0}},{name:"dateend",label:"Fecha y hora finalizaci\xf3n:",type:"datetime-local",default:f,disabled:"note"===l,validators:{required:!0}},{name:"costumer",label:"Cliente",type:"text",default:i,validators:{required:!0}},n,{name:"notes",label:"Actividad/Compromiso:",type:"textarea",totalRows:4,style:"w-full",validators:{required:!0}}]},value:s.sharedvar.selPollResult.metaValues[o],dgwidth:400,dgheigth:615}).subscribe(c=>{if(c&&c.datetime){const b=h[c.contact]&&h[c.contact].phone?h[c.contact].phone:"phone",D=h[c.contact]&&h[c.contact].email?h[c.contact].email:"email",he=`${s.sharedvar.formatNumber2DateTime(c.datetime,"/")} - ${c.notes||""}`;if(c.appoint_type=l,c.phone=b,c.email=D,c.pollresult_id=s.sharedvar.selPollResult._id,"appoint"!==l)return c;e[o]=he,s.sharedvar.selPollResult.metaValues[o]=c,s.updateLocalList(e),s.reset++}})})()}getCostumer(e,o){const l=this.sharedvar.pollExecSelected.costumerList;l&&l.length>0&&this.onSelCtrlList(l,"Seleccione Cliente",e,o,"costumer",!1)}getProduct(e,o){const l=this.sharedvar.pollExecSelected.productList;l&&l.length>0&&this.onSelCtrlList(l,"Seleccione Producto",e,o,"product",!0)}onSelCtrlList(e,o,l,s,i,n){var h=this;return(0,r.Z)(function*(){const f=[];e.forEach(v=>{if(v){const x=v.split(":"),c=h.sharedvar.selPollResult.crm_prod_id?.findIndex(D=>D===x[0]);f.push({selected:!!(c&&c>=0),myid:x[0],name:x[1]})}});const R={title:o,viewfilter:!0,viewAdd:!1,multiSelect:n,valuelst:f};return yield h.ds.aSelectDefault(R).subscribe(v=>{v&&("product"===i?(h.sharedvar.selPollResult.crm_prod_id=[],l[s]="",v.forEach(x=>{l[s]+=x.name+",\n"})):(h.sharedvar.selPollResult.crm_costum_id=v[0].myid,h.sharedvar.selPollResult.crm_costum_name=v[0].name,l[s]=v[0].name),h.updateLocalList(l),h.reset++)})})()}onResultDone(e){let o={...e};return this.sharedvar.pollExecSelected.pollList.forEach(l=>{o.values={...o.values,...l.values}}),o.values&&(o.values._btnEvent_="",o.values._valid_=!0),o}findDupPollList(e,o){const l=e.schema.controls?.find(n=>n.name==o);if(!l)return;const s=l.tags||{},i=this.sharedvar.pollExecSelected.pollList.find(n=>n.id===s.dupactivity);if(i){const n=JSON.parse(JSON.stringify(i));return n.title=`${i.title} ${i.dupTotal}`,i.dupTotal++,n.totalDup=0,n.id=this.dtb.getSerialKey(3,4,"_"),n.duplicated=!0,this.updatePollNames(n),l.selectOptions?.push({key:n.id,value:n.title}),this.sharedvar.pollExecSelected.pollList.push(n),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult),this.reset++,n.id}}updatePollNames(e){e.schema.controls?.forEach(o=>{o.name=this.getUniqueName(o.name,this.sharedvar.pollExecSelected.pollList)})}getUniqueName(e,o){let l=0;for(let s=0;s<o.length;s++){const i=o[s].schema.controls||[];for(let n=0;n<i.length;n++)if(i[n].name===`${e}_${l}`){l++,s=-1;break}}return`${e}_${l}`}static#e=this.\u0275fac=function(o){return new(o||a)(t.Y36(U.k),t.Y36(O.ux),t.Y36(I.x),t.Y36(H),t.Y36(z.$),t.Y36(K.D),t.Y36(j.$),t.Y36(W.Q),t.Y36(X))};static#t=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-poll"]],viewQuery:function(o,l){if(1&o&&t.Gf(le,5),2&o){let s;t.iGM(s=t.CRH())&&(l.editControlTrigger=s.first)}},decls:30,vars:15,consts:[[1,"flex","flex-col","max-h-screen"],[3,"buttons","lchat","onClicked"],["id","spanTrigger",3,"matMenuTriggerFor"],["editControlTrigger","matMenuTrigger"],[1,"flex","align-middle","justify-center","h-8","border-b","border-violet-500","font-medium","text-lg","p-1","mb-1","text-violet-900"],[3,"matMenuTriggerFor"],[1,"grow","pt-3","mx-1","overflow-y-auto","overflow-x-hidden"],[3,"reset","jsonFormData","values","commands","result","valid"],[1,"h-12","flex","flex-row","items-center","justify-center","border-t","border-violet-500"],["color","primary","mat-raised-button","",3,"click",4,"ngIf"],["color","warn","mat-raised-button","",3,"click",4,"ngIf"],["visitedmenu","matMenu"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["chatmenu","matMenu"],["mat-menu-item","",3,"click"],["color","primary"],["color","primary","mat-raised-button","",3,"click"],["color","warn","mat-raised-button","",3,"click"]],template:function(o,l){if(1&o&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("onClicked",function(i){return l.getClicked(i)}),t.qZA(),t._UZ(2,"span",2,3),t.TgZ(4,"div",4)(5,"span",5),t._uU(6),t.qZA(),t.TgZ(7,"mat-icon",5),t._uU(8,"arrow_drop_down"),t.qZA()(),t.TgZ(9,"div",6)(10,"app-dynamic-form",7),t.NdJ("result",function(i){return l.onGetData(i)})("valid",function(i){return l.onGetValid(i)}),t.qZA()(),t.TgZ(11,"div",8),t.YNc(12,oe,3,0,"button",9),t._uU(13," \xa0 "),t.YNc(14,se,4,0,"button",9),t._uU(15," \xa0 "),t.YNc(16,ae,3,0,"button",10),t.qZA()(),t.TgZ(17,"mat-menu",null,11),t.YNc(19,ie,2,1,"button",12),t.qZA(),t.TgZ(20,"mat-menu",null,13)(22,"button",14),t.NdJ("click",function(){return l.chatExec(0)}),t.TgZ(23,"mat-icon",15),t._uU(24,"forum"),t.qZA(),t._uU(25," Administrador "),t.qZA(),t.TgZ(26,"button",14),t.NdJ("click",function(){return l.chatExec(1)}),t.TgZ(27,"mat-icon",15),t._uU(28,"auto_awesome"),t.qZA(),t._uU(29),t.qZA()()),2&o){const s=t.MAs(18),i=t.MAs(21);t.xp6(1),t.Q6J("buttons","00001101")("lchat",l.lchat),t.xp6(1),t.Q6J("matMenuTriggerFor",i),t.xp6(3),t.Q6J("matMenuTriggerFor",s),t.xp6(1),t.Oqu(l.selectedPoll.title),t.xp6(1),t.Q6J("matMenuTriggerFor",s),t.xp6(3),t.Q6J("reset",l.reset)("jsonFormData",l.selectedPoll.schema)("values",l.selectedPoll.values)("commands",l.commands),t.xp6(2),t.Q6J("ngIf",l.goto.length>1),t.xp6(2),t.Q6J("ngIf",l.selectedPoll.allowEnd),t.xp6(2),t.Q6J("ngIf",l.selectedPoll.duplicated),t.xp6(3),t.Q6J("ngForOf",l.visitePollList),t.xp6(10),t.hij(" AI ",l.selectedPoll.title," ")}},dependencies:[p.sg,p.O5,ee.G,te.r,_.VK,_.OP,_.p6,A.lW,$.Hw]})}return a})()}];let re=(()=>{class a{static#e=this.\u0275fac=function(o){return new(o||a)};static#t=this.\u0275mod=t.oAB({type:a});static#l=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(ne),u.Bz]})}return a})();var ce=d(8471),de=d(6842);let ue=(()=>{class a{static#e=this.\u0275fac=function(o){return new(o||a)};static#t=this.\u0275mod=t.oAB({type:a});static#l=this.\u0275inj=t.cJS({imports:[p.ez,re,ce.O,de.N,_.Tx,A.ot,$.Ps,O.ZX]})}return a})()},4066:k=>{const P="[a-fA-F\\d:]",d=m=>m&&m.includeBoundaries?`(?:(?<=\\s|^)(?=${P})|(?<=${P})(?=\\s|$))`:"",p="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",u="[a-fA-F\\d]{1,4}",r=`\n(?:\n(?:${u}:){7}(?:${u}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${u}:){6}(?:${p}|:${u}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${u}:){5}(?::${p}|(?::${u}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${u}:){4}(?:(?::${u}){0,1}:${p}|(?::${u}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${u}:){3}(?:(?::${u}){0,2}:${p}|(?::${u}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${u}:){2}(?:(?::${u}){0,3}:${p}|(?::${u}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${u}:){1}(?:(?::${u}){0,4}:${p}|(?::${u}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::${u}){0,5}:${p}|(?::${u}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),w=new RegExp(`(?:^${p}$)|(?:^${r}$)`),S=new RegExp(`^${p}$`),E=new RegExp(`^${r}$`),y=m=>m&&m.exact?w:new RegExp(`(?:${d(m)}${p}${d(m)})|(?:${d(m)}${r}${d(m)})`,"g");y.v4=m=>m&&m.exact?S:new RegExp(`${d(m)}${p}${d(m)}`,"g"),y.v6=m=>m&&m.exact?E:new RegExp(`${d(m)}${r}${d(m)}`,"g"),k.exports=y},6599:(k,P,d)=>{const p=d(4066),u=r=>p({exact:!0}).test(r);u.v4=r=>p.v4({exact:!0}).test(r),u.v6=r=>p.v6({exact:!0}).test(r),u.version=r=>u(r)?u.v4(r)?4:6:void 0,k.exports=u}}]);