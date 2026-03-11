import { StyleSheet, Text, TextInput, View } from "react-native";

// Tipe data untuk properti yang dikirim ke komponen
interface CustomProps {
  onChange: (val: string) => void;
  input: string;
}

// Komponen custom untuk input teks biasa (Nama)
export const CustomTextInput = ({ input, onChange }: CustomProps) => {
  return (
    <View style={{ width: 250, marginBottom: 10 }}>
      <Text>Name</Text>
      <TextInput
        placeholder="Input your name"
        style={styles.inputBox}
        onChangeText={onChange} // Menangkap ketikan user
        value={input}
      />
    </View>
  );
};

// Komponen custom untuk input angka (NIM)
export const NIMInput = ({ input, onChange }: CustomProps) => {
  return (
    <View style={{ width: 250 }}>
      <Text>NIM</Text>
      <TextInput
        placeholder="Input your NIM"
        style={styles.inputBox}
        onChangeText={onChange}
        keyboardType="numeric" // Memaksa keyboard angka yang muncul
        value={input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginTop: 4,
  },
});
