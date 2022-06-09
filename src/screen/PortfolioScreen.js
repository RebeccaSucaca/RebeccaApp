/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import CustomHeader from '../CustomHeader';
import {IMAGE} from '../constants/PortfolioImgData';
import {SetColor} from '../style/SetColor';

function PortfolioScreen({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          'https://mocki.io/v1/62794e04-abe4-4efa-8a5e-545d6a86a60c',
        );
        const json = await response.json();
        let dataArray = [];
        json.data.map(item => {
          dataArray.push(item.number);
        });
        setData(dataArray);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);
  console.log(data);

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Portfolio" isHome={true} navigation={navigation} />
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={SetColor.themeColor} />
        </View>
      ) : (
        <ScrollView style={{flex: 1}}>
          <View style={styles.card}>
            {data.map(item => (
              <TouchableOpacity
                style={styles.link}
                onPress={() =>
                  navigation.navigate('PortfolioDetail', {
                    itemId: item,
                  })
                }
                key={item}
                number={item}>
                {console.log(IMAGE[item][0])}
                {console.log({item})}
                <Image
                  source={IMAGE[item][0]}
                  style={styles.image}
                  resizeMode={'cover'}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
let fontColor = SetColor.fontColor;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 0,
    padding: 20,
    flexWrap: 'wrap',
  },
  link: {
    width: '100%',
    borderRadius: 25,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1.5,
    borderRadius: 25,
  },
  figcaption: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    marginTop: 5,
    color: fontColor,
    letterSpacing: 1.2,
  },

  linkTxt: {
    color: fontColor,
  },
});
export default PortfolioScreen;
