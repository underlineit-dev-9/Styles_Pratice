import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
export default function Home(props) {
  return (
    <View style={styles.container}>
      <Image source={require('../Images/1.png')} style={styles.img} />
      <Text style={styles.title}>Maxx Scooter</Text>
      <Text style={styles.detail}>
        With an updated motor , and integrated anti-theft tech the maxx scooters
        are custom-tuned for the ultimate riding experienced
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate('Detail')}>
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
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
  img: {
    height: '50%',
    width: '120%',
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  detail: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 30,
  },
  btn: {
    marginTop: 80,
    backgroundColor: '#E2443B',
    paddingHorizontal: 80,
    paddingVertical: 8,
    borderRadius: 30,
    borderBlockEndColor: 'gray',
    borderWidth: 2,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});
