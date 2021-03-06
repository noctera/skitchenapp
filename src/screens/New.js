import React, {useState, useEffect} from "react";
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import {COLORS} from '../../colors';
import {useSelector} from "react-redux"
import { View, StyleSheet, Text, Image, ScrollView, TextInput, TouchableOpacity } from "react-native";
import Slider from '@react-native-community/slider';
import * as ImagePicker from "react-native-image-picker";
import Tab from '../Components/Tab';

const New = () => {

  const [categories, setCategories] = useState([]);

  const serverAddress = useSelector(state => state.login.serverAddress);
  const jwt = useSelector(state => state.login.user.jwt);

  const [image, setImage] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("None");
  const [duration, setDuration] = useState(0)


  useEffect(() => {
    fetchCategories();
  }, []);

  //fetch categories from the server
  function fetchCategories() {

    axios.get( serverAddress + '/category', {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    })
    .then((res) => {
      setCategories(res.data.categories)
      console.log(res.data.categories)
    })
    .catch((error) => {
      console.error(error)
    })
  }


  //choose cover image from gallery
  handleChoosePhoto = () => {

    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(options, response => {
      if(response.uri) {
        setImage(response)
      }
    });
  }

  return (   
    <ScrollView style={{backgroundColor: COLORS.background}}>
      <View style={styles.center}>
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.addImage} onPress={handleChoosePhoto}>
            <Image style={styles.image} source={require("../icons/image-standart.png")} />
            <Text style={styles.addImageText}>Please upload a vertical cover image</Text>
          </TouchableOpacity>

          <Text style={styles.headingFont}>Name</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your Food name"
            placeholderTextColor={COLORS.light}
            underlineColorAndroid="transparent"
            onChangeText={text => setPassword(text)}
          />

          <Text style={styles.headingFont}>Category</Text>
          <View
            style={styles.pickerView}>
            <Picker
              selectedValue={selectedCategory}
              style={styles.categoryDropdown}
              onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
            >
              <Picker.Item label="None" value="None" />

              {categories.map((category, index) => 
                <Picker.Item key={category.id} label={category.name} value={category.id} />
              )}

            </Picker>
          </View>

          <View>
            <Text style={styles.headingFont}>
              Duration (in minutes)
            </Text>
            <View style={styles.durationCounterWrapper}>
              <Text style={styles.durationCounter}>
                {duration}
              </Text>
            </View>
            
            <Slider
              style={{width: "100%", height: 40}}
              step={1}
              minimumValue={0}
              maximumValue={300}
              minimumTrackTintColor={COLORS.primary}
              maximumTrackTintColor={COLORS.light}
              thumbTintColor={COLORS.primary}
              onValueChange={value => setDuration(value)}
            />
          </View>
          
          <TouchableOpacity onPress={() => console.log("Category: " + selectedCategory + ", Duration: " + duration)} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>SUBMIT</Text>
          </TouchableOpacity>

          {image && (
            <Image
              source={{ uri: image.uri }}
              style={ { width: 300, height: 300 } }
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
  center: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: COLORS.background
  },
  wrapper: {
    width: "80%",
    maxWidth: 500,
  },
  addImage: {
    width: "100%",
    maxWidth: 500,
    height: 150,
    borderRadius: 15,
    borderWidth: 3,
    borderStyle: "dashed",
    borderColor: COLORS.light,
    marginTop: 40
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
  addImageText: {
    color: COLORS.light,
    textAlign: "center",
    marginTop: 10
  },
  inputField: {
    width: "100%",
    height: 56,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.alternative,
    borderWidth: 1,
    paddingLeft: 15,
    borderColor: COLORS.light,
    borderRadius: 15,
  },
  headingFont: {
    marginTop: 30, 
    marginBottom: 5, 
    fontSize: 17, 
    color: COLORS.primary
  },
  pickerView: {
    backgroundColor: COLORS.alternative,
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 10,
    borderColor: COLORS.light,
    overflow: "hidden"
  },
  categoryDropdown: {
    width: "100%",
    height: 56,
    backgroundColor: COLORS.alternative,
    color: COLORS.light
  },
  durationCounterWrapper: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "transparent",
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.light
  },
  durationCounter: {
    color: COLORS.light,
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 15,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default New;