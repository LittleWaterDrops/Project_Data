import AsyncStorage from '@react-native-community/async-storage';

const KEY_VALUE = 'keyFirstLaunch';

// 키값에 true로 저장한다.
function setAppLaunched() {
  AsyncStorage.setItem(KEY_VALUE, 'true');
}

export default async function checkFirstLaunch() {
  try {
    const isFirstLaunched = await AsyncStorage.getItem(KEY_VALUE); //우선 값을 읽자.
    if (isFirstLaunched === null) {  // 값이 없다면,
      setAppLaunched();  // 키값에 true로고 저장하고,
      return true; // true를 반환 ==> 최초 실행 !!
    }
    return false;  // 값이 없다면, 최초 실행 아님 !!
  } catch (error) {
  	  // 에러 발생 시에도 false 로 반환 
      console.log(' [chk first launch] :' + error);  
    return false; // Error
  }
}