jQuery(document).ready(function () {
        // Initially grab the width and length of the browser window
        // Then change the numbers to not fill the window and then change its dimensions
        w = ($(window).width())* .9
        h = ($(window).height())* .9
        //console.log(w)
        //console.log(h)
        $("#vmap").width(w)
        $("#vmap").height(h)
        // Retrieving data from the json of regions from my map.
        var regions = []
        $.getJSON("js/data/regions.json", function(data){
            regions = data
        });
        var regionCode
        // Here is all the code that deals with the vector map functionality 
        jQuery('#vmap').vectorMap({
          map: 'world_en',
          backgroundColor: '#5577FF',
          borderColor: '#000000',
          color: '#ffffff',
          hoverOpacity: 0.7,
          selectedColor: '#138808',
          enableZoom: true,
          showTooltip: true,
          scaleColors: ['#FF0000', '#FFFF00'],
          values: sampledata,
          normalizeFunction: 'polynomial',
          // When a region is clicked, it make a button appear
          onRegionOver: function(event, code, region) {
              if(isSelect(code)) {
                  document.body.style.cursor = "pointer";
              } else {
                  //console.log(code);
                  event.preventDefault();
              }
          },
          onRegionClick: function(event, code, region) {
              //console.log(selectable);
              //console.log(code);
              if(isSelect(code)){
                  //console.log("hello"+code);
                  /*for(i = 0; i < regions.length; i++){
                  if(code.toUpperCase() == regions[i].Code){
                      //console.log(code,regions[i].Country)
                    }
                  }*/
                var button = region;
                if(region === "United States of America") {
                    button = "Chattanooga";
                    $("#navajo").show();
                } else {
                    $("#navajo").hide();
                }
                $("#label").text(button)
                $("#label").show();
              } else {
                $("#label").hide();
                $("#navajo").hide();
                event.preventDefault();
              }
              
          },
          // When the window is resized I again find the window width and length and proportion the map to fit well
          onResize: function(event, width, height) {
              //console.log(width)
              //console.log(height)
              w = ($(window).width()) * .9
              h = ($(window).height()) * .9
              $("#vmap").width(w)
              $("#vmap").height(h)
          }
        });
        function isSelect(regCode) {
            for(i = 0; i < selectable.length; i++) {
                if(regCode == selectable[i]) {
                    return true;
                }
            }
            return false;
        }
    });