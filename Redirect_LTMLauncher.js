// recognize platform
function platform_rec() {
    const Platform_useragent = navigator.userAgent;
    
    console.log(Platform_useragent);
    console.log(navigator.userAgent);
    console.log(navigator.vendor);
    console.log(navigator.platform);
    
    if (Platform_useragent.match(/iPad|iPhone|iPod/i)) {
        console.log('ios')
        return "ios";
    }else if (Platform_useragent.match(/android/i)) {
        console.log('android');
        return "android";
    }else{
        console.log('You need to use mobile phone');
    }
    
}
function isEffective(url) {
   try {
     var xmlhttp;
     if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
       xmlhttp = new XMLHttpRequest();
     } else { // code for IE6, IE5
       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
     }
     xmlhttp.open("get", url, false);
     xmlhttp.send();
     if (xmlhttp.status == "404") {
       return false;
     } else {
       return true;
     }
   } catch (e) {
     return false;
   }
 }
// navigate app
function navigateLTM(androidStoreId,appStoreId,recid) {

    const platform = platform_rec();
    /*
    function AppStoreGO() {

        window.location.href = "linktomyasus://";
        setTimeout(function(){

            window.location.href = `itms-apps://apps.apple.com/us/app/link-to-myasus/id${appStoreId}`;
            window.location.href = `itms-apps://apps.apple.com/us/app/link-to-myasus/id${appStoreId}`; 

        },2000)
    }

    function AndroidStoreGO() {

        window.location.href = "linktomyasus://";
        //在使用「URL Scheme」跳轉的同時，通過定時器在一定時間之後跳轉到下載頁。倘若裝置上有安裝APP，就會跳到APP，否則在一定時間後就會跳到下載頁。
        setTimeout(function(){

            window.location.href = `https://play.google.com/store/apps/details?id=${androidStoreId}`;
            window.location.href = `https://play.google.com/store/apps/details?id=${androidStoreId}`;

        },2000)
    
    }
    */

    if (platform === "ios") {
        //AppStoreGO()
	//var ifr = document.createElement('iframe');
	//ifr.src = 'com.baidu.tieba://';
	//ifr.style.display = 'none';
	//document.body.appendChild(ifr);
        //location.href = `linktomyasus://${recid}`;
	//var rec = location.assign("linktomyasus://")
	//if(rec == undefined){
	//   window.location.href = `itms-apps://apps.apple.com/us/app/link-to-myasus/id${appStoreId}`;	
	//}else{
	//  window.location.href = "linktomyasus://";
	//}
	window.location.href = "linktomyasus://&x-error={{itms-apps://apps.apple.com/us/app/link-to-myasus/id${appStoreId}}}";
	    
        //setTimeout(function(){

        //    window.location.href = `itms-apps://apps.apple.com/us/app/link-to-myasus/id${appStoreId}`;
        //    window.location.href = `itms-apps://apps.apple.com/us/app/link-to-myasus/id${appStoreId}`; 

        //},2000)
	//window.location.href = "linktomyasus://";
		
    } else if (platform === 'android') {
        //AndroidStoreGO();
        window.location.href = "linktomyasus://";
        //window.location.href = `linktomyasus://${recid}`;
        //在使用「URL Scheme」跳轉的同時，通過定時器在一定時間之後跳轉到下載頁。倘若裝置上有安裝APP，就會跳到APP，否則在一定時間後就會跳到下載頁。
        setTimeout(function(){

            window.location.href = `https://play.google.com/store/apps/details?id=${androidStoreId}`;
            window.location.href = `https://play.google.com/store/apps/details?id=${androidStoreId}`;

        },2000)
    } else{
        console.log('You need to use mobile phone');
    }
    
}

navigateLTM('com.asus.syncv2','1481035824')
//location.href可以取得目前網址
/*
let recid = location.href.split('//')[1];
if(recid === ""){
    navigateLTM('com.asus.syncv2','1481035824',recid)
}
else{
    alert('Your link is fail!');
}
*/
let input_str = "linktomyasus://scan=1457489";
let Rec_Key = input_str.split('=')[1];
console.log(Rec_Key);
