var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 0.300000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_wards_1 = new ol.format.GeoJSON();
var features_wards_1 = format_wards_1.readFeatures(json_wards_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wards_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wards_1.addFeatures(features_wards_1);
var lyr_wards_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wards_1, 
                style: style_wards_1,
                popuplayertitle: 'wards',
                interactive: true,
                title: '<img src="styles/legend/wards_1.png" /> wards'
            });
var format_solid_waste_receptacles_2 = new ol.format.GeoJSON();
var features_solid_waste_receptacles_2 = format_solid_waste_receptacles_2.readFeatures(json_solid_waste_receptacles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_solid_waste_receptacles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_solid_waste_receptacles_2.addFeatures(features_solid_waste_receptacles_2);
var lyr_solid_waste_receptacles_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_solid_waste_receptacles_2, 
                style: style_solid_waste_receptacles_2,
                popuplayertitle: 'solid_waste_receptacles',
                interactive: true,
    title: 'solid_waste_receptacles<br />\
    <img src="styles/legend/solid_waste_receptacles_2_0.png" /> Chamber<br />\
    <img src="styles/legend/solid_waste_receptacles_2_1.png" /> Dumpsite<br />\
    <img src="styles/legend/solid_waste_receptacles_2_2.png" /> Skip Bin<br />' });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_wards_1.setVisible(true);lyr_solid_waste_receptacles_2.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_wards_1,lyr_solid_waste_receptacles_2];
lyr_wards_1.set('fieldAliases', {'IEBCWd_No': 'IEBCWd_No', 'FIRST_IEBC': 'FIRST_IEBC', 'MIN_IEBCCo': 'MIN_IEBCCo', 'FIRST_IE_1': 'FIRST_IE_1', 'MIN_IEBCCt': 'MIN_IEBCCt', 'FIRST_COUN': 'FIRST_COUN', 'FIRST_PROV': 'FIRST_PROV', 'SUM_Male': 'SUM_Male', 'SUM_Female': 'SUM_Female', 'SUM_Total': 'SUM_Total', 'SUM_Househ': 'SUM_Househ', 'SUM_AREA_S': 'SUM_AREA_S', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', });
lyr_solid_waste_receptacles_2.set('fieldAliases', {'fid': 'fid', 'Rec_No.': 'Rec_No.', 'name': 'name', 'Receptacle': 'Receptacle', 'descriptio': 'descriptio', 'subcounty': 'subcounty', 'FIRST_IEBC': 'FIRST_IEBC', 'Count': 'Count', });
lyr_wards_1.set('fieldImages', {'IEBCWd_No': 'Range', 'FIRST_IEBC': 'TextEdit', 'MIN_IEBCCo': 'Range', 'FIRST_IE_1': 'TextEdit', 'MIN_IEBCCt': 'Range', 'FIRST_COUN': 'TextEdit', 'FIRST_PROV': 'TextEdit', 'SUM_Male': 'TextEdit', 'SUM_Female': 'TextEdit', 'SUM_Total': 'TextEdit', 'SUM_Househ': 'TextEdit', 'SUM_AREA_S': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', });
lyr_solid_waste_receptacles_2.set('fieldImages', {'fid': 'TextEdit', 'Rec_No.': 'TextEdit', 'name': 'TextEdit', 'Receptacle': 'TextEdit', 'descriptio': 'TextEdit', 'subcounty': 'TextEdit', 'FIRST_IEBC': 'TextEdit', 'Count': 'TextEdit', });
lyr_wards_1.set('fieldLabels', {'IEBCWd_No': 'no label', 'FIRST_IEBC': 'no label', 'MIN_IEBCCo': 'no label', 'FIRST_IE_1': 'no label', 'MIN_IEBCCt': 'no label', 'FIRST_COUN': 'no label', 'FIRST_PROV': 'no label', 'SUM_Male': 'no label', 'SUM_Female': 'no label', 'SUM_Total': 'no label', 'SUM_Househ': 'no label', 'SUM_AREA_S': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', });
lyr_solid_waste_receptacles_2.set('fieldLabels', {'fid': 'no label', 'Rec_No.': 'no label', 'name': 'no label', 'Receptacle': 'no label', 'descriptio': 'no label', 'subcounty': 'no label', 'FIRST_IEBC': 'no label', 'Count': 'no label', });
lyr_solid_waste_receptacles_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});