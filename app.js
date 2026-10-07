/**
 * PROFESSOR IBROXIM XABIBULLAYEV PORTFOLIO APPLICATION
 * Interactive Logic: Multi-language, Live Search, Filter, Modal Lightbox, Theme Toggle
 */

// --- 1. MULTI-LANGUAGE TRANSLATIONS DICTIONARY ---
const I18N = {
  uz: {
    profName: "Prof. I. Xabibullayev",
    profTitleShort: "Texnika fanlari doktori, Professor",
    navHome: "Asosiy",
    navBio: "Biografiya",
    navSchool: "Ilmiy Maktab",
    navDiplomas: "Diplomlar",
    navTextbooks: "Darsliklar",
    navPatents: "Patentlar",
    navArticles: "Maqolalar",
    navWorks: "Ilmiy Ishlar",
    heroBadge: "Texnika Fanlari Doktori, Professor",
    heroName: "Ibroxim Xabibullayev",
    heroSubtitle: "Toshkent Gumanitar Fanlar Universiteti Professori",
    heroDesc: "Gidrogeologik jarayonlarni matematik modellashtirish, Ekonometrika va Statistika sohalaridagi 50 yillik tajribaga ega yetakchi olim. 250 dan ortiq ilmiy ishlar, 4 ta monografiya, 30 dan ortiq darslik va o‘quv qo‘llanmalar hamda 15 dan ortiq mualliflik patentlari sohibi.",
    btnBooks: "Darsliklar va Nashrlar",
    btnWorksList: "Ilmiy Ishlar Ro‘yxati",
    btnPrintCv: "Portfolioni Chop Etish / PDF",
    statExp: "Yillik Ilmiy Tajriba",
    statWorks: "Ilmiy Nashrlar",
    statBooks: "Darslik & Qo‘llanma",
    statPatents: "DGU Patentlar",
    profRoleTag: "Texnika fanlari doktori, Professor",
    bioTag: "Tarjimai Hol",
    bioTitle: "Ilmiy va Pedagogik Faoliyat Yo‘li",
    bioSubtitle: "Oliy ta‘lim, fundamental ilm-fan va kadrlar tayyorlashga bag‘ishlangan boy hayot yo‘li",
    schoolTag: "Ilmiy Maktab",
    schoolTitle: "Ilmiy Kengash, Shogirdlar va Yo‘nalishlar",
    schoolSubtitle: "Ekonometrik modellashtirish va hisoblash usullari bo‘yicha ilmiy salohiyat",
    schoolSupervisionTitle: "Ilmiy Rahbarlik va Shogirdlar",
    schoolSupervisionText: "Professor I. Xabibullayev rahbarligida 2 ta nomzodlik (PhD) va 2 ta fan doktori (DSc) dissertatsiyalari muvaffaqiyatli himoya qilingan.",
    schoolItem1: "Fan doktori ilmiy darajalar beruvchi Ilmiy Kengash a‘zosi",
    schoolItem2: "Kengash qoshidagi Ilmiy seminar raisi",
    schoolItem3: "Universitet Kengashi a‘zosi va ekspert maslahatchi",
    schoolDirectionsTitle: "Asosiy Ilmiy-Tadqiqot Yo‘nalishlari",
    schoolDirectionsText: "Nazariy matematik modellar va amaliy iqtisodiy-ekologik jarayonlarni o‘rganish:",
    schoolDir1: "Gidrogeologik va murakkab tabiiy jarayonlarni matematik modellashtirish",
    schoolDir2: "Iqtisodiyot va biznesda ekonometrik modellashtirish hamda prognozlash",
    schoolDir3: "Qishloq xo‘jaligi, suv resurslari va kambag‘allikni qisqartirish tahlili",
    schoolDir4: "Raqamli iqtisodiyotda amaliy statistika va tahliliy dasturiy majmualar",
    diplomaTag: "Rasmiy Hujjatlar",
    diplomaTitle: "Diplomlar va Ilmiy Unvon Guvohnomalari",
    diplomaSubtitle: "Doktorlik, nomzodlik, professorlik va universitet diplomlari nusxalari",
    booksTag: "O‘quv Adabiyotlari",
    booksTitle: "Darsliklar, Praktikumlar va Qo‘llanmalar",
    booksSubtitle: "Statistika, Ekonometrika va tahlil fanlaridan talabalar va magistrantlar uchun yaratilgan asarlar",
    filterAll: "Barchasi",
    filterDarslik: "Darsliklar",
    filterPraktikum: "Praktikumlar",
    filterQollanma: "O‘quv qo‘llanmalar",
    patentTag: "Intellektual Mulk",
    patentTitle: "Patentlar va Mualliflik Guvohnomalari",
    patentSubtitle: "Dasturiy majmualar (DGU), elektron o‘quv qo‘llanmalar va intellektual mulk reyestri",
    pubTag: "Monografiya & Maqolalar",
    pubTitle: "Monografiyalar va Nufuzli Xalqaro Nashrlar",
    pubSubtitle: "Scopus, Web of Science va nufuzli jurnallarda chop etilgan saralangan maqolalar",
    monoHeading: "Asosiy Monografiyalar",
    articlesHeading: "Saralangan Xalqaro & OAK Maqolalari",
    registryTag: "Ilmiy Meros Reyestri",
    registryTitle: "To‘liq Ilmiy Ishlar Ro‘yxati (Forma-2.3)",
    registrySubtitle: "Professor I. Xabibullayevning 1976-yildan buyon e‘lon qilingan barcha ilmiy ishlari arxivi",
    thWorkTitle: "Ilmiy Ish Nomi",
    thWorkPublisher: "Nashriyot / Jurnal",
    thWorkPages: "Hajmi",
    thWorkAuthors: "Hammualliflar",
    btnDownloadOriginal: "Asl Faylni Yuklab Olish (PDF)",
    footerBio: "Texnika fanlari doktori, Professor. Toshkent Gumanitar Fanlar Universiteti \"Aniq va gumanitar fanlar\" kafedrasi professori.",
    footerNavTitle: "Tezkor Havolalar",
    footerContactTitle: "Faoliyat Manzili"
  },
  ru: {
    profName: "Проф. И. Хабибуллаев",
    profTitleShort: "д.т.н., Профессор",
    navHome: "Главная",
    navBio: "Биография",
    navSchool: "Научная Школа",
    navDiplomas: "Дипломы",
    navTextbooks: "Учебники",
    navPatents: "Патенты",
    navArticles: "Статьи",
    navWorks: "Научные Труды",
    heroBadge: "Доктор технических наук, Профессор",
    heroName: "Иброхим Хабибуллаев",
    heroSubtitle: "Профессор Ташкентского университета гуманитарных наук",
    heroDesc: "Ведущий ученый с 50-летним стажем в области математического моделирования гидрогеологических процессов, эконометрики и статистики. Автор более 250 научных работ, 4 монографий, более 30 учебников и более 15 авторских свидетельств и патентов.",
    btnBooks: "Учебники и Труды",
    btnWorksList: "Список Научных Работ",
    btnPrintCv: "Печать портфолио / PDF",
    statExp: "Лет Научного Стажа",
    statWorks: "Научных Публикаций",
    statBooks: "Учебников и Пособий",
    statPatents: "Патентов DGU",
    profRoleTag: "Доктор технических наук, Профессор",
    bioTag: "Биография",
    bioTitle: "Научно-педагогический Путь",
    bioSubtitle: "Жизненный путь, посвященный высшему образованию, фундаментальной науке и подготовке кадров",
    schoolTag: "Научная Школа",
    schoolTitle: "Научный Совет, Ученики и Направления",
    schoolSubtitle: "Научный потенциал в области эконометрического моделирования и вычислительных методов",
    schoolSupervisionTitle: "Научное Руководство и Ученики",
    schoolSupervisionText: "Под научным руководством профессора И. Хабибуллаева успешно защищены 2 кандидатские (PhD) и 2 докторские (DSc) диссертации.",
    schoolItem1: "Член Научного совета по присуждению ученых степеней доктора наук",
    schoolItem2: "Председатель Научного семинара при Совете",
    schoolItem3: "Член Совета Университета и эксперт-консультант",
    schoolDirectionsTitle: "Основные Научные Направления",
    schoolDirectionsText: "Теоретические математические модели и прикладной анализ социально-экономических процессов:",
    schoolDir1: "Математическое моделирование гидрогеологических процессов",
    schoolDir2: "Эконометрическое моделирование и прогнозирование в бизнесе и экономике",
    schoolDir3: "Анализ эффективности водных ресурсов и сокращения бедности",
    schoolDir4: "Прикладная статистика и аналитические программные комплексы в цифровой экономике",
    diplomaTag: "Официальные Документы",
    diplomaTitle: "Дипломы и Аттестаты Ученых Званий",
    diplomaSubtitle: "Копии дипломов доктора наук, кандидата наук, аттестата профессора и диплома университета",
    booksTag: "Учебная Литература",
    booksTitle: "Учебники, Практикумы и Пособия",
    booksSubtitle: "Труды по статистике, эконометрике и комплексному анализу для бакалавров и магистрантов",
    filterAll: "Все",
    filterDarslik: "Учебники",
    filterPraktikum: "Практикумы",
    filterQollanma: "Учебные пособия",
    patentTag: "Интеллектуальная Собственность",
    patentTitle: "Патенты и Авторские Свидетельства",
    patentSubtitle: "Программные комплексы (DGU), электронные учебные пособия и реестр интеллектуальной собственности",
    pubTag: "Монографии и Статьи",
    pubTitle: "Монографии и Международные Публикации",
    pubSubtitle: "Избранные статьи, опубликованные в изданиях Scopus, Web of Science и ВАК",
    monoHeading: "Основные Монографии",
    articlesHeading: "Избранные Международные и ВАК Статьи",
    registryTag: "Реестр Научного Наследия",
    registryTitle: "Полный Список Научных Трудов (Форма-2.3)",
    registrySubtitle: "Архив всех научных публикаций профессора И. Хабибуллаева с 1976 года",
    thWorkTitle: "Название Научного Труда",
    thWorkPublisher: "Издательство / Журнал",
    thWorkPages: "Объем",
    thWorkAuthors: "Соавторы",
    btnDownloadOriginal: "Скачать Оригинал (PDF)",
    footerBio: "Доктор технических наук, Профессор. Профессор кафедры «Точных и гуманитарных наук» Ташкентского университета гуманитарных наук.",
    footerNavTitle: "Быстрые Ссылки",
    footerContactTitle: "Место Работы"
  },
  en: {
    profName: "Prof. I. Khabibullaev",
    profTitleShort: "DSc, Professor",
    navHome: "Home",
    navBio: "Biography",
    navSchool: "Scientific School",
    navDiplomas: "Diplomas",
    navTextbooks: "Textbooks",
    navPatents: "Patents",
    navArticles: "Articles",
    navWorks: "Scientific Works",
    heroBadge: "Doctor of Technical Sciences, Professor",
    heroName: "Ibrokhim Khabibullaev",
    heroSubtitle: "Professor at Tashkent University of Humanities",
    heroDesc: "Distinguished scholar with 50+ years of expertise in mathematical modeling of hydrogeological processes, econometrics, and applied statistics. Author of over 250 scientific papers, 4 monographs, 30+ textbooks, and 15+ software patents.",
    btnBooks: "Textbooks & Works",
    btnWorksList: "List of Scientific Works",
    btnPrintCv: "Print Portfolio / PDF",
    statExp: "Years Academic Experience",
    statWorks: "Scientific Publications",
    statBooks: "Textbooks & Guides",
    statPatents: "Software & DGU Patents",
    profRoleTag: "Doctor of Technical Sciences, Professor",
    bioTag: "Curriculum Vitae",
    bioTitle: "Academic & Pedagogical Career",
    bioSubtitle: "A dedicated lifelong path in higher education, fundamental research, and postgraduate mentoring",
    schoolTag: "Scientific School",
    schoolTitle: "Scientific Council, Mentorship & Focus Areas",
    schoolSubtitle: "Excellence in econometric modeling and computational algorithms",
    schoolSupervisionTitle: "Doctoral Mentorship & Research School",
    schoolSupervisionText: "Under Prof. I. Khabibullaev's guidance, 2 PhD and 2 Doctor of Science (DSc) dissertations have been successfully defended.",
    schoolItem1: "Member of the Doctoral Scientific Dissertation Council",
    schoolItem2: "Chairman of the Academic Research Seminar",
    schoolItem3: "University Council Member and Senior Expert Consultant",
    schoolDirectionsTitle: "Core Research Directions",
    schoolDirectionsText: "Advancing computational models and applied economic analyses:",
    schoolDir1: "Mathematical modeling of complex groundwater hydrodynamics",
    schoolDir2: "Econometric forecasting and dynamic business process modeling",
    schoolDir3: "Resource optimization, water management and poverty reduction modeling",
    schoolDir4: "Applied statistics and analytical software suites in digital economy",
    diplomaTag: "Official Credentials",
    diplomaTitle: "Diplomas & Academic Certificates",
    diplomaSubtitle: "Official doctor of science, professor attestation, and university degrees",
    booksTag: "Academic Literature",
    booksTitle: "Textbooks, Practical Guides & Monographs",
    booksSubtitle: "Comprehensive pedagogical works in Statistics, Econometrics, and Applied Analytics",
    filterAll: "All",
    filterDarslik: "Textbooks",
    filterPraktikum: "Practical Guides",
    filterQollanma: "Study Aids",
    patentTag: "Intellectual Property",
    patentTitle: "Software Copyrights & Patents",
    patentSubtitle: "Official DGU software registrations, digital coursewares, and patent certificates",
    pubTag: "Monographs & Journals",
    pubTitle: "Monographs & International Publications",
    pubSubtitle: "Selected papers in Scopus, Web of Science, and peer-reviewed academic journals",
    monoHeading: "Core Monographs",
    articlesHeading: "Featured International & Scopus Articles",
    registryTag: "Scientific Heritage Archive",
    registryTitle: "Complete Scientific Publications (Form-2.3)",
    registrySubtitle: "Official chronological archive of all 250+ publications by Prof. I. Khabibullaev since 1976",
    thWorkTitle: "Publication Title",
    thWorkPublisher: "Journal / Publishing House",
    thWorkPages: "Pages",
    thWorkAuthors: "Co-Authors",
    btnDownloadOriginal: "Download Original Document (PDF)",
    footerBio: "Doctor of Technical Sciences, Professor. Professor of the Department of Exact and Humanitarian Sciences at Tashkent University of Humanities.",
    footerNavTitle: "Quick Navigation",
    footerContactTitle: "Campus Location"
  }
};

let currentLang = 'uz';

// --- 2. INITIALIZATION ON DOM LOAD ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  renderTimeline();
  renderDiplomas();
  renderTextbooks();
  renderPatents();
  renderMonographs();
  renderFeaturedArticles();
  renderScientificWorksRegistry();
  initModal();
  initScrollSpy();
  initScienceAnimation();
  
  // Set copyright year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// --- 3. THEME TOGGLE (DARK / LIGHT) ---
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (!icon) return;
  if (theme === 'light') {
    icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
  } else {
    icon.innerHTML = `<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>`;
  }
}

// --- 4. LANGUAGE SWITCHER ---
function initLanguage() {
  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');
  
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      langMenu.classList.remove('show');
    });

    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
        langMenu.classList.remove('show');
      });
    });
  }
}

function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  
  const langLabel = document.getElementById('currentLangLabel');
  if (langLabel) {
    langLabel.textContent = lang === 'uz' ? 'O‘Z' : (lang === 'ru' ? 'РУ' : 'EN');
  }

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Apply all data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang][key]) {
      el.textContent = I18N[lang][key];
    }
  });

  // Re-render components with translated subtitles if needed
  renderTimeline();
}

// --- 5. RENDER TIMELINE ---
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container || !PROFESSOR_DATA) return;

  const timeline = PROFESSOR_DATA.profile.careerTimeline;
  container.innerHTML = timeline.map((item, idx) => {
    const side = idx % 2 === 0 ? 'left' : 'right';
    return `
      <div class="timeline-item ${side}">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <span class="timeline-year">${item.period}</span>
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>
    `;
  }).join('');
}

// --- 6. RENDER DIPLOMAS ---
function renderDiplomas() {
  const grid = document.getElementById('diplomasGrid');
  if (!grid || !PROFESSOR_DATA) return;

  grid.innerHTML = PROFESSOR_DATA.diploms.map(d => `
    <div class="diplom-card">
      <div class="diplom-preview-wrap" onclick="openDocModal('${d.title}', '${d.preview}', '${d.file}')">
        <img src="${d.preview}" alt="${d.title}" class="diplom-preview-img" onerror="this.src='web_assets/diplomlar/Doktorlik diplomi.pdf.png'">
        <div class="preview-overlay-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          Kattalashtirish
        </div>
      </div>
      <div class="diplom-info">
        <div>
          <h4 class="diplom-title">${d.title}</h4>
          <p class="diplom-sub">${d.sub}</p>
        </div>
        <div class="diplom-actions">
          <button class="btn-sm-view" onclick="openDocModal('${d.title}', '${d.preview}', '${d.file}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            Ko‘rish
          </button>
          <a href="${d.file}" download class="btn-sm-view" style="color: var(--accent-blue);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Yuklab olish
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// --- 7. RENDER TEXTBOOKS & PUBLICATIONS ---
let currentTextbookFilter = 'all';
let currentTextbookSearch = '';

function renderTextbooks() {
  const grid = document.getElementById('textbooksGrid');
  if (!grid || !PROFESSOR_DATA) return;

  const items = PROFESSOR_DATA.textbooks.filter(b => {
    const matchFilter = currentTextbookFilter === 'all' || b.cat.includes(currentTextbookFilter);
    const matchSearch = !currentTextbookSearch || b.title.toLowerCase().includes(currentTextbookSearch.toLowerCase()) || b.desc.toLowerCase().includes(currentTextbookSearch.toLowerCase());
    return matchFilter && matchSearch;
  });

  if (items.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">Qidiruv bo‘yicha darslik topilmadi.</div>`;
    return;
  }

  grid.innerHTML = items.map(b => `
    <div class="textbook-card">
      <div class="textbook-cover" onclick="openDocModal('${b.title}', '${b.img}', '${b.file}')">
        <img src="${b.img}" alt="${b.title}" onerror="this.src='web_assets/darsliklar/ЭКОНОМЕТРИК darslik 2026 M.pdf.png'">
        <span class="book-tag">${b.cat}</span>
      </div>
      <div class="textbook-info">
        <div>
          <h4 class="textbook-title">${b.title}</h4>
          <p class="textbook-desc">${b.desc}</p>
        </div>
        <div class="diplom-actions">
          <button class="btn-sm-view" onclick="openDocModal('${b.title}', '${b.img}', '${b.file}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            Muqovani ko‘rish
          </button>
          <a href="${b.file}" download class="btn-sm-view" style="color: var(--accent-blue);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            PDF
          </a>
        </div>
      </div>
    </div>
  `).join('');

  setupTextbookEvents();
}

function setupTextbookEvents() {
  const searchInput = document.getElementById('textbookSearch');
  if (searchInput && !searchInput.dataset.bound) {
    searchInput.dataset.bound = 'true';
    searchInput.addEventListener('input', (e) => {
      currentTextbookSearch = e.target.value;
      renderTextbooks();
    });
  }

  const filterBtns = document.querySelectorAll('#textbookFilterBar .filter-btn');
  filterBtns.forEach(btn => {
    if (!btn.dataset.bound) {
      btn.dataset.bound = 'true';
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTextbookFilter = btn.getAttribute('data-filter');
        renderTextbooks();
      });
    }
  });
}

// --- 8. RENDER PATENTS ---
function renderPatents() {
  const grid = document.getElementById('patentsGrid');
  if (!grid || !PROFESSOR_DATA) return;

  grid.innerHTML = PROFESSOR_DATA.patents.map(p => `
    <div class="patent-card" onclick="openDocModal('${p.title}', '${p.img}', '${p.file}')">
      <div class="patent-thumb">
        <img src="${p.img}" alt="${p.title}" onerror="this.src='web_assets/patentlar/Suv harakati DGU 29596.pdf.png'">
      </div>
      <div class="patent-info">
        <span class="patent-badge">${p.type}</span>
        <h4 class="patent-title">${p.title}</h4>
      </div>
    </div>
  `).join('');
}

// --- 9. RENDER MONOGRAPHS & ARTICLES ---
function renderMonographs() {
  const grid = document.getElementById('monographsGrid');
  if (!grid || !PROFESSOR_DATA) return;

  grid.innerHTML = PROFESSOR_DATA.monographs.map(m => `
    <div class="school-card">
      <div class="school-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
      </div>
      <h3>${m.title}</h3>
      <p style="color: var(--accent-blue); font-weight: 700; margin-bottom: 8px;">Mualliflar: ${m.authors}</p>
      <p>${m.desc}</p>
      <div style="margin-top: 16px;">
        <a href="${m.file}" download class="btn-sm-view" style="display: inline-flex; width: auto; padding: 8px 18px; color: var(--accent-blue);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Monografiyani yuklab olish
        </a>
      </div>
    </div>
  `).join('');
}

function renderFeaturedArticles() {
  const grid = document.getElementById('featuredArticlesGrid');
  if (!grid || !PROFESSOR_DATA) return;

  grid.innerHTML = PROFESSOR_DATA.featuredArticles.map(a => `
    <div class="diplom-card" style="padding: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <span class="work-tag-cell">${a.badge}</span>
        <span style="font-size: 0.8rem; color: var(--accent-blue); font-weight: 700;">${a.year}</span>
      </div>
      <h4 style="font-size: 0.98rem; font-weight: 700; margin-bottom: 8px; line-height: 1.4; color: var(--text-main);">${a.title}</h4>
      <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 16px;">${a.source}</p>
      <a href="${a.file}" download class="btn-sm-view" style="margin-top: auto; color: var(--text-main);">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        Maqolani o‘qish / Yuklash
      </a>
    </div>
  `).join('');
}

// --- 10. FULL SCIENTIFIC WORKS REGISTRY TABLE ---
let worksCurrentPage = 1;
const worksPerPage = 20;
let worksSearchQuery = '';

function renderScientificWorksRegistry() {
  if (typeof SCIENTIFIC_WORKS === 'undefined') return;

  const tbody = document.getElementById('worksTableBody');
  const countEl = document.getElementById('totalWorksCount');
  const pagination = document.getElementById('worksPagination');
  if (!tbody) return;

  // Filter
  const filtered = SCIENTIFIC_WORKS.filter(w => {
    if (!worksSearchQuery) return true;
    const q = worksSearchQuery.toLowerCase();
    return (w.title && w.title.toLowerCase().includes(q)) ||
           (w.publisher && w.publisher.toLowerCase().includes(q)) ||
           (w.coauthors && w.coauthors.toLowerCase().includes(q));
  });

  if (countEl) {
    countEl.textContent = `${filtered.length} / ${SCIENTIFIC_WORKS.length}`;
  }

  const totalPages = Math.ceil(filtered.length / worksPerPage) || 1;
  if (worksCurrentPage > totalPages) worksCurrentPage = 1;

  const startIdx = (worksCurrentPage - 1) * worksPerPage;
  const pageItems = filtered.slice(startIdx, startIdx + worksPerPage);

  if (pageItems.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 30px; color: var(--text-muted);">Qidiruv bo‘yicha ilmiy ish topilmadi.</td></tr>`;
    if (pagination) pagination.innerHTML = '';
    return;
  }

  tbody.innerHTML = pageItems.map((item, idx) => `
    <tr>
      <td style="font-weight: 700; color: var(--accent-blue);">${startIdx + idx + 1}</td>
      <td class="work-title-cell">${item.title || 'Ilmiy ish'}</td>
      <td>${item.publisher || '-'}</td>
      <td><span class="work-tag-cell">${item.pages || 'Чоп этилган'}</span></td>
      <td>${item.coauthors || 'I. Xabibullayev'}</td>
    </tr>
  `).join('');

  // Render pagination buttons
  if (pagination) {
    let pagesHtml = '';
    
    pagesHtml += `<button class="page-btn" onclick="goToWorksPage(${Math.max(1, worksCurrentPage - 1)})" ${worksCurrentPage === 1 ? 'disabled style="opacity:0.4"' : ''}>&laquo;</button>`;
    
    const maxVisible = 5;
    let startPage = Math.max(1, worksCurrentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let p = startPage; p <= endPage; p++) {
      pagesHtml += `<button class="page-btn ${p === worksCurrentPage ? 'active' : ''}" onclick="goToWorksPage(${p})">${p}</button>`;
    }

    pagesHtml += `<button class="page-btn" onclick="goToWorksPage(${Math.min(totalPages, worksCurrentPage + 1)})" ${worksCurrentPage === totalPages ? 'disabled style="opacity:0.4"' : ''}>&raquo;</button>`;
    
    pagination.innerHTML = pagesHtml;
  }

  // Setup search event once
  const searchInput = document.getElementById('worksSearchInput');
  if (searchInput && !searchInput.dataset.bound) {
    searchInput.dataset.bound = 'true';
    searchInput.addEventListener('input', (e) => {
      worksSearchQuery = e.target.value;
      worksCurrentPage = 1;
      renderScientificWorksRegistry();
    });
  }
}

window.goToWorksPage = function(page) {
  worksCurrentPage = page;
  renderScientificWorksRegistry();
  const regCard = document.getElementById('works-registry');
  if (regCard) regCard.scrollIntoView({ behavior: 'smooth' });
};

// --- 11. MODAL LIGHTBOX ---
function initModal() {
  const modal = document.getElementById('docModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (modal && closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.classList.remove('active');
      }
    });
  }
}

window.openDocModal = function(title, previewUrl, downloadUrl) {
  const modal = document.getElementById('docModal');
  const titleEl = document.getElementById('modalTitle');
  const imgEl = document.getElementById('modalImg');
  const downloadBtn = document.getElementById('modalDownloadBtn');

  if (modal && titleEl && imgEl && downloadBtn) {
    titleEl.textContent = title;
    imgEl.src = previewUrl;
    downloadBtn.href = downloadUrl;
    modal.classList.add('active');
  }
};

// --- 12. SCROLL SPY FOR HEADER LINKS ---
function initScrollSpy() {
  const header = document.getElementById('siteHeader');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-item a');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// --- 13. UNIFIED FULL-PAGE CONTINUOUS SCIENTIFIC BACKGROUND CANVAS ---
function initScienceAnimation() {
  const canvas = document.getElementById('globalScienceCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0, height = 0;
  let dpr = window.devicePixelRatio || 1;

  const formulas = [
    '∑(Y - Ŷ)²', 'R² = 0.98', 'β̂ = (X\'X)⁻¹X\'Y', '∇²Φ = S(∂h/∂t)',
    '∫ f(x)dx', 'σ = √Var', 'Y = α + βX + ε', 'Δh / ΔL',
    'N(μ, σ²)', 'p < 0.01', 'F = MS_reg / MS_res', 'E(X) = μ',
    'Cov(X,Y)', 'lim Δt→0', 'DW ≈ 2.0', '∂²h/∂x²', 'χ² test'
  ];

  function resize() {
    dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.resetTransform ? ctx.resetTransform() : ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }

  window.addEventListener('resize', resize);
  resize();

  // Create floating constellation science nodes
  const nodeCount = Math.min(Math.floor((width * height) / 45000), 38);
  const nodes = [];

  for (let i = 0; i < nodeCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.18 + Math.random() * 0.22;
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: 2.2,
      formula: formulas[i % formulas.length],
      isGold: i % 4 === 0
    });
  }

  let mouseX = -1000;
  let mouseY = -1000;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  let lastTime = performance.now();
  let flowTime = 0;

  function render(now) {
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;
    flowTime += dt * 0.6;

    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const blueColor = isDark ? '56, 189, 248' : '37, 99, 235';
    const goldColor = isDark ? '245, 158, 11' : '180, 83, 9';
    const emeraldColor = isDark ? '52, 211, 153' : '5, 150, 105';

    // 1. Continuous Background Flowing Hydrodynamic & Econometric Streamlines
    for (let layer = 0; layer < 3; layer++) {
      ctx.beginPath();
      const baseY = height * (0.35 + layer * 0.3);
      ctx.moveTo(0, baseY);
      for (let x = 0; x <= width; x += 20) {
        const y = baseY + Math.sin(x * 0.003 + flowTime + layer * 1.2) * 18 + Math.cos(x * 0.005 - flowTime * 0.8) * 12;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = layer === 1 ? `rgba(${emeraldColor}, ${isDark ? 0.22 : 0.14})` : `rgba(${blueColor}, ${isDark ? 0.25 : 0.16})`;
      ctx.lineWidth = 1.4;
      ctx.stroke();
    }

    // 2. Connecting Constellation Network Lines
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const alpha = (1 - dist / 150) * (isDark ? 0.28 : 0.2);
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${blueColor}, ${alpha})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }
    }

    // 3. Floating Scientific Formula Nodes
    nodes.forEach(node => {
      node.x += node.vx * (dt * 60);
      node.y += node.vy * (dt * 60);

      // Subtle mouse reaction
      const mdx = node.x - mouseX;
      const mdy = node.y - mouseY;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 140) {
        const force = (1 - mdist / 140) * 0.5;
        node.x += (mdx / mdist) * force;
        node.y += (mdy / mdist) * force;
      }

      // Screen edge wrapping
      if (node.x < -60) node.x = width + 60;
      if (node.x > width + 60) node.x = -60;
      if (node.y < -40) node.y = height + 40;
      if (node.y > height + 40) node.y = -40;

      // Draw point
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${blueColor}, ${isDark ? 0.55 : 0.45})`;
      ctx.fill();

      // Draw mathematical formula
      ctx.font = '600 11.5px "Inter", monospace, sans-serif';
      ctx.fillStyle = node.isGold ? `rgba(${goldColor}, ${isDark ? 0.75 : 0.65})` : `rgba(${blueColor}, ${isDark ? 0.65 : 0.52})`;
      ctx.fillText(node.formula, Math.round(node.x + 8), Math.round(node.y + 4));
    });

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
