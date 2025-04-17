// src/screens/MessagesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Message from '../models/Message';

export default function MessagesScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const sampleMessages = [
      new Message(1, 'Principal', 'Welcome to the app!', 'We are excited to have you onboard.', '2025-04-01'),
      new Message(2, 'Math Teacher', 'Test Reminder', 'Chapter 5 test on Friday.', '2025-04-10'),
      new Message(3, 'Admin', 'Fee Update', 'New fee schedule uploaded.', '2025-04-12'),
    ];
    setMessages(sampleMessages);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.sender}>From: {item.sender}</Text>
      <Text style={styles.body}>{item.body}</Text>
      <Text style={styles.date}>{item.getFormattedDate()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Messages</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  card: { padding: 15, backgroundColor: '#f0f0f0', borderRadius: 10, marginBottom: 15 },
  title: { fontSize: 18, fontWeight: 'bold' },
  sender: { fontSize: 14, color: '#555' },
  body: { marginTop: 5 },
  date: { marginTop: 10, fontSize: 12, color: 'gray', textAlign: 'right' },
});
