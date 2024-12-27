import { getAllBlogs } from "@/lib/blogs";
import Link from "next/link";
import {BackgroundGradient} from "@/components/background/background-gradient"
export default async function BlogHome() {
  const blogs = await getAllBlogs();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>

      <ul className="space-y-4">
  {blogs.map((blog) => (
    <li
      key={blog.slug}
      className="relative z-10 p-4 border border-black rounded-lg shadow-md hover:shadow-md transition-shadow duration-300"
    >
      <Link
        href={`/blogs/${blog.slug}`}
        className="text-xl font-semibold hover:text-blue-800"
      >
        {blog.title} - {blog.date}
      </Link>
    </li>
  ))}
</ul>
    </div>
  );
}
