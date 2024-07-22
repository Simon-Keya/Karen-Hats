import { useEffect, useState } from 'react';

const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Add logic to fetch notifications from local storage or API
  }, []);

  const addNotification = (notification: any) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  const removeNotification = (notificationId: string) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== notificationId)
    );
  };

  return { notifications, addNotification, removeNotification };
};

export default useNotifications;
