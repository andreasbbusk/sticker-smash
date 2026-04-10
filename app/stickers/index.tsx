import { Image } from "expo-image";
import { Link } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

import { stickers } from "@/data/stickers";

export default function StickerCatalogScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={stickers}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <Link href={`/stickers/${item.id}`} asChild>
            <Pressable style={styles.card}>
              <Image
                source={item.image}
                style={styles.image}
                contentFit="contain"
              />
              <Text style={styles.name}>{item.name}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
  },
  listContent: {
    padding: 16,
    gap: 16,
  },
  columnWrapper: {
    gap: 16,
  },
  card: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#3b4047",
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  image: {
    width: 96,
    height: 96,
    marginBottom: 12,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
