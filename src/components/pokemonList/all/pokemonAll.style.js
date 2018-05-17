import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    item: {        
        borderWidth: 0,
        height: 120,
        width:'33%'
    },
    head: {
        flex: 1
    },
    body: {
        flex: 3,
        alignItems: 'center',
    },
    itemImage: {
       width: 50,
        height: 50
    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
    },
    count: {
        flex: 1,
        color: 'white',
        paddingRight: 5,
        textAlign: 'right',
    },
    name: {
        flex: 3,
        color: 'white',
        textAlign: 'center',
        alignContent: 'center'
    }
})