import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Author} from './Author';

interface ICard {
  imageUrl: string;
  author: string;
  title: string;
}

const Card: React.FunctionComponent<ICard> = ({imageUrl, author, title}) => {
  return (
    <ImageBackground
      style={styles.img}
      source={{uri: imageUrl}}
      resizeMode="cover">
      <View style={styles.wrap}>
        <Author author={author} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  wrap: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 25,
    height: 450,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
});

export default Card;
