import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Calendar, Wifi, Headphones, BookOpen, Users } from 'lucide-react';

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
      icon: <Wifi className="w-8 h-8" />,
      title: "Offline Support",
      description: "Access prayer times and Quran content even without internet connection after initial download."
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">ص</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Salah Companion</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-amber-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-amber-600 transition-colors">How It Works</a>
              <a href="#download" className="text-gray-700 hover:text-amber-600 transition-colors">Download</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-700 hover:text-amber-600">Features</a>
              <a href="#how-it-works" className="block text-gray-700 hover:text-amber-600">How It Works</a>
              <a href="#download" className="block text-gray-700 hover:text-amber-600">Download</a>
              <a href="#about" className="block text-gray-700 hover:text-amber-600">About</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-amber-600 rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-orange-600 rotate-12"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-amber-500 -rotate-12"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stay Connected to Your Prayers,
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> Wherever You Are</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience a peaceful companion for your daily prayers with accurate times, beautiful Quran recitations, and comprehensive tafsir — all in one elegant app.
          </p>
          <a href="#download" className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Download App Now
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to maintain your spiritual connection and prayer routine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-amber-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to enhance your spiritual journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Download Now</h2>
          <p className="text-xl mb-12 opacity-90">
            Available for Android and iOS devices. Scan the QR code or download from your app store.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto">
            <div className="bg-white p-6 rounded-2xl mb-6">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-6xl mb-2">📱</div>
                  <div className="font-semibold">QR Code</div>
                  <div className="text-sm">Scan to Download</div>
                </div>
              </div>
            </div>

            <p className="text-lg mb-6">
              Scan this code with your phone camera to download the app instantly
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                <span>📱</span>
                <span>Get on Android</span>
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                <span>🍎</span>
                <span>Get on iOS</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In today's fast-paced world, maintaining a consistent prayer routine can be challenging. We created Salah Companion to help Muslims around the globe stay connected with their faith through accurate prayer times, beautiful Quran recitations, and meaningful insights.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our mission is to provide a simple, elegant, and accessible tool that supports your spiritual journey. Whether you're at home or traveling across continents, your prayer times and Quran companion travels with you.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe in the power of technology to enhance faith, not replace it. Every feature is designed with care, respect, and a deep appreciation for Islamic tradition and scholarship.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ص</span>
            </div>
            <span className="text-xl font-bold">Salah Companion</span>
          </div>
          <p className="text-gray-400 mb-4">
            Connecting hearts to prayer, one notification at a time
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Salah Companion. All rights reserved.
          </p>
          <div className="mt-4 text-gray-500 text-sm">
            <a href="mailto:contact@salahcompanion.app" className="hover:text-amber-400 transition-colors">Contact</a>
            <span className="mx-2">•</span>
            <a href="https://github.com" className="hover:text-amber-400 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IslamicAppLanding;