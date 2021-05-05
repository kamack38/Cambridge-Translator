browser.contextMenus.create({
    title: "Polish - English: %s",
    contexts:["selection"],
    onclick: lookUpCambridge,
});

function lookUpCambridge(info,tab) {
    if(info){
        var token=info.selectionText;
        var cambridgeUrl = 'https://dictionary.cambridge.org/dictionary/polish-english/'+token;
        lookUpSelection(token, cambridgeUrl);
    }
}

function onError(error) {
  console.log(`Error: ${error}`);
}


function onCreated(windowInfo) {
		var screenwidth = windowInfo.width;
		var screenheight = windowInfo.height;
		var screenratio = screenwidth/screenheight;
		if(screenratio >= 1){
			var windowleft = Math.round(screenwidth*0.8);
			var windowwidth = Math.round(screenwidth/2.8);
			var windowheight = Math.round(windowwidth*1.618);
			var windowtop = Math.round(screenheight*0.1618);
			}else {
				var windowleft = Math.round(screenwidth*0.7);
				var windowwidth = Math.round(screenwidth/1.75);
				var windowheight = Math.round(windowwidth*1.618);
				var windowtop = Math.round(screenheight*0.25);
				  }
//		console.log(windowInfo);
//		console.log(screenwidth,screenheight,screenratio);
//		console.log(windowwidth,windowheight,windowleft,windowtop);
	    var windowid = browser.windows.WINDOW_ID_CURRENT;
		browser.windows.update(windowid, {
							width: windowwidth,
                            height: windowheight,
							left: windowleft,
                            top:windowtop
							});
}

function lookUpSelection(text, url){
    if(text){
		var creating = browser.windows.create({url: url,
                            type:"popup"
                            });
	    creating.then(onCreated, onError);	
    }
}
