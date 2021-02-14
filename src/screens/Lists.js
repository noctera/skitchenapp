import React from "react";
import {COLORS} from '../colors';
import { View, Button, Text, StyleSheet } from "react-native";

const Lists = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the List screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("Explore")} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: COLORS.background
  },
});

export default Lists;