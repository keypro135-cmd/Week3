import React, {useState} from 'react';
import Logo from './components/Logo';

import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

import { Card } from 'react-native-paper';

import AssetExample from './components/AssetExample';

export default function App() {

  const [fname, setFname] = useState("Joe");
  const [lname, setLname] = useState("Bloggs");
  const [dob, setDob] = useState("13 February 1991");

  function buttonClicked() {
    alert("Hello " + fname + " " + lname + ". You were born on " + dob);
  }

  return (

    <View style={styles.container}>

      <Logo />

      <TextInput placeholder="Enter your firstname" onChangeText={setFname}/>
      <TextInput placeholder="Enter your lastname" onChangeText={setLname}/>
      <TextInput placeholder="Enter your date of birth" onChangeText={setDob}/>

      <Text>Hello {fname} {lname}. You were born on {dob}</Text>

      <Button title="SUBMIT" onPress={buttonClicked}/>

      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>

      <Card>
        <AssetExample />
      </Card>

    </View>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});