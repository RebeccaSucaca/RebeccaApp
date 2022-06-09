/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {SetColor} from '../style/SetColor';
function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ea697a'}}>
      <ScrollView style={{marginLeft: 30}}>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('MenuTab')}>
          <Text style={{color: SetColor.drawerfontColor}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('Notifications')}>
          <Text style={{color: SetColor.drawerfontColor}}>Notifications</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
export default CustomDrawerContent;
