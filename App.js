import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import { View, Text } from 'react-native'

import  firebase from 'firebase'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, applyMiddleware(thunk))



const firebaseConfig = {
  apiKey: "AIzaSyBSC29r8qPOrq5b9EXVRpzumst-cFOqIuw",
  authDomain: "genii-app.firebaseapp.com",
  projectId: "genii-app",
  storageBucket: "genii-app.appspot.com",
  messagingSenderId: "151559932861",
  appId: "1:151559932861:web:29a6b542abf3b555f7e0d4",
  measurementId: "G-DQNMM716YV"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './Components/Main'
import RegisterScreen from './Components/Rscreen'
import LoginScreen from './Components/LoginScreen'
import MainScreen from './Components/HomeScreen'
import ProjectsScreen from "./Components/Projects"
import SaveScreen from './Components/Save'


const Stack = createStackNavigator();


export class App extends Component {
  constructor(props) {
    super()
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <Provider store={store}>
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Projects" component={ProjectsScreen} navigation={this.props.navigation}/>
            <Stack.Screen name="Save" component={SaveScreen} />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App