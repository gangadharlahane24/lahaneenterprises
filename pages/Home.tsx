import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle2, Ruler, MessageCircle, Facebook, Instagram, Twitter, ShoppingBag, Star, Quote, PlayCircle } from 'lucide-react';
import { SERVICES } from '../constants';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Mumbai",
    text: "The invisible grill installation was flawless. My balcony looks amazing and feels safe for my kids. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Ahmedabad",
    text: "Ordered bird netting materials for my garden. Quality is top-notch and delivery was super fast. Great service.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Verma",
    location: "Bangalore",
    text: "Professional team for pest control. They were thorough and the problem hasn't returned. Very satisfied.",
    rating: 5
  }
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/15551234567" // Replace with real number
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Hero Section - Colorful Gradient */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500 text-white text-sm font-bold mb-6 animate-bounce">
            Premier Service Provider & Authorized Dealer
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-teal-200">
            Safety Without Compromise
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Your trusted <span className="text-white font-bold">Service Provider</span> for Invisible Grills, Bird Netting, and Pest Control. 
            <span className="block mt-2 text-orange-300 font-semibold">We also sell materials directly to you!</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop" 
              className="px-8 py-4 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 text-lg"
            >
              <ShoppingBag className="w-5 h-5" /> Buy Materials
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold hover:bg-white/20 transition flex items-center justify-center gap-2 text-lg"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dealer Identity Strip */}
      <div className="bg-teal-600 py-3 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-8 text-white text-sm md:text-base font-medium overflow-x-auto whitespace-nowrap">
          <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Expert Service Provider</span>
          <span className="hidden md:inline">|</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Authorized Dealer</span>
          <span className="hidden md:inline">|</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Wholesale & Retail</span>
          <span className="hidden md:inline">|</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Pan-India Delivery</span>
          <span className="hidden md:inline">|</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> 100% Genuine Materials</span>
        </div>
      </div>

      {/* About Us Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
                <img 
                  src="https://scontent.fblr22-2.fna.fbcdn.net/v/t39.30808-6/482959271_1190257523109080_8415173085419701164_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zOnjqfPH_dQQ7kNvwHiCF_7&_nc_oc=Adkxn3fZk_Y-1sapBqJ9fHCEYNvKIko4VnWMNWX5QlgmJACePr78Omsfa8U3gd8hYxZj08RvnD_CACkhGJ7n4kiU&_nc_zt=23&_nc_ht=scontent.fblr22-2.fna&_nc_gid=tMgsze9XfGIpGrIooqwMbA&oh=00_AfmQrWmsS5zrmVZMEx0cKsVzFiKmibBZx-IvKqUskBjAPQ&oe=6958738E" 
                  alt="About SafeNet" 
                  className="rounded-2xl shadow-2xl w-full object-cover border-4 border-white"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Who We Are</h4>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Securing Homes Since 2010</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                SafeNet Solutions is a premier <span className="font-bold text-slate-800">Service Provider</span> of home safety and hygiene solutions. We are more than just installers; we are authorized dealers of high-grade safety materials including 316 Stainless Steel and UV Stabilized HDPE nets.
              </p>
              <p className="text-slate-600 mb-8">
                Whether you need a full-service installation or just want to purchase the best materials for your own project, we have you covered with competitive pricing and expert advice.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-800 border-b-2 border-blue-200 hover:border-blue-600 transition pb-1">
                Read More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Promo Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">See Our Work in Action</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
            Browse through our portfolio of completed projects and watch installation demonstrations to see the quality we deliver.
          </p>
          <Link to="/gallery" className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition transform hover:scale-105 shadow-xl">
            <PlayCircle className="w-6 h-6" /> Watch Videos & View Gallery
          </Link>
        </div>
      </section>

      {/* Features Grid - Colorful */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose SafeNet?</h2>
            <p className="mt-4 text-lg text-slate-600">We combine durability with aesthetics to provide the best home safety solutions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition border-t-4 border-blue-500 text-center group">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">316 Marine Grade Steel</h3>
              <p className="text-slate-600">Our invisible grills utilize high-tension 316 stainless steel that is rust-resistant and incredibly strong.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition border-t-4 border-green-500 text-center group">
              <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Humane Solutions</h3>
              <p className="text-slate-600">Our bird netting and spikes deter pests effectively without causing them harm.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition border-t-4 border-purple-500 text-center group">
              <div className="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                <Ruler className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Fit</h3>
              <p className="text-slate-600">Every installation is measured precisely to fit your windows, balconies, or duct areas perfectly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services & Shop Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Our Core Services & Products</h2>
              <p className="mt-2 text-slate-600">Professional Installation Services & Material Sales.</p>
            </div>
            <Link to="/services" className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition group relative">
                 {/* Dealer Tag for items we sell */}
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded shadow-md z-10">
                  Materials Available
                </div>
                
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{service.category}</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">{service.title}</h3>
                  <div className="flex gap-2 mt-4">
                     <Link to={`/services/${service.id}`} className="flex-1 text-center py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition">
                        View Details
                     </Link>
                     <Link to="/shop" className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition flex items-center justify-center gap-1">
                        <ShoppingBag className="w-3 h-3" /> Buy
                     </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-slate-600">Join thousands of satisfied families who trust SafeNet.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Strip */}
      <section className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Connect With Us</h2>
            <div className="flex justify-center gap-8">
                <a href="#" className="p-4 bg-white/10 rounded-full text-white hover:bg-blue-600 hover:scale-110 transition duration-300">
                    <Facebook className="w-8 h-8" />
                </a>
                <a href="#" className="p-4 bg-white/10 rounded-full text-white hover:bg-pink-600 hover:scale-110 transition duration-300">
                    <Instagram className="w-8 h-8" />
                </a>
                <a href="#" className="p-4 bg-white/10 rounded-full text-white hover:bg-sky-500 hover:scale-110 transition duration-300">
                    <Twitter className="w-8 h-8" />
                </a>
                <a href="https://wa.me/15551234567" className="p-4 bg-white/10 rounded-full text-white hover:bg-green-500 hover:scale-110 transition duration-300">
                    <MessageCircle className="w-8 h-8" />
                </a>
            </div>
            <p className="text-slate-400 mt-6">Follow us for latest updates and safety tips!</p>
        </div>
      </section>
    </div>
  );
};

export default Home;