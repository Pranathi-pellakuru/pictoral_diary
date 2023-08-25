import React, {useState} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import SaerchBar from '../components/SearchBar';
import {useDispatch} from 'react-redux';
import {addSnap} from '../redux/SnapsSlice';

export default function UnSplashPage() {
  const [data, setData] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedURL, setSelectedURL] = useState(null);

  const dispatch = useDispatch();

  const load = text => {
    var url = `https://api.unsplash.com//search/photos/?client_id=EZohUNOO5yQZ0ErhjVgLqx6OPfShBP7e6nKlctUGUEo&query=${text}&page=1`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data.results);
        setIsloading(false);
      });
  };

  const onSubmit = text => {
    load(text);
  };

  const onImageTouched = item => {
    if (selectedItem === item.id) {
      setSelectedItem(null);
      setSelectedURL(null);
    } else {
      setSelectedItem(item.id);
      setSelectedURL(item.urls.regular);
    }
  };

  const AddBtnHandler = () => {
    dispatch(addSnap({id: selectedItem, url: selectedURL}));
  };

  const renderItem = ({item}) => {
    const isSelected = selectedItem === item.id;
    return (
      <TouchableOpacity
        onLongPress={() => onImageTouched(item)}
        style={[
          styles.imageContainer,
          isSelected && styles.selectedImageContainer,
        ]}>
        <Image source={{uri: item.urls.regular}} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SaerchBar clickHandler={onSubmit} />
      {!isloading && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatlist}
          numColumns={2}
        />
      )}
      <View style={styles.floatingbtn}>
        <Button title="Add" onPress={AddBtnHandler} />
      </View>
    </View>
  );
  s;
}

const styles = StyleSheet.create({
  flatlist: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  image: {
    width: 180,
    height: 180,
    margin: 8,
  },

  imageContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  selectedImageContainer: {
    borderColor: 'blue',
    borderWidth: 2,
    opacity: 0.5,
  },
  floatingbtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
