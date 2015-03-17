define(["can/util/library","can/construct","can/map","can/list","can/view","can/compute"],function(e){var t=/(\\)?\./g,r=/\\\./g,n=function(e){var n=[],a=0;return e.replace(t,function(t,u,s){u||(n.push(e.slice(a,s).replace(r,".")),a=s+t.length)}),n.push(e.slice(a).replace(r,".")),n},a=e.Construct.extend({read:e.compute.read},{init:function(e,t){this._context=e,this._parent=t,this.__cache={}},attr:function(t,r){var n=e.__clearReading(),a=this.read(t,{isArgument:!0,returnObserveMethods:!0,proxyMethods:!1});if(2===arguments.length){var u=t.lastIndexOf("."),s=-1!==u?t.substring(0,u):".",i=this.read(s,{isArgument:!0,returnObserveMethods:!0,proxyMethods:!1}).value;-1!==u&&(t=t.substring(u+1,t.length)),e.compute.set(i,t,r)}return e.__setReading(n),a.value},add:function(e){return e!==this._context?new this.constructor(e,this):this},computeData:function(t,r){r=r||{args:[]};var n,a,u=this,s={compute:e.compute(function(i){if(!arguments.length){if(n)return e.compute.read(n,a,r).value;var o=u.read(t,r);return n=o.rootObserve,a=o.reads,s.scope=o.scope,s.initialValue=o.value,s.reads=o.reads,s.root=n,o.value}if(n.isComputed)n(i);else if(a.length){var c=a.length-1,l=a.length?e.compute.read(n,a.slice(0,c)).value:n;e.compute.set(l,a[c],i)}})};return s},compute:function(e,t){return this.computeData(e,t).compute},read:function(t,r){var a;if("./"===t.substr(0,2))a=!0,t=t.substr(2);else{if("../"===t.substr(0,3))return this._parent.read(t.substr(3),r);if(".."===t)return{value:this._parent._context};if("."===t||"this"===t)return{value:this._context}}for(var u,s,i,o,c,l,d=-1===t.indexOf("\\.")?t.split("."):n(t),v=this,p=[],h=-1;v;){if(u=v._context,null!==u){var f=e.compute.read(u,d,e.simpleExtend({foundObservable:function(e,t){c=e,l=d.slice(t)},earlyExit:function(t,r){r>h&&(s=c,p=l,h=r,o=v,i=e.__clearReading())},executeAnonymousFunctions:!0},r));if(void 0!==f.value)return{scope:v,rootObserve:c,value:f.value,reads:l}}e.__clearReading(),v=a?null:v._parent}return s?(e.__setReading(i),{scope:o,rootObserve:s,reads:p,value:void 0}):{names:d,value:void 0}}});return e.view.Scope=a,a});
//# sourceMappingURL=scope.js
//# sourceMappingURL=scope.js.map