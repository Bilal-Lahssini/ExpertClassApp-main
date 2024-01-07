import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profilescreen = () => {
  // Replace with your actual icons and images paths
  const backIcon = require('../assets/backicon.png');
  const moreIcon = require('../assets/moreicon.png'); 
  const profileImage = require('../assets/img/Luffy.png');
  // Dummy data for the profile
  const profileData = {
    name: 'Armin Barzegar',
    role: 'Designer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    stats: {
      posts: 100,
      followers: 100,
      following: 100,
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={backIcon} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.name}>{profileData.name}</Text>
        <TouchableOpacity>
          <Image source={moreIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileSection}>
        <Image source={profileImage} style={styles.profilePic} />
        <Text style={styles.role}>{profileData.role}</Text>
        <Text style={styles.bio}>{profileData.bio}</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{profileData.stats.posts}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{profileData.stats.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{profileData.stats.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
        {/* Add content grid or list */}
      </View>
      {/* Add bottom navigation bar */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Replace with the actual color from your design
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
    marginTop: 25,
  },
  icon: {
    width: 24, // Replace with the actual size of your icons
    height: 24,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    // Add your styling here
  },
  profileSection: {
    alignItems: 'center',
    padding: 16, // Adjusted padding
  },
  profilePic: {
    width: 120, // Adjusted width
    height: 120, // Adjusted height
    borderRadius: 60, // Half of the width/height to make it round
    marginBottom: 16, // Added margin at the bottom
    // Add your styling here
  },
  role: {
    // Add your styling here
  },
  bio: {
    // Add your styling here
    textAlign: 'center', // Centered text
    marginVertical: 16, // Added vertical margin
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16, // Added margin at the top
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    // Add your styling here
  },
  statLabel: {
    fontSize: 12,
    color: '#888888', // Add your color code
    // Add your styling here
  },
  // Add more styles as needed
});

export default Profilescreen;
