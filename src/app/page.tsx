"use client";

import type { NextPage } from 'next';
import React from 'react';

// --- SVG Icon Components (No external libraries) ---
const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M19 3v4M17 5h4M12 3v4M10 5h4M5 17v4M3 19h4M19 17v4M17 19h4M12 17v4M10 19h4M12 12l1.5-3-3 1.5L9 9l1.5 3-3-1.5z"></path>
    </svg>
);

const TrophyIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11a3 3 0 11-6 0 3 3 0 016 0zm12 0a3 3 0 11-6 0 3 3 0 016 0zM9 7V5a3 3 0 013-3h0a3 3 0 013 3v2m-3 4v6m0 0v2m0-2h4m-4 0H8"></path>
    </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
  </svg>
);


// --- Page Components ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Profil Sekolah', href: '#' },
    { name: 'Akademik', href: '#' },
    { name: 'Kesiswaan', href: '#' },
    { name: 'Kontak', href: '#' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpenIcon className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">SMPN 1 CILIMUS</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
              {link.name}
            </a>
          ))}
        </nav>
        <a href="#" className="hidden md:inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
          Pendaftaran
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                {link.name}
              </a>
            ))}
            <a href="#" className="w-4/5 text-center bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300">
              Pendaftaran
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => (
  <section className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center text-white">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
        alt="Siswa-siswi belajar bersama"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
    <div className="relative z-10 text-center px-6 animate-fade-in-up">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
        Membentuk Generasi Unggul, Kreatif, dan Berkarakter
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 mb-8">
        Selamat datang di SMPN 1 Cilimus, tempat kami mendedikasikan diri untuk pendidikan berkualitas dan pengembangan potensi setiap siswa.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
          Jelajahi Sekolah
        </a>
        <a href="#" className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-full text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
          Hubungi Kami
        </a>
      </div>
    </div>
  </section>
);

const WelcomeSection = () => (
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/3">
                    <div className="relative w-full max-w-xs mx-auto">
                        <div className="absolute -top-3 -left-3 w-full h-full bg-blue-300 rounded-lg transform rotate-[-3deg]"></div>
                        <img 
                            src={`https://i.pravatar.cc/300?u=kepsek`} 
                            alt="Kepala Sekolah" 
                            className="relative w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Sambutan Kepala Sekolah</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Assalamu'alaikum Warahmatullahi Wabarakatuh,
                        <br /><br />
                        Puji syukur kehadirat Allah SWT atas rahmat dan karunia-Nya. Kami dengan bangga mempersembahkan platform digital SMPN 1 Cilimus sebagai jembatan informasi antara sekolah, siswa, orang tua, dan masyarakat. Melalui website ini, kami berkomitmen untuk terus berinovasi dalam memberikan pendidikan terbaik yang relevan dengan tantangan zaman. Mari bersama-sama kita wujudkan visi besar untuk masa depan anak bangsa.
                    </p>
                    <p className="font-semibold text-gray-800">Drs. H. Nama Kepala Sekolah, M.Pd.</p>
                    <p className="text-sm text-gray-500">Kepala SMPN 1 Cilimus</p>
                </div>
            </div>
        </div>
    </section>
);

const FeaturedPrograms = () => {
  const programs = [
    {
      icon: <BookOpenIcon className="h-10 w-10 text-white" />,
      title: 'Kurikulum Merdeka',
      description: 'Mengadopsi kurikulum terbaru untuk pembelajaran yang fleksibel dan berpusat pada siswa.',
      color: 'bg-blue-500'
    },
    {
      icon: <SparklesIcon className="h-10 w-10 text-white" />,
      title: 'Ekstrakurikuler Kreatif',
      description: 'Beragam pilihan ekskul mulai dari seni, olahraga, hingga teknologi untuk menyalurkan bakat.',
      color: 'bg-green-500'
    },
    {
      icon: <TrophyIcon className="h-10 w-10 text-white" />,
      title: 'Pembinaan Prestasi',
      description: 'Program intensif untuk persiapan olimpiade sains, kompetisi debat, dan lomba akademik lainnya.',
      color: 'bg-yellow-500'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Program Unggulan Kami</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">Fokus kami adalah memberikan pengalaman belajar yang holistik dan mempersiapkan siswa untuk masa depan.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className={`w-20 h-20 rounded-full ${program.color} flex items-center justify-center mx-auto mb-6`}>
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
              <p className="text-gray-600 leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsSection = () => {
    const articles = [
        {
            image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=870&auto=format&fit=crop',
            category: 'Akademik',
            date: '18 Juli 2025',
            title: 'SMPN 1 Cilimus Raih Juara Umum O2SN Tingkat Kabupaten',
            excerpt: 'Prestasi membanggakan kembali ditorehkan oleh siswa-siswi kami dalam ajang Olimpiade Olahraga Siswa Nasional...'
        },
        {
            image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=870&auto=format&fit=crop',
            category: 'Kesiswaan',
            date: '15 Juli 2025',
            title: 'Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2025/2026 Dibuka',
            excerpt: 'Informasi lengkap seputar jadwal, alur, dan persyaratan pendaftaran siswa baru dapat diakses melalui halaman PPDB...'
        },
        {
            image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=870&auto=format&fit=crop',
            category: 'Kegiatan',
            date: '10 Juli 2025',
            title: 'Gelar Karya P5: Siswa Pamerkan Proyek Inovatif Bertema Kearifan Lokal',
            excerpt: 'Sebagai puncak implementasi Kurikulum Merdeka, para siswa menampilkan berbagai karya kreatif yang mengangkat budaya...'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Berita & Pengumuman</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                            <div className="overflow-hidden">
                                <img src={article.image} alt={article.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                                    <p className="font-semibold text-blue-600">{article.category}</p>
                                    <p>{article.date}</p>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3 h-14">{article.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 h-20">{article.excerpt}</p>
                                <a href="#" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                                    Baca Selengkapnya <ArrowRightIcon className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const CtaSection = () => (
    <section className="bg-blue-600">
        <div className="container mx-auto px-6 py-16 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Siap Menjadi Bagian dari Kami?</h2>
            <p className="max-w-2xl mx-auto mb-8">
                Jadilah bagian dari keluarga besar SMPN 1 Cilimus dan mulailah perjalanan pendidikan Anda yang penuh prestasi dan pengalaman berharga.
            </p>
            <a href="#" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Daftar Sekarang
            </a>
        </div>
    </section>
);

const Footer = () => {
  const quickLinks = ['Profil Sekolah', 'Akademik', 'PPDB Online', 'Berita'];
  const contactInfo = ['Jl. Raya Cilimus No. 123, Kuningan, Jawa Barat', 'info@smpn1cilimus.sch.id', '(0232) 123-4567'];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">SMPN 1 CILIMUS</h3>
            <p className="text-gray-400">Mencetak generasi penerus bangsa yang cerdas, berakhlak mulia, dan siap menghadapi masa depan.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-gray-400">
              {contactInfo.map(info => (
                <li key={info}>{info}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              {/* Placeholder for social icons */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SMPN 1 Cilimus. All rights reserved. Didesain dengan ❤️.</p>
        </div>
      </div>
    </footer>
  );
};


const Page: NextPage = () => {
  return (
    <div className="bg-white font-sans">
      <style jsx global>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <FeaturedPrograms />
        <NewsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Page;