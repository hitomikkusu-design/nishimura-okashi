import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-warm-brown text-warm-cream py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-warm-cream">西村菓子店</h3>
            <p className="text-sm leading-relaxed">
              創業75年。元コックの「西村のおんちゃん」が、今日も一つひとつ、コツコツと手づくりしています。
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-warm-cream">お問い合わせ</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>高知県中土佐町久礼</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:" className="hover:underline">
                  お電話でお問い合わせください
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:" className="hover:underline">
                  メールでお問い合わせ
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-warm-cream">フォローする</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-warm-cream/20 rounded-full hover:bg-warm-cream/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-warm-cream/20 rounded-full hover:bg-warm-cream/30 transition-colors"
                aria-label="Google Maps"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-cream/30 pt-8">
          <div className="text-center text-sm text-warm-cream/80">
            <p>&copy; 2024 西村菓子店. All rights reserved.</p>
            <p className="mt-2">高知県中土佐町久礼</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
