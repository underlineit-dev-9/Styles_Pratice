import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  ToastAndroid,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {
  COLOR_BLUE,
  COLOR_GREEN,
  COLOR_RED,
} from '../Components /Constants/appConstants';

export default function Detail(props) {
  const [state, setState] = useState({
    selectedColor: COLOR_RED,
    liked: false,
  });
  const {selectedColor, liked} = state;
  const togleColor = (color: any) => {
    setState((prevState: any) => ({
      ...prevState,
      selectedColor: color,
    }));
  };
  const togleLiked = () => {
    ToastAndroid.show(`${liked ? 'diliked' : 'liked'}`, ToastAndroid.SHORT);
    setState((prevState: any) => ({
      ...prevState,
      liked: !liked,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Feather name="chevron-left" color="#fff" size={25} />
        </TouchableOpacity>
        <Feather name="shopping-cart" color="#fff" size={25} />
      </View>
      {selectedColor === COLOR_RED && (
        <Image source={require('../Images/2.png')} style={styles.img} />
      )}
      {selectedColor === COLOR_GREEN && (
        <Image source={require('../Images/green.png')} style={styles.img} />
      )}
      {selectedColor === COLOR_BLUE && (
        <Image source={require('../Images/blue.png')} style={styles.img} />
      )}
      <View style={styles.cont3}>
        <Text style={styles.title}>Maxx Scooter</Text>
        <Text style={styles.subTitle}>Model S1</Text>
        <View style={styles.cont2}>
          <Text style={[styles.title, {flex: 2, marginTop: 0}]}>Colors</Text>
          {/* <View style={styles.selected}>
            
          </View> */}
          <TouchableOpacity
            style={[
              styles.selected,
              {borderColor: selectedColor === COLOR_RED ? '#E24438' : '#fff'},
            ]}
            onPress={() => togleColor(COLOR_RED)}>
            <View style={styles.c1} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selected,
              {borderColor: selectedColor === COLOR_GREEN ? '#529C47' : '#fff'},
            ]}
            onPress={() => togleColor(COLOR_GREEN)}>
            <View style={styles.c2} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selected,
              {borderColor: selectedColor === COLOR_BLUE ? '#529CC0' : '#FFF'},
            ]}
            onPress={() => togleColor(COLOR_BLUE)}>
            <View style={styles.c3} />
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet , consectutur adipsing elit, sed do eiusmod
          tempor inciduent ut labore et dolore magans
        </Text>
        <View style={styles.cont1}>
          <TouchableOpacity onPress={togleLiked}>
            <FontAwesome
              name={liked ? 'heart' : 'heart-o'}
              color={liked ? 'red' : 'black'}
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.navigation.navigate('Home')}>
            <Text style={styles.btntext}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
  },
  subTitle: {
    fontSize: 20,
    color: '#474747',
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    paddingRight: 80,
    lineHeight: 25,
  },
  btn: {
    backgroundColor: '#E24438',
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 30,
  },
  btntext: {
    fontSize: 20,
    color: '#fff',
  },
  cont1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  c3: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: '#529CC0',
  },
  c2: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: '#529C47',
    marginHorizontal: 10,
  },
  c1: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: '#E24438',
  },
  selected: {
    height: 30,
    width: 30,
    borderRadius: 24,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    borderRadius: 40,
    height: '5%',
    marginTop: 20,
    marginLeft: 40,
    marginRight: 30,
  },
  img: {
    height: '45%',
    width: '50%',
    resizeMode: 'contain',
  },
  cont3: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 50,
    paddingHorizontal: 20,
  },
});
