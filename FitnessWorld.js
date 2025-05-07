import React from 'react';
import { View, Text, Image, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

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
const BeginnerPlan = [
  {
    id: '1',
    title: 'Beginner Yoga',
    description: '30 mins of guided yoga for beginners',
    duration: '30 min',
    imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Light Cardio',
    description: '20 mins of low-impact cardio',
    duration: '20 min',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-d744cb3c8f5f?auto=format&fit=crop&w=800&q=80',
  },
];

const IntermediatePlan = [
  {
    id: '1',
    title: 'Power Pilates',
    description: '45 mins of full-body pilates',
    duration: '45 min',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-aaa4ff469af6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Core Training',
    description: '30 mins of core strength exercises',
    duration: '30 min',
    imageUrl: 'https://images.unsplash.com/photo-1571019613913-37d6a4d2a79f?auto=format&fit=crop&w=800&q=80',
  },
];





export default function FitnessWorld() {
const renderWorkout = ({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text style={styles.cardDescription}>{item.description}</Text>
    <Text style={styles.cardDuration}>Duration: {item.duration}</Text>
    <TouchableOpacity
      style={styles.joinButton}
      onPress={() => alert(`Joined ${item.title}`)}
      testID="joinWorkoutButton"
    >
      <Text style={styles.buttonText}>Join Now</Text>
    </TouchableOpacity>
  </View>
);




  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.header}>Start Your Fitness Journey</Text>
        <Text style={styles.workoutDescp}>Welcome to the fitness journey. Let’s crush your goals together!</Text>
        <TouchableOpacity
          style={styles.joinButton}
          onPress={() => alert('Joined Fitness Journey')}
        testID="joinWorkoutButton"
      >
  <Text style={styles.buttonText}>Join Now</Text>
</TouchableOpacity>
        <Text style={styles.headerbenefits}>Benefits of Our Fitness Programs</Text>
        <Text style={styles.text}>Build muscle strength</Text>
        <Text style={styles.text}>Improve cardiovascular health</Text>
        <Text style={styles.text}>Increase flexibility and balance</Text>
        <Text style={styles.text}>Mental clarity and focus</Text>
      </View>

      {/* Featured Traning Types Section */}
      <View style={styles.section}>
        <Text style={styles.header}>Featured Training Types</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.trainingTypeCard}>
          <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1589579234096-25cb6b83e021?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
           }}
          style={styles.trainingImage}
          />
          <Text style={styles.trainingTypeText}>Strength Training</Text>
      </View>
      <View style={styles.trainingTypeCard}>
    <Image
      source={{
        uri: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80',
      }}
      style={styles.trainingImage}
    />
    <Text style={styles.trainingTypeText}>Cardio</Text>
  </View>

  <View style={styles.trainingTypeCard}>
  <Image
    source={{
      uri: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80',
    }}
    style={styles.trainingImage}
  />
  <Text style={styles.trainingTypeText}>Yoga</Text>
</View>
        </ScrollView>
      </View>
         

      <View style={styles.section}>
        <Text style={styles.heading}>Popular Workout Plans</Text>
        <FlatList
          data={PopularWorkoutPlans}
          renderItem={renderWorkout}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}  
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Intense Workout Plans</Text>
        <FlatList
          data={IntenseWorkoutPlans}
          keyExtractor={(item) => item.id}
          renderItem={renderWorkoutCard}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}  
        />
      </View>

      <View style={styles.section}>
      <Text style={styles.header}>Beginner's Workout Plan</Text>
      <FlatList
         data={BeginnerPlan}
         renderItem={renderWorkout}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}  
      />
    </View>

    <View style={styles.section}>
    <Text style={styles.header}>Intermediate Workout Plan</Text>
    <FlatList
      data={IntermediatePlan}
      renderItem={renderWorkout}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}  
    />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'darkgray',
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
    color: '#ff7f00',
  },
  

  headerbenefits: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 20,
    textAlign: 'center',
    color: 'white',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
    color: '#fff',
  },
  workoutDescp: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  card: {
    width: 200,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
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

  trainingTypeCard: {
    marginRight: 20,
    width: 150,
    alignItems: 'center',
  },
  
  trainingTypeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  trainingImage: {
    width: 100,
    height: 100,
    borderRadius: 75,
  },
  trainingTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  joinButton: {
    marginTop: 10,
    backgroundColor: '#ff7f00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
