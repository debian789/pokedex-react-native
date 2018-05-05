import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from './Options.style'
import { NavigationActions } from 'react-navigation'
import { ScrollView, Text, View } from 'react-native'

class OptionsComponent extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        })
        this.props.navigation.dispatch(navigateAction)
    }

    render () {
        return (
             <View style={styles.container}>
                 <ScrollView style={styles.scrollView}>

                     <View style={styles.containerOptions}>

                         <View style={styles.navSectionStyle} key="a">
                             <Text style={styles.navItemStyle} onPress={this.navigateToScreen('DealsMap')}>
                                 Ingresar / registrarme
                             </Text>
                         </View>

                         <View style={styles.navSectionStyle} key="b">
                             <Text style={styles.navItemStyle} onPress={this.navigateToScreen('DealsMap')}>
                                 Tarjetas y beneficios
                             </Text>
                         </View>

                         <View style={styles.navSectionStyle} key="c">
                             <Text style={styles.navItemStyle} onPress={this.navigateToScreen('DealsMap')}>
                                 Compartir Offrie
                             </Text>
                         </View>

                         <View style={styles.navSectionStyle} key="d">
                             <Text style={styles.navItemStyle} onPress={this.navigateToScreen('DetailPokemon')}>
                                 Configuración
                             </Text>
                         </View>
                     </View>
                 </ScrollView>

             </View>
        )
    }
}

OptionsComponent.propTypes = {
    navigation: PropTypes.object
}

export default OptionsComponent