import {} from "tamagui"
import {View} from "react-native"
import {} from "expo-router"
import priority_ui_styles from "./priority_todo_list_stylesheet"

function PriorityUI()
{
    return(
         <View style={priority_ui_styles.priority_list_popup}>
            <View style = {priority_ui_styles.priority_card}></View>
            <View style = {priority_ui_styles.navigation_bar}></View>
        </View>    
    );
    
}
export default PriorityUI;