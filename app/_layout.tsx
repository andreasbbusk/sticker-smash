import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: "#ffd33d",
          drawerInactiveTintColor: "#fff",
          drawerStyle: { backgroundColor: "#25292e" },
          sceneStyle: { backgroundColor: "#25292e" },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: "Editor",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="images-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="stickers"
          options={{
            title: "Sticker Catalog",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="happy-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="+not-found"
          options={{
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
      </Drawer>
    </>
  );
}
