/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import CustomHeader from '../CustomHeader';
import {SetColor} from '../style/SetColor';

function NotificationsScreen({navigation}) {
  return (
    <ImageBackground
      source={require('../img/bg01.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title="Notifications"
          isHome={false}
          navigation={navigation}
        />
        <View style={styles.viewArea}>
          <Text style={styles.txt}>Nice To Meet You</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
let fontColor = SetColor.fontColor;

const styles = StyleSheet.create({
  viewArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  txt: {
    color: fontColor,
    letterSpacing: 1,
  },
});

export default NotificationsScreen;
