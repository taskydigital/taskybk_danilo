"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[770],{5770:(j,f,n)=>{n.r(f),n.d(f,{PlayPollModule:()=>N});var r=n(7087),h=n(3759),g=n(3241),y=n(1348),b=n.t(y,2),t=n(2283),_=n(4758),T=n(8046),k=n(6655),I=n(8878),v=n(1359),Z=n(2038),x=n(3578),u=n(9347),p=n(8464);function P(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"div",8),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onClick(2))}),t.TgZ(1,"span")(2,"mat-icon"),t._uU(3,"task_alt"),t.qZA()()()}}function L(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"div",8),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onClick(3))}),t.TgZ(1,"span")(2,"mat-icon"),t._uU(3,"forum"),t.qZA()()()}}const S=function(i){return{"background-color":i}};let C=(()=>{class i{constructor(){this.onClicked=new t.vpe}getLastChat(){return this.chatItem.chats&&this.chatItem.chats.length>0&&this.chatItem.chats[this.chatItem.chats.length-1].msg||"Esperando..."}getBackColor(){return this.chatItem.ended?"#C6DEFF":this.chatItem.chats&&this.chatItem.chats.length>0&&"W"===this.chatItem.chats[this.chatItem.chats.length-1].type?"white":"#ffffcc"}getPicture(){return this.chatItem.staff_picture&&this.chatItem.staff_picture.length>0?this.chatItem.staff_picture:"https://hips.hearstapps.com/hmg-prod/images/how-to-shave-your-face-at-home-1648149510.png?crop=0.505xw:1.00xh;0.228xw,0.00408xh&resize=1200:*"}onClick(e){this.onClicked.emit({chatItem:this.chatItem,cmd:e})}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-chat"]],inputs:{chatItem:"chatItem"},outputs:{onClicked:"onClicked"},decls:21,vars:8,consts:[[1,"h-24","w-64","flex","flex-col","rounded","border","border-gray-200","p-1","shadow-sm",3,"ngStyle"],[1,"flex","flex-row"],["alt","chatItem.staff_name",1,"h-12","w-12","rounded-full","object-fill",3,"src"],[1,"flex","flex-col","items-start","px-2"],[1,"h-6","w-48","overflow-hidden","font-medium","leading-tight"],[1,"h-5","w-48","overflow-hidden","text-justify","font-thin"],[1,"h-3"],[1,"w-48","h-6","px-1","border-t","border-violet-300","flex","flex-row","gap-x-2","justify-end","text-gray-200"],[1,"pt-1","hover:border-violet-500","hover:text-violet-500",3,"click"],["class","pt-1 hover:border-violet-500 hover:text-violet-500",3,"click",4,"ngIf"]],template:function(a,s){1&a&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"div",3)(4,"div",4),t._uU(5),t.qZA(),t.TgZ(6,"div",5),t._uU(7),t.qZA(),t._UZ(8,"div",6),t.TgZ(9,"div",7)(10,"div",8),t.NdJ("click",function(){return s.onClick(0)}),t.TgZ(11,"span")(12,"mat-icon"),t._uU(13,"delete"),t.qZA()()(),t._uU(14," \xa0 "),t.TgZ(15,"div",8),t.NdJ("click",function(){return s.onClick(1)}),t.TgZ(16,"span")(17,"mat-icon"),t._uU(18,"perm_identity"),t.qZA()()(),t.YNc(19,P,4,0,"div",9),t.YNc(20,L,4,0,"div",9),t.qZA()()()()),2&a&&(t.Q6J("ngStyle",t.VKq(6,S,s.getBackColor())),t.xp6(2),t.Q6J("src",s.getPicture(),t.LSH),t.xp6(3),t.Oqu(s.chatItem.staff_name),t.xp6(2),t.Oqu(s.getLastChat()),t.xp6(12),t.Q6J("ngIf",s.chatItem.ended),t.xp6(1),t.Q6J("ngIf",!s.chatItem.ended))},dependencies:[r.O5,r.PC,p.Hw]})}return i})();const w=["editControlTrigger"];function E(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"app-chat",7),t.NdJ("onClicked",function(s){t.CHM(e);const o=t.oxw();return t.KtG(o.onChatItemClicked(s))}),t.qZA()()}if(2&i){const e=m.$implicit;t.xp6(1),t.Q6J("chatItem",e)}}const A=[{path:"",component:(()=>{class i{constructor(e,a,s,o,l,d){this.sharedvar=e,this.nvg=a,this.dtb=s,this.dg=o,this.snkBar=l,this.notifServ=d,this.selResultId="",this.headerList=[],this.filterTasker={filter:1,status:2,pollGrp_id:"",date_ini:0,date_end:0},this.ctrlList=this.sharedvar.pollSelected&&this.sharedvar.pollSelected.schema?this.sharedvar.pollSelected.schema:{controls:[]}}ngOnInit(){this.nvg.playing=!0,this.headerList.push({name:"staff_name",label:"Tasker",type:"text",pos:"tasker"}),this.headerList.push({name:"staffId",label:"Identificaci\xf3n",type:"text",pos:"tasker"}),this.headerList.push({name:"",label:"Plataforma",type:"text",pos:"tasker"}),this.headerList.push({name:"",label:"Calificaci\xf3n",type:"number",pos:"tasker"}),this.sharedvar.pollsSelGroup.pollList.forEach(a=>{a.schema.controls?.forEach(s=>{s.tags&&s.tags.dtbase&&this.headerList.push({name:s.name,label:s.label,type:s.tags.type,pos:"data"})})}),this.headerList.push({name:"date_ini",label:"Hora de inicio",type:"datetime-local",pos:"Info. Encuesta"}),this.headerList.push({name:"geoLocStart",label:"Geo ubicaci\xf3n inicio",type:"geolocation",pos:"Info. Encuesta"}),this.headerList.push({name:"date_end",label:"Hora final",type:"datetime-local",pos:"Info. Encuesta"}),this.headerList.push({name:"geoLocEnd",label:"Geo ubicaci\xf3n final",type:"geolocation",pos:"Info. Encuesta"}),this.filterTasker.pollGrp_id=this.sharedvar.pollsSelGroup._id||"";const e=this.dtb.getPollResultByFilter(this.filterTasker).subscribe({next:a=>{this.pollResultList=[],this.pollResultList=a},complete:()=>{e&&e.unsubscribe()}});this.chatSub=this.notifServ.listen("dtb-notification").subscribe({next:a=>{if("pollresult"===a.collection&&a.collect_id){const s=this.pollResultList.findIndex(o=>o._id===a.collect_id);s>=0&&this.setChatState(s,a)}},complete(){}})}setChatState(e,a){var s=this;return(0,g.Z)(function*(){const o=yield s.dtb.getPollResultAsync(a.collect_id),l=o.chats.length-1;o.status_date=Date.now(),s.pollResultList[e]=o,l>=0&&"T"===o.chats[l].type&&s.snkBar.open(`Mensaje de ${a.staffname}. Actividad: ${a.grpName}.`,"Ok",{duration:3e3})})()}getClicked(e){if(3===e.index){let a=document.getElementById("spanTrigger");a&&(a.style.display="",a.style.position="absolute",a.style.left=e.pageX+5+"px",a.style.top=e.pageY+5+"px",this.editControlTrigger.openMenu())}}onSend2Mobil(){navigator.clipboard.writeText(`https://epoll-cli.firebaseapp.com/?pollexec=${this.sharedvar.pollsSelGroup.id}`).then(a=>{}).catch(a=>alert(a)),this.snkBar.open("V\xednculo copiado al portapapeles.","Ok",{duration:3e3})}onChatItemClicked(e){var a=this;return(0,g.Z)(function*(){switch(e.cmd){case 1:const s=yield a.dtb.getStaffById(e.chatItem.staff__id);a.dg.aDefault({schema:b,value:s,title:"Datos del Tasker"}).subscribe(c=>{c&&(a.dg.updatePropResult(s,c),a.dtb.setStaff(s))});break;case 2:const l=yield a.dtb.getStaffById(e.chatItem.staff__id);a.dg.aPollResult({schema:{},value:e.chatItem,title:"Datos de la encuesta: "+l.names}).subscribe(c=>{});break;case 3:a.selResultId=e.chatItem.id,a.dg.aChat({title:"Chat",dgwidth:400,value:e.chatItem||[]}).subscribe(c=>{c&&c.value.length>0&&(e.staff.chats=c.value,a.dtb.updatePollResultAsync(e.staff)),a.selResultId=""})}})()}csvStream(){let e="",a="";return this.headerList.forEach(s=>{a===s.pos?e+="\t":(a=s.pos,e+=`${s.pos}\t`)}),e+="\n",this.headerList.forEach(s=>e+=`${s.label}\t`),e+="\n",this.pollResultList.forEach(s=>{e+="\n",this.headerList.forEach(o=>{"tasker"===o.pos&&(e+=s[o.name]?s[o.name]:"",e+="\t")}),this.headerList.forEach(o=>{"data"===o.pos&&(e+=s.values&&s.values[o.name]?s.values[o.name]:"",e+="\t")}),this.headerList.forEach(o=>{if("Info. Encuesta"===o.pos){if(s[o.name])if("datetime-local"===o.type){let l=Number(s[o.name]),d=new Date(l).toLocaleString();e+=d}else e+=s[o.name];else e+="";e+="\t"}}),e+="\n"}),e}jsonStream(){let e=[];const a=this.headerList.reduce((s,o)=>({...s,[o.name]:o.label}),{});return e.push(a),this.pollResultList.forEach(s=>{if(s.values){const o=[s.values];e=[...e,...o]}}),e}downloadFile(){const e=JSON.stringify(this.jsonStream());var a=this.encode(e),s=new Blob([a],{type:"application/octet-stream"}),o=URL.createObjectURL(s);window.open(o)}encode(e){for(var a=[],s=0;s<e.length;s++)a[s]=e.charCodeAt(s);return new Uint16Array(a)}downloadTable2Excel(){const e=new Blob([this.csvStream()],{type:"text/csv;charset=utf-8"});var a=URL.createObjectURL(e);window.open(a)}static#t=this.\u0275fac=function(a){return new(a||i)(t.Y36(_.D),t.Y36(T.$),t.Y36(k.k),t.Y36(I.x),t.Y36(v.ux),t.Y36(Z.g))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-play-poll"]],viewQuery:function(a,s){if(1&a&&t.Gf(w,5),2&a){let o;t.iGM(o=t.CRH())&&(s.editControlTrigger=o.first)}},decls:24,vars:4,consts:[[3,"buttons","nav_menu","onClicked"],["id","spanTrigger",3,"matMenuTriggerFor"],["editControlTrigger","matMenuTrigger"],[1,"p-1","flex","flex-row","flex-wrap","gap-1"],[4,"ngFor","ngForOf"],["controlEdit","matMenu"],["mat-menu-item","",3,"click"],[3,"chatItem","onClicked"]],template:function(a,s){if(1&a&&(t.TgZ(0,"app-header",0),t.NdJ("onClicked",function(l){return s.getClicked(l)}),t.qZA(),t._UZ(1,"span",1,2),t.TgZ(3,"div",3),t.YNc(4,E,2,1,"div",4),t.qZA(),t.TgZ(5,"mat-menu",null,5)(7,"button",6),t.NdJ("click",function(){return s.onSend2Mobil()}),t.TgZ(8,"mat-icon"),t._uU(9,"build"),t.qZA(),t._uU(10," Ejecutar Modelo en Modo de Prueba "),t.qZA(),t._UZ(11,"hr"),t.TgZ(12,"button",6),t.NdJ("click",function(){return s.downloadFile()}),t.TgZ(13,"mat-icon"),t._uU(14,"file_download"),t.qZA(),t._uU(15," Exportar Informe a Json. "),t.qZA(),t.TgZ(16,"button",6),t.NdJ("click",function(){return s.downloadTable2Excel()}),t.TgZ(17,"mat-icon"),t._uU(18,"file_download"),t.qZA(),t._uU(19," Exportar Informe a xls. "),t.qZA(),t.TgZ(20,"button",6),t.NdJ("click",function(){return s.downloadFile()}),t.TgZ(21,"mat-icon"),t._uU(22,"insights"),t.qZA(),t._uU(23," Enviar Informe a Google Spread Sheet "),t.qZA()()),2&a){const o=t.MAs(6);t.Q6J("buttons","11010")("nav_menu",!0),t.xp6(1),t.Q6J("matMenuTriggerFor",o),t.xp6(3),t.Q6J("ngForOf",s.pollResultList)}},dependencies:[r.sg,x.G,u.VK,u.OP,u.p6,p.Hw,C]})}return i})()}];let J=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(A),h.Bz]})}return i})();var U=n(769),R=n(7572);const F=[{path:"",component:C}];let M=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(F),h.Bz]})}return i})(),B=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[r.ez,M,p.Ps]})}return i})(),N=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[r.ez,J,U.O,R.N,u.Tx,p.Ps,v.ZX,B]})}return i})()}}]);