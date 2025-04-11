var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Entidades_MX_1 = new ol.format.GeoJSON();
var features_Entidades_MX_1 = format_Entidades_MX_1.readFeatures(json_Entidades_MX_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entidades_MX_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entidades_MX_1.addFeatures(features_Entidades_MX_1);
var lyr_Entidades_MX_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Entidades_MX_1, 
                style: style_Entidades_MX_1,
                popuplayertitle: 'Entidades_MX',
                interactive: false,
                title: '<img src="styles/legend/Entidades_MX_1.png" /> Entidades_MX'
            });
var format_Campos_volcanicos_MX_2 = new ol.format.GeoJSON();
var features_Campos_volcanicos_MX_2 = format_Campos_volcanicos_MX_2.readFeatures(json_Campos_volcanicos_MX_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campos_volcanicos_MX_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campos_volcanicos_MX_2.addFeatures(features_Campos_volcanicos_MX_2);
var lyr_Campos_volcanicos_MX_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Campos_volcanicos_MX_2, 
                style: style_Campos_volcanicos_MX_2,
                popuplayertitle: 'Campos_volcanicos_MX',
                interactive: true,
                title: '<img src="styles/legend/Campos_volcanicos_MX_2.png" /> Campos_volcanicos_MX'
            });
var format_Huracanes_2000_2024_MX_3 = new ol.format.GeoJSON();
var features_Huracanes_2000_2024_MX_3 = format_Huracanes_2000_2024_MX_3.readFeatures(json_Huracanes_2000_2024_MX_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huracanes_2000_2024_MX_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huracanes_2000_2024_MX_3.addFeatures(features_Huracanes_2000_2024_MX_3);
var lyr_Huracanes_2000_2024_MX_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huracanes_2000_2024_MX_3, 
                style: style_Huracanes_2000_2024_MX_3,
                popuplayertitle: 'Huracanes_2000_2024_MX',
                interactive: true,
    title: 'Huracanes_2000_2024_MX<br />\
    <img src="styles/legend/Huracanes_2000_2024_MX_3_0.png" /> Categoria 1<br />\
    <img src="styles/legend/Huracanes_2000_2024_MX_3_1.png" /> Categoria 2<br />\
    <img src="styles/legend/Huracanes_2000_2024_MX_3_2.png" /> Categoria 3<br />\
    <img src="styles/legend/Huracanes_2000_2024_MX_3_3.png" /> Categoria 4<br />\
    <img src="styles/legend/Huracanes_2000_2024_MX_3_4.png" /> Categoria 5<br />\
    <img src="styles/legend/Huracanes_2000_2024_MX_3_5.png" /> Depresion tropical<br />\
    <img src="styles/legend/Huracanes_2000_2024_MX_3_6.png" /> Tormenta tropical<br />\
    <img src="styles/legend/Huracanes_2000_2024_MX_3_7.png" /> <br />' });
var format_Volcanes_activos_MX_4 = new ol.format.GeoJSON();
var features_Volcanes_activos_MX_4 = format_Volcanes_activos_MX_4.readFeatures(json_Volcanes_activos_MX_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Volcanes_activos_MX_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Volcanes_activos_MX_4.addFeatures(features_Volcanes_activos_MX_4);
var lyr_Volcanes_activos_MX_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Volcanes_activos_MX_4, 
                style: style_Volcanes_activos_MX_4,
                popuplayertitle: 'Volcanes_activos_MX',
                interactive: true,
                title: '<img src="styles/legend/Volcanes_activos_MX_4.png" /> Volcanes_activos_MX'
            });
var format_Sismos_MX_5 = new ol.format.GeoJSON();
var features_Sismos_MX_5 = format_Sismos_MX_5.readFeatures(json_Sismos_MX_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sismos_MX_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sismos_MX_5.addFeatures(features_Sismos_MX_5);
var lyr_Sismos_MX_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sismos_MX_5, 
                style: style_Sismos_MX_5,
                popuplayertitle: 'Sismos_MX',
                interactive: true,
    title: 'Sismos_MX<br />\
    <img src="styles/legend/Sismos_MX_5_0.png" /> 6 - 6.49<br />\
    <img src="styles/legend/Sismos_MX_5_1.png" /> 6.49 - 6.99<br />\
    <img src="styles/legend/Sismos_MX_5_2.png" /> 6.99 - 7.49<br />\
    <img src="styles/legend/Sismos_MX_5_3.png" /> 7.49 - 7.99<br />\
    <img src="styles/legend/Sismos_MX_5_4.png" /> 7.99 - 8.2<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Entidades_MX_1.setVisible(true);lyr_Campos_volcanicos_MX_2.setVisible(true);lyr_Huracanes_2000_2024_MX_3.setVisible(true);lyr_Volcanes_activos_MX_4.setVisible(true);lyr_Sismos_MX_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Entidades_MX_1,lyr_Campos_volcanicos_MX_2,lyr_Huracanes_2000_2024_MX_3,lyr_Volcanes_activos_MX_4,lyr_Sismos_MX_5];
lyr_Entidades_MX_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Campos_volcanicos_MX_2.set('fieldAliases', {'NameCampo': 'NameCampo', 'SUM_Shape_': 'SUM_Shape_', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Huracanes_2000_2024_MX_3.set('fieldAliases', {'SEASON': 'SEASON', 'NAME': 'NAME', 'NATURE': 'NATURE', 'STORM_DR': 'STORM_DR', 'Categoria': 'Categoria', 'Vwind_kmh': 'Vwind_kmh', 'Rd_wind_km': 'Rd_wind_km', 'DiamEye_km': 'DiamEye_km', 'VDespl_kmh': 'VDespl_kmh', 'Direccion': 'Direccion', });
lyr_Volcanes_activos_MX_4.set('fieldAliases', {'CLAVE': 'CLAVE', 'CATEGO': 'CATEGO', 'NOMB': 'NOMB', 'LAT': 'LAT', 'LONG_': 'LONG_', 'ELEV': 'ELEV', 'TIPO': 'TIPO', 'ACTIV': 'ACTIV', 'EDO_LOC': 'EDO_LOC', 'TIP_ERUP': 'TIP_ERUP', 'PRODUCT': 'PRODUCT', 'COMP': 'COMP', 'PAPERS': 'PAPERS', });
lyr_Sismos_MX_5.set('fieldAliases', {'ID': 'ID', 'Fecha': 'Fecha', 'Hora': 'Hora', 'Magnitud': 'Magnitud', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Profundida': 'Profundida', 'Referencia': 'Referencia', 'Fecha_UTC': 'Fecha_UTC', 'Hora_UTC': 'Hora_UTC', 'COUNT': 'COUNT', });
lyr_Entidades_MX_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Campos_volcanicos_MX_2.set('fieldImages', {'NameCampo': 'TextEdit', 'SUM_Shape_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Huracanes_2000_2024_MX_3.set('fieldImages', {'SEASON': 'Range', 'NAME': 'TextEdit', 'NATURE': 'TextEdit', 'STORM_DR': 'TextEdit', 'Categoria': 'TextEdit', 'Vwind_kmh': 'TextEdit', 'Rd_wind_km': 'TextEdit', 'DiamEye_km': 'TextEdit', 'VDespl_kmh': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_Volcanes_activos_MX_4.set('fieldImages', {'CLAVE': 'TextEdit', 'CATEGO': 'TextEdit', 'NOMB': 'TextEdit', 'LAT': 'TextEdit', 'LONG_': 'TextEdit', 'ELEV': 'TextEdit', 'TIPO': 'TextEdit', 'ACTIV': 'TextEdit', 'EDO_LOC': 'TextEdit', 'TIP_ERUP': 'TextEdit', 'PRODUCT': 'TextEdit', 'COMP': 'TextEdit', 'PAPERS': 'TextEdit', });
lyr_Sismos_MX_5.set('fieldImages', {'ID': 'TextEdit', 'Fecha': 'DateTime', 'Hora': 'DateTime', 'Magnitud': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Profundida': 'TextEdit', 'Referencia': 'TextEdit', 'Fecha_UTC': 'DateTime', 'Hora_UTC': 'DateTime', 'COUNT': 'Range', });
lyr_Entidades_MX_1.set('fieldLabels', {'CVEGEO': 'hidden field', 'CVE_ENT': 'hidden field', 'NOMGEO': 'no label', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Campos_volcanicos_MX_2.set('fieldLabels', {'NameCampo': 'inline label - always visible', 'SUM_Shape_': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Huracanes_2000_2024_MX_3.set('fieldLabels', {'SEASON': 'inline label - always visible', 'NAME': 'inline label - always visible', 'NATURE': 'hidden field', 'STORM_DR': 'hidden field', 'Categoria': 'inline label - always visible', 'Vwind_kmh': 'inline label - always visible', 'Rd_wind_km': 'inline label - always visible', 'DiamEye_km': 'inline label - always visible', 'VDespl_kmh': 'inline label - always visible', 'Direccion': 'inline label - always visible', });
lyr_Volcanes_activos_MX_4.set('fieldLabels', {'CLAVE': 'hidden field', 'CATEGO': 'hidden field', 'NOMB': 'inline label - always visible', 'LAT': 'hidden field', 'LONG_': 'hidden field', 'ELEV': 'hidden field', 'TIPO': 'inline label - always visible', 'ACTIV': 'hidden field', 'EDO_LOC': 'hidden field', 'TIP_ERUP': 'hidden field', 'PRODUCT': 'hidden field', 'COMP': 'hidden field', 'PAPERS': 'hidden field', });
lyr_Sismos_MX_5.set('fieldLabels', {'ID': 'hidden field', 'Fecha': 'inline label - always visible', 'Hora': 'hidden field', 'Magnitud': 'inline label - always visible', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Profundida': 'inline label - always visible', 'Referencia': 'hidden field', 'Fecha_UTC': 'hidden field', 'Hora_UTC': 'hidden field', 'COUNT': 'hidden field', });
lyr_Sismos_MX_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});