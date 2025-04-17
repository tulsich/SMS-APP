import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Attendance', 'Assignments', 'Exams'],
  data: [0.8, 0.6, 0.9],
};

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 8,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

const badges = [
  '🎖️ Attendance Streak',
  '⭐ Top Performer',
  '🔥 Homework Champ',
];

const ProgressDashboardScreen = () => {
  return (
    <FlatList
      ListHeaderComponent={
        <View>
          <Text style={styles.title}>📊 Your Progress</Text>
          <View style={styles.chartWrapper}>
            <ProgressChart
              data={data}
              width={screenWidth - 32}
              height={220}
              strokeWidth={16}
              radius={32}
              chartConfig={chartConfig}
              hideLegend={true} // hide default legend
              style={styles.chart}
            />

            <View style={styles.legendContainer}>
              <View style={styles.legendItem}>
                <View style={[styles.dot, { backgroundColor: '#00ff80' }]} />
                <Text style={styles.legendText}>Attendance 80%</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.dot, { backgroundColor: '#00cc66' }]} />
                <Text style={styles.legendText}>Assignments 60%</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.dot, { backgroundColor: '#00994d' }]} />
                <Text style={styles.legendText}>Exams 90%</Text>
              </View>
            </View>
          </View>
          <Text style={styles.subTitle}>🏆 Achievements</Text>
        </View>
      }
      data={badges}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item}</Text>
        </View>
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 24,
    marginBottom: 10,
    fontWeight: '600',
  },
  chartWrapper: {
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#1a1a1a',
    padding: 10,
    borderRadius: 16,
  },
  chart: {
    borderRadius: 16,
  },
  legendContainer: {
    marginTop: 10,
    width: '100%',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    paddingHorizontal: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  legendText: {
    color: '#fff',
    fontSize: 14,
  },
  badge: {
    backgroundColor: '#1E88E5',
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
  },
  badgeText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ProgressDashboardScreen;
