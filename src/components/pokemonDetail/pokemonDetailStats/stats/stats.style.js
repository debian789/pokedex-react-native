import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,       
    },
    textItem: {
        width: '35%',
        justifyContent: 'center',
    },
    text:{
        textAlign:'right',
        paddingRight: 6,
    },
    containerBar: {
        width: '60%',
        height: 25,
    },
    barItem: {
        width: '100%',
        height: 25,
    }
})