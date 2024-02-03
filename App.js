import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import Home from "./src/home/Home";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store.js";
import { ToastProvider } from "react-native-toast-notifications";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Messages from "./src/messages/Messages";
import Header from "./src/header/Header";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ToastProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StatusBar />
            <Header />
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Home" component={Home}></Stack.Screen>
              <Stack.Screen name="Messages" component={Messages}></Stack.Screen>
            </Stack.Navigator>
          </PersistGate>
        </Provider>
      </ToastProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
