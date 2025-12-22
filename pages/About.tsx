import React from 'react';
import { ShieldCheck, Users, History, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About SafeNet Solutions</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Providing safety, security, and peace of mind to households and businesses since 2010.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At SafeNet Solutions, our mission is simple: to make modern living spaces safer without compromising on aesthetics. We strive to provide the highest quality invisible grills, bird netting solutions, and pest control services that blend seamlessly with your home while offering robust protection.
            </p>
            <div className="flex items-start gap-4 mt-6">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-900">Customer First</h3>
                <p className="text-slate-600">We prioritize customer satisfaction through transparent pricing and expert installation.</p>
              </div>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://picsum.photos/seed/teamwork/800/600" 
              alt="Our Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why We Are Leaders</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certified Safety</h3>
              <p className="text-slate-600">We use only 316 Marine Grade Stainless Steel and UV-stabilized HDPE materials that meet international safety standards.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-slate-600">Our technicians are rigorously trained in safety protocols and installation techniques to ensure a perfect fit.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <History className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">15+ Years Experience</h3>
              <p className="text-slate-600">With over a decade of experience, we have successfully secured over 10,000 balconies and windows.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Ready to secure your home?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you need materials for a DIY project or a full professional installation, we are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition">
                Contact Us
              </Link>
              <Link to="/shop" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                Visit Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;