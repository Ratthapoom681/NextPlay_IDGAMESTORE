// nextplay.js — client-side demo logic for NextPlay
const products = [
  { id: 1, name: 'PUBG — เซิฟไทย (Conqueror)', price: 120, img: 'imgjs/PUBG.png', desc: 'เซิฟไทย, Rank: Conqueror, พร้อมสกินพื้นฐาน' },
  { id: 2, name: 'RoV — Rank: Epic', price: 250, img: 'imgjs/RoV.png', desc: 'Rank: Epic, มีฮีโร่หลายตัวและสกิน' },
  { id: 3, name: 'Genshin — ตัวละคร 5★', price: 450, img: 'imgjs/Genshin.png', desc: 'มีตัวละคร 5★ อย่างน้อย 1 ตัว, รีซัลตืกตามภาพ' },
  { id: 4, name: 'Free Fire — Account พร้อมสกิน', price: 180, img: 'imgjs/free fire.png', desc: 'ไอดีพร้อมสกินและไอเท็มพื้นฐาน' },
  { id: 5, name: 'Valorant — Rank: Platinum', price: 300, img: 'imgjs/Valorant.png', desc: 'Rank: Platinum, รวมเอเจนท์หลัก' },
  { id: 6, name: 'Overwatch — Account พร้อมฮีโร่', price: 350, img: 'imgjs/Overwatch.png', desc: 'มีฮีโร่หลายตัว และสกินพื้นฐาน' }
];

function renderProducts() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  products.forEach(p => {
    const el = document.createElement('article');
    el.className = 'prod-card';
    el.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <div class="meta-row">
        <div>
          <span class="badge">ID: ${p.id}</span>
          <strong>${p.name}</strong>
        </div>
        <div class="price">฿${p.price}</div>
      </div>
      <p style="color:var(--muted);margin:0 0 .8rem">${p.desc}</p>
      <div style="display:flex;gap:.5rem">
        <button class="btn" data-buy="${p.id}">ซื้อเลย</button>
        <a class="btn" href="#" onclick="alert('รายละเอียดสินค้า (ตัวอย่าง)');return false;">ดูรายละเอียด</a>
      </div>
    `;
    grid.appendChild(el);
  });

  // attach buy buttons
  document.querySelectorAll('[data-buy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = Number(btn.getAttribute('data-buy'));
      openBuyModal(id);
    });
  });
}

// Modal logic
const modal = document.getElementById('buyModal');
const modalBody = document.getElementById('modalBody');
const confirmBuy = document.getElementById('confirmBuy');

function openBuyModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  modal.setAttribute('aria-hidden', 'false');
  modalBody.innerHTML = `
    <p><strong>${p.name}</strong></p>
    <p style="color:var(--muted)">${p.desc}</p>
    <p class="price">ราคาจำลอง: ฿${p.price}</p>
    <p style="color:var(--muted);font-size:.9rem">หมายเหตุ: หน้านี้เป็นตัวอย่าง ไม่ดำเนินการชำระเงินจริง</p>
  `;
  confirmBuy.onclick = () => {
    alert(`สั่งซื้อสำเร็จ (จำลอง): ${p.name} — ฿${p.price}`);
    closeModal();
  };
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
}

document.addEventListener('click', (e) => {
  if (e.target.matches('.modal-close') || e.target.matches('.modal-cancel')) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
});

// initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
});

// Small UI-only handler for the search form: prevent submission and show a console message
const searchForm = document.getElementById('searchForm');
if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Search submitted (UI-only). Form values:', new FormData(searchForm));
    alert('การค้นหาเป็นฟีเจอร์ตัวอย่าง (UI-only)');
  });
}

// Auth modal logic (single button, tabs for login/register)
const authModal = document.getElementById('authModal');
const openAuthBtn = document.getElementById('openAuthBtn');
if (openAuthBtn && authModal) {
  openAuthBtn.addEventListener('click', () => openAuthModal());
}

function openAuthModal(tab) {
  if (!authModal) return;
  authModal.setAttribute('aria-hidden', 'false');
  if (tab) setAuthTab(tab);
}

function closeAuthModal() {
  if (!authModal) return;
  authModal.setAttribute('aria-hidden', 'true');
}

// tab switching
document.addEventListener('click', (e) => {
  if (e.target.matches('.tab-btn')) {
    const tab = e.target.getAttribute('data-tab');
    setAuthTab(tab);
  }
  if (e.target.closest('#authModal') && e.target.matches('.modal-close')) {
    closeAuthModal();
  }
});

function setAuthTab(tab) {
  const login = document.getElementById('auth-login');
  const register = document.getElementById('auth-register');
  if (!login || !register) return;
  if (tab === 'register') {
    login.style.display = 'none';
    register.style.display = '';
  } else {
    login.style.display = '';
    register.style.display = 'none';
  }
}

// update tab button active state
function updateAuthTabButtons(tab) {
  document.querySelectorAll('.tab-btn').forEach(b => {
    if (b.getAttribute('data-tab') === tab) b.classList.add('active');
    else b.classList.remove('active');
  });
}

// wrap setAuthTab to also update buttons
const _setAuthTab = setAuthTab;
setAuthTab = function(tab) {
  _setAuthTab(tab);
  updateAuthTabButtons(tab || 'login');
};

// open auth modal if URL hash is #auth
if (window.location.hash === '#auth') {
  // wait for DOMContent
  document.addEventListener('DOMContentLoaded', () => {
    openAuthModal();
    // clear hash to avoid reopening on refresh
    history.replaceState(null, '', window.location.pathname + window.location.search);
  });
}
