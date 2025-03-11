// 現在の年を取得してフッターに表示
document.getElementById('current-year').textContent = new Date().getFullYear();

// モバイルメニューの切り替え
const menuToggle = document.getElementById('menu-toggle');
const navbarMenu = document.getElementById('navbar-menu');

if (menuToggle && navbarMenu) {
  menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    
    // アイコンを切り替え
    const icon = menuToggle.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
}

// ナビゲーションリンクをクリックしたときにモバイルメニューを閉じる
const navLinks = document.querySelectorAll('.navbar-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarMenu.classList.contains('active')) {
      navbarMenu.classList.remove('active');
      
      const icon = menuToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// FAQ
function toggleFaq(element) {
  const faqItem = element.parentElement;
  faqItem.classList.toggle('active');
  
  // アイコンの回転
  const icon = element.querySelector('i');
  if (faqItem.classList.contains('active')) {
    icon.style.transform = 'rotate(180deg)';
  } else {
    icon.style.transform = 'rotate(0)';
  }
}

// スクロール時のアニメーション
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  
  // ナビゲーションバーの背景透明度を変更
  const navbar = document.querySelector('.navbar');
  if (scrollY > 100) {
    navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.9)';
    navbar.style.boxShadow = 'none';
  }
  
  // 要素が画面内に入ったらアニメーション
  const animateElements = document.querySelectorAll('.feature-card, .developer-card, .faq-item');
  animateElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
});

// ページ読み込み時に要素を非表示にしておく
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.feature-card, .developer-card, .faq-item');
  animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // 初期表示時のアニメーション
  setTimeout(() => {
    window.dispatchEvent(new Event('scroll'));
  }, 100);
});

// アクティブなナビゲーションリンクの更新
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav a');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 100 && window.pageYOffset < sectionTop + sectionHeight - 100) {
      const currentId = section.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('load', updateActiveNavLink);