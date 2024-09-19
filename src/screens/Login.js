import {View, Text, Image, StatusBar} from 'react-native';
import {useState} from 'react';

import Masuk from '../components/Login/Masuk';
import Klik from '../components/Login/Klik';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={{backgroundColor: '#F3F3F3', flex: 1}}>
      <StatusBar
        backgroundColor="#F3F3F3"
        barStyle={'dark-content'}></StatusBar>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
        <Image
          source={require('../image/Login/login_295128.png')}
          resizeMode="cover"
          style={{
            width: 200,
            height: 200,
            borderRadius: 2,
          }}
        />

        <Text
          style={{
            marginTop: 12,
            paddingVertical: 15,
            fontSize: 30,
            fontWeight: 'bold',
            color: '#212121',
          }}>
          Warung
          <Text style={{color: '#0E46A3'}}>Pugalu</Text>
        </Text>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#212121'}}>
          LOGIN
        </Text>
      </View>
      <Masuk
        type={email}
        set={setEmail}
        placeholder="Masukkan Email Anda"
        icon="envelope"
        secure={false}></Masuk>
      <Masuk
        type={password}
        set={setPassword}
        placeholder="Masukkan Password Anda"
        icon="lock"
        secure={true}></Masuk>
      <Klik></Klik>
    </View>
  );
};

export default Login;
