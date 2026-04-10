import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack } from "expo-router";

export default function StickersLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#25292e" },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        contentStyle: { backgroundColor: "#25292e" },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Sticker Catalog",
          headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Sticker Details",
        }}
      />
    </Stack>
  );
}
