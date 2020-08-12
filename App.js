import 'react-native-gesture-handler';
import React,{
  useState, 
  useEffect,
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import collectClass, {Collect} from './Collect';
import checkFirstLaunch from './test1/checkFirstLaunch';
import askPermission from './test1/askPermissions';
function HomeScreen({ navigation }) {
  return (
  
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000' }}>
      <View style={styles.top}>
        <Text style = {styles.title}>
          Project Data
        </Text>
      </View>

      <TouchableOpacity
      style={[styles.menuButton, { 
        flex: 1, 
        alignSelf: 'center',
        backgroundColor: '#01DFD7',
      }]}
      onPress={() => navigation.navigate('Collect Data')} 
      >
      <Text style={styles.buttonText}> 
      Collect Data 
      </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuButton, { 
          flex: 1, 
          alignSelf: 'center',
          backgroundColor: '#01DFD7',
        }]}
        onPress={() => navigation.navigate('Extract page')} 
        >
        <Text style={styles.buttonText}> 
        Extract page
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuButton, { 
          flex: 1, 
          alignSelf: 'center',
          backgroundColor: '#01DFD7',
        }]}
        onPress={() => navigation.navigate('Temp')} 
        >
        <Text style={styles.buttonText}> 
        Temp
        </Text>
      </TouchableOpacity>
      <View style={styles.bottom}>
      </View> 
    </View> 
  );
}

function CollectData() {
  return (
      <Collect/>
  );
}

function DataInfo() {
  collectClass.DataInfo();
}

function ExtractSortedFile() {
  collectClass.extractSortedFile();
}

function ExtractTxtFile() {
  collectClass.extractTxtFile();
}

function Temp({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000' }}>
    <Text style={styles.content}>
      This page will be updated soon.
    </Text>
    </View>
  );
}

function Extract() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000' }}>
      <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000' }}>
      <Text style = {styles.warningText}>
      {"\n"}
      {"\n"}
      &nbsp; 각 기능에 대해 생성되는 파일은 가장 최근에 수집한 영상 데이터로 생성됩니다. 
      {"\n"}
      {"\n"}
      &nbsp; 최근 영상을 삭제했어도 그 데이터로 진행되는 점 유의해주시기 바랍니다.
      {"\n"}
      {"\n"}
      </Text>
      </View>

      <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000' }}>
      
        <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000' }}>
        </View>
        <Text style = {styles.menuText}>
        -    Menu    -
        {"\n"}
        </Text>

        <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000' }}>
        </View>

        <TouchableOpacity
          style={[styles.extractButton, { 
            flex: 1, 
            alignSelf: 'center',
            backgroundColor: '#01DFD7',
          }]}
          onPress={() => DataInfo()} 
          >

          <Text style={styles.buttonText}> 
          Current data info
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={[styles.extractButton, { 
            flex: 1, 
            alignSelf: 'center',
            backgroundColor: '#01DFD7',
          }]}
          onPress={() => ExtractSortedFile()} 
          >

          <Text style={styles.buttonText}> 
          Extract sorted data
          </Text>
        </TouchableOpacity>
    

        <TouchableOpacity
          style={[styles.extractButton, { 
            flex: 1, 
            alignSelf: 'center',
            backgroundColor: '#01DFD7',
          }]}
          onPress={() => ExtractTxtFile()} 
          >
        
          <Text style={styles.buttonText}> 
          Extract txt file
          </Text>
        </TouchableOpacity>

        <View style={{ flex: 1.4, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000' }}>
        </View>

      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  setTimeout(() => {
      SplashScreen.hide();
  }, 100);
  return (
    <Stack.Navigator
    screenOptions={{
      headerTintColor: '#01DFD7',
      headerStyle: { backgroundColor: '#000000' },
      }}>
      <Stack.Screen name=" " component={HomeScreen} />
      <Stack.Screen name="Collect Data" component={CollectData} />
      <Stack.Screen name="Extract page" component={Extract} />
      <Stack.Screen name="Temp" component={Temp} />
    </Stack.Navigator>
  );
}

export default function App() {
  // 앱 실행 시 데이터 초기화
  // Realm.deleteFile({schema:[AccSchema,MagSchema,GyroSchema,XyzSchema,BeaconSchema,BeaconDataSchema,WifiSchema,WifiDataSchema]});

  //앱 최초 실행 관련  
  const[isFirstLaunch,setIsFirstLaunch]=useState(false);
  
  async function getFirstLaunch () {
    const FirstLaunch = await checkFirstLaunch();
    console.log('Is this first launch? : ' + JSON.stringify(FirstLaunch));

    if(FirstLaunch){
      askPermission();
      setIsFirstLaunch(true);
    }
  }

  useEffect(() => {
    getFirstLaunch();
  },[]);      

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 4.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderLeftWidth: 15,
    paddingBottom: 50,
  },
  title: {
    color: '#01DFD7',
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 100,
  },
  menuButton: {
    flex: 1,
    height: 20,
    width: 330,
    marginHorizontal: 2,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 26,
    borderColor: '#000000',
    borderWidth: 6,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  extractButton: {
    flex: 1,
    height: 20,
    width: 330,
    marginHorizontal: 2,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 26,
    borderColor: '#000000',
    borderWidth: 6,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 21,
  },
  bottom: {
    flex: 1.2,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  content: {
    color: '#01DFD7',
    fontSize: 40,
    fontWeight: 'bold',
  },
  warningText:{
    width: 350,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#01DFD7',
  },
  menuText:{
    width: 350,
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#01DFD7',
  },
});