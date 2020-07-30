export const PastNumberSchema = {
    name: 'PastNumber',
    properties:{
        pastAccNumberSave: 'int',
        pastMagNumberSave: 'int',
        pastGyroNumberSave: 'int',
        pastBeaconSave: 'int',
        pastWifiSave: 'int',
        pastBleSave: 'int',

    }
}
export const SaveSchema = {
    name: 'Save',
    properties:{
        recordStart:'string',
        recordEnd:'string',
        recordName:'string',
        collectedData:{type:'list', objectType:'collectedData'},
    }
}
export const CollectedDataDataSchema = {
    name: 'collectedData',
    properties:{
        accData: {type: 'list', objectType: 'AccSensor'},
        magData: {type: 'list', objectType: 'MagSensor'},
        gyroData: {type: 'list', objectType: 'GyroSensor'},
        beaconData: {type: 'list', objectType: 'Beacon'},
        wifiData: {type: 'list', objectType: 'Wifi'},
        bleData: {type: 'list', objectType: 'Ble'},
    }
}
export const AccSchema = {
    name: 'AccSensor',
    properties:{
        accDate: 'string',
        accXyz: {type:'list', objectType: 'Xyz'},
        degree: 'double',
    }
}
export const MagSchema = {
    name: 'MagSensor',
    properties:{
        magDate: 'string',
        magXyz:{type:'list', objectType: 'Xyz'},
        degree: 'double',
    }
}
export const GyroSchema = {
    name: 'GyroSensor',
    properties:{
        gyroDate: 'string',
        gyroXyz:{type:'list', objectType: 'Xyz'},
        degree: 'double',
    }
}
export const XyzSchema ={
    name: 'Xyz',
    properties:{
        x: 'double',
        y: 'double',
        z: 'double',  
    }
}
export const BeaconSchema = {
    name: 'Beacon',
    properties:{
        beaconDate: 'string',
        beaconData: {type:'list', objectType:'BeaconData'}
    }
}
export const BeaconDataSchema = {
    name: 'BeaconData',
    properties:{
        distance: 'double', 
        major: 'int', 
        minor: 'int', 
        proximity: 'string', 
        rssi: 'int', 
        uuid: 'string',
    }
}
export const WifiSchema = {
    name: 'Wifi',
    properties:{
        wifiDate: 'string',
        wifiData: {type: 'list', objectType: 'WifiData'},
    }
}
export const WifiDataSchema = {
    name: 'WifiData',
    properties:{
        BSSID: 'string',
        SSID: 'string',
        capabilities: 'string',
        frequency: 'int',
        level: 'int',
    }
}
export const BleSchema = {
    name: 'Ble',
    properties:{
        bleDate: 'string',
        bleData: {type:'list', objectType: 'BleData'},
    }
}
export const BleDataSchema = {
    name: 'BleData',
    properties:{
        advertising: {type:'list', objectType: 'BleAdvertising'},
        id: 'string',
        name: 'string',
        rssi: 'int',
    }
}
export const BleAdvertisingSchema = {
    name: 'BleAdvertising',
    properties:{
        isConnectable: 'bool',
        manufacturerData: {type:'list', objectType: 'BleManufacturerdata'},
        serviceData: 'string',
        serviceUUIDs: 'string',
        txPowerLevel: 'int',
    }
}
export const BleManufacturerdataSchema = {
    name: 'BleManufacturerdata',
    properties:{
        CDVType: 'string',
        bytes: 'string',
        data: 'string',
    }
}
        
/*
{
    "advertising":{
        "txPowerLevel":-2147483648,
        "serviceData":{
            "ffe1":{
                "bytes":[161,8,100,33,129,82,63,35,172,80,76,85,83],
                "data":"oQhkIYFSPyOsUExVUw==",
                "CDVType":"ArrayBuffer"
            }
        },
        "serviceUUIDs":["ffe1"],
        "isConnectable":true,
        "manufacturerData":{
            "bytes":[2,1,6,3,3,225,255,16,22,225,255,161,8,100,33,129,82,63,35,172,80,76,85,83,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            "data":"AgEGAwPh/xAW4f+hCGQhgVI/I6xQTFVTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
            "CDVType":"ArrayBuffer"
        }
    },
    "rssi":-49,
    "id":"AC:23:3F:52:81:21",
    "name":null
}
*/