import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function DashboardScreen({ navigation }) {
  const { theme, toggleTheme } = useTheme();

  const features = [
    { title: 'Profile', screen: 'Profile' },
    { title: 'Timetable', screen: 'Timetable' },
    { title: 'Messages', screen: 'Messages' },
    { title: 'Exam Results', screen: 'ExamResults' },
    { title: 'Attendance', screen: 'Attendance' },
    { title: 'Holiday List', screen: 'HolidayList' },
  ];

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>
        🎓 Student Dashboard
      </Text>

      <View style={styles.buttonGroup}>
        {features.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.card, { backgroundColor: theme.colors.card }]}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Text style={[styles.cardText, { color: theme.colors.text }]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.toggleContainer} onPress={toggleTheme}>
        <Text style={[styles.toggleText, { color: theme.colors.accent }]}>
          🌗 Toggle Dark Mode
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonGroup: {
    width: '100%',
  },
  card: {
    paddingVertical: 18,
    borderRadius: 14,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
  },
  toggleContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
