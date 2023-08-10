import { Stack, Link } from "expo-router";
import { XStack} from "tamagui";
import Footer from "./Footer";
import dog from '../assets/bar_graph.png';

export default () => {
  return (
    <XStack
      display = "flex"
      // flex-direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      // position= "absolute"
      top = "175%"
      padding = "28"
      backgroundColor="#fff"
    >
      <Stack.Screen options={{ title: "Home" }} />
      <Link href = "priority_todo">Priority Table</Link>
      <Link href = "App">Timer</Link>
      <Link href = "garden">Stats</Link>
    </XStack>

  );
};
