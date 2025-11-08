// posts/huong-dan/huong-dan-dang-bai.ts
export const post = `
---
id: "huongdan001"
slug: "huong-dan-cach-tao-chuyen-muc-va-dang-bai"
title: "Hướng dẫn: Cách tạo chuyên mục và đăng bài viết mới"
excerpt: "Tài liệu hướng dẫn chi tiết từng bước cho người quản trị về cách thêm một chuyên mục mới và cách đăng một bài viết mới bằng file markdown (.md) trên hệ thống."
author: "Admin"
publishedDate: "2023-10-28"
readTime: 8
categoryId: "huong-dan"
tags: '[]'
level: "Cơ bản"
grade: null
language: null
attachments: '[]'
downloads: 50
---
## Giới thiệu
Chào mừng bạn đến với hệ thống quản lý nội dung của New Era Orientation. Tài liệu này sẽ hướng dẫn bạn cách thực hiện hai tác vụ quan trọng nhất: tạo chuyên mục mới và đăng bài viết mới. Hệ thống của chúng ta được thiết kế để việc này trở nên đơn giản nhất có thể.

## Bước 1: Tạo chuyên mục mới (nếu cần)
Nếu bạn muốn đăng bài vào một chuyên mục chưa có, bạn cần khai báo nó trước.

- **Mở file:** \`data/meta.ts\`
- **Thao tác:** Thêm một đối tượng mới vào mảng \`categories\`.

**Ví dụ:** Để thêm chuyên mục "Lập trình Web", bạn sẽ thêm dòng sau vào mảng:
\`\`\`javascript
{ id: 'lap-trinh-web', slug: 'lap-trinh-web', name: 'Lập trình Web' },
\`\`\`
- **id:** một chuỗi định danh duy nhất, không dấu, không khoảng trắng.
- **slug:** đường dẫn URL, thường giống id.
- **name:** Tên chuyên mục sẽ hiển thị trên trang web.

## Bước 2: Chuẩn bị bài viết (File Markdown)
Mỗi bài viết là một file riêng. Cấu trúc của file bao gồm 2 phần: **Frontmatter** và **Nội dung**.

### 2.1. Frontmatter
Đây là phần khai báo thông tin metadata cho bài viết, nằm giữa hai dòng \`---\`.

\`\`\`
---
id: "web001"
slug: "nhap-mon-html-css"
title: "Nhập môn HTML & CSS cho người mới bắt đầu"
excerpt: "Bài viết giới thiệu các khái niệm cơ bản nhất về HTML và CSS, nền tảng của mọi trang web."
author: "Admin"
publishedDate: "2023-10-29"
readTime: 12
categoryId: "lap-trinh-web"
tags: '["web"]'
level: "Cơ bản"
grade: 10
language: null
attachments: '[]'
downloads: 0
---
\`\`\`

- **categoryId:** Phải khớp với \`id\` của chuyên mục bạn đã tạo ở Bước 1.
- **tags:** Một mảng các id của tag (đã được định nghĩa trong \`data/meta.ts\`).

### 2.2. Nội dung
Đây là phần thân bài viết, được viết bằng cú pháp Markdown.
- Tiêu đề lớn: \`## Tiêu đề của bạn\`
- Tiêu đề nhỏ: \`### Tiêu đề nhỏ hơn\`
- Chèn code: Bọc code của bạn trong cặp dấu \`\`\`ngon_ngu_code ... \`\`\`.

## Bước 3: Đăng bài viết lên hệ thống
1.  **Tạo file mới:** Tạo một file có đuôi \`.ts\` (ví dụ: \`web001.ts\`) trong thư mục chuyên mục tương ứng (ví dụ: \`posts/lap-trinh-web/\`). Nếu thư mục chưa có, hãy tạo nó.
2.  **Dán nội dung:** Dán toàn bộ nội dung markdown của bạn (cả frontmatter và thân bài) vào file đó, bọc trong một chuỗi template và export nó.
    \`\`\`javascript
    // posts/lap-trinh-web/web001.ts
    export const post = \`
    ---
    // ... frontmatter của bạn ở đây ...
    ---
    // ... nội dung bài viết của bạn ở đây ...
    \`;
    \`\`\`
3.  **Import vào hệ thống:** Mở file \`api/posts.ts\` và thêm một dòng \`import\` để hệ thống nhận diện file bài viết mới của bạn.
    \`\`\`javascript
    // api/posts.ts
    import { post as web001 } from '../posts/lap-trinh-web/web001';

    // ... sau đó thêm 'web001' vào mảng allMarkdownStrings
    const allMarkdownStrings = [
      // ... các bài viết cũ ...
      web001,
    ];
    \`\`\`
    
Vậy là xong! Hệ thống sẽ tự động nhận diện và hiển thị bài viết của bạn trên trang web.
`;
