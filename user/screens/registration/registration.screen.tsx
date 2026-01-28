import { View, Text } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router/build/exports";
import { useTheme } from "@react-navigation/native";

export default function RegistrationScreen() {
 const { colors } = useTheme();
  const { user } = useLocalSearchParams() as any;
  const parsedUser = JSON.parse(user);
  const [emailFormatWarning, setEmailFormatWarning] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });


   const handleChange = (key: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <View>
      <Text>RegistrationScreen</Text>
    </View>
  );
}
