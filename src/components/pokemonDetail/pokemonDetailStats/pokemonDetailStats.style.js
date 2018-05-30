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
        justifyContent: 'flex-end',
        width: '100%',
    },
    countText: {        
        fontWeight: 'bold',
        color: 'white'
    },
    containerType: {
        flex: 1,
        flexDirection: 'row',
    },
    containerStats: {
        marginBottom: 10,
        marginTop: 10,
    },
    head: {
        //flex:1,
        flexDirection: 'row',
        borderColor: 'red',
        borderWidth: 1,
        height: 56,
        justifyContent:'center',
        alignItems: 'center'

    },
    btnBack: {

    },
    headTitle: {

    },
    headTitleText: {

    },
    containerScroll: {
        flex: 1,
        borderColor: 'blue',
        borderWidth: 1,
    },
    containerAll: {
        flex: 1
    }

})