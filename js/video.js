// ensure the web page (DOM) has loaded
      jQuery(document).ready(function () {
         var height = $(window).height();
         var width = $(window).width();
         changeVideoResolution(height,width);
       
         function changeVideoResolution(height, width) {
             var vH, vW;
             if(width >= 1920 && height >= 1080) {
                 vH = 1080;
                 vW = 1920;
             } else if(width >= 1280 && height >= 720) {
                 vH = 720;
                 vW = 1280; 
             } else if(width >= 854 && height >= 480) {
                 vH = 480;
                 vW = 854;
             } else if(width >= 640 && height >= 360) {
                 vH = 360;
                 vW = 640;
             } else {
                 vH = 240;
                 vW = 426;
             }
             $("#ourvideo").height(vH);
             $("#ourvideo").width(vW);
             sidemargin = (width - vW)/2;
             $("#ourvideo").css({'margin-left':sidemargin+'px'});
             $("#ourvideo").css({'margin-right':sidemargin+'px'});
             $("#ourvideo").css({'margin-top':'1%'});
         }
        
      });