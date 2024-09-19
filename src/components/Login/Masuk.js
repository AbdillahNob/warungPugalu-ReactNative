import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Masuk = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 25,
        marginHorizontal: 40,
      }}>
      <View
        style={{
          backgroundColor: '#F5EFE6',
          elevation: 4,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
          width: 50,
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
        }}>
        <Icon name={props.icon} size={30}></Icon>
      </View>

      <View
        style={{
          paddingVertical: 5,
          paddingHorizontal: 5,
          elevation: 4,
          backgroundColor: '#F5EFE6',
          // marginHorizontal: 60,
          flex: 1,
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
        }}>
        <TextInput
          placeholder={props.placeholder}
          value={props.type}
          style={{fontSize: 16}}
          onChangeText={text => props.set(text)}
          keyboardType="default"
          secureTextEntry={props.secure}
        />
      </View>
    </View>
  );
};

export default Masuk;
