import { createPost, getTodos, deletePost} from "./actions/formAction";


export default async function Home() {
  const todo = await getTodos()

  return (
    <div>
      <form action={createPost}>
        <input
          type="text"
          name="title"
          placeholder="Title"
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
              <form action={deletePost}>
                <input type="hidden" name="id" value={el.id} />
                <button type="submit" className="border">
                  delete
                </button>
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
}
