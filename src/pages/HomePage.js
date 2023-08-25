import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';

export default function Home({navigation}) {
  const snaps = useSelector(state => state.snaps.urls);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Start snapping your day</Text>
      </View>
      <View style={styles.ImagesContainer}>
        <FlatList
          data={snaps}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <Image source={{uri: item.url}} style={styles.image} />;
          }}
        />
      </View>
      <Button
        title="Add picture"
        style={styles.btn}
        onPress={() => {
          navigation.push('UnSplashPage');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainText: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'robotomono_regular',
  },
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImagesContainer: {
    flex: 3,
    alignItems: 'center',
  },
  btn: {
    width: 200,
  },
  image: {
    width: 180,
    height: 180,
    margin: 8,
  },
});
