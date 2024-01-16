import"./chunk-M7XTWXJK.js";import{a as M}from"./chunk-6E776Z3T.js";import"./chunk-RMGOEPAL.js";import{a as O,b as V,c as D,d as G,e as d,f as H,g as R,h as I,i as Y,j as A,k as $,l as j,m as B}from"./chunk-QUL6E34M.js";import{p as E}from"./chunk-ENHFV74K.js";import{$a as w,Ca as b,Ja as g,K as S,Ma as u,Na as s,Oa as _,Pa as k,Qa as y,Ra as o,Sa as i,Ta as C,V as m,X as v,Ya as x,Za as F,_a as r,bb as T,fb as N,ya as c}from"./chunk-772RCOAV.js";function U(e,t){if(e&1&&(o(0,"option",8),r(1),i()),e&2){let l=t.$implicit;g("ngValue",l),c(1),w(l.description)}}function q(e,t){if(e&1&&r(0),e&2){let l=F();T("Range: ",l.selectedConfig.range," - Max Speed: ",l.selectedConfig.speed," - Cost: ",l.selectedConfig.price,"")}}function z(e,t){e&1&&(o(0,"div",9)(1,"label",10),r(2," Tow hitch ? "),C(3,"input",11),i()())}function J(e,t){e&1&&(o(0,"div",9)(1,"label",12),r(2," Yoke steering wheel ? "),C(3,"input",13),i()())}var te=(()=>{let t=class t{constructor(){this.carService=m(M),this.carStateService=m(E),this.destroyRef=m(b),this.configForm=new G({config:new d(""),towHitch:new d({value:!1,disabled:!0}),yoke:new d({value:!1,disabled:!0})})}ngOnInit(){this.getOption()}getOption(){this.carStateService.selectedModelState$.pipe(S(n=>this.carService.getOption(n.code))).pipe(B(this.destroyRef)).subscribe(n=>{this.configs=n.configs,n.towHitch&&this.configForm.get("towHitch")?.enable(),n.yoke&&this.configForm.get("yoke")?.enable(),this.configForm.patchValue(n)})}updateSelectedConfig(){this.selectedConfig=this.configForm.value.config,this.carStateService.updateConfigState(this.configForm.value)}};t.\u0275fac=function(f){return new(f||t)},t.\u0275cmp=v({type:t,selectors:[["app-car-config"]],standalone:!0,features:[N],decls:16,vars:4,consts:[[1,"row"],[3,"formGroup","change"],[1,"col-4","mb-3"],["for","configSelect",1,"fs-5"],["formControlName","config","id","configSelect","aria-label","Configuration Select",1,"form-select","fs-5"],["selected",""],[1,"col-12","mb-3","fs-5"],["class","col-12 mb-3 form-check","style","margin-left: 12px;"],[3,"ngValue"],[1,"col-12","mb-3","form-check",2,"margin-left","12px"],["for","includeTow",1,"form-check-label","fs-5"],["formControlName","towHitch","type","checkbox","id","includeTow",1,"form-check-input"],["for","includeYoke",1,"form-check-label","fs-5"],["formControlName","yoke","type","checkbox","id","includeYoke",1,"form-check-input"]],template:function(f,a){if(f&1&&(o(0,"h2"),r(1,"Step 2: Select your Tesla config and options"),i(),o(2,"div",0)(3,"form",1),x("change",function(){return a.updateSelectedConfig()}),o(4,"div",2)(5,"label",3),r(6,"Config:"),i(),o(7,"select",4)(8,"option",5),r(9,"Select a config"),i(),k(10,U,2,2,"option",8,_),i()(),o(12,"div",6),u(13,q,1,3),i(),u(14,z,4,0,"div",7)(15,J,4,0,"div",7),i()()),f&2){let p,h;c(3),g("formGroup",a.configForm),c(7),y(a.configs),c(3),s(13,a.selectedConfig?13:-1),c(1),s(14,(p=a.configForm.get("towHitch"))!=null&&p.enabled?14:-1),c(1),s(15,(h=a.configForm.get("yoke"))!=null&&h.enabled?15:-1)}},dependencies:[j,H,A,$,O,Y,V,D,R,I]});let e=t;return e})();export{te as CarConfigComponent};