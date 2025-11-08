// pages/CategoryPage.tsx
import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getAllPosts } from '../api/posts';
import { categories } from '../data/meta';
import PostCard from '../components/PostCard';
import Breadcrumb from '../components/Breadcrumb';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{slug: string}>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tagFilter = searchParams.get('tag');

  const category = categories.find(c => c.slug === slug);
  const allPosts = getAllPosts();

  if (!category) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">404 - Không tìm thấy chuyên mục</h1>
        <p className="mt-4 text-lg">Chuyên mục bạn đang tìm kiếm không tồn tại.</p>
        <Link to="/" className="mt-8 inline-block px-6 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-700">Về trang chủ</Link>
      </div>
    );
  }

  const activeSubCategory = tagFilter ? category.subCategories?.find(sc => sc.tag === tagFilter) : null;

  const postsInCategory = allPosts.filter(post => {
    if (post.categoryId !== category.id) return false;
    if (tagFilter && !post.tags.includes(tagFilter)) return false;
    return true;
  });

  const pageTitle = activeSubCategory ? activeSubCategory.name : category.name;
  const pageDescription = activeSubCategory ? `Các bài viết và tài liệu thuộc mục ${activeSubCategory.name}.` : category.description;

  // FIX: Explicitly type `breadcrumbItems` to allow items with an optional `link` property.
  // This resolves a type inference issue where TypeScript expected all items to have a `link`.
  const breadcrumbItems: { label: string; link?: string }[] = [{ label: 'Trang chủ', link: '/' }];
  if (activeSubCategory) {
    breadcrumbItems.push({ label: category.name, link: `/category/${category.slug}` });
    breadcrumbItems.push({ label: activeSubCategory.name });
  } else {
    breadcrumbItems.push({ label: category.name });
  }

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <div className="mt-6 mb-8 p-8 bg-white dark:bg-slate-800 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold">{pageTitle}</h1>
        <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">{pageDescription}</p>
      </div>
      
      {postsInCategory.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsInCategory.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-slate-500">Chưa có bài viết nào trong mục này.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;