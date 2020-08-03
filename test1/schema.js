export const PastNumberSchema = {
    name: 'PastNumber',
    properties:{
        pastAccNumberSave: 'int',
        pastMagNumberSave: 'int',
        pastGyroNumberSave: 'int',
        pastBeaconSave: 'int',
        pastWifiSave: 'int',
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
    }
}
export const AccSchema = {
    name: 'AccSensor',
    properties:{
        accDate: 'string',
        accInterval: 'string',
        accXyz: {type:'list', objectType: 'Xyz'},
        degree: 'double',
    }
}
export const MagSchema = {
    name: 'MagSensor',
    properties:{
        magDate: 'string',
        magInterval: 'string',
        magXyz:{type:'list', objectType: 'Xyz'},
        degree: 'double',
    }
}
export const GyroSchema = {
    name: 'GyroSensor',
    properties:{
        gyroDate: 'string',
        gyroInterval: 'string',
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
        beaconInterval: 'string',
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
        wifiInterval: 'string',
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