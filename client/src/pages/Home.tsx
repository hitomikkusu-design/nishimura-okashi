import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapView } from '@/components/Map';

const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('西村菓子店 高知県高岡郡中土佐町久礼6528')}`;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-cream">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen max-h-96 md:max-h-screen flex items-center justify-center overflow-hidden">
          <img
            src="/images/storefront.jpg"
            alt="西村菓子店の店構えと店員"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 container text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              西村菓子店
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              創業75年。元コックの「西村のおんちゃん」が、<br />
              今日も一つひとつ、コツコツと手づくりしています。
            </p>
            <p className="text-base md:text-lg">
              安心して食べられる、やさしく懐かしい、昔ながらのお菓子です。
            </p>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-brown">
              西村のおんちゃんが語る、<br className="md:hidden" />西村菓子店の物語
            </h2>
            <div className="section-divider" />

            <div className="max-w-3xl mx-auto">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/7xRmgZE8PLo"
                  title="西村のおんちゃんが語る、西村菓子店の物語"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="text-center text-gray-600 mt-4 text-sm">
                75年の歴史と、おんちゃんの想いをお聞きください
              </p>
            </div>
          </div>
        </section>

        {/* Products Highlight Section */}
        <section className="py-12 md:py-20 bg-warm-beige">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-warm-brown">
              おすすめの商品
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: '浮粉まんじゅう',
                  description: '白あんこをたっぷり包んだ、もちもちのまんじゅう',
                  image: '/images/products-showcase-2.jpg',
                },
                {
                  name: 'いなかまんじゅう',
                  description: '粒あんこをぎゅっと包んだ、昔ながらのまんじゅう',
                  image: '/images/products-showcase-1.jpg',
                },
                {
                  name: '栗まんじゅう',
                  description: '白あんこと栗を包んだ、風味豊かなまんじゅう',
                  image: '/images/products-showcase-1.jpg',
                },
              ].map((product, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-48 bg-gray-300 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-warm-brown mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-warm-accent text-white rounded-lg hover:opacity-90 transition-all duration-200 font-medium"
              >
                すべての商品を見る
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* About Section Preview */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/images/about-craftsman-1.jpg"
                  alt="西村のおんちゃん"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-warm-brown">
                  西村菓子店について
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  創業75年の西村菓子店。元コックの「西村のおんちゃん」が、毎日一つひとつ丁寧に手づくりしています。
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  安心して食べられる、やさしく懐かしい、昔ながらのお菓子。それが西村菓子店のこだわりです。
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-warm-brown text-white rounded-lg hover:opacity-90 transition-all duration-200 font-medium"
                >
                  詳しく知る
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Store Info Preview */}
        <section className="py-12 md:py-20 bg-warm-beige">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-warm-brown">
              店舗案内
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="rounded-lg h-64 md:h-96 overflow-hidden">
                  <MapView className="h-full" googleMapsUrl={GOOGLE_MAPS_URL} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-warm-brown">
                  西村菓子店
                </h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="font-semibold text-warm-brown">住所</p>
                    <p className="text-gray-700">高知県高岡郡中土佐町久礼6528</p>
                  </div>
                  <div>
                    <p className="font-semibold text-warm-brown">営業時間</p>
                    <p className="text-gray-700">10:00 - 17:00頃</p>
                  </div>
                  <div>
                    <p className="font-semibold text-warm-brown">定休日</p>
                    <p className="text-gray-700">水曜日</p>
                  </div>
                </div>
                <Link
                  href="/access"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-warm-accent text-white rounded-lg hover:opacity-90 transition-all duration-200 font-medium"
                >
                  詳しいアクセス情報
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
