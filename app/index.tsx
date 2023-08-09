import { Stack, Link } from "expo-router";
import { YStack } from "tamagui";

export default () => {
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#fff"
    >
      <Stack.Screen options={{ title: "Home" }} />
      <Link href = "App">Click to go Profile</Link>
    </YStack>
  );
};
