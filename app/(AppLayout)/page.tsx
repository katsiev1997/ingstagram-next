import { getMe } from "@/actions/get-me";
import { PostCard, SideBar } from "@/components/widgets";

async function Home() {
    const user = await getMe();

    return (
        <div className="max-w-[1080px] w-full mx-auto">
            <div className="flex w-full justify-between">
                <div className="w-full min-w-[750px] flex flex-col gap-5">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
                <SideBar user={user}/>
            </div>
        </div>
    );
}

export default Home;
