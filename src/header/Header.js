import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>MessApp</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: "#eee",
    shadowColor: "#ccc",
    shadowRadius: 1,
    shadowOpacity: 0.5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  text: {
    fontWeight: "bold",
    color: "#b6a",
    fontSize: 24,
    padding: 20,
  },
});
