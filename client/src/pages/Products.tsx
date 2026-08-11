import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Products() {
  const products = [
    {
      name: '手づくり大福',
      category: '大福',
      description: '季節の素材を使った、やさしい甘さの大福。もちもちの食感と、上質な素材の味わいが特徴です。',
      image: '/images/products-showcase-1.jpg',
      price: '¥150 - ¥200',
    },
    {
      name: '昔ながらのせんべい',
      category: 'せんべい',
      description: 'コツコツと焼き上げた、香ばしいせんべい。おんちゃんの手づくりならではの、素朴で深い味わいです。',
      image: '/images/products-showcase-2.jpg',
      price: '¥100 - ¥150',
    },
    {
      name: '季節の和菓子',
      category: '和菓子',
      description: 'その季節ならではの、心ときめく和菓子。春は桜、夏は涼しさ、秋は紅葉、冬は雪。季節を感じるお菓子です。',
      image: '/images/products-showcase-1.jpg',
      price: '¥200 - ¥300',
    },
    {
      name: 'どら焼き',
      category: '焼き菓子',
      description: 'ふんわりとした生地と、上質な小豆あんのハーモニー。毎日焼き立てでお作りしています。',
      image: '/images/products-showcase-2.jpg',
      price: '¥120 - ¥180',
    },
    {
      name: '羊羹（ようかん）',
      category: '羊羹',
      description: '伝統的な製法で作られた羊羹。上品な甘さと、なめらかな食感が特徴です。',
      image: '/images/products-showcase-1.jpg',
      price: '¥300 - ¥500',
    },
    {
      name: 'みたらし団子',
      category: '団子',
      description: 'もちもちの団子に、甘辛いタレをかけた、懐かしい味わい。温かいお茶と一緒にどうぞ。',
      image: '/images/products-showcase-2.jpg',
      price: '¥100 - ¥150',
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
                  西村菓子店のすべてのお菓子は、厳選した素材を使って作られています。安心して食べられる、体に優しいお菓子を心がけています。
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
