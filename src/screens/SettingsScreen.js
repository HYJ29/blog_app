import React, { useEffect, useState } from "react";
import { Text, View, Button, AsyncStorage } from "react-native";

export default function SettingsScreen({ navigation }) {
  const [tokenText, setTokenText] = useState("text");
  useEffect(() => {
    _getToken().then(token => {
      setTokenText(token);
    });
  }, []);

  const _getToken = async () => {
    const Token = await AsyncStorage.getItem("userToken");
    const jsonToken = JSON.stringify(Token);
    return jsonToken;
  };

  const _signOut = async () => {
    AsyncStorage.removeItem("userToken");
    navigation.navigate("HomeStack");
  };
  return (
    <View>
      <Text>{tokenText}</Text>
      <Button title="SignOut" onPress={_signOut}></Button>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: "app.json"
};
