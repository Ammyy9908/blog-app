import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 gap-8 py-8">
      {posts?.map((post) => (
        <Link 
          href={`/blog/${post.slug}`} 
          key={post.id}
          className="flex flex-col md:flex-row gap-6 group cursor-pointer"
        >
          {/* Image Container */}
          <div className="w-full md:w-1/3 aspect-[4/3] relative overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content Container */}
          <div className="w-full md:w-2/3 space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 group-hover:text-coffee-primary transition-colors">
              {post.title}
            </h2>
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <span>{post.readTime} Min</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
            <p className="text-gray-600 line-clamp-2">
              {post.excerpt}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;