import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
// Import komponen custom dari file input.tsx
import { CustomTextInput, NIMInput } from "./input";

export default function App() {
  // Tempat menyimpan data nama dan NIM yang diketik user
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");

  // Fungsi untuk memperbarui state nama
  const handleChangeMyName = (value: string) => {
    setName(value);
  };

  // Fungsi untuk memperbarui state NIM
  const handleChangeMyNIM = (value: string) => {
    setNim(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {name ? name : "Nama"} - {nim ? nim : "NIM"}
      </Text>

      <CustomTextInput input={name} onChange={handleChangeMyName} />
      <NIMInput input={nim} onChange={handleChangeMyNIM} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
});
