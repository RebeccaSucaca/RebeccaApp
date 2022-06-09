/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View, StyleSheet} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Card from '../../components/Card';
import {SetColor} from '../../style/SetColor';

export default function CollapseBox({bgColor}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    // old
    // https://mocki.io/v1/34510310-6701-4616-b1dc-719ffaba9c87
    // add ReactNative
    //https://mocki.io/v1/4434368d-359b-4d2d-bcf9-81cc66e64f05
    try {
      const response = await fetch(
        'https://mocki.io/v1/34510310-6701-4616-b1dc-719ffaba9c87',
      );
      const json = await response.json();
      // console.log(json.data);
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      // console.log('ok');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <View style={{flex: 1}}>
        {isLoading ? (
          <ActivityIndicator color={SetColor.themeColor} />
        ) : (
          <>
            {data.map((item, index) => (
              <Card bgColor={bgColor} key={index}>
                <Collapse style={styles.container}>
                  <CollapseHeader>
                    <View style={styles.header}>
                      <Text style={styles.title}>{item.listName}</Text>
                      <Icon
                        style={[
                          styles.icon,
                          {
                            transform: [{scaleY: 0.8}, {translateX: -2}],
                          },
                        ]}
                        name="down"
                        size={23}
                      />
                    </View>
                  </CollapseHeader>
                  <CollapseBody>
                    {item.listData.map((item1, index1) => (
                      <View style={styles.item} key={index1}>
                        <Text style={styles.itemTitle}>{item1.itemTitle}</Text>
                        <Text style={styles.itemDetail}>
                          {item1.itemDetail}
                        </Text>
                      </View>
                    ))}
                  </CollapseBody>
                </Collapse>
              </Card>
            ))}
          </>
        )}
      </View>
    </>
  );
}
let fontColor = SetColor.fontColor;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginTop: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: fontColor,
  },
  icon: {
    color: fontColor,
  },
  title: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 10,
    fontSize: 18,
    letterSpacing: 1.2,
    color: fontColor,
  },
  item: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    // eslint-disable-next-line no-dupe-keys
    flexDirection: 'column',
  },
  itemTitle: {
    fontWeight: 'bold',
    color: fontColor,
  },
  itemDetail: {
    marginTop: 4,
    color: fontColor,
    lineHeight: 17,
    letterSpacing: 0.5,
  },
});
