function checkToggle(e){e.prop("checked",!0)}function writeCookie(e,t,s){var a,i;s?(a=new Date,a.setTime(a.getTime()+1e3*60*60*24*s),i="; expires="+a.toGMTString()):i="",document.cookie=e+"="+t+i+"; path=/"}function readCookie(e){var t,s,a,i=e+"=";for(a=document.cookie.split(";"),t=0;a.length>t;t++){for(s=a[t];" "==s.charAt(0);)s=s.substring(1,s.length);if(0==s.indexOf(i))return s.substring(i.length,s.length)}return""}document.observe("dom:loaded",function(){var e=$$("#right-top-nav #right-top-nav div.smallfont");if(e.length>0){var t=new Element("span").update(e[0].innerHTML);$$("span.jenkins_ver")[0].insert({before:t})}$$("div.logo")[0].on("click",function(){location="/"})}),jQuery(function(e){var t='<div class="toggle"></div><input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox"><label for="cmn-toggle-7" data-on="Hide" data-off="Show"></label>';e("#description-link").text("Edit"),e("#description").before(t),"checked"!=readCookie("toggle")?e("#description").hide():(checkToggle(e(".cmn-toggle")),e("#description").show()),e(".cmn-toggle").change(function(){e("#description").slideToggle("fast"),e(".cmn-toggle").is(":checked")?writeCookie("toggle","checked",30):writeCookie("toggle","unchecked",30)}),e("#projectstatus img.icon-red").addClass("stock-jenkins-ball"),e("#projectstatus img.icon-blue").addClass("stock-jenkins-ball"),e("#projectstatus img.icon-yellow").addClass("stock-jenkins-ball"),e("#projectstatus img.icon-grey").addClass("stock-jenkins-ball"),e("#projectstatus img.icon-red-anime").addClass("stock-jenkins-ball"),e("#projectstatus img.icon-blue-anime").addClass("stock-jenkins-ball"),e("#projectstatus img.icon-yellow-anime").addClass("stock-jenkins-ball"),e("#projectstatus img.icon-grey-anime").addClass("stock-jenkins-ball"),e("#projectstatus img.icon-disabled").addClass("stock-jenkins-ball"),e("#projectstatus img.icon-nobuilt").addClass("stock-jenkins-ball"),e("#projectstatus img.icon-disabled-anime").addClass("stock-jenkins-ball"),e("#projectstatus img.icon-nobuilt-anime").addClass("stock-jenkins-ball"),e("#projectstatus img.icon-aborted-anime").addClass("stock-jenkins-ball"),e("#projectstatus img.icon-aborted").addClass("stock-jenkins-ball"),e("#projectstatus img.icon-red").parent().addClass("td-icon-red td-sep"),e("#projectstatus img.icon-blue").parent().addClass("td-icon-blue td-sep"),e("#projectstatus img.icon-red-anime").parent().addClass("td-icon-red-anime td-sep"),e("#projectstatus img.icon-grey-anime").parent().addClass("td-icon-grey-anime td-sep"),e("#projectstatus img.icon-yellow-anime").parent().addClass("td-icon-yellow-anime td-sep"),e("#projectstatus img.icon-grey").parent().addClass("td-icon-grey td-sep"),e("#projectstatus img.icon-blue-anime").parent().addClass("td-icon-blue-anime td-sep"),e("#projectstatus img.icon-yellow").parent().addClass("td-icon-yellow td-sep"),e("#projectstatus img.icon-disabled").parent().addClass("td-icon-disabled td-sep"),e("#projectstatus img.icon-nobuilt").parent().addClass("td-icon-nobuilt td-sep"),e("#projectstatus img.icon-disabled-anime").parent().addClass("td-icon-disabled-anime td-sep"),e("#projectstatus img.icon-nobuilt-anime").parent().addClass("td-icon-nobuilt-anime td-sep"),e("#projectstatus img.icon-aborted-anime").parent().addClass("td-icon-aborted-anime td-sep"),e("#projectstatus img.icon-aborted").parent().addClass("td-icon-aborted td-sep")});