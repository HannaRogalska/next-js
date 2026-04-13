import { uploadAvatar } from "../actions/userActions";


export default function ProfilePage() {
   
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Upload Avatar</h1>

      <form action={uploadAvatar} className="space-y-4">
        <input type="file" name="avatar" accept="image/*" className="w-full" />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
