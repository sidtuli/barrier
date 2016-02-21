jQuery(document).ready(function () {
        w = ($(window).width())* .9
        h = ($(window).height())* .9
        console.log(w)
        console.log(h)
        $("#vmap").width(w)
        $("#vmap").height(h)
        var pi =[]
        $.getJSON("data/wpfi.json",function(data){
            pi = data
            for(i = 0; i < data.length; i++) {
                console.log(data[i].FIELD3)
            }
        });
        console.log(sampledata.length)
        console.log(pi.length)
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
          onRegionClick: function(event, code, region) {
              console.log(code,region)
              $("#label").text(region)
              $("#label").show()
          },
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