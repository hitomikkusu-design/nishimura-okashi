import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

// TODO: 実際の送信先メールアドレスに差し替えてください
const CONTACT_EMAIL = 'info@nishimura-kansendou.example.com';
const CONTACT_PHONE = '0889-52-2953';

const SUBJECT_LABELS: Record<string, string> = {
  product: '商品についてのお問い合わせ',
  order: 'ご注文について',
  event: 'イベント・企画について',
  other: 'その他のお問い合わせ',
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('すべての必須項目を入力してください');
      return;
    }

    const subjectLabel = SUBJECT_LABELS[formData.subject] ?? formData.subject;
    const mailSubject = `【西村甘泉堂 お問い合わせ】${subjectLabel}`;
    const mailBody = [
      `お名前: ${formData.name}`,
      `メールアドレス: ${formData.email}`,
      formData.phone ? `電話番号: ${formData.phone}` : null,
      '',
      formData.message,
    ]
      .filter((line) => line !== null)
      .join('\n');

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    toast.success('メールアプリを開きます。内容を確認して送信してください。');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-warm-cream">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-warm-brown">
              お問い合わせ
            </h1>
            <div className="section-divider" />
            <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto">
              ご質問やご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 md:py-20 bg-warm-beige">
          <div className="container max-w-2xl">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-warm-brown mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-accent"
                  placeholder="山田太郎"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-warm-brown mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-accent"
                  placeholder="example@example.com"
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold text-warm-brown mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-accent"
                  placeholder="090-1234-5678"
                />
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-semibold text-warm-brown mb-2">
                  件名 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-accent"
                >
                  <option value="">選択してください</option>
                  <option value="product">商品についてのお問い合わせ</option>
                  <option value="order">ご注文について</option>
                  <option value="event">イベント・企画について</option>
                  <option value="other">その他のお問い合わせ</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-warm-brown mb-2">
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-accent resize-none"
                  placeholder="お問い合わせ内容をお入力ください"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-warm-accent text-white rounded-lg hover:opacity-90 transition-all duration-200 font-semibold"
              >
                送信する
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                <span className="text-red-500">*</span> は必須項目です
              </p>
            </form>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-warm-brown">
              その他のお問い合わせ方法
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone */}
              <div className="bg-warm-beige rounded-lg p-8 text-center">
                <Phone className="mx-auto mb-4 text-warm-accent" size={32} />
                <h3 className="text-xl font-bold mb-3 text-warm-brown">
                  お電話
                </h3>
                <p className="text-gray-700 mb-4">
                  お電話でのお問い合わせもお受けしています。
                </p>
                <a href={`tel:${CONTACT_PHONE}`} className="text-warm-accent hover:underline font-semibold">
                  {CONTACT_PHONE}
                </a>
              </div>

              {/* Email */}
              <div className="bg-warm-beige rounded-lg p-8 text-center">
                <Mail className="mx-auto mb-4 text-warm-accent" size={32} />
                <h3 className="text-xl font-bold mb-3 text-warm-brown">
                  メール
                </h3>
                <p className="text-gray-700 mb-4">
                  メールでのお問い合わせもお受けしています。
                </p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-warm-accent hover:underline font-semibold">
                  メールを送信
                </a>
              </div>

              {/* Visit */}
              <div className="bg-warm-beige rounded-lg p-8 text-center">
                <MapPin className="mx-auto mb-4 text-warm-accent" size={32} />
                <h3 className="text-xl font-bold mb-3 text-warm-brown">
                  ご来店
                </h3>
                <p className="text-gray-700 mb-4">
                  直接ご来店いただくこともできます。
                </p>
                <a href="/access" className="text-warm-accent hover:underline font-semibold">
                  店舗案内を見る
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 bg-warm-beige">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-warm-brown">
              よくあるご質問
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'ご注文はできますか？',
                  a: 'はい、ご注文を承っております。詳しくはお問い合わせください。',
                },
                {
                  q: '配送はしていますか？',
                  a: '配送についてはお問い合わせください。ご相談させていただきます。',
                },
                {
                  q: 'ギフト用のラッピングはできますか？',
                  a: 'はい、ギフト用のラッピングもお承りしています。お気軽にお問い合わせください。',
                },
                {
                  q: 'アレルギー対応はしていますか？',
                  a: 'アレルギーについてのご相談もお承りしています。詳しくはお問い合わせください。',
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-bold text-warm-brown mb-3">
                    Q: {faq.q}
                  </h3>
                  <p className="text-gray-700">
                    A: {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
