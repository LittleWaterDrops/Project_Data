//가속도, 지자기, 자이로 센서 완료, 각 측정, 비콘 데이터, 와이파이 데이터 수집, 카메라 녹화 완료, 파일 추출 완료.
import React, { 
  Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';


  
export default class Play extends Component {
  componentDidMount() {
    setTimeout(()=> {
      SplashScreen.hide();
    },500);
  }    

  render () {
    return (
      <View style={styles.container}>
          <Value name="Yeahhhh" value={this.angFinal} /> 
        </View>    
      );
  }
}  
const Value = ({name, value}) => (
    <View style={styles.valueContainer}>
      <Text style={styles.valueName}>{name}:</Text>
      <Text style={styles.valueValue}>{new String(value).substr(0, 8)}</Text>
    </View>
 )
  
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
    },
    flipButton: {
      flex: 0.3,
      height: 40,
      marginHorizontal: 2,
      marginBottom: 10,
      marginTop: 20,
      borderRadius: 5,
      borderColor: '#000000',
      borderWidth: 1,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    flipText: {
      color: 'white',
      fontSize: 15,
    },
    valueContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    valueValue: {
      width: 200,
      fontSize: 15,
      color: '#01DFD7',
    },
    valueName: {
      width: 60,
      fontSize: 15,
      fontWeight: 'bold',
      color: '#01DFD7',
    },
    row: {
      flexDirection: 'row',
    },
});
  