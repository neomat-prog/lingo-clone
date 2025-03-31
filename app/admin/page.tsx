import { isAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";
import App from "./app";

export default async function AdminPage() {
  if (!isAdmin) {
    redirect("/");
  }

  return <App />;
}
