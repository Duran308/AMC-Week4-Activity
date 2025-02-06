import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const onPress = () => setCount(prevCount => prevCount + 1);

const morning = [
  {
    id: 'todo1',
    title: '1. Wake up',
  },
  {
    id: 'todo2',
    title: '2. Brush the teeth',
  },
  {
    id: 'todo3',
    title: '3. Eat a Breakfast',
  },
  {
    id: 'todo4',
    title: '4. Prepare the things',
  },
  {
        id: 'todo5',
    title: '5. And go to the shower',
  },
  
];
const afternoon = [
  {
    id: 'todo6',
    title: '6. I go to computer shop',
  },
  {
    id: 'todo7',
    title: '7. I played online games',
  },
  {
    id: 'todo8',
    title: '8. And go home ',
  },
  
];

const evening = [
  {
    id: 'todo9',
    title: '9. Go to the shower',
  },
  {
    id: 'todo10',
    title: '10. Eat a dinner',
  },
  {
    id: 'todo11',
    title: '11. Washed the dishes',
  },
 
   {
        id: 'todo12',
    title: '12. Go to the bed and  sleep',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (


  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>

 
    <Text       style={{
          borderColor: 'black',
          borderWidth: 5,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Morning </Text>
   
   
      <FlatList
        data={morning}
        renderItem={({item}) =>   <TouchableOpacity style={styles.button} onPress={onPress}><Item title={item.title}  /></TouchableOpacity>}
        keyExtractor={item => item.id}
      />

    <Text
    style={{
          borderColor: 'black',
          borderWidth: 5,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Afternoon </Text>

      <FlatList
        data={afternoon}
        renderItem={({item}) => <TouchableOpacity style={styles.button} onPress={onPress}><Item title={item.title}  /></TouchableOpacity>}
        keyExtractor={item => item.id}
      />

      <Text
      style={{
          borderColor: 'black',
          borderWidth: 5,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Evening </Text>

      <FlatList
        data={evening}
        renderItem={({item}) => <TouchableOpacity style={styles.button} onPress={onPress}><Item title={item.title}  /></TouchableOpacity>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'gold',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
 
});

export default App;