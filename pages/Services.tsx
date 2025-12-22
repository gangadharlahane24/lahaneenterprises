import React from 'react';
import { Check } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900">Professional Services</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Expert installation, high-quality materials, and guaranteed satisfaction for all your safety and hygiene needs.
          </p>
        </div>

        <div className="space-y-20">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <Link to={`/services/${service.id}`} className="block rounded-2xl overflow-hidden shadow-xl aspect-video relative group cursor-pointer">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </Link>
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-2">
                  {service.category}
                </div>
                <Link to={`/services/${service.id}`} className="block group">
                    <h2 className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition">{service.title}</h2>
                </Link>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex flex-wrap gap-4">
                   <Link to={`/services/${service.id}`} className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 shadow-sm transition-all">
                    View Details
                  </Link>
                  <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all">
                    Request Site Visit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;