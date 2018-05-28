import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    itemImage: {
       width: 150,
        height: 150
    },
    title: {
        height: 40,
        alignItems: 'center',
        backgroundColor:'green',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 17,
        //fontWeight: 'bold',
        color: 'white'
    },
    containerImage: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },
    containerHeaderImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //borderWidth: 1,
        //borderColor: 'red',
        margin:0,
        width:'100%'
    },
    pokeball: {
        width: 30,
        height: 30
    },
    info: {
        fontSize: 30,
        color:'white'
    },
    count: {
        flexDirection: 'row',
        //borderWidth: 1,
       //borderColor: 'red',
        justifyContent: 'flex-end',
        width: '100%',
        //left: 0
    },
    countText: {        
        fontWeight: 'bold',
        color: 'white'
    },
    containerType: {
        flex: 1,
        flexDirection: 'row',
    },
    containerMovesets: {
        marginTop: 5,
        marginBottom: 10,
    }
})