/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SetColor} from './style/SetColor';
function CustomHeader({title, isHome, navigation}) {
  return (
    <View style={styles.headerContanier}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          height: 50,
        }}>
        {isHome ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons
              name="menu-outline"
              style={styles.menuIcon}
              size={30}
              color="#ea697a"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.goBack('PortfolioDetail')}>
            <Ionicons
              name="chevron-back"
              style={styles.backIcon}
              size={30}
              color="#ea697a"
            />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flex: 1.5,
          height: 50,
          justifyContent: 'center',
        }}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View
        style={{
          flex: 1,
          height: 50,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContanier: {
    flexDirection: 'row',
    height: 50,
  },
  iconArea: {
    flex: 1,
    justifyContent: 'center',
    height: 50,
  },
  menuIcon: {
    marginLeft: 10,
  },
  backIcon: {
    marginLeft: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: SetColor.fontColorDark,
  },
});

export default CustomHeader;
