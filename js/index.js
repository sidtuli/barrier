jQuery(document).ready(function () {
        // Initially grab the width and length of the browser window
        // Then change the numbers to not fill the window and then change its dimensions
        w = ($(document).width())* .9
        h = ($(document).height())* .9
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
                    if($("#navajo").is(":hidden")){
                        $("#navajo").toggle("highlight");
                    }
                } else {
                    if($("#navajo").is(":visible")) {
                        $("#navajo").toggle("highlight");
                    }
                }
                $("#label").text(button);
                if($("#label").is(":hidden")){
                    console.log(region);
                    $("#label").toggle("highlight");
                }
                $("#country").prop("href",findLink(region));
                console.log($("#country").attr("href"))
              } else {
                if($("#label").is(":visible") && $("#navajo").is(":visible")) {
                  $("#label").toggle("highlight");
                  $("#navajo").toggle("highlight");
                } else if($("#label").is(":visible")) {
                  $("#label").toggle("highlight");
                }
                event.preventDefault();
              }
              
          },
          onRegionDeselect: function(event, code, region) {
              if($("#label").is(":visible") && $("#navajo").is(":visible")) {
                  $("#label").toggle("highlight");
                  $("#navajo").toggle("highlight");
              } else if($("#label").is(":visible")) {
                  $("#label").toggle("highlight");
              } 
          },
          // When the window is resized I again find the window width and length and proportion the map to fit well
          onResize: function(event, width, height) {
              //console.log(width)
              //console.log(height)
              w = ($(document).width()) * .9
              h = ($(document).height()) * .9
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
                return "finland.html"
            }
            if(country == "China"){
                return "china.html"
            }
            if(country == "New Zealand"){
                return "newzealand.html"
            }
            if(country == "Japan"){
                return "japan.html"
            }
            if(country == "United States of America"){
                return "chattanooga.html"
            }
            if(country == "South Africa"){
                return "southafrica.html"
            }
            if(country == "Paraguay"){
                return "paraguay.html"
            }
            if(country == "Turkey") {
                return "turkey.html"
            }
            else{return "Error"}
          }
    });