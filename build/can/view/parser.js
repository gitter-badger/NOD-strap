define(["can/view"],function(e){function t(e){for(var t={},r=e.split(","),a=0;a<r.length;a++)t[r[a]]=!0;return t}function r(e,t){for(var r=0,a=e.length;a>r;r++){var n=e[r];t[n.tokenType].apply(t,n.args)}return e}var a="-:A-Za-z0-9_",n="[a-zA-Z_:]["+a+":.]*",s="\\s*=\\s*",i='"((?:\\\\.|[^"])*)"',o="'((?:\\\\.|[^'])*)'",l="(?:"+s+"(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>\\s]+))?",c="\\{\\{[^\\}]*\\}\\}\\}?",u="\\{\\{([^\\}]*)\\}\\}\\}?",p=new RegExp("^<(["+a+"]+)((?:\\s*(?:(?:(?:"+n+")?"+l+")|(?:"+c+")+))*)\\s*(\\/?)>"),f=new RegExp("^<\\/(["+a+"]+)[^>]*>"),d=new RegExp("(?:(?:("+n+")|"+u+")(?:"+s+"(?:(?:"+i+")|(?:"+o+")|([^>\\s]+)))?)","g"),g=new RegExp(u,"g"),h=/<|\{\{/,m=t("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),b=t("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),v=t("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),x=t("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),w=t("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),y=t("script,style"),k="start,end,close,attrStart,attrEnd,attrValue,chars,comment,special,done".split(","),E=function(){},A=function(t,a,n){function s(e,t,r,n){if(t=t.toLowerCase(),b[t])for(;w.last()&&v[w.last()];)i("",w.last());x[t]&&w.last()===t&&i("",t),n=m[t]||!!n,a.start(t,n),n||w.push(t),A.parseAttrs(r,a),a.end(t,n)}function i(e,t){var r;if(t)for(r=w.length-1;r>=0&&w[r]!==t;r--);else r=0;if(r>=0){for(var n=w.length-1;n>=r;n--)a.close&&a.close(w[n]);w.length=r}}function o(e,t){a.special&&a.special(t)}if("object"==typeof t)return r(t,a);var l=[];a=a||{},n&&e.each(k,function(t){var r=a[t]||E;a[t]=function(){r.apply(this,arguments)!==!1&&l.push({tokenType:t,args:e.makeArray(arguments)})}});var c,u,d,w=[],O=t;for(w.last=function(){return this[this.length-1]};t;){if(u=!0,w.last()&&y[w.last()])t=t.replace(new RegExp("([\\s\\S]*?)</"+w.last()+"[^>]*>"),function(e,t){return t=t.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),a.chars&&a.chars(t),""}),i("",w.last());else if(0===t.indexOf("<!--")?(c=t.indexOf("-->"),c>=0&&(a.comment&&a.comment(t.substring(4,c)),t=t.substring(c+3),u=!1)):0===t.indexOf("</")?(d=t.match(f),d&&(t=t.substring(d[0].length),d[0].replace(f,i),u=!1)):0===t.indexOf("<")?(d=t.match(p),d&&(t=t.substring(d[0].length),d[0].replace(p,s),u=!1)):0===t.indexOf("{{")&&(d=t.match(g),d&&(t=t.substring(d[0].length),d[0].replace(g,o))),u){c=t.search(h);var R=0>c?t:t.substring(0,c);t=0>c?"":t.substring(c),a.chars&&R&&a.chars(R)}if(t===O)throw"Parse Error: "+t;O=t}return i(),a.done(),l};return A.parseAttrs=function(e,t){(null!=e?e:"").replace(d,function(e,r,a,n,s,i){if(a&&t.special(a),r||n||s||i){var o=arguments[3]?arguments[3]:arguments[4]?arguments[4]:arguments[5]?arguments[5]:w[r.toLowerCase()]?r:"";t.attrStart(r||"");for(var l,c=g.lastIndex=0,u=g.exec(o);u;)l=o.substring(c,g.lastIndex-u[0].length),l.length&&t.attrValue(l),t.special(u[1]),c=g.lastIndex,u=g.exec(o);l=o.substr(c,o.length),l&&t.attrValue(l),t.attrEnd(r||"")}})},e.view.parser=A,A});
//# sourceMappingURL=parser.js
//# sourceMappingURL=parser.js.map