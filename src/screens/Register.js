import {useDispatch, useSelector} from "react-redux"
import { register } from "../redux/Actions/register.js";
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {COLORS} from '../../colors';
import { View, Button, Text, StyleSheet, TextInput, Image, TouchableHighlight, Icon } from "react-native";

const Register = ({ navigation }) => {

    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const serverAddress = useSelector(state => state.login.serverAddress);


    //make api call to login
    function submitRegister() {
       //create the post request body
        console.log(email);
      console.log(password);
       //create the post request body
        let body = {
            "name": name,
            "email": email,
            "password": password
        }
        //create the config header file for request
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        axios.post(serverAddress + '/auth/register', body, config)
            .then(response => {
                //setErrorMsg(false);
                //store username, email and jwt token in redux store
                dispatch(register({id: response.data.user.id, username: response.data.user.name, email: response.data.user.email, jwt: response.data.token}));
                console.log(response.data)
            })
            
    }

    return (
        <View style={styles.center}>
            <View style= {{width: 300, height: "100%", maxHeight: 500, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <Text style={{color: COLORS.primary, fontSize: 30, textAlign: "center"}}>Skitchen</Text>
                <Text style={{color: COLORS.light, fontSize: 15, textAlign: "center", marginBottom: 40}}>New? Just create an Account for free</Text>
        
                <View>

                    <View style={styles.SectionStyle}>
                      <Image
                        source={require('../icons/tabbar/profile-button-standart.png')}
                        style={styles.ImageStyle}
                      />
                      <TextInput
                        style={{ flex: 1, color: COLORS.light }}
                        placeholder="Username"
                        placeholderTextColor={COLORS.light}
                        underlineColorAndroid="transparent"
                        onChangeText={text => setName(text)}
                      />
                    </View>
                    <View style={styles.SectionStyle}>
                      <Image
                        source={require('../icons/email-icon.png')}
                        style={styles.ImageStyle}
                      />
                      <TextInput
                        style={{ flex: 1, color: COLORS.light }}
                        placeholder="Email"
                        placeholderTextColor={COLORS.light}
                        underlineColorAndroid="transparent"
                        onChangeText={text => setEmail(text)}
                      />
                    </View>
                    <View style={styles.SectionStyle}>
                      <Image
                        source={require('../icons/padlock-icon.png')}
                        style={styles.ImageStyle}
                      />
                      <TextInput
                        style={{ flex: 1, color: COLORS.light }}
                        placeholder="Password"
                        placeholderTextColor={COLORS.light}
                        underlineColorAndroid="transparent"
                        onChangeText={text => setPassword(text)}
                      />
                    </View>
                    <View style={styles.SectionStyle}>
                      <Image
                        source={require('../icons/padlock-icon.png')}
                        style={styles.ImageStyle}
                      />
                      <TextInput
                        style={{ flex: 1, color: COLORS.light }}
                        placeholder="Repeat password"
                        placeholderTextColor={COLORS.light}
                        underlineColorAndroid="transparent"
                        onChangeText={text => setPasswordRepeat(text)}
                      />
                    </View>
                </View>
        
                <View>
          
                    <TouchableHighlight 
                            style ={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "70%",
                                height: 50,
                                backgroundColor: COLORS.primary,
                                borderRadius: 15,
                                alignSelf: "center",
                                marginTop: 30
                            }}onPress={submitRegister}>
                            <Text style={{color: COLORS.light, fontSize: 17}}>REGISTER</Text>
                        </TouchableHighlight>
                    <Text style={styles.signupText} onPress={() => navigation.navigate('Login')}>Already have an account? <Text style={{color: COLORS.primary}}>Sign up</Text></Text>
                </View>        
            </View>       
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

  inputField: {
    height: 56,
    width: "100%", 
    borderRadius: 15,
    borderColor: COLORS.light, 
    borderWidth: 1, 
    backgroundColor: COLORS.alternative, 
    paddingLeft: 20, 
    paddingRight: 20, 
    color: COLORS.light,
    marginBottom: 15
  },

  passwordText: {
    color: COLORS.primary, 
    fontSize: 15, 
    textAlign: "right"
  },

  submitBtn: {
    width: "10px"
  },

  signupText: {
    textAlign: "center", 
    marginTop: 10, 
    color: COLORS.light
  },
  SectionStyle: {
    width: "100%",
    height: 56,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.alternative,
    borderWidth: 1,
    borderColor: COLORS.light,
    borderRadius: 15,
  },
  ImageStyle: {
    padding: 10,
    marginLeft: 20,
    marginRight: 5,
    height: 15,
    width: 15,
    resizeMode: 'stretch',
    alignItems: 'center',
  }
});

export default Register;