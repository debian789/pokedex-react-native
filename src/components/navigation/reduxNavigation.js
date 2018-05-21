import {StackNavigator} from 'react-navigation'
import HeaderComponent from './menu/header/Header.component'
import {connect} from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import {addListener} from '../../utils/redux'
import AppNavigation from './appNavigation'

class AppWithNavigationState extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      nav: PropTypes.object.isRequired,
    };
  
    render() {
      const { dispatch, nav } = this.props;
      return (
        <AppNavigation
          navigation={{
            dispatch,
            state: nav,
            addListener,
          }}
        />
      );
    }
  }
  
  const mapStateToProps = state => ({
    nav: state.nav,
  });
  
  export default connect(mapStateToProps)(AppWithNavigationState);
