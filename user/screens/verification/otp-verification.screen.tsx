import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AuthContainer from "@/utils/container/auth.container";
import { windowHeight } from "@/themes/app.constant";
import SignInText from "@/components/login/signin.text";
import OTPTextInput from "react-native-otp-textinput";
import { style } from "./style";
import color from "@/themes/app.colors";
import { external } from "@/styles/external.style";
import Button from "@/components/common/button";
import { router, useLocalSearchParams } from "expo-router";
import { commonStyles } from "@/styles/common.style";
import { useToast } from "react-native-toast-notifications";
import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storag";

export default function index() {
  const [otp, setOtp] = useState("");
  const [loader, setLoader] = useState(false);
  const toast = useToast();
  const { phoneNumber } = useLocalSearchParams();

  const handleSubmit = async () => {
    if (otp === "") {
      toast.show("Please fill the fields!", {
        type: "danger",
        placement: "bottom",
      });
    }else{
      const otpNumber = `${otp}`;
      console.log(otp);
    }
  };

  return (
    <AuthContainer
      topSpace={windowHeight(240)}
      imageShow={true}
      container={
        <View>
          <SignInText
            title="OTP Verification"
            subtitle={"Check your phone number for the otp!"}
          />
          <OTPTextInput
            handleTextChange={(code) => setOtp(code)}
            inputCount={4}
            textInputStyle={style.otpTextInput}
            tintColor={color.subtitle}
            autoFocus={false}
          />
          <View style={[external.mt_30]}>
            <Button
              title="Verify"
              // onPress={() => router.push("/(tabs)/home")}
              onPress={() => handleSubmit()}
            />
          </View>
          <View style={external.mb_15}>
            <View
              style={[
                external.pt_10,
                external.Pb_10,
                { flexDirection: "row", gap: 5, justifyContent: "center" },
              ]}
            >
              <Text style={[commonStyles.regularText]}>Not Recived Yet?</Text>
              <TouchableOpacity>
                <Text style={[style.signUpText, { color: "#000" }]}>
                  Resend It
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      }
    />
  );
}
