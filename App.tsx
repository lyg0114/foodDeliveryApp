import * as React from "react";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from "@react-navigation/native-stack";

import {
  Text,
  TouchableHighlight,
  View,
  Pressable
} from "react-native";
import { useCallback } from "react";

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, "Details">;

function HomeScreen({ navigation }: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate("Details");
  }, [navigation]);

  return (
    <>
      <View style={{ flex: 2, backgroundColor: "yellow", alignItems: "center", justifyContent: "center" }}>
        <Pressable onPress={onClick} style={{
          padding: 20,
          backgroundColor: "blue"
        }}>
          <Text style={{ color: "white" }}>Home Screen</Text>
        </Pressable>
      </View>
      <View style={{ flex: 2, backgroundColor: "orange", alignItems: "center", justifyContent: "center" }}>
        <Pressable onPress={onClick}>
          <Text>Second Screen</Text>
        </Pressable>
      </View>
    </>
  );
}

function DetailsScreen({ navigation }: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate("Home");
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableHighlight onPress={onClick}>
        <Text>Details Screen</Text>
      </TouchableHighlight>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "홈화면", headerShown: true }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
