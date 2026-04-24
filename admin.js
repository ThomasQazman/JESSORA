// ╔══════════════════════════════════════════════════════════════╗
// ║              JESOORA — لوحة التحكم (Dashboard)               ║
// ╚══════════════════════════════════════════════════════════════╝

// استيراد الـ CONFIG من localStorage أو استخدام الافتراضي
let config = JSON.parse(localStorage.getItem('jesoora_config')) || getDefaultConfig();

// التأكد إن الـ CONFIG موجودة في localStorage
if (!localStorage.getItem('jesoora_config')) {
  localStorage.setItem('jesoora_config', JSON.stringify(config));
}

// ═══════════════════════════════════════════════════════════════
// الـ CONFIG الافتراضية (انسخ من ملفك الأصلي)
// ═══════════════════════════════════════════════════════════════
function getDefaultConfig() {
  return {
    brand: {
      name: 'JESOORA',
      nameAr: 'جيسورا',
      tagline: 'تحف دينية مسيحية فريدة',
      description: 'براويز مقدسة، مسابح، صلبان، وميداليات مصنوعة بحب وإيمان — كل قطعة تحمل روح الصلاة والإبداع.',
      icon: '✝',
    },
    contact: {
      whatsapp: '201224500151',
      phone: '01224500151',
      email: 'thomasashraf2002@gmail.com',
      address: 'القاهرة، مصر',
      addressDetails: 'الشحن لجميع المحافظات',
      workingHours: 'متاح من ١٠ص حتى ١٠م يومياً',
    },
    social: {
      facebook: 'https://facebook.com/jesoora',
      instagram: 'https://instagram.com/jesoora',
      tiktok: 'https://tiktok.com/@jesoora',
    },
    stats: [
      { num: '+٥٠٠', label: 'قطعة تم تسليمها' },
      { num: '+١٢٠', label: 'تصميم فريد' },
      { num: '١٠٠%', label: 'يدوي الصنع' },
      { num: '٥ ★', label: 'تقييم العملاء' },
    ],
    testimonials: [
      {
        text: 'اشتريت برواز السيدة العذراء كهدية لأمي، وحين رأته بكت من الفرحة. الشغل دقيق جدًا والخامة ممتازة، شكرًا من القلب.',
        name: 'مريم سامي',
        location: 'القاهرة',
        initial: 'م',
      },
      {
        text: 'الميدالية البورسلين أجمل مما توقعت، الرسمة واضحة جدًا والألوان ثابتة. طلبت ٥ قطع كهدايا للعيلة وكلهم اتبسطوا.',
        name: 'جرجس فاروق',
        location: 'الإسكندرية',
        initial: 'ج',
      },
      {
        text: 'الصليب النحاسي بالفيروز حاجة مش شايفاها في أي محل تاني. اتعلق في أوضة الصلاة وبيخلي الجو مختلف تمامًا.',
        name: 'نيفين إبراهيم',
        location: 'أسيوط',
        initial: 'ن',
      },
    ],
    categories: [
      { name: 'براويز مقدسة', icon: '🖼️', desc: 'براويز خشبية وزجاجية بتصاميم دينية' },
      { name: 'ميداليات بورسلين', icon: '✨', desc: 'ميداليات رقيقة مزينة بالرسومات المسيحية' },
      { name: 'صلبان زخرفية', icon: '✝️', desc: 'صلبان جدارية بأشكال وخامات متنوعة' },
      { name: 'حاملات الشموع', icon: '🕯️', desc: 'قطع أثيرية لإضاءة صلواتك' },
      { name: 'مسابح', icon: '📿', desc: 'مسابح يدوية الصنع وتمائم مقدسة' },
      { name: 'THOMAS', icon: '🖼️', desc: 'مسابح يدوية الصنع وتمائم مقدسة' },
      { name: 'mariam', icon: '🖼️', desc: 'مسابح يدوية الصنع وتمائم مقدسة' },
    ],
    products: [
      {
        id: 0,
        icon: '🖼️',
        cat: 'براويز مقدسة',
        name: 'برواز السيدة العذراء — خشب الزيتون',
        short: 'برواز منحوت يدويًا من خشب الزيتون المبارك، مُزين بنقوش ذهبية.',
        desc: 'برواز منحوت يدويًا من خشب الزيتون المبارك، مُزين بنقوش ذهبية دقيقة على الأطراف. قطعة فريدة تليق بأي ركن صلاة أو كهدية مقدسة لأحبائك.',
        price: 450,
        priceAr: '٤٥٠',
        mat: 'خشب زيتون طبيعي',
        badge: 'جديد',
        bg: 'linear-gradient(135deg,#2C1A0E,#5C3415)',
      },
      {
        id: 1,
        icon: '✨',
        cat: 'ميداليات بورسلين',
        name: 'ميدالية السيد المسيح — بورسلين أبيض',
        short: 'ميدالية بورسلين رفيعة مرسوم عليها وجه المسيح بألوان طبيعية.',
        desc: 'ميدالية بورسلين رفيعة مرسوم عليها وجه المسيح بألوان طبيعية ثابتة. تأتي في علبة هدية أنيقة.',
        price: 280,
        priceAr: '٢٨٠',
        mat: 'بورسلين أبيض ناعم',
        badge: 'الأكثر طلبًا',
        bg: 'linear-gradient(135deg,#1A2430,#2A3C54)',
      },
      {
        id: 2,
        icon: '✝️',
        cat: 'صلبان زخرفية',
        name: 'صليب جداري — نحاس مُطعَّم بالفيروز',
        short: 'صليب نحاسي مصنوع يدويًا ومُطعَّم بأحجار الفيروز الطبيعية.',
        desc: 'صليب نحاسي مصنوع يدويًا ومُطعَّم بأحجار الفيروز الطبيعية. يصلح للتعليق على الحائط.',
        price: 650,
        priceAr: '٦٥٠',
        mat: 'نحاس + فيروز طبيعي',
        badge: null,
        bg: 'linear-gradient(135deg,#1E1A10,#4A3A18)',
      },
      {
        id: 3,
        icon: '🕯️',
        cat: 'حاملات الشموع',
        name: 'حامل شموع ثلاثي — زجاج أزرق',
        short: 'حامل شموع زجاجي أزرق اللون يعكس الضوء بشكل ملائكي.',
        desc: 'حامل شموع زجاجي أزرق اللون يعكس الضوء بشكل ملائكي. ثلاثة حوامل بأحجام مختلفة.',
        price: 320,
        priceAr: '٣٢٠',
        mat: 'زجاج ملون يدوي',
        badge: 'محدود',
        bg: 'linear-gradient(135deg,#1A1A2A,#2E2048)',
      },
      {
        id: 4,
        icon: '📿',
        cat: 'مسابح',
        name: 'مسبحة العقيق الأحمر — يدوية الصنع',
        short: 'مسبحة مصنوعة من خرز العقيق الأحمر الطبيعي مع صليب فضي.',
        desc: 'مسبحة مصنوعة من خرز العقيق الأحمر الطبيعي مع صليب فضي معلق. كل حبة منتقاة بعناية.',
        price: 190,
        priceAr: '١٩٠',
        mat: 'عقيق أحمر + فضة',
        badge: null,
        bg: 'linear-gradient(135deg,#1A250E,#2E4518)',
      },
      {
        id: 5,
        icon: '🖼️',
        cat: 'براويز مقدسة',
        name: 'لوحة العشاء الأخير — طباعة فنية',
        short: 'لوحة فنية مؤطرة بإطار ذهبي كلاسيكي، مقاس ٤٠×٦٠ سم.',
        desc: 'لوحة فنية عالية الجودة مؤطرة بإطار ذهبي كلاسيكي، مقاس ٤٠×٦٠ سم. مطبوعة على قماش فاخر.',
        price: 580,
        priceAr: '٥٨٠',
        mat: 'قماش + إطار MDF',
        badge: null,
        bg: 'linear-gradient(135deg,#2A1818,#481A1A)',
      },
      {
        id: 6,
        icon: '✝️',
        cat: 'صلبان زخرفية',
        name: 'صليب خشبي — مطعّم بصدف',
        short: 'صليب خشبي راقٍ مطعّم بقطع صدف طبيعي لامع.',
        desc: 'صليب خشبي مصنوع من خشب الجوز ومطعّم بقطع صدف طبيعي لامع بشكل هندسي مميز.',
        price: 420,
        priceAr: '٤٢٠',
        mat: 'خشب جوز + صدف طبيعي',
        badge: null,
        bg: 'linear-gradient(135deg,#1E1A0E,#3A3218)',
      },
      {
        id: 7,
        icon: '✨',
        cat: 'ميداليات بورسلين',
        name: 'ميدالية القديسة مريم العذراء — ذهبية',
        short: 'ميدالية بورسلين مذهّبة برسم دقيق للسيدة العذراء.',
        desc: 'ميدالية بورسلين مذهّبة برسم دقيق للسيدة العذراء بأسلوب البيزنطي الكلاسيكي. مقاس متوسط.',
        price: 320,
        priceAr: '٣٢٠',
        mat: 'بورسلين + طلاء ذهبي',
        badge: 'جديد',
        bg: 'linear-gradient(135deg,#2A2010,#4A3A18)',
      },
      {
        id: 8,
        icon: '🕯️',
        cat: 'حاملات الشموع',
        name: 'حامل شمعة مفرد — نحاس أنتيك',
        short: 'حامل شمعة نحاسي بطابع أنتيك راقٍ، يدوي الصنع.',
        desc: 'حامل شمعة نحاسي بطابع أنتيك راقٍ، محفور بنقوش صليبية. يناسب طاولة الصلاة والديكور.',
        price: 240,
        priceAr: '٢٤٠',
        mat: 'نحاس مؤكسَد يدوياً',
        badge: null,
        bg: 'linear-gradient(135deg,#201510,#402A18)',
      },
    ],
    texts: {
      heroTitle: 'JESOORA',
      heroSubtitle: 'تحف دينية مسيحية فريدة',
      heroDesc: 'براويز مقدسة، مسابح، صلبان، وميداليات مصنوعة بحب وإيمان — كل قطعة تحمل روح الصلاة والإبداع.',
      craftTitle: 'صنع بإيمان وحب',
      craftDesc: 'كل قطعة في مجموعتنا مصنوعة بالكامل بالأيدي من خامات طبيعية مختارة بعناية. نحن نؤمن أن الفن الديني يجب أن يحمل روحًا.',
      storyTitle: 'من أين بدأت القصة؟',
      storyP1: 'بدأت "JESOORA" في غرفة صغيرة بالقاهرة، حين قررنا أن نصنع برواز لأمنا كهدية عيد ميلاد. لم نجد في السوق ما يوفي بالغرض، فقررنا أن نصنعه بأيدينا.',
      storyP2: 'منذ ذلك اليوم، وكل قطعة تخرج من ورشتنا تحمل نفس الروح — الإيمان والحب والدقة في التفاصيل. نختار كل خامة بعناية، ونرفض أي قطعة لا ترقى لمعيارنا.',
      storyP3: 'اليوم، وصلت منتجاتنا لأكثر من ٥٠٠ بيت في مصر، وكل طلب بالنسبالنا أمانة وليس مجرد بيع.',
    },
  };
}

// ═══════════════════════════════════════════════════════════════
// تهيئة الصفحة
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  renderProducts();
  renderCategories();
  renderStats();
  renderTestimonials();
  renderSettings();
  updateCategorySelect();
});

// ═══════════════════════════════════════════════════════════════
// التنقل بين التبويبات
// ═══════════════════════════════════════════════════════════════
function initTabs() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const tabs = document.querySelectorAll('.tab-content');
  const pageTitle = document.getElementById('page-title');

  const titles = {
    products: 'المنتجات',
    categories: 'التصنيفات',
    stats: 'الإحصائيات',
    testimonials: 'آراء العملاء',
    settings: 'الإعدادات العامة',
  };

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      
      navBtns.forEach(b => b.classList.remove('active'));
      tabs.forEach(t => t.classList.remove('active'));
      
      btn.classList.add('active');
      document.getElementById(`tab-${tabId}`).classList.add('active');
      pageTitle.textContent = titles[tabId];
    });
  });
}

// ═══════════════════════════════════════════════════════════════
// المنتجات
// ═══════════════════════════════════════════════════════════════
function renderProducts() {
  const tbody = document.getElementById('productsTableBody');
  tbody.innerHTML = '';

  config.products.forEach((product, index) => {
    const tr = document.createElement('tr');
    const badgeClass = product.badge === 'جديد' ? 'badge-new' : 
                       product.badge === 'الأكثر طلبًا' ? 'badge-hot' : 
                       product.badge === 'محدود' ? 'badge-limited' : '';
    
    tr.innerHTML = `
      <td>${product.id}</td>
      <td style="font-size:20px">${product.icon}</td>
      <td><strong>${product.name}</strong></td>
      <td>${product.cat}</td>
      <td>${product.priceAr} ج.م</td>
      <td>${product.mat}</td>
      <td>${product.badge ? `<span class="badge ${badgeClass}">${product.badge}</span>` : '-'}</td>
      <td>
        <div class="action-btns">
          <button class="btn btn-primary" onclick="editProduct(${index})">تعديل</button>
          <button class="btn btn-danger" onclick="deleteProduct(${index})">حذف</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function filterProducts() {
  const search = document.getElementById('productSearch').value.toLowerCase();
  const rows = document.querySelectorAll('#productsTableBody tr');
  
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(search) ? '' : 'none';
  });
}

function openProductModal(productIndex = null) {
  const modal = document.getElementById('productModal');
  const title = document.getElementById('productModalTitle');
  const form = document.getElementById('productForm');
  
  updateCategorySelect();
  
  if (productIndex !== null) {
    const p = config.products[productIndex];
    title.textContent = 'تعديل منتج';
    document.getElementById('productId').value = productIndex;
    document.getElementById('pIcon').value = p.icon;
    document.getElementById('pCat').value = p.cat;
    document.getElementById('pName').value = p.name;
    document.getElementById('pShort').value = p.short;
    document.getElementById('pDesc').value = p.desc;
    document.getElementById('pPrice').value = p.price;
    document.getElementById('pPriceAr').value = p.priceAr;
    document.getElementById('pMat').value = p.mat;
    document.getElementById('pBadge').value = p.badge || '';
    document.getElementById('pBg').value = p.bg;
  } else {
    title.textContent = 'إضافة منتج جديد';
    form.reset();
    document.getElementById('productId').value = '';
    // توليد ID جديد
    const maxId = Math.max(...config.products.map(p => p.id), -1);
    document.getElementById('productId').dataset.newId = maxId + 1;
  }
  
  modal.classList.add('active');
}

function editProduct(index) {
  openProductModal(index);
}

function saveProduct(e) {
  e.preventDefault();
  
  const index = document.getElementById('productId').value;
  const newProduct = {
    id: index !== '' ? config.products[index].id : parseInt(document.getElementById('productId').dataset.newId),
    icon: document.getElementById('pIcon').value,
    cat: document.getElementById('pCat').value,
    name: document.getElementById('pName').value,
    short: document.getElementById('pShort').value,
    desc: document.getElementById('pDesc').value,
    price: parseInt(document.getElementById('pPrice').value),
    priceAr: document.getElementById('pPriceAr').value,
    mat: document.getElementById('pMat').value,
    badge: document.getElementById('pBadge').value || null,
    bg: document.getElementById('pBg').value,
  };
  
  if (index !== '') {
    config.products[parseInt(index)] = newProduct;
  } else {
    config.products.push(newProduct);
  }
  
  saveConfig();
  renderProducts();
  closeModal('productModal');
}

function deleteProduct(index) {
  if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
    config.products.splice(index, 1);
    saveConfig();
    renderProducts();
  }
}

function updateCategorySelect() {
  const select = document.getElementById('pCat');
  if (!select) return;
  
  select.innerHTML = config.categories.map(c => 
    `<option value="${c.name}">${c.name}</option>`
  ).join('');
}

// ═══════════════════════════════════════════════════════════════
// التصنيفات
// ═══════════════════════════════════════════════════════════════
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = '';
  
  config.categories.forEach((cat, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-header">
        <div>
          <div class="card-title">${cat.name}</div>
          <div class="card-desc">${cat.desc}</div>
        </div>
        <div class="card-icon">${cat.icon}</div>
      </div>
      <div class="card-actions">
        <button class="btn btn-primary" onclick="editCategory(${index})">تعديل</button>
        <button class="btn btn-danger" onclick="deleteCategory(${index})">حذف</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openCategoryModal(index = null) {
  const modal = document.getElementById('categoryModal');
  
  if (index !== null) {
    const cat = config.categories[index];
    document.getElementById('catIndex').value = index;
    document.getElementById('catName').value = cat.name;
    document.getElementById('catIcon').value = cat.icon;
    document.getElementById('catDesc').value = cat.desc;
  } else {
    document.getElementById('categoryForm').reset();
    document.getElementById('catIndex').value = '';
  }
  
  modal.classList.add('active');
}

function editCategory(index) {
  openCategoryModal(index);
}

function saveCategory(e) {
  e.preventDefault();
  
  const index = document.getElementById('catIndex').value;
  const newCat = {
    name: document.getElementById('catName').value,
    icon: document.getElementById('catIcon').value,
    desc: document.getElementById('catDesc').value,
  };
  
  if (index !== '') {
    const oldName = config.categories[parseInt(index)].name;
    config.categories[parseInt(index)] = newCat;
    
    // تحديث المنتجات اللي في التصنيف القديم
    config.products.forEach(p => {
      if (p.cat === oldName) p.cat = newCat.name;
    });
  } else {
    config.categories.push(newCat);
  }
  
  saveConfig();
  renderCategories();
  renderProducts();
  updateCategorySelect();
  closeModal('categoryModal');
}

function deleteCategory(index) {
  if (confirm('هل أنت متأكد؟ المنتجات في هذا التصنيف هتفضل موجودة بس مش هتظهر صح.')) {
    config.categories.splice(index, 1);
    saveConfig();
    renderCategories();
    updateCategorySelect();
  }
}

// ═══════════════════════════════════════════════════════════════
// الإحصائيات
// ═══════════════════════════════════════════════════════════════
function renderStats() {
  const container = document.getElementById('statsForm');
  container.innerHTML = '';
  
  config.stats.forEach((stat, index) => {
    const div = document.createElement('div');
    div.className = 'stat-card';
    div.innerHTML = `
      <h4>إحصائية #${index + 1}</h4>
      <div class="form-group">
        <label>الرقم</label>
        <input type="text" value="${stat.num}" onchange="updateStat(${index}, 'num', this.value)">
      </div>
      <div class="form-group">
        <label>الوصف</label>
        <input type="text" value="${stat.label}" onchange="updateStat(${index}, 'label', this.value)">
      </div>
    `;
    container.appendChild(div);
  });
}

function updateStat(index, field, value) {
  config.stats[index][field] = value;
  saveConfig();
}

// ═══════════════════════════════════════════════════════════════
// آراء العملاء
// ═══════════════════════════════════════════════════════════════
function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  grid.innerHTML = '';
  
  config.testimonials.forEach((t, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-header">
        <div class="card-title">${t.name} — ${t.location}</div>
      </div>
      <div class="card-desc" style="font-style:italic; margin-bottom:12px;">"${t.text}"</div>
      <div class="card-actions">
        <button class="btn btn-primary" onclick="editTestimonial(${index})">تعديل</button>
        <button class="btn btn-danger" onclick="deleteTestimonial(${index})">حذف</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openTestimonialModal(index = null) {
  const modal = document.getElementById('testimonialModal');
  
  if (index !== null) {
    const t = config.testimonials[index];
    document.getElementById('testIndex').value = index;
    document.getElementById('testText').value = t.text;
    document.getElementById('testName').value = t.name;
    document.getElementById('testLocation').value = t.location;
    document.getElementById('testInitial').value = t.initial;
  } else {
    document.getElementById('testimonialForm').reset();
    document.getElementById('testIndex').value = '';
  }
  
  modal.classList.add('active');
}

function editTestimonial(index) {
  openTestimonialModal(index);
}

function saveTestimonial(e) {
  e.preventDefault();
  
  const index = document.getElementById('testIndex').value;
  const newTest = {
    text: document.getElementById('testText').value,
    name: document.getElementById('testName').value,
    location: document.getElementById('testLocation').value,
    initial: document.getElementById('testInitial').value,
  };
  
  if (index !== '') {
    config.testimonials[parseInt(index)] = newTest;
  } else {
    config.testimonials.push(newTest);
  }
  
  saveConfig();
  renderTestimonials();
  closeModal('testimonialModal');
}

function deleteTestimonial(index) {
  if (confirm('هل أنت متأكد من حذف هذا الرأي؟')) {
    config.testimonials.splice(index, 1);
    saveConfig();
    renderTestimonials();
  }
}

// ═══════════════════════════════════════════════════════════════
// الإعدادات العامة
// ═══════════════════════════════════════════════════════════════
function renderSettings() {
  const container = document.getElementById('settingsForm');
  
  container.innerHTML = `
    <h3 style="color:var(--accent); margin-bottom:20px;">🔧 بيانات المشروع</h3>
    <div class="form-group">
      <label>اسم المشروع</label>
      <input type="text" value="${config.brand.name}" onchange="updateBrand('name', this.value)">
    </div>
    <div class="form-group">
      <label>الاسم بالعربي</label>
      <input type="text" value="${config.brand.nameAr}" onchange="updateBrand('nameAr', this.value)">
    </div>
    <div class="form-group">
      <label>الشعار</label>
      <input type="text" value="${config.brand.tagline}" onchange="updateBrand('tagline', this.value)">
    </div>
    <div class="form-group">
      <label>الوصف</label>
      <textarea rows="2" onchange="updateBrand('description', this.value)">${config.brand.description}</textarea>
    </div>
    <div class="form-group">
      <label>الأيقونة</label>
      <input type="text" value="${config.brand.icon}" onchange="updateBrand('icon', this.value)">
    </div>
    
    <h3 style="color:var(--accent); margin:30px 0 20px;">📞 بيانات التواصل</h3>
    <div class="form-group">
      <label>واتساب (بدون +)</label>
      <input type="text" value="${config.contact.whatsapp}" onchange="updateContact('whatsapp', this.value)">
    </div>
    <div class="form-group">
      <label>رقم الهاتف للعرض</label>
      <input type="text" value="${config.contact.phone}" onchange="updateContact('phone', this.value)">
    </div>
    <div class="form-group">
      <label>البريد الإلكتروني</label>
      <input type="email" value="${config.contact.email}" onchange="updateContact('email', this.value)">
    </div>
    <div class="form-group">
      <label>العنوان</label>
      <input type="text" value="${config.contact.address}" onchange="updateContact('address', this.value)">
    </div>
    
    <h3 style="color:var(--accent); margin:30px 0 20px;">🌐 السوشيال ميديا</h3>
    <div class="form-group">
      <label>فيسبوك</label>
      <input type="url" value="${config.social.facebook}" onchange="updateSocial('facebook', this.value)">
    </div>
    <div class="form-group">
      <label>انستجرام</label>
      <input type="url" value="${config.social.instagram}" onchange="updateSocial('instagram', this.value)">
    </div>
    <div class="form-group">
      <label>تيك توك</label>
      <input type="url" value="${config.social.tiktok}" onchange="updateSocial('tiktok', this.value)">
    </div>
  `;
}

function updateBrand(field, value) {
  config.brand[field] = value;
  saveConfig();
}

function updateContact(field, value) {
  config.contact[field] = value;
  saveConfig();
}

function updateSocial(field, value) {
  config.social[field] = value;
  saveConfig();
}

// ═══════════════════════════════════════════════════════════════
// حفظ وتصدير
// ═══════════════════════════════════════════════════════════════
function saveConfig() {
  localStorage.setItem('jesoora_config', JSON.stringify(config));
}

function exportConfig() {
  const configCode = `const CONFIG = ${JSON.stringify(config, null, 2)};`;
  const fullCode = `// ╔══════════════════════════════════════════════════════════════╗
// ║                    JESOORA — ملف الإعدادات                   ║
// ║          غيّر أي حاجة هنا وهتتحدث في الموقع تلقائياً        ║
// ╚══════════════════════════════════════════════════════════════╝

${configCode}`;
  
  document.getElementById('exportCode').value = fullCode;
  document.getElementById('exportModal').classList.add('active');
}

function copyCode() {
  const textarea = document.getElementById('exportCode');
  textarea.select();
  document.execCommand('copy');
  alert('✅ تم النسخ! الحين افتح ملف config.js وحط الكود الجديد مكان القديم.');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add('closing');
  setTimeout(() => {
    document.getElementById(modalId).classList.remove('active', 'closing');
  }, 200);
}
