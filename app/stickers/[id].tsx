import { Image } from "expo-image";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { getStickerById } from "@/data/stickers";

export default function StickerDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const sticker = getStickerById(id);

  return (
    <>
      <Stack.Screen
        options={{
          title: sticker ? sticker.name : "Sticker Not Found",
        }}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={sticker?.image}
            style={styles.image}
            contentFit="contain"
          />
          <Text style={styles.name}>{sticker?.name}</Text>
          <Text style={styles.description}>{sticker?.description}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 360,
    alignItems: "center",
    backgroundColor: "#3b4047",
    borderRadius: 24,
    padding: 24,
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    color: "#d3d7db",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
});
