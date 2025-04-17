// src/screens/NoticeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notices = [
  {
    title: 'Mid-Term Exams Start Next Monday 📚',
    date: 'April 22, 2025',
    type: 'info',
  },
  {
    title: 'Campus Closed on May Day 🚫',
    date: 'May 1, 2025',
    type: 'alert',
  },
  {
    title: 'Library Open Till 8 PM This Week 📖',
    date: 'April 17, 2025',
    type: 'info',
  },
  {
    title: 'New Sports Gear Available at Gym 🏀',
    date: 'April 15, 2025',
    type: 'info',
  },
];

const getIconColor = (type) => {
  return type === 'alert' ? '#ef476f' : '#4ECDC4';
};

export default function NoticeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📢 Notices</Text>
      {notices.map((notice, index) => (
        <View key={index} style={styles.card}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={getIconColor(notice.type)}
            style={{ marginRight: 12 }}
          />
          <View>
            <Text style={styles.noticeText}>{notice.title}</Text>
            <Text style={styles.date}>{notice.date}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 100,
    backgroundColor: '#F8F9FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A535C',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  noticeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  date: {
    fontSize: 13,
    color: '#777',
  },
});
