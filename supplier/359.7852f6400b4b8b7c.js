"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[359],{9359:(C,s,a)=>{a.r(s),a.d(s,{PollExportModule:()=>D});var h=a(7087),i=a(3759),p=a(3241),e=a(2283),v=a(4758),x=a(6806),f=a(3638),u=a(1359),E=a(3578),y=a(5499),c=a(6410),m=a(8464);const b=[{path:"",component:(()=>{class l{constructor(t,r,o,n){this.sharedvar=t,this.dtb=r,this.dg=o,this.snkBar=n,this.valid=!1,this.PollExecuteData={controls:[{name:"name",label:"Nombre de la Empresa:",type:"text",style:"w-full",validators:{}},{name:"client_logo",label:"URL del logo",type:"text",style:"w-full",validators:{}},{name:"model_name",label:"Nombre del Formulario:",type:"text",style:"w-5/6",validators:{required:!0}},{name:"description",label:"Descripci\xf3n",type:"textarea",style:"w-full",totalRows:5,validators:{}},{name:"allowDelete",label:"Desechable",type:"checkbox",default:!0,validators:{}},{name:"schedule",label:"Agendar",type:"checkbox",validators:{}},{name:"date_ini",label:"Fecha inicial",type:"datetime-local",default:0,validators:{required:!0}},{name:"date_end",label:"Fecha final",type:"datetime-local",default:0,validators:{required:!0}},{name:"payxpoll",label:"Pago por encuesta",type:"number",default:0,validators:{required:!0}},{name:"total",label:"Ofertados",type:"number",default:0,validators:{required:!0}},{name:"endtimer",label:"Duraci\xf3n M\xe1xima en Minutos",type:"number",default:0,validators:{required:!0}}]}}ngOnInit(){const t=this.sharedvar.pollGroupIndex.children.find(r=>r.id===this.sharedvar.pollGrpIndexSub.parentRootNodeId);t&&(this.sharedvar.pollGrpExecuted.model_name=this.sharedvar.pollGrpExecuted.model_name?this.sharedvar.pollGrpExecuted.model_name:this.sharedvar.pollGrpExecuted.name,this.sharedvar.pollGrpExecuted.name=t.name,this.sharedvar.pollGrpExecuted.client_logo=this.sharedvar.pollGrpExecuted.client_logo?this.sharedvar.pollGrpExecuted.client_logo:t.client_logo,this.sharedvar.pollGrpExecuted.date_ini=this.sharedvar.pollGrpExecuted.date_ini?this.sharedvar.pollGrpExecuted.date_ini:(new Date).getTime(),this.sharedvar.pollGrpExecuted.date_end=this.sharedvar.pollGrpExecuted.date_end?this.sharedvar.pollGrpExecuted.date_end:(new Date).getTime())}getClicked(t){}onGetdefaData(t){this.dg.updatePropResult(this.sharedvar.pollGrpExecuted,t),this.valid=t._valid_}onExportSave(){var t=this;return(0,p.Z)(function*(){t.valid||t.snkBar.open("Debe ingresar la informaci\xf3n solicitada.","Ok",{duration:5e3}),t.sharedvar.pollGrpExecuted.exported=!0,yield t.dtb.updatePollGroupAsync(t.sharedvar.pollGrpExecuted),t.snkBar.open(`El Formulario '${t.sharedvar.pollGrpExecuted.name}' se export\xf3 satisfactoriamente. Debe salvar para contiuar.`,"Ok",{duration:5e3})})()}onStop(){var t=this;return(0,p.Z)(function*(){t.sharedvar.pollGrpExecuted.exported=!1,yield t.dtb.updatePollGroupAsync(t.sharedvar.pollGrpExecuted),t.snkBar.open(`El Formulario '${t.sharedvar.pollGrpExecuted.name}' ya no est\xe1 disponible. Debe salvar para continuar`,"Ok",{duration:5e3})})()}static#e=this.\u0275fac=function(r){return new(r||l)(e.Y36(v.D),e.Y36(x.k),e.Y36(f.x),e.Y36(u.ux))};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["app-poll-export"]],decls:13,vars:6,consts:[[1,"flex","flex-col","max-h-screen"],[3,"buttons","nav_menu","onClicked"],[1,"flex-1","m-2","p-1","overflow-scroll"],[3,"jsonFormData","values","result"],["mat-raised-button","","color","primary",3,"disabled","click"],["mat-raised-button","","color","warn",3,"disabled","click"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"app-header",1),e.NdJ("onClicked",function(d){return o.getClicked(d)}),e.qZA(),e.TgZ(2,"div",2)(3,"app-dynamic-form",3),e.NdJ("result",function(d){return o.onGetdefaData(d)}),e.qZA(),e.TgZ(4,"button",4),e.NdJ("click",function(){return o.onExportSave()}),e._uU(5," Exportar Formulario "),e.TgZ(6,"mat-icon"),e._uU(7,"send_to_mobile"),e.qZA()(),e._uU(8," \xa0 "),e.TgZ(9,"button",5),e.NdJ("click",function(){return o.onStop()}),e._uU(10," Inhabilitar Formulario "),e.TgZ(11,"mat-icon"),e._uU(12,"send_to_mobile"),e.qZA()()()()),2&r&&(e.xp6(1),e.Q6J("buttons","100000")("nav_menu",!0),e.xp6(2),e.Q6J("jsonFormData",o.PollExecuteData)("values",o.sharedvar.pollGrpExecuted),e.xp6(1),e.Q6J("disabled",o.sharedvar.pollGrpExecuted.exported),e.xp6(5),e.Q6J("disabled",!o.sharedvar.pollGrpExecuted.exported))},dependencies:[E.G,y.r,c.lW,m.Hw]})}return l})()}];let G=(()=>{class l{static#e=this.\u0275fac=function(r){return new(r||l)};static#t=this.\u0275mod=e.oAB({type:l});static#a=this.\u0275inj=e.cJS({imports:[i.Bz.forChild(b),i.Bz]})}return l})();var g=a(769),P=a(7572);let D=(()=>{class l{static#e=this.\u0275fac=function(r){return new(r||l)};static#t=this.\u0275mod=e.oAB({type:l});static#a=this.\u0275inj=e.cJS({imports:[h.ez,G,g.O,u.ZX,P.N,c.ot,m.Ps]})}return l})()}}]);