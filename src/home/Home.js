import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import { login } from "../../app/authSlice";
import { useDispatch, UseDispatch } from "react-redux";
import { useToast } from "react-native-toast-notifications";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";

export default Home = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const toast = useToast();

  const tryLogin = async (email, password) => {
    try {
      const response = await axios.post(
        "https://messapp-server-2fdd7dd6d09a.herokuapp.com/login",
        { email, password }
      );
      console.log(response.data, email, password);
      switch (response.data.errCode) {
        case 0:
          dispatch(login({ email }));
          navigation.navigate("Messages");
          break;
        case 1:
          toast.show(response.data.message, { type: "warning" });
          break;
        case 2:
          toast.show(response.data.message, { type: "warning" });
          break;
        case 3:
          toast.show(response.data.message, { type: "warning" });
          break;
        default:
          toast.show("Huh?");
          break;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to
        <Text style={styles.logo}> MessApp</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={email}
        onChangeText={setEmail}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      ></TextInput>
      <Pressable style={styles.login} onPress={() => tryLogin(email, password)}>
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
