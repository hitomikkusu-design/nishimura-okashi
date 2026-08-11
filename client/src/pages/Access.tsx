import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapView } from '@/components/Map';
import { Link } from 'wouter';

const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('西村甘泉堂 高知県高岡郡中土佐町久礼6528')}`;

export default function Access() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-cream">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-warm-brown">
              店舗案内
            </h1>
            <div className="section-divider" />
          </div>
        </section>

        {/* Store Info */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Map */}
              <div>
                <div className="rounded-lg h-96 shadow-lg overflow-hidden">
                  <MapView className="h-full" googleMapsUrl={GOOGLE_MAPS_URL} />
                </div>
              </div>

              {/* Store Details */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-warm-brown">
                  西村甘泉堂
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <MapPin className="text-warm-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-warm-brown mb-2">住所</h3>
                      <p className="text-gray-700">
                        高知県高岡郡中土佐町久礼6528
                      </p>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warm-accent hover:underline text-sm mt-2 inline-block"
                      >
                        Google Mapsで見る
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <Clock className="text-warm-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-warm-brown mb-2">営業時間</h3>
                      <p className="text-gray-700">10:00 - 17:00頃</p>
                    </div>
                  </div>

                  {/* Closed */}
                  <div className="flex gap-4">
                    <Clock className="text-warm-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-warm-brown mb-2">定休日</h3>
                      <p className="text-gray-700">水曜日</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <Phone className="text-warm-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-warm-brown mb-2">電話番号</h3>
                      <a href="tel:0889-52-2953" className="text-warm-accent hover:underline">
                        0889-52-2953
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <Mail className="text-warm-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-warm-brown mb-2">メール</h3>
                      <a href="mailto:" className="text-warm-accent hover:underline">
                        メールでお問い合わせ
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Access Info */}
        <section className="py-12 md:py-20 bg-warm-beige">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-warm-brown">
              アクセス情報
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold mb-3 text-warm-brown">
                  公共交通機関でのアクセス
                </h3>
                <p>
                  高知駅からバスで約1時間。中土佐町久礼バス停下車、徒歩5分。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-warm-brown">
                  お車でのアクセス
                </h3>
                <p>
                  高知自動車道須崎ICから約20分。駐車場あり。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-warm-brown">
                  周辺施設
                </h3>
                <p>
                  高知県中土佐町久礼は、昔ながらの町並みが残る、歴史的な地域です。周辺には、古い建物や、伝統工芸の工房なども多くあります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SNS Links */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-8 text-warm-brown">
              SNSでもフォローしてください
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-warm-accent text-white rounded-lg hover:opacity-90 transition-all duration-200 font-medium inline-flex items-center justify-center gap-2"
              >
                Instagram
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-warm-brown text-white rounded-lg hover:opacity-90 transition-all duration-200 font-medium inline-flex items-center justify-center gap-2"
              >
                Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 md:py-20 bg-warm-beige">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6 text-warm-brown">
              ご不明な点はお気軽にお問い合わせください
            </h2>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-warm-accent text-white rounded-lg hover:opacity-90 transition-all duration-200 font-medium"
            >
              お問い合わせフォーム
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
