import PokemonDetailComponent  from './pokemonDetail.component'
import {StackNavigator} from 'react-navigation'
import {connect} from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import {addListener} from '../../utils/redux'

export const AppNavigator1 = StackNavigator({
  DetailPokemon: {screen: PokemonDetailComponent},
}, {
    headerMode: 'screen',
    initialRouteName: 'DetailPokemon'    
})

class PokemonDetailNavigation extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      nav1: PropTypes.object.isRequired,
    };
  
    render() {
      const { dispatch, nav1 } = this.props;
      return (
        <AppNavigator1
          navigation={{
            dispatch,
            state: nav1,
            addListener,
          }}
        />
      );
    }
  }
  


  const mapStateToProps = state => {
    return {
      nav1: state.pokemonDetailNavigation
    }
  }
  
  export default connect(mapStateToProps)(PokemonDetailNavigation);
