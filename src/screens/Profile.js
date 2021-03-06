import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {COLORS} from '../../colors';
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import {useDispatch, useSelector} from "react-redux";
import { Buffer } from "buffer";

const Profile = () => {

  const serverAddress = useSelector(state => state.login.serverAddress);
  const jwt = useSelector(state => state.login.user.jwt);

  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [followerCount, setFollowerCount] = useState("");
  const [subscriberCount, setSubscriberCount] = useState("");
  const [recipeCount, setRecipeCount] = useState("");
  

  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  //fetch profile information from the server
  function fetchProfile() {

    axios.get( serverAddress + '/profile', {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    })
    .then((res) => {
      setUsername(res.data.name)
      //check if description is available
      if(res.data.description === '') {
        //if not return a string
        setDescription("No description provided");
      }
      else {
        setDescription(res.data.description);
      }
      setFollowerCount(res.data.followerCount);
      setSubscriberCount(res.data.subscriberCount);
      setRecipeCount(res.data.recipeCount);

    })
    .catch((error) => {
      console.error(error)
    })
  }

  let recipes;

  if (recipeCount === "0") {
    recipes = <Text>No recipes yet</Text>;
  } else {
    recipes = <Text>Here are your recipes</Text>;
  }


  return (
    <ScrollView style={styles.profile}>
      <View style={styles.profileWrapper}>
        <Image source={{ uri: serverAddress + "/bf827ee6-291a-4dab-97f1-a740939e9e65/avatar?time=" + new Date(),
        headers: {
          'Authorization': `Bearer ${jwt}`
        }
      }} style={styles.avatar}/>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.statusBar}>
        <Text style={styles.statusBarItems}>{recipeCount} Recipes</Text>
        <Text style={styles.statusBarItems}>{followerCount} Followers</Text>
        <Text style={styles.statusBarItems}>{subscriberCount} Following</Text>
      </View>
      <View style={styles.divideLine}/>
      {recipes}
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  profile: {
    backgroundColor: COLORS.background
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: 100,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 100 / 2,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: COLORS.primary
  },
  username: {
    color: COLORS.light,
    fontSize: 25,
    textAlign: "center",
    marginTop: 20
  },
  description: {
    marginTop: 20,
    color: COLORS.light,
    textAlign: "center"
  },
  profileWrapper: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  statusBar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 20
  },
  statusBarItems: {
    color: COLORS.light,
    fontSize: 15
  },
  divideLine: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: COLORS.light,
    borderBottomWidth: 1,
  }
});

export default Profile;