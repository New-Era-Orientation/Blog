import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../App';
import Logo from './Logo.tsx';
import { categories } from '../data/meta';

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
)

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
)

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
)

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);


const navCategories = categories.filter(c => ['tin-hoc-10', 'tin-hoc-11', 'tin-hoc-12', 'thuat-toan-va-ctdl', 'de-thi-thpt'].includes(c.id));

const MobileSearchForm: React.FC<{onSearch: () => void}> = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        navigate(`/search/${query.trim()}`);
        onSearch();
      }
    };
    
    return (
        <form onSubmit={handleSearch} className="flex p-2">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm kiếm bài viết..."
                className="w-full px-4 py-2 text-base rounded-l-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button type="submit" className="px-4 py-2 bg-cyan-600 text-white rounded-r-md hover:bg-cyan-700 transition-colors flex items-center">
                <SearchIcon />
            </button>
        </form>
    );
}

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  const handleToggleMobileCategory = (categoryId: string) => {
    setExpandedMobileCategory(prev => prev === categoryId ? null : categoryId);
  }

  return (
    <header className="bg-white dark:bg-slate-900/80 dark:backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400">
              <Logo className="h-8 w-8" />
              <span className="text-lg md:text-xl font-bold whitespace-nowrap">New Era Orientation</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
             {navCategories.map(cat => (
                 <div key={cat.id} className="relative group">
                    <NavLink 
                        to={`/category/${cat.slug}`}
                        className={({isActive}) => 
                            `px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${isActive ? 'bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`
                        }
                    >
                        {cat.name}
                        {cat.subCategories && (
                            <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        )}
                    </NavLink>
                    {cat.subCategories && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-slate-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div className="py-1">
                                {cat.subCategories.map(subCat => (
                                    <Link key={subCat.id} to={`/category/${cat.slug}?tag=${subCat.tag}`} className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
                                        <span className="mr-3 text-lg">{subCat.emoji}</span>
                                        <span>{subCat.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                 </div>
             ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="ml-2 p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Open menu"
            >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                 <MobileSearchForm onSearch={() => setIsMenuOpen(false)} />
                 {navCategories.map(cat => (
                     <div key={cat.id}>
                        <div className="flex items-center justify-between">
                            <NavLink 
                                to={`/category/${cat.slug}`}
                                onClick={() => setIsMenuOpen(false)}
                                className={({isActive}) => 
                                    `flex-grow block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive && !expandedMobileCategory ? 'bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`
                                }
                            >
                                {cat.name}
                            </NavLink>
                            {cat.subCategories && (
                                <button onClick={() => handleToggleMobileCategory(cat.id)} className="p-2 rounded-md text-slate-500 dark:text-slate-400">
                                    <ChevronDownIcon />
                                </button>
                            )}
                        </div>
                        {cat.subCategories && expandedMobileCategory === cat.id && (
                            <div className="pl-4 mt-1 space-y-1 border-l-2 border-slate-200 dark:border-slate-700">
                                {cat.subCategories.map(subCat => (
                                     <Link 
                                        key={subCat.id} 
                                        to={`/category/${cat.slug}?tag=${subCat.tag}`} 
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                                     >
                                        <span className="mr-3 text-lg">{subCat.emoji}</span>
                                        <span>{subCat.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                     </div>
                 ))}
              </div>
          </div>
      )}
    </header>
  );
};

export default Header;
