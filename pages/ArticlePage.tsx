import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug, getAllPosts } from '../api/posts';
import { categories, tags } from '../data/meta';
import Breadcrumb from '../components/Breadcrumb';
import CodeBlock from '../components/CodeBlock';
import PostCard from '../components/PostCard';
import { ContentBlock } from '../types';

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};


const ArticlePage: React.FC = () => {
  const { slug } = useParams<{slug: string}>();
  const post = getPostBySlug(slug!);

  if (!post) {
    return <div className="text-center py-20">
        <h1 className="text-4xl font-bold">404 - Không tìm thấy bài viết</h1>
        <p className="mt-4 text-lg">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
        <Link to="/" className="mt-8 inline-block px-6 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-700">Về trang chủ</Link>
    </div>;
  }
  
  const allPosts = getAllPosts();
  const category = categories.find(c => c.id === post.categoryId);
  const postTags = tags.filter(t => post.tags.includes(t.id));
  const relatedPosts = allPosts.filter(p => p.categoryId === post.categoryId && p.id !== post.id).slice(0, 3);
  // FIX: Use an explicit type guard with `Extract` to correctly narrow the `ContentBlock` type after filtering.
  // This ensures that `block` is recognized as a heading block, allowing safe access to `content` and `level` properties.
  const tocItems = post.content
    .filter(
      (block): block is Extract<ContentBlock, { type: 'heading' }> =>
        block.type === 'heading'
    )
    .map((block) => ({
      text: block.content,
      link: `#${slugify(block.content)}`,
      level: block.level,
    }));

  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'heading':
        if (block.level === 2) {
          return <h2 key={index} id={slugify(block.content)} className="text-3xl font-bold mt-8 mb-4 scroll-mt-20">{block.content}</h2>;
        }
        return <h3 key={index} id={slugify(block.content)} className="text-2xl font-bold mt-6 mb-3 scroll-mt-20">{block.content}</h3>;
      case 'paragraph':
        return <p key={index} className="my-4 leading-relaxed">{block.content}</p>;
      case 'code':
        return <CodeBlock key={index} code={block.content} language={block.language} />;
      case 'list':
          return <ul key={index} className="list-disc list-inside my-4 space-y-2 pl-4">
              {block.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
      default:
        return null;
    }
  };

  return (
    <div>
        <Breadcrumb items={[
            { label: 'Trang chủ', link: '/' },
            { label: category?.name || '', link: `/category/${category?.slug}` },
            { label: post.title },
        ]} />
        
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-12">
            <article className="lg:col-span-8">
                <header>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{post.title}</h1>
                    <div className="mt-4 flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                        <span>Bởi {post.author}</span>
                        <span>&bull;</span>
                        <span>{new Date(post.publishedDate).toLocaleDateString('vi-VN')}</span>
                        <span>&bull;</span>
                        <span>{post.readTime} phút đọc</span>
                    </div>
                </header>

                <div className="prose dark:prose-invert max-w-none mt-8">
                    {post.content.map(renderContentBlock)}
                </div>

                {post.attachments.length > 0 && (
                    <div className="mt-12 p-6 bg-cyan-50 dark:bg-slate-800 border-l-4 border-cyan-500 rounded-r-lg">
                        <h3 className="text-xl font-bold mb-4">Tải tài liệu</h3>
                        <div className="space-y-3">
                            {post.attachments.map((file, i) => (
                                <a key={i} href={file.url} className="flex items-center justify-between p-3 bg-white dark:bg-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                                    <div className="flex items-center">
                                        <DownloadIcon />
                                        <div>
                                            <span className="font-semibold">{file.name}</span>
                                            <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">({file.type}, {file.size})</span>
                                        </div>
                                    </div>
                                    <span className="font-bold text-cyan-600 dark:text-cyan-400">Tải về</span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
                
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold mb-2">Thẻ:</h4>
                    <div className="flex flex-wrap gap-2">
                        {postTags.map(tag => (
                            <span key={tag.id} className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-sm rounded-full">{tag.name}</span>
                        ))}
                    </div>
                </div>

            </article>

            <aside className="lg:col-span-4 mt-12 lg:mt-0">
                <div className="sticky top-24">
                    <h3 className="text-xl font-bold mb-4">Mục lục</h3>
                    <ul className="space-y-2 border-l-2 border-slate-200 dark:border-slate-700">
                        {tocItems.map(item => (
                            <li key={item.link}>
                                <a href={item.link} className={`block pl-4 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 border-l-2 border-transparent -ml-px transition-all ${item.level === 3 ? 'ml-4' : ''}`}>
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>

        {relatedPosts.length > 0 && (
             <section className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h2 className="text-3xl font-bold mb-6">Bài viết liên quan</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
                </div>
            </section>
        )}
    </div>
  );
};

export default ArticlePage;
