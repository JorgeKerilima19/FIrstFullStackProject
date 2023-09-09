import { posts } from "../helpers/data/posts";

export const Blog = () => {
  return (
    <section className="pt-5 grid">
      <h2 className="text-4xl font-bold">Blog</h2>
      <div className="py-10 grid justify-center gap-y-5">
        {posts.map((post) => (
          <article className="cont grid grid-cols-3 gap-5 border-b-2 py-2">
            <img src={post.img} alt="" className="h-32 w-60 object-cover" />
            <div className="flex flex-col gap-2 col-span-2">
              <header className="title text-xl font-semibold transition duration-300">
                {post.title}
              </header>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-green-800">{post.category}</span>
                <span>
                  {post.date.toLocaleDateString("en-US", {
                    year: "2-digit",
                    month: "long",
                    day: "2-digit",
                  })}
                </span>
                <span className="underline">{post.author}</span>
              </div>
              <p className="text-lg">{post.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
