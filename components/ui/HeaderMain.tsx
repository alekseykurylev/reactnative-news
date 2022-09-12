import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Link} from '@react-navigation/native';
import {IconPlusCircle} from './icon';

export const HeaderMain = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Новости</Text>
      <Link to={{screen: 'AddNews'}}>
        <IconPlusCircle color="white" width={30} height={30} />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    marginBottom: 25,
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
  },
  icon: {
    width: 40,
    height: 40,
  },
});
