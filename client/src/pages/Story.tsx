import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Story() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-cream">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-warm-brown">
              西村のおんちゃんの物語
            </h1>
            <div className="section-divider" />
          </div>
        </section>

        {/* Story Content */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container max-w-3xl">
            {/* Profile */}
            <div className="mb-12">
              <img
                src="/manus-storage/about-craftsman_e10afcbf.png"
                alt="西村のおんちゃん"
                className="rounded-lg shadow-lg w-full mb-8"
              />
              <div className="bg-warm-beige rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-warm-brown">
                  プロフィール
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  西村菓子店の創業者にして、今も毎日店に立つ「西村のおんちゃん」。元コックとしてのキャリアを持ち、その経験と想いが、すべてのお菓子に詰まっています。
                </p>
              </div>
            </div>

            {/* Career Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-warm-brown">
                元コックから菓子職人へ
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  「西村のおんちゃん」は、もともとコックとしてのキャリアを持っていました。その経験の中で、「食べる人の喜ぶ顔を見たい」という想いが強くなっていきました。
                </p>
                <p>
                  やがて、その想いは「昔ながらのお菓子を作りたい」という夢に変わり、西村菓子店を創業することになったのです。
                </p>
                <p>
                  コックとしての経験と、菓子職人としての想いが合わさることで、西村菓子店独特の「やさしく懐かしい、昔ながらのお菓子」が生まれました。
                </p>
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-warm-brown">
                「安心」へのこだわり
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  「安心して食べられるお菓子を作ること」それが、おんちゃんの人生のテーマです。
                </p>
                <p>
                  毎日、朝早くから店に立ち、一つひとつのお菓子を丁寧に作っています。素材選びから製造まで、すべてのプロセスに、おんちゃんの想いが詰まっています。
                </p>
                <p>
                  「食べる人の笑顔」それが、おんちゃんの最高の報酬です。
                </p>
              </div>
            </div>

            {/* 75 Years Section */}
            <div className="bg-warm-beige rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-warm-brown">
                75年の歴史
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  創業から75年。多くの世代に愛されてきた西村菓子店。その歴史の中で、おんちゃんの想いと技は、今も変わることなく、毎日のお菓子作りに込められています。
                </p>
                <p>
                  「昔ながらのお菓子」それは、単なる懐かしさではなく、おんちゃんが「食べる人の喜ぶ顔」を想いながら作り続けた、75年の想いの結晶なのです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 md:py-20 bg-warm-beige">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-warm-brown">
              おんちゃんが語る、西村菓子店の物語
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="西村のおんちゃんが語る、西村菓子店の物語"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
