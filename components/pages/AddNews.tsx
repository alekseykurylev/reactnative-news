import {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigate';
import {NewsContext} from '../NewsContext';
import {HeaderPage} from '../ui/HeaderPage';

type Props = NativeStackScreenProps<RootStackParamList, 'AddNews'>;

export const AddNews = ({navigation}: Props) => {
  const {addNews} = useContext(NewsContext);

  const [valueTitle, setValueTitle] = useState('');
  const [valueAuthor, setValueAuthor] = useState('');
  const [valueText, setValueText] = useState('');

  const handlerForm = () => {
    addNews(valueTitle, valueAuthor, valueText);
    navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <HeaderPage title="Добавить новость" />
      <ScrollView>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={value => setValueTitle(value)}
            placeholder="Заголовок"
            placeholderTextColor={'#777'}
          />
          <TextInput
            style={styles.input}
            onChangeText={value => setValueAuthor(value)}
            placeholder="Автор"
            placeholderTextColor={'#777'}
          />
          <View style={styles.textareaWrap}>
            <TextInput
              style={styles.textarea}
              underlineColorAndroid="transparent"
              placeholder="Текст"
              placeholderTextColor={'#777'}
              numberOfLines={4}
              multiline={true}
              onChangeText={value => setValueText(value)}
              //   selectTextOnFocus="false"
            />
          </View>
          <Pressable style={styles.button} onPress={handlerForm}>
            <Text style={styles.buttonText}>Опубликовать</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  form: {
    paddingHorizontal: 20,
  },
  label: {
    color: 'white',
    fontSize: 22,
    paddingLeft: 20,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#222',
    padding: 20,
    marginBottom: 20,
    color: 'white',
    borderRadius: 10,
    fontSize: 18,
  },
  textareaWrap: {
    // paddingTop: Platform.OS === "ios" ? 20 : 0,
    backgroundColor: '#222',
    borderRadius: 10,
    height: 200,
  },
  textarea: {
    padding: 20,
    fontSize: 18,
    color: 'white',
    flex: 1,
  },
  button: {
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
    color: 'black',
  },
});
