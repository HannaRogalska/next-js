
import { Posts } from "@/types/post";
import {  Todo } from "@/types/todo";
import { json } from "stream/consumers";

const AboutPage = async () => {
  
  const [getPosts, getTodo] = await Promise.all([
    await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
      next: { revalidate: 10 },
    }),
    await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {
      next: { revalidate: 10 },
    }),
  ]);
  const posts = await getPosts.json();
  const todos = await getTodo.json()
  console.log(todos)
 
  return (
    <div className="flex ml-3">
      <div>
        {posts.map((el: Posts) => (
          <div key={el.id}>
            <h1>{el.title}</h1>
            <p>{el.body}</p>
          </div>
        ))}
      </div>
      <div>
        {todos.map((el: Todo) => (
          <div key={el.id}>
            <h1>{el.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
