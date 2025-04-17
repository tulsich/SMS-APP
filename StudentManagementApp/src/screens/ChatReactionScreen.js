import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const mockMessages = [
  { id: '1', sender: 'Teacher', content: '📢 Don’t forget the exam on Friday!', reactions: [] },
  { id: '2', sender: 'Principal', content: '🌟 Great performance in the school play!', reactions: [] },
  { id: '3', sender: 'Teacher', content: '📝 Homework due tomorrow.', reactions: [] },
];

const reactionOptions = ['👍', '❤️', '😂', '😢'];

const quickReplies = ['Got it', 'Thanks', 'Noted'];

const ChatReactionScreen = () => {
  const [messages, setMessages] = useState(mockMessages);

  const addReaction = (id, emoji) => {
    const updated = messages.map((msg) => {
      if (msg.id === id) {
        return { ...msg, reactions: [...msg.reactions, emoji] };
      }
      return msg;
    });
    setMessages(updated);
  };

  const renderMessage = ({ item }) => (
    <View style={styles.messageCard}>
      <Text style={styles.sender}>{item.sender}:</Text>
      <Text style={styles.content}>{item.content}</Text>

      <View style={styles.reactionRow}>
        {reactionOptions.map((emoji, index) => (
          <TouchableOpacity key={index} onPress={() => addReaction(item.id, emoji)}>
            <Text style={styles.emoji}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.reactionDisplay}>
        {item.reactions.length > 0 ? item.reactions.map((r, i) => (
          <Text key={i} style={styles.reaction}>{r}</Text>
        )) : <Text style={styles.noReaction}>No reactions yet</Text>}
      </View>

      <View style={styles.replyRow}>
        {quickReplies.map((reply, i) => (
          <TouchableOpacity key={i} style={styles.replyButton}>
            <Text style={styles.replyText}>{reply}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💬 Messages</Text>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    padding: 16
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10
  },
  messageCard: {
    backgroundColor: '#1F1F1F',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16
  },
  sender: {
    fontWeight: '600',
    color: '#90CAF9',
    marginBottom: 4
  },
  content: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10
  },
  reactionRow: {
    flexDirection: 'row',
    marginBottom: 8
  },
  emoji: {
    fontSize: 22,
    marginRight: 10
  },
  reactionDisplay: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8
  },
  reaction: {
    fontSize: 16,
    marginRight: 8
  },
  noReaction: {
    color: '#888',
    fontStyle: 'italic'
  },
  replyRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10
  },
  replyButton: {
    backgroundColor: '#3949AB',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8
  },
  replyText: {
    color: '#fff',
    fontSize: 14
  }
});

export default ChatReactionScreen;
