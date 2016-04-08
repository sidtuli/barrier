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
                $("#country").prop("href",findLink(region));
                console.log($("#country").attr("href"))
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
        function findLink(country) {
            console.log(country)
            if(country == "Finland"){
                return "https://www.youtube.com/embed/3ZpKBwKSy5o?autoplay=1"
            }
            if(country == "China"){
                return "https://www.youtube.com/embed/xkAkC7fLNMA?autoplay=1"
            }
            if(country == "New Zealand"){
                return "https://www.youtube.com/embed/tqlx7bfUq1w?autoplay=1"
            }
            if(country == "Japan"){
                return "https://www.youtube.com/embed/FdJztBo6k-k?autoplay=1"
            }
            if(country == "United States of America"){
                return "https://www.youtube.com/embed/Imqr63TU_pI?autoplay=1"
            }
            if(country == "South Africa"){
                return "https://www.youtube.com/embed/26-9OF3B55Q?autoplay=1"
            }
            if(country == "Paraguay"){
                return "https://www.youtube.com/embed/CI9z-RHXE1c?autoplay=1"
            }
            else{return "Error"}
          }
    });