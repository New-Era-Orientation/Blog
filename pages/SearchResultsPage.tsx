import React from 'react';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../api/posts';
import PostCard from '../components/PostCard';
import Breadcrumb from '../components/Breadcrumb';

const SearchResultsPage: React.FC = () => {
  const { query } = useParams();
  const allPosts = getAllPosts();
  
  const searchResults = query ? allPosts.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(query.toLowerCase())
  ) : [];

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Trang chủ', link: '/' },
        { label: 'Tìm kiếm' }
      ]} />
      <h1 className="text-4xl font-bold mt-6 mb-8">
        Kết quả tìm kiếm cho: <span className="text-cyan-600">"{query}"</span>
      </h1>
      <p className="mb-8 text-slate-600 dark:text-slate-400">Tìm thấy {searchResults.length} kết quả.</p>
      
      {searchResults.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchResults.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-slate-500">Không tìm thấy bài viết nào phù hợp.</p>
          <p className="mt-2 text-slate-400">Vui lòng thử với từ khóa khác.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;