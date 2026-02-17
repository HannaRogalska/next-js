import axios from "axios";
import { Posts } from "@/types/post";

const AboutPage = async () => {
  const posts = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  );

  return (
    <div>
      {posts.data.map((el: Posts) => (
        <div key={el.id}>
          <h1>{el.title}</h1>
          <p>{el.body}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutPage;
