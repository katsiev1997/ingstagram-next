interface Props {
  avatar: string;
  username: string;
  text: string;
}

export const DialogCard = ({ avatar, username, text }: Props) => {
  return (
    <div className="p-5 h-16 hover:bg-white cursor-pointer transition-all">
      <div className="flex gap-5 items-center h-full">
        <img src={avatar} alt="profile-s" />
        <div className="flex flex-col ">
          <span className="font-semibold">{username}</span>
          <span className="text-gray">{text}</span>
        </div>
      </div>
    </div>
  );
};
