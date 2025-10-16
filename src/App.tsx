import { ArrowRight, Check, Star, Users, TrendingUp, Zap, Menu, X, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const portfolioItems = [
    {
      image: 'https://websystems.ai/wp-content/uploads/2025/04/UKU_Cover.png',
      title: 'UKU',
      category: 'Web Platform',
      description: 'Modern digital solution'
    },
    {
      image: 'https://websystems.ai/wp-content/uploads/2025/04/FINEST_COVER.png',
      title: 'Finest',
      category: 'Web Application',
      description: 'Premium web experience'
    },
    {
      image: 'https://websystems.ai/wp-content/uploads/2025/04/AUTO_COVER.png',
      title: 'Auto',
      category: 'Automotive Platform',
      description: 'Automotive web solution'
    },
    {
      image: 'https://websystems.ai/wp-content/uploads/2025/04/ADACT_COVER.png',
      title: 'Adact',
      category: 'Marketing Platform',
      description: 'Interactive marketing tool'
    },
    {
      image: 'https://websystems.ai/wp-content/uploads/2025/04/syntpot_gallery3.png',
      title: 'Syntpot',
      category: 'Digital Platform',
      description: 'Innovative web solution'
    },
    {
      image: 'https://websystems.ai/wp-content/uploads/2025/04/syntpot_gallery1.png',
      title: 'Syntpot Interface',
      category: 'User Dashboard',
      description: 'Advanced interface design'
    }
  ];

  const benefits = [
    'Custom development tailored to your needs',
    'Modern tech stack for scalable solutions',
    'Dedicated team focused on your success',
    'Fast delivery without compromising quality'
  ];

  const services = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Web Applications',
      description: 'Custom SaaS platforms and enterprise solutions'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'E-Commerce Sites',
      description: 'High-converting online stores and marketplaces'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Corporate Websites',
      description: 'Professional sites that elevate your brand'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions'
    }
  ];

  const steps = [
    { number: 1, title: 'Schedule a Call', description: 'Book a free consultation' },
    { number: 2, title: 'Get a Custom Proposal', description: 'Receive tailored project plan' },
    { number: 3, title: 'Launch Your Project', description: 'Go live and grow' }
  ];

  const faqs = [
    {
      question: 'How long does a project take?',
      answer: 'Project timelines vary based on complexity, but most projects are completed within 4-12 weeks.'
    },
    {
      question: 'What services do you offer?',
      answer: 'We offer web development, mobile apps, custom software, and digital marketing solutions.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is customized based on project scope and requirements. Contact us for a detailed quote.'
    },
    {
      question: 'Do you work with new/small businesses?',
      answer: 'Yes, we work with businesses of all sizes, from startups to enterprise companies.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/websystems_logo_nnkw-1 (1).png" alt="WebSystems" className="h-10" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition">Portfolio</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition">Services</a>
              <a href="#process" className="text-gray-600 hover:text-gray-900 transition">Process</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-4">
              <a href="#portfolio" className="block text-gray-600 hover:text-gray-900">Portfolio</a>
              <a href="#services" className="block text-gray-600 hover:text-gray-900">Services</a>
              <a href="#process" className="block text-gray-600 hover:text-gray-900">Process</a>
              <a href="#faq" className="block text-gray-600 hover:text-gray-900">FAQ</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                We Build <span className="text-blue-600">Custom Web</span> Solutions That Scale Your Business
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From enterprise applications to e-commerce platforms, we create digital experiences that drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 text-lg font-semibold">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition text-lg font-semibold">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Portfolio Grid Preview */}
            <div className="grid grid-cols-2 gap-4">
              {portfolioItems.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-xs font-semibold text-blue-400">{item.category}</p>
                      <p className="text-sm font-bold">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              You're Great at Your Business. Technology Shouldn't Hold You Back.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The right digital solution makes all the difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-2xl text-gray-800 font-semibold max-w-3xl mx-auto leading-relaxed">
            You deserve a digital presence that works as hard as you do.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Can We Build for Your Business?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Getting Started is <span className="text-blue-600">Very Simple</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Portfolio: Digital Solutions That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've helped 50+ businesses transform their digital presence with custom web solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-semibold text-blue-400 mb-2">{item.category}</p>
                    <p className="text-xl font-bold mb-1">{item.title}</p>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
            "WebSystems delivered a platform that exceeded our expectations. Their technical expertise and attention to detail transformed our business operations."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
            <div className="text-left">
              <p className="font-bold">Sarah Chen</p>
              <p className="text-gray-400">CTO, TechCorp</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-500 transition-colors"
              >
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-900">
                  {faq.question}
                  <span className="text-blue-600 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Can't Find Your Business Issue?</p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 50+ businesses that elevated their operations with custom web solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold">
              Get Started Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition text-lg font-semibold">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/websystems_logo_nnkw-1 (1).png" alt="WebSystems" className="h-10 brightness-0 invert" />
              </div>
              <p className="text-sm mb-4">
                Building digital solutions that help businesses thrive in the modern market.
              </p>
              <div className="space-y-2">
                <a href="mailto:kristjan@websystems.ai" className="flex items-center space-x-2 text-sm hover:text-white transition">
                  <Mail className="w-4 h-4" />
                  <span>kristjan@websystems.ai</span>
                </a>
                <a href="tel:+37259003902" className="flex items-center space-x-2 text-sm hover:text-white transition">
                  <Phone className="w-4 h-4" />
                  <span>+372 5900 3902</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition">Marketing</a></li>
                <li><a href="#" className="hover:text-white transition">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 WebSystems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
