import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400">New Era Orientation</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Nền tảng chia sẻ kiến thức Tin học, lập trình và công nghệ cho học sinh, sinh viên Việt Nam.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Chuyên mục</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/category/tin-hoc-10" className="hover:text-cyan-500 transition-colors">Tin học 10</Link></li>
              <li><Link to="/category/tin-hoc-11" className="hover:text-cyan-500 transition-colors">Tin học 11</Link></li>
              <li><Link to="/category/tin-hoc-12" className="hover:text-cyan-500 transition-colors">Tin học 12</Link></li>
              <li><Link to="/category/de-thi-thpt" className="hover:text-cyan-500 transition-colors">Đề thi THPT</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Đăng ký nhận tin</h4>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Nhận bài viết mới nhất và tài liệu độc quyền qua email.</p>
            <form className="mt-4 flex">
              <input type="email" placeholder="Email của bạn" className="flex-grow px-4 py-2 rounded-l-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              <button type="submit" className="px-4 py-2 bg-cyan-600 text-white rounded-r-md hover:bg-cyan-700 transition-colors">Đăng ký</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
          <p className="order-2 sm:order-1 mt-4 sm:mt-0">&copy; {new Date().getFullYear()} New Era Orientation. All rights reserved.</p>
          <div className="order-1 sm:order-2 flex space-x-6">
            <Link to="/about" className="hover:text-cyan-500 transition-colors">Giới thiệu</Link>
            <Link to="/contact" className="hover:text-cyan-500 transition-colors">Liên hệ</Link>
            <Link to="/terms" className="hover:text-cyan-500 transition-colors">Điều khoản</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
