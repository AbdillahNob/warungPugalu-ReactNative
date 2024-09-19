import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Video = props => {
  return (
    <View>
      <View style={{marginTop: 40, marginLeft: 20, flexDirection: 'row'}}>
        <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
          Video
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: 10,
          }}>
          <Text>Liat Semua </Text>
          <Icon name="chevron-forward" size={18} color="black" />
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20, marginBottom: 20}}>
        <FlatList
          data={props.gambarMakanan}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                elevation: 3,
                backgroundColor: '#ffffff',
                borderRadius: 20,
                marginLeft: 22,
                paddingHorizontal: 12,
                paddingVertical: 10,
                marginRight: 16,
                marginBottom: 4,
              }}>
              <ImageBackground
                source={{uri: item.gambar}}
                style={{
                  width: 200,
                  height: 200,
                  marginLeft: 1,
                  borderRadius: 20,
                  overflow: 'hidden',
                  flex: 1,
                  justifyContent: 'center',
                }}
                resizeMode="cover">
                <View style={{flex: 1}}>
                  <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <View
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        paddingLeft: 3,
                        flexDirection: 'row',
                        width: 68,
                        paddingBottom: 3,
                        paddingTop: 2,
                      }}>
                      <View
                        style={{
                          marginRight: 6,
                        }}>
                        <Icon name="play-circle" size={20} color="white" />
                      </View>
                      <View>
                        <Text
                          style={{
                            color: 'white',
                          }}>
                          {item.videoDurasi}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ImageBackground>

              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginTop: 6,
                    color: 'black',
                  }}>
                  {item.makanan}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Video;
