import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {SetColor} from '../../style/SetColor';
const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={onToggle(id)}>
        {checked ? (
          <View style={styles.completeCircle}>
            <Icon
              name="checkcircle"
              size={23}
              color={SetColor.themeColorLight}
            />
          </View>
        ) : (
          <View style={styles.circle} />
        )}
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          checked ? styles.strikeText : styles.unstrikeText,
        ]}>
        {textValue}
      </Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={onRemove(id)}>
          <Icon name="delete" size={15} color={SetColor.fontColorLight} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: SetColor.fontColorLight,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 30,
  },
  text: {
    flex: 5,
    fontWeight: '500',
    marginVertical: 20,
  },
  circle: {
    width: 23,
    height: 23,
    borderRadius: 15,
    borderColor: SetColor.themeColor,
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 0,
  },
  completeCircle: {
    marginRight: 10,
    marginLeft: 0,
  },
  strikeText: {
    color: SetColor.fontColorLight,
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: SetColor.fontColor,
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TodoListItem;
