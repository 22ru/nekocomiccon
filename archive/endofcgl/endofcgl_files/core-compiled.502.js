function quote(a){if(document.selection)document.post.com.focus(),document.selection.createRange().text=">>"+a+"\n";else if(document.post.com.selectionStart||"0"==document.post.com.selectionStart){var b=document.post.com.selectionEnd;document.post.com.value=document.post.com.value.substring(0,document.post.com.selectionStart)+">>"+a+"\n"+document.post.com.value.substring(b,document.post.com.value.length)}else document.post.com.value+=">>"+a+"\n"}
function repquote(a){""==document.post.com.value&&quote(a)}function reppop(a){var b=(new Date).getTime();window.open(a,b,"toolbar=0,scrollbars=0,location=0,status=1,menubar=0,resizable=1,width=600,height=170");return!1}function recaptcha_load(){document.getElementById("recaptcha_div")&&Recaptcha.create("6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc","recaptcha_div",{theme:"clean"})}
function onParsingDone(a){var b,c,d,e;c=a.detail.threadId;if(b=a.detail.offset){c=document.getElementById("t"+c).getElementsByClassName("nameBlock");a=a.detail.limit?2*a.detail.limit:c.length;for(b=2*b+1;b<a;b+=2)if(d=c[b].children[1])currentHighlighted&&-1!=d.className.indexOf("id_"+currentHighlighted)&&(e=d.parentNode.parentNode.parentNode,e.className="highlight "+e.className),d.addEventListener("click",idClick,!1)}}
function loadExtraScripts(){var a=readCookie("extra_path");if(!a||!/^[a-z0-9]+$/.test(a))return!1;document.write('<script type="text/javascript" src="https://static.4chan.org/js/'+a+"."+jsVersion+'.js"><\/script>');return!0}
function toggleMobilePostForm(a,b){elem=document.getElementById("mpostform");postForm=document.getElementById("postForm");elem.className.match("hidden")?(elem.className=elem.className.replace("hidden","shown"),postForm.className=postForm.className.replace(" hideMobile",""),elem.innerHTML="Close Post Form"):(elem.className=elem.className.replace("shown","hidden"),postForm.className+=" hideMobile",elem.innerHTML=a?"Start a Thread":"Reply to Thread");b&&window.scroll(0,0)}
function toggleGlobalMessage(){elem=document.getElementById("globalToggle");postForm=document.getElementById("globalMessage");elem.className.match("hidden")?(elem.className=elem.className.replace("hidden","shown"),postForm.className=postForm.className.replace(" hideMobile",""),elem.innerHTML="Close Announcement"):(elem.className=elem.className.replace("shown","hidden"),postForm.className+=" hideMobile",elem.innerHTML="View Important Announcement")}
function checkRecaptcha(){"undefined"!=typeof RecaptchaState.timeout&&1800==RecaptchaState.timeout&&(RecaptchaState.timeout=570,Recaptcha._reset_timer(),clearInterval(captchainterval))}
function removeCaptcha(){document.getElementById("captchaFormPart").childNodes[1].innerHTML='<div style="padding: 5px;">You are using a 4chan Pass. [<a href="https://sys.4chan.org/auth?act=logout">Logout</a>]</div>';document.getElementById("captchaFormPart").childNodes[1].removeAttribute("style");document.getElementById("passlink").innerHTML=""}var activeStyleSheet;function initStyleSheet(){if("undefined"!=typeof style_group&&style_group){var a=readCookie(style_group);activeStyleSheet=a?a:getPreferredStyleSheet()}switch(activeStyleSheet){case"Yotsuba B":setActiveStyleSheet("Yotsuba B New",!0);break;case"Yotsuba":setActiveStyleSheet("Yotsuba New",!0);break;case"Burichan":setActiveStyleSheet("Burichan New",!0);break;case"Futaba":setActiveStyleSheet("Futaba New",!0);break;default:setActiveStyleSheet(activeStyleSheet,!0)}}captchainterval=null;function init(){var a=location.href.match(/4chan\.org\/(\w+)/)[1],b=location.href.split(/#/);b[1]&&b[1].match(/q[0-9]+$/)&&repquote(b[1].match(/q([0-9]+)$/)[1]);if("undefined"!=typeof jsMath&&"undefined"!=typeof jsMath.Easy.onload&&!jsMath.Easy.loaded)jsMath.Easy.onload();if(navigator.userAgent&&navigator.userAgent.match(/iP(hone|ad|od)/i)){links=document.querySelectorAll(".spoiler");len=links.length;for(b=0;b<len;b++)links[b].onclick=function(){this.setAttribute("style",this.getAttribute("style").match("fff")?"color: #000!important;":"color: #fff!important;")}}if(document.getElementById("styleSelector")){styleSelect=document.getElementById("styleSelector");len=styleSelect.options.length;for(b=0;b<len;b++)styleSelect.options[b].value==activeStyleSheet&&(styleSelect.selectedIndex=b)}document.getElementById("delPassword").value=get_pass("4chan_pass");"i"!=a&&"ic"!=a&&"f"!=a&&window.File&&(window.FileReader&&window.FileList&&window.Blob)&&document.getElementById("postFile").addEventListener("change",handleFileSelect,!1);"undefined"!=typeof extra&&extra&&extra.init()}
function contentLoaded(){var a,b,c,d;b=location.pathname.split(/\//)[1];try{document.getElementsByClassName("recaptcha_image_cell")[0].setAttribute("style","padding: 0px!important; padding-bottom: 3px!important;")}catch(e){}if("true"==localStorage.getItem("4chan_never_show_mobile")){if(a=document.getElementById("disable-mobile"))a.style.display="none",a=document.getElementById("enable-mobile"),a.removeAttribute("style"),a.style.fontSize="12px";b=document.querySelectorAll("link");c=b.length;for(a=0;a<c;a++)b[a].getAttribute("href").match("mobile")&&(d=b[a]).parentNode.removeChild(d)}else{d=document.getElementById("boardSelectMobile");c=d.options.length;for(a=0;a<c;a++)d.options[a].value==b&&(d.selectedIndex=a);d.onchange=function(){window.location="//boards.4chan.org/"+this.options[this.selectedIndex].value+"/"}}check_for_block&&checkForBlock();clickable_ids&&enableClickableIds();1==readCookie("pass_enabled")&&removeCaptcha();2<=window.devicePixelRatio&&setRetinaIcons();!readCookie("pass_enabled")&&!readCookie("extra_path")&&enableTabOverCaptcha()}function enableTabOverCaptcha(){for(var a=document.querySelectorAll("textarea[name=com]"),b=a.length,c=0,c=0;c<b;c++)a[c].addEventListener?a[c].addEventListener("keydown",tabToCaptcha,!1):a[c].attachEvent&&a[c].attachEvent("onkeydown",tabToCaptcha)}function tabToCaptcha(a){if(9==a.keyCode)return a.preventDefault(),a.target.parentNode.parentNode.parentNode.parentNode.querySelector("input[name=recaptcha_response_field]").focus(),!1}
function disableMobile(){localStorage.setItem("4chan_never_show_mobile","true");location.reload(!0)}function enableMobile(){localStorage.removeItem("4chan_never_show_mobile");location.reload(!0)}var adHolder=null,adHolderLen=0;function checkForBlock(){if(!(/Mobile|Android|Dolfin|Opera Mobi/.test(navigator.userAgent)||1==readCookie("pass_enabled"))){adHolder=document.querySelectorAll("div > a > img[src*=support]");adHolderLen=adHolder.length;for(var a=0,b=0,b=0;b<adHolderLen;b++)if(468==adHolder[b].offsetWidth||728==adHolder[b].offsetWidth)a=1;a||plea()}}function plea(){for(var a=0,a=0;a<adHolderLen;a++)adHolder[a].getAttribute("src").match("728")||(adHolder[a].parentNode.parentNode.innerHTML=blockPlea)}
var currentHighlighted=null;function enableClickableIds(){var a=0,b=0,c=document.getElementsByClassName("posteruid"),d=document.getElementsByClassName("capcode");if(null!=d){a=0;for(b=d.length;a<b;a++)d[a].addEventListener("click",idClick,!1)}if(null!=c){a=0;for(b=c.length;a<b;a++)c[a].addEventListener("click",idClick,!1)}}
function idClick(a){for(var b=0,c=0,a="hand"==a.target.className?a.target.parentNode.className.match(/id_([^ $]+)/)[1]:a.target.className.match(/id_([^ $]+)/)[1],d=document.getElementsByClassName("highlight"),c=d.length,b=0;b<c;b++)d[0].className=d[0].className.toString().replace(/highlight /g,"");if(currentHighlighted==a)currentHighlighted=null;else{currentHighlighted=a;d=document.getElementsByClassName("id_"+a);c=d.length;for(b=0;b<c;b++)a=d[b].parentNode.parentNode.parentNode,a.className.match(/highlight /)||(a.className="highlight "+a.className)}}function handleFileSelect(a){a=a.target.files[0].size;document.getElementById("fileError").innerHTML="";a>maxFilesize&&(document.getElementById("fileError").innerHTML='<span style="font-weight:bold;padding:5px;color:red;">'+file_too_big+"</span>")}
function locationHashChanged(a){var b=document.getElementById("id_css");switch(a.id){case"refresh_top":url=window.location.href.replace(/#.+/,"#top");/top$/.test(url)||(url+="#top");b.innerHTML='<meta http-equiv="refresh" content="0;URL='+url+'">';break;case"refresh_bottom":url=window.location.href.replace(/#.+/,"#bottom"),/bottom$/.test(url)||(url+="#bottom"),b.innerHTML='<meta http-equiv="refresh" content="0;URL='+url+'">'}return!0}
function setActiveStyleSheet(a,b){if(1!=document.querySelectorAll("link[title]").length){for(var c,d,e="",f=0;c=document.getElementsByTagName("link")[f];f++)"switch"==c.getAttribute("title")&&(d=c),-1!=c.getAttribute("rel").indexOf("style")&&c.getAttribute("title")&&c.getAttribute("title")==a&&(e=c.href);d.setAttribute("href",e);b||createCookie(style_group,a,365,"boards.4chan.org")}}
function getActiveStyleSheet(){var a,b,c;if(1==document.querySelectorAll("link[title]").length)return"Yotsuba P";for(a=0;b=document.getElementsByTagName("link")[a];a++)if("switch"==b.getAttribute("title"))c=b;else if(-1!=b.getAttribute("rel").indexOf("style")&&b.getAttribute("title")&&b.href==c.href)return b.getAttribute("title");return null}function getPreferredStyleSheet(){return"ws_style"==style_group?"Yotsuba B New":"Yotsuba New"}
function createCookie(a,b,c,d){if(c){var e=new Date;e.setTime(e.getTime()+864E5*c);c="; expires="+e.toGMTString()}else c="";document.cookie=a+"="+b+c+"; path=/"+(d?"; domain="+d:"")}function readCookie(a){for(var a=a+"=",b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null}
function setRetinaIcons(){var a,b,c;c=document.getElementsByClassName("retina");for(a=0;b=c[a];++a)b.src=b.src.replace(/\.(gif|png)$/,"@2x.$1")}window.onload=init;clickable_ids&&document.addEventListener("4chanParsingDone",onParsingDone,!1);document.addEventListener("4chanMainInit",loadExtraScripts,!1);document.addEventListener("DOMContentLoaded",contentLoaded,!0);initStyleSheet();