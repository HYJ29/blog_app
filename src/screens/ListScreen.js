import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  StatusBar
} from "react-native";
import { ExpoLinksView } from "@expo/samples";

const contents = Array(100)
  .fill(1)
  .map((num, i) => i);

export default function ListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.ScrollView}>
        {contents.map((content, i) => (
          <View key={i} style={styles.post}>
            <Text>{content}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

ListScreen.navigationOptions = {
  headerShown: false
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 45 : StatusBar.currentHeight,
    backgroundColor: "#fff"
  },
  ScrollView: {
    alignItems: "center"
  },
  post: {
    width: "90%",
    borderWidth: 1,
    borderStyle: "solid"
  }
});
