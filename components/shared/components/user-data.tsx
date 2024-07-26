interface Props {
  username: string;
  fullname: string;
  profileImageUrl: string;
  following: number;
  followers: number;
  posts: number;
  followed: boolean;
}

export const UserData = ({
  username,
  fullname,
  profileImageUrl,
  following,
  followers,
  followed,
  posts,
}: Props) => {
  return (
    <div className="flex justify-center items-center gap-10 w-full h-60 border-b border-border">
      <img
        className="rounded-full"
        src={profileImageUrl}
        alt="profile photo"
        width={150}
        height={150}
      />
      <div className="h-full py-10">
        <div className="flex gap-8 items-center">
          <span className="text-4xl font-light">{username}</span>
          <button
            className={`hover:shadow  ${
              followed ? "bg-white border border-blue" : "bg-blue text-white"
            } rounded px-3 py-1.5 max-w-32 w-full font-semibold`}
          >
            {followed ? "Unsubscribe" : "Subscribe"}
          </button>
        </div>
        <div className="flex items-center gap-10 my-5">
          <span className="text-base">
            <b className="text-lg font-semibold">{posts}</b> posts
          </span>
          <span className="text-base">
            <b className="text-lg font-semibold">{followers}</b> followers
          </span>
          <span className="text-base">
            <b className="text-lg font-semibold">{following}</b> following
          </span>
        </div>
        <h4 className="font-semibold text-lg">{fullname}</h4>
      </div>
    </div>
  );
};
