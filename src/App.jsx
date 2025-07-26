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
      address: 'улица А.Байтурсунова 20А, Astana 010000, Kazakhstan',
      phone: '+7 708 482 0070',
      email: 'reservations@tanhotel.com',
      hours: 'Check-in: 3:00 PM | Check-out: 11:00 AM'
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
      address: 'улица А.Байтурсунова 20А, Астана 010000, Казахстан',
      phone: '+7 708 482 0070',
      email: 'reservations@tanhotel.com',
      hours: 'Заезд: 15:00 | Выезд: 11:00'
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
      address: 'А.Байтұрсынов көшесі 20А, Астана 010000, Қазақстан',
      phone: '+7 708 482 0070',
      email: 'reservations@tanhotel.com',
      hours: 'Кіру: 15:00 | Шығу: 11:00'
    }
  }
}

function App() {
  const [lang, setLang] = useState('en')
  const [isScrolled, setIsScrolled] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDates, setSelectedDates] = useState({ checkIn: null, checkOut: null })
  const [hoveredDate, setHoveredDate] = useState(null)
  const [showGuestSelector, setShowGuestSelector] = useState(false)
  const [guestCount, setGuestCount] = useState({ adults: 2, children: 0 })
  const [roomCount, setRoomCount] = useState(1)
  const [showRoomSelector, setShowRoomSelector] = useState(false)
  const [bookingError, setBookingError] = useState('')
  
  // Get current month index (0-11) for 2025
  const getCurrentMonthIndex = () => {
    const now = new Date()
    const currentYear = now.getFullYear()
    const currentMonth = now.getMonth()
    
    // If we're in 2025, use current month, otherwise start from January
    if (currentYear === 2025) {
      return currentMonth
    } else if (currentYear < 2025) {
      return 0 // Start from January 2025
    } else {
      return 11 // December 2025 if we're past 2025
    }
  }
  
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonthIndex())
  
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const t = translations[lang]
  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'kz', label: 'KK' },
  ]

  // Get today's date
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Generate calendar data with correct day offsets
  const generateCalendarData = () => {
    const months = [
      { name: 'JANUARY 2025', year: 2025, month: 0 }, // January (0-indexed)
      { name: 'FEBRUARY 2025', year: 2025, month: 1 }, // February (0-indexed)
      { name: 'MARCH 2025', year: 2025, month: 2 }, // March (0-indexed)
      { name: 'APRIL 2025', year: 2025, month: 3 }, // April (0-indexed)
      { name: 'MAY 2025', year: 2025, month: 4 }, // May (0-indexed)
      { name: 'JUNE 2025', year: 2025, month: 5 }, // June (0-indexed)
      { name: 'JULY 2025', year: 2025, month: 6 }, // July (0-indexed)
      { name: 'AUGUST 2025', year: 2025, month: 7 }, // August (0-indexed)
      { name: 'SEPTEMBER 2025', year: 2025, month: 8 }, // September (0-indexed)
      { name: 'OCTOBER 2025', year: 2025, month: 9 }, // October (0-indexed)
      { name: 'NOVEMBER 2025', year: 2025, month: 10 }, // November (0-indexed)
      { name: 'DECEMBER 2025', year: 2025, month: 11 } // December (0-indexed)
    ]

    return months.map((monthInfo, monthIndex) => {
      const firstDay = new Date(monthInfo.year, monthInfo.month, 1)
      const lastDay = new Date(monthInfo.year, monthInfo.month + 1, 0)
      
      // Get the day of week for the first day (0 = Sunday, 1 = Monday, etc.)
      // We want Monday to be 0, so we adjust
      let startOffset = firstDay.getDay() - 1
      if (startOffset < 0) startOffset = 6 // Sunday becomes 6
      
      const daysInMonth = lastDay.getDate()
      
      const days = []
      
      // Add empty days for offset
      for (let i = 0; i < startOffset; i++) {
        days.push({ day: '', className: 'empty' })
      }
      
      // Add days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(monthInfo.year, monthInfo.month, day)
        // Используем простое локальное форматирование без toISOString()
        const dateString = `${monthInfo.year}-${String(monthInfo.month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        const isPast = date < today
        
        days.push({
          day,
          date: dateString,
          className: isPast ? 'past' : 'available'
        })
      }
      
      return {
        month: monthInfo.name,
        days
      }
    })
  }

  const calendarData = generateCalendarData()

  // Calculate nights between check-in and check-out
  const calculateNights = () => {
    if (!selectedDates.checkIn || !selectedDates.checkOut) return 0
    const [checkInYear, checkInMonth, checkInDay] = selectedDates.checkIn.split('-').map(Number)
    const [checkOutYear, checkOutMonth, checkOutDay] = selectedDates.checkOut.split('-').map(Number)
    const checkIn = new Date(checkInYear, checkInMonth - 1, checkInDay)
    const checkOut = new Date(checkOutYear, checkOutMonth - 1, checkOutDay)
    const diffTime = checkOut.getTime() - checkIn.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  // Calculate nights for hover preview
  const calculateHoverNights = (hoverDate) => {
    if (!selectedDates.checkIn || !hoverDate) return 0
    const [checkInYear, checkInMonth, checkInDay] = selectedDates.checkIn.split('-').map(Number)
    const [hoverYear, hoverMonth, hoverDay] = hoverDate.split('-').map(Number)
    const checkIn = new Date(checkInYear, checkInMonth - 1, checkInDay)
    const hover = new Date(hoverYear, hoverMonth - 1, hoverDay)
    if (hover <= checkIn) return 0
    const diffTime = hover.getTime() - checkIn.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  // Check if date is in the past
  const isPastDate = (dateString) => {
    const [year, month, day] = dateString.split('-').map(Number)
    const date = new Date(year, month - 1, day)
    date.setHours(0, 0, 0, 0)
    return date < today
  }

  // Check if date is disabled (only past dates are disabled)
  const isDateDisabled = (dateString) => {
    // Прошедшие даты всегда заблокированы
    if (isPastDate(dateString)) return true
    
    return false
  }

  // Get CSS classes for calendar day
  const getDayClasses = (day, monthIndex) => {
    if (!day.date) return 'empty'
    
    const classes = []
    const dateString = day.date
    
    if (isPastDate(dateString)) {
      classes.push('past')
    } else if (isDateDisabled(dateString)) {
      classes.push('disabled')
    }
    
    if (selectedDates.checkIn === dateString) {
      classes.push('selected', 'range-start')
    } else if (selectedDates.checkOut === dateString) {
      classes.push('selected', 'range-end')
    } else if (selectedDates.checkIn && selectedDates.checkOut) {
      const [year, month, day] = dateString.split('-').map(Number)
      const [checkInYear, checkInMonth, checkInDay] = selectedDates.checkIn.split('-').map(Number)
      const [checkOutYear, checkOutMonth, checkOutDay] = selectedDates.checkOut.split('-').map(Number)
      const date = new Date(year, month - 1, day)
      const checkIn = new Date(checkInYear, checkInMonth - 1, checkInDay)
      const checkOut = new Date(checkOutYear, checkOutMonth - 1, checkOutDay)
      if (date > checkIn && date < checkOut) {
        classes.push('in-range')
      }
    } else if (selectedDates.checkIn && hoveredDate) {
      const [year, month, day] = dateString.split('-').map(Number)
      const [checkInYear, checkInMonth, checkInDay] = selectedDates.checkIn.split('-').map(Number)
      const [hoverYear, hoverMonth, hoverDay] = hoveredDate.split('-').map(Number)
      const date = new Date(year, month - 1, day)
      const checkIn = new Date(checkInYear, checkInMonth - 1, checkInDay)
      const hovered = new Date(hoverYear, hoverMonth - 1, hoverDay)
      
      // Показываем диапазон только для дат между check-in и hovered (исключая check-in)
      if (date > checkIn && date <= hovered) {
        classes.push('in-range')
      }
    }
    
    return classes.join(' ')
  }

  const handleDateSelect = (date) => {
    if (isPastDate(date)) return
    
    // Если нет ни одной даты выбрано → при клике на дату:
    if (!selectedDates.checkIn) {
      setSelectedDates({ checkIn: date, checkOut: null })
      // Скрываем ошибку при изменении дат
      if (bookingError) {
        setBookingError('')
      }
      return
    }
    
    // Если выбран только check-in, но нет check-out:
    if (selectedDates.checkIn && !selectedDates.checkOut) {
      // Если clickedDate < checkIn и clickedDate ≥ today → перезапись даты въезда
      if (date < selectedDates.checkIn) {
        setSelectedDates({ checkIn: date, checkOut: null })
      }
      // Если clickedDate > checkIn → устанавливаем check-out
      else if (date > selectedDates.checkIn) {
        setSelectedDates({ ...selectedDates, checkOut: date })
        setShowCalendar(false)
      }
      // Если clickedDate == checkIn → ничего не делать
      // (это происходит автоматически, так как мы не обрабатываем этот случай)
    }
    
    // Если выбраны обе даты (check-in и check-out):
    if (selectedDates.checkIn && selectedDates.checkOut) {
      // Любой клик сбрасывает диапазон и начинает с checkIn = clickedDate, checkOut = null
      setSelectedDates({ checkIn: date, checkOut: null })
    }
    
    // Скрываем ошибку при изменении дат
    if (bookingError) {
      setBookingError('')
    }
  }

  const handleDateHover = (date) => {
    // Hover работает только если есть check-in, но нет check-out, и дата после check-in
    if (selectedDates.checkIn && !selectedDates.checkOut && date > selectedDates.checkIn && !isPastDate(date)) {
      setHoveredDate(date)
    }
  }

  const handleDateLeave = () => {
    setHoveredDate(null)
  }

  const handleMonthChange = (direction) => {
    const newMonth = currentMonth + direction
    if (newMonth >= 0 && newMonth < calendarData.length - 1) {
      setCurrentMonth(newMonth)
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    // Создаем дату в локальном часовом поясе
    const [year, month, day] = dateString.split('-').map(Number)
    const date = new Date(year, month - 1, day) // month - 1 потому что месяцы 0-indexed
    
    // Получаем день недели (сокращенное название)
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' })
    
    // Форматируем дату
    const formattedDate = date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric'
    })
    
    // Возвращаем в формате "Aug 4, Wed"
    return `${formattedDate}, ${dayOfWeek}`
  }

  const openCalendar = () => {
    setShowCalendar(true)
  }

  const closeCalendar = () => {
    setShowCalendar(false)
    setHoveredDate(null)
  }

  const openGuestSelector = () => {
    setShowGuestSelector(true)
  }

  const closeGuestSelector = () => {
    setShowGuestSelector(false)
  }

  const updateGuestCount = (type, action) => {
    setGuestCount(prev => {
      const newCount = { ...prev }
      if (action === 'increase') {
        if (type === 'adults') {
          newCount.adults = Math.min(newCount.adults + 1, 10)
        } else {
          newCount.children = Math.min(newCount.children + 1, 8)
        }
      } else if (action === 'decrease') {
        if (type === 'adults') {
          newCount.adults = Math.max(newCount.adults - 1, 1)
        } else {
          newCount.children = Math.max(newCount.children - 1, 0)
        }
      }
      return newCount
    })
    
    // Скрываем ошибку при изменении количества гостей
    if (bookingError) {
      setBookingError('')
    }
  }

  const updateRoomCount = (count) => {
    setRoomCount(count)
    // Скрываем ошибку при изменении количества комнат
    if (bookingError) {
      setBookingError('')
    }
  }

  const validateBooking = () => {
    const totalGuests = guestCount.adults + guestCount.children
    const maxGuestsPerRoom = 2
    const maxRoomsPerClient = 2
    
    // Check for adults presence
    if (guestCount.adults === 0 && guestCount.children > 0) {
      setBookingError('Add at least one adult for booking')
      return false
    }
    
    if (guestCount.adults === 0 && roomCount > 0) {
      setBookingError('Cannot book a room without an adult')
      return false
    }
    
    // Check maximum rooms per client
    if (roomCount > maxRoomsPerClient) {
      setBookingError('Maximum 2 rooms per guest')
      return false
    }
    
    // Check guests per room
    if (totalGuests > roomCount * maxGuestsPerRoom) {
      setBookingError('Each room accommodates up to 2 guests. Please adjust the number of rooms or guests.')
      return false
    }
    
    setBookingError('')
    return true
  }

  const handleBookClick = () => {
    if (validateBooking()) {
      // Скрываем баннер ошибки при успешной валидации
      setBookingError('')
      // Здесь можно добавить логику перехода к следующему шагу
      console.log('Booking validated:', { selectedDates, guestCount, roomCount })
    }
    // Если валидация не прошла, ошибка уже установлена в validateBooking()
  }

  const nights = calculateNights()
  const hoverNights = calculateHoverNights(hoveredDate)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCalendar && !event.target.closest('.calendar-container') && !event.target.closest('.booking-form-field')) {
        setShowCalendar(false)
      }
      if (showGuestSelector && !event.target.closest('.guest-field') && !event.target.closest('.guest-selector-dropdown')) {
        setShowGuestSelector(false)
      }
      if (showRoomSelector && !event.target.closest('.room-field') && !event.target.closest('.room-selector-dropdown')) {
        setShowRoomSelector(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showCalendar, showGuestSelector, showRoomSelector])

  return (
    <div className="ritz-style-root">
      {/* Fixed Navigation (appears on scroll) */}
      <nav className={`ritz-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={handleLogoClick}>
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
            <button className="reserve-btn">{t.hero.cta}</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="ritz-hero">
        <div className="hero-background" style={{
          backgroundImage: `url('/photos/692091920.jpg')`
        }}>
          <div className="hero-overlay">
            {/* Hero Navigation */}
            <nav className={`hero-nav ${isScrolled ? 'scrolled' : ''}`}>
              <div className="nav-container">
                <div className="nav-logo" onClick={handleLogoClick}>
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
                  <button className="reserve-btn">{t.hero.cta}</button>
                </div>
              </div>
            </nav>

            <div className="hero-content">
              <h1 className="hero-title">{t.hero.title}</h1>
              <h2 className="hero-subtitle">{t.hero.subtitle}</h2>
              <p className="hero-description">{t.hero.description}</p>
            </div>
            
          </div>
        </div>
        
        {/* Booking Form */}
        <div className="booking-form-container">
          <div className="booking-form">
            <div className="booking-form-field" onClick={openCalendar}>
              <div className="field-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A68E66" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Check-in" 
                className="booking-input" 
                value={formatDate(selectedDates.checkIn)}
                readOnly
              />
            </div>
            
            <div className="booking-arrow">→</div>
            
            <div className="booking-form-field" onClick={openCalendar}>
              <div className="field-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A68E66" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Check-out" 
                className="booking-input" 
                value={formatDate(selectedDates.checkOut)}
                readOnly
              />
            </div>
            
            <div className="booking-form-field room-field" onClick={() => setShowRoomSelector(!showRoomSelector)}>
              <div className="field-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A68E66" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9,22 9,12 15,12 15,22"></polyline>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Rooms" 
                className="booking-input" 
                value={`Rooms: ${roomCount}`}
                readOnly
              />
              
              {/* Room Selector Dropdown */}
              {showRoomSelector && (
                <div className="room-selector-dropdown">
                  <div className="room-selector-content">
                    <div className="room-selector-section">
                      <h3>Rooms</h3>
                      <div className="room-counter">
                        <button 
                          className="room-counter-btn" 
                          onClick={(e) => {
                            e.stopPropagation();
                            if (roomCount > 1) {
                              updateRoomCount(roomCount - 1);
                            }
                          }}
                          disabled={roomCount <= 1}
                        >
                          −
                        </button>
                        <span className="room-counter-number">{roomCount}</span>
                        <button 
                          className="room-counter-btn" 
                          onClick={(e) => {
                            e.stopPropagation();
                            if (roomCount < 19) {
                              updateRoomCount(roomCount + 1);
                            }
                          }}
                          disabled={roomCount >= 19}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="booking-form-field guest-field" onClick={openGuestSelector}>
              <div className="field-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A68E66" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="2 Adults, 0 Children" 
                className="booking-input" 
                value={`${guestCount.adults} Adults, ${guestCount.children} Children`}
                readOnly
              />
              
              {/* Guest Selector Dropdown */}
              {showGuestSelector && (
                <div className="guest-selector-dropdown">
                  <div className="guest-selector-content">
                    <div className="guest-selector-section">
                      <h3>Adults</h3>
                      <div className="guest-counter">
                        <button 
                          className="guest-counter-btn" 
                          onClick={(e) => {
                            e.stopPropagation();
                            updateGuestCount('adults', 'decrease');
                          }}
                          disabled={guestCount.adults <= 1}
                        >
                          −
                        </button>
                        <span className="guest-counter-number">{guestCount.adults}</span>
                        <button 
                          className="guest-counter-btn" 
                          onClick={(e) => {
                            e.stopPropagation();
                            updateGuestCount('adults', 'increase');
                          }}
                          disabled={guestCount.adults >= 10}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className="guest-selector-section">
                      <h3>Children</h3>
                      <div className="guest-counter">
                        <button 
                          className="guest-counter-btn" 
                          onClick={(e) => {
                            e.stopPropagation();
                            updateGuestCount('children', 'decrease');
                          }}
                          disabled={guestCount.children <= 0}
                        >
                          −
                        </button>
                        <span className="guest-counter-number">{guestCount.children}</span>
                        <button 
                          className="guest-counter-btn" 
                          onClick={(e) => {
                            e.stopPropagation();
                            updateGuestCount('children', 'increase');
                          }}
                          disabled={guestCount.children >= 8}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="booking-form-field">
              <div className="field-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A68E66" strokeWidth="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
              </div>
              <input type="text" placeholder="Special codes" className="booking-input" />
            </div>
            
            <button className="booking-book-btn" onClick={handleBookClick}>
              <span>Book</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>
          
          {/* Booking Error Message */}
          {bookingError && (
            <div className="booking-error">
              <span className="error-icon">🛈</span>
              <span className="error-text">{bookingError}</span>
            </div>
          )}
        </div>

        {/* Calendar Modal */}
        {showCalendar && (
          <div className="calendar-modal">
            <div className="calendar-container">
              <button className="calendar-close" onClick={closeCalendar}>
                ✕
              </button>
              
              {/* Calendar Header with Navigation */}
              <div className="calendar-header">
                <button className="calendar-nav-btn-minimal" onClick={() => handleMonthChange(-1)} disabled={currentMonth === 0}>
                  ‹
                </button>
                <h2 className="calendar-title">
                  {calendarData[currentMonth].month} – {calendarData[currentMonth + 1]?.month || ''}
                </h2>
                <button className="calendar-nav-btn-minimal" onClick={() => handleMonthChange(1)} disabled={currentMonth >= calendarData.length - 2}>
                  ›
                </button>
              </div>
              
              <div className="calendar-grid">
                <div className="calendar-month">
                  <div className="calendar-weekdays">
                    <span>Mo</span>
                    <span>Tu</span>
                    <span>We</span>
                    <span>Th</span>
                    <span>Fr</span>
                    <span>Sa</span>
                    <span>Su</span>
                  </div>
                  <div className="calendar-days">
                    {calendarData[currentMonth].days.map((day, idx) => (
                      <button
                        key={idx}
                        className={`calendar-day ${getDayClasses(day, currentMonth)}`}
                        onClick={() => day.date && handleDateSelect(day.date)}
                        onMouseEnter={() => day.date && handleDateHover(day.date)}
                        onMouseLeave={handleDateLeave}
                        disabled={!day.date || isDateDisabled(day.date)}
                      >
                        {day.day}
                      </button>
                    ))}
                  </div>
                </div>
                
                {calendarData[currentMonth + 1] && (
                  <div className="calendar-month">
                    <div className="calendar-weekdays">
                      <span>Mo</span>
                      <span>Tu</span>
                      <span>We</span>
                      <span>Th</span>
                      <span>Fr</span>
                      <span>Sa</span>
                      <span>Su</span>
                    </div>
                    <div className="calendar-days">
                      {calendarData[currentMonth + 1].days.map((day, idx) => (
                        <button
                          key={idx}
                          className={`calendar-day ${getDayClasses(day, currentMonth + 1)}`}
                          onClick={() => day.date && handleDateSelect(day.date)}
                          onMouseEnter={() => day.date && handleDateHover(day.date)}
                          onMouseLeave={handleDateLeave}
                          disabled={!day.date || isDateDisabled(day.date)}
                        >
                          {day.day}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Legend in bottom left */}
              <div className="calendar-legend">
                <div className="legend-item">
                  <div className="legend-color selected"></div>
                  <span>Selected dates</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color range"></div>
                  <span>Date range</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color past"></div>
                  <span>Past dates</span>
                </div>
              </div>
              
              {/* Nights counter in bottom right */}
              {(nights > 0 || hoverNights > 0) && (
                <div className="calendar-nights">
                  <p className="calendar-nights-text">
                    <span className="moon-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#BDA77B" strokeWidth="2">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                      </svg>
                    </span>
                    {hoverNights > 0 ? hoverNights : nights} night{(hoverNights > 0 ? hoverNights : nights) !== 1 ? 's' : ''}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
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
                <button className="room-book-btn">Book Now</button>
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
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.1234567890123!2d71.4167!3d51.1801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245809c4c8b5b5f%3A0x4c8b5b5f!2z0JDQstGC0L7Qv9Cw0L3QuNC6LCDQmtCw0LfQsNGF0YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2skz!4v1703123456789"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TAN HOTEL Location"
              ></iframe>
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
