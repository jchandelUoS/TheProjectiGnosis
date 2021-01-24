import * as React from 'react';
import { Text, View , TouchableOpacity} from 'react-native';
export default function UploadScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('ImageR')}>
      <Text>Google API Results</Text>
      </TouchableOpacity>
    </View>
  );
}