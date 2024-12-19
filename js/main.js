// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 响应式导航菜单
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// 图片加载优化
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
});

// 添加分享功能
function shareWebsite() {
    if (navigator.share) {
        navigator.share({
            title: '银发智享 - 智慧养老服务平台',
            text: '专注于为老年人提供便捷、贴心的智慧养老服务',
            url: window.location.href
        })
        .catch(console.error);
    }
}

// 如果需要，可以添加分享按钮的事件监听
document.querySelector('.share-button')?.addEventListener('click', shareWebsite); 

// 添加滚动进度条
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
});

// 添加阅读进度条功能
function updateReadingProgress() {
    const article = document.querySelector('.news-body');
    const progress = document.querySelector('.reading-progress-bar');
    
    if (article && progress) {
        const articleBox = article.getBoundingClientRect();
        const articleHeight = articleBox.height;
        const windowHeight = window.innerHeight;
        const scrolled = window.scrollY;
        
        const percentage = Math.min(
            (scrolled / (articleHeight - windowHeight)) * 100,
            100
        );
        
        progress.style.width = `${percentage}%`;
    }
}

window.addEventListener('scroll', updateReadingProgress);
window.addEventListener('resize', updateReadingProgress);

// 增强分享功能
function shareContent() {
    const title = document.title;
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        })
        .catch(console.error);
    } else {
        // 复制链接到剪贴板
        navigator.clipboard.writeText(url)
            .then(() => {
                const shareBtn = document.querySelector('.share-btn');
                const originalText = shareBtn.textContent;
                shareBtn.textContent = '链接已复制';
                setTimeout(() => {
                    shareBtn.textContent = originalText;
                }, 2000);
            })
            .catch(console.error);
    }
}

// 页面滚动进度条
function updateProgressBar() {
    const scrollProgress = document.querySelector('.reading-progress-bar');
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
}

// 图片懒加载
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 绑定滚动事件
    window.addEventListener('scroll', updateProgressBar);
    
    // 初始化懒加载
    lazyLoadImages();
});