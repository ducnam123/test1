import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div>
            <Mail className="h-16 w-16 text-amber-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cập Nhật Những Ưu Đãi Mới Nhất
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Đăng ký nhận bản tin của chúng tôi và là người đầu tiên biết về sản phẩm mới, 
              ưu đãi độc quyền và khuyến mãi đặc biệt.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập địa chỉ email của bạn"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>

          {isSubscribed && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl max-w-md mx-auto">
              Cảm ơn bạn đã đăng ký! Vui lòng kiểm tra email để xác nhận.
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
            <span>✓ Không spam</span>
            <span>✓ Hủy đăng ký bất cứ lúc nào</span>
            <span>✓ Cập nhật hàng tuần</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;