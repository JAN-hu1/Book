import { useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList, Image, TouchableHighlight, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './App';
import BookMark from './BookMark';
import Info from './Info';
import { ImageBackground } from 'react-native';
import {Text,StyleSheet, BackHandler, Alert} from 'react-native';
import Search from './Search'

const Home=({navigation}:{navigation?:any,books?:any})=>{
    const Tab = createBottomTabNavigator();
interface Book{

title:string;
subtitle:string;
isbn13:string;
price:string;
image:string;
url:string;

}
useEffect(() => {
    const backAction = () => {
        if(navigation.getState().index==0&&navigation.getState().index==1){
            return false
        }
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

const[books,setBooks]=useState<Book[]>([]);

useEffect(() => {
    axios.get('https://api.itbook.store/1.0/new').then((result) => {
        const newBooks:Book[]=result.data.books;
        setBooks(newBooks);

})
.catch((e )=> {
    console.warn(e.message)
})
},[]);
return(
<>
    
<Search books={books} navigation={navigation}/>


    < View>

    {/* <Image style={{ width: 390, height:50}}source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1G3QgibOnOFAgmiWVTcGRLghMzxwu9HHGZA&usqp=CAU"}}/> */}

    <FlatList style={{backgroundColor:'#15777a'}}

    data={books}
    numColumns={2}
    renderItem={({item})=>(
        <View style={{ flex:1,alignItems: 'center',backgroundColor:'#15777a',borderColor:"white",borderWidth:10,margin:4}}>
        <TouchableHighlight
         onPress={() =>
            navigation.navigate('Details',{item:item})
          }>
<View style={{borderRadius:100,backgroundColor:'#15777a'}}>
  
    <Image key={item.isbn13}   style={{ width: 150, height: 200}}source={{uri:item.image}}/>
</View>

        </TouchableHighlight>
        </View>
    )
    }
    
    
    
    />
    </View>
    </>

)




}
export default Home;
