import React, { useMemo, useState } from 'react';
import Hero from '../../components/Hero';
import SubNav from '../../components/SubNav';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Filter, Package, Heart, Search } from 'lucide-react';

export default function Product() {
  const subNav = ['Categories', 'Featured', 'Hot Products', 'New Arrivals', 'Top Products', 'Reviews'];
  const [activeTab, setActiveTab] = useState(subNav[0]);
  const [productQuery, setProductQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    { id: 1, name: 'E-SPOT Premium Backpack', price: '$89.99', rating: 4.8, reviews: 124, image: 'https://picsum.photos/seed/prod1/400/400', category: 'Accessories' },
    { id: 2, name: 'Wireless Noise-Cancelling Headphones', price: '$199.99', rating: 4.9, reviews: 342, image: 'https://picsum.photos/seed/prod2/400/400', category: 'Electronics' },
    { id: 3, name: 'Smart Fitness Watch', price: '$149.50', rating: 4.7, reviews: 89, image: 'https://picsum.photos/seed/prod3/400/400', category: 'Electronics' },
    { id: 4, name: 'Ergonomic Office Chair', price: '$249.00', rating: 4.6, reviews: 56, image: 'https://picsum.photos/seed/prod4/400/400', category: 'Furniture' },
    { id: 5, name: 'Organic Cotton T-Shirt', price: '$29.99', rating: 4.8, reviews: 210, image: 'https://picsum.photos/seed/prod5/400/400', category: 'Apparel' },
    { id: 6, name: 'Professional Camera Lens', price: '$599.00', rating: 4.9, reviews: 45, image: 'https://picsum.photos/seed/prod6/400/400', category: 'Photography' },
  ];

  const categoryIcons: Record<string, string> = {
    Electronics: '💻',
    Apparel: '👕',
    Accessories: '🎒',
    Furniture: '🪑',
    Photography: '📷',
  };

  const categories = useMemo(() => {
    const counts = products.reduce<Record<string, number>>((acc, product) => {
      acc[product.category] = (acc[product.category] ?? 0) + 1;
      return acc;
    }, {});

    return [{ name: 'All', count: products.length, icon: '🧭' }, ...Object.entries(counts).map(([name, count]) => ({
      name,
      count,
      icon: categoryIcons[name] ?? '📦',
    }))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      const queryMatch =
        product.name.toLowerCase().includes(productQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(productQuery.toLowerCase());
      return categoryMatch && queryMatch;
    });
  }, [productQuery, products, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        bgColor="bg-slate-900"
        accentColor="text-blue-400"
        title="Products"
        subtitle="Discover high-quality products from trusted E-SPOT partners and entrepreneurs. Shop with confidence."
        label="Module"
      />

      {/* Sub Navigation */}
      <SubNav
        items={subNav}
        active={activeTab}
        setActive={setActiveTab}
        color="text-blue-600 border-blue-600"
      />

      {/* Content Section */}
      <div className="flex-1 py-8 sm:py-12 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {activeTab === 'Categories' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Browse by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {categories.map((category, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setActiveTab('Featured');
                    }}
                    className={`bg-white border rounded-2xl p-4 sm:p-6 text-center hover:shadow-md transition-all cursor-pointer group ${
                      selectedCategory === category.name ? 'border-blue-400 bg-blue-50/50' : 'border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform">{category.icon}</div>
                    <h3 className="font-bold text-slate-900 mb-1">{category.name}</h3>
                    <p className="text-xs text-slate-500">{category.count} items</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {['Featured', 'Hot Products', 'New Arrivals', 'Top Products'].includes(activeTab) && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <h2 className="text-2xl font-bold text-slate-900">{activeTab}</h2>
                  <div className="text-sm font-semibold text-slate-500">{filteredProducts.length} matching products</div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_auto] gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      value={productQuery}
                      onChange={(e) => setProductQuery(e.target.value)}
                      placeholder="Search products or categories"
                      className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-lg whitespace-nowrap">
                      <Filter className="w-4 h-4" /> Filter
                    </span>
                    {categories.map((category) => (
                      <button
                        type="button"
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`px-3 py-2 rounded-lg border text-sm font-semibold whitespace-nowrap ${
                          selectedCategory === category.name
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
                    <div className="h-56 sm:h-64 w-full bg-slate-100 relative overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                      <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full text-slate-400 hover:text-red-500 transition-colors shadow-sm">
                        <Heart className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-slate-800">
                        {product.category}
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h3 className="font-bold text-lg text-slate-900 mb-1 line-clamp-1">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center text-sm font-bold text-amber-600">
                          <Star className="w-4 h-4 mr-1 fill-amber-500" /> {product.rating}
                        </div>
                        <span className="text-xs text-slate-400">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="font-black text-xl text-slate-900">{product.price}</div>
                        <button className="flex items-center justify-center w-10 h-10 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                          <ShoppingCart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {filteredProducts.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
                  No products match your current search and category filter.
                </div>
              )}
            </div>
          )}

          {activeTab === 'Reviews' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Product Reviews</h2>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-900">4.8</span>
                  <span className="text-slate-500 text-sm">(12,405 reviews)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Sarah J.', product: 'Wireless Noise-Cancelling Headphones', rating: 5, text: 'Absolutely love these headphones! The noise cancellation is top-notch and the battery life is incredible.', date: '2 days ago' },
                  { name: 'Michael T.', product: 'Ergonomic Office Chair', rating: 4, text: 'Very comfortable chair for long working hours. Assembly was a bit tricky, but overall a great purchase.', date: '1 week ago' },
                  { name: 'Emily R.', product: 'Smart Fitness Watch', rating: 5, text: 'Tracks everything accurately. The app integration is seamless. Highly recommend for fitness enthusiasts.', date: '2 weeks ago' },
                  { name: 'David W.', product: 'E-SPOT Premium Backpack', rating: 5, text: 'Perfect size for my laptop and daily essentials. The material feels very durable and premium.', date: '1 month ago' },
                  { name: 'Jessica K.', product: 'Organic Cotton T-Shirt', rating: 4, text: 'Very soft and comfortable. Fits perfectly. Would love to see more color options.', date: '1 month ago' },
                  { name: 'Robert L.', product: 'Professional Camera Lens', rating: 5, text: 'Incredible sharpness and bokeh. A must-have for any serious photographer.', date: '2 months ago' }
                ].map((review, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">{review.name}</div>
                          <div className="text-xs text-slate-500">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className={`w-3 h-3 ${j < review.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded mb-3">
                      {review.product}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fallback for other tabs */}
          {!['Categories', 'Featured', 'Hot Products', 'New Arrivals', 'Top Products', 'Reviews'].includes(activeTab) && (
            <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-400 mb-2">{activeTab} Section</h2>
              <p className="text-slate-500">Content for {activeTab} is being updated.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
