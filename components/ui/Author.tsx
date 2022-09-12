import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

interface IAuthor {
  author: string;
}

export const Author = ({author}: IAuthor) => {
  return (
    <View style={styles.wrap}>
      <Image style={styles.img} source={require('../../assets/ava.png')} />
      <Text style={styles.text}>{author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 25,
    height: 25,
    borderRadius: 100,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
});
