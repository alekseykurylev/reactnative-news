import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Author} from '../ui/Author';
import {HeaderSingle} from '../ui/HeaderSingle';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigate';

type Props = NativeStackScreenProps<RootStackParamList, 'Single'>;

export const Single = ({route}: Props) => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <HeaderSingle titleNews={route.params.title} />
      <ScrollView>
        <View style={styles.wrap}>
          <Author author={route.params.author} />
          <Text style={[styles.text, styles.title]}>{route.params.title}</Text>
        </View>

        <Image style={styles.img} source={{uri: route.params.imageUrl}} />
        <View style={styles.wrap}>
          <Text style={styles.text}>{route.params.text}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  wrap: {
    paddingHorizontal: 20,
  },
  img: {
    width: '100%',
    height: 250,
    marginVertical: 20,
  },
  title: {
    fontSize: 30,
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
