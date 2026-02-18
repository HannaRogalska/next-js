type Todo = {
  id: string,
  title: string ;
  content: string;
};
let todo: Todo[] = [
  { title: "First", content: "Post 1", id: "1"  },
  { title: "Second", content: "Post 2", id: "2" },
];

export default function Home() {
  const createPost = async (formData: FormData) => {
    "use server";
    const title = formData.get("title")?.toString() || "";
    const content = formData.get("content")?.toString() || "";
    const id = formData.get("id")?.toString() || "";
    todo.push({ title, content, id });
    console.log(todo);
  };
  return (
    <div>
      <form action={createPost}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border"
        />
        <input
          type="text"
          name="content"
          placeholder="Content"
          className="border"
        />
        <input
          type="number"
          name="id"
          placeholder="ID"
          className="border"
        />
        <button type="submit" className="border">
          Create
        </button>
      </form>

      <div>
        {todo.map((el) => {
          return (
            <div key={el.id}>
              <h1>{el.title}</h1>
              <div>{el.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
