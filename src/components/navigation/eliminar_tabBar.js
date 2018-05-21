
import React, {Component} from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text, Dimensions } from 'react-native';


const deviceWidth = Dimensions.get('window').width;
// const deviceHeight = Dimensions.get('window').height;
const tabWidth = ((deviceWidth * 13) / 25) / 2;

const styles = StyleSheet.create({
  tabbar: {
    //position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'rgb(255,255,255)',
    marginBottom: 30,
    borderColor: 'rgb(255,255,255)',
    borderWidth: 1,
    borderRadius: 5,
  },
  activeTintColor: {
   backgroundColor: 'rgb(255,255,255)',
  },
  tab: {
    position: 'absolute',
    width: tabWidth,
    backgroundColor: 'rgb(255,255,255)',
    borderColor: 'rgb(255,255,255)',
    borderWidth: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: 15,
    // lineHeight: 11
  },
  tabText: {
    color: 'rgb(255,255,255)'
  },
  inactiveTintColor: {
    backgroundColor: 'rgb(255,255,255)',
  }
});

class TabBar extends Component {
  render() {
    const {
      navigation,
      jumpToIndex
    } = this.props;

    const {
      routes
    } = navigation.state;
    const { activeTintColor, tab, tabbar, tabText, inactiveTintColor } = styles;
    return (
      <View style={tabbar}>
        {routes && routes.map((route, index) => {
          const focused = index === navigation.state.index;
          const tintColor = focused ? activeTintColor : inactiveTintColor;
          return (
            <TouchableWithoutFeedback
              key={route.key}
              style={tab}
              onPress={() => jumpToIndex(index)}
            >
              <View style={tab}>

                <View style={tabText}>
                  <Text>Hello</Text>
                </View>

              </View>
            </TouchableWithoutFeedback>
          );
        })}

      </View>
    );
  }
}

export default TabBar;