import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const morning = [
  { id: 'todo1', title: '1. Wake up' },
  { id: 'todo2', title: '2. Brush the teeth' },
  { id: 'todo3', title: '3. Eat a Breakfast' },
  { id: 'todo4', title: '4. Prepare the things' },
  { id: 'todo5', title: '5. And go to shower' },
];

const afternoon = [
  { id: 'todo6', title: '6. I go to computer shop' },
  { id: 'todo7', title: '7. I played online games' },
  { id: 'todo8', title: '8. And go home' },
];

const evening = [
  { id: 'todo9', title: '9. Go to the shower' },
  { id: 'todo10', title: '10. Eat a dinner' },
  { id: 'todo11', title: '11. Washed the dishes' },
  { id: 'todo12', title: '12. Go to bed and sleep' },
 
];

const morningColors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6'];
const afternoonColors = ['#FFC300', '#FF5733', '#DAF7A6', '#33FF57', '#C70039'];
const eveningColors = ['#581845', '#900C3F', '#C70039', '#FF5733', '#FFBD33'];

const Item = ({ title, backgroundColor }) => (
  <View style={[styles.item, { backgroundColor }]}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionHeader}>Morning</Text>
      <FlatList
        data={morning}
        renderItem={({ item, index }) => <Item title={item.title} backgroundColor={morningColors[index]} />}
        keyExtractor={item => item.id}
      />

      <Text style={styles.sectionHeader}>Afternoon</Text>
      <FlatList
        data={afternoon}
        renderItem={({ item, index }) => <Item title={item.title} backgroundColor={afternoonColors[index]} />}
        keyExtractor={item => item.id}
      />

      <Text style={styles.sectionHeader}>Evening</Text>
      <FlatList
        data={evening}
        renderItem={({ item, index }) => <Item title={item.title} backgroundColor={eveningColors[index]} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
  },
  item: {
    padding: 20,
    margin:2,
  },
  title: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default App;