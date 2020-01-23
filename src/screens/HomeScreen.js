import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TextInput,
  StatusBar
} from "react-native";

import { MonoText } from "../components/StyledText";
import { jsxAttribute } from "@babel/types";

export default function HomeScreen() {
  return (
    <View style={style.container} behavior="padding">
      <TextInput style={style.title} placeholder="제목" />
      <KeyboardAvoidingView style={style.contents} behavior="padding">
        <TextInput placeholder="내용" multiline={true} />
      </KeyboardAvoidingView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: "home",
  headerShown: false
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginTop: StatusBar.currentHeight,
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
    flex: 1
  },
  title: {
    borderStyle: "solid",
    borderWidth: 1,
    height: 50
  },
  contents: {
    borderStyle: "solid",
    borderWidth: 1,
    flex: 1,
    marginBottom: 100
  }
});
