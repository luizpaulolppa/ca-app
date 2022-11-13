import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

type IItemMenu = {
  name: string
  iconName: string
}

export function ItemMenu({ name, iconName }: IItemMenu) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containerText}>
        <Icon name={iconName} size={32} color="#933C85" />
        <Text style={styles.text}>{name}</Text>
      </View>
      <MaterialIcon name="keyboard-arrow-right" size={32} color="#933C85" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    borderRadius: 12,
    backgroundColor: '#FFF',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.0507539)',
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: '#2F2F2F',
    marginLeft: 16
  }
});
