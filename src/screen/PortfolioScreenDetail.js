/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import CustomHeader from '../CustomHeader';
import {IMAGE} from '../constants/PortfolioImgData';
import {SetColor} from '../style/SetColor';

function PortfolioScreenDetail({route, navigation}) {
  const {itemId} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          'https://mocki.io/v1/62794e04-abe4-4efa-8a5e-545d6a86a60c',
        );
        const json = await response.json();
        setData(json.data[itemId]);
      } catch (error) {
        console.error(error);
      } finally {
        // console.log('ok');
        setLoading(false);
      }
    };
    fetchApi();
  }, [itemId]);
  console.log(data.skill);

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Portfolio Detail" navigation={navigation} />
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={SetColor.themeColor} />
        </View>
      ) : (
        <ScrollView style={{flex: 1}}>
          <>
            <Image
              source={IMAGE[itemId][0]}
              style={styles.image}
              resizeMode={'cover'}
            />
            <View style={styles.figcaption}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.type}>- {data.type} -</Text>
              <Text style={styles.info}>{data.info}</Text>
              <Image
                source={IMAGE[itemId][1]}
                style={styles.image2}
                resizeMode={'cover'}
              />
              <View style={styles.skill}>
                {data.skill.map((i, index) => (
                  <Text key={index} style={styles.skillItem}>
                    {i.item}
                  </Text>
                ))}
              </View>
            </View>
          </>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

let fontColor = SetColor.fontColor;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1.5,
    // borderRadius: 25,
  },
  figcaption: {
    flex: 1,
    marginTop: 0,
    padding: 30,
  },
  title: {
    flex: 1,
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
    letterSpacing: 1.2,
    fontSize: 20,
    color: fontColor,
  },
  type: {
    flex: 1,
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 1.2,
    color: fontColor,
  },
  info: {
    color: fontColor,
    letterSpacing: 1.2,
    lineHeight: 23,
    marginBottom: 30,
  },
  image2: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1.5,
    borderRadius: 25,
  },
  skill: {
    marginTop: 25,
  },
  skillItem: {
    color: fontColor,
    letterSpacing: 1.2,
    lineHeight: 20,
  },
});
export default PortfolioScreenDetail;
