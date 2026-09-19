import React from 'react';
import { BlogPost } from '../types';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Sparkles, MessageSquare } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface BlogPostPageProps {
  post: BlogPost;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  post,
  onNavigate,
  onOpenConsultation
}) => {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs & Back Link */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <Breadcrumbs 
            items={[
              { label: 'Blog', path: '/blog' },
              { label: post.title }
            ]} 
            onNavigate={onNavigate} 
          />
          <button
            onClick={() => onNavigate('/blog')}
            className="text-xs font-bold text-slate-500 hover:text-blue-600 flex items-center gap-1.5 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </button>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-mono font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishedAt || post.publishedDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            {post.excerpt || post.summary}
          </p>

          <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-100">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
              HY
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">
                {typeof post.author === 'object' ? post.author.name : post.author}
              </div>
              <div className="text-[11px] text-slate-500">
                {typeof post.author === 'object' ? post.author.role : 'HireYourCoder Engineering Team'}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden mb-12 border border-slate-200 shadow-md">
          <img
            src={post.image || (typeof post.author === 'object' ? post.author.avatar : 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80')}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-80 sm:h-96 object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base">
          {(Array.isArray(post.content) ? post.content : post.content.split('\n\n')).map((para: string, idx: number) => {
            if (para.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl sm:text-2xl font-bold text-slate-950 font-heading pt-4">
                  {para.replace('### ', '')}
                </h3>
              );
            }
            if (para.startsWith('- ')) {
              const items = para.split('\n').filter((i: string) => i.startsWith('- '));
              return (
                <ul key={idx} className="space-y-2 list-disc pl-5">
                  {items.map((item: string, i: number) => (
                    <li key={i}>{item.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            }
            return <p key={idx}>{para}</p>;
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Topics:</span>
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author & CTA */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold font-heading">
              Need assistance implementing this architecture?
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              Hire senior developers or have our engineering leads build it for you.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors shrink-0 shadow-md shadow-blue-500/30"
          >
            Schedule Technical Consultation
          </button>
        </div>

      </div>
    </div>
  );
};
