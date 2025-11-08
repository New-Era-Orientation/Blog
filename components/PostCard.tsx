import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);


const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const levelColor = {
    'Cơ bản': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'Nâng cao': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'Chuyên sâu': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  };

  const isExam = post.categoryId === 'de-thi-dap-an' || post.categoryId === 'de-thi-thpt';

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {isExam && (
            <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full flex items-center">
                <CalendarIcon />
                Năm {new Date(post.publishedDate).getFullYear()}
            </span>
          )}
          {post.grade && <span className="text-xs font-semibold px-2 py-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300 rounded-full">Lớp {post.grade}</span>}
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${levelColor[post.level]}`}>{post.level}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">
          <Link to={`/article/${post.slug}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm h-20 overflow-hidden">{post.excerpt}</p>
      </div>
      <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-700/50 mt-auto">
        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
            <div>
                <span className="flex items-center"><ClockIcon /> {post.readTime} phút đọc</span>
            </div>
            <span className="font-medium">{post.author}</span>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-700/50">
            <span className="flex items-center"><CalendarIcon /> Ngày đăng: {new Date(post.publishedDate).toLocaleDateString('vi-VN')}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
