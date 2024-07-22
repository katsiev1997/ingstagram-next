import { redirect } from "next/navigation";
import { getAuthUser } from "./lib/get-auth-user";

// This function can be marked `async` if using `await` inside
export function middleware() {
  const  data =  getAuthUser();
  console.log(data);
}
