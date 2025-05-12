// import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Swipper from "./Swipper";
import Link from "next/link";

const Page = () => {
  const posts = [
    {
      title: "Mastering Performance in React Apps",
      author: {
        name: "David Kim",
        avatar: "https://i.ibb.co.com/bknvR3y/8-Mbt-J4h-TAa-Ok3-KPcptq-Z.webp",
        bio: "Frontend Architect | Performance Optimization Enthusiast",
      },
      date: "April 2, 2024",
      content: `
        <h2 class="text-gradient">Optimizing React for Speed</h2>
        <p>Performance can make or break a web application. Learn how to use memoization, lazy loading, and code splitting to your advantage...</p>
      `,
      featuredImage: "https://i.ibb.co.com/bknvR3y/8-Mbt-J4h-TAa-Ok3-KPcptq-Z.webp",
      tags: ["React", "Optimization", "Lighthouse", "UX"],
      readTime: "6 min read",
      slug: "mastering-react-performance",
    },
    {
      title: "A Guide to Building Scalable APIs with Node.js",
      author: {
        name: "Amira Hassan",
        avatar: "https://via.placeholder.com/100",
        bio: "Backend Engineer | REST & GraphQL Specialist",
      },
      date: "February 27, 2024",
      content: `
        <h2 class="text-gradient">Designing Efficient Backends</h2>
        <p>Building APIs that scale is more than just writing endpoints. Discover how to implement middleware, error handling, and rate limiting...</p>
      `,
      featuredImage: "https://i.ibb.co.com/FqB9XF74/How-AI-Development-Services-Are-Leveraging-APIs-to-Build-Scalable-Intelligence-1000x540.png",
      tags: ["Node.js", "API", "Backend", "Scalability"],
      readTime: "7 min read",
      slug: "scalable-apis-nodejs",
    },
    {
      title: "From Figma to Code: Bridging the Design-Development Gap",
      author: {
        name: "Emily Zhang",
        avatar: "https://via.placeholder.com/100",
        bio: "UI/UX Designer & Developer Advocate",
      },
      date: "March 10, 2024",
      content: `
        <h2 class="text-gradient">Turning Design into Reality</h2>
        <p>Learn how to translate your Figma prototypes into responsive, pixel-perfect code using modern CSS frameworks and Tailwind...</p>
      `,
      featuredImage: "https://i.ibb.co.com/CpxM2HFJ/Anima.webp",
      tags: ["Figma", "CSS", "Tailwind", "UI/UX"],
      readTime: "5 min read",
      slug: "figma-to-code",
    },
    {
      title: "What’s New in ES2024: JavaScript’s Future",
      author: {
        name: "Liam Carter",
        avatar: "https://via.placeholder.com/100",
        bio: "JavaScript Evangelist | Tech Blogger",
      },
      date: "May 1, 2024",
      content: `
        <h2 class="text-gradient">Exploring the Next JavaScript Standard</h2>
        <p>ES2024 brings powerful new features to JavaScript, including pipeline operators, record & tuple, and more. Here's what you need to know...</p>
      `,
      featuredImage: "https://i.ibb.co.com/8vPhL33/post-1722928648-image-file-user-id-14.png",
      tags: ["JavaScript", "ES2024", "Programming", "Updates"],
      readTime: "9 min read",
      slug: "es2024-whats-new",
    },
    {
      title: "Deploying Full-Stack Apps with Vercel",
      author: {
        name: "Nathan Roberts",
        avatar: "https://via.placeholder.com/100",
        bio: "Full-Stack Developer | DevOps Enthusiast",
      },
      date: "March 22, 2024",
      content: `
        <h2 class="text-gradient">Zero-Config Deployments</h2>
        <p>Learn how to deploy modern full-stack applications using Vercel, integrate with GitHub, and take advantage of edge functions...</p>
      `,
      featuredImage: "https://i.ibb.co.com/RGpvm79z/maxresdefault.jpg",
      tags: ["Vercel", "DevOps", "Deployment", "Full-Stack"],
      readTime: "7 min read",
      slug: "deploy-with-vercel",
    },
  ];
  const featuredPost = posts[0];
  console.log(posts);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <main className="max-w-3xl mx-auto px-4 pt-8 pb-16">
        {/* Featured Post */}
        <Link href={`/blog/${featuredPost.slug}`} className="block relative h-96 rounded-2xl overflow-hidden shadow-xl mb-12">
          <Image src={featuredPost.featuredImage} alt={featuredPost.title} layout="fill" objectFit="cover" className="absolute inset-0" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl font-bold mb-4">{featuredPost.title}</h1>
            <div className="flex items-center space-x-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">{featuredPost.readTime}</span>
              <span>{featuredPost.date}</span>
            </div>
          </div>
        </Link>

        {/* Author Info */}
        <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm mb-12">
          <Image src={featuredPost.author.avatar} alt={featuredPost.author.name} width={80} height={80} className="rounded-full" />
          <div>
            <h3 className="text-xl font-semibold mb-2">{featuredPost.author.name}</h3>
            <p className="text-gray-600 mb-4">{featuredPost.author.bio}</p>
            <div className="flex space-x-4">
              <button className="text-blue-600 hover:text-blue-700">Twitter</button>
              <button className="text-blue-600 hover:text-blue-700">GitHub</button>
              <button className="text-blue-600 hover:text-blue-700">Website</button>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {featuredPost.tags.map((tag) => (
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
          <div dangerouslySetInnerHTML={{ __html: featuredPost.content }} />
        </article>

        {/* All Posts */}
        <h2 className="text-2xl font-bold mt-16 mb-4">Latest Posts</h2>
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block bg-white rounded-2xl shadow-md overflow-hidden mb-8 hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <Image src={post.featuredImage} alt={post.title} fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="text-2xl font-semibold">{post.title}</h2>
                <p className="text-sm mt-1">
                  {post.readTime} • {post.date}
                </p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image src={post.author.avatar} alt={post.author.name} width={40} height={40} className="rounded-full" />
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.author.bio}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}

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
