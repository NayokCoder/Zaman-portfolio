// import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Swipper from "./Swipper";

const Page = () => {
  // const router = useRouter();
  // const { slug } = router.query;

  // Sample post data
  const post = {
    title: "The Future of Web Development: Next.js and Beyond",
    author: {
      name: "Sarah Johnson",
      avatar: "https://via.placeholder.com/100",
      bio: "Lead Developer at Tech Innovations | Next.js Expert",
    },
    date: "March 15, 2024",
    content: `
      <h2 class="text-gradient">Embracing Modern Web Development</h2>
      <p>The web development landscape is evolving rapidly, and Next.js has emerged as a game-changer...</p>
      // ... more content
    `,
    featuredImage: "https://i.ibb.co.com/bknvR3y/8-Mbt-J4h-TAa-Ok3-KPcptq-Z.webp",
    tags: ["Next.js", "React", "Web3", "Innovation"],
    readTime: "8 min read",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* <Head>
        <title>{post.title} | Future Dev Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head> */}

      {/* Navigation */}

      <main className="max-w-3xl mx-auto px-4 pt-8 pb-16">
        {/* Featured Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl mb-12">
          <Image src={post.featuredImage} alt={post.title} layout="fill" objectFit="cover" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center space-x-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">{post.readTime}</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>

        {/* Author Section */}
        <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm mb-12">
          <Image src={post.author.avatar} alt={post.author.name} width={80} height={80} className="rounded-full" />
          <div>
            <h3 className="text-xl font-semibold mb-2">{post.author.name}</h3>
            <p className="text-gray-600 mb-4">{post.author.bio}</p>
            <div className="flex space-x-4">
              <button className="text-blue-600 hover:text-blue-700">Twitter</button>
              <button className="text-blue-600 hover:text-blue-700">GitHub</button>
              <button className="text-blue-600 hover:text-blue-700">Website</button>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {post.tags.map((tag) => (
            <a key={tag} href="#" className="px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all">
              #{tag}
            </a>
          ))}
        </div>

        {/* Article Content */}
        <article
          className="prose prose-lg max-w-none 
          [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-6
          [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-6
          [&_a]:text-blue-600 [&_a]:hover:underline
          [&_pre]:bg-gray-900 [&_pre]:p-6 [&_pre]:rounded-xl [&_pre]:text-gray-100
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6"
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Want more content like this?</h3>
          <p className="mb-6 opacity-90">Join our newsletter for exclusive articles and resources</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-3 rounded-full bg-white/20 border border-white/30 placeholder:text-white/80" />
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition">Subscribe</button>
          </div>
        </div>
      </main>
      <Swipper />
    </div>
  );
};

export default Page;
