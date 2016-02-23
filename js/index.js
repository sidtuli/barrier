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
        $.getJSON("data/wpfi.json",function(data){
            pi = data
            // Printing out all the countries in JSON
            for(i = 0; i < data.length; i++) {
                console.log(data[i].FIELD3)
            }
        });
        // Here is all the code that deals with the vector map functionality 
        jQuery('#vmap').vectorMap({
          map: 'world_en',
          backgroundColor: '#5577FF',
          color: '#ffffff',
          hoverOpacity: 0.7,
          selectedColor: '#0000ff',
          enableZoom: true,
          showTooltip: true,
          scaleColors: ['#FF0000', '#FFFF00'],
          values: sampledata,
          normalizeFunction: 'polynomial',
          // When a region is clicked, it make a button appear    
          onRegionClick: function(event, code, region) {
              console.log(code,region)
              $("#label").text(region)
              $("#label").show()
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
        
        
          
      });