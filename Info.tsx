import { useNavigation } from "@react-navigation/native";
import React from "react"
import { Button, Image, Text, View } from "react-native"
import { useAuth0 } from "react-native-auth0";



const Info=({navigation}:{navigation:any})=>{
     const navigate=useNavigation()
    const {authorize, clearSession, user, error, isLoading} = useAuth0();

    const onLogout = async () => {
        try {
          await clearSession();
          navigation.navigate('Login')
        } catch (e) {
            if (user){console.log(user)
            }
        console.log(e)
          console.log('Log out cancelled');
        }
      };
return(
    
<View style={{display:"flex",alignItems:"center",gap:10,}} >
<Image style={{ width: 400, height: 200}}source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1G3QgibOnOFAgmiWVTcGRLghMzxwu9HHGZA&usqp=CAU"}}/>

    
    {user&&<Image style={{ height:80,width:80}} source={{uri:user.picture}} />}
           {user&&<Text>{user.name}</Text>}
          {user&& <Text>{user.email}</Text>}

   <Button title="Logout" onPress={onLogout}></Button>
   </View>
)

}
export default Info