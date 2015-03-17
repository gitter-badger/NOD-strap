define(["require","./normalize"],function(e,r){function s(e){if("none"==p.optimizeCss)return e;if("undefined"!=typeof process&&process.versions&&process.versions.node&&require.nodeRequire){try{var r=require.nodeRequire("csso")}catch(s){return console.log('Compression module not installed. Use "npm install csso -g" to enable.'),e}var t=e.length;try{e=r.justDoIt(e)}catch(s){return console.log("Compression failed due to a CSS syntax error."),e}return console.log("Compressed CSS output to "+Math.round(e.length/t*100)+"%."),e}return console.log("Compression not supported outside of nodejs environments."),e}function t(e){if("undefined"!=typeof process&&process.versions&&process.versions.node&&require.nodeRequire){var r=require.nodeRequire("fs"),s=r.readFileSync(e,"utf8");return 0===s.indexOf("﻿")?s.substring(1):s}var t,n,s=new java.io.File(e),i=java.lang.System.getProperty("line.separator"),a=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s),"utf-8"));try{for(t=new java.lang.StringBuffer,n=a.readLine(),n&&n.length()&&65279===n.charAt(0)&&(n=n.substring(1)),t.append(n);null!==(n=a.readLine());)t.append(i).append(n);return String(t.toString())}finally{a.close()}}function n(e,r){if("undefined"!=typeof process&&process.versions&&process.versions.node&&require.nodeRequire){var s=require.nodeRequire("fs");s.writeFileSync(e,r,"utf8")}else{var t=new java.lang.String(r),n=new java.io.BufferedWriter(new java.io.OutputStreamWriter(new java.io.FileOutputStream(e),"utf-8"));try{n.write(t,0,t.length()),n.flush()}finally{n.close()}}}function i(e){return e.replace(/(["'\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r")}var a,o={},l=!!process.platform.match(/^win/),u=/^([^\:\/]+:\/)?\//,c="define('@writecss', function() {return function writeCss(c) {var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));};});",d=e.toUrl("base_url").split("/");d[d.length-1]="";var p,f=d.join("/"),g=!0,S=[],v={};return o.load=function(e,s,n,i){if(p=p||i,a||(a=path.resolve(p.dir||path.dirname(p.out),p.siteRoot||".")+"/",l&&(a=a.replace(/\\/g,"/"))),e.match(u))return n();var o=s.toUrl(e+".css");l&&(o=o.replace(/\\/g,"/"));var c=o;if(c.indexOf(f)<0){var d=s.toUrl(p.appDir);l&&(d=d.replace(/\\/g,"/")),0==c.indexOf(d)&&(c=a+c.substring(d.length))}v[e]=r(t(o),c,a),n()},o.normalize=function(e,r){return".css"==e.substr(e.length-4,4)&&(e=e.substr(0,e.length-4)),r(e)},o.write=function(e,r,t){var n;if(!r.match(u)&&(S.push(v[r]),global._requirejsCssData?global._requirejsCssData.usedBy.css=!0:global._requirejsCssData={usedBy:{css:!0},css:""},0!=p.buildCSS)){var a=v[r];p.writeCSSModule&&a?(g&&(g=!1,t(c)),n='define(["@writecss"], function(writeCss){\n writeCss("'+i(s(a))+'");\n})'):n="define(function(){})",t.asModule(e+"!"+r,n)}},o.onLayerEnd=function(e,r){if(p.separateCSS&&p.IESelectorLimit)throw"RequireCSS: separateCSS option is not compatible with ensuring the IE selector limit";if(p.separateCSS){var t=r.path.replace(/(\.js)?$/,".css");console.log("Writing CSS! file: "+t+"\n");var a=S.join("");process.nextTick(function(){global._requirejsCssData&&(a=global._requirejsCssData.css=a+global._requirejsCssData.css,delete global._requirejsCssData.usedBy.css,0===Object.keys(global._requirejsCssData.usedBy).length&&delete global._requirejsCssData),n(t,s(a))})}else if(0!=p.buildCSS&&1!=p.writeCSSModule)for(var o=p.IESelectorLimit?S:[S.join("")],l=0;l<o.length;l++){if(""==o[l])return;e("(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})\n('"+i(s(o[l]))+"');\n")}S=[],g=!0},o});
//# sourceMappingURL=css-builder.js
//# sourceMappingURL=css-builder.js.map