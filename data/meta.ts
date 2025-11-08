// data/meta.ts
import { Category, Tag } from '../types';

const createGradeSubCategories = (grade: number): any[] => [
    { id: `tai-lieu-${grade}`, name: `TÀI LIỆU TIN ${grade}`, tag: `tai-lieu-${grade}`, emoji: '📁' },
    { id: `de-cuong-${grade}`, name: `ĐỀ CƯƠNG TIN ${grade}`, tag: `de-cuong-${grade}`, emoji: '📄' },
    { id: `de-giua-hk1-${grade}`, name: `ĐỀ GIỮA HK1 TIN ${grade}`, tag: `de-giua-hk1-${grade}`, emoji: '⭐' },
    { id: `de-hk1-${grade}`, name: `ĐỀ HK1 TIN ${grade}`, tag: `de-hk1-${grade}`, emoji: '⭐' },
    { id: `de-giua-hk2-${grade}`, name: `ĐỀ GIỮA HK2 TIN ${grade}`, tag: `de-giua-hk2-${grade}`, emoji: '⭐' },
    { id: `de-hk2-${grade}`, name: `ĐỀ HK2 TIN ${grade}`, tag: `de-hk2-${grade}`, emoji: '⭐' },
    { id: `de-khao-sat-${grade}`, name: `ĐỀ KHẢO SÁT TIN ${grade}`, tag: `de-khao-sat-${grade}`, emoji: '☑️' },
    { id: `de-hsg-${grade}`, name: `ĐỀ HSG TIN ${grade}`, tag: `de-hsg-${grade}`, emoji: '🎓' },
    { id: `giao-an-${grade}`, name: `GIÁO ÁN TIN ${grade}`, tag: `giao-an-${grade}`, emoji: '📋' },
    { id: `tips-giai-tin-${grade}`, name: `TIPS GIẢI TIN ${grade}`, tag: `tips-giai-tin-${grade}`, emoji: '🔍' },
];

export const categories: Category[] = [
  {
    id: 'tin-hoc-10',
    slug: 'tin-hoc-10',
    name: 'Tin học 10',
    description: 'Kiến thức, bài giảng và tài liệu môn Tin học lớp 10 theo chương trình mới.',
    subCategories: createGradeSubCategories(10),
  },
  {
    id: 'tin-hoc-11',
    slug: 'tin-hoc-11',
    name: 'Tin học 11',
    description: 'Tài liệu học tập, bài tập và ví dụ minh họa cho môn Tin học lớp 11.',
    subCategories: createGradeSubCategories(11),
    // FIX: Mark this category as featured for the homepage.
    isFeatured: true,
  },
  {
    id: 'tin-hoc-12',
    slug: 'tin-hoc-12',
    name: 'Tin học 12',
    description: 'Chuyên đề, bài tập và hướng dẫn ôn thi Tốt nghiệp THPT môn Tin học.',
    subCategories: createGradeSubCategories(12),
  },
  {
    id: 'thuat-toan-va-ctdl',
    slug: 'thuat-toan-va-ctdl',
    name: 'Thuật toán & CTDL',
    description: 'Các thuật toán cơ bản, cấu trúc dữ liệu và bài tập vận dụng cho học sinh giỏi.',
    // FIX: Mark this category as featured for the homepage.
    isFeatured: true,
  },
  {
    id: 'de-thi-thpt',
    slug: 'de-thi-thpt',
    name: 'Đề thi THPT',
    description: 'Tổng hợp đề thi THPT Quốc Gia, đề thi thử và tài liệu ôn tập.',
    subCategories: [
        { id: 'de-khao-sat-thpt', name: 'Đề khảo sát', tag: 'de-khao-sat-thpt', emoji: '☑️' },
        { id: 'de-thi-thu-thpt', name: 'Đề thi thử', tag: 'de-thi-thu-thpt', emoji: '⭐' },
        { id: 'de-chinh-thuc-thpt', name: 'Đề chính thức', tag: 'de-chinh-thuc-thpt', emoji: '🎓' },
        { id: 'tai-lieu-on-tap-thpt', name: 'Tài liệu ôn tập', tag: 'tai-lieu-on-tap-thpt', emoji: '📁' },
    ],
    // FIX: Mark this category as featured for the homepage.
    isFeatured: true,
  },
  // Other categories that don't appear in main nav
  {
    id: 'tin-hoc-van-phong',
    slug: 'tin-hoc-van-phong',
    name: 'Tin học văn phòng',
    description: 'Hướng dẫn sử dụng Word, Excel, PowerPoint và ôn thi chứng chỉ MOS/IC3.',
  },
  {
    id: 'huong-dan',
    slug: 'huong-dan',
    name: 'Hướng dẫn',
    description: 'Các bài viết hướng dẫn sử dụng, quản trị và đóng góp cho website.'
  },
];

export const tags: Tag[] = [
    { id: 'python-basic', name: 'Python cơ bản' },
    { id: 'cpp-oop', name: 'OOP C++' },
    { id: 'on-thi-12', name: 'Ôn thi THPT' },
    { id: 'dp', name: 'Quy hoạch động' },
    { id: 'graph', name: 'Đồ thị' },
    { id: 'search', name: 'Tìm kiếm' },
    { id: 'excel-mos', name: 'Excel MOS' },
    { id: 'de-minh-hoa', name: 'Đề minh họa' },
    { id: 'web', name: 'Web Development' },
    // Tags for subcategories
    ...createGradeSubCategories(10).map(sc => ({ id: sc.tag, name: sc.name })),
    ...createGradeSubCategories(11).map(sc => ({ id: sc.tag, name: sc.name })),
    ...createGradeSubCategories(12).map(sc => ({ id: sc.tag, name: sc.name })),
    { id: 'de-khao-sat-thpt', name: 'Đề khảo sát THPT' },
    { id: 'de-thi-thu-thpt', name: 'Đề thi thử THPT' },
    { id: 'de-chinh-thuc-thpt', name: 'Đề chính thức THPT' },
    { id: 'tai-lieu-on-tap-thpt', name: 'Tài liệu ôn tập THPT' },
];