import React from "react";
import {COLORS} from '../../colors';
import { View, StyleSheet, Text } from "react-native";

const Profile = () => {
  return (
    <View style={styles.center}>
      <Text>This is the profile screen</Text>
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

export default Profile;