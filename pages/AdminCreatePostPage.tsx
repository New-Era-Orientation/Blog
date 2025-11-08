import React, { useState, useMemo } from 'react';
import { categories, tags } from '../data/meta';

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const AdminCreatePostPage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: 'Admin',
    categoryId: 'tin-hoc-10',
    tags: '[]',
    level: 'Cơ bản',
    grade: '10',
    language: 'null',
    readTime: '10',
    excerpt: '',
    content: '## Tiêu đề mục\n\nNội dung bài viết...\n\n```python\n# Code mẫu\nprint("Hello World")\n```',
  });
  
  const [generatedCode, setGeneratedCode] = useState<{ postFile: string, indexFile: string } | null>(null);

  const slug = useMemo(() => slugify(formData.title), [formData.title]);
  const id = useMemo(() => {
    const categoryPrefix = categories.find(c => c.id === formData.categoryId)?.slug.substring(0, 3) || 'post';
    return `${categoryPrefix}${Math.floor(Math.random() * 1000)}`;
  }, [formData.categoryId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleGenerateCode = () => {
      const postFileContent = `// posts/${formData.categoryId}/${slug}.ts
export const post = \`
---
id: "${id}"
slug: "${slug}"
title: "${formData.title}"
excerpt: "${formData.excerpt}"
author: "${formData.author}"
publishedDate: "${new Date().toISOString().split('T')[0]}"
readTime: ${formData.readTime}
categoryId: "${formData.categoryId}"
tags: '${formData.tags}'
level: "${formData.level}"
grade: ${formData.grade}
language: ${formData.language === 'null' ? 'null' : `"${formData.language}"`}
attachments: '[]'
downloads: 0
---
${formData.content}
\`;`;

    const indexFileContent = `// Mở file: posts/${formData.categoryId}/index.ts

// 1. Thêm dòng import này vào đầu file
import { post as ${slug.replace(/-/g, '_')} } from './${slug}';

// 2. Thêm biến vừa import vào mảng export
// export const yourCategoryPosts = [
//   ...,
//   ${slug.replace(/-/g, '_')},
// ];`;

      setGeneratedCode({ postFile: postFileContent, indexFile: indexFileContent });
  }

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6">Trợ lý tạo bài viết</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
        Điền thông tin vào biểu mẫu dưới đây để tự động tạo mã nguồn cho bài viết mới.
      </p>

      <div className="space-y-6">
        {/* Form Fields */}
        <div>
          <label className="block text-sm font-medium">Tiêu đề</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 block w-full input-style" />
          <p className="text-xs text-slate-500 mt-1">Slug tự động: {slug}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Tác giả</label>
              <input type="text" name="author" value={formData.author} onChange={handleChange} className="mt-1 block w-full input-style" />
            </div>
            <div>
              <label className="block text-sm font-medium">Chuyên mục</label>
              <select name="categoryId" value={formData.categoryId} onChange={handleChange} className="mt-1 block w-full input-style">
                {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
              </select>
            </div>
        </div>
        
        {/* More fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div>
              <label className="block text-sm font-medium">Cấp độ</label>
              <select name="level" value={formData.level} onChange={handleChange} className="mt-1 block w-full input-style">
                <option>Cơ bản</option>
                <option>Nâng cao</option>
                <option>Chuyên sâu</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Thời gian đọc (phút)</label>
              <input type="number" name="readTime" value={formData.readTime} onChange={handleChange} className="mt-1 block w-full input-style" />
            </div>
        </div>

        <div>
            <label className="block text-sm font-medium">Mô tả ngắn (excerpt)</label>
            <textarea name="excerpt" value={formData.excerpt} onChange={handleChange} rows={3} className="mt-1 block w-full input-style"></textarea>
        </div>

        <div>
            <label className="block text-sm font-medium">Nội dung (Markdown)</label>
            <textarea name="content" value={formData.content} onChange={handleChange} rows={15} className="mt-1 block w-full input-style font-mono text-sm"></textarea>
        </div>

        <button onClick={handleGenerateCode} className="w-full py-3 px-4 bg-cyan-600 text-white font-semibold rounded-md hover:bg-cyan-700 transition-colors">
            Tạo mã
        </button>

        {generatedCode && (
            <div className="mt-8 space-y-6">
                <div>
                    <h3 className="text-xl font-bold mb-2">1. Mã cho file bài viết mới</h3>
                    <p className="mb-2 text-sm">Tạo file mới tại <code className="bg-slate-200 dark:bg-slate-700 p-1 rounded text-cyan-600 dark:text-cyan-400">posts/{formData.categoryId}/{slug}.ts</code> và dán nội dung này vào:</p>
                    <pre className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md text-sm overflow-x-auto"><code>{generatedCode.postFile}</code></pre>
                </div>
                 <div>
                    <h3 className="text-xl font-bold mb-2">2. Cập nhật file Index của chuyên mục</h3>
                    <p className="mb-2 text-sm">Mở file <code className="bg-slate-200 dark:bg-slate-700 p-1 rounded text-cyan-600 dark:text-cyan-400">posts/{formData.categoryId}/index.ts</code> và làm theo hướng dẫn:</p>
                    <pre className="p-4 bg-slate-100 dark:bg-slate-900 rounded-md text-sm overflow-x-auto"><code>{generatedCode.indexFile}</code></pre>
                </div>
            </div>
        )}
      </div>
      <style>{`
        .input-style {
            padding: 0.5rem 0.75rem;
            background-color: white;
            border: 1px solid #cbd5e1;
            border-radius: 0.375rem;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        }
        .dark .input-style {
            background-color: #1e293b;
            border-color: #475569;
        }
        .input-style:focus {
            outline: 2px solid transparent;
            outline-offset: 2px;
            --tw-ring-color: #06b6d4;
            border-color: #06b6d4;
        }
      `}</style>
    </div>
  );
};

export default AdminCreatePostPage;
