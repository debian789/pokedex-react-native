import {StackNavigator, NavigationActions} from 'react-navigation'
import HeaderComponent from './menu/header/Header.component'
import {connect} from 'react-redux'
import React from 'react'
import {BackHandler} from 'react-native'
import PropTypes from 'prop-types'
import {addListener} from '../../utils/redux'
import AppNavigation from './appNavigation'

class AppWithNavigationState extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      nav: PropTypes.object.isRequired,
    };

    componentDidMount() {
      BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
    componentWillUnmount() {
      BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    onBackPress = () => {
      const { dispatch, nav } = this.props;
      if (nav.index === 0) {
        return false;
      }
      dispatch(NavigationActions.back());
      return true;
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
