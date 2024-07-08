import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image style={styles.image} source={require('../assets/lru.png')} />
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>สมุนไพรท้องถิ่น</Text>
      </View>

      <View style={styles.section}>
        <Image style={styles.coverScreenImage} source={require('../assets/samunpai.jpg')} />
      </View>

      <View style={styles.screenSection}>
        <Image style={styles.image} source={require('../assets/flower1.jpg')} />
        <Image style={styles.image} source={require('../assets/flower2.jpg')} />
        <Image style={styles.image} source={require('../assets/flower3.jpg')} />
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>มหาวิทยาลัยราชภัฏเลย</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'blue',
    flexDirection: 'column',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  coverScreenImage: {
    width: '100%',
    height: 100, // Adjust height as needed
    resizeMode: 'cover',
    marginTop: 100, // Adjust margin top as needed
  },
  screenSection: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    flexDirection: 'row',
  },
  image: {
    width: 110,
    height: 100,
    marginHorizontal: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
});

export default Flex;