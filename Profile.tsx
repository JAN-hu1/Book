import { View ,Text, Image,Button} from "react-native"
import { increment } from "./BookSlice"
import { useDispatch } from "react-redux"
import TabNav from "./Tab"


const Profile = ({navigation,route}:{navigation:any,route:any}) => {

    const {item}=route.params
    const dispatch=useDispatch()

    const handleAdd=(book:any)=>{
      dispatch(increment(book))
  }

    return (
     
      <View style={{alignItems:"center",gap:10}}>
     <Text style={{fontSize: 30,color: 'black',fontWeight: 'bold'}}>{item.title} </Text>
    <Image style={{height:200,width:300}}source={{uri:item.image}}/>
   <Text style={{fontSize: 20,color: 'green',fontWeight: 'bold',}}>{item.price}</Text>
   <View style={{justifyContent:"center"
}}>
   <Text style={{fontSize: 15,color: 'black',fontWeight: 'bold',}}>{item.subtitle}</Text>
   </View>
   
   <Button onPress={()=>handleAdd(item)}title="BOOKMARK" />
  </View>
    )
}

export default Profile