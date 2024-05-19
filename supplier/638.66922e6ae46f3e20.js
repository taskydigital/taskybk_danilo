"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[638],{9554:(D,E,l)=>{l.d(E,{g:()=>A});var p=l(3241),d=l(2283),O=l(7087),h=l(3279);const b=["chart"];function T(y,f){if(1&y&&(d.TgZ(0,"div",1),d._UZ(1,"apx-chart",2),d.qZA()),2&y){const e=d.oxw();d.xp6(1),d.Q6J("series",e.chartOptions.series)("chart",e.chartOptions.chart)("fill",e.chartOptions.fill)("legend",e.chartOptions.legend)("plotOptions",e.chartOptions.plotOptions)("xaxis",e.chartOptions.xaxis)("tooltip",e.chartOptions.tooltip)}}let A=(()=>{class y{constructor(){this.data=[],this.prod_list=[],this.pivot=0,this.bartype=0,this.onSelect=new d.vpe}ngOnChanges(e){this.buildChart()}buildChart(){var e=this;return(0,p.Z)(function*(){if(e.data&&0!==e.data.length){switch(e.serieList=[],e.pivot){case 0:case 1:e.timeLineTaskerPivot();break;case 2:e.timeLineTCostumerPivot();break;case 3:e.timeLineProductPivot()}e.chartOptions={series:e.serieList,chart:{height:450,type:"rangeBar",events:{dataPointSelection:(n=(0,p.Z)(function*(s,m,t){yield e.onSelectEvent(e.serieList[t.seriesIndex].data[t.dataPointIndex])}),function(m,t,i){return n.apply(this,arguments)})},toolbar:{show:!0,tools:{zoomin:!0,zoomout:!0}}},plotOptions:{bar:{horizontal:!0,barHeight:"80%",rangeBarGroupRows:1===e.bartype}},xaxis:{type:"datetime",labels:{datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"hh:mm T"},datetimeUTC:!1}},fill:{type:"solid"},legend:{position:"top",horizontalAlign:"left"},tooltip:{custom:({seriesIndex:n,dataPointIndex:s})=>{const m=e.data.find(t=>t._id===e.serieList[n].data[s].meta);if(m){const t=m.ended?" FINALIZADO":" EN PROCESO ";let i=`: ${new Date(m.date_ini).toLocaleString("es-CO",{dateStyle:"short",timeStyle:"short",hour12:!0})} >> ${new Date(m.date_end).toLocaleString("es-CO",{dateStyle:"short",timeStyle:"short",hour12:!0})}`;switch(e.pivot){case 0:return m.tasker_name+t+i;case 1:return m.activity_name+t+i;case 2:return m.costumer_name+t+i;case 3:return m.crm_products+t+i}return m.activity_name+i}return""}}}}var n})()}timeLineTaskerPivot(){this.data.forEach(e=>{const n=this.serieList.findIndex(s=>s.name===e.activity_name);n>=0?this.serieList[n].data.push({x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}):this.serieList.push({name:e.activity_name,data:[{x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}]})}),this.cleanSeries()}timeLineTCostumerPivot(){this.data.forEach(e=>{const n=this.serieList.findIndex(s=>s.name===e.costumer_name);n>=0?this.serieList[n].data.push({x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}):this.serieList.push({name:e.costumer_name,data:[{x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}]})}),this.cleanSeries()}timeLineProductPivot(){(!this.prod_list||0===this.prod_list.length)&&(this.prod_list=[],this.data.forEach(e=>{e.crm_products&&e.crm_products.length>0&&this.prod_list.push(...e.crm_products)}),this.prod_list=[...new Set(this.prod_list)]),this.prod_list.forEach(e=>{this.serieList.push({name:e,data:[]})}),this.data.forEach(e=>{const n=this.serieList.findIndex(s=>e.crm_products.find(m=>s.name===m));n>=0?this.serieList[n].data.push({x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}):this.serieList.push({name:e.costumer_name,data:[{x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}]})}),this.cleanSeries()}onSelectEvent(e){var n=this;return(0,p.Z)(function*(){n.onSelect.emit(e)})()}cleanSeries(){this.serieList.forEach(e=>{let n=0;for(;n<e.data.length;)0===e.data[n].y.length?e.data.splice(n,1):n++})}static#e=this.\u0275fac=function(n){return new(n||y)};static#t=this.\u0275cmp=d.Xpm({type:y,selectors:[["app-time-line"]],viewQuery:function(n,s){if(1&n&&d.Gf(b,5),2&n){let m;d.iGM(m=d.CRH())&&(s.chart=m.first)}},inputs:{data:"data",prod_list:"prod_list",pivot:"pivot",bartype:"bartype"},outputs:{onSelect:"onSelect"},features:[d.TTD],decls:1,vars:1,consts:[["id","chart",4,"ngIf"],["id","chart"],[3,"series","chart","fill","legend","plotOptions","xaxis","tooltip"]],template:function(n,s){1&n&&d.YNc(0,T,2,7,"div",0),2&n&&d.Q6J("ngIf",s.data&&s.data.length>0)},dependencies:[O.O5,h.x]})}return y})()},6483:(D,E,l)=>{l.d(E,{q:()=>y});var p=l(7087),d=l(3759),O=l(9554),h=l(2283);const b=[{path:"",component:O.g}];let T=(()=>{class f{static#e=this.\u0275fac=function(s){return new(s||f)};static#t=this.\u0275mod=h.oAB({type:f});static#i=this.\u0275inj=h.cJS({imports:[d.Bz.forChild(b),d.Bz]})}return f})();var A=l(3279);let y=(()=>{class f{static#e=this.\u0275fac=function(s){return new(s||f)};static#t=this.\u0275mod=h.oAB({type:f});static#i=this.\u0275inj=h.cJS({imports:[p.ez,T,A.X]})}return f})()},4537:(D,E,l)=>{l.d(E,{x:()=>n});var p=l(3241),d=l(4344),O=l(7430),h=l(2283),b=l(4758),T=l(6806),A=l(1359),y=l(3638),f=l(3620),e=l(8035);let n=(()=>{class s{constructor(t,i,a,o,g,r){this.sharedvar=t,this.dtb=i,this.snkBar=a,this.dg=o,this.ds=g,this.notif=r,this.schemaAppoint={controls:[{name:"staff",label:"Responsable:",type:"select",style:"w-full",selectOptions:[],validators:{required:!0}},{name:"pollgrp_id",label:"Tarea a ejecutar:",type:"select",style:"w-full",selectOptions:[],validators:{required:!0}},{name:"datetime",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"dateend",label:"Fecha y hora final sugerida:",type:"datetime-local",sideBtn:"more_time",validators:{required:!0}},{name:"notes",label:"Notas:",type:"textarea",totalRows:4,style:"w-full",validators:{required:!0}},{name:"crm_costum_name",label:"Cliente",type:"text",sideBtn:"people",style:"w-full",disabled:!0,validators:{}},{name:"contact",label:"Contacto",type:"text",style:"w-full",validators:{}},{name:"address",label:"Direcci\xf3n",type:"text",style:"w-full",validators:{}},{name:"geoLoc",label:"Geolocalizaci\xf3n",type:"text",style:"w-full",sideBtn:"room",disabled:!0,validators:{}}]},this.messageSchema={controls:[{name:"message",label:"Mensaje:",type:"textarea",totalRows:4,style:"w-full",validators:{required:!0}}]},this.groupRefTrue=[],this.taskerData={picture:{title:"Foto",type:"blob-picture"},active:{title:"Activo",type:"boolean"},id:{title:"Identificaci\xf3n",type:"string"},names:{title:"Nombres",type:"string"},lastnames:{title:"Apellidos",type:"string"},age:{title:"Edad",type:"number"},address:{title:"Direcci\xf3n",type:"string"},city:{title:"Ciudad",type:"string"},email:{title:"Correo",type:"string"},phone:{title:"Tel\xe9fono",type:"string"},platform:{title:"Plataform pago",type:"string"},platform_phone:{title:"Tel\xe9fono plataforma",type:"string"},legal_age:{title:"Edad legal",type:"boolean"},stars:{title:"Estrellas",type:"number"},studyLevel:{title:"Nivel de estudio",type:"number"}}}startAppointData(t){if(this.staffList=t,this.getGroupRef(),this.schemaAppoint.controls){const i=this.schemaAppoint.controls.find(o=>"pollgrp_id"===o.name);i&&(i.selectOptions=this.groupRefTrue);const a=this.schemaAppoint.controls.find(o=>"staff"===o.name);a&&(a.selectOptions=[],t.forEach(o=>{o._id&&a.selectOptions?.push({key:o._id,value:`${o.names} ${o.lastnames||""}`})}))}}getPollGrpName(t){if(t){const i=this.groupRefTrue.find(a=>a.key===t);if(i)return i.value}return""}getGroupRef(){this.groupRefTrue=[],this.getRefNodeTrue(this.sharedvar.pollGroupIndex)}getRefNodeTrue(t){if(t.children)for(let i=0;i<t.children.length;i++){const a=t.children[i];if(a.ref)this.groupRefTrue.push({key:a.id,value:a.model_name||a.name});else if(a.children&&a.children.length>0)return this.getRefNodeTrue(a)}}onDelAppoint(t,i){!t.appoint||0===t.appoint.length||this.snkBar.open("Eliminar item de la agenda?.","Ok",{duration:5e3}).onAction().subscribe(a=>{t.appoint?.splice(i,1),this.dtb.updateStaffAsync(t)})}onAddEditAppoint(t,i,a=!0){var o=this;let g,r,C="Agenda ";const _=null===t||-1===i;if(null==t&&(t=this.staffList[0]),t.appoint||(t.appoint=[]),r=-1===i?this.appointBasic(t,"appoint"):t.appoint[i],C+=_?"Nueva":`${t.names} ${t.lastnames||""}`,this.schemaAppoint.controls){let v=-1;v=this.schemaAppoint.controls.findIndex(c=>"contact"===c.name),v>=0&&(this.schemaAppoint.controls[v].type="text"),v=this.schemaAppoint.controls.findIndex(c=>"staff"===c.name),this.schemaAppoint.controls[v].disabled=!_,v=this.schemaAppoint.controls.findIndex(c=>"geoLoc"===c.name),v>=0&&(this.schemaAppoint.controls[v].sideBtn=a?"room":"")}t.appoint&&r&&(g={staff:t._id,...r}),this.dg.aDefault({schema:this.schemaAppoint,title:C,value:g,dgwidth:400,function:[{name:"crm_costum_name",self:this,btn_source:!0,function:this.getCostumer1},{name:"datetime",self:this,btn_source:!1,function:this.updateEndTime},{name:"dateend",self:this,btn_source:!0,function:this.addTime},{name:"geoLoc",self:this,btn_source:!0,function:this.geolocation}]}).subscribe(function(){var v=(0,p.Z)(function*(c){if(c){const L=o.staffList.find(x=>x._id==c.staff);if(!L)return;L.appoint||(L.appoint=[]),c.dateend<=c.datetime&&(c.dateend=c.datetime+o.sharedvar.addMinutes(15)),c.staff_name=`${L.names} ${L.lastnames}`,delete c._btnEvent_,delete c._btnclick_,delete c._propName_,delete c._valid_,delete c.staff,o.dg.updatePropResult(r,c),o.selectedCostumer&&(r.contact===o.selectedCostumer.linkup_1?(r.email=o.selectedCostumer.email_1,r.phone=o.selectedCostumer.phone_1):(r.email=o.selectedCostumer.email_2,r.phone=o.selectedCostumer.phone_2),r.defa_values={crm_costum_id:o.selectedCostumer.id,crm_costum_name:o.selectedCostumer.name,crm_costum_contact:r.contact,crm_costum_email:r.email,crm_costum_phone:r.phone,crm_note:r.notes}),r.pollgrp_model_name=o.getPollGrpName(c.pollgrp_id),_?L.appoint.push(r):L.appoint[i]=r,o.dtb.updateStaffAsync(L)}});return function(c){return v.apply(this,arguments)}}())}onMessage2(t,i){var a=this;this.dg.aDefault({schema:this.messageSchema,title:"Mensaje a "+t||0,dgwidth:400,dgheigth:300}).subscribe(function(){var C=(0,p.Z)(function*(_){_&&a.notif.sendCommand({cmd:"message",user_id:a.sharedvar.staff._id,usert_id:i,data:{msg:{msg:_.message,who:a.sharedvar.staff.names||""},pollGrpName:a.sharedvar.staff.names||""}})});return function(_){return C.apply(this,arguments)}}())}getCostumer1(t,i,a){return(0,p.Z)(function*(){if(!i)return;const o=[],g=yield t.dtb.getActiveCRMCostumAsync();if(!g)return;g.forEach(_=>{_&&o.push({selected:!1,myid:_.id,name:_.name})});const r={title:"Seleccione Cliente",dgheigth:450,viewfilter:!0,viewAdd:!0,multiSelect:!1,valuelst:o},C=yield(0,d.z)(t.ds.aSelectDefault(r));if(C){if(!0===C.new){const u=yield t.newCostumer(t);if(!u)return{schema:a,value:i};t.selectedCostumer=u}else t.selectedCostumer=g.find(u=>u.name===C[0].name);i.crm_costum_name=t.selectedCostumer.name,i.address=t.selectedCostumer.address;const _=a.controls?.findIndex(u=>"contact"===u.name);if(_&&_>=0&&a.controls){const u=[];t.selectedCostumer?.linkup_1&&u.push({key:t.selectedCostumer.linkup_1,value:t.selectedCostumer.linkup_1}),t.selectedCostumer?.linkup_2&&u.push({key:t.selectedCostumer?.linkup_2,value:t.selectedCostumer?.linkup_2}),a.controls[_].type="select",a.controls[_].selectOptions=u}}return{schema:a,value:i}})()}newCostumer(t){return(0,p.Z)(function*(){let i={schema:O.Cn,title:"Datos del cliente",dgwidth:550,dgheigth:715};const a=yield(0,d.z)(t.dg.aDefault(i));return a?(delete a._valid_,delete a._btnEvent_,delete a._propName_,a.active=!0,yield t.dtb.createCostumAsync(a)):null})()}updateEndTime(t,i,a){return(0,p.Z)(function*(){if(i)return i.dateend=Number(i.datetime)+t.sharedvar.addMinutes(15),{schema:null,value:i}})()}addTime(t,i,a){return(0,p.Z)(function*(){if(i)return i.dateend=Number(i.dateend)+t.sharedvar.addMinutes(15),{schema:null,value:i}})()}geolocation(t,i,a){return(0,p.Z)(function*(){if(!i)return;(!i.geoLoc||0===i.geoLoc.length)&&(i.geoLoc=yield t.sharedvar.getLocalization());const g={title:"Geo localizaci\xf3n",dgheigth:600,value:[t.staff2analitic(0,i,i)]},r=yield(0,d.z)(t.dg.aMap(g));return r&&(i.geoLoc=r.geoLocStart),{schema:null,value:i}})()}onFilter(t){}staff2analitic(t,i,a){return{_id:`${i._id}:${t}`,date_ini:a.datetime,date_end:a.dateend,geoLocStart:a.geoLoc,tasker_id:i._id||"",tasker_name:i.names+" "+(i.lastnames||""),activity_id:a.pollgrp_id||"",activity_name:a.pollgrp_model_name||"No asignada",costumer_name:a.crm_costum_name||"",crm_products:[],ended:!1}}appointBasic(t,i){return{type:i,datetime:this.sharedvar.dateNow(),dateend:this.sharedvar.dateNow(),ended:!1,owner:this.sharedvar.staff._id||"",staff_name:`${t.names} ${t.lastnames}`}}static#e=this.\u0275fac=function(i){return new(i||s)(h.LFG(b.D),h.LFG(T.k),h.LFG(A.ux),h.LFG(y.x),h.LFG(f.n),h.LFG(e.$))};static#t=this.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()}}]);