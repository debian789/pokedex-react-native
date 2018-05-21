import Theme from '../../commons/theme';
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 0,
        backgroundColor: 'green'
    },
    tabbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fafafa',
    },
    tabbar2: {
        backgroundColor: Theme.colors.trowelA.b
    },
    selected: {
        backgroundColor: Theme.colors.trowelB.a
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(0, 0, 0, .2)',
        paddingTop: 4.5,
    },
    indicator: {
        backgroundColor:  'red'// '#ffeb3b'
    },
    label: {
        color: Theme.colors.trowelA.a,
        fontWeight: '400',
        backgroundColor: 'transparent',
    }
})