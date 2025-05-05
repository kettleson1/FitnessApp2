import React from 'react';
import { View, Text, Image, ScrollView, FlatList, StyleSheet } from 'react-native';

const PopularWorkoutPlans = [
  { id: '1', title: 'Full Body Workout', description: '45 minutes of full body exercise', duration: '45 min', imageUrl: 'https://images.unsplash.com/photo-1711623350002-d97138f35bf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '2', title: 'Cardio Blast', description: '30 minutes of intense cardio training', duration: '30 min', imageUrl: 'https://images.unsplash.com/photo-1723908902669-0878e08aa41c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '3', title: 'Yoga for Flexibility', description: '1 hour yoga session for flexibility', duration: '60 min', imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const IntenseWorkoutPlans = [
  { id: '1', title: 'Zumba Class', description: '30 minutes of zumba classes', duration: '30 min', imageUrl: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '2', title: 'Circuit Training', description: '20 minutes of circuit training', duration: '20 min', imageUrl: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2lyY3VpdCUyMHRyYWluaW5nfGVufDB8fDB8fHwy' },
  { id: '3', title: 'Pilate Training', description: '60 minutes of pilate training', duration: '20 min', imageUrl: 'https://images.unsplash.com/photo-1620134280013-e756c46affc6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const renderWorkoutCard = ({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text style={styles.cardDescription}>{item.description}</Text>
    <Text style={styles.cardDuration}>Duration: {item.duration}</Text>
  </View>
);

export default function FitnessWorld() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.header}>Start Your Fitness Journey</Text>
        <Text style={styles.workoutDescp}>Welcome to the fitness journey. Let’s crush your goals together!</Text>
        <Text style={styles.headerbenefits}>Benefits of Our Fitness Programs</Text>
        <Text style={styles.text}>Build muscle strength</Text>
        <Text style={styles.text}>Improve cardiovascular health</Text>
        <Text style={styles.text}>Increase flexibility and balance</Text>
        <Text style={styles.text}>Mental clarity and focus</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Popular Workout Plans</Text>
        <FlatList
          horizontal
          data={PopularWorkoutPlans}
          keyExtractor={(item) => item.id}
          renderItem={renderWorkoutCard}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Intense Workout Plans</Text>
        <FlatList
          horizontal
          data={IntenseWorkoutPlans}
          keyExtractor={(item) => item.id}
          renderItem={renderWorkoutCard}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ff7f00',
  },
  headerbenefits: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  workoutDescp: {
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  card: {
    width: 200,
    marginRight: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  cardDuration: {
    fontSize: 12,
    color: '#888',
  },
});
