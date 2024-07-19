import { PostCard, SideBar } from "@/widgets";

function Home() {
  return (
    <div className="max-w-[1080px] w-full mx-auto">
      <div className="flex w-full justify-between">
        <div className="w-full min-w-[750px] flex flex-col gap-5">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>

        <SideBar />
      </div>
    </div>
  );
}

export default Home;
