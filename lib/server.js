export async function getServerSideProps(context) {
  const page = parseInt(context.query.page) || 1;
  // Sample static posts data - replace with real data fetch
 const posts = [
    {
      title: "Mastering Performance in React Apps",
      author: {
        name: "David Kim",
        avatar: "https://i.ibb.co.com/bknvR3y/8-Mbt-J4h-TAa-Ok3-KPcptq-Z.webp",
        bio: "Frontend Architect | Performance Optimization Enthusiast",
      },
      date: "April 2, 2024",
      content: 
        <h2 class="text-gradient">Optimizing React for Speed</h2>
        <p>Performance can make or break a web application. Learn how to use memoization, lazy loading, and code splitting to your advantage...</p>
      ,
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
      content: 
        <h2 class="text-gradient">Designing Efficient Backends</h2>
        <p>Building APIs that scale is more than just writing endpoints. Discover how to implement middleware, error handling, and rate limiting...</p>
      ,
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
      content: 
        <h2 class="text-gradient">Turning Design into Reality</h2>
        <p>Learn how to translate your Figma prototypes into responsive, pixel-perfect code using modern CSS frameworks and Tailwind...</p>
      ,
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
      content: 
        <h2 class="text-gradient">Exploring the Next JavaScript Standard</h2>
        <p>ES2024 brings powerful new features to JavaScript, including pipeline operators, record & tuple, and more. Here's what you need to know...</p>
      ,
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
      content: 
        <h2 class="text-gradient">Zero-Config Deployments</h2>
        <p>Learn how to deploy modern full-stack applications using Vercel, integrate with GitHub, and take advantage of edge functions...</p>
      ,
      featuredImage: "https://i.ibb.co.com/RGpvm79z/maxresdefault.jpg",
      tags: ["Vercel", "DevOps", "Deployment", "Full-Stack"],
      readTime: "7 min read",
      slug: "deploy-with-vercel",
    },
  ];

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);
  const totalPages = Math.ceil(otherPosts.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const paginatedPosts = otherPosts.slice(start, start + POSTS_PER_PAGE);

  return {
    props: {
      featuredPost,
      paginatedPosts,
      currentPage: page,
      totalPages,
    },
  };
}
