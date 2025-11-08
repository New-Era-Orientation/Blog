
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6">Liên hệ & Đóng góp tài liệu</h1>
      <p className="text-lg leading-relaxed mb-8 text-slate-600 dark:text-slate-400">
        Chúng tôi luôn hoan nghênh mọi ý kiến đóng góp, câu hỏi, hoặc những tài liệu hay mà bạn muốn chia sẻ với cộng đồng. Vui lòng sử dụng biểu mẫu dưới đây để liên hệ với chúng tôi.
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Họ và tên</label>
          <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
          <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Chủ đề</label>
          <input type="text" name="subject" id="subject" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Nội dung</label>
          <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"></textarea>
        </div>

        <div>
          <label htmlFor="file-upload" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Đính kèm tài liệu (tùy chọn)</label>
          <input id="file-upload" name="file-upload" type="file" className="mt-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"/>
        </div>

        <div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
            Gửi liên hệ
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
