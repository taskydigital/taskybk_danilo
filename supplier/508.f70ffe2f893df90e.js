"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[508],{2508:(x,d,a)=>{a.r(d),a.d(d,{DefaultPollModule:()=>G});var c=a(7087),i=a(3759),u=a(3241),t=a(2283),p=a(4758),f=a(6806),h=a(8046),m=a(3162),v=a(5499),y=a(3578);const g=[{path:"",component:(()=>{class l{constructor(e,s,n,r,o){this.sharedvar=e,this.dtb=s,this.nvg=n,this.dg=r,this.route=o,this.reset=0,this.defaPoll=this.nvg.jsonDefSelect}ngOnInit(){var e=this;return(0,u.Z)(function*(){if(e.defaPoll&&e.defaPoll.controls){let s=[];(yield e.dtb.getStaffByFilterAsync({queryType:1,active:!0,stars:0,rol:"P"})).forEach(o=>{s.push({key:o._id,value:`${o.names||o.email} ${o.lastnames||""}`})});const r=e.defaPoll.controls.find(o=>"staff_admin_id"===o.name);r&&(r.selectOptions=s)}e.route.paramMap.subscribe(s=>{e.reset+=1})})()}ngOnDestroy(){}onGetdefaData(e){this.dg.updatePropResult(this.sharedvar.pollGrpIndexSub,e),this.sharedvar.pollGrpExecuted._id&&(this.dg.updatePropResult(this.sharedvar.pollGrpExecuted,e),this.dtb.updatePollGrpAsync(this.sharedvar.pollGrpExecuted)),this.dtb.updatePollGrpAsync(this.sharedvar.pollGroupIndex)}getClicked(e){}onFileSelected(e){this.sharedvar.loading=!this.sharedvar.loading}static#t=this.\u0275fac=function(s){return new(s||l)(t.Y36(p.D),t.Y36(f.k),t.Y36(h.$),t.Y36(m.x),t.Y36(i.gz))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-default-poll"]],decls:6,vars:5,consts:[[1,"flex","flex-col","max-h-screen"],[3,"buttons","nav_menu","onClicked"],[1,"flex-1","m-2","p-1","bg-gray-100","overflow-scroll"],[3,"jsonFormData","values","reset","result"],["type","file","accept",".xlsx",1,"invisible",3,"change"],["fileUpload",""]],template:function(s,n){1&s&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("onClicked",function(o){return n.getClicked(o)}),t.qZA(),t.TgZ(2,"div",2)(3,"app-dynamic-form",3),t.NdJ("result",function(o){return n.onGetdefaData(o)}),t.qZA()()(),t.TgZ(4,"input",4,5),t.NdJ("change",function(o){return n.onFileSelected(o)}),t.qZA()),2&s&&(t.xp6(1),t.Q6J("buttons","100000")("nav_menu",!0),t.xp6(2),t.Q6J("jsonFormData",n.defaPoll)("values",n.sharedvar.pollGrpExecuted)("reset",n.reset))},dependencies:[v.r,y.G]})}return l})()}];let P=(()=>{class l{static#t=this.\u0275fac=function(s){return new(s||l)};static#e=this.\u0275mod=t.oAB({type:l});static#s=this.\u0275inj=t.cJS({imports:[i.Bz.forChild(g),i.Bz]})}return l})();var D=a(7572),C=a(769);let G=(()=>{class l{static#t=this.\u0275fac=function(s){return new(s||l)};static#e=this.\u0275mod=t.oAB({type:l});static#s=this.\u0275inj=t.cJS({imports:[c.ez,P,D.N,C.O]})}return l})()}}]);