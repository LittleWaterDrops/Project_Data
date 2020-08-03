import 'react-native-gesture-handler';
import React, { 
  Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import collectClass, {Collect} from './Collect';

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
      onPress={() => collectClass.extractSortedFile()} 
      >
      <Text style={styles.buttonText}> 
      Extract sorted data
      </Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={[styles.menuButton, { 
        flex: 1, 
        alignSelf: 'center',
        backgroundColor: '#01DFD7',
      }]}
      onPress={() => navigation.navigate('Temp 2')} 
      >
      <Text style={styles.buttonText}> 
      Temp 2 
      </Text>
    </TouchableOpacity>
    <View style={styles.bottom}>
    </View> 
    </View> 
  );
}

function CollectData({ navigation }) {
  return (
      <Collect/>
  );
}

function ExtractSortedData() {
  collectClass.extractSortedFile();
}

function Temp2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000' }}>
    <Text style={styles.content}>
      This page will be updated soon.
    </Text>
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
      <Stack.Screen name="Extract sorted data" component={ExtractSortedData} />
      <Stack.Screen name="Temp 2" component={Temp2} />
    </Stack.Navigator>
  );
}

export default function App() {
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
  }
});