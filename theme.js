function checkToggle(e){e.prop("checked",!0)}function writeCookie(e,o,t){var n,i;t?(n=new Date,n.setTime(n.getTime()+1e3*60*60*24*t),i="; expires="+n.toGMTString()):i="",document.cookie=e+"="+o+i+"; path=/"}function readCookie(e){var o,t,n,i=e+"=";for(n=document.cookie.split(";"),o=0;n.length>o;o++){for(t=n[o];" "==t.charAt(0);)t=t.substring(1,t.length);if(0==t.indexOf(i))return t.substring(i.length,t.length)}return""}document.observe("dom:loaded",function(){var e=$$("#right-top-nav #right-top-nav div.smallfont");if(e.length>0){var o=new Element("span").update(e[0].innerHTML);$$("span.jenkins_ver")[0].insert({before:o})}$$("div.logo")[0].on("click",function(){location="/"})}),jQuery(function(e){var o='<div class="toggle"></div><input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox"><label for="cmn-toggle-7" data-on="Hide" data-off="Show">Show/Hide</label>';e("#description-link").text("Edit"),e("#description").before(o),"checked"!=readCookie("toggle")?e("#description").hide():(checkToggle(e(".cmn-toggle")),e("#description").show()),e(".cmn-toggle").change(function(){e("#description").slideToggle("fast"),e(".cmn-toggle").is(":checked")?writeCookie("toggle","checked",30):writeCookie("toggle","unchecked",30)})});