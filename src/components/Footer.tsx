import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-400">ShopHub</h3>
            <p className="text-slate-300">
              Điểm đến một cửa cho các sản phẩm chất lượng với giá cả không thể cạnh tranh. 
              Chúng tôi cam kết cung cấp dịch vụ khách hàng xuất sắc và sự hài lòng.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Liên Kết Nhanh</h4>
            <ul className="space-y-2">
              {['Về Chúng Tôi', 'Liên Hệ', 'Câu Hỏi Thường Gặp', 'Thông Tin Vận Chuyển', 'Đổi Trả', 'Hướng Dẫn Size'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Danh Mục</h4>
            <ul className="space-y-2">
              {['Điện Tử', 'Quần Áo', 'Nhà Cửa & Vườn', 'Thể Thao', 'Sách', 'Đồ Chơi'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Liên Hệ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-slate-300">support@shophub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-slate-300">+84 (028) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="text-slate-300">123 Đường Thương Mại, TP.HCM, Việt Nam</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 ShopHub. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200">
                Chính Sách Bảo Mật
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200">
                Điều Khoản Dịch Vụ
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200">
                Chính Sách Cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;