import {
    PermissionsAndroid,
    Platform,
} from 'react-native';
import moment from 'moment';


export default function askPermissions () {
    // 안드로이드 권한 관련 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (Platform.OS === 'android') {                                                                                                    ///
        const granted = PermissionsAndroid.requestMultiple(                                                                             ///
          [PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,                                                                       ///
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,                                                                          ///
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,                                                                                  ///
          PermissionsAndroid.PERMISSIONS.CAMERA]                                                                                        ///
        ).then((result) => {                                                                                                            ///
          if (result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'                                                         ///
          && result['android.permission.ACCESS_FINE_LOCATION'] === 'granted'                                                            ///
          && result['android.permission.RECORD_AUDIO'] === 'granted'                                                                    ///
          && result['android.permission.CAMERA'] === 'granted')                                                                         ///
          {                                                                                                                             ///
            let permissionAllowed = new Date().getTime();                                                                               ///
            alert(moment(permissionAllowed).format('YYYY년 MM월 DD일 HH시 mm분 \n\n 모든 권한이 허락되었습니다. 앱 사용이 가능합니다.'));    ///
          }                                                                                                                             ///
          else                                                                                                                          ///
          {                                                                                                                             ///
            // 사용자가 거절한 항목들 배열로 저장 후 출력                                                                                  ///
            let permissionDenied = [];                                                                                                  ///
            if(result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'){                                                      ///
              console.log("PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE : true");                                              ///
            }                                                                                                                           ///
            else{                                                                                                                       ///
              permissionDenied.push('저장소');                                                                                           ///
              console.log("PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE : false");                                             ///
            }                                                                                                                           ///
            if(result['android.permission.ACCESS_FINE_LOCATION'] === 'granted'){                                                        ///
              console.log("PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION : true");                                                ///
            }                                                                                                                           ///
            else{                                                                                                                       ///
              permissionDenied.push('위치');                                                                                            ///
              console.log("PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION : false");                                               ///
            }                                                                                                                           ///
            if(result['android.permission.RECORD_AUDIO'] === 'granted'){                                                                ///
              console.log("PermissionsAndroid.PERMISSIONS.RECORD_AUDIO : true");                                                        ///
            }                                                                                                                           ///
            else{                                                                                                                       ///
              permissionDenied.push('마이크');                                                                                           ///
              console.log("PermissionsAndroid.PERMISSIONS.RECORD_AUDIO : false");                                                       ///
            }                                                                                                                           ///
            if(result['android.permission.CAMERA'] === 'granted'){                                                                      ///
              console.log("PermissionsAndroid.PERMISSIONS.CAMERA : true");                                                              ///
            }                                                                                                                           ///
            else{                                                                                                                       ///
              permissionDenied.push('카메라');                                                                                           ///
              console.log("PermissionsAndroid.PERMISSIONS.CAMERA : false");                                                             ///
            }                                                                                                                           ///
            alert(String(permissionDenied) + ' 권한\n이 불허되었습니다. \n\n어플이 정상 작동하지 않을 수 있습니다. \n\n정상 작동을 위해서 권한을 부여해주시기 바랍니다. \n\n앱 -> 앱 정보 -> 권한 -> 권한 부여\n\n');
          }                                                                                                                             ///
        });                                                                                                                             ///
      }                                                                                                                                 ///
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}