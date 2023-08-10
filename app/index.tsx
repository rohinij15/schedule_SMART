import { Stack, Link } from "expo-router";
import { YStack } from "tamagui";

export default () => {
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#ddf"
    >
      <Stack.Screen options={{ title: "Home" }} />
      <Link href = "profile">Click to go Profile</Link>
    </YStack>

  );
};
