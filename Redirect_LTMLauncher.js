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


// navigate app
function navigateLTM(androidStoreId,appStoreId,recid) {

    const platform = platform_rec();
    
    if (platform === "ios") {
        
	//const myurl = new URL("linktomyasus://");
	window.location = "linktomyasus://";
	setTimeout(function(){
            window.location = `https://apps.apple.com/us/app/link-to-myasus/id1481035824?ls=1&mt=8`;
	    //window.location=`itms-apps://apps.apple.com/us/app/link-to-myasus/id${appStoreId}`
        },2000)
	//window.location.assign("linktomyasus://");
	//window.location.reload(true);
	//window.open("linktomyasus://",'_blank');
	
	//window.location.replace("linktomyasus://");
	//window.location.replace('https://apps.apple.com/us/app/link-to-myasus/id1481035824?ls=1&mt=8');         

		
	//時間改小一點500搞不好可以解決
		
    } else if (platform === 'android') {
        //AndroidStoreGO()
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
