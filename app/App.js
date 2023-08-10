// Example of React Native Timer and Stopwatch
// https://aboutreact.com/react-native-timer-stopwatch/

// import React in our code
import React, {useState} from 'react';
import { Link } from "expo-router";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

// importing library to use Stopwatch and Timer
import {Stopwatch} from 'react-native-stopwatch-timer';

const App = () => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const options = [
    'one', 'two', 'three'
  ];

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
        <View style={styles.sectionStyle}>
          <Stopwatch 
            laps
            msecs
            start={isStopwatchStart}
            // To start
            reset={resetStopwatch}
            // To reset
            options={options}
            // Options for the styling
            getTime={(time) => {
              console.log(time);
            }}
          />
          
          <TouchableHighlight 
            onPress={() => {
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);
            }}>
              <Text style={styles.button}>
                {!isStopwatchStart ? 'START' : 'PAUSE'}
              </Text> 
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
            }}>
              
              <Link href = 'garden' style = {styles.button}>END SESSION</Link>
          </TouchableHighlight>
        
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 55,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 20,
  },
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonText: {
    // fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  button: {
    fontSize: 15,
    marginTop: 10,
    backgroundColor: '#accea1',
    padding: 10,
    borderRadius: 5,
    // width: 200,
    
    // alignText: 'center',
  },
  text: {
    // fontSize: 35,
    color: '#f9f',
    marginLeft: 10,
  },
});