// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 检测滚动事件，高亮当前激活的导航项
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if(pageYOffset >= (sectionTop - sectionHeight / 3)){
        current = section.getAttribute('id'); 
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if(link.getAttribute('href').substring(1) === current){
        link.classList.add('active');
      }
    });
  });

  // 滚动动画效果
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.skill-card, .project-card, .timeline-item');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if(elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // 初始设置元素动画样式
  document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // 监听滚动事件
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // 初始调用一次

  // 表单提交处理
  const contactForm = document.querySelector('#contact form');
  if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('感谢您的消息！由于这是一个静态页面，实际的消息发送功能并未实现。');
      contactForm.reset();
    });
  }

  // 项目卡片点击处理
  document.querySelectorAll('.project-card .btn').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const projectName = this.closest('.project-card').querySelector('.card-title').textContent;
      alert(`${projectName} 项目详情页面即将推出，敬请期待！`);
    });
  });
});

// 简单的暗黑模式切换
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  
  // 更新按钮文本
  const darkModeBtn = document.querySelector('[onclick="toggleDarkMode()"]');
  if(darkModeBtn) {
    if(document.body.classList.contains('dark-mode')) {
      darkModeBtn.innerHTML = '<i class="bi bi-brightness-high-fill"></i> 浅色模式';
    } else {
      darkModeBtn.innerHTML = '<i class="bi bi-moon-fill"></i> 暗黑模式';
    }
  }
}

// 检查用户之前的暗黑模式偏好
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    const darkModeBtn = document.querySelector('[onclick="toggleDarkMode()"]');
    if(darkModeBtn) {
      darkModeBtn.innerHTML = '<i class="bi bi-brightness-high-fill"></i> 浅色模式';
    }
  }
});