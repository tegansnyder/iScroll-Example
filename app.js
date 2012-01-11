$(function() {

	//allow cross domain scripts
	
    $.ajaxSetup ({
        cache: false
    });

    $.support.cors = true;

});

$(document).bind('mobileinit', function() {

    $.mobile.allowCrossDomainPages = true;
    $.mobile.fixedToolbars.setTouchToggleEnabled(false);
    $.mobile.touchOverflowEnabled = true;
    $.mobile.fixedToolbars.show(true);
    
});


$('#main').live('pageinit', function(event) {

	//put your content here
                
});



