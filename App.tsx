import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  //string 
  const [name, setName] = useState("Dương_Huy");

  //number
  const [age, setAge] = useState(0);

  //null, undefined, boolean

  //object, array
  const [person, setPerson] = useState({
    name: "Dương_Huy",
    age: 25,
    address: {
      street: "123 Main St",
      city: "New York"
    }
  });

  return (
    <View style={styles.container}>
      <View>
        <Text>{name}</Text>
        <Text>{JSON.stringify(person)}</Text>
      </View>
      <Text>hello word Duong Huy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
