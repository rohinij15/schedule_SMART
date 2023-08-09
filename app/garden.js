//import {Text} from 'react-native';

import {useParams} from 'react-router-dom';
// import timer from './assets/timer.png';
import React from 'react'
import { View, Image, ScrollView, FlatList, Text, TextInput } from 'react-native'
import priority_ui_styles from "./priority_todo_list_stylesheet"
import dog from '../assets/pie_chart.png';
import bar from '../assets/bar_graph.png';
import percent from '../assets/percent.png';
import scatter from '../assets/scatter_plot.png';
import { TouchableOpacity } from "react-native-gesture-handler";

var date = new Date();
var MONTH = date.toLocaleString('default', { month: 'long' });
var YEAR = new Date().getFullYear();
var DAY = new Date().getDate();

function inputTodoTextBox(){
  return(  
      <View style={{marginHorizontal: "5%"}}>
          <TextInput placeholder="Enter task here"></TextInput>
      </View>
  );
}

function PriorityUI() {

  //for priority card headers
  const DATA = [
    //   { title: "Spent 50 Min on Academics"},
    //   { title: "MEDIUM PRIORITY" },
    //   { title: "LOW PRIORITY" },
    //   { title: "OTHER TODOS" },
      { im : dog},
      { im: bar},
      { im: percent},
      { im: scatter},
  ]

  return (
      <View style={priority_ui_styles.containter}>
          <View style={priority_ui_styles.priority_list_popup}>
              <Text style={priority_ui_styles.date_title}>
                  {MONTH} {DAY} {YEAR}
              </Text>
              <Text style = {{textAlign: "center",}}>TIME MANAGEMENT STATISTICS</Text>
              <FlatList
                  data={DATA}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  snapToInterval={priority_ui_styles.priority_card.width + priority_ui_styles.priority_list_popup.width * 0.1}
                  decelerationRate={"fast"}
                  renderItem={({ item }) => {
                      return (
                          <TouchableOpacity>
                              <ScrollView style={priority_ui_styles.priority_card} contentContainerStyle={{ justifyContent: "center", margin: "12%" }}>
                                {/* <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: "bold", marginBottom: 10 }}> {item.title}</Text> */}
                                
                              <Image style={{resizeMode: 'contain', width: 285, height: 350}} source={item.im} alt ="dsngjs"/>
                                  {/* <BouncyCheckbox
                                      textComponent= {inputTodoTextBox()}
                                      style={{ marginTop: 5, marginRight: 25 }}
                                      isChecked={onChecked}
                                      onPress={() => setIsChecked(!onChecked)}
                                      innerIconStyle={{borderRadius:8}}>
                                  </BouncyCheckbox> */}
                              </ScrollView>
                          </TouchableOpacity>
                      );
                  }}>
              </FlatList>
              <View style={priority_ui_styles.input_bar}></View>
          </View>
      </View>
  );
}
export default PriorityUI;
