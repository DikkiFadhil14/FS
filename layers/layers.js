var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_JB_1 = new ol.format.GeoJSON();
var features_JB_1 = format_JB_1.readFeatures(json_JB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JB_1.addFeatures(features_JB_1);
var lyr_JB_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JB_1, 
                style: style_JB_1,
                popuplayertitle: 'JB',
                interactive: true,
    title: 'JB<br />\
    <img src="styles/legend/JB_1_0.png" /> JB 24<br />'
        });
var format_FO_2 = new ol.format.GeoJSON();
var features_FO_2 = format_FO_2.readFeatures(json_FO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FO_2.addFeatures(features_FO_2);
var lyr_FO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FO_2, 
                style: style_FO_2,
                popuplayertitle: 'FO',
                interactive: true,
    title: 'FO<br />\
    <img src="styles/legend/FO_2_0.png" /> FO 12C<br />\
    <img src="styles/legend/FO_2_1.png" /> FO 24C<br />'
        });
var format_DPFO_3 = new ol.format.GeoJSON();
var features_DPFO_3 = format_DPFO_3.readFeatures(json_DPFO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPFO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPFO_3.addFeatures(features_DPFO_3);
var lyr_DPFO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DPFO_3, 
                style: style_DPFO_3,
                popuplayertitle: 'DPFO',
                interactive: true,
    title: 'DPFO<br />\
    <img src="styles/legend/DPFO_3_0.png" /> MS<br />\
    <img src="styles/legend/DPFO_3_1.png" /> S<br />'
        });
var format_SLACK_4 = new ol.format.GeoJSON();
var features_SLACK_4 = format_SLACK_4.readFeatures(json_SLACK_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLACK_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLACK_4.addFeatures(features_SLACK_4);
var lyr_SLACK_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLACK_4, 
                style: style_SLACK_4,
                popuplayertitle: 'SLACK',
                interactive: true,
    title: 'SLACK<br />\
    <img src="styles/legend/SLACK_4_0.png" /> SLACK<br />'
        });
var format_JB_5 = new ol.format.GeoJSON();
var features_JB_5 = format_JB_5.readFeatures(json_JB_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JB_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JB_5.addFeatures(features_JB_5);
var lyr_JB_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JB_5, 
                style: style_JB_5,
                popuplayertitle: 'JB',
                interactive: true,
    title: 'JB<br />\
    <img src="styles/legend/JB_5_0.png" /> JB 96<br />'
        });
var format_FO_6 = new ol.format.GeoJSON();
var features_FO_6 = format_FO_6.readFeatures(json_FO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FO_6.addFeatures(features_FO_6);
var lyr_FO_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FO_6, 
                style: style_FO_6,
                popuplayertitle: 'FO',
                interactive: true,
    title: 'FO<br />\
    <img src="styles/legend/FO_6_0.png" /> FO 96C<br />'
        });
var format_FO_7 = new ol.format.GeoJSON();
var features_FO_7 = format_FO_7.readFeatures(json_FO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FO_7.addFeatures(features_FO_7);
var lyr_FO_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FO_7, 
                style: style_FO_7,
                popuplayertitle: 'FO',
                interactive: true,
    title: 'FO<br />\
    <img src="styles/legend/FO_7_0.png" /> FO 48C<br />\
    <img src="styles/legend/FO_7_1.png" /> FO 96C<br />'
        });
var format_POLE_8 = new ol.format.GeoJSON();
var features_POLE_8 = format_POLE_8.readFeatures(json_POLE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_8.addFeatures(features_POLE_8);
var lyr_POLE_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLE_8, 
                style: style_POLE_8,
                popuplayertitle: 'POLE',
                interactive: true,
                title: '<img src="styles/legend/POLE_8.png" /> POLE'
            });
var format_JB_9 = new ol.format.GeoJSON();
var features_JB_9 = format_JB_9.readFeatures(json_JB_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JB_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JB_9.addFeatures(features_JB_9);
var lyr_JB_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JB_9, 
                style: style_JB_9,
                popuplayertitle: 'JB',
                interactive: true,
    title: 'JB<br />\
    <img src="styles/legend/JB_9_0.png" /> JB 48<br />\
    <img src="styles/legend/JB_9_1.png" /> JB 96<br />'
        });
var format_DPFO_10 = new ol.format.GeoJSON();
var features_DPFO_10 = format_DPFO_10.readFeatures(json_DPFO_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPFO_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPFO_10.addFeatures(features_DPFO_10);
var lyr_DPFO_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DPFO_10, 
                style: style_DPFO_10,
                popuplayertitle: 'DPFO',
                interactive: true,
    title: 'DPFO<br />\
    <img src="styles/legend/DPFO_10_0.png" /> MS<br />\
    <img src="styles/legend/DPFO_10_1.png" /> S<br />'
        });
var format_POPCBN01_11 = new ol.format.GeoJSON();
var features_POPCBN01_11 = format_POPCBN01_11.readFeatures(json_POPCBN01_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POPCBN01_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POPCBN01_11.addFeatures(features_POPCBN01_11);
var lyr_POPCBN01_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POPCBN01_11, 
                style: style_POPCBN01_11,
                popuplayertitle: 'POP CBN-01',
                interactive: true,
                title: '<img src="styles/legend/POPCBN01_11.png" /> POP CBN-01'
            });
var group_CBN01 = new ol.layer.Group({
                                layers: [lyr_POPCBN01_11,],
                                fold: "open",
                                title: 'CBN-01'});
var group_InnercityPOPPerumnas = new ol.layer.Group({
                                layers: [lyr_FO_7,lyr_POLE_8,lyr_JB_9,lyr_DPFO_10,],
                                fold: "open",
                                title: 'Innercity POP Perumnas'});
var group_BBEKecapiArea = new ol.layer.Group({
                                layers: [lyr_SLACK_4,lyr_JB_5,lyr_FO_6,],
                                fold: "open",
                                title: 'BBE Kecapi Area'});
var group_FBEKecapiRW19 = new ol.layer.Group({
                                layers: [lyr_GoogleTerrain_0,lyr_JB_1,lyr_FO_2,lyr_DPFO_3,],
                                fold: "open",
                                title: 'FBE Kecapi RW 19'});

lyr_GoogleTerrain_0.setVisible(true);lyr_JB_1.setVisible(true);lyr_FO_2.setVisible(true);lyr_DPFO_3.setVisible(true);lyr_SLACK_4.setVisible(true);lyr_JB_5.setVisible(true);lyr_FO_6.setVisible(true);lyr_FO_7.setVisible(true);lyr_POLE_8.setVisible(true);lyr_JB_9.setVisible(true);lyr_DPFO_10.setVisible(true);lyr_POPCBN01_11.setVisible(true);
var layersList = [group_FBEKecapiRW19,group_BBEKecapiArea,group_InnercityPOPPerumnas,group_CBN01];
lyr_JB_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'POP_ID': 'POP_ID', 'Nama_POP_': 'Nama_POP_', '_No_Tiang_': '_No_Tiang_', 'Pole_ID': 'Pole_ID', 'Alamat_dan': 'Alamat_dan', '_Tinggi_Ti': '_Tinggi_Ti', 'lat_': 'lat_', 'long_': 'long_', 'JB_ID': 'JB_ID', 'Jumlah_Por': 'Jumlah_Por', 'MS_ID': 'MS_ID', 'MS_Type': 'MS_Type', 'DPFO_ID': 'DPFO_ID', 'Splitter_I': 'Splitter_I', 'Splitter_T': 'Splitter_T', 'Remark': 'Remark', });
lyr_FO_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DPFO_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'POP_ID': 'POP_ID', 'Nama_POP_': 'Nama_POP_', '_No_Tiang_': '_No_Tiang_', 'Pole_ID': 'Pole_ID', 'Alamat_dan': 'Alamat_dan', '_Tinggi_Ti': '_Tinggi_Ti', 'latitude': 'latitude', 'longitude': 'longitude', 'JB_ID': 'JB_ID', 'Jumlah_Por': 'Jumlah_Por', 'MS_ID': 'MS_ID', 'MS_Type': 'MS_Type', 'DPFO_ID': 'DPFO_ID', 'Splitter_I': 'Splitter_I', 'Splitter_T': 'Splitter_T', 'Remark': 'Remark', });
lyr_SLACK_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JB_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_FO_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_FO_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_POLE_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JB_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DPFO_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_POPCBN01_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JB_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'POP_ID': 'TextEdit', 'Nama_POP_': 'TextEdit', '_No_Tiang_': 'TextEdit', 'Pole_ID': 'TextEdit', 'Alamat_dan': 'TextEdit', '_Tinggi_Ti': 'TextEdit', 'lat_': 'TextEdit', 'long_': 'TextEdit', 'JB_ID': 'TextEdit', 'Jumlah_Por': 'TextEdit', 'MS_ID': 'TextEdit', 'MS_Type': 'TextEdit', 'DPFO_ID': 'TextEdit', 'Splitter_I': 'TextEdit', 'Splitter_T': 'TextEdit', 'Remark': 'TextEdit', });
lyr_FO_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_DPFO_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'POP_ID': 'TextEdit', 'Nama_POP_': 'TextEdit', '_No_Tiang_': 'TextEdit', 'Pole_ID': 'TextEdit', 'Alamat_dan': 'TextEdit', '_Tinggi_Ti': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'JB_ID': 'TextEdit', 'Jumlah_Por': 'TextEdit', 'MS_ID': 'TextEdit', 'MS_Type': 'TextEdit', 'DPFO_ID': 'TextEdit', 'Splitter_I': 'TextEdit', 'Splitter_T': 'TextEdit', 'Remark': 'TextEdit', });
lyr_SLACK_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_JB_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_FO_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_FO_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_POLE_8.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_JB_9.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_DPFO_10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_POPCBN01_11.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_JB_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'POP_ID': 'no label', 'Nama_POP_': 'no label', '_No_Tiang_': 'no label', 'Pole_ID': 'no label', 'Alamat_dan': 'no label', '_Tinggi_Ti': 'no label', 'lat_': 'no label', 'long_': 'no label', 'JB_ID': 'no label', 'Jumlah_Por': 'no label', 'MS_ID': 'no label', 'MS_Type': 'no label', 'DPFO_ID': 'no label', 'Splitter_I': 'no label', 'Splitter_T': 'no label', 'Remark': 'no label', });
lyr_FO_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DPFO_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'POP_ID': 'no label', 'Nama_POP_': 'no label', '_No_Tiang_': 'no label', 'Pole_ID': 'no label', 'Alamat_dan': 'no label', '_Tinggi_Ti': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'JB_ID': 'no label', 'Jumlah_Por': 'no label', 'MS_ID': 'no label', 'MS_Type': 'no label', 'DPFO_ID': 'no label', 'Splitter_I': 'no label', 'Splitter_T': 'no label', 'Remark': 'no label', });
lyr_SLACK_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_JB_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_FO_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_FO_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_POLE_8.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_JB_9.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DPFO_10.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_POPCBN01_11.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_POPCBN01_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});