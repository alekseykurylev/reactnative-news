import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {LinkGoBack} from './LinkGoBack';

type Props = {
  title: string;
};
export const HeaderPage = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <LinkGoBack />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 30,
    marginTop: 30,
    position: 'relative',
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    position: 'absolute',
    alignSelf: 'center',
  },
});
