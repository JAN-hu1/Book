import { useNavigation } from "@react-navigation/native";
import React from "react"
import { Button, ImageBackground, TouchableHighlight, View } from "react-native"
import { useAuth0 } from "react-native-auth0";




const Login=({navigation}:{navigation:any})=>{
    const navigate =useNavigation()
    const {authorize, clearSession, user, error, isLoading} = useAuth0();

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

    <ImageBackground style={{ }} source={{uri:"data:image/jpeg;base64,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"}}>

    <View style={{display:"flex",height:'100%',justifyContent:'center',alignItems:'center'}}>
    <Button title="LOGIN" onPress={()=>
       onLogin() }></Button>
       </View>
       </ImageBackground>
)
}
export default Login