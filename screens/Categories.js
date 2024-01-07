import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

// Dummy data for categories - replace with actual data and images
const categories = [
  { id: '1', title: 'Rapping', image: require('../assets/img/Luffy.png'), selected: false },
  { id: '2', title: 'Cooking', image: require('../assets/img/Luffy.png'), selected: false },
  { id: '3', title: 'Eating', image: require('../assets/img/Luffy.png'), selected: false },
  { id: '4', title: 'Sleeping', image: require('../assets/img/Luffy.png'), selected: false },
  { id: '5', title: 'Grinding', image: require('../assets/img/Luffy.png'), selected: false },
  { id: '6', title: 'Limburg', image: require('../assets/img/Luffy.png'), selected: false },
  // ... more categories
];



const Categories = () => {
  const navigation = useNavigation();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [doneButtonDisabled, setDoneButtonDisabled] = useState(true);

  useEffect(() => {
    // Enable the "Done" button only when at least 3 categories are selected
    setDoneButtonDisabled(selectedCategories.length < 3);
  }, [selectedCategories]);

  const toggleCategory = (id) => {
    const newSelectedCategories = selectedCategories.includes(id)
      ? selectedCategories.filter((categoryId) => categoryId !== id)
      : [...selectedCategories, id];
    setSelectedCategories(newSelectedCategories);
  };

  const handleDone = () => {
    console.log('Selected Categories: ', selectedCategories);
    // Add navigation or next steps here
     // Initialize useNavigation hook
    navigation.navigate('TabNav'); // Replace 'NextScreen' with the actual screen name
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Category Selection</Text>
      <Text style={styles.subHeader}>Select at least 3 that most interest you</Text>
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryItem,
              selectedCategories.includes(category.id) && styles.categoryItemSelected,
            ]}
            onPress={() => toggleCategory(category.id)}
          >
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={[styles.doneButton, doneButtonDisabled && styles.doneButtonDisabled]}
        onPress={handleDone}
        disabled={doneButtonDisabled}
      >
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({


  doneButtonDisabled: {
    backgroundColor: '#A0A0A0', // Replace with the disabled button color of your choice
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
    textAlign: 'center',
    // Add other styling as needed
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    // Add other styling as needed
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // Add other styling as needed
  },
  categoryItem: {
    width: '40%',
    aspectRatio: 1,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    // Add other styling as needed
  },
  categoryItemSelected: {
    borderColor: '#0000FF', // Replace with the selection color of your choice
    borderWidth: 2,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    // Add other styling as needed
  },
  categoryTitle: {
    position: 'absolute',
    bottom: 0,
    fontSize: 18,
    color: '#fff', // Replace with the color of your choice
    // Add other styling as needed
  },
  doneButton: {
    backgroundColor: '#0000FF', // Replace with the button color of your choice
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: 'center',
    // Add other styling as needed
  },
  doneButtonText: {
    fontSize: 18,
    color: '#fff', // Replace with the color of your choice
    textAlign: 'center',
    // Add other styling as needed
  },
  // Add more styles as needed
});
export default Categories;
