import { DrawerNavigator } from 'react-navigation'
import ItemMenu from './menu/options/Options.component'
import Router from './menu/router'

export default  Navigator = DrawerNavigator({
         Router: {
             screen: Router
         }
     },
     {
         initialRouteName: 'Router',
         contentComponent: ItemMenu,
     }
)