import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { windowHeight, windowWidth } from "@/themes/app.constant";
import TitleView from "@/components/signup/title.view";
import Input from "@/components/common/input";
import Button from "@/components/common/button";
import color from "@/themes/app.colors";
import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import { error } from "console";
import { Toast } from "react-native-toast-notifications";

export default function RegistrationScreen() {
  const { colors } = useTheme();
  const { user } = useLocalSearchParams() as any;
  const [emailFormatWarning, setEmailFormatWarning] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    countryCode: "",
    refferalId: "",
  });

  const handleSubmit = async () => {
    await axios
      .put(`${process.env.something}/sign-up-user`, {
        userId: user?.id,
        email: formData.email,
        name: formData.name,
      })
      .then((res) => {
        console.log(res);
        router.push("/(routes)/email-verification");
      })
      .catch((error) => {
        console.log(error);
        Toast.show(error.data.message, {
          type: "danger",
        });
      });
  };

  

  const handleChange = (key: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontFamily: "TT-Octosquares-Medium",
            fontSize: windowHeight(25),
            paddingTop: windowHeight(50),
            textAlign: "center",
          }}
        >
          RideX
        </Text>
        <View style={{ padding: windowWidth(20) }}>
          <View
            style={[styles.subView, { backgroundColor: colors.background }]}
          >
            <View style={styles.space}>
              <TitleView
                title={"Create your account"}
                subTitle="Explore your life by joining Ride Wave"
              />

              <Input
                title="Name"
                placeholder="Enter your name"
                value={formData?.name}
                onChangeText={(text) => handleChange("name", text)}
                showWarning={showWarning && formData.name === ""}
                warning={"Please enter your name!"}
              />

              <Input
                title="Phone Number"
                placeholder="Enter your phone number"
                value={"+94768645011"}
                disabled={true}
              />

              <Input
                title="Email Address"
                placeholder="Enter your email address"
                keyboardType="email-address"
                value={formData.email}
                onChangeText={(text) => handleChange("email", text)}
                showWarning={
                  (showWarning && formData.name === "") ||
                  emailFormatWarning !== ""
                }
                warning={
                  emailFormatWarning !== ""
                    ? "Please enter your email!"
                    : "Please enter a validate email!"
                }
                emailFormatWarning={emailFormatWarning}
              />

              <View style={styles.margin}>
                <Button
                  onPress={() => handleSubmit()}
                  title="Next"
                  backgroundColor={color.buttonBg}
                  textColor={color.whiteColor}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  subView: {
    height: "100%",
  },
  space: {
    marginHorizontal: windowWidth(4),
  },
  margin: {
    marginVertical: windowHeight(12),
  },
});
