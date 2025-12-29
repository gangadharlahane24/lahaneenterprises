import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, X, Image as ImageIcon, Youtube } from 'lucide-react';

const GALLERY_IMAGES = [
  'https://scontent.fblr22-2.fna.fbcdn.net/v/t39.30808-6/482959271_1190257523109080_8415173085419701164_n.jpg?stp=c159.0.963.963a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=714c7a&_nc_ohc=zOnjqfPH_dQQ7kNvwHiCF_7&_nc_oc=Adkxn3fZk_Y-1sapBqJ9fHCEYNvKIko4VnWMNWX5QlgmJACePr78Omsfa8U3gd8hYxZj08RvnD_CACkhGJ7n4kiU&_nc_zt=23&_nc_ht=scontent.fblr22-2.fna&_nc_gid=h9MELu0xX3zS8YsH4FAurQ&oh=00_AfkqkgdCRlsJFrcewvEqN4FSwxtu_wvXyCw0dT2qs6hseQ&oe=6958738E',
  'https://scontent.fblr22-1.fna.fbcdn.net/v/t39.30808-6/486788229_1200339235434242_3607882755771675691_n.jpg?stp=c0.47.487.487a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_ohc=c_TU5mD-SYEQ7kNvwE54dk_&_nc_oc=AdnuaUBlEhd2xsT7lxUnz67xoLAtjGFj4BGg_4gjtxrJktDDLH7oDYgp4Jksx27O_jrwis_LmrVY0UEXufpWCh-9&_nc_zt=23&_nc_ht=scontent.fblr22-1.fna&_nc_gid=EvHwRwWLkwh1UZYPxGi65Q&oh=00_AfnkkDTqi8kJO_lv4DdePcSN4Glt1Xg6Xnu-nz_ol3FjgA&oe=69587E16',
  'https://scontent.fblr22-1.fna.fbcdn.net/v/t39.30808-6/486611773_1200339078767591_8753691184154325481_n.jpg?stp=c0.20.750.750a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=50ad20&_nc_ohc=SS7y3DnBGuwQ7kNvwGmWwcD&_nc_oc=AdmO4_aBSElrKL4PIll3aRANdG_plKVwb5z9suT5htNLXKccvTV_hkq_oJKWjZz_oWRCrOjnu7Jx0I9yng0eMO5r&_nc_zt=23&_nc_ht=scontent.fblr22-1.fna&_nc_gid=EvHwRwWLkwh1UZYPxGi65Q&oh=00_Afmv0_NHdQ5rZudmoC0-Y6zr8_VNlrlVVeCycMRUMzJc1Q&oe=69584F7A',
  'https://scontent.fblr22-2.fna.fbcdn.net/v/t39.30808-6/471256873_1130507522130442_3411640189630828070_n.jpg?stp=c33.0.194.194a_dst-jpg_s194x194_tt6&_nc_cat=111&ccb=1-7&_nc_sid=714c7a&_nc_ohc=q0X3Dv59d5EQ7kNvwFhQBbh&_nc_oc=AdmwFkNlhFTEmFnm2V8Qz1sPBJhxdlLErqDpqqP_B8Isrw2jvWqC99RY9hNjF6VszjRaBreIlSFfDWmxLD-ATLWI&_nc_zt=23&_nc_ht=scontent.fblr22-2.fna&_nc_gid=6-c9e8AwEFzQQA8YC_HfVw&oh=00_AfnDSn-YL9k71S7JB2mzHiyPMs8uXDzbsZu6YOmULQgVug&oe=69585B57',
];

const VIDEOS = [
  { id: '1', title: 'Invisible Grill Installation Process', thumbnail: 'https://scontent.fblr22-1.fna.fbcdn.net/v/t39.30808-6/470814103_1129068505607677_9072624993536811389_n.jpg?stp=c0.205.532.532a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=714c7a&_nc_ohc=M785KMyuA5wQ7kNvwGLLnus&_nc_oc=Adk-q-nr3HJKYv5JrQmhutnnlvsbKaCgo6kqoWiM6SVva5A5KfdRXLCGt6IycxQmIJfVZvIEmVV_DqB98jRQLRm5&_nc_zt=23&_nc_ht=scontent.fblr22-1.fna&_nc_gid=6-c9e8AwEFzQQA8YC_HfVw&oh=00_AfkGh48lsQ7fcen5WyeQZrI5xZB0HiIiK063i-ACS4Li-g&oe=6958668F', youtubeId: 'IceBDwpk0cQ' }, // Nature video 4k placeholder
  { id: '2', title: 'Bird Netting for High Rise Balconies', thumbnail: 'https://scontent.fblr22-1.fna.fbcdn.net/v/t39.30808-6/471157734_1130507548797106_1657637616543915750_n.jpg?stp=c40.0.188.188a_dst-jpg_s188x188_tt6&_nc_cat=108&ccb=1-7&_nc_sid=714c7a&_nc_ohc=T6mGpfJCWV4Q7kNvwH9IUhd&_nc_oc=AdlnoTFu8PRWi1Kgk5nfjSdr-e_1OfbBFJD_4LRoKGV01-ufj2lhVvTEarZyD_rFeyM2pvXVyX4Z_l0FCLZP-sLK&_nc_zt=23&_nc_ht=scontent.fblr22-1.fna&_nc_gid=h9MELu0xX3zS8YsH4FAurQ&oh=00_AfnprGF0SVGjIA4DNzZq7cxKfigXfhi5AxR0R2Y2hkZgsQ&oe=69584DDE', youtubeId: 'ysz5S6P_ks0' }, // SpaceX Launch placeholder
  // { id: '3', title: 'Pest Control Treatment Explained', thumbnail: 'https://picsum.photos/seed/vid3/600/400', youtubeId: 'jNQXAC9IVRw' }, // Zoo placeholder
  // { id: '4', title: 'Strength Test: 316 Stainless Steel', thumbnail: 'https://picsum.photos/seed/vid4/600/400', youtubeId: 'ScMzIvxBSi4' }, // Python placeholder
];

const Gallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);

  // Swipe Handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-2">Our Work Gallery</h1>
        <p className="text-slate-400">See our latest installations and safety demonstrations.</p>
      </div>

      {/* Image Slider Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 mb-6">
          <ImageIcon className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-slate-900">Project Photos</h2>
        </div>
        
        <div 
          className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] bg-slate-200 group touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img 
            src={GALLERY_IMAGES[currentSlide]} 
            alt={`Slide ${currentSlide + 1}`} 
            className="w-full h-full object-cover transition-opacity duration-500 select-none"
          />
          
          {/* Slider Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none md:pointer-events-auto">
            <button onClick={prevSlide} className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition pointer-events-auto">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={nextSlide} className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition pointer-events-auto">
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {GALLERY_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-white scale-110' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Gallery Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Youtube className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-bold text-slate-900">Installation Videos</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEOS.map((video) => (
              <div 
                key={video.id} 
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video.youtubeId)}
              >
                <div className="relative rounded-xl overflow-hidden aspect-video shadow-md mb-3">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition flex items-center justify-center">
                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl relative">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;