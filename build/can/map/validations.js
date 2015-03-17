define(["can/util/library","can/map"],function(t){var n=function(n,i,e){if(e||(e=i,i={}),i=i||{},n="string"==typeof n?[n]:t.makeArray(n),!i.testIf||i.testIf.call(this)){var a=this;t.each(n,function(t){a.validations[t]||(a.validations[t]=[]),a.validations[t].push(function(n){var a=e.call(this,n,t);return void 0===a?void 0:i.message||a})})}},i=t.Map.prototype.__set;return t.Map.prototype.__set=function(n,e,a,o,r){var s=this,l=s.constructor.validations,u=function(i){var e=r&&r.call(s,i);return e!==!1&&t.trigger(s,"error",[n,i],!0),!1};if(i.call(s,n,e,a,o,u),l&&l[n]){var c=s.errors(n);c&&u(c)}return this},t.each([t.Map,t.Model],function(i){if(void 0!==i){var e=i.setup;t.extend(i,{setup:function(t){e.apply(this,arguments),this.validations&&t.validations!==this.validations||(this.validations={})},validate:n,validationMessages:{format:"is invalid",inclusion:"is not a valid option (perhaps out of range)",lengthShort:"is too short",lengthLong:"is too long",presence:"can't be empty",range:"is out of range",numericality:"must be a number"},validateFormatOf:function(t,i,e){n.call(this,t,e,function(t){return"undefined"!=typeof t&&null!==t&&""!==t&&null===String(t).match(i)?this.constructor.validationMessages.format:void 0})},validateInclusionOf:function(t,i,e){n.call(this,t,e,function(t){if("undefined"!=typeof t){for(var n=0;n<i.length;n++)if(i[n]===t)return;return this.constructor.validationMessages.inclusion}})},validateLengthOf:function(t,i,e,a){n.call(this,t,a,function(t){return("undefined"==typeof t||null===t)&&i>0||"undefined"!=typeof t&&null!==t&&t.length<i?this.constructor.validationMessages.lengthShort+" (min="+i+")":"undefined"!=typeof t&&null!==t&&t.length>e?this.constructor.validationMessages.lengthLong+" (max="+e+")":void 0})},validatePresenceOf:function(t,i){n.call(this,t,i,function(t){return"undefined"==typeof t||""===t||null===t?this.constructor.validationMessages.presence:void 0})},validateRangeOf:function(t,i,e,a){n.call(this,t,a,function(t){return("undefined"==typeof t||null===t)&&i>0||"undefined"!=typeof t&&null!==t&&(i>t||t>e)?this.constructor.validationMessages.range+" ["+i+","+e+"]":void 0})},validatesNumericalityOf:function(t){n.call(this,t,function(t){var n=!isNaN(parseFloat(t))&&isFinite(t);return n?void 0:this.constructor.validationMessages.numericality})}})}}),t.extend(t.Map.prototype,{errors:function(n,i){n&&(n=t.isArray(n)?n:[n]);var e={},a=this,o=function(n,o){t.each(o,function(t){var o=t.call(a,s?a.__convert?a.__convert(n,i):i:a.attr(n));o&&(e[n]||(e[n]=[]),e[n].push(o))})},r=this.constructor.validations||{},s=n&&1===n.length&&2===arguments.length;return t.each(n||r,function(t,n){"number"==typeof n&&(n=t,t=r[n]),o(n,t||[])}),t.isEmptyObject(e)?null:s?e[n[0]]:e}}),t.Map});
//# sourceMappingURL=validations.js
//# sourceMappingURL=validations.js.map