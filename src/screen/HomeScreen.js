/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import CustomHeader from '../CustomHeader';
import CollapseBox from './HomeScreen/CollapseBox';
import Card from '../components/Card';
import {SetColor} from '../style/SetColor';

function HomeScreen({navigation}) {
  let bgColor = SetColor.cardColor;
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <ScrollView style={{flex: 1}}>
        <Card bgColor={bgColor}>
          <View style={styles.card}>
            <Image
              source={require('../img/rebecca-p-blg.png')}
              style={styles.image}
            />
            <Text style={styles.hello}>Hello,I'm Rebecca!</Text>
          </View>
        </Card>
        <CollapseBox bgColor={bgColor} />
        {/* <Text>Home</Text> */}
      </ScrollView>
    </SafeAreaView>
  );
}

let fontColor = SetColor.fontColor;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  hello: {
    marginTop: 10,
    color: fontColor,
    fontSize: 24,
    letterSpacing: 1.2,
  },
});
export default HomeScreen;
