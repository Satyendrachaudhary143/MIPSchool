import React, { useState } from 'react';

const TeacherGroup = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real application, this would send the message to a backend
      setMessages([...messages, { text: message, sender: 'Teacher Name' }]); // Placeholder sender
      setMessage('');
    }
  };

  // Placeholder data for teacher group information
  const groupInfo = {
    name: 'Faculty Discussion Group',
    description: 'A group for teachers to discuss school matters, share resources, and collaborate.',
    members: [
      { id: 1, name: 'Teacher Name 1' },
      { id: 2, name: 'Teacher Name 2' },
      { id: 3, name: 'Teacher Name 3' },
    ],
    recentPosts: [
      { id: 1, author: 'Teacher Name 1', content: 'Reminder about the staff meeting today.', date: '2024-03-17' },
      { id: 2, author: 'Teacher Name 2', content: 'Has anyone finalized the science fair judging criteria?', date: '2024-03-16' },
    ],
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Group Information (Teachers)</h2>

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

      {/* Group Chat (Basic Placeholder) */}
      <div className="space-y-4 md:space-y-6">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">Group Chat</h3>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col h-64 overflow-y-auto">
          <div className="flex-grow space-y-3">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'Teacher Name' ? 'justify-end' : 'justify-start'}`}>
                  <span className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'Teacher Name' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'}`}>
                    {msg.text}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No messages yet. Start the conversation!</p>
            )}
          </div>
        </div>
        <form onSubmit={handleSendMessage} className="mt-4 flex space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Send</button>
        </form>
      </div>
    </div>
  );
};

export default TeacherGroup; 