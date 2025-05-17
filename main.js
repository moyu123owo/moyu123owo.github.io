// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 设置当前导航项为活跃状态
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });

    // 模拟文章点击事件
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        post.addEventListener('click', function(e) {
            // 防止点击按钮时触发
            if (!e.target.classList.contains('btn')) {
                // 在实际应用中这里会跳转到文章详情页
                console.log('跳转到文章详情页:', this.querySelector('h3').textContent);
                alert('文章详情功能将在后续实现');
            }
        });
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// 简单的暗黑模式切换
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// 检查用户之前的暗黑模式偏好
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
