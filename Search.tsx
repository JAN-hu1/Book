import React from 'react';
import {TextInput, View, Image, Text, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';

function Search({props, books,navigation}: {props?: any; books?: any,navigation?:any}) {
  const [searchList, setSearchList] = useState('');
  const handleChange = (e: any) => {
    setSearchList(e);
  };

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          paddingLeft: 20,
          margin: 5,
          borderColor: '#009688',
          backgroundColor: '#FFFFFF',
        }}
        placeholder={'Search'}
        onChangeText={e => handleChange(e)}
      />
      {searchList !== '' && (
        
        <ScrollView>
          {searchList !== '' &&
            books !== undefined &&
            books
              .filter((el: any) => {
                return el.title
                  .toLowerCase()
                  .includes(searchList.toLowerCase());
              })
              .map((el: any, i: any) => {
                if (i < 7) {
                  return (
                 
                    <View key={i}>
                      {/* //@ts-ignore */}
                      
                      <View style={{backgroundColor:"#15777a"}}>
                        <TouchableOpacity onPress={()=>navigation.navigate("Details",{item:el})}>
                        <Image style={{height:100,width:150}} source={{uri:el.image}}/>
                        <Text style={{color:"white",}}>{el.title} </Text>
                        </TouchableOpacity>
                      </View>

                    </View>
                  );
                }
              })}
        </ScrollView>
      )}
    </View>
  );
}
export default Search;
