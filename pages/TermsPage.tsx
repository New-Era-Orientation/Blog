import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6">Điều khoản & Bản quyền</h1>
      <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Quy định chung</h2>
        <p>
          Bằng việc truy cập và sử dụng website New Era Orientation, bạn đồng ý tuân thủ các điều khoản và điều kiện được nêu ra dưới đây. Nếu bạn không đồng ý, vui lòng không sử dụng website.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Sử dụng nội dung</h2>
        <p>
          Tất cả nội dung, bao gồm bài viết, hình ảnh, tài liệu trên New Era Orientation đều thuộc bản quyền của chúng tôi hoặc được sưu tầm từ các nguồn công khai.
        </p>
        <ul>
            <li>Bạn được phép xem, tải về và in nội dung cho mục đích cá nhân, phi thương mại.</li>
            <li>Nghiêm cấm sao chép, phân phối lại, hoặc sử dụng nội dung cho mục đích thương mại mà không có sự cho phép bằng văn bản từ chúng tôi.</li>
            <li>Khi chia sẻ lại thông tin, vui lòng ghi rõ nguồn "Theo New Era Orientation" và dẫn link về bài viết gốc.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Miễn trừ trách nhiệm</h2>
        <p>
          Mặc dù chúng tôi luôn nỗ lực để đảm bảo thông tin trên website là chính xác và cập nhật, chúng tôi không cam kết hay bảo đảm về tính đầy đủ, chính xác tuyệt đối của nội dung. Mọi thông tin chỉ mang tính chất tham khảo. Chúng tôi không chịu trách nhiệm cho bất kỳ tổn thất nào phát sinh từ việc sử dụng thông tin trên website.
        </p>

        {/* <h2 className="text-2xl font-bold mt-8 mb-4">4. Đóng góp tài liệu</h2>
        <p>
            Khi bạn đóng góp tài liệu cho New Era Orientation, bạn cam đoan rằng bạn có quyền sở hữu hoặc quyền sử dụng hợp pháp đối với tài liệu đó và đồng ý cho phép chúng tôi sử dụng, biên tập và đăng tải trên website.
        </p> */}

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Thay đổi điều khoản</h2>
        <p>
          Chúng tôi có quyền thay đổi các điều khoản này vào bất kỳ lúc nào. Các thay đổi sẽ có hiệu lực ngay khi được đăng tải trên website.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;