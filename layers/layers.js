ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([42.550146, -0.351667, 42.603846, -0.314001]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WomensMarketcornerpoints_2 = new ol.format.GeoJSON();
var features_WomensMarketcornerpoints_2 = format_WomensMarketcornerpoints_2.readFeatures(json_WomensMarketcornerpoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WomensMarketcornerpoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WomensMarketcornerpoints_2.addFeatures(features_WomensMarketcornerpoints_2);
var lyr_WomensMarketcornerpoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WomensMarketcornerpoints_2, 
                style: style_WomensMarketcornerpoints_2,
                popuplayertitle: "Womens Market corner points",
                interactive: false,
                title: '<img src="styles/legend/WomensMarketcornerpoints_2.png" /> Womens Market corner points'
            });
var format_WomensMarket_Centrepoint_3 = new ol.format.GeoJSON();
var features_WomensMarket_Centrepoint_3 = format_WomensMarket_Centrepoint_3.readFeatures(json_WomensMarket_Centrepoint_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WomensMarket_Centrepoint_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WomensMarket_Centrepoint_3.addFeatures(features_WomensMarket_Centrepoint_3);
var lyr_WomensMarket_Centrepoint_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WomensMarket_Centrepoint_3, 
                style: style_WomensMarket_Centrepoint_3,
                popuplayertitle: "Womens Market_Centre point",
                interactive: false,
                title: '<img src="styles/legend/WomensMarket_Centrepoint_3.png" /> Womens Market_Centre point'
            });
var format_District_Boundary_4 = new ol.format.GeoJSON();
var features_District_Boundary_4 = format_District_Boundary_4.readFeatures(json_District_Boundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_District_Boundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_Boundary_4.addFeatures(features_District_Boundary_4);
var lyr_District_Boundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_Boundary_4, 
                style: style_District_Boundary_4,
                popuplayertitle: "District_Boundary",
                interactive: false,
                title: '<img src="styles/legend/District_Boundary_4.png" /> District_Boundary'
            });
var format_Dalxiska_Women_Market_5 = new ol.format.GeoJSON();
var features_Dalxiska_Women_Market_5 = format_Dalxiska_Women_Market_5.readFeatures(json_Dalxiska_Women_Market_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Dalxiska_Women_Market_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dalxiska_Women_Market_5.addFeatures(features_Dalxiska_Women_Market_5);
var lyr_Dalxiska_Women_Market_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dalxiska_Women_Market_5, 
                style: style_Dalxiska_Women_Market_5,
                popuplayertitle: "Dalxiska_Women_Market",
                interactive: true,
                title: '<img src="styles/legend/Dalxiska_Women_Market_5.png" /> Dalxiska_Women_Market'
            });
var format_2Km_buffer_Women_Market_6 = new ol.format.GeoJSON();
var features_2Km_buffer_Women_Market_6 = format_2Km_buffer_Women_Market_6.readFeatures(json_2Km_buffer_Women_Market_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2Km_buffer_Women_Market_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Km_buffer_Women_Market_6.addFeatures(features_2Km_buffer_Women_Market_6);
var lyr_2Km_buffer_Women_Market_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2Km_buffer_Women_Market_6, 
                style: style_2Km_buffer_Women_Market_6,
                popuplayertitle: "2Km_buffer_Women_Market",
                interactive: false,
                title: '<img src="styles/legend/2Km_buffer_Women_Market_6.png" /> 2Km_buffer_Women_Market'
            });
var format_Dalxiska_IDP_Sites_7 = new ol.format.GeoJSON();
var features_Dalxiska_IDP_Sites_7 = format_Dalxiska_IDP_Sites_7.readFeatures(json_Dalxiska_IDP_Sites_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Dalxiska_IDP_Sites_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dalxiska_IDP_Sites_7.addFeatures(features_Dalxiska_IDP_Sites_7);
var lyr_Dalxiska_IDP_Sites_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dalxiska_IDP_Sites_7, 
                style: style_Dalxiska_IDP_Sites_7,
                popuplayertitle: "Dalxiska_IDP_Sites",
                interactive: true,
                title: '<img src="styles/legend/Dalxiska_IDP_Sites_7.png" /> Dalxiska_IDP_Sites'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_WomensMarketcornerpoints_2.setVisible(true);lyr_WomensMarket_Centrepoint_3.setVisible(true);lyr_District_Boundary_4.setVisible(true);lyr_Dalxiska_Women_Market_5.setVisible(true);lyr_2Km_buffer_Women_Market_6.setVisible(true);lyr_Dalxiska_IDP_Sites_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_WomensMarketcornerpoints_2,lyr_WomensMarket_Centrepoint_3,lyr_District_Boundary_4,lyr_Dalxiska_Women_Market_5,lyr_2Km_buffer_Women_Market_6,lyr_Dalxiska_IDP_Sites_7];
lyr_WomensMarketcornerpoints_2.set('fieldAliases', {'Corner': 'Corner', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_WomensMarket_Centrepoint_3.set('fieldAliases', {'Point': 'Point', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_District_Boundary_4.set('fieldAliases', {'ADM1_EN': 'ADM1_EN', 'District': 'District', });
lyr_Dalxiska_Women_Market_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_2Km_buffer_Women_Market_6.set('fieldAliases', {'id': 'id', });
lyr_Dalxiska_IDP_Sites_7.set('fieldAliases', {'2024_SID_C': '2024_SID_C', 'Site_ID_Pa': 'Site_ID_Pa', 'Site_Name_': 'Site_Name_', 'Site_Name': 'Site_Name', 'District': 'District', 'District_P': 'District_P', 'Cluster/Se': 'Cluster/Se', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_WomensMarketcornerpoints_2.set('fieldImages', {'Corner': '', 'Latitude': '', 'Longitude': '', });
lyr_WomensMarket_Centrepoint_3.set('fieldImages', {'Point': '', 'Latitude': '', 'Longitude': '', });
lyr_District_Boundary_4.set('fieldImages', {'ADM1_EN': 'TextEdit', 'District': 'TextEdit', });
lyr_Dalxiska_Women_Market_5.set('fieldImages', {'id': 'TextEdit', 'Name': '', });
lyr_2Km_buffer_Women_Market_6.set('fieldImages', {'id': 'TextEdit', });
lyr_Dalxiska_IDP_Sites_7.set('fieldImages', {'2024_SID_C': 'TextEdit', 'Site_ID_Pa': 'TextEdit', 'Site_Name_': 'TextEdit', 'Site_Name': 'TextEdit', 'District': 'TextEdit', 'District_P': 'TextEdit', 'Cluster/Se': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_WomensMarketcornerpoints_2.set('fieldLabels', {'Corner': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_WomensMarket_Centrepoint_3.set('fieldLabels', {'Point': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_District_Boundary_4.set('fieldLabels', {'ADM1_EN': 'hidden field', 'District': 'inline label - visible with data', });
lyr_Dalxiska_Women_Market_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_2Km_buffer_Women_Market_6.set('fieldLabels', {'id': 'no label', });
lyr_Dalxiska_IDP_Sites_7.set('fieldLabels', {'2024_SID_C': 'hidden field', 'Site_ID_Pa': 'hidden field', 'Site_Name_': 'hidden field', 'Site_Name': 'inline label - visible with data', 'District': 'hidden field', 'District_P': 'hidden field', 'Cluster/Se': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Dalxiska_IDP_Sites_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});