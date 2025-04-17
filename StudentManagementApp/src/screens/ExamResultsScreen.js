// src/screens/ExamResultsScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const results = [
  { subject: 'Mathematics', score: 92 },
  { subject: 'English', score: 85 },
  { subject: 'Science', score: 76 },
  { subject: 'History', score: 88 },
  { subject: 'Computer Science', score: 95 },
  { subject: 'Art', score: 67 },
];

const getBadgeColor = (score) => {
  if (score >= 90) return '#38b000';
  if (score >= 75) return '#ffb703';
  return '#ef476f';
};

export default function ExamResultsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📊 Exam Results</Text>
      {results.map((res, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.subject}>{res.subject}</Text>
            <View
              style={[styles.badge, { backgroundColor: getBadgeColor(res.score) }]}
            >
              <Text style={styles.badgeText}>{res.score}</Text>
            </View>
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
    backgroundColor: '#F0F4F8',
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
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subject: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  badge: {
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
