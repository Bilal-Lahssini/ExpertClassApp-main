import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { users } from '../application/users';

const Login = () => {
  const navigation = useNavigation(); // Initialize useNavigation hook
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Find the user in the JSON file based on the entered username
    const user = users.find((u) => u.username === username);

    if (user && user.password === password) {
      // Login successful
      // Navigate to the next screen
      navigation.navigate('Categories'); // Replace 'NextScreen' with the actual screen name
    } else {
      // Login failed
      Alert.alert('Error', 'Incorrect username or password. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={require('../assets/img/Luffy.png')} style={styles.logo} />
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Please sign in to continue.</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login →</Text>
        </TouchableOpacity>
        <View style={styles.indicatorContainer}>
          {/* Render your indicators here */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Important to enable scrolling
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF', // Assuming the background is white
  },
  logo: {
    width: 100, // Set the size of your logo
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000', // Replace with your actual color code
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#606060', // Replace with your actual color code
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F0F0F0', // Replace with your actual color code
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#E0E0E0', // Replace with your actual color code
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#000000', // Replace with your actual color code
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: 200,
    // Add styles for your indicator container
  },
  // Add styles for your indicators
});

export default Login;
