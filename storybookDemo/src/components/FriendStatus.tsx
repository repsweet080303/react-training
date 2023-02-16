import React from 'react';
import { useState, useEffect } from 'react';

interface FriendStatusProps {
  friend: {
    id: string;
  };
}

type FriendStatus = {
  isOnline: boolean;
};

type ChatAPI = {
  subscribeToFriendStatus: (
    friendID: string,
    handleStatusChange: (status: FriendStatus) => void
  ) => void;
  unsubscribeToFriendStatus: (
    friendID: string,
    handleStatusChange: (status: FriendStatus) => void
  ) => void;
};

function useFriendStatus(friendID: string, ChatAPI: ChatAPI) {
  const [isOnline, setIsOnline] = useState<boolean>(false);
  function handleStatusChange(status: FriendStatus) {
    setIsOnline(status.isOnline);
  }
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () =>
      ChatAPI.unsubscribeToFriendStatus(friendID, handleStatusChange);
  }),
    [friendID, ChatAPI];

  return isOnline;
}
