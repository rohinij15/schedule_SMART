import { StyleSheet, Dimensions } from 'react-native'

/*Dimensions Merges */
const { width, height } = Dimensions.get('window');
const POPUP_WIDTH = width;
const POPUP_HEIGHT = height * 0.8;
const CARD_WIDTH = POPUP_WIDTH * 0.9;
const CARD_HEIGHT = POPUP_HEIGHT * 0.7;
const NAVIGATION_BAR_WIDTH = POPUP_WIDTH;
const NAVIGATION_BAR_HEIGHT = POPUP_HEIGHT * 0.1;

const priority_ui_styles = StyleSheet.create({

    containter: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    priority_list_popup: {
        height: POPUP_HEIGHT,
        width: POPUP_WIDTH,
        justifyContent: "flex-end",
        backgroundColor: '#fff',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },

    priority_card: {
        marginHorizontal: POPUP_WIDTH * 0.05,
        marginTop: POPUP_HEIGHT*0.05,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: '#a9a',
        borderRadius: 50,
    },

    input_bar: {
        width: NAVIGATION_BAR_WIDTH,
        backgroundColor: '#fff',
        height: NAVIGATION_BAR_HEIGHT,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },

    //HEADERS AND TEXT
    date_title: {
        marginTop: 30,
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20,
    }
})

export default priority_ui_styles;