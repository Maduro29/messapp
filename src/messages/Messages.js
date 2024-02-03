import { View, Text, StyleSheet } from "react-native";

export default Messages = () => {
  return (
    <View style={styles.fullwidth}>
      <Text>Messagees</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fullwidth: {
    width: 80,
  },
});
