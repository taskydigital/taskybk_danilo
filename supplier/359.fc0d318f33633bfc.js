"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[359],{9359:(D,s,a)=>{a.r(s),a.d(s,{PollExportModule:()=>C});var h=a(7087),i=a(3759),p=a(3241),e=a(2283),v=a(4758),x=a(6806),E=a(6510),u=a(1359),f=a(3578),y=a(5499),c=a(6410),m=a(8464);const G=[{path:"",component:(()=>{class l{constructor(t,o,r,n){this.sharedvar=t,this.dtb=o,this.dg=r,this.snkBar=n,this.valid=!1,this.PollExecuteData={controls:[{name:"model_name",label:"Nombre del Modelo:",type:"text",style:"w-5/6",validators:{required:!0}},{name:"description",label:"Descripci\xf3n",type:"textarea",style:"w-full",totalRows:5,validators:{}},{name:"name",label:"Nombre de la Empresa:",type:"text",style:"w-full",validators:{}},{name:"client_logo",label:"URL del logo",type:"text",style:"w-full",validators:{}},{name:"schedule",label:"Agendar",type:"checkbox",validators:{}},{name:"date_ini",label:"Fecha inicial",type:"datetime-local",default:0,validators:{required:!0}},{name:"date_end",label:"Fecha final",type:"datetime-local",default:0,validators:{required:!0}},{name:"payxpoll",label:"Pago por encuesta",type:"number",default:0,validators:{required:!0}},{name:"total",label:"Ofertados",type:"number",default:0,validators:{required:!0}},{name:"endtimer",label:"Duraci\xf3n M\xe1xima en Minutos",type:"number",default:0,validators:{required:!0}}]}}ngOnInit(){const t=this.sharedvar.pollGroupIndex.children.find(o=>o.id===this.sharedvar.pollGrpIndexSub.parentRootNodeId);t&&(this.sharedvar.pollGrpExecuted.model_name=this.sharedvar.pollGrpExecuted.model_name?this.sharedvar.pollGrpExecuted.model_name:this.sharedvar.pollGrpExecuted.name,this.sharedvar.pollGrpExecuted.name=t.name,this.sharedvar.pollGrpExecuted.client_logo=this.sharedvar.pollGrpExecuted.client_logo?this.sharedvar.pollGrpExecuted.client_logo:t.client_logo,this.sharedvar.pollGrpExecuted.date_ini=this.sharedvar.pollGrpExecuted.date_ini?this.sharedvar.pollGrpExecuted.date_ini:(new Date).getTime(),this.sharedvar.pollGrpExecuted.date_end=this.sharedvar.pollGrpExecuted.date_end?this.sharedvar.pollGrpExecuted.date_end:(new Date).getTime())}getClicked(t){}onGetdefaData(t){this.dg.updatePropResult(this.sharedvar.pollGrpExecuted,t),this.valid=t._valid_}onExportSave(){var t=this;return(0,p.Z)(function*(){t.valid||t.snkBar.open("Debe ingresar la informaci\xf3n solicitada.","Ok",{duration:5e3}),t.sharedvar.pollGrpExecuted.exported=!0,yield t.dtb.updatePollGroupAsync(t.sharedvar.pollGrpExecuted),t.snkBar.open(`El Modelo '${t.sharedvar.pollGrpExecuted.name}' se export\xf3 satisfactoriamente. Debe salvar para contiuar.`,"Ok",{duration:5e3})})()}onStop(){var t=this;return(0,p.Z)(function*(){t.sharedvar.pollGrpExecuted.exported=!1,yield t.dtb.updatePollGroupAsync(t.sharedvar.pollGrpExecuted),t.snkBar.open(`El Modelo '${t.sharedvar.pollGrpExecuted.name}' ya no est\xe1 disponible. Debe salvar para continuar`,"Ok",{duration:5e3})})()}static#e=this.\u0275fac=function(o){return new(o||l)(e.Y36(v.D),e.Y36(x.k),e.Y36(E.x),e.Y36(u.ux))};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["app-poll-export"]],decls:12,vars:6,consts:[[3,"buttons","nav_menu","onClicked"],[1,"h-96","p-4"],[3,"jsonFormData","values","result"],["mat-raised-button","","color","primary",3,"disabled","click"],["mat-raised-button","","color","warn",3,"disabled","click"]],template:function(o,r){1&o&&(e.TgZ(0,"app-header",0),e.NdJ("onClicked",function(d){return r.getClicked(d)}),e.qZA(),e.TgZ(1,"div",1)(2,"app-dynamic-form",2),e.NdJ("result",function(d){return r.onGetdefaData(d)}),e.qZA(),e.TgZ(3,"button",3),e.NdJ("click",function(){return r.onExportSave()}),e._uU(4," Exportar Modelo "),e.TgZ(5,"mat-icon"),e._uU(6,"send_to_mobile"),e.qZA()(),e._uU(7," \xa0 "),e.TgZ(8,"button",4),e.NdJ("click",function(){return r.onStop()}),e._uU(9," Inhabilitar Modelo "),e.TgZ(10,"mat-icon"),e._uU(11,"send_to_mobile"),e.qZA()()()),2&o&&(e.Q6J("buttons","10000")("nav_menu",!0),e.xp6(2),e.Q6J("jsonFormData",r.PollExecuteData)("values",r.sharedvar.pollGrpExecuted),e.xp6(1),e.Q6J("disabled",r.sharedvar.pollGrpExecuted.exported),e.xp6(5),e.Q6J("disabled",!r.sharedvar.pollGrpExecuted.exported))},dependencies:[f.G,y.r,c.lW,m.Hw]})}return l})()}];let b=(()=>{class l{static#e=this.\u0275fac=function(o){return new(o||l)};static#t=this.\u0275mod=e.oAB({type:l});static#a=this.\u0275inj=e.cJS({imports:[i.Bz.forChild(G),i.Bz]})}return l})();var g=a(769),P=a(7572);let C=(()=>{class l{static#e=this.\u0275fac=function(o){return new(o||l)};static#t=this.\u0275mod=e.oAB({type:l});static#a=this.\u0275inj=e.cJS({imports:[h.ez,b,g.O,u.ZX,P.N,c.ot,m.Ps]})}return l})()}}]);