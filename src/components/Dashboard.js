import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

const Dashboard = () => {
  const navigation = useNavigation();
  const [seleksiDashboard, setSeleksiDashboard] = useState({
    title: 'home',
  });

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 12,
          elevation: 3,
          backgroundColor: '#F5EFE6',
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 2,
          }}
          onPress={() => navigation.navigate('Main')}>
          <Icon
            name="home"
            size={28}
            color={
              // 'home' == seleksiDashboard.title ? '#9CAFAA' : 'black'
              'black'
            }></Icon>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 2,
          }}
          onPress={() => navigation.navigate('Search')}>
          <Icon
            name="search"
            size={28}
            color={
              // 'search' === seleksiDashboard.title ? 'black' : '#9CAFAA'
              'black'
            }></Icon>
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 2,
          }}
          onPress={() => navigation.navigate('Keranjang')}>
          <Icon name="cart" size={28} color="black"></Icon>
          <Text>Keranjang</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 2,
          }}>
          <Icon name="person" size={28} color="black"></Icon>
          <Text>User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
