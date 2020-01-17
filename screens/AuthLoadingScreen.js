import React, { useEffect } from "react";
import {
  View,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  AsyncStorage,
  Text
} from "react-native";

const AuthLoadingScreen = ({ navigation }) => {
  useEffect(() => {
    _bootstrapAsync();
  }, []);

  const _bootstrapAsync = async () => {
    setTimeout(async () => {
      const userToken = await AsyncStorage.getItem("userToken");
      navigation.navigate(userToken ? "Main" : "Auth");
    }, 1000);
  };
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="blue"
        translucent={true}
        hidden={true}
      />
      <ActivityIndicator size="large" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "lightgrey"
  }
});

export default AuthLoadingScreen;
