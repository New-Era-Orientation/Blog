import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6">Giới thiệu New Era Orientation</h1>
      <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed">
        <p>
          <strong>New Era Orientation</strong> được thành lập với sứ mệnh trở thành một nền tảng giáo dục trực tuyến hàng đầu, chuyên cung cấp kiến thức về Tin học cho học sinh, sinh viên và những người yêu thích công nghệ tại Việt Nam. Chúng tôi tin rằng việc tiếp cận kiến thức công nghệ một cách có hệ thống và dễ hiểu là chìa khóa để mở ra nhiều cơ hội trong tương lai.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Mục tiêu của chúng tôi</h2>
        <ul>
          <li><strong>Hệ thống hóa kiến thức:</strong> Cung cấp các bài giảng, tài liệu được biên soạn bám sát chương trình giáo dục phổ thông (lớp 10, 11, 12) cũng như các kiến thức nền tảng về lập trình và thuật toán.</li>
          <li><strong>Hỗ trợ thực hành:</strong> Mang đến các bài tập, đề thi và các chuyên đề ôn luyện giúp người học củng cố kiến thức và chuẩn bị tốt cho các kỳ thi quan trọng như Tốt nghiệp THPT, Học sinh giỏi.</li>
          <li><strong>Phát triển kỹ năng thực tế:</strong> Cung cấp các khóa học và tài liệu về Tin học văn phòng theo chuẩn quốc tế (MOS/IC3), giúp người học tự tin ứng dụng công nghệ trong học tập và công việc.</li>
          <li><strong>Xây dựng cộng đồng:</strong> Tạo ra một không gian trao đổi, học hỏi nơi mọi người có thể chia sẻ kinh nghiệm, đặt câu hỏi và cùng nhau phát triển.</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">Đội ngũ</h2>
        <p>
          Đội ngũ của New Era Orientation là những giáo viên, kỹ sư và chuyên gia có nhiều năm kinh nghiệm trong lĩnh vực giảng dạy và phát triển phần mềm. Chúng tôi luôn nỗ lực để mang đến những nội dung chất lượng, chính xác và cập nhật nhất.
        </p>
        <p>
          Cảm ơn bạn đã ghé thăm và hy vọng New Era Orientation sẽ là người bạn đồng hành đáng tin cậy trên con đường chinh phục kiến thức Tin học của bạn!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;