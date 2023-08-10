import { Stack, Link } from "expo-router";
import {YStack } from "tamagui";
//import {sessionStorage} from 'typescript';

export default () => {
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#ddf"
    >
      <Stack.Screen options={{ title: "Options" }} />
      <Link href = "App">Click to go Profile</Link>
    </YStack>
  );
};
