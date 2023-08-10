import { } from "tamagui"
import React from 'react'
import { View, ScrollView, FlatList, Text, TextInput } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { } from "expo-router"
import priority_ui_styles from "./priority_todo_list_stylesheet"
// import { Images } from '../assets/images';
import { TouchableOpacity } from "react-native-gesture-handler";

//Variables
var date = new Date();
var MONTH = date.toLocaleString('default', { month: 'long' });
var YEAR = new Date().getFullYear();
var DAY = new Date().getDate();

//to do list creation??
function inputTodoTextBox(){
    return(
        <View style={{marginHorizontal: "5%"}}>
            <TextInput placeholder="Enter task here"></TextInput>
        </View>
    );
}

//priority todolist view
function PriorityUI() {

    //for priority card headers
    const [onChecked, setIsChecked] = React.useState(false);
    const DATA = [
        { title: "HIGH PRIORITY" },
        { title: "MEDIUM PRIORITY" },
        { title: "LOW PRIORITY" },
        { title: "OTHER TODOS" }
    ]

    return (
        <View style={priority_ui_styles.containter}>
            <View style={priority_ui_styles.priority_list_popup}>
                <Text style={priority_ui_styles.date_title}>
                    {MONTH} {DAY} {YEAR}
                </Text>
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
                                    <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: "bold", marginBottom: 10 }}> {item.title}</Text>
                                    <BouncyCheckbox
                                        textComponent= {inputTodoTextBox()}
                                        style={{ marginTop: 5, marginRight: 25 }}
                                        isChecked={onChecked}
                                        onPress={() => setIsChecked(!onChecked)}
                                        innerIconStyle={{borderRadius:8}}>
                                    </BouncyCheckbox>
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