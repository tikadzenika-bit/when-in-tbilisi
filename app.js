(() => {
  const doc = document.documentElement;
  doc.classList.add('js');

  const T = {
    ka: {
      'nav.book': 'ჯავშანი', 'nav.nearby': 'ახლოს', 'nav.faq': 'კითხვები', 'nav.contact': 'კონტაქტი',
      'hero.lead': 'პატარა საოჯახო სასტუმრო გოგი დოლიძის ქუჩა 18-ში, ჩუღურეთში. სტუმრების შეფასება — 9.5, 746 შეფასებიდან.',
      'hero.cta': 'დაჯავშნე WhatsApp-ით',
      'about.h': 'სახლი',
      'about.f1': 'ჩუღურეთი, თბილისი', 'about.f2': 'სადგური და მეტრო ახლოსაა', 'about.f3': 'გადახდა ლარში, ნაღდით',
      'about.p1': '— საოჯახო სასტუმროა ჩუღურეთში, ცენტრიდან მდინარის გაღმა, სადგურიდან და მეტროდან რამდენიმე წუთში.',
      'about.p2': 'სტუმრები ერთსა და იმავეს იმეორებენ: აქ სისუფთავეა, მასპინძელი კი ყველაფერში გეხმარება — გვიან ჩამოსვლიდან მეორე დღის მარშრუტამდე.',
      'book.h': 'მიწერე შენი თარიღები',
      'book.p': 'აირჩიე თარიღები და პირდაპირ მასპინძელს გაუგზავნე. არც საკომისიო, არც შუამავალი.',
      'book.in': 'შესვლა', 'book.out': 'გასვლა', 'book.g': 'სტუმრები', 'book.nights': 'ღამე',
      'book.pv': 'შენი შეტყობინება', 'book.send': 'გაგზავნა WhatsApp-ით',
      'show.h': 'კარიდან გასვლისთანავე', 'show.t': 'ჩუღურეთი, მდინარესთან',
      'show.c': 'ჩუღურეთის სანაპირო, ჩუქურთმიანი ფანჯრები და აივნები, ძველი ქალაქის სახურავები და მარჯანიშვილის მოედანი.',
      'proof.h1': 'სტუმრების', 'proof.h2': 'შეფასებით',
      't.r1a': 'სტუმრების შეფასება', 't.r1c': '746 შეფასება, HotelsCombined',
      't.r2a': 'მდებარეობა', 't.r2b': 'სადგურთან და მეტროსთან ახლოს', 't.r2c': 'გოგი დოლიძის ქ. 18',
      't.r3a': 'სამზარეულო', 't.r3b': 'საერთო, სრულად აღჭურვილი',
      't.r4a': 'ოთახები', 't.r4b': 'Wi‑Fi და კონდიციონერი',
      't.r5a': 'გადახდა', 't.r5b': 'ნაღდი ფულით, სასტუმროში', 't.r5c': 'ქართული ლარი',
      't.r6a': '18 წლამდე სტუმრები', 't.r6b': 'მხოლოდ უფროსთან ერთად',
      'near.h': 'ახლოს',
      'near.b1': 'მეტრო და სადგური', 'near.b1i1': 'მეტრო „სადგურის მოედანი“', 'near.b1i2': 'თბილისის ცენტრალური სადგური',
      'near.b2': 'ცენტრი', 'near.b2i1': 'მარჯანიშვილი', 'near.b2i2': 'რუსთაველის გამზირი', 'near.b2i3': 'თავისუფლების მოედანი და ძველი ქალაქი',
      'near.b3': 'აეროპორტიდან', 'near.b3i1': 'ტაქსი', 'near.b3i2': 'ავტობუსი ან მატარებელი ცენტრალურ სადგურამდე',
      'near.b4': 'საჭმელი და მაღაზიები', 'near.b4i1': 'დეზერტირების ბაზარი', 'near.b4i2': 'სუპერმარკეტები და საცხობები',
      'w.foot': 'ფეხით', 'w.m1': 'მეტროთი, 1 გაჩერება', 'w.m2': 'მეტროთი, 2 გაჩერება', 'w.m3': 'მეტროთი, 3 გაჩერება',
      'w.30': 'დაახლ. 30 წთ', 'w.then': 'შემდეგ ფეხით',
      'faq.h': 'სანამ ჩამოხვალ',
      'q1': 'როგორ დავჯავშნო?', 'a1': 'მიწერე თარიღები WhatsApp-ზე: +995 599 17 68 27. მასპინძელი გიპასუხებს და ოთახს დაგიდასტურებს.',
      'q2': 'როგორ გადავიხადო?', 'a2': 'ნაღდი ფულით, სასტუმროში, ქართულ ლარში.',
      'q3': 'რომელ საათზე შემიძლია მოსვლა?', 'a3': 'უთხარი მასპინძელს, როდის ჩამოხვალ. გვიან ჩამოსვლაც შეიძლება, თუ წინასწარ მიწერ.',
      'q4': 'როგორ მოვიდე აეროპორტიდან?', 'a4': 'ტაქსით, ან ავტობუსით ან მატარებლით ცენტრალურ სადგურამდე — სადგური სასტუმროსთან ახლოსაა.',
      'q5': 'შეიძლება საჭმლის მომზადება?', 'a5': 'კი, არის საერთო, სრულად აღჭურვილი სამზარეულო.',
      'q6': 'შეიძლება მოზარდები მარტო დარჩნენ?', 'a6': 'არა. 18 წლამდე სტუმრები მხოლოდ უფროსთან ერთად რჩებიან.',
      'c.say': 'მიწერე მასპინძელს თარიღებზე, გვიან ჩამოსვლაზე ან აეროპორტიდან გზაზე.',
      'c.addr': 'გოგი დოლიძის ქ. 18, ჩუღურეთი, თბილისი',
      'f.addr': 'მისამართი', 'f.pages': 'გვერდები', 'f.phones': 'ტელეფონები', 'f.pay': 'გადახდა',
      'f.legal': 'საიტის კონცეფცია, მომზადებული შეთავაზებად When in Tbilisi-სთვის. ეს არ არის ოფიციალური საიტი.',
      msg: (a, b, n, g) => `გამარჯობა! მინდა ოთახი ${a}-დან ${b}-მდე (${n} ღამე), ${g} სტუმარი. თავისუფალია?`,
      msgEmpty: (g) => `გამარჯობა! მინდა ოთახი ${g} სტუმრისთვის. რომელი დღეებია თავისუფალი?`
    },
    en: {
      msg: (a, b, n, g) => `Hello! I'd like a room from ${a} to ${b} (${n} ${n === 1 ? 'night' : 'nights'}) for ${g} ${g === '1' ? 'guest' : 'guests'}. Is it available?`,
      msgEmpty: (g) => `Hello! I'd like a room for ${g} ${g === '1' ? 'guest' : 'guests'}. Which dates are free?`
    },
    ru: {
      'nav.book': 'Бронь', 'nav.nearby': 'Рядом', 'nav.faq': 'Вопросы', 'nav.contact': 'Контакты',
      'hero.lead': 'Маленький семейный гостевой дом на улице Гоги Долидзе, 18, в Чугурети. Оценка гостей — 9.5 по 746 отзывам.',
      'hero.cta': 'Забронировать в WhatsApp',
      'about.h': 'Дом',
      'about.f1': 'Чугурети, Тбилиси', 'about.f2': 'Вокзал и метро рядом', 'about.f3': 'Оплата наличными в лари',
      'about.p1': '— семейный гостевой дом в Чугурети, за рекой от центра, в паре минут от вокзала и метро.',
      'about.p2': 'Гости повторяют одно и то же: здесь идеально чисто, а хозяин помогает во всём — от позднего заезда до маршрута на завтра.',
      'book.h': 'Напишите свои даты',
      'book.p': 'Выберите даты и отправьте их прямо хозяину. Без комиссии и без посредников.',
      'book.in': 'Заезд', 'book.out': 'Выезд', 'book.g': 'Гости', 'book.nights': 'ноч.',
      'book.pv': 'Ваше сообщение', 'book.send': 'Отправить в WhatsApp',
      'show.h': 'За порогом', 'show.t': 'Чугурети, у реки',
      'show.c': 'Набережная Чугурети, резные окна и балконы, крыши Старого города и площадь Марджанишвили.',
      'proof.h1': 'Как оценивают', 'proof.h2': 'гости',
      't.r1a': 'Оценка гостей', 't.r1c': '746 отзывов, HotelsCombined',
      't.r2a': 'Расположение', 't.r2b': 'Рядом с вокзалом и метро', 't.r2c': 'ул. Гоги Долидзе, 18',
      't.r3a': 'Кухня', 't.r3b': 'Общая, полностью оборудована',
      't.r4a': 'Комнаты', 't.r4b': 'Wi‑Fi и кондиционер',
      't.r5a': 'Оплата', 't.r5b': 'Наличными, на месте', 't.r5c': 'Грузинский лари',
      't.r6a': 'Гости до 18 лет', 't.r6b': 'Только со взрослым',
      'near.h': 'Рядом',
      'near.b1': 'Метро и вокзал', 'near.b1i1': 'Метро «Вокзальная площадь»', 'near.b1i2': 'Центральный вокзал Тбилиси',
      'near.b2': 'Центр', 'near.b2i1': 'Марджанишвили', 'near.b2i2': 'Проспект Руставели', 'near.b2i3': 'Площадь Свободы и Старый город',
      'near.b3': 'Из аэропорта', 'near.b3i1': 'Такси', 'near.b3i2': 'Автобус или поезд до центрального вокзала',
      'near.b4': 'Еда и магазины', 'near.b4i1': 'Дезертирский базар', 'near.b4i2': 'Супермаркеты и пекарни',
      'w.foot': 'пешком', 'w.m1': 'метро, 1 станция', 'w.m2': 'метро, 2 станции', 'w.m3': 'метро, 3 станции',
      'w.30': 'около 30 мин', 'w.then': 'дальше пешком',
      'faq.h': 'Перед приездом',
      'q1': 'Как забронировать?', 'a1': 'Напишите даты в WhatsApp: +995 599 17 68 27. Хозяин ответит и подтвердит комнату.',
      'q2': 'Как оплатить?', 'a2': 'Наличными на месте, в грузинских лари.',
      'q3': 'Во сколько можно заехать?', 'a3': 'Сообщите хозяину, когда приедете. Поздний заезд возможен, если написать заранее.',
      'q4': 'Как добраться из аэропорта?', 'a4': 'На такси или на автобусе либо поезде до центрального вокзала — он рядом с гостевым домом.',
      'q5': 'Можно ли готовить?', 'a5': 'Да, есть общая, полностью оборудованная кухня.',
      'q6': 'Могут ли подростки жить одни?', 'a6': 'Нет. Гости младше 18 лет живут только со взрослыми.',
      'c.say': 'Напишите хозяину о датах, позднем заезде или дороге из аэропорта.',
      'c.addr': 'ул. Гоги Долидзе, 18, Чугурети, Тбилиси',
      'f.addr': 'Адрес', 'f.pages': 'Разделы', 'f.phones': 'Телефоны', 'f.pay': 'Оплата',
      'f.legal': 'Концепция сайта, подготовленная как предложение для When in Tbilisi. Не официальный сайт.',
      msg: (a, b, n, g) => `Здравствуйте! Хочу комнату с ${a} по ${b} (${n} ноч.), гостей: ${g}. Есть свободные места?`,
      msgEmpty: (g) => `Здравствуйте! Хочу комнату, гостей: ${g}. Какие даты свободны?`
    }
  };

  // remember the English text already in the page
  const nodes = [...document.querySelectorAll('[data-i18n]')];
  nodes.forEach(n => { n.dataset.en = n.textContent; });

  let lang = 'en';
  function setLang(l) {
    lang = T[l] ? l : 'en';
    doc.lang = lang;
    nodes.forEach(n => {
      const k = n.dataset.i18n;
      n.textContent = lang === 'en' ? n.dataset.en : (T[lang][k] ?? n.dataset.en);
    });
    document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    try { localStorage.setItem('wit-lang', lang); } catch (e) {}
    update();
  }
  document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

  // ---- the booking message builder ----
  const dIn = document.getElementById('d-in');
  const dOut = document.getElementById('d-out');
  const guests = document.getElementById('guests');
  const count = document.getElementById('n-count');
  const preview = document.getElementById('preview');
  const hidden = document.getElementById('wa-text');

  const iso = d => d.toISOString().slice(0, 10);
  const today = new Date();
  const plus = (n) => { const d = new Date(today); d.setDate(d.getDate() + n); return d; };
  dIn.min = iso(today);
  dIn.value = iso(plus(7));
  dOut.value = iso(plus(9));

  const RU = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  const EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const fmt = v => {
    const [y, m, d] = v.split('-').map(Number);
    if (lang === 'ka') return `${String(d).padStart(2, '0')}.${String(m).padStart(2, '0')}`;
    if (lang === 'ru') return `${d} ${RU[m - 1]}`;
    return `${d} ${EN[m - 1]}`;
  };

  function update() {
    if (dIn.value) dOut.min = dIn.value;
    let n = 0;
    if (dIn.value && dOut.value) n = Math.round((new Date(dOut.value) - new Date(dIn.value)) / 864e5);
    const ok = n > 0;
    count.textContent = ok ? n : '–';
    const text = ok ? T[lang].msg(fmt(dIn.value), fmt(dOut.value), n, guests.value) : T[lang].msgEmpty(guests.value);
    preview.textContent = text;
    hidden.value = text;
  }
  [dIn, dOut, guests].forEach(el => el.addEventListener('input', update));

  // ---- entrances ----
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.15 });
  document.querySelectorAll('.reveal, .nearby, .faq').forEach(el => io.observe(el));

  let saved = 'en';
  try { saved = localStorage.getItem('wit-lang') || 'en'; } catch (e) {}
  setLang(saved);
})();
