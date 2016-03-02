jQuery(document).ready(function () {
        // Initially grab the width and length of the browser window
        // Then change the numbers to not fill the window and then change its dimensions
        w = ($(window).width())* .9
        h = ($(window).height())* .9
        console.log(w)
        console.log(h)
        $("#vmap").width(w)
        $("#vmap").height(h)
        // Create an array to hold the data from the World Press Freedom Index JSON
        var pi =[]
        // Then I retrieve info from the JSon
        $.getJSON("js/data/wpfi.json",function(data){
            pi = data
        });
        $.getJSON("js/data/regions.json", function(data){
            for(i = 0; i < data.length; i++) {
                flag = true;
                for(j = 0; j < pi.length; j++){
                    if(data[i].Country == pi[j].Country){
                        flag = false;
                    }
                }
                if(flag){console.log(data[i].Country)}
            }
        });
        // Here is all the code that deals with the vector map functionality 
        jQuery('#vmap').vectorMap({
          map: 'world_en',
          backgroundColor: '#5577FF',
          color: '#ffffff',
          hoverOpacity: 0.7,
          selectedColor: '#702963',
          enableZoom: true,
          showTooltip: true,
          scaleColors: ['#FF0000', '#FFFF00'],
          values: sampledata,
          normalizeFunction: 'polynomial',
          // When a region is clicked, it make a button appear    
          onRegionClick: function(event, code, region) {
              console.log(code,region)
              $("#label").text(region)
              $("#label").show();
          },
          // When the window is resized I again find the window width and length and proportion the map to fit well
          onResize: function(event, width, height) {
              console.log(width)
              console.log(height)
              w = ($(window).width()) * .9
              h = ($(window).height()) * .9
              $("#vmap").width(w)
              $("#vmap").height(h)
          }
        });
        // Making the bandwidth buttons appear and the map to disappear
        var country
        $("#label").click(function(){
            country = $("#label").text();
            $("#world").fadeOut();
            $("#bandwidths").fadeIn();
        });
        
          
      });