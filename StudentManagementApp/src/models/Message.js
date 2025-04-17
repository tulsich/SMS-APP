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
      <Text style={styles.meta}>📨 From: {item.sender}</Text>
      <Text style={styles.body}>{item.body}</Text>
      <Text style={styles.date}>📅 {item.getFormattedDate()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📬 Messages</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 50,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 14,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 5,
  },
  meta: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    color: '#334155',
    marginBottom: 10,
  },
  date: {
    fontSize: 13,
    color: '#94a3b8',
    textAlign: 'right',
  },
});
