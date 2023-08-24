import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from './BookSlice';

const BookMark = ({navigation}: {navigation: any}) => {
  const item = useSelector((state: any) => state.book.value);
  const dispatch = useDispatch();

  const handleRemove = (book: any) => {
    dispatch(decrement(book));
  };
  return (
    <View style={{backgroundColor: 'white', height: 800, width: 400}}>
      {/* <Image
        style={{width: 400, height: 200}}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1G3QgibOnOFAgmiWVTcGRLghMzxwu9HHGZA&usqp=CAU',
        }}
      /> */}
      <ScrollView style={{height: '100%'}}>
        {item.length === 0 && (
          <View style={{alignItems: 'center', padding: 165 }}>
            <Text
              style={{fontFamily: 'cursive', fontSize: 28, fontWeight: 'bold'}}>
              Empty
            </Text>
            {/* <Image
              style={{height: 400, width: 400, }}
              source={{uri:""
              }}></Image> */}
          </View>
        )}

        {item.map((book: any) => {
          return (
            <View style={{padding: 50}}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}>
                {book.title}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Profile', {item: item})}>
                <Image
                  style={{height: 200, width: 300, marginBottom: 10}}
                  source={{uri: book.image}}
                />
              </TouchableOpacity>

              <Text style={{fontSize: 20, color: 'green', fontWeight: 'bold'}}>
                {book.price}
              </Text>
              <Button onPress={() => handleRemove(book)} title="Remove" />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default BookMark;
