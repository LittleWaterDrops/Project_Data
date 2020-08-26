# ProjectData
    Data Collection Project Written by Hangyu Sang, LittleWaterDrops.

    Hello! This is my first Github action, and first project!

    This is the project of collect data from android.

    It collect data of acc, mag, gyro sensors / Beacons / Wifi / Ble (It is deleted).

    And it also record video!

    Code started from ended of collect sensor's data, export csv, splash screen because I started it during project!

    I'm starter of Github, so there have so many strange points, but please understand me.

    This code is consist of lots of other react-native modules. 

    So, you should install all of modules if you want to run it safely.

    Thank you for help me, Everyone!

    ps. This project has been started by 2020.07.06.

## module information
    "@react-native-community/async-storage": "1.11.0",
    "@react-native-community/cameraroll": "4.0.0",
    "@react-native-community/masked-view": "0.1.10",
    "@react-navigation/native": "5.7.2",
    "@react-navigation/stack": "5.8.0",
    "@talaikis/logkitty": "0.1.2",
    "lodash": "4.17.19",
    "moment": "2.27.0",
    "react": "16.11.0",
    "react-native": "0.62.2",
    "react-native-android-wifi": "0.0.41",
    "react-native-beacons-manager": "1.0.7",
    "react-native-ble-manager": "7.3.1",
    "react-native-ble-plx": "2.0.1",
    "react-native-camera": "3.31.0",
    "react-native-fetch-blob": "0.10.8",
    "react-native-fs": "2.16.6",
    "react-native-gesture-handler": "1.7.0",
    "react-native-reanimated": "1.10.1",
    "react-native-safe-area-context": "3.1.1",
    "react-native-screens": "2.9.0",
    "react-native-sensors": "6.0.2",
    "react-native-splash-screen": "3.2.0",
    "react-native-vector-icons": "7.0.0",
    "realm": "6.0.3"

### In here, we only use

    "react": "16.11.0",
    "react-native": "0.62.2",
    "react-native-sensors": "6.0.2",
    "react-native-camera": "3.31.0",
    "react-native-beacons-manager": "1.0.7",
    "react-native-android-wifi": "0.0.41",
    "@react-native-community/cameraroll": "4.0.0",
    "moment": "2.27.0",
    "realm": "6.0.3"
    "react-native-fetch-blob": "0.10.8",

    "@react-native-community/async-storage": "1.11.0",

    "react-native-gesture-handler": "1.7.0",
    "react-native-splash-screen": "3.2.0",
    "@react-navigation/native": "5.7.2",
    "@react-navigation/stack": "5.8.0",

### And others are just installed. Those are useless.

    "react-native-fetch-blob" is used to extract files.

    "@react-native-community/async-storage" is used to check application's first launch.

    "react-native-gesture-handler"is used to handle navigation.

### others will easy to understand why we use those modules.

# Application's detail by Korean.

## 1. 어플리케이션 디자인

가. App.js - 어플리케이션의 디자인 틀을 제작함.

1) SplashScreen을 시간차를 두고 끔. 부드럽게 어플리케이션을 넘기기 위함.

2) 첫 화면에선 3개의 버튼이 존재하며, Collect Data 버튼은 데이터 수집을 위한 영상 촬영 화면으로 넘어감. Extract page는 데이터의 정보, 데이터 추출로 넘어가며, 마지막으로 Temp는 아직 아무것도 넣지 않음.

    가) Collect Data는 영상 시작과 끝 기능이 있으며, 영상 종료를 눌렀을 시 반드시 영상이 녹화되었다는 알람을 기다렸다가 꺼야함.

    나) Extract page는 현재 영상의 이름을 포함한 정보를 나타내주는 버튼, 시간 순으로 정렬된 데이터를 추출해주는 버튼, txt파일로 추출해주는 버튼이 구현되어있음.

    다) Temp는 템플릿만 만들어 놓은 것으로, 추후에 더 추가할 것이 생긴다면 Temp 템플릿을 사용하여 적용하면 편리할 것임.

3) Realm.deleteFile을 주석 해지하고 어플리케이션을 실행하면, 이전에 있던 모든 데이터베이스가 삭제됨.

4) 아이콘 및 Launchscreen은 android/app/src/main/res 안의 여러 폴더 안에 존재함.


## 2. 데이터 수집

가. Collect.js

1) Movie Data

    가) 영상 녹화의 데이터는 영상 시작, 영상 끝 시간들과 영상 이름이 있음.    
    -> 관련 코드는 Collect.js의 DataInfo가 있음.

    나) 영상은 현재 Movies 폴더의 ProjectData 폴더를 생성하여 그 안에 저장됨.
    -> 관련 코드는 Collect.js의 takeVideo, renderCamera가 있음.
 

2) Data Collect

    가) acc, mag, gyro는 데이터를 받아온 시각, 영상 시작부터 지난 인터벌, 센서의 x, y, z값, 회전각 등을 저장함. 가속도와 자이로를 통해 각을 측정함.    
    -> 관련된 코드는 Collect.js의 calculateAngle이 있음.

    나) 가속도 데이터부터 비콘 데이터까지는 0.25초 간격으로 수시로 데이터를 받지만, 와이파이 데이터는 0.48초에 한 번씩 측정함. 
    -> 관련된 코드는 Collect.js의 checkData가 있음.

    다) 비콘 및 와이파이도 acc, mag, gyro랑 대부분 비슷한 값을 받으며, x, y, z 값 대신 그에 맞는 값을 저장함.

    라) 블루투스의 경우 효율성이 떨어져 최근에는 수집하지 않고 있음. 다만, 블루투스가 들어간 코드를 알고 싶다면, Temp.js와 schemaTemp.js 참고.


## 3. 데이터베이스 저장

가. Realm을 통해 저장 - 모든 데이터는 수집 후 DataBase에 저장되며, 이 때 DataBase는 Realm을 사용하고 있음. Realm을 사용하는 이유는 ReactNative와의 연동성이 좋기 때문이므로, 자신이 원할 시 다른 DataBase로 변경해도 무방함.

1) DataBase에는 한 영상 당 측정한 데이터들이 들어가며, 이는 schema.js를 참고해야 함.

2) 1)을 collectedDataSchema로 한 번에 묶고, 영상의 정보와 함께 SaveSchema로 묶어서 저장.

3) 이들은 각자의 Database에 꾸준히 저장되면서 쌓이는 형태임. 그러므로, 이 전까지의 데이터 길이를 구해서 그만큼은 버린 뒤 현재 영상에서 추출된 데이터만 따로 저장.

    -> 관련 코드는 Collect.js의 saveData, checkPastNumber가 있음.


## 4. 안드로이드 권한 획득

가. askPermission.js

1) 어플리케이션의 정상적인 실행을 위해선 안드로이드의 저장소, 위치, 녹음, 카메라 권한을 획득해야함. 이를 위해 askPermissions.js파일에서 권한을 물어봄.

나. checkFirstLaunch.js

1) checkFirstLaunch.js에서 앱 설치 후, 혹은 데이터 삭제 후 첫 실행인지 확인하고, 첫 실행 시에만 권한을 물어봄.


## 5. 데이터 추출

가. 이 어플리케이션은 정렬되지 않은 csv, 시간 순으로 정렬된 csv, 정렬되지 않은 txt 파일까지만 추출 가능함.

 -> 관련 코드는 Collect.js의 createSortedFile, createDataFile, extractSortedFile, modifyToCsv, sortByDate, forTxt, createTxtFile, extractTxtFile 등이 있음.

나. SLAM과 결합하여 좌표가 대입된 csv파일은, 인계자가 SLAM을 통해 구한 좌표(x, y, z) 값과 시간 인터벌 값, 속도 값을 받으면 이를 정렬되지 않은 csv파일에 대입한 후, 이를 분석해주는 소위 ‘client’의 요구에 따라 엑셀파일을 변환해주는 프로그램을 따로 만든 것임.

 -> 계정 내 다른 프로젝트 csv to csv 참고바람.

라. 정렬되지 않은 파일은 ‘Data_영상명.csv’ 이며, 정렬된 파일은 ‘Sorted_영상명.csv’임.