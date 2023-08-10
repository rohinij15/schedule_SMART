// import { Box, RectangleHorizontal } from "@tamagui/lucide-icons";
// import { Stack } from "expo-router";
// import React, { useState } from 'react';
// import { StyleSheet } from "react-native";
// import { TextInput } from "react-native-gesture-handler";
// import { View, YStack, Text } from "tamagui";
// import Task from './components/Task.js';
// import { KeyboardAvoidingView, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

// // import { v4 as uuidV4 } from "uuid";

// const today = new Date()

// const f = new Intl.DateTimeFormat("en-us", {
//   dateStyle: "medium"
// })

// const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const d = new Date();
// let day = weekday[d.getDay()];

// export default () => {
//   const [task, setTask] = useState();
//   const [taskItems, setTaskItems] = useState([]);

//   const handleAddTask = () => {
//     Keyboard.dismiss();
//     setTaskItems([...taskItems, task])
//     setTask(null)
//   }

//   const completeTask = (index) => {
//     // completeTask("Are you sure you want to delete this?", true)
//     let itemsCopy = [...taskItems];
//     itemsCopy.splice(index, 1);
//     setTaskItems(itemsCopy);
//   }

//   return (
//     <YStack
//       flex={1}
//       justifyContent="flex-start"
//       alignItems="center"
//       backgroundColor="#ffffff"
//     >
//       <Stack.Screen options={{ title: "Homepage" }} />
//       <View>
//         <Text>{" "}</Text>
//       </View>
//       <View>
//         <Text>{" "}</Text>
//       </View>
//       <View>
//         <Text>{day}</Text>
//       </View>
//       <View>
//         <Text>{f.format(today)}</Text>
//       </View>
//       <View style={styles.container}>
//       {/* Added this scroll view to enable scrolling when list gets longer than the page */}
//       <ScrollView
//         contentContainerStyle={{
//           flexGrow: 1
//         }}
//         keyboardShouldPersistTaps='handled'
//       >
//         <View style={styles.container}>
//           <View style={styles.tasksWrapper}>
//             <Text style={styles.sectionTitle}>Today's Tasks</Text>

//             <View style={styles.items} />
//             {
//               taskItems.map((item, index) => {
//                 return (
//                   <TouchableOpacity key={index} onLongPress={() => completeTask(index)}>
//                     <Task text={item} />
//                   </TouchableOpacity>
//                 )
//               })
//             }
//           </View>
//         </View>

//         </ScrollView>
//         {/* Write a task */}
//         <KeyboardAvoidingView
//           behavior={Platform.OS === "ios" ? "padding" : "height"}
//           style={styles.writeTaskWrapper}
//         >
//           <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />

//           <TouchableOpacity onPress={() => handleAddTask()} >
//             <View style={styles.addWrapper}>
//               <Text style={styles.addText}>+</Text>
//             </View>
//           </TouchableOpacity>
//         </KeyboardAvoidingView>
//       </View>
//       <XStack
//       display = "flex"
//       // flex-direction="row"
//       justifyContent="space-evenly"
//       alignItems="center"
//       // position= "absolute"
//       top = "175%"
//       padding = "28"
//       backgroundColor="#fff"
//     >
//       <Stack.Screen options={{ title: "Home" }} />
//       <Link href = "priority_todo">Priority Table</Link>
//       <Link href = "App">Timer</Link>
//       <Link href = "garden">Stats</Link>
//     </XStack>

//     </YStack>

//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   tasksWrapper: {
//     paddingTop: 40,
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 40,
//     fontWeight: 'bold'
//   },
//   items: {
//     marginTop: 30,
//   },
//   writeTaskWrapper: {
//     position: 'absolute',
//     bottom: 60,
//     width: '80%',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center'
//   },
//   input: {
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     backgroundColor: '#accea1',
//     borderRadius: 60,
//     borderColor: '#accea1',
//     borderWidth: 1,
//     width: 250,
//   },
//   addWrapper: {
//     width: 50,
//     height: 50,
//     backgroundColor: '#accea1',
//     borderRadius: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderColor: '#accea1',
//     borderWidth: 1,
//   },
//   addText: {},
// });
