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
  StatusBar,
  Button,
  Alert
} from "react-native";

import { Formik } from "formik";

export default function WriteScreen() {
  const handleSubmit = values => {
    Alert.alert("Submited!", `message:${values}`);
    console.log("values", values);
  };

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          contents: ""
        }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={style.container} behavior="padding">
            <TextInput
              style={style.title}
              placeholder="제목"
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
            />
            <KeyboardAvoidingView style={style.contents} behavior="height">
              <ScrollView>
                <TextInput
                  placeholder="내용"
                  multiline={true}
                  onChangeText={handleChange("contents")}
                  onBlur={handleBlur("contents")}
                  value={values.contents}
                />
              </ScrollView>
              <Button title="작성" onPress={handleSubmit} />
            </KeyboardAvoidingView>
          </View>
        )}
      </Formik>
    </>
  );
}

WriteScreen.navigationOptions = {
  headerShown: false
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginTop: Platform.OS === "ios" ? 45 : StatusBar.currentHeight,
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
