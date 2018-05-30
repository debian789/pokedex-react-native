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
        flexDirection: 'row',
        height: 56,
        alignItems: 'center'        
    },
    btnBack: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 5,
        paddingTop: 5,       
    },
    iconBack: {
        color: 'white',
        fontSize: 25
    },
    headTitle: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'

    },
    headTitleText: {
        justifyContent: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerScroll: {
        flex: 1,
    },
    containerAll: {
        flex: 1
    }

})