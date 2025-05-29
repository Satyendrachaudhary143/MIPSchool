import React, { useState } from 'react';

const Group = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'You' }]);
      setMessage('');
    }
  };

  // Placeholder data for group information
  const groupInfo = {
    name: 'Class 12A Study Group',
    description: 'A group for 12A students to discuss subjects, share notes, and collaborate on projects.',
    members: [
      { id: 1, name: 'Student Name 1' },
      { id: 2, name: 'Student Name 2' },
      { id: 3, name: 'Student Name 3' },
      { id: 4, name: 'Student Name 4' },
      { id: 5, name: 'Student Name 5' },
    ],
    recentPosts: [
      { id: 1, author: 'Student Name 1', content: 'Hey everyone, anyone have notes for the Physics chapter on Optics?', date: '2024-03-15' },
      { id: 2, author: 'Student Name 3', content: 'Yeah, I can share mine. Will upload them to the shared drive soon.', date: '2024-03-15' },
      { id: 3, author: 'Student Name 2', content: 'Thanks! Also, reminder about the group study session tomorrow at 4 PM.', date: '2024-03-14' },
    ],
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Group Information</h2>

      {/* Group Details */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md space-y-3 md:space-y-4">
        <h3 className="text-lg md:text-xl font-semibold text-blue-600">{groupInfo.name}</h3>
        <p className="text-sm md:text-base text-gray-700">{groupInfo.description}</p>
      </div>

      {/* Group Members */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Members</h3>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {groupInfo.members.map((member) => (
            <span key={member.id} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              {member.name}
            </span>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Recent Posts</h3>
        {groupInfo.recentPosts.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {groupInfo.recentPosts.map((post) => (
              <li key={post.id} className="py-4">
                <div className="flex flex-col md:flex-row md:justify-between mb-1 md:mb-0">
                  <p className="text-sm md:text-base font-semibold text-gray-800">{post.author}</p>
                  <p className="text-xs md:text-sm text-gray-500 flex-shrink-0">{post.date}</p>
                </div>
                <p className="text-sm md:text-base text-gray-700">{post.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No recent posts.</p>
        )}
      </div>

      <div className="space-y-6 flex flex-col h-full">
        <h2 className="text-3xl font-bold text-gray-800">Group Chat</h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col flex-grow">
          <div className="flex-grow border border-gray-300 rounded-md p-4 overflow-y-auto space-y-3">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                  <span className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'You' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'}`}>
                    {msg.text}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No messages yet. Start the conversation!</p>
            )}
          </div>
          <form onSubmit={handleSendMessage} className="mt-4 flex space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Group; 