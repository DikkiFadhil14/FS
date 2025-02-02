var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_FO_1 = new ol.format.GeoJSON();
var features_FO_1 = format_FO_1.readFeatures(json_FO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FO_1.addFeatures(features_FO_1);
var lyr_FO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FO_1, 
                style: style_FO_1,
                popuplayertitle: 'FO',
                interactive: true,
    title: 'FO<br />\
    <img src="styles/legend/FO_1_0.png" /> FO 48C<br />\
    <img src="styles/legend/FO_1_1.png" /> FO 96C<br />'
        });
var format_POLE_2 = new ol.format.GeoJSON();
var features_POLE_2 = format_POLE_2.readFeatures(json_POLE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_2.addFeatures(features_POLE_2);
var lyr_POLE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLE_2, 
                style: style_POLE_2,
                popuplayertitle: 'POLE',
                interactive: true,
                title: '<img src="styles/legend/POLE_2.png" /> POLE'
            });
var format_JB_3 = new ol.format.GeoJSON();
var features_JB_3 = format_JB_3.readFeatures(json_JB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JB_3.addFeatures(features_JB_3);
var lyr_JB_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JB_3, 
                style: style_JB_3,
                popuplayertitle: 'JB',
                interactive: true,
    title: 'JB<br />\
    <img src="styles/legend/JB_3_0.png" /> JB 48<br />\
    <img src="styles/legend/JB_3_1.png" /> JB 96<br />'
        });
var format_DPFO_4 = new ol.format.GeoJSON();
var features_DPFO_4 = format_DPFO_4.readFeatures(json_DPFO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPFO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPFO_4.addFeatures(features_DPFO_4);
var lyr_DPFO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DPFO_4, 
                style: style_DPFO_4,
                popuplayertitle: 'DPFO',
                interactive: true,
    title: 'DPFO<br />\
    <img src="styles/legend/DPFO_4_0.png" /> MS<br />\
    <img src="styles/legend/DPFO_4_1.png" /> S<br />'
        });
var group_InnercityPOPPerumnas = new ol.layer.Group({
                                layers: [lyr_FO_1,lyr_POLE_2,lyr_JB_3,lyr_DPFO_4,],
                                fold: "open",
                                title: 'Innercity POP Perumnas'});

lyr_GoogleTerrain_0.setVisible(true);lyr_FO_1.setVisible(true);lyr_POLE_2.setVisible(true);lyr_JB_3.setVisible(true);lyr_DPFO_4.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,group_InnercityPOPPerumnas];
lyr_FO_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_POLE_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JB_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DPFO_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_FO_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_POLE_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_JB_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_DPFO_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_FO_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_POLE_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_JB_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DPFO_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DPFO_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});