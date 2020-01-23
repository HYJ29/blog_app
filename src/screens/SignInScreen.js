import React from "react";
import {
  View,
  Text,
  Button,
  AsyncStorage,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";

export default function SignInScreen({ navigation }) {
  const _signInAsync = values => {
    const valueJson = JSON.stringify(values);
    AsyncStorage.setItem("userToken", valueJson);
    navigation.navigate("Main");
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={_signInAsync}
      >
        {({ handleChange, handleBlur, handleSubmit }) => (
          <KeyboardAvoidingView style={style.container} behavior="padding">
            <Text>로그인 하기 </Text>
            <TextInput
              onChangeText={handleChange("email")}
              autoFocus={true}
              placeholder={"email"}
              textContentType={"emailAddress"}
            />
            <TextInput
              onChangeText={handleChange("password")}
              placeholder={"password"}
              secureTextEntry={true}
              textContentType={"password"}
              autoCorrect={false}
            />
            <Button title="로그인" onPress={handleSubmit}></Button>
          </KeyboardAvoidingView>
        )}
      </Formik>
      <TextInput secureTextEntry={true} />
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 11
  }
});
