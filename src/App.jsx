import { useState, useEffect } from 'react'
import './App.css'

const translations = {
  en: {
    nav: {
      rooms: 'Rooms & Suites',
      dining: 'Dining',
      experiences: 'Experiences',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'TAN HOTEL',
      slogan: 'The morning starts here',
      subtitle: 'Where Luxury Meets Nature',
      description: 'Reconnect and reinvigorate your senses in places of incredible natural beauty, with meaningful experiences, empathetic hospitality, and pioneering wellness woven into the fabric of every TAN HOTEL property.',
      cta: 'Reserve Your Stay',
      scrollDown: 'Scroll Down'
    },
    about: {
      title: 'About TAN HOTEL',
      subtitle: 'Your perfect stay in the heart of the city',
      description: 'TAN HOTEL combines modern luxury with warm hospitality, offering guests an exceptional experience in our beautifully designed spaces. From our elegant rooms to our world-class dining, every detail is crafted to ensure your comfort and satisfaction.',
      features: [
        'Modern Design & Comfort',
        'Prime City Location',
        'Exceptional Service',
        'Fine Dining Experience'
      ]
    },
    rooms: {
      title: 'Rooms & Suites',
      subtitle: 'Elegant accommodations designed for your comfort',
      standard: {
        name: 'Standard Room',
        desc: 'Comfortable and modern room with all essential amenities',
        price: 'from $180',
        features: ['Queen Bed', 'City View', 'Modern Bathroom', 'Free WiFi']
      },
      deluxe: {
        name: 'Deluxe Room',
        desc: 'Spacious comfort with premium amenities and city views',
        price: 'from $280',
        features: ['King Bed', 'City View', 'Premium Amenities', '24/7 Service']
      }
    },
    dining: {
      title: 'Our Coffee Shop',
      subtitle: 'A cozy place to enjoy fresh coffee and delicious breakfast',
      restaurants: [
        {
          name: 'Morning Coffee Bar',
          desc: 'Freshly brewed coffee, pastries, and light breakfast options',
          type: 'Coffee & Pastries'
        },
        {
          name: 'Breakfast Lounge',
          desc: 'Full breakfast menu with local and international dishes',
          type: 'Breakfast'
        },
        {
          name: 'Afternoon Tea',
          desc: 'Traditional tea service with homemade cakes and sandwiches',
          type: 'Tea Service'
        }
      ],
      reserveBtn: 'Make Reservation'
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
      address: '4G88+Q6C, Astana 020000, Kazakhstan',
      phone: '+1 (555) 123-4567',
      email: 'reservations@tanhotel.com',
      hours: 'Check-in: 3:00 PM | Check-out: 11:00 AM'
    },
    booking: {
      backToHome: '← Back to Home',
      progress: {
        accommodation: 'ACCOMMODATION',
        extra: 'EXTRA',
        guestInfo: 'INFO',
        bookingConfirm: 'CONFIRM'
      },
      steps: {
        step1: {
          title: 'Choose your room',
          standardRoom: {
            name: 'Standard Room',
            desc: 'Comfortable and modern room with all essential amenities',
            features: ['Queen Bed', 'City View', 'Free WiFi'],
            price: '18,000₸ from',
            selectBtn: 'SELECT ROOM',
            bookNow: 'BOOK NOW'
          },
          deluxeRoom: {
            name: 'Deluxe Room',
            desc: 'Spacious room with premium amenities and city views',
            features: ['King Bed', 'City View', 'Free WiFi', 'Mini Bar'],
            price: '22,000₸ from',
            selectBtn: 'SELECT ROOM',
            bookNow: 'BOOK NOW'
          }
        },
        step2: {
          title: 'Select dates and guests',
          selectCheckIn: 'Select check-in date',
          selectCheckOut: 'Select check-out date',
          back: 'Back',
          continue: 'Continue'
        },
        step3: {
          title: 'Guest Information',
          titleLabel: 'Title',
          selectTitle: 'Select title',
          firstName: 'First Name',
          firstNamePlaceholder: 'Enter your first name',
          lastName: 'Last Name',
          lastNamePlaceholder: 'Enter your last name',
          email: 'Email',
          emailPlaceholder: 'Enter your email',
          phone: 'Phone',
          back: 'Back',
          completeBooking: 'Complete Booking',
          processing: 'Processing...',
          bookingSummary: 'Booking Summary',
          checkIn: 'Check-in',
          checkOut: 'Check-out',
          guests: 'Guests',
          room: 'Room',
          breakfast: 'Breakfast',
          notSelected: 'Not selected',
          included: 'Included',
          notIncluded: 'Not included',
          edit: 'Edit',
          roomRate: 'Room Rate',
          nights: 'nights',
          taxesFees: 'Taxes & Fees',
          total: 'Total',
          cancellationPolicy: 'Cancellation Policy',
          cancellationText: 'Free cancellation up to 24 hours before check-in.'
        },
        step4: {
          title: 'Booking Confirmed!',
          confirmationMessage: 'Your reservation has been successfully confirmed. We look forward to welcoming you.',
          bookingSummary: 'Booking Summary',
          room: 'Room',
          checkIn: 'Check-in',
          checkOut: 'Check-out',
          guests: 'Guests',
          breakfast: 'Breakfast',
          spaVouchers: 'Spa Vouchers',
          backToHome: 'Back to Home'
        }
      },
      calendar: {
        selectCheckIn: 'Select check-in date',
        selectCheckOut: 'Select check-out date',
        available: 'Available',
        selected: 'Selected',
        inRange: 'In Range',
        previewRange: 'Preview Range',
        clearDates: '× Clear Dates',
        daysSelected: 'days selected',
        daySelected: 'day selected'
      }
    }
  },
  ru: {
    nav: {
      rooms: 'Номера и люксы',
      dining: 'Рестораны',
      experiences: 'Впечатления',
      about: 'О нас',
      contact: 'Контакты'
    },
    hero: {
      title: 'TAN HOTEL',
      slogan: 'Утро начинается здесь',
      subtitle: 'Где роскошь встречается с природой',
      description: 'Переподключитесь и оживите свои чувства в местах невероятной природной красоты, с осмысленными впечатлениями, эмпатичным гостеприимством и новаторским оздоровлением, вплетенным в ткань каждого отеля TAN HOTEL.',
      cta: 'Забронировать',
      scrollDown: 'Прокрутить вниз'
    },
    about: {
      title: 'О TAN HOTEL',
      subtitle: 'Ваш идеальный отдых в сердце города',
      description: 'TAN HOTEL сочетает современную роскошь с теплым гостеприимством, предлагая гостям исключительный опыт в наших красиво оформленных пространствах. От наших элегантных номеров до ресторанов мирового класса, каждая деталь создана для обеспечения вашего комфорта и удовлетворения.',
      features: [
        'Современный дизайн и комфорт',
        'Превосходное расположение в городе',
        'Исключительный сервис',
        'Изысканная кухня'
      ]
    },
    rooms: {
      title: 'Номера и люксы',
      subtitle: 'Элегантные апартаменты, созданные для вашего комфорта',
      standard: {
        name: 'Стандартный номер',
        desc: 'Уютный и современный номер со всеми необходимыми удобствами',
        price: 'от 18 000₸',
        features: ['Двуспальная кровать', 'Вид на город', 'Современная ванная', 'Бесплатный WiFi']
      },
      deluxe: {
        name: 'Делюкс номер',
        desc: 'Просторный комфорт с премиальными удобствами и видом на город',
        price: 'от 22 000₸',
        features: ['Кровать King-size', 'Вид на город', 'Премиум удобства', 'Круглосуточный сервис']
      }
    },
    dining: {
      title: 'Наша кофейня',
      subtitle: 'Уютное место для наслаждения свежим кофе и вкусным завтраком',
      restaurants: [
        {
          name: 'Утренний кофейный бар',
          desc: 'Свежесваренный кофе, выпечка и легкие завтраки',
          type: 'Кофе и выпечка'
        },
        {
          name: 'Завтрак-лаунж',
          desc: 'Полное меню завтраков с местными и международными блюдами',
          type: 'Завтрак'
        },
        {
          name: 'Послеобеденный чай',
          desc: 'Традиционное чаепитие с домашними пирожными и сэндвичами',
          type: 'Чайная церемония'
        }
      ],
      reserveBtn: 'Забронировать'
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
      address: '4G88+Q6C, Астана 020000, Казахстан',
      phone: '+1 (555) 123-4567',
      email: 'reservations@tanhotel.com',
      hours: 'Заезд: 15:00 | Выезд: 11:00'
    },
    booking: {
      backToHome: '← Вернуться на главную',
      progress: {
        accommodation: 'РАЗМЕЩЕНИЕ',
        extra: 'ДОПОЛНИТЕЛЬНО',
        guestInfo: 'ИНФОРМАЦИЯ',
        bookingConfirm: 'ПОДТВЕРЖДЕНИЕ'
      },
      steps: {
        step1: {
          title: 'Выберите номер',
          standardRoom: {
            name: 'Стандартный номер',
            desc: 'Уютный и современный номер со всеми необходимыми удобствами',
            features: ['Двуспальная кровать', 'Вид на город', 'Бесплатный WiFi'],
            price: 'от 18 000₸',
            selectBtn: 'ВЫБРАТЬ НОМЕР',
            bookNow: 'ЗАБРОНИРОВАТЬ'
          },
          deluxeRoom: {
            name: 'Делюкс номер',
            desc: 'Просторный номер с премиальными удобствами и видом на город',
            features: ['Кровать King-size', 'Вид на город', 'Бесплатный WiFi', 'Мини-бар'],
            price: 'от 22 000₸',
            selectBtn: 'ВЫБРАТЬ НОМЕР',
            bookNow: 'ЗАБРОНИРОВАТЬ'
          }
        },
        step2: {
          title: 'Выберите даты и гостей',
          selectCheckIn: 'Выберите дату заезда',
          selectCheckOut: 'Выберите дату выезда',
          back: 'Назад',
          continue: 'Продолжить'
        },
        step3: {
          title: 'Информация о госте',
          titleLabel: 'Титул',
          selectTitle: 'Выберите титул',
          firstName: 'Имя',
          firstNamePlaceholder: 'Введите ваше имя',
          lastName: 'Фамилия',
          lastNamePlaceholder: 'Введите вашу фамилию',
          email: 'Email',
          emailPlaceholder: 'Введите ваш email',
          phone: 'Телефон',
          back: 'Назад',
          completeBooking: 'Завершить бронирование',
          processing: 'Обработка...',
          bookingSummary: 'Сводка бронирования',
          checkIn: 'Заезд',
          checkOut: 'Выезд',
          guests: 'Гости',
          room: 'Номер',
          breakfast: 'Завтрак',
          notSelected: 'Не выбрано',
          included: 'Включено',
          notIncluded: 'Не включено',
          edit: 'Изменить',
          roomRate: 'Стоимость номера',
          nights: 'ночей',
          taxesFees: 'Налоги и сборы',
          total: 'Итого',
          cancellationPolicy: 'Политика отмены',
          cancellationText: 'Бесплатная отмена до 24 часов до заезда.'
        },
        step4: {
          title: 'Бронирование подтверждено!',
          confirmationMessage: 'Ваше бронирование успешно подтверждено. Мы с нетерпением ждем вас.',
          bookingSummary: 'Сводка бронирования',
          room: 'Номер',
          checkIn: 'Заезд',
          checkOut: 'Выезд',
          guests: 'Гости',
          breakfast: 'Завтрак',
          spaVouchers: 'Спа-ваучеры',
          backToHome: 'Вернуться на главную'
        }
      },
      calendar: {
        selectCheckIn: 'Выберите дату заезда',
        selectCheckOut: 'Выберите дату выезда',
        available: 'Доступно',
        selected: 'Выбрано',
        inRange: 'В диапазоне',
        previewRange: 'Предварительный просмотр',
        clearDates: '× Очистить даты',
        daysSelected: 'дней выбрано',
        daySelected: 'день выбран'
      }
    }
  },
  kz: {
    nav: {
      rooms: 'Бөлмелер мен люкстер',
      dining: 'Ресторандар',
      experiences: 'Тәжірибелер',
      about: 'Біз туралы',
      contact: 'Байланыс'
    },
    hero: {
      title: 'TAN HOTEL',
      slogan: 'Таң осында басталады',
      subtitle: 'Роскошь табиғатпен кездесетін жер',
      description: 'Табиғи сұлулық орындарында сезімдеріңізді қайта қосыңыз және жандандырыңыз, мағыналы тәжірибелермен, эмпатиялық қонақжайлылылылықпен және әрбір TAN HOTEL мүлігінің матасына тоқылған новаторлық денсаулықпен.',
      cta: 'Брондау',
      scrollDown: 'Түсіру'
    },
    about: {
      title: 'TAN HOTEL туралы',
      subtitle: 'Қаланың орталығындағы сіздің тамаша демалысыңыз',
      description: 'TAN HOTEL заманауи роскошьты жылы қонақжайлылылылықпен біріктіре отырып, қонақтарға біздің әдемі жобаланған кеңістіктерде керемет тәжірибе ұсынады. Біздің әдемі бөлмелерімізден дүниежүзілік деңгейдегі тамақтануға дейін, әрбір бөлшекті сіздің комфортыңыз мен қанағаттануыңызды қамтамасыз ету үшін жасалған.',
      features: [
        'Заманауи дизайн және комфорт',
        'Қаладағы үздік орналасу',
        'Керемет қызмет',
        'Әдемі тамақтану тәжірибесі'
      ]
    },
    rooms: {
      title: 'Бөлмелер мен люкстер',
      subtitle: 'Сіздің комфортыңыз үшін жасалған әдемі апартаменттер',
      standard: {
        name: 'Стандартты бөлме',
        desc: 'Барлық қажетті ыңғайлылықтармен жабдықталған жайлы және заманауи бөлме',
        price: '18 000₸-ден',
        features: ['Екі адамдық төсек', 'Қала көрінісі', 'Тегін WiFi']
      },
      deluxe: {
        name: 'Люкс бөлме',
        desc: 'Премиум ыңғайлылықтар мен қала көрінісі бар кең бөлме',
        price: '22 000₸-ден',
        features: ['King-size кереует', 'Қала көрінісі', 'Премиум ыңғайлылықтар']
      }
    },
    dining: {
      title: 'Біздің кофейня',
      subtitle: 'Жаңа кофе мен дәмді таңғы асқа ләззат алуға арналған жайлы орын',
      restaurants: [
        {
          name: 'Таңғы кофе бар',
          desc: 'Жаңа пісірілген кофе, нан және жеңіл таңғы ас',
          type: 'Кофе және нан'
        },
        {
          name: 'Таңғы ас лаунжі',
          desc: 'Жергілікті және халықаралық тағамдармен толық таңғы ас мәзірі',
          type: 'Таңғы ас'
        },
        {
          name: 'Түстен кейінгі шай',
          desc: 'Үйде жасалған торттар мен сэндвичтермен дәстүрлі шай сервисі',
          type: 'Шай сервисі'
        }
      ],
      reserveBtn: 'Брондау'
    },
    experiences: {
      title: 'Бірегей тәжірибелер',
      subtitle: 'Өмір бойы есте қалатын естеліктер жасаңыз',
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
      title: 'Бізбен байланысыңыз',
      address: '4G88+Q6C, Астана 020000, Қазақстан',
      phone: '+1 (555) 123-4567',
      email: 'reservations@tanhotel.com',
      hours: 'Кіру: 15:00 | Шығу: 11:00'
    },
    booking: {
      backToHome: '← Басты бетке қайту',
      progress: {
        accommodation: 'ОРНАЛАСУ',
        extra: 'ҚОСЫМША',
        guestInfo: 'АҚПАРАТ',
        bookingConfirm: 'РАСТАУ'
      },
      steps: {
        step1: {
          title: 'Бөлмеңізді таңдаңыз',
          standardRoom: {
            name: 'Стандартты бөлме',
            desc: 'Барлық қажетті ыңғайлылықтармен жабдықталған ыңғайлы және заманауи бөлме',
            features: ['Екі төсекті кереует', 'Қала көрінісі', 'Тегін WiFi'],
            price: '18,000₸-ден',
            selectBtn: 'БӨЛМЕНІ ТАҢДАУ',
            bookNow: 'БРОНДАУ'
          },
          deluxeRoom: {
            name: 'Люкс бөлме',
            desc: 'Премиум ыңғайлылықтар мен қала көрінісі бар кең бөлме',
            features: ['King-size кереует', 'Қала көрінісі', 'Тегін WiFi', 'Мини-бар'],
            price: '22,000₸-ден',
            selectBtn: 'БӨЛМЕНІ ТАҢДАУ',
            bookNow: 'БРОНДАУ'
          }
        },
        step2: {
          title: 'Күндер мен қонақтарды таңдаңыз',
          selectCheckIn: 'Кіру күнін таңдаңыз',
          selectCheckOut: 'Шығу күнін таңдаңыз',
          back: 'Артқа',
          continue: 'Жалғастыру'
        },
        step3: {
          title: 'Қонақ ақпараты',
          titleLabel: 'Атау',
          selectTitle: 'Атауды таңдаңыз',
          firstName: 'Аты',
          firstNamePlaceholder: 'Атыңызды енгізіңіз',
          lastName: 'Тегі',
          lastNamePlaceholder: 'Тегіңізді енгізіңіз',
          email: 'Email',
          emailPlaceholder: 'Email-діңізді енгізіңіз',
          phone: 'Телефон',
          back: 'Артқа',
          completeBooking: 'Брондауды аяқтау',
          processing: 'Өңделуде...',
          bookingSummary: 'Брондау қорытындысы',
          checkIn: 'Кіру',
          checkOut: 'Шығу',
          guests: 'Қонақтар',
          room: 'Бөлме',
          breakfast: 'Таңғы ас',
          notSelected: 'Таңдалмаған',
          included: 'Қосылған',
          notIncluded: 'Қосылмаған',
          edit: 'Өңдеу',
          roomRate: 'Бөлме бағасы',
          nights: 'түн',
          taxesFees: 'Салықтар және алымдар',
          total: 'Барлығы',
          cancellationPolicy: 'Бас тарту саясаты',
          cancellationText: 'Кіруге 24 сағат бұрын тегін бас тарту.'
        },
        step4: {
          title: 'Брондау расталды!',
          confirmationMessage: 'Сіздің брондауыңыз сәтті расталды. Сізді күтуге асығып отырмыз.',
          bookingSummary: 'Брондау қорытындысы',
          room: 'Бөлме',
          checkIn: 'Кіру',
          checkOut: 'Шығу',
          guests: 'Қонақтар',
          breakfast: 'Таңғы ас',
          spaVouchers: 'Спа-ваучерлер',
          backToHome: 'Басты бетке қайту'
        }
      },
      calendar: {
        selectCheckIn: 'Кіру күнін таңдаңыз',
        selectCheckOut: 'Шығу күнін таңдаңыз',
        available: 'Қолжетімді',
        selected: 'Таңдалған',
        inRange: 'Диапазонда',
        previewRange: 'Алдын ала қарау',
        clearDates: '× Күндерді тазалау',
        daysSelected: 'күн таңдалды',
        daySelected: 'күн таңдалды'
      }
    }
  }
}

function App() {
  const [lang, setLang] = useState('en')
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [guestInfo, setGuestInfo] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })
  const [isBookingComplete, setIsBookingComplete] = useState(false)
  const [showBooking, setShowBooking] = useState(false)
  
  const t = translations[lang]
  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'kz', label: 'KK' },
  ]

  const handleRoomSelect = (roomType) => {
    setSelectedRoom(roomType)
    setCurrentStep(2)
  }

  const handleDateSelect = (checkIn, checkOut) => {
    setCheckInDate(checkIn)
    setCheckOutDate(checkOut)
    setCurrentStep(3)
  }

  const handleGuestInfoSubmit = (info) => {
    setGuestInfo(info)
    setCurrentStep(4)
    // Simulate processing
    setTimeout(() => {
      setIsBookingComplete(true)
    }, 2000)
  }

  const resetBooking = () => {
    setCurrentStep(1)
    setSelectedRoom(null)
    setCheckInDate(null)
    setCheckOutDate(null)
    setGuestInfo({})
    setIsBookingComplete(false)
    setShowBooking(false)
  }

  if (showBooking) {
    return (
      <div className="booking-container">
        <div className="booking-header">
          <button onClick={resetBooking} className="back-btn">
            {t.booking.backToHome}
          </button>
        </div>
        
        <div className="booking-progress">
          <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
            {t.booking.progress.accommodation}
          </div>
          <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
            {t.booking.progress.extra}
          </div>
          <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
            {t.booking.progress.guestInfo}
          </div>
          <div className={`progress-step ${currentStep >= 4 ? 'active' : ''}`}>
            {t.booking.progress.bookingConfirm}
          </div>
        </div>

        {currentStep === 1 && (
          <div className="booking-step">
            <h2>{t.booking.steps.step1.title}</h2>
            <div className="room-selection">
              <div className="room-option">
                <div className="room-image" style={{
                  backgroundImage: `url('/photos/692091917.jpg')`
                }}></div>
                <div className="room-details">
                  <h3>{t.booking.steps.step1.standardRoom.name}</h3>
                  <p>{t.booking.steps.step1.standardRoom.desc}</p>
                  <div className="room-features">
                    {t.booking.steps.step1.standardRoom.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <div className="room-price">{t.booking.steps.step1.standardRoom.price}</div>
                  <button 
                    onClick={() => handleRoomSelect('standard')}
                    className="select-room-btn"
                  >
                    {t.booking.steps.step1.standardRoom.selectBtn}
                  </button>
                </div>
              </div>
              
              <div className="room-option">
                <div className="room-image" style={{
                  backgroundImage: `url('/photos/692091927.jpg')`
                }}></div>
                <div className="room-details">
                  <h3>{t.booking.steps.step1.deluxeRoom.name}</h3>
                  <p>{t.booking.steps.step1.deluxeRoom.desc}</p>
                  <div className="room-features">
                    {t.booking.steps.step1.deluxeRoom.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <div className="room-price">{t.booking.steps.step1.deluxeRoom.price}</div>
                  <button 
                    onClick={() => handleRoomSelect('deluxe')}
                    className="select-room-btn"
                  >
                    {t.booking.steps.step1.deluxeRoom.selectBtn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="booking-step">
            <h2>{t.booking.steps.step2.title}</h2>
            <div className="date-selection">
              <div className="date-input">
                <label>{t.booking.steps.step2.selectCheckIn}</label>
                <input 
                  type="date" 
                  onChange={(e) => setCheckInDate(e.target.value)}
                  value={checkInDate || ''}
                />
              </div>
              <div className="date-input">
                <label>{t.booking.steps.step2.selectCheckOut}</label>
                <input 
                  type="date" 
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  value={checkOutDate || ''}
                />
              </div>
              <div className="booking-actions">
                <button onClick={() => setCurrentStep(1)} className="back-btn">
                  {t.booking.steps.step2.back}
                </button>
                <button 
                  onClick={() => setCurrentStep(3)} 
                  className="continue-btn"
                  disabled={!checkInDate || !checkOutDate}
                >
                  {t.booking.steps.step2.continue}
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="booking-step">
            <h2>{t.booking.steps.step3.title}</h2>
            <form className="guest-form" onSubmit={(e) => {
              e.preventDefault()
              handleGuestInfoSubmit(guestInfo)
            }}>
              <div className="form-group">
                <label>{t.booking.steps.step3.titleLabel}</label>
                <select 
                  value={guestInfo.title} 
                  onChange={(e) => setGuestInfo({...guestInfo, title: e.target.value})}
                  required
                >
                  <option value="">{t.booking.steps.step3.selectTitle}</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>
              <div className="form-group">
                <label>{t.booking.steps.step3.firstName}</label>
                <input 
                  type="text" 
                  placeholder={t.booking.steps.step3.firstNamePlaceholder}
                  value={guestInfo.firstName}
                  onChange={(e) => setGuestInfo({...guestInfo, firstName: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.booking.steps.step3.lastName}</label>
                <input 
                  type="text" 
                  placeholder={t.booking.steps.step3.lastNamePlaceholder}
                  value={guestInfo.lastName}
                  onChange={(e) => setGuestInfo({...guestInfo, lastName: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.booking.steps.step3.email}</label>
                <input 
                  type="email" 
                  placeholder={t.booking.steps.step3.emailPlaceholder}
                  value={guestInfo.email}
                  onChange={(e) => setGuestInfo({...guestInfo, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.booking.steps.step3.phone}</label>
                <input 
                  type="tel" 
                  value={guestInfo.phone}
                  onChange={(e) => setGuestInfo({...guestInfo, phone: e.target.value})}
                  required
                />
              </div>
              <div className="booking-actions">
                <button type="button" onClick={() => setCurrentStep(2)} className="back-btn">
                  {t.booking.steps.step3.back}
                </button>
                <button type="submit" className="complete-btn">
                  {t.booking.steps.step3.completeBooking}
                </button>
              </div>
            </form>
          </div>
        )}

        {currentStep === 4 && (
          <div className="booking-step">
            {!isBookingComplete ? (
              <div className="processing">
                <div className="spinner"></div>
                <p>{t.booking.steps.step3.processing}</p>
              </div>
            ) : (
              <div className="booking-confirmation">
                <h2>{t.booking.steps.step4.title}</h2>
                <p>{t.booking.steps.step4.confirmationMessage}</p>
                
                <div className="booking-summary">
                  <h3>{t.booking.steps.step4.bookingSummary}</h3>
                  <div className="summary-item">
                    <span>{t.booking.steps.step4.room}:</span>
                    <span>{selectedRoom === 'standard' ? t.booking.steps.step1.standardRoom.name : t.booking.steps.step1.deluxeRoom.name}</span>
                  </div>
                  <div className="summary-item">
                    <span>{t.booking.steps.step4.checkIn}:</span>
                    <span>{checkInDate}</span>
                  </div>
                  <div className="summary-item">
                    <span>{t.booking.steps.step4.checkOut}:</span>
                    <span>{checkOutDate}</span>
                  </div>
                  <div className="summary-item">
                    <span>{t.booking.steps.step4.guests}:</span>
                    <span>{guestInfo.title} {guestInfo.firstName} {guestInfo.lastName}</span>
                  </div>
                </div>
                
                <button onClick={resetBooking} className="back-home-btn">
                  {t.booking.steps.step4.backToHome}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

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
            <a href="#about">{t.nav.about}</a>
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
            <button className="reserve-btn" onClick={() => setShowBooking(true)}>{t.hero.cta}</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="ritz-hero">
        <div className="hero-background" style={{
          backgroundImage: `url('/photos/692091920.jpg')`
        }}>
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">{t.hero.title}</h1>
              <h2 className="hero-subtitle">{t.hero.subtitle}</h2>
              <p className="hero-description">{t.hero.description}</p>
              <button className="hero-cta" onClick={() => setShowBooking(true)}>{t.hero.cta}</button>
            </div>
          </div>
        </div>
        <a href="#about" className="scroll-down">
          <span className="scroll-down-text">{t.hero.scrollDown}</span>
          <span className="scroll-down-arrow">↓</span>
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="ritz-section about-section">
        <div className="section-container">
          <div className="about-content">
            <div className="about-text">
              <h2>{t.about.title}</h2>
              <h3>{t.about.subtitle}</h3>
              <p>{t.about.description}</p>
              <div className="about-features">
                {t.about.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <span className="feature-icon">✨</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-gallery">
              <div className="gallery-grid">
                <div className="gallery-item large" style={{
                  backgroundImage: `url('/photos/692091920.jpg')`
                }}></div>
                <div className="gallery-item" style={{
                  backgroundImage: `url('/photos/692091917.jpg')`
                }}></div>
                <div className="gallery-item" style={{
                  backgroundImage: `url('/photos/692091927.jpg')`
                }}></div>
                <div className="gallery-item" style={{
                  backgroundImage: `url('/photos/692093344.jpg')`
                }}></div>
              </div>
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
                backgroundImage: `url('/photos/692091917.jpg')`
              }}></div>
              <div className="room-content">
                <h3>{t.rooms.standard.name}</h3>
                <p>{t.rooms.standard.desc}</p>
                <div className="room-features">
                  {t.rooms.standard.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="room-price">{t.rooms.standard.price}</div>
                <button className="room-book-btn" onClick={() => setShowBooking(true)}>Book Now</button>
              </div>
            </div>
            <div className="room-card featured">
              <div className="room-image" style={{
                backgroundImage: `url('/photos/692091927.jpg')`
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
                <button className="room-book-btn" onClick={() => setShowBooking(true)}>Book Now</button>
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
                  backgroundImage: `url('/photos/${['692091910.jpg', '692094771.jpg', '692091914.jpg'][idx]}')`
                }}></div>
                <div className="dining-content">
                  <span className="dining-type">{restaurant.type}</span>
                  <h3>{restaurant.name}</h3>
                  <p>{restaurant.desc}</p>
                  <button className="dining-reserve-btn">{t.dining.reserveBtn}</button>
                </div>
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
                    <option>Standard Room</option>
                    <option>Deluxe Room</option>
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
                <a href="#about">About</a>
              </div>
              <div className="footer-column">
                <h4>Experiences</h4>
                <a href="#experiences">Activities</a>
                <a href="#contact">Contact</a>
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
