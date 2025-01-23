import Blogs from "@/Components/Blogs";


export default async function Home() {
  // Fetching the JSON data from the API
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts'); // Handle fetch error
  }
  
  const posts = await res.json(); // Await the resolved JSON data
  return (
    <div className="container mx-auto p-4">
      <Blogs posts={posts}></Blogs>
    </div>
  );
}
