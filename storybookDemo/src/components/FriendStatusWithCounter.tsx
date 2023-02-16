import React from 'react';
import { useState, useEffect } from 'react';

interface Friend {
  id: number;
}

interface Props {
  friend: Friend;
}

function FriendStatusWithCount (props: Props) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `you are clicked ${count} times`;
  })

  const [isOnline, setIsOnline] = useState<boolean|null>(null);

  useEffect(() => {
    function handleChangeOnline(status: {isOnline: boolean}) {
      setIsOnline(status.isOnline);
    }
  })
}