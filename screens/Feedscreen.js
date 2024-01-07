import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Feedscreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Text style={styles.appName}>App name</Text>
        </View>
        <View style={styles.rightHeader}>
          <TouchableOpacity onPress={() => {/* handle press */}}>
            <Image
              source={require('../assets/berichten.png')} // Replace with your settings icon
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchSection}>
        {/* Add search bar and buttons */}
      </View>
      <View style={styles.content}>
        {/* This is where your main content goes */}
      </View>
      <View style={styles.navBar}>
        {/* Navigation bar content */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Assuming a white background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align items horizontally
    alignItems: 'center',
    padding: 40,
  },
  leftHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightHeader: {
    marginLeft: 'auto',
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000', // Replace with the actual color from your design
    marginRight: -20, // Adjust as needed
  },
  icon: {
    width: 24, // Replace with the actual size of your icons
    height: 24,
  },
  searchSection: {
    // Add styles for your search section
  },
  content: {
    flex: 1,
    // Add styles for your main content area
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0', // Replace with the actual color from your design
    // Add styles for your bottom navigation bar
  },
  // Add more styles as needed
});

export default Feedscreen;
