import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react"
import { Button, ImageBackground, TouchableHighlight, View } from "react-native"
import { useAuth0 } from "react-native-auth0";
import SplashScreen from 'react-native-splash-screen';




const Login=({navigation}:{navigation?:any})=>{
    const navigate =useNavigation()
    const {authorize, clearSession, user, error, isLoading} = useAuth0();
    useEffect(() => {
      SplashScreen.hide();
    }, []);
  const onLogin = async () => {
    try {
      await authorize();
      if (user){
        console.log(user.name)
        navigation.navigate('TabNav')
      }
      
    } catch (e) {
      console.log(e);
    }
  };
return(

<ImageBackground  source={{uri:"https://img.freepik.com/premium-vector/ebook-mobile-device-with-bookmark-design-concept_7087-1815.jpg?w=826"}}>
    <View style={{display:"flex",height:'100%',justifyContent:'center',alignItems:'center'}}>
    <Button title="LOGIN" onPress={()=>
       onLogin() }></Button>
       </View>
       </ImageBackground>
)
}
export default Login