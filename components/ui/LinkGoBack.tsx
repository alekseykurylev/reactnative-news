import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IconArrowLeft} from './icon';

export const LinkGoBack = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <IconArrowLeft color="white" />
    </Pressable>
  );
};
