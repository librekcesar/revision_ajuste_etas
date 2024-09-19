var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_poligonos_zonas_frecuenciadas_v70_muestra_1 = new ol.format.GeoJSON();
var features_poligonos_zonas_frecuenciadas_v70_muestra_1 = format_poligonos_zonas_frecuenciadas_v70_muestra_1.readFeatures(json_poligonos_zonas_frecuenciadas_v70_muestra_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligonos_zonas_frecuenciadas_v70_muestra_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligonos_zonas_frecuenciadas_v70_muestra_1.addFeatures(features_poligonos_zonas_frecuenciadas_v70_muestra_1);
var lyr_poligonos_zonas_frecuenciadas_v70_muestra_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poligonos_zonas_frecuenciadas_v70_muestra_1, 
                style: style_poligonos_zonas_frecuenciadas_v70_muestra_1,
                interactive: true,
    title: 'poligonos_zonas_frecuenciadas_v70_muestra<br />\
    <img src="styles/legend/poligonos_zonas_frecuenciadas_v70_muestra_1_0.png" /> 1 - 2<br />\
    <img src="styles/legend/poligonos_zonas_frecuenciadas_v70_muestra_1_1.png" /> 2 - 3<br />\
    <img src="styles/legend/poligonos_zonas_frecuenciadas_v70_muestra_1_2.png" /> 3 - 4<br />\
    <img src="styles/legend/poligonos_zonas_frecuenciadas_v70_muestra_1_3.png" /> 4 - 7<br />\
    <img src="styles/legend/poligonos_zonas_frecuenciadas_v70_muestra_1_4.png" /> 7 - 12<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_poligonos_zonas_frecuenciadas_v70_muestra_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_poligonos_zonas_frecuenciadas_v70_muestra_1];
lyr_poligonos_zonas_frecuenciadas_v70_muestra_1.set('fieldAliases', {'locality': 'locality', 'zonificacion': 'zonificacion', 'station_code': 'station_code', 'LT_teorico': 'LT_teorico', 'LT_actual': 'LT_actual', });
lyr_poligonos_zonas_frecuenciadas_v70_muestra_1.set('fieldImages', {'locality': 'TextEdit', 'zonificacion': 'TextEdit', 'station_code': 'TextEdit', 'LT_teorico': 'Range', 'LT_actual': 'Range', });
lyr_poligonos_zonas_frecuenciadas_v70_muestra_1.set('fieldLabels', {'locality': 'header label', 'zonificacion': 'header label', 'station_code': 'header label', 'LT_teorico': 'header label', 'LT_actual': 'header label', });
lyr_poligonos_zonas_frecuenciadas_v70_muestra_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});