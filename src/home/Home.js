import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";

export default Home = () => {
  return (
    <View style={stlyes.container}>
      <Text style={styles.text}>
        Welcome to
        <Text style={styles.logo}> MessApp</Text>
      </Text>
      <TextInput style={styles.input} placeholder="Username"></TextInput>
      <TextInput style={styles.input} placeholder="Password"></TextInput>
      <Pressable style={styles.login} onPress={() => login()}>
        <Text style={styles.loginText}>Login</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.signupText}>Sign up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    color: "#b6a",
    fontWeight: "bold",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  text: {
    fontSize: 20,
  },

  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ccc",
    paddingRight: 80,
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
  },

  login: {
    backgroundColor: "#b6a",
    borderRadius: 4,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },

  loginText: {
    color: "#fff",
  },

  signupText: {
    color: "#b6a",
  },
});
