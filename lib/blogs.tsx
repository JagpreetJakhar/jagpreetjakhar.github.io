import path from "path";
import fs from "fs";
import matter from "gray-matter";

export type BlogMetadata = {
    title: string;
    date: string; // Optional, depending on your frontmatter structure
    [key: string]: any; // Allow other optional frontmatter fields
};

export type Blog = {
    slug: string;
    content: string;
} & BlogMetadata;

const blogsPath = path.join(process.cwd(), "blogs");


export function getBlogsSlugs() {
    return fs.readdirSync(blogsPath);
  }

  export function getBlogBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = path.join(blogsPath, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
  
    return { ...data, slug: realSlug, content } as Blog;
  }

  export function getAllBlogs(): Blog[] {
    const slugs = getBlogsSlugs();
    const posts = slugs
      .map((slug) => getBlogBySlug(slug))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
  }






