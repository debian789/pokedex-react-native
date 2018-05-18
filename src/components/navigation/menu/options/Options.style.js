import theme from '../../../../commons/theme';

export default {
    container: {
       flex: 1,
    },
    navSectionStyle: {
        backgroundColor: theme.colors.trowelA.a,
        marginTop: 10,
        borderRadius: 20,
        width: '85%'
    },
    navItemStyle: {
        padding: 10,
        textAlign: 'center',
        color: 'white'
    },

    containerOptions: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    scrollView: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1
    },
    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    }
};
