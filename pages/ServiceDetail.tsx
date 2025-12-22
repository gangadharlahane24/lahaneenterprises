import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, MessageSquare, ShieldCheck, Star } from 'lucide-react';
import { SERVICES } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Generate deterministic extra images based on ID for the gallery
  const galleryImages = [
    service.imageUrl,
    `https://picsum.photos/seed/${service.id}-detail1/800/600`,
    `https://picsum.photos/seed/${service.id}-detail2/800/600`,
    `https://picsum.photos/seed/${service.id}-detail3/800/600`,
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center">
            <Link to="/services" className="inline-flex items-center text-slate-600 hover:text-blue-600 font-medium transition">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
            </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-24">
          <div className="absolute inset-0 overflow-hidden">
             <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover opacity-30 blur-sm" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm">
                  <Star className="w-4 h-4 fill-current" />
                  {service.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">{service.title}</h1>
              <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">{service.description}</p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Gallery */}
                <div className="p-8 bg-slate-50 border-r border-slate-100">
                    <div className="space-y-4">
                        <div className="rounded-2xl overflow-hidden shadow-lg aspect-video bg-slate-200">
                             <img src={galleryImages[0]} alt="Main View" className="w-full h-full object-cover" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {galleryImages.slice(1).map((img, idx) => (
                                <div key={idx} className="rounded-xl overflow-hidden shadow-sm aspect-video bg-slate-200 hover:ring-2 ring-blue-500 cursor-pointer transition">
                                     <img src={img} alt={`Detail ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Service Details</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                        Our comprehensive {service.title} service ensures your property remains safe, hygienic, and aesthetically pleasing. 
                        We utilize industry-leading materials and techniques tailored to your specific architectural needs.
                    </p>

                    <div className="mb-10">
                        <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm text-blue-600">Key Features & Benefits</h3>
                        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </div>
                            ))}
                             {/* Add some generic extra features to make the detail page look fuller */}
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-slate-700 font-medium">Free Inspection & Measurement</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-slate-700 font-medium">Post-Installation Support</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8 flex gap-4">
                         <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0" />
                         <div>
                             <h4 className="font-bold text-slate-900">Satisfaction Guaranteed</h4>
                             <p className="text-sm text-slate-600 mt-1">
                                 We stand by our quality. All installations come with a service warranty and material durability guarantee.
                             </p>
                         </div>
                    </div>

                    <div className="mt-auto">
                        <Link 
                            to="/contact" 
                            state={{ service: service.title }}
                            className="w-full bg-blue-600 text-white text-lg py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-3"
                        >
                            <MessageSquare className="w-6 h-6" /> Request a Quote Now
                        </Link>
                        <p className="text-center text-slate-400 text-sm mt-4">
                            Response time: Usually within 24 hours
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;