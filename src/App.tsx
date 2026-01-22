import { Menu, X, MapPin, Calendar, Headphones, BookOpen, Users } from 'lucide-react';
import logo from './assets/images/QuranEditLogo_withoutBg.png';
import qrCode from './assets/images/android.png';
import { useEffect, useState } from 'react';

const IslamicAppLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Prayer Times by Location",
      description: "Get accurate prayer times for any city worldwide based on your precise location or manual selection."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Hijri & Gregorian Calendar",
      description: "Stay connected with both Islamic and Gregorian dates displayed side by side for easy reference."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Audio Recitations",
      description: "Listen to beautiful Quran recitations from up to 5 different renowned reciters of your choice."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Quran with Tafsir",
      description: "Read any range of verses with detailed explanations and commentary for deeper understanding."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multiple Reciters",
      description: "Choose from various renowned reciters and switch between them based on your preference."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Choose Your Location",
      description: "Allow location access or manually search for your city from anywhere in the world."
    },
    {
      number: "2",
      title: "View Prayer Times",
      description: "See accurate prayer times calculated specifically for your location and date."
    },
    {
      number: "3",
      title: "Explore Quran Features",
      description: "Listen to recitations, read verses with tafsir, and deepen your connection with the Quran."
    },
    {
      number: "4",
      title: "Stay Consistent",
      description: "Receive timely notifications and maintain your spiritual routine with ease."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-500/30">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-900/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group">
              <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src={logo} alt="Tilawah Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent italic">Tilawah</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white hover:text-amber-500 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-white hover:text-amber-500 transition-colors font-medium">How It Works</a>
              <a href="#download" className="text-white hover:text-amber-500 transition-colors font-medium">Download</a>
              <a href="#about" className="text-white hover:text-amber-500 transition-colors font-medium">About</a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white hover:text-amber-500 transition-colors">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-white/5 animate-in slide-in-from-top duration-300">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-amber-500 py-2">Features</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-amber-500 py-2">How It Works</a>
              <a href="#download" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-amber-500 py-2">Download</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-amber-500 py-2">About</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.1),transparent_50%)]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-amber-600/30 rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-orange-600/30 rotate-12"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-amber-500/30 -rotate-12"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Stay Connected to Your Prayers,
            <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent"> Wherever You Are</span>
          </h1>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience a peaceful companion for your daily prayers with accurate times, beautiful Quran recitations, and comprehensive tafsir — all in one elegant app.
          </p>
          <a href="#download" className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 transform hover:scale-105 active:scale-95">
            Download App Now
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Everything you need to maintain your spiritual connection and prayer routine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-amber-500/40 hover:bg-neutral-900/80 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-amber-500/50">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-200 transition-colors">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-neutral-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-neutral-400">Simple steps to enhance your spiritual journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-xl shadow-amber-900/40 relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 border-t-2 border-dashed border-white/10 -z-0"></div>
                )}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 px-4 bg-gradient-to-br from-amber-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.5),transparent)]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-extrabold text-white mb-6">Start Your Journey Today</h2>
          <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto">
            Join thousands of Muslims worldwide who use Tilawah to stay consistent with their prayers and Quran reading.
          </p>

          <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 max-w-2xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-2 rounded-3xl shadow-inner overflow-hidden">
                <img src={qrCode} alt="Download QR Code" className="w-full h-full object-cover rounded-2xl" />
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Download Now</h3>
                <p className="text-white/80 mb-8">Scan this code with your phone camera or use the buttons below to get started instantly.</p>
                <div className="space-y-4">
                  <a href='https://drive.google.com/file/d/12N-yOhrOifPdDIP7nk_EAgEa-xH1UmZh/view?usp=drive_link' className="w-full bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-neutral-900 transition-all flex items-center justify-center space-x-3 group active:scale-95">
                    <span className="text-2xl group-hover:scale-125 transition-transform">🤖</span>
                    <span className="text-lg">Get on Android</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-bold text-sm mb-6 tracking-wider uppercase">Our Vision</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Building a Stronger Ummah</h2>
          <div className="space-y-8 text-lg text-neutral-400 leading-relaxed font-light">
            <p>
              In today's fast-paced world, maintaining a consistent prayer routine can be challenging. We created <span className="text-white font-medium italic">Tilawah</span> to help Muslims around the globe stay connected with their faith through accurate prayer times and beautiful recitations.
            </p>
            <p>
              Our mission is to provide a simple, elegant, and accessible tool that supports your spiritual journey. Whether you're at home or traveling across continents, your faith companion travels with you.
            </p>
            <p>
              We believe in the power of technology to enhance faith, not replace it. Every feature is designed with care, respect, and a deep appreciation for Islamic tradition.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 text-neutral-500 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-6 group">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={logo} alt="Tilawah Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-2xl font-bold text-white italic">Tilawah</span>
              </div>
              <p className="max-w-xs mx-auto md:mx-0">
                Connecting hearts to prayer, one notification at a time.
              </p>
            </div>

            <div className="flex justify-center space-x-8">
              <a href="#features" className="text-white hover:text-amber-500 transition-colors">Features</a>
              <a href="#about" className="text-white hover:text-amber-500 transition-colors">About</a>
              <a href="mailto:contact@tilawah.app" className="text-white hover:text-amber-500 transition-colors">Contact</a>
            </div>

            <div className="md:text-right">
              <p className="font-medium text-neutral-400 mb-2">© 2026 Tilawah</p>
              <p className="text-sm">All rights reserved. Designed with ❤️ for the Ummah.</p>
              <div className="mt-4 flex justify-center md:justify-end space-x-4">
                <a href="https://github.com" className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 transition-all">
                  <BookOpen className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IslamicAppLanding;