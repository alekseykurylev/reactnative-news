import {View, ActivityIndicator} from 'react-native';

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      }}>
      <ActivityIndicator size="large" />
    </View>
  );
};
