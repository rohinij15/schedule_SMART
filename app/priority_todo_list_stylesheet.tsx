import {StyleSheet, Dimensions} from 'react-native'

/*Dimensions*/
const { width, height } = Dimensions.get('window');
const POPUP_WIDTH = width;
const POPUP_HEIGHT = height * 0.85
const CARD_WIDTH = POPUP_WIDTH*0.9;
const CARD_HEIGHT = POPUP_HEIGHT * 0.65;
const NAVIGATION_BAR_WIDTH = POPUP_WIDTH;
const NAVIGATION_BAR_HEIGHT= POPUP_HEIGHT * 0.1;

const priority_ui_styles = StyleSheet.create({

    priority_list_popup: {
        marginTop: height*0.15,
        height: POPUP_HEIGHT,
        width: POPUP_WIDTH,
        backgroundColor: 'blue',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },

    priority_card:{
        marginVertical: POPUP_HEIGHT*0.05,
        marginHorizontal: POPUP_WIDTH*0.05,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: 'yellow',
        borderRadius: 50,
    },

    navigation_bar:{
        marginTop: CARD_HEIGHT*0.052,
        width: NAVIGATION_BAR_WIDTH,
        backgroundColor: 'purple',
        height: NAVIGATION_BAR_HEIGHT, 
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    }
})

export default priority_ui_styles;