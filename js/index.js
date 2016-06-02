jQuery(document).ready(function () {
        // Initially grab the width and length of the browser window
        // Then change the numbers to not fill the window and then change its dimensions
        w = ($(document).width())* .9
        h = ($(document).height())* .9
        $("#vmap").width(w);
        $("#vmap").height(h);
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
          // When hovering on a region, attempt to prevent any normal hover 
          // actions on non-selectable regions
          onRegionOver: function(event, code, region) {
              if(isSelect(code)) {
                  document.body.style.cursor = "pointer";
              } else {
                  event.preventDefault();
              }
          },
          // When a region is clicked I naviagate users to choose a region or go immediately to a country
          onRegionClick: function(event, code, region) {
              if(isSelect(code)){
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
                    $("#label").toggle("highlight");
                }
                $("#country").prop("href",findLink(region));
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
          // When a region is deselected I hide the buttons
          onRegionDeselect: function(event, code, region) {
              if($("#label").is(":visible") && $("#navajo").is(":visible")) {
                  $("#label").toggle("highlight");
                  $("#navajo").toggle("highlight");
              } else if($("#label").is(":visible")) {
                  $("#label").toggle("highlight");
              } 
          },
          // Each time the window is resized, I change the size of the map
          onResize: function(event, width, height) {
              w = ($(document).width()) * .9
              h = ($(document).height()) * .9
              $("#vmap").width(w)
              $("#vmap").height(h)
          }
        });
        // Finds out whether or not a region should be selectable
        function isSelect(regCode) {
            for(i = 0; i < selectable.length; i++) {
                if(regCode == selectable[i]) {
                    return true;
                }
            }
            return false;
        }
        // Will give back the link to a country as well as move the user to a country wth only one choice
        function findLink(country) {
            if(country == "Finland"){
                window.location.href = "finland.html";
                return "finland.html";
            }
            if(country == "China"){
                window.location.href = "china.html";
                return "china.html";
            }
            if(country == "New Zealand"){
                window.location.href = "newzealand.html";
                return "newzealand.html";
            }
            if(country == "Japan"){
                window.location.href = "japan.html";
                return "japan.html";
            }
            if(country == "United States of America"){
                return "chattanooga.html"
            }
            if(country == "South Africa"){
                window.location.href = "southafrica.html";
                return "southafrica.html";
            }
            if(country == "Paraguay"){
                window.location.href = "paraguay.html";
                return "paraguay.html";
            }
            if(country == "Turkey") {
                
                window.location.href = "turkey.html";
                return "turkey.html";
            }
            else{return "Error"}
          }
    
    });