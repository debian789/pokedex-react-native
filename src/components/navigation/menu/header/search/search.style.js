import { StyleSheet } from 'react-native'
import Theme from '../../../../../commons/theme'

export default StyleSheet.create({
    searchIcon: {
        color:'white'  ,
        flex: 1      
    },
    container: {
        flex: 1,
       
        backgroundColor:' rgba(211, 38, 44,0.8)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    containerText: {
        margin: 30,
        paddingBottom: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'white',
        
        borderBottomWidth: 1   
        
    },
    containerClose: {
        alignSelf: 'flex-start',  
        position: 'absolute',
        top: 0,
        padding: 5,
        marginLeft: 4,
    },
    close: {
        color:'white',

    },
    input: {
        //borderColor: 'red',
        // borderWidth: 1,
        flex: 9,
        color: 'white'
    }

})
