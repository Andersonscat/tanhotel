import { useState } from 'react'
import './App.css'

const translations = {
  en: {
    nav: {
      rooms: 'Rooms & Suites',
      dining: 'Dining',
      spa: 'Spa & Wellness',
      experiences: 'Experiences',
    about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'TAN HOTEL',
      subtitle: 'Where Luxury Meets Nature',
      description: 'Experience the perfect blend of sophisticated comfort and natural elegance in the heart of the city.',
      cta: 'Reserve Your Stay'
    },
    rooms: {
      title: 'Rooms & Suites',
      subtitle: 'Elegant accommodations designed for your comfort',
      deluxe: {
        name: 'Deluxe Room',
        desc: 'Spacious comfort with premium amenities and city views',
        price: 'from $220',
        features: ['King Bed', 'City View', 'Premium Amenities', '24/7 Service']
      },
      suite: {
        name: 'Executive Suite',
        desc: 'Luxurious suite with separate living area and panoramic views',
        price: 'from $380',
        features: ['Separate Living Room', 'Panoramic Views', 'Butler Service', 'Premium Bath']
      },
      presidential: {
        name: 'Presidential Suite',
        desc: 'Ultimate luxury with private terrace and exclusive services',
        price: 'from $680',
        features: ['Private Terrace', 'Exclusive Services', 'Luxury Bath', 'Personal Chef']
      }
    },
    dining: {
      title: 'Culinary Excellence',
      subtitle: 'Savor exceptional dining experiences',
      restaurants: [
        {
          name: 'The Wooden Table',
          desc: 'Fine dining with local and international cuisine',
          type: 'Fine Dining'
        },
        {
          name: 'Lobby Lounge',
          desc: 'Casual elegance with craft cocktails and light fare',
          type: 'Casual Dining'
        },
        {
          name: 'Rooftop Bar',
          desc: 'Spectacular views with premium spirits and tapas',
          type: 'Bar & Lounge'
        }
      ]
    },
    spa: {
      title: 'Spa & Wellness',
      subtitle: 'Rejuvenate your body and mind',
      services: [
        'Traditional Massage Therapy',
        'Aromatherapy Treatments',
        'Fitness Center Access',
        'Yoga & Meditation Classes',
        'Sauna & Steam Rooms',
        'Outdoor Pool'
      ]
    },
    experiences: {
      title: 'Unique Experiences',
      subtitle: 'Create memories that last a lifetime',
      items: [
        {
          name: 'City Tours',
          desc: 'Guided exploration of local culture and history'
        },
        {
          name: 'Wine Tasting',
          desc: 'Curated selection of finest local and international wines'
        },
        {
          name: 'Cooking Classes',
          desc: 'Learn from our master chefs in intimate settings'
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      address: '123 Luxury Avenue, Downtown District',
      phone: '+1 (555) 123-4567',
      email: 'reservations@tanhotel.com',
      hours: 'Check-in: 3:00 PM | Check-out: 11:00 AM'
    }
  },
  ru: {
    nav: {
      rooms: 'Номера и люксы',
      dining: 'Рестораны',
      spa: 'Спа и велнес',
      experiences: 'Впечатления',
    about: 'О нас',
      contact: 'Контакты'
    },
    hero: {
      title: 'TAN HOTEL',
      subtitle: 'Где роскошь встречается с природой',
      description: 'Испытайте идеальное сочетание изысканного комфорта и природной элегантности в сердце города.',
      cta: 'Забронировать'
    },
    rooms: {
      title: 'Номера и люксы',
      subtitle: 'Элегантные апартаменты, созданные для вашего комфорта',
      deluxe: {
        name: 'Делюкс номер',
        desc: 'Просторный комфорт с премиальными удобствами и видом на город',
        price: 'от 22 000₸',
        features: ['Кровать King-size', 'Вид на город', 'Премиум удобства', 'Круглосуточный сервис']
      },
      suite: {
        name: 'Исполнительный люкс',
        desc: 'Роскошный люкс с отдельной гостиной и панорамными видами',
        price: 'от 38 000₸',
        features: ['Отдельная гостиная', 'Панорамные виды', 'Сервис дворецкого', 'Премиум ванная']
      },
      presidential: {
        name: 'Президентский люкс',
        desc: 'Максимальная роскошь с частной террасой и эксклюзивными услугами',
        price: 'от 68 000₸',
        features: ['Частная терраса', 'Эксклюзивные услуги', 'Роскошная ванная', 'Личный шеф-повар']
      }
    },
    dining: {
      title: 'Кулинарное совершенство',
      subtitle: 'Насладитесь исключительными гастрономическими впечатлениями',
      restaurants: [
        {
          name: 'Деревянный стол',
          desc: 'Изысканная кухня с местными и международными блюдами',
          type: 'Изысканная кухня'
        },
        {
          name: 'Лобби-бар',
          desc: 'Непринужденная элегантность с авторскими коктейлями',
          type: 'Неформальная кухня'
        },
        {
          name: 'Крышный бар',
          desc: 'Потрясающие виды с премиальными напитками и тапас',
          type: 'Бар и лаунж'
        }
      ]
    },
    spa: {
      title: 'Спа и велнес',
      subtitle: 'Омолодите тело и разум',
      services: [
        'Традиционная массажная терапия',
        'Ароматерапевтические процедуры',
        'Доступ к фитнес-центру',
        'Занятия йогой и медитацией',
        'Сауна и паровые бани',
        'Открытый бассейн'
      ]
    },
    experiences: {
      title: 'Уникальные впечатления',
      subtitle: 'Создайте воспоминания на всю жизнь',
      items: [
        {
          name: 'Экскурсии по городу',
          desc: 'Экскурсии по местной культуре и истории'
        },
        {
          name: 'Дегустация вин',
          desc: 'Кураторская подборка лучших местных и международных вин'
        },
        {
          name: 'Кулинарные мастер-классы',
          desc: 'Учитесь у наших мастеров-шефов в интимной обстановке'
        }
      ]
    },
    contact: {
      title: 'Свяжитесь с нами',
      address: 'ул. Роскоши, 123, Центральный район',
      phone: '+7 (777) 123-45-67',
      email: 'reservations@tanhotel.kz',
      hours: 'Заезд: 15:00 | Выезд: 11:00'
    }
  },
  kk: {
    nav: {
      rooms: 'Бөлмелер мен люкстер',
      dining: 'Асхана',
      spa: 'Спа және велнес',
      experiences: 'Тәжірибелер',
      about: 'Біз туралы',
      contact: 'Байланыс'
    },
    hero: {
      title: 'TAN HOTEL',
      subtitle: 'Сән-салтанат пен табиғаттың тоғысы',
      description: 'Қаланың жүрегінде заманауи жайлылық пен табиғи әсемдіктің үйлесімін сезініңіз.',
      cta: 'Брондау'
    },
    rooms: {
      title: 'Бөлмелер мен люкстер',
      subtitle: 'Сіздің жайлылығыңыз үшін жасалған элегантты бөлмелер',
      deluxe: {
        name: 'Делюкс бөлме',
        desc: 'Қала көрінісі мен премиум ыңғайлылығы бар кең бөлме',
        price: '22 000₸ бастап',
        features: ['King-size төсек', 'Қала көрінісі', 'Премиум ыңғайлылық', 'Тәулік бойы қызмет']
      },
      suite: {
        name: 'Эксклюзивті люкс',
        desc: 'Жеке қонақ бөлмесі мен панорамалық көрінісі бар люкс',
        price: '38 000₸ бастап',
        features: ['Жеке қонақ бөлме', 'Панорамалық көрініс', 'Батлер қызметі', 'Премиум ванна']
      },
      presidential: {
        name: 'Президенттік люкс',
        desc: 'Жеке террасасы мен эксклюзивті қызметтері бар ең жоғары сән-салтанат',
        price: '68 000₸ бастап',
        features: ['Жеке терраса', 'Эксклюзивті қызмет', 'Сәнді ванна', 'Жеке аспаз']
      }
    },
    dining: {
      title: 'Гастрономиялық шеберлік',
      subtitle: 'Айрықша ас мәзірінен дәм татыңыз',
      restaurants: [
        {
          name: 'Ағаш үстел',
          desc: 'Жергілікті және халықаралық тағамдар ұсынылатын жоғары деңгейлі асхана',
          type: 'Жоғары деңгейлі асхана'
        },
        {
          name: 'Лобби-бар',
          desc: 'Авторлық коктейльдер мен жеңіл тағамдар',
          type: 'Кездейсоқ асхана'
        },
        {
          name: 'Шатырдағы бар',
          desc: 'Тамаша көріністер, премиум сусындар мен тапастар',
          type: 'Бар & Лаунж'
        }
      ]
    },
    spa: {
      title: 'Спа және велнес',
      subtitle: 'Денеңіз бен жаныңызды жасартыңыз',
      services: [
        'Дәстүрлі массаж терапиясы',
        'Ароматерапия процедуралары',
        'Фитнес-орталыққа кіру',
        'Йога және медитация сабақтары',
        'Сауна және бу бөлмелері',
        'Ашық бассейн'
      ]
    },
    experiences: {
      title: 'Ерекше тәжірибелер',
      subtitle: 'Ұмытылмас сәттерді бірге жасаңыз',
      items: [
        {
          name: 'Қала турлары',
          desc: 'Жергілікті мәдениет пен тарихқа бағытталған экскурсиялар'
        },
        {
          name: 'Шарап дәмін тату',
          desc: 'Жергілікті және халықаралық үздік шараптардан дәм тату'
        },
        {
          name: 'Аспаздық шеберлік сабақтары',
          desc: 'Біздің шеф-аспаздардан үйреніңіз'
        }
      ]
    },
    contact: {
      title: 'Байланыс',
      address: '123 Сән-салтанат даңғылы, Орталық аудан',
      phone: '+7 (777) 123-45-67',
      email: 'reservations@tanhotel.kz',
      hours: 'Кіру: 15:00 | Шығу: 11:00'
    }
  }
}

function App() {
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'kk', label: 'KK' },
  ]

  return (
    <div className="ritz-style-root">
      {/* Navigation */}
      <nav className="ritz-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <h1>TAN HOTEL</h1>
          </div>
          <div className="nav-menu">
            <a href="#rooms">{t.nav.rooms}</a>
            <a href="#dining">{t.nav.dining}</a>
            <a href="#spa">{t.nav.spa}</a>
            <a href="#experiences">{t.nav.experiences}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <div className="nav-actions">
            <div className="lang-switch">
              {langs.map(l => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={lang === l.code ? 'active' : ''}
                >
                  {l.label}
                </button>
              )).reduce((prev, curr) => [prev, <span key={Math.random()}>|</span>, curr])}
            </div>
            <button className="reserve-btn">{t.hero.cta}</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="ritz-hero">
        <div className="hero-background" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80')`
        }}>
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">{t.hero.title}</h1>
              <h2 className="hero-subtitle">{t.hero.subtitle}</h2>
              <p className="hero-description">{t.hero.description}</p>
              <button className="hero-cta">{t.hero.cta}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="ritz-section rooms-section">
        <div className="section-container">
          <div className="section-header">
            <h2>{t.rooms.title}</h2>
            <p>{t.rooms.subtitle}</p>
          </div>
          <div className="rooms-grid">
            <div className="room-card">
              <div className="room-image" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80')`
              }}></div>
              <div className="room-content">
                <h3>{t.rooms.deluxe.name}</h3>
                <p>{t.rooms.deluxe.desc}</p>
                <div className="room-features">
                  {t.rooms.deluxe.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="room-price">{t.rooms.deluxe.price}</div>
                <button className="room-book-btn">Book Now</button>
              </div>
            </div>
            <div className="room-card featured">
              <div className="room-image" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80')`
              }}></div>
              <div className="room-content">
                <h3>{t.rooms.suite.name}</h3>
                <p>{t.rooms.suite.desc}</p>
                <div className="room-features">
                  {t.rooms.suite.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="room-price">{t.rooms.suite.price}</div>
                <button className="room-book-btn">Book Now</button>
              </div>
            </div>
            <div className="room-card">
              <div className="room-image" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80')`
              }}></div>
              <div className="room-content">
                <h3>{t.rooms.presidential.name}</h3>
                <p>{t.rooms.presidential.desc}</p>
                <div className="room-features">
                  {t.rooms.presidential.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="room-price">{t.rooms.presidential.price}</div>
                <button className="room-book-btn">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section id="dining" className="ritz-section dining-section">
        <div className="section-container">
          <div className="section-header">
            <h2>{t.dining.title}</h2>
            <p>{t.dining.subtitle}</p>
          </div>
          <div className="dining-grid">
            {t.dining.restaurants.map((restaurant, idx) => (
              <div key={idx} className="dining-card">
                <div className="dining-image" style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-${['1555396273-367ea4eb4db5', '1414235077428-338989a2e8c0', '1559339352-11d035aa65de'][idx]}?auto=format&fit=crop&w=800&q=80')`
                }}></div>
                <div className="dining-content">
                  <span className="dining-type">{restaurant.type}</span>
                  <h3>{restaurant.name}</h3>
                  <p>{restaurant.desc}</p>
                  <button className="dining-reserve-btn">Make Reservation</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Section */}
      <section id="spa" className="ritz-section spa-section">
        <div className="section-container">
          <div className="spa-content">
            <div className="spa-text">
              <h2>{t.spa.title}</h2>
              <p>{t.spa.subtitle}</p>
              <div className="spa-services">
                {t.spa.services.map((service, idx) => (
                  <div key={idx} className="spa-service">
                    <span className="service-icon">✨</span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
              <button className="spa-book-btn">Book Treatment</button>
            </div>
            <div className="spa-image" style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80')`
            }}></div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="ritz-section experiences-section">
        <div className="section-container">
          <div className="section-header">
            <h2>{t.experiences.title}</h2>
            <p>{t.experiences.subtitle}</p>
          </div>
          <div className="experiences-grid">
            {t.experiences.items.map((experience, idx) => (
              <div key={idx} className="experience-card">
                <div className="experience-icon">
                  {['🏛️', '🍷', '👨‍🍳'][idx]}
                </div>
                <h3>{experience.name}</h3>
                <p>{experience.desc}</p>
                <button className="experience-btn">Learn More</button>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="ritz-section contact-section">
        <div className="section-container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>{t.contact.title}</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>Address</h4>
                    <p>{t.contact.address}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <h4>Phone</h4>
                    <p>{t.contact.phone}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <h4>Email</h4>
                    <p>{t.contact.email}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕒</span>
                  <div>
                    <h4>Check-in/Check-out</h4>
                    <p>{t.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Make a Reservation</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone" />
                </div>
                <div className="form-group">
                  <select>
                    <option>Select Room Type</option>
                    <option>Deluxe Room</option>
                    <option>Executive Suite</option>
                    <option>Presidential Suite</option>
                  </select>
                </div>
                <button type="submit" className="submit-btn">Request Booking</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ritz-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>TAN HOTEL</h3>
              <p>Where Luxury Meets Nature</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Accommodations</h4>
                <a href="#rooms">Rooms & Suites</a>
                <a href="#dining">Dining</a>
                <a href="#spa">Spa & Wellness</a>
              </div>
              <div className="footer-column">
                <h4>Experiences</h4>
                <a href="#experiences">Activities</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
              </div>
              <div className="footer-column">
                <h4>Contact</h4>
                <p>{t.contact.phone}</p>
                <p>{t.contact.email}</p>
                <p>{t.contact.address}</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 TAN HOTEL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
