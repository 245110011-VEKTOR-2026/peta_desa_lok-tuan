var wms_layers = [];

var format_DesaIndonesia_0 = new ol.format.GeoJSON();
var features_DesaIndonesia_0 = format_DesaIndonesia_0.readFeatures(json_DesaIndonesia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaIndonesia_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaIndonesia_0.addFeatures(features_DesaIndonesia_0);
var lyr_DesaIndonesia_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaIndonesia_0, 
                style: style_DesaIndonesia_0,
                popuplayertitle: 'Desa Indonesia',
                interactive: true,
                title: '<img src="styles/legend/DesaIndonesia_0.png" /> Desa Indonesia'
            });
var format_gedungdesaloktuan_1 = new ol.format.GeoJSON();
var features_gedungdesaloktuan_1 = format_gedungdesaloktuan_1.readFeatures(json_gedungdesaloktuan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gedungdesaloktuan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gedungdesaloktuan_1.addFeatures(features_gedungdesaloktuan_1);
var lyr_gedungdesaloktuan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gedungdesaloktuan_1, 
                style: style_gedungdesaloktuan_1,
                popuplayertitle: 'gedung desa lok tuan',
                interactive: true,
                title: '<img src="styles/legend/gedungdesaloktuan_1.png" /> gedung desa lok tuan'
            });
var format_jalandesaloktuan_2 = new ol.format.GeoJSON();
var features_jalandesaloktuan_2 = format_jalandesaloktuan_2.readFeatures(json_jalandesaloktuan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalandesaloktuan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalandesaloktuan_2.addFeatures(features_jalandesaloktuan_2);
var lyr_jalandesaloktuan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalandesaloktuan_2, 
                style: style_jalandesaloktuan_2,
                popuplayertitle: 'jalan desa lok tuan',
                interactive: true,
                title: '<img src="styles/legend/jalandesaloktuan_2.png" /> jalan desa lok tuan'
            });
var format_balaidesaloktuan_3 = new ol.format.GeoJSON();
var features_balaidesaloktuan_3 = format_balaidesaloktuan_3.readFeatures(json_balaidesaloktuan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_balaidesaloktuan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_balaidesaloktuan_3.addFeatures(features_balaidesaloktuan_3);
var lyr_balaidesaloktuan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_balaidesaloktuan_3, 
                style: style_balaidesaloktuan_3,
                popuplayertitle: 'balai desa lok tuan',
                interactive: true,
                title: '<img src="styles/legend/balaidesaloktuan_3.png" /> balai desa lok tuan'
            });

lyr_DesaIndonesia_0.setVisible(true);lyr_gedungdesaloktuan_1.setVisible(true);lyr_jalandesaloktuan_2.setVisible(true);lyr_balaidesaloktuan_3.setVisible(true);
var layersList = [lyr_DesaIndonesia_0,lyr_gedungdesaloktuan_1,lyr_jalandesaloktuan_2,lyr_balaidesaloktuan_3];
lyr_DesaIndonesia_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KD_PROV': 'KD_PROV', 'KD_KABKOTA': 'KD_KABKOTA', 'KD_KEC': 'KD_KEC', 'KD_DESA': 'KD_DESA', 'NM_PROV': 'NM_PROV', 'NM_KABKOTA': 'NM_KABKOTA', 'NM_KEC': 'NM_KEC', 'NM_DESA': 'NM_DESA', 'LUAS_DESA': 'LUAS_DESA', });
lyr_gedungdesaloktuan_1.set('fieldAliases', {'id': 'id', 'nmagdung': 'nmagdung', 'jnsgdung': 'jnsgdung', 'luasgdng': 'luasgdng', 'foto': 'foto', });
lyr_jalandesaloktuan_2.set('fieldAliases', {'id': 'id', 'nmajln': 'nmajln', 'pnjngjln': 'pnjngjln', 'jenisjln': 'jenisjln', });
lyr_balaidesaloktuan_3.set('fieldAliases', {'id': 'id', 'namapoin': 'namapoin', 'jenispoin': 'jenispoin', });
lyr_DesaIndonesia_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'KD_PROV': 'TextEdit', 'KD_KABKOTA': 'TextEdit', 'KD_KEC': 'TextEdit', 'KD_DESA': 'TextEdit', 'NM_PROV': 'TextEdit', 'NM_KABKOTA': 'TextEdit', 'NM_KEC': 'TextEdit', 'NM_DESA': 'TextEdit', 'LUAS_DESA': 'TextEdit', });
lyr_gedungdesaloktuan_1.set('fieldImages', {'id': 'TextEdit', 'nmagdung': 'TextEdit', 'jnsgdung': 'TextEdit', 'luasgdng': 'TextEdit', 'foto': 'ExternalResource', });
lyr_jalandesaloktuan_2.set('fieldImages', {'id': 'TextEdit', 'nmajln': 'TextEdit', 'pnjngjln': 'TextEdit', 'jenisjln': 'TextEdit', });
lyr_balaidesaloktuan_3.set('fieldImages', {'id': '', 'namapoin': '', 'jenispoin': '', });
lyr_DesaIndonesia_0.set('fieldLabels', {'OBJECTID': 'no label', 'KD_PROV': 'no label', 'KD_KABKOTA': 'no label', 'KD_KEC': 'no label', 'KD_DESA': 'no label', 'NM_PROV': 'no label', 'NM_KABKOTA': 'no label', 'NM_KEC': 'no label', 'NM_DESA': 'no label', 'LUAS_DESA': 'no label', });
lyr_gedungdesaloktuan_1.set('fieldLabels', {'id': 'no label', 'nmagdung': 'no label', 'jnsgdung': 'no label', 'luasgdng': 'no label', 'foto': 'no label', });
lyr_jalandesaloktuan_2.set('fieldLabels', {'id': 'no label', 'nmajln': 'no label', 'pnjngjln': 'no label', 'jenisjln': 'no label', });
lyr_balaidesaloktuan_3.set('fieldLabels', {'id': 'no label', 'namapoin': 'no label', 'jenispoin': 'no label', });
lyr_balaidesaloktuan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});