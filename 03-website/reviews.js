// =============================================================
// DỮ LIỆU WEBSITE CỦA MASHA
// Muốn thêm review mới: nhắn Claude, hoặc chép một khối { ... }
// bên dưới, dán thêm vào và sửa thông tin.
//
// trangThai:
//   "da-review"  = Masha đã dùng thử thật (có Điểm lười)
//   "sap-review" = đang để mắt, thông tin tổng hợp từ đánh giá người mua
// Khi đã quay xong video một món "sap-review": đổi thành "da-review",
// thêm diemLuoi, sửa uu/nhuoc theo trải nghiệm thật, điền video.
// =============================================================

const MASHA = {
  // Dán link trang cá nhân của Masha vào đây. Để trống "" thì nút sẽ tự ẩn.
  social: {
    tiktok: "",
    facebook: "",
    youtube: "",
    threads: ""
  }
};

const REVIEWS = [
  // ---------------- MASHA ĐÃ THỬ ----------------
  {
    trangThai: "da-review",
    ten: "Cối xay tỏi ớt kéo dây LocknLock 180ml",
    nhom: "Đồ bếp",
    gia: 80825, // giá lúc viết review (đ)
    diemLuoi: 9, // "Điểm lười" trên thang 10
    ngay: "2026-10-17",
    usp: "Kéo dây 3-5 lần là tỏi ớt nhuyễn, không cần điện, không cay tay.",
    uu: [
      "Xay được tỏi, ớt, hành, cả đồ ăn dặm",
      "Tháo ra rửa dễ, không bám mùi",
      "Nhỏ gọn, bếp chung cư để đâu cũng vừa"
    ],
    nhuoc: "Thịt phải cắt nhỏ trước. Kéo nhẹ tay, có người bị nứt cối vì kéo quá mạnh.",
    link: "https://s.shopee.vn/3B8G6Anird",
    // Khi đã đăng video: điền { loai: "tiktok", url: "link video TikTok" }
    // hoặc { loai: "youtube", url: "link video YouTube" }
    video: null,
    anh: "images/coi-xay-toi-locknlock.jpg"
  },
  {
    trangThai: "da-review",
    ten: "Bình xịt dầu ăn 2in1 phun sương TOPGIA 420ml",
    nhom: "Đồ bếp",
    gia: 53100,
    diemLuoi: 8,
    ngay: "2026-10-17",
    usp: "Vừa rót vừa xịt phun sương, ít dầu hơn hẳn khi dùng nồi chiên không dầu.",
    uu: [
      "Sương mịn, phủ đều mặt đồ ăn",
      "Cần nhiều dầu thì bật nắp rót luôn",
      "Dùng được cho chảo, salad, khuôn bánh"
    ],
    nhuoc: "Vòi xịt khá mạnh, xịt gần dễ văng. Nắp có khe nhỏ, nên đậy kỹ.",
    link: "https://s.shopee.vn/9KitRXGz0d",
    video: null,
    anh: "images/binh-xit-dau-topgia.jpg"
  },

  // ---------------- MASHA ĐANG ĐỂ MẮT ----------------
  {
    trangThai: "sap-review",
    ten: "Cây lau tự vắt mini Bentomop (lau bếp, kính)",
    nhom: "Dọn dẹp",
    gia: 75510,
    ngay: "2026-10-17",
    usp: "Lau xong kéo cán là bông tự vắt khô, không chạm tay vào nước bẩn.",
    uu: ["Bán rất chạy, hơn 100 nghìn lượt mỗi tháng", "Đầu nhỏ lau được kẽ bếp, mặt kính", "Kèm thêm bông lau thay"],
    nhuoc: "Một số người bị giao thiếu bông, cán tuột hoặc kéo vắt bị kẹt sau thời gian dùng.",
    link: "https://s.shopee.vn/2gBzVFpcsY",
    anh: "images/cay-lau-bentomop.jpg"
  },
  {
    trangThai: "sap-review",
    ten: "Bộ 15 hộp đựng thực phẩm DELI x VUSIGN",
    nhom: "Gọn nhà",
    gia: 152100,
    ngay: "2026-10-17",
    usp: "15 hộp nhiều cỡ lồng vào nhau gọn gàng, dùng được lò vi sóng và tủ đông.",
    uu: ["Đủ cỡ từ nhỏ đến lớn", "Lồng gọn vào nhau khi không dùng", "Cả bộ dưới 200k"],
    nhuoc: "Có người nhận hộp bị vỡ do vận chuyển, nhựa khá mỏng, nắp có thể giãn sau khi rửa.",
    link: "https://s.shopee.vn/AUuqpgCXds",
    anh: "images/bo-15-hop-deli.jpg"
  },
  {
    trangThai: "sap-review",
    ten: "Chổi cọ nồi inox 304 có móc treo",
    nhom: "Dọn dẹp",
    gia: 14900,
    ngay: "2026-10-17",
    usp: "Sợi inox chà sạch vết cháy, dầu mỡ bám lâu mà không cần ngâm.",
    uu: ["Giá rất rẻ, khoảng 15k", "Có móc treo gọn", "Rất nhiều người mua"],
    nhuoc: "Một số người phản ánh đầu chổi bung xòe sau vài lần dùng.",
    link: "https://s.shopee.vn/2qVPhYozXb",
    anh: "images/choi-co-noi-inox.jpg"
  },
  {
    trangThai: "sap-review",
    ten: "Kệ gia vị hành tỏi dán tường JYoohome",
    nhom: "Gọn nhà",
    gia: 18460,
    ngay: "2026-10-17",
    usp: "Dán tường không cần khoan, gom gọn hành tỏi gia vị cho bếp nhỏ.",
    uu: ["Không cần khoan tường", "Shop ghi chịu tải 10kg", "Hợp bếp chung cư"],
    nhuoc: "Một số người thấy miếng dán yếu, phải dùng thêm keo; kệ có thể bị móp khi giao.",
    link: "https://s.shopee.vn/50ZuHXgk92",
    anh: "images/ke-gia-vi-dan-tuong.jpg"
  },
  {
    trangThai: "sap-review",
    ten: "Kệ để vung nồi, để thớt ECOCO có khay hứng",
    nhom: "Gọn nhà",
    gia: 180000,
    ngay: "2026-10-17",
    usp: "Gom vung nồi và thớt vào một chỗ, có khay hứng nước, đặt bàn không cần khoan.",
    uu: ["Rất ít lời chê", "Có khay hứng nước", "Đặt trên bàn, không cần khoan"],
    nhuoc: "Có người nhận kệ bị móp hoặc mối hàn hơi lệch.",
    link: "https://s.shopee.vn/7VHFGC1Qm9",
    anh: "images/ke-vung-noi-ecoco.jpg"
  },
  {
    trangThai: "sap-review",
    ten: "Thùng đựng gạo chống ẩm uforu 5-15kg",
    nhom: "Gọn nhà",
    gia: 111600,
    ngay: "2026-10-17",
    usp: "Nắp trượt lấy gạo bằng một tay, nhiều cỡ 5-15kg.",
    uu: ["Kiểu dáng gọn, dễ thương", "Nhiều cỡ để chọn", "Lấy gạo bằng một tay"],
    nhuoc: "Nhiều người phản ánh nắp không thật khít, nắp trượt hơi rít.",
    link: "https://s.shopee.vn/7fafSV0nRC",
    anh: "images/thung-gao-uforu.jpg"
  },
  {
    trangThai: "sap-review",
    ten: "Dụng cụ làm thịt viên 4 ngăn",
    nhom: "Đồ bếp",
    gia: 11800,
    ngay: "2026-10-17",
    usp: "Múc một lần ra viên thịt tròn đều, không dính tay.",
    uu: ["Giá chỉ khoảng 12k", "Viên tròn đều", "Đỡ bẩn tay"],
    nhuoc: "Nhựa khá mỏng, có người bị gãy cán; viên nhỏ hơn trong ảnh.",
    link: "https://s.shopee.vn/5q91H8tpSQ",
    anh: "images/lam-thit-vien.jpg"
  },
  {
    trangThai: "sap-review",
    ten: "Bàn chải vệ sinh khe góc xoay 360 JYoohome",
    nhom: "Dọn dẹp",
    gia: 13490,
    ngay: "2026-10-17",
    usp: "Đầu chải xoay 360 độ, luồn vào khe góc, ron gạch, rãnh cửa.",
    uu: ["Vào được khe hẹp", "Giá rẻ", "Dùng cho cả bếp và nhà tắm"],
    nhuoc: "Có người nhận hàng bị gãy hoặc thiếu phụ kiện; đầu chải hay xoay khi chà mạnh.",
    link: "https://s.shopee.vn/9V2JdqGLfe",
    anh: "images/ban-chai-xoay-360.jpg"
  },
  {
    trangThai: "sap-review",
    ten: "Thớt kháng khuẩn chống trượt Inochi Yoko",
    nhom: "Đồ bếp",
    gia: 69761,
    ngay: "2026-10-17",
    usp: "Thớt nhựa kháng khuẩn, chống nấm mốc (theo mô tả của shop).",
    uu: ["Thương hiệu Inochi", "Dễ vệ sinh hơn thớt gỗ", "Nhiều màu"],
    nhuoc: "Nhiều người chê thớt vẫn trơn trượt dù quảng cáo chống trượt, và hơi mỏng.",
    link: "https://s.shopee.vn/5q91H87m9n",
    anh: "images/thot-inochi.jpg"
  },
  {
    trangThai: "sap-review",
    ten: "Bộ lọ gia vị kèm muỗng và khay Hiwa",
    nhom: "Gọn nhà",
    gia: 32250,
    ngay: "2026-10-17",
    usp: "Lọ gia vị có muỗng gắn sẵn và khay đựng.",
    uu: ["Có muỗng gắn sẵn", "Có khay gom gọn", "Giá rẻ"],
    nhuoc: "Nhiều người phản ánh nắp không kín, nhựa giòn dễ vỡ.",
    link: "https://s.shopee.vn/AKbQdNDAyr",
    anh: "images/lo-gia-vi-hiwa.jpg"
  }
];

// ---------------- MASHA KHÔNG KHUYÊN MUA ----------------
// Tổng hợp từ đánh giá 1-3 sao của người mua trên Shopee (17/10/2026).
// Không gắn link mua.
const KHONG_KHUYEN = [
  { ten: "Miếng lót bếp từ chống xước (loại mỏng)", lyDo: "Nhiều người phản ánh miếng lót bị cháy, chảy nhựa khi đun. Có rủi ro an toàn." },
  { ten: "Nồi cơm điện mini mang tên CUCKOO/GUGKOO giá rẻ", lyDo: "Có người nghi hàng giả thương hiệu, không có tem thông số, hỏng sau vài lần nấu. Đồ điện thì nên mua hàng chính hãng có bảo hành rõ." },
  { ten: "Set hộp inox \"304\" giá rẻ", lyDo: "Nhiều người thử bằng nam châm và cho rằng không phải inox 304 như mô tả. Đồ đựng thực phẩm cần rõ chất liệu." },
  { ten: "Máy tạo bọt cà phê mini sạc USB không rõ bảo hành", lyDo: "Nhiều người báo máy hỏng sau vài ngày đến vài tuần, chính sách bảo hành không rõ ràng." },
  { ten: "Dụng cụ ép tỏi tay cầm nhựa giá rẻ", lyDo: "Nhiều người báo gãy tay cầm ngay lần đầu, ép không được như quảng cáo." },
  { ten: "Thùng rác dán tường treo tủ bếp giá rẻ", lyDo: "Tỉ lệ đánh giá thấp cao, nhiều người nói hàng khác hình, ọp ẹp, nắp không kín." },
  { ten: "Muỗng xới cơm tự đứng giá rẻ", lyDo: "Đợt hàng gần đây nhiều lời chê vỡ, bung đế, đế bị gỉ; chất liệu nhựa chưa rõ." }
];
