// src/screens/TimetableScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const timetable = {
  Monday: [
    { subject: 'Math', time: '9:00 - 10:00 AM', teacher: 'Mr. Smith' },
    { subject: 'English', time: '10:15 - 11:15 AM', teacher: 'Ms. Johnson' },
  ],
  Tuesday: [
    { subject: 'Physics', time: '9:00 - 10:00 AM', teacher: 'Dr. Brown' },
    { subject: 'Chemistry', time: '10:15 - 11:15 AM', teacher: 'Ms. Green' },
  ],
  Wednesday: [
    { subject: 'History', time: '9:00 - 10:00 AM', teacher: 'Mr. Davis' },
    { subject: 'Biology', time: '10:15 - 11:15 AM', teacher: 'Dr. Wilson' },
  ],
  Thursday: [
    { subject: 'Geography', time: '9:00 - 10:00 AM', teacher: 'Mrs. Adams' },
    { subject: 'Art', time: '10:15 - 11:15 AM', teacher: 'Ms. Lopez' },
  ],
  Friday: [
    { subject: 'Computer Science', time: '9:00 - 10:00 AM', teacher: 'Mr. Patel' },
    { subject: 'PE', time: '10:15 - 11:15 AM', teacher: 'Coach Lee' },
  ],
};

export default function TimetableScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📘 Weekly Timetable</Text>
      {Object.entries(timetable).map(([day, classes]) => (
        <View key={day} style={styles.daySection}>
          <Text style={styles.dayTitle}>{day}</Text>
          {classes.map((cls, idx) => (
            <View key={idx} style={styles.classCard}>
              <Text style={styles.classSubject}>{cls.subject}</Text>
              <Text style={styles.classTime}>{cls.time}</Text>
              <Text style={styles.classTeacher}>👨‍🏫 {cls.teacher}</Text>
            </View>
          ))}
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
    marginBottom: 12,
    color: '#1A535C',
  },
  daySection: {
    marginBottom: 24,
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4ECDC4',
    marginBottom: 10,
  },
  classCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  classSubject: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  classTime: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  classTeacher: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
