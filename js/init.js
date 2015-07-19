(function($) {

    $(document).ready(function() {

        L.mapbox.accessToken = 'pk.eyJ1IjoiaGFwcHlmIiwiYSI6IjMwMjZiODUzYTNkNjgyZDk4MmZjNjg2ZmY3OTk1MjM5In0.PcIrd9NZ0bv3nLWelxnH9A';

        var timer;
        // var year = '2012';
        var activeMarker;
        var activeMarkerRate;
        var currentZoom = 3;
        var hoverEvent = true;
        var activeCountry;
        var deathsCrude1 = 0;
        var deathsCrude2 = 0;
        var introTextItem = 1;
        var geoJson = cities;
        var baseLayer = L.mapbox.tileLayer('pulitzercenter.wf7kory9');
        // var grid=L.tileLayer('http://t2.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}');
        // var toolTip = { template: '{{{ADMIN}}}' };
        // var gridControl = L.mapbox.gridControl(gridLayer, toolTip);
        var iconUrl = 'img/icon.png';
        var iconUrlActive = 'img/icon-active.png';

        var autoplay = null;
        var icon1 = {
            "iconUrl": iconUrl,
            "iconSize": [30, 30]
        };
        var iconhover1 = {
            "iconUrl": iconUrlActive,
            "iconSize": [5, 5]
        };
        var icon1 = {
            "iconUrl": iconUrl,
            "iconSize": [0, 0]
        };
        var icon2 = {
            "iconUrl": iconUrl,
            "iconSize": [10, 10]
        };
        var icon3 = {
            "iconUrl": iconUrl,
            "iconSize": [15, 15]
        };
        var icon4 = {
            "iconUrl": iconUrl,
            "iconSize": [20, 20]
        };
        var icon5 = {
            "iconUrl": iconUrl,
            "iconSize": [25, 25]
        };
        var icon6 = {
            "iconUrl": iconUrl,
            "iconSize": [30, 30]
        };
        var icon7 = {
            "iconUrl": iconUrl,
            "iconSize": [35, 35]
        };
        var icon8 = {
            "iconUrl": iconUrl,
            "iconSize": [40, 40]
        };
        var icon9 = {
            "iconUrl": iconUrl,
            "iconSize": [45, 45]
        };
        var icon10 = {
            "iconUrl": iconUrl,
            "iconSize": [50, 50]
        };
        var icon11 = {
            "iconUrl": iconUrl,
            "iconSize": [55, 55]
        };
        var icon12 = {
            "iconUrl": iconUrl,
            "iconSize": [60, 60]
        };
        var icon13 = {
            "iconUrl": iconUrl,
            "iconSize": [65, 65]
        };


        var icon1hover = {
            "iconUrl": iconUrlActive,
            "iconSize": [5, 5]
        };
        var icon2hover = {
            "iconUrl": iconUrlActive,
            "iconSize": [10, 10]
        };
        var icon3hover = {
            "iconUrl": iconUrlActive,
            "iconSize": [15, 15]
        };
        var icon4hover = {
            "iconUrl": iconUrlActive,
            "iconSize": [20, 20]
        };
        var icon5hover = {
            "iconUrl": iconUrlActive,
            "iconSize": [25, 25]
        };
        var icon6hover = {
            "iconUrl": iconUrlActive,
            "iconSize": [30, 30]
        };
        var icon7hover = {
            "iconUrl": iconUrlActive,
            "iconSize": [35, 35]
        };
        var icon8hover = {
            "iconUrl": iconUrlActive,
            "iconSize": [40, 40]
        };
        var icon9hover = {
            "iconUrl": iconUrlActive,
            "iconSize": [45, 45]
        };
        var icon10hover = {
            "iconUrl": iconUrlActive,
            "iconSize": [50, 50]
        };
        var icon11hover = {
            "iconUrl": iconUrlActive,
            "iconSize": [55, 55]
        };
        var icon12hover = {
            "iconUrl": iconUrlActive,
            "iconSize": [60, 60]
        };
        var icon13hover = {
            "iconUrl": iconUrlActive,
            "iconSize": [65, 65]
        };

        function setMarker(marker, rate) {

            if (rate == null) {
                marker.setIcon(L.icon(icon1));
            }

            if (rate > 0) {
                marker.setIcon(L.icon(icon2));
            }

            if (rate > 10) {
                marker.setIcon(L.icon(icon3)).bindPopup(marker.feature.properties.ADMIN).openPopup();;
            }

            if (rate > 20) {
                marker.setIcon(L.icon(icon4)).bindPopup(marker.feature.properties.ADMIN).openPopup();;
            }

            if (rate > 30) {
                marker.setIcon(L.icon(icon5)).bindPopup(marker.feature.properties.ADMIN).openPopup();;
            }

            if (rate > 40) {
                marker.setIcon(L.icon(icon6)).bindPopup(marker.feature.properties.ADMIN).openPopup();;
            }

            if (rate > 50) {
                marker.setIcon(L.icon(icon7)).bindPopup(marker.feature.properties.ADMIN).openPopup();
            }

            if (rate > 60) {
                marker.setIcon(L.icon(icon8)).bindPopup(marker.feature.properties.ADMIN).openPopup();
            }

            if (rate > 70) {
                marker.setIcon(L.icon(icon9)).bindPopup(marker.feature.properties.ADMIN).openPopup();
            }

            if (rate > 80) {
                marker.setIcon(L.icon(icon10));
            }

            if (rate > 90) {
                marker.setIcon(L.icon(icon11));
            }

            if (rate > 100) {
                marker.setIcon(L.icon(icon12));
            }
        }

        function setMarkerHover(marker, rate) {

            if (rate == null) {
                marker.setIcon(L.icon(icon1hover));
            }

            if (rate > 0) {
                marker.setIcon(L.icon(icon2hover));
            }

            if (rate > 10) {
                marker.setIcon(L.icon(icon3hover)).bindPopup(marker.feature.properties.ADMIN).openPopup();
            }

            if (rate > 20) {
                marker.setIcon(L.icon(icon4hover)).bindPopup(marker.feature.properties.ADMIN).openPopup();
            }

            if (rate > 30) {
                marker.setIcon(L.icon(icon5hover)).bindPopup(marker.feature.properties.ADMIN).openPopup();
            }

            if (rate > 40) {
                marker.setIcon(L.icon(icon6hover)).bindPopup(marker.feature.properties.ADMIN).openPopup();
            }

            if (rate > 50) {
                marker.setIcon(L.icon(icon7hover)).bindPopup(marker.feature.properties.ADMIN).openPopup();
            }

            if (rate > 60) {
                marker.setIcon(L.icon(icon8hover)).bindPopup(marker.feature.properties.ADMIN).openPopup();
            }

            if (rate > 70) {
                marker.setIcon(L.icon(icon9hover));
            }

            if (rate > 80) {
                marker.setIcon(L.icon(icon10hover));
            }

            if (rate > 90) {
                marker.setIcon(L.icon(icon11hover));
            }

            if (rate > 100) {
                marker.setIcon(L.icon(icon12hover));
            }

        }

        // 加载地图
        var map = L.mapbox.map('map', null);
        // 地图中心点坐标和zoom层级
        map.setView([34.548488, 109.009705], 5);
        baseLayer.addTo(map);
        // grid.addTo(map);
        //marker图层，用geojson做 
        var countriesLayer = L.mapbox.markerLayer();
        countriesLayer.addTo(map);

        // share内容，ajax得到tour的
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "json/tour.json",
            success: function(tour) {
                //console.log(tour);
                // inner append内容
                $('#tour .inner').append(tour[0]['title']);
                $('#tour .inner').append('<p>' + tour[0]['body'] + '</p>');

                var i = 1;
                var n = -1;

                $('#next-btn').click(function(e) {
                    // 防止加载
                    e.preventDefault();
                    // 有简介的就20个，到20返回0
                    if (i == 12) {
                        i = 0;
                    }
                    //  $('body').attr('class', 'tour-item-' + i)的意思
                    $('body').attr('class', 'tour-item-' + i);
                    $('#tour .inner').empty();
                    $('#tour .inner').append(tour[i]['title']);
                    $('#tour .inner').append('<p>' + tour[i]['body'] + '</p>');
                    if (tour[i]['country']) {
                        $('#side').show();
                        showActiveCountry(tour[i]['country'], tour[i]['zoom']);
                    } else {
                        map.setView([34.548488, 109.009705], 5);
                        $('#side').hide();
                    }

                    i++;
                    n++;

                });

                $('#prev-btn').click(function(e) {

                    e.preventDefault();

                    $('body').attr('class', 'tour-item-' + n);
                    $('#tour .inner').empty();
                    $('#tour .inner').append(tour[n]['title']);
                    $('#tour .inner').append('<p>' + tour[n]['body'] + '</p>');
                    if (tour[n]['country']) {
                        $('#side').show();
                        showActiveCountry(tour[n]['country'], tour[n]['zoom']);
                    } else {
                        map.setView([34.548488, 109.009705], 5);
                        $('#side').hide();
                    }

                    i = n + 1;
                    n--;

                });

            }

        });

        // 图层加载后的事件，加载marker
        countriesLayer.on('layeradd',
        function(e) {
            var marker = e.layer,
            feature = marker.feature;
            var rate = marker.feature.properties.cl_RATE2012;
            setMarker(marker, rate);
        });

        // 获取当前地图层级
        map.on('zoomend',
        function() {
            currentZoom = map.getZoom();
            console.log(currentZoom);

        });

        // 鼠标放到marker上改变形态
        countriesLayer.on('mouseover',
        function(e) {
            var marker = e.layer,
            feature = marker.feature;
            var rate = marker.feature.properties.cl_RATE2012;
            setMarkerHover(marker, rate);
            
        });
        countriesLayer.on('mouseout',
        function(e) {
            var marker = e.layer,
            feature = marker.feature;
            var rate = marker.feature.properties.cl_RATE2012;
            if (marker != activeMarker) {
                setMarker(marker, rate);
            }
        });

        // 加载geojson
        countriesLayer.setGeoJSON(geoJson);

        if (activeCountry != null) {
            showActiveCountry(activeCountry, currentZoom);
        }

        // // 显示当前城市（国家）的信息,side中的内容
        function showActiveCountry(country, zoom) {
            // 添加marker
            if (activeMarker != null) {
                setMarker(activeMarker, activeMarkerRate);
            }

            countriesLayer.eachLayer(function(marker) {
                // 判断国家信息
                if (marker.feature.properties.cl_COUNTRY === country) {
                    activeCountry = country;
                    // if (year == '1990') {
                    //     var rate = marker.feature.properties.cl_RATE1990;
                    // } else {
                    // 从cities中读取的rate
                    var rate = marker.feature.properties.cl_RATE2012;
                    // }
                    setMarkerHover(marker, rate);
                    activeMarker = marker;
                    activeMarkerRate = rate;
                    map.setView([marker._latlng.lat, marker._latlng.lng], zoom);
                    $('#country').empty();
                    $('#country').append(marker.feature.properties.ADMIN);
                    // $('.day').show();
                    // 改成图 在rate-chart里加图片
                    $('#rate-chart').empty();
                    $('#rate-chart').append(marker.feature.properties.url);
                    $('#side').show();
                }
            });
        }

        $('#tour-control').on('click',
        function(e) {
            e.preventDefault();
            if ($('#tour').is(':visible')) {
                $('#tour').hide();
                $('#tour-control').show();
            } else {
                $('#tour-control').hide();
                $('#tour').show();
            }
        });
        // 简介开关
        $('#tour-close').on('click',
        function(e) {
            e.preventDefault();
            $('#tour').hide('fast');
            $('#tour-control').show();
        });

        $('#overlay').on('click',
        function(e) {
            $('#overlay, #share, #info').hide();
        });

        countriesLayer.on('click',
        function(e) {
            var marker = e.layer,
            feature = marker.feature;

            clearInterval(autoplay);

            $('#tour').hide('fast');
            $('#tour-control').show();

            if (activeMarker != null) {
                setMarker(activeMarker, activeMarkerRate);
            }

            var rate = marker.feature.properties.cl_RATE2012;

            if (hoverEvent == true) {
                hoverEvent = false;
            }

            if (hoverEvent == false && marker == activeMarker) {
                hoverEvent = true;
            }

            setMarkerHover(marker, rate);
            //map.setView([marker._latlng.lat, marker._latlng.lng], currentZoom);
            activeMarker = marker;
            activeMarkerRate = rate;
            activeCountry = marker.feature.properties.ADMIN;

            // show 的第一行
            $('#country').empty();
            $('#country').append(marker.feature.properties.ADMIN);
            $('#side').show();
            $('#rate-chart').empty();
            $('#rate-chart').append(marker.feature.properties.url);
            var country = marker.feature.properties.ADMIN;
            /*
      if (marker.feature.properties.cl_NEONATAL != '') {
        drawDonut('#causes-chart', country, marker.feature.properties.cl_NEONATAL, marker.feature.properties.cl_PNEUMONIA, marker.feature.properties.cl_DIARRHEA, marker.feature.properties.cl_MALARIA, marker.feature.properties.cl_OTHER);
      } else {
        $('#causes-chart').empty();
      }
      */
        });
        // =========d3.js========
        // map.getPanes().overlayPane 获得地图窗口上的图层窗口上，添加svg
        var svg = d3.select(map.getPanes().overlayPane)
                .append("svg")
                .attr("width",50)
                .attr("height",50);
        // 画图数据
        var dataset = [ 30 , 10 , 43 , 55 , 13 ];



        var pie = d3.layout.pie();



        map.on("viewreset",drawPie);

        drawPie();
        function drawPie()
        {

            d3.select("svg").selectAll("g").remove();

            var zoom=map.getZoom();
            // alert(marker._latlng.lat, marker._latlng.lng);
            var point = map.latLngToLayerPoint([34.548488, 109.009705]);
            // 饼状图大小
            var outerRadius = zoom*10/2;
            var arc = d3.svg.arc()
                    .innerRadius(0)
                    .outerRadius(outerRadius);

            var color = d3.scale.category10();

            // selectAll 从当前文档中选择多个元素  g
            var arcs = svg.selectAll("g")
                    .data(pie(dataset))
                    .enter()
                    .append("g")
                    .attr("transform","translate("+outerRadius+","+outerRadius+")");

            arcs.append("path")
                    .attr("fill",function(d,i){
                        return color(i);
                    })
                    .attr("d",function(d){
                        return arc(d);
                    });

            arcs.append("text")
                    .attr("transform",function(d){
                        return "translate(" + arc.centroid(d) + ")";
                    })
                    .attr("text-anchor","middle")
                    .text(function(d){
                        return d.value;
                    });

            d3.select("svg")
                    .attr("width", zoom*10)
                    .attr("height", zoom*10)
                    .style("left", (point.x-zoom*10/2) + "px")
                    .style("top", (point.y-zoom*10/2) + "px");
        }


        var width = 700,height = 700;
    


    });
})(jQuery);