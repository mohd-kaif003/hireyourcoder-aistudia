import React, { useState } from 'react';
import { blogData } from '../data/blogData';
import { ArrowRight, Clock, Calendar, Tag, BookOpen } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Architecture', 'Engineering', 'AI & Automation', 'Digital Marketing', 'Mobile Development'];

  const filteredPosts = blogData.filter(post => 
    selectedCategory === 'All' || post.category === selectedCategory
  );

  return (
    <div className="pt-28 pb-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Engineering & Growth Insights</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Technical Architecture, Performance & AI Guides
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In-depth engineering playbooks written by senior full-stack developers, cloud architects, and performance marketers.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onNavigate(`/blog/${post.slug}`)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={post.image || (typeof post.author === 'object' ? post.author.avatar : 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80')}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-sm text-white text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md font-bold">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishedAt || post.publishedDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-950 font-heading group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h2>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt || post.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-[10px] text-slate-500 font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-blue-600">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
