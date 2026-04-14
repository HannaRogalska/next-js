
import { getServerSession } from "next-auth";
import { uploadAvatar } from "../actions/userActions";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";



export default async function ProfilePage() {

  const session = await getServerSession(authOptions);
  console.log(session?.user?.image);
   if (!session) {
     redirect("/auth/signin");
   }
  return (
    <div className="flex items-center">
      <div>
        {session?.user?.image ? (
          <img
            src={session.user.image}
            alt="avatar"
            width="80"
            height="80"
            className="border border-gray-300 p-2 rounded-[50%]"
          />
        ) : (
          <div>No avatar</div>
        )}
      </div>
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">Upload Avatar</h1>

        <form action={uploadAvatar} className="space-y-4">
          <input
            type="file"
            name="avatar"
            accept="image/*"
            className="w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}
