import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import ReactMarkdown from 'react-markdown';

// Define the Params type as a Promise
type Params = Promise<{ slug: string }>;

// Page component that will render the blog post
export default async function BlogPost({ params }: { params: Params }) {
  // Await params since it is now a Promise
  const { slug } = await params;
  
  // Fetch blog data using the slug
  const blog = await getBlogBySlug(slug);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
        <p className="text-xl mb-2">{blog.date}</p> {/* Text color for both themes */}
      </header>
      <hr className="border-t-[var(--light-theme-border)] dark:border-t-[var(--dark-theme-border)] mb-8" /> {/* HR color for both themes */}
      <article className="prose-lg dark:prose-invert">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </article>
    </div>
  );
}

// `generateStaticParams()` is used to generate static paths
export async function generateStaticParams() {
  const blogs = await getAllBlogs();  // Fetch all blogs to get the slugs
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
