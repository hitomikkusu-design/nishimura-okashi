import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'ホーム', href: '/' },
    { label: '西村菓子店について', href: '/about' },
    { label: 'おんちゃんの物語', href: '/story' },
    { label: '商品紹介', href: '/products' },
    { label: '店舗案内', href: '/access' },
    { label: 'お問い合わせ', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-warm-cream shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/manus-storage/logo-nishimura_ea8f83d5.png"
              alt="西村菓子店"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-warm-brown hidden sm:inline">
              西村菓子店
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-warm-brown transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-warm-brown transition-colors"
            aria-label="メニュー"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-in fade-in">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-warm-beige rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
