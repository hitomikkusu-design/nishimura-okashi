import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-cream">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-warm-brown">
              西村菓子店について
            </h1>
            <div className="section-divider" />
            <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto">
              創業75年。元コックの「西村のおんちゃん」が、毎日一つひとつ丁寧に手づくりしています。
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="py-12 md:py-20 bg-warm-beige">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/manus-storage/storefront_8c9231cf.png"
                  alt="西村菓子店の店舗"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-warm-brown">
                  75年の歴史
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  西村菓子店は、創業から75年間、高知県中土佐町久礼で愛されてきた昔ながらのお菓子屋さんです。
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  元コックの「西村のおんちゃん」が、毎日一つひとつ丁寧に手づくりしています。その想いと技は、今も変わることなく、多くのお客様に喜ばれています。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  安心して食べられる、やさしく懐かしい、昔ながらのお菓子。それが西村菓子店のこだわりです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-warm-brown">
              こだわり
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: '素材へのこだわり',
                  description: '厳選した素材を使い、安心して食べられるお菓子を作っています。',
                  icon: '🌾',
                },
                {
                  title: '手づくりへのこだわり',
                  description: 'すべてのお菓子を、おんちゃんの手で丁寧に作られています。',
                  icon: '✋',
                },
                {
                  title: '懐かしさへのこだわり',
                  description: '昔ながらの製法を守りながら、心温まるお菓子を作り続けています。',
                  icon: '🏠',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-warm-beige rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-warm-brown">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Craftsman Section */}
        <section className="py-12 md:py-20 bg-warm-beige">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-warm-brown">
                  西村のおんちゃん
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  元コックとしてのキャリアを持つ「西村のおんちゃん」。その経験と想いが、すべてのお菓子に詰まっています。
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  毎日、朝早くから店に立ち、一つひとつのお菓子を丁寧に作っています。その姿勢は、75年間変わることなく、多くのお客様に信頼されています。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  「安心して食べられるお菓子を作ること」それが、おんちゃんの人生のテーマです。
                </p>
              </div>
              <div>
                <img
                  src="/manus-storage/about-craftsman_e10afcbf.png"
                  alt="西村のおんちゃん"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6 text-warm-brown">
              西村菓子店の商品をご紹介
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              75年の歴史と想いが詰まった、おんちゃんの手づくりお菓子。ぜひ、ご賞味ください。
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-warm-accent text-white rounded-lg hover:opacity-90 transition-all duration-200 font-medium"
            >
              商品を見る
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
