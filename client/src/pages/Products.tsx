import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Products() {
  const products = [
    {
      name: 'カステラまんじゅう',
      category: 'まんじゅう',
      description: 'カステラ生地でつくる、ふんわりとした素朴な味わいのまんじゅうです。',
      image: '/images/products-showcase-1.jpg',
      price: '¥130',
    },
    {
      name: '浮粉まんじゅう',
      category: '白あんこ入り',
      description: '白あんこをたっぷり包んだ、もちもちの浮粉まんじゅう。',
      image: '/images/products-showcase-2.jpg',
      price: '¥130',
    },
    {
      name: 'らくがん',
      category: '黒あんこ入り',
      description: '黒あんこを包んだ、やさしい甘さのらくがんです。',
      image: '/images/products-showcase-1.jpg',
      price: '¥130',
    },
    {
      name: 'いなかまんじゅう',
      category: '粒あんこ入り',
      description: '粒あんこをぎゅっと包んだ、昔ながらのいなかまんじゅう。',
      image: '/images/products-showcase-1.jpg',
      price: '¥130',
    },
    {
      name: 'シナモン',
      category: '白あんこ入り',
      description: 'シナモンの香りが広がる、白あんこ入りのまんじゅうです。',
      image: '/images/products-showcase-1.jpg',
      price: '¥130',
    },
    {
      name: '栗まんじゅう',
      category: '白あんこと栗入り',
      description: '白あんこと栗を包んだ、風味豊かなまんじゅうです。',
      image: '/images/products-showcase-1.jpg',
      price: '¥130',
    },
    {
      name: '中菓子',
      category: '高知の郷土菓子',
      description: '高知県でも作っているお店がわずか3軒しかない、貴重な郷土菓子です。',
      image: '/images/product-chugashi.jpg',
      price: '¥250',
    },
    {
      name: 'しょうが焼き',
      category: '焼き菓子',
      description: 'しょうがの風味がふんわり香る、素朴な焼き菓子です。',
      image: '/images/product-shogayaki.jpg',
      price: '―',
    },
    {
      name: '堅パン',
      category: '焼き菓子',
      description: '昔ながらの製法でじっくり焼き上げた、素朴な堅パンです。',
      image: '/images/product-katapan.jpg',
      price: '―',
    },
    {
      name: 'ケンピ',
      category: '小麦粉のケンピ',
      description: '昔ながらの小麦粉で作る、素朴な味わいのケンピ菓子です。',
      image: '/images/product-kenpi.jpg',
      price: '¥250',
    },
    {
      name: 'かつおモナカ',
      category: 'つぶあん・こしあん・ゆずあん',
      description: '土佐かつおの形をしたモナカ。つぶあん・こしあん・ゆずあんの3種類からお選びいただけます。',
      image: '/images/product-katsuo-monaka.jpg',
      price: '¥280',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-warm-cream">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-warm-brown">
              商品紹介
            </h1>
            <div className="section-divider" />
            <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto">
              75年の歴史と想いが詰まった、おんちゃんの手づくりお菓子。
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-20 bg-warm-beige">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-56 bg-gray-300 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold text-warm-accent mb-2 uppercase tracking-wide">
                      {product.category}
                    </p>
                    <h3 className="text-xl font-bold text-warm-brown mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-warm-brown">
                        {product.price}
                      </span>
                      <button className="px-4 py-2 bg-warm-accent text-white text-sm rounded-lg hover:opacity-90 transition-all duration-200">
                        詳細
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Products Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-warm-brown">
              商品について
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold mb-3 text-warm-brown">
                  素材へのこだわり
                </h3>
                <p>
                  西村甘泉堂のすべてのお菓子は、厳選した素材を使って作られています。安心して食べられる、体に優しいお菓子を心がけています。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-warm-brown">
                  手づくりへのこだわり
                </h3>
                <p>
                  すべてのお菓子が、おんちゃんの手で丁寧に作られています。機械に頼らず、昔ながらの製法を守りながら、毎日新しいお菓子を作り続けています。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-warm-brown">
                  季節の商品
                </h3>
                <p>
                  季節ごとに、その季節ならではのお菓子をご用意しています。春は桜、夏は涼しさ、秋は紅葉、冬は雪。季節を感じるお菓子をぜひご賞味ください。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-warm-brown">
                  ご注文・ご購入について
                </h3>
                <p>
                  店舗での直接販売の他、ご注文も承っております。詳しくはお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
