import { NavigationContainer } from "@react-navigation/native"
import { HomeStack } from "./App"
import BookMark from "./BookMark"
import Info from "./Info"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "./Home";
import { Image } from "react-native";
import Auth0, { useAuth0 } from "react-native-auth0";

const Tab = createBottomTabNavigator();

function TabNav(){
  const{user}=useAuth0();

    return (<>

    
      <Tab.Navigator screenOptions={{headerShown:false}}>

      {/* tabBarIcon: () => {
        return ( */}
        <Tab.Screen 

options={{

tabBarIcon: () => {

return (
 

<Image

style={{ width: 32, height: 34 }}

source={{ uri: 'https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png' }}></Image>

)

},

}} name="Home" component={Home} />
        {/* )
        } */}
        <Tab.Screen 

options={{

tabBarIcon: () => {

return (

<Image

style={{ width: 32, height: 34 }}

source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSULx6azgXR_GBk6v0vQzib0gFmGb68qY8QSQ&usqp=CAU' }}></Image>

)

},

}}
        name="Bookmark" component={BookMark} />
        <Tab.Screen 
       

options={{

  tabBarIcon: () => {
  
  return (
  <>
 {user&& <Image
  
  style={{ width: 32, height: 34 }}
  
  source={{uri:user?.picture}}/>}
  </>
  )
  
  },
  
  }} name="Info" component={Info} />



      </Tab.Navigator>
      </>)
    
}
export default TabNav