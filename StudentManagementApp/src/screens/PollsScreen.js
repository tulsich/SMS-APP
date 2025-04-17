import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const quizQuestions = [
  {
    question: "What is the capital of Finland?",
    options: ["Stockholm", "Helsinki", "Oslo", "Copenhagen"],
    correctAnswer: "Helsinki",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
  },
  {
    question: "Which language is primarily used for Android development?",
    options: ["Swift", "Kotlin", "Python", "JavaScript"],
    correctAnswer: "Kotlin",
  },
];

const leaderboardData = [
  { id: '1', name: 'Anu', score: 10 },
  { id: '2', name: 'Pujan', score: 9 },
  { id: '3', name: 'Ville', score: 8 },
];

const PollsScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [correctCount, setCorrectCount] = useState(0);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionPress = (option) => {
    setSelected(option);
    if (option === currentQuestion.correctAnswer) {
      setCorrectCount(prev => prev + 1);
      setFeedback('✅ Correct! Great job!');
    } else {
      setFeedback('❌ Oops! Restarting quiz...');
      setTimeout(() => {
        setCurrentQuestionIndex(0);
        setSelected(null);
        setFeedback('');
        setCorrectCount(0);
      }, 1500);
    }
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelected(null);
      setFeedback('');
    } else {
      if (correctCount === quizQuestions.length) {
        setFeedback('🎉 Congratulations! You got all answers correct!');
      } else {
        setFeedback('✅ Quiz Completed. Great effort!');
      }
    }
  };

  const renderLeaderboard = ({ item }) => (
    <View style={styles.leaderboardItem}>
      <Text style={styles.leaderText}>{item.name}</Text>
      <Text style={styles.leaderScore}>{item.score} pts</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧠 Daily Quiz</Text>
      <Text style={styles.question}>{currentQuestion.question}</Text>

      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            selected === option && (option === currentQuestion.correctAnswer
              ? styles.correct
              : styles.incorrect)
          ]}
          onPress={() => handleOptionPress(option)}
          disabled={selected !== null}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}

      {selected !== null && currentQuestionIndex < quizQuestions.length && feedback.indexOf('Restarting') === -1 && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
          <Text style={styles.nextButtonText}>Next Question ➡️</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.subTitle}>🏆 Leaderboard</Text>
      <FlatList
        data={leaderboardData}
        renderItem={renderLeaderboard}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#121212',
    flex: 1
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10
  },
  question: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 15
  },
  optionButton: {
    backgroundColor: '#1E88E5',
    padding: 12,
    borderRadius: 10,
    marginVertical: 6
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  correct: {
    backgroundColor: '#43A047'
  },
  incorrect: {
    backgroundColor: '#E53935'
  },
  feedback: {
    fontSize: 16,
    marginVertical: 12,
    color: '#FFD700',
    fontWeight: '600',
    textAlign: 'center'
  },
  nextButton: {
    backgroundColor: '#FFC107',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10
  },
  nextButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginTop: 30,
    marginBottom: 10
  },
  leaderboardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1
  },
  leaderText: {
    color: '#fff',
    fontSize: 16
  },
  leaderScore: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default PollsScreen;
