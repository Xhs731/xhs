class Gallery {
    constructor() {
        this.images = document.querySelectorAll('.image-gallery img');
        this.currentIndex = 0;
        this.initGallery();
    }

    initGallery() {
        this.images.forEach((img, index) => {
            img.addEventListener('click', () => {
                this.showLightbox(index);
            });
        });
    }

    showLightbox(index) {
        // 创建灯箱效果
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        // 实现灯箱查看功能
    }
}

// 初始化画廊
document.addEventListener('DOMContentLoaded', () => {
    new Gallery();
});