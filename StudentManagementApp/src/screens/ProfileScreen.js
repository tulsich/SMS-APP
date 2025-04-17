import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [avatar, setAvatar] = useState('https://i.pravatar.cc/150?img=65');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  const user = {
    name: 'Pujan Modi',
    email: 'pujan.modi@example.com',
    role: 'Student',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <Text style={styles.changeText}>Tap to change avatar</Text>
      </TouchableOpacity>

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.role}>{user.role}</Text>

      <View style={styles.card}>
        <MaterialIcons name="phone" size={24} color="#1A535C" />
        <Text style={styles.cardText}>+358 123 456 789</Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="location" size={24} color="#1A535C" />
        <Text style={styles.cardText}>Turku, Finland</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 80,
    backgroundColor: '#E8F0F2',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4ECDC4',
    marginBottom: 8,
  },
  changeText: {
    fontSize: 13,
    color: '#888',
    marginBottom: 15,
    textAlign: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A535C',
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  role: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '85%',
    padding: 15,
    borderRadius: 15,
    marginVertical: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#222',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#1A535C',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
