import React from 'react';
import { ChatMessage } from '../types';

const messages: ChatMessage[] = [
  { user: "User1", message: "Hello, how do I complete the task?" },
  { user: "User2", message: "You need to follow the instructions in Lesson 2." }
];

export const ChatBox: React.FC = () => (
  <div className="space-y-1">
    {messages.map((msg, i) => (
      <p key={i}><strong>{msg.user}:</strong> {msg.message}</p>
    ))}
  </div>
);
