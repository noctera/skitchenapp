import React from "react";
import {COLORS} from '../../colors';
import { View, Button, Text, StyleSheet, Image, ScrollView  } from "react-native";

const Home = ({ navigation }) => {
  return (
    <ScrollView vertical={true}>
    <ScrollView>

    </ScrollView>
  </ScrollView>
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

export default Home;