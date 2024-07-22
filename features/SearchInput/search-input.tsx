"use client"
import { useRouter } from "next/navigation";
import { useUserSearch } from "@/shared/hooks/use-user-search";

export const SearchInput = () => {
  const {
    username,
    setUsername,
    users,
    isFocused,
    handleFocus,
    handleBlur,
    handleUserSelect,
  } = useUserSearch();

  const router = useRouter();
  const divClass = (length: number, i: number) => {
    return (
      "flex items-center gap-3  h-10 pl-5 hover:bg-slate-100 cursor-pointer" +
      `${i === length - 1 ? " rounded-b-lg" : " border-b border-border"} ${
        i === 0 ? " rounded-t-lg" : ""
      }`
    );
  };

  return (
    <div className="relative">
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="py-4 pr-3 pl-7 w-56 h-7 border border-border rounded outline-none focus:w-96 focus:border-blue transition-all duration-300"
        placeholder="Search"
        type="text"
      />
      <img
        className="absolute top-2.5 left-2 w-4 h-4"
        src="/search.svg"
        alt="search"
      />
      {isFocused && username && users.length > 0 && (
        <div className="absolute top-10 z-10 bg-[#fff] w-96 rounded-lg shadow-md shadow-blue ">
          {users.map((user, i) => (
            <div
              key={user.id}
              onMouseDown={() => handleUserSelect(user.username, router.push)}
              className={divClass(users.length, i)}
            >
              {user.profileImageUrl && (
                <img
                  src={user.profileImageUrl}
                  alt="avatar"
                  width={40}
                  height={40}
                />
              )}
              <p className="font-semibold">{user.username}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
