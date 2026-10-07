import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { registerRootComponent } from "expo";

export default function App() {
  const [nombre, setNombre] = useState<string>("");
  const [saludo, setSaludo] = useState<string>("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        onChangeText={setNombre}
        value={nombre}
      />
      <Button title="Saludar" onPress={() => setSaludo(`Hola, ${nombre}!`)} />
      <Text>{saludo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  input: { borderWidth: 1, padding: 8, width: 200, marginBottom: 10 }
});

registerRootComponent(App);