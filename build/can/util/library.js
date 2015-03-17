define(["jquery","can/can","can/util/attr","can/event","can/util/each","can/util/inserted"],function(t,e,n){var r=function(t){return t.nodeName&&(1===t.nodeType||9===t.nodeType)||t==window};t=t||window.$,t.extend(e,t,{trigger:function(n,i,a,u){r(n)?t.event.trigger(i,a,n,!u):n.trigger?n.trigger(i,a):("string"==typeof i&&(i={type:i}),i.target=i.target||n,a&&(a.length&&"string"==typeof a?a=[a]:a.length||(a=[a])),a||(a=[]),e.dispatch.call(n,i,a))},event:e.event,addEvent:e.addEvent,removeEvent:e.removeEvent,buildFragment:function(e,n){var r;return e=[e],n=n||document,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,r=t.buildFragment(e,n),r.cacheable?t.clone(r.fragment):r.fragment||r},$:t,each:e.each,bind:function(n,i){return this.bind&&this.bind!==e.bind?this.bind(n,i):r(this)?t.event.add(this,n,i):e.addEvent.call(this,n,i),this},unbind:function(n,i){return this.unbind&&this.unbind!==e.unbind?this.unbind(n,i):r(this)?t.event.remove(this,n,i):e.removeEvent.call(this,n,i),this},delegate:function(n,i,a){return this.delegate?this.delegate(n,i,a):r(this)?t(this).delegate(n,i,a):e.bind.call(this,i,a),this},undelegate:function(n,i,a){return this.undelegate?this.undelegate(n,i,a):r(this)?t(this).undelegate(n,i,a):e.unbind.call(this,i,a),this},proxy:function(t,e){return function(){return t.apply(e,arguments)}},attr:n}),e.on=e.bind,e.off=e.unbind,t.each(["append","filter","addClass","remove","data","get","has"],function(t,n){e[n]=function(t){return t[n].apply(t,e.makeArray(arguments).slice(1))}});var i=t.cleanData;t.cleanData=function(n){t.each(n,function(t,n){n&&e.trigger(n,"removed",[],!1)}),i(n)};var a,u=t.fn.domManip;if(t.fn.domManip=function(){for(var t=1;t<arguments.length;t++)if("function"==typeof arguments[t]){a=t;break}return u.apply(this,arguments)},t(document.createElement("div")).append(document.createElement("div")),t.fn.domManip=2===a?function(t,n,r){return u.call(this,t,n,function(t){var n;11===t.nodeType&&(n=e.makeArray(t.childNodes));var i=r.apply(this,arguments);return e.inserted(n?n:[t]),i})}:function(t,n){return u.call(this,t,function(t){var r;11===t.nodeType&&(r=e.makeArray(t.childNodes));var i=n.apply(this,arguments);return e.inserted(r?r:[t]),i})},e.attr.MutationObserver)t.event.special.attributes={setup:function(){var t=this,n=new e.attr.MutationObserver(function(n){n.forEach(function(n){var r=e.simpleExtend({},n);e.trigger(t,r,[])})});n.observe(this,{attributes:!0,attributeOldValue:!0}),e.data(e.$(this),"canAttributesObserver",n)},teardown:function(){e.data(e.$(this),"canAttributesObserver").disconnect(),t.removeData(this,"canAttributesObserver")}};else{var s=t.attr;t.attr=function(t,n){var r,i;arguments.length>=3&&(r=s.call(this,t,n));var a=s.apply(this,arguments);return arguments.length>=3&&(i=s.call(this,t,n)),i!==r&&e.attr.trigger(t,n,r),a};var d=t.removeAttr;t.removeAttr=function(t,n){var r=s.call(this,t,n),i=d.apply(this,arguments);return null!=r&&e.attr.trigger(t,n,r),i},t.event.special.attributes={setup:function(){e.data(e.$(this),"canHasAttributesBindings",!0)},teardown:function(){t.removeData(this,"canHasAttributesBindings")}}}return function(){var t="<-\n>",n=e.buildFragment(t,document);if(t!==n.childNodes[0].nodeValue){var r=e.buildFragment;e.buildFragment=function(t,e){var n=r(t,e);return 1===n.childNodes.length&&3===n.childNodes[0].nodeType&&(n.childNodes[0].nodeValue=t),n}}}(),t.event.special.inserted={},t.event.special.removed={},e});
//# sourceMappingURL=library.js
//# sourceMappingURL=library.js.map