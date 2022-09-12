import {View, StyleSheet, Pressable, Share} from 'react-native';
import {LinkGoBack} from './LinkGoBack';
import {IconShare} from './icon';

type Props = {
  titleNews: string;
};

export const HeaderSingle = ({titleNews}: Props) => {
  const onShare = async () => {
    try {
      await Share.share({
        message: titleNews,
      });
    } catch (error) {
      //   alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <LinkGoBack />
      <Pressable onPress={onShare}>
        <IconShare color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
    marginTop: 30,
  },
});
