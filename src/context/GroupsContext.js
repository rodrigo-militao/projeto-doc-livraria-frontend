import React, { useState, useContext } from 'react';

const GroupsContext = React.createContext();

export function useGroupsContext() {
  return useContext(GroupsContext);
}

export function GroupsProvider({ children }) {
  const [groups, setGroups] = useState([]);

  return (
    <GroupsContext.Provider value={{groups, setGroups}}>
      {children}
    </GroupsContext.Provider>
  ); 
}