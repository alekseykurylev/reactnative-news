import {useContext, useEffect} from 'react';
import {StyleSheet, FlatList, Pressable, RefreshControl} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigate';
import {NewsContext} from '../NewsContext';
import {Loading} from '../ui/Loading';
import Card from '../ui/Card';
import {HeaderMain} from '../ui/HeaderMain';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export const Main = ({navigation}: Props) => {
  const {data, fetchNews, isLoading} = useContext(NewsContext);
  useEffect(fetchNews, []);

  if (!Array.isArray(data)) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <FlatList
        ListHeaderComponent={<HeaderMain />}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={fetchNews}
            tintColor="#ffffff"
          />
        }
        data={data}
        renderItem={({item}) => (
          <Pressable
            style={styles.item}
            onPress={() => navigation.navigate('Single', item)}>
            <Card
              imageUrl={item.imageUrl}
              author={item.author}
              title={item.title}
            />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'black',
  },
  item: {
    marginBottom: 20,
  },
});
