"use client";
import React from "react";
import Image from "next/image";

// Mock data (you'll later fetch this based on params.slug)

export default function BlogPost({ params }) {
  const { slug } = params;
  console.log("Slug:", slug); // Debugging line

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Featured Image */}
        <div className="relative h-72 sm:h-96 w-full">
          <Image src={post.featuredImage} alt={post.title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10">
          <div className="mb-6">
            <span className="text-sm text-gray-500">
              {post.date} • {post.readTime}
            </span>
            <h1 className="text-3xl font-bold mt-2 text-gray-900">{post.title}</h1>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-10">
            <Image src={post.author.avatar} alt={post.author.name} width={50} height={50} className="rounded-full" />
            <div>
              <p className="font-medium text-gray-800">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.author.bio}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 text-xs font-semibold rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* Article Content */}
          <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      </div>
    </div>
  );
}
