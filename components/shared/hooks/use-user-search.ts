import { useState, useEffect } from "react";
import { getUsers, User } from "@/components/features/SearchInput/get-users";

export const useUserSearch = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const searchUsers = async (username: string) => {
    if (username === "") {
      setUsers([]);
    } else {
      const data = await getUsers(username);
      setUsers(data);
    }
  };

  useEffect(() => {
    searchUsers(username);
  }, [username]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => setIsFocused(false), 200);
  };

  const handleUserSelect = (
    username: string,
    navigate: (username: string) => void
  ) => {
    setUsername("");
    setUsers([]);
    navigate(`/user/${username}`);
  };

  return {
    username,
    setUsername,
    users,
    isFocused,
    handleFocus,
    handleBlur,
    handleUserSelect,
  };
};
