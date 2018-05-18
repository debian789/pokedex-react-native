import { StyleSheet } from 'react-native'
import Theme from '../../../../commons/theme'

export default StyleSheet.create({
    container: {
        backgroundColor: Theme.colors.trowelA.a,
    },
    containerA: {
        paddingTop: 7,
        paddingLeft: 7,
        paddingRight: 7,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    menu: {
        flex: 1,
        alignItems: 'center'
    },
    menuIcon: {
        color: Theme.colors.trowelB.a,

    },
    logo: {
        flexDirection: 'column',
        flex: 6,
        justifyContent: 'center'
    },
    logoText: {
        textAlign: 'center',
        fontSize: 22,
        color: Theme.colors.trowelB.a
    },
    navegation: {
        flex: 1,
        alignItems: 'center'
    },
    navegationIcon: {
        color:  Theme.colors.trowelB.a
    },
    containerB: {
        paddingTop: 5,
        paddingLeft: 7,
        paddingRight: 7,
        paddingBottom: 7,

    },
    searchContainer: {
        backgroundColor:  Theme.colors.trowelB.a,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    searchView: {
        flex:1,
        marginTop: 4,
        alignItems: 'center'
    },
    searchInput: {
        flex: 6
    },
    searchIcon: {
        color:  Theme.colors.trowelB.a
    },
    searchTextInput: {
        height: 40,
        borderColor: Theme.colors.trowelB.a,
        borderWidth: 0
    }
})



