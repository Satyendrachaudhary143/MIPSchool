import React, { useState } from 'react';

const ManagerGroup = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [groups, setGroups] = useState([
    // More detailed placeholder data for groups
    { id: 1, name: '10th Grade Science Club', description: 'Group for 10th graders interested in science experiments and learning.', creator: 'Teacher A (T001)', type: 'Academic', members: ['Student A (S001)', 'Student B (S002)', 'Teacher A (T001)', 'Student D (S004)'] },
    { id: 2, name: 'School Debate Team', description: 'Practice and discussion for the school debate team. Preparing for inter-school debates.', creator: 'Teacher B (T002)', type: 'Club', members: ['Student B (S002)', 'Student C (S003)', 'Teacher B (T002)'] },
    { id: 3, name: 'All Staff Updates', description: 'Important administrative updates and announcements for all school staff.', creator: 'Manager John Smith', type: 'Administrative', members: ['Teacher A (T001)', 'Teacher B (T002)', 'Manager John Smith'] },
    { id: 4, name: '11th Grade Study Group - Physics', description: 'Collaborative study group for 11th-grade Physics students.', creator: 'Student D (S004)', type: 'Academic', members: ['Student D (S004)', 'Student E (S005)'] },
  ]);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDescription, setNewGroupDescription] = useState('');
  const [newGroupType, setNewGroupType] = useState('Academic');
  const [memberToAdd, setMemberToAdd] = useState(''); // Input for adding members

  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
    setMemberToAdd(''); // Clear add member input when selecting a new group
  };

  const handleCreateGroup = () => {
    if (newGroupName.trim() === '') return;
    const newGroup = {
      id: groups.length + 1,
      name: newGroupName,
      description: newGroupDescription,
      creator: 'Manager John Smith', // Manager is the creator by default
      type: newGroupType,
      members: ['Manager John Smith']
    };
    setGroups([...groups, newGroup]);
    setNewGroupName('');
    setNewGroupDescription('');
    setNewGroupType('Academic');
  };

  const handleDeleteGroup = (groupId) => {
    setGroups(groups.filter(group => group.id !== groupId));
    setSelectedGroup(null); // Deselect if the deleted group was selected
  };

  const handleAddMember = (groupId) => {
    if (memberToAdd.trim() === '') return;
    setGroups(groups.map(group =>
      group.id === groupId ? { ...group, members: [...group.members, memberToAdd] } : group
    ));
    setMemberToAdd(''); // Clear input after adding
  };

  const handleRemoveMember = (groupId, memberToRemove) => {
    setGroups(groups.map(group =>
      group.id === groupId ? { ...group, members: group.members.filter(member => member !== memberToRemove) } : group
    ));
    // If the removed member was selected in the add input, clear it
    if (memberToRemove === memberToAdd) {
      setMemberToAdd('');
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Manage School Groups</h2>

      {/* Group Creation */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Create New Group</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="groupName" className="block text-sm font-medium text-gray-700">Group Name</label>
            <input
              type="text"
              id="groupName"
              placeholder="Enter group name"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="groupDescription" className="block text-sm font-medium text-gray-700">Description (Optional)</label>
            <input
              type="text"
              id="groupDescription"
              placeholder="Enter description"
              value={newGroupDescription}
              onChange={(e) => setNewGroupDescription(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="groupType" className="block text-sm font-medium text-gray-700">Group Type</label>
            <select
              id="groupType"
              value={newGroupType}
              onChange={(e) => setNewGroupType(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="Academic">Academic</option>
              <option value="Club">Club</option>
              <option value="Administrative">Administrative</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={handleCreateGroup}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Create Group
          </button>
        </div>
      </div>

      {/* Group List */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Existing Groups</h3>
        {groups.length > 0 ? (
          <div className="overflow-x-auto">
            <ul className="divide-y divide-gray-200">
              {groups.map((group) => (
                <li
                  key={group.id}
                  className={`py-3 px-2 -mx-2 rounded-md cursor-pointer ${selectedGroup?.id === group.id ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                  onClick={() => handleSelectGroup(group)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium text-gray-900">{group.name} <span className="text-sm text-gray-500">({group.type})</span></p>
                      {group.description && <p className="text-sm text-gray-600 truncate">{group.description}</p>}
                      <p className="text-xs text-gray-500">Created by: {group.creator}</p>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDeleteGroup(group.id); }}
                      className="text-red-600 hover:text-red-900 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-600">No groups created yet.</p>
        )}
      </div>

      {/* Selected Group Details and Member Management */}
      {selectedGroup && (
        <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Manage '{selectedGroup.name}'</h3>
          <p className="text-sm text-gray-700 mb-4">{selectedGroup.description}</p>
          <p className="text-sm text-gray-700 mb-4">Type: {selectedGroup.type} | Creator: {selectedGroup.creator}</p>

          {/* Add Member */}
          <div className="mb-6 p-4 bg-gray-100 rounded-md">
            <h4 className="text-md font-semibold mb-2">Add Member</h4>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter Student/Teacher ID or Name"
                value={memberToAdd}
                onChange={(e) => setMemberToAdd(e.target.value)}
                className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <button
                onClick={() => handleAddMember(selectedGroup.id)}
                className="w-full md:w-auto px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Add Member
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">Enter the full name or ID of the student or teacher to add.</p>
          </div>

          {/* Member List */}
          <h4 className="text-md font-semibold mb-2">Members ({selectedGroup.members.length})</h4>
          {selectedGroup.members.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {selectedGroup.members.map((member, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member}</td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {/* Prevent removing the manager who created an administrative group */}
                        {!(selectedGroup.type === 'Administrative' && member.includes('Manager')) && (
                          <button
                            onClick={() => handleRemoveMember(selectedGroup.id, member)}
                            className="text-red-600 hover:text-red-900 text-sm"
                          >
                            Remove
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-600">No members in this group yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ManagerGroup; 