import AsyncStorage from '@react-native-community/async-storage';

const KEY_VALUE = 'keyFirstLaunch';

// 키값에 true 저장
function setAppLaunched() {
  AsyncStorage.setItem(KEY_VALUE, 'true');
}

export default async function checkFirstLaunch() {
  try {
    const isFirstLaunched = await AsyncStorage.getItem(KEY_VALUE);

    if (isFirstLaunched === null) {                 // 값이 없다면 키 값에 true 저장
      setAppLaunched();  
      
      return true;                                  // true = 최초 실행
    }
    return false;                                   // 그렇지 않다면 최초 실행 x
  } 
  catch (error) {
    console.log(' [chk first launch] :' + error);   // 에러 발생 시, false 반환        
    
    return false;
  }
}