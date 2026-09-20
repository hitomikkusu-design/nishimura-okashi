import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapView } from '@/components/Map';

const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('西村甘泉堂 高知県高岡郡中土佐町久礼6528')}`;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-cream">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden bg-warm-charcoal">
          <div className="relative z-10 container text-center text-warm-cream">
            <p className="tracking-[0.3em] text-xs md:text-sm text-warm-accent mb-6 uppercase">
              創業75年
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-warm-cream">
              西村甘泉堂
            </h1>
            <div className="w-16 h-px bg-warm-accent mx-auto mb-6" />
            <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed opacity-90">
              元コックの「西村のおんちゃん」が、今日も一つひとつ、
              <br className="hidden md:block" />
              コツコツと手づくりしています。
            </p>
          </div>
        </section>

        {/* Brand Statement Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-2xl text-center">
            <p className="text-lg md:text-xl leading-loose text-gray-700">
              安心して食べられる、やさしく懐かしい、
              <br className="hidden md:block" />
              昔ながらのお菓子です。
            </p>
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
                  image: './images/products-showcase-2.jpg',
                },
                {
                  name: 'いなかまんじゅう',
                  description: '粒あんこをぎゅっと包んだ、昔ながらのまんじゅう',
                  image: './images/products-showcase-1.jpg',
                },
                {
                  name: '栗まんじゅう',
                  description: '白あんこと栗を包んだ、風味豊かなまんじゅう',
                  image: './images/products-showcase-1.jpg',
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
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-warm-brown">
              西村甘泉堂について
            </h2>
            <div className="w-16 h-px bg-warm-accent mx-auto mb-6" />
            <p className="text-gray-700 mb-4 leading-relaxed">
              創業75年の西村甘泉堂。元コックの「西村のおんちゃん」が、毎日一つひとつ丁寧に手づくりしています。
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              安心して食べられる、やさしく懐かしい、昔ながらのお菓子。それが西村甘泉堂のこだわりです。
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-warm-brown text-white rounded-lg hover:opacity-90 transition-all duration-200 font-medium"
            >
              詳しく知る
              <ArrowRight size={18} />
            </Link>
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
                  西村甘泉堂
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
