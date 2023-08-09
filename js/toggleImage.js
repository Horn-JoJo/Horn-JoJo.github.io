const images = [
    "https://picbed.kuroko.love/blog_background/%E9%A3%9F%E8%9C%82%E6%93%8D%E7%A5%88.jpg",
    "https://picbed.kuroko.love/blog_background/10032.png",
    "https://picbed.kuroko.love/blog_background/%E4%B8%BB%E8%A7%92%E5%9B%A2.jpg",
    "https://picbed.kuroko.love/blog_background/%E4%B8%BB%E8%A7%92%E5%9B%A22.jpg",
    "https://picbed.kuroko.love/blog_background/%E4%B8%BB%E8%A7%92%E5%9B%A23.jpg",
    "https://picbed.kuroko.love/blog_background/%E5%91%B1%E5%A4%AA%E7%89%88%E7%BE%8E%E7%90%B4.png",
    "https://picbed.kuroko.love/blog_background/%E5%A9%9A%E7%BA%B1%E6%B3%AA%E7%88%B7.jpg",
    "https://picbed.kuroko.love/blog_background/%E5%B0%8F%E5%BE%A1%E5%9D%82.jpg",
    "https://picbed.kuroko.love/blog_background/%E5%BE%A1%E5%9D%82%E7%BE%8E%E7%90%B4and%E4%B8%8A%E6%9D%A1%E5%BD%93%E9%BA%BB.webp",
    "https://picbed.kuroko.love/blog_background/%E5%BE%A1%E5%9D%82%E7%BE%8E%E7%90%B4and%E7%99%BD%E4%BA%95%E9%BB%91%E5%AD%90.png",
    "https://picbed.kuroko.love/blog_background/%E6%B3%AA%E7%88%B7and%E5%88%9D%E6%98%A5.jpg",
    "https://picbed.kuroko.love/blog_background/%E7%99%BD%E4%BA%95%E9%BB%91%E5%AD%90.png",
    "https://picbed.kuroko.love/blog_background/%E9%A3%9F%E8%9C%82%E6%93%8D%E7%A5%882.jpg",
];

/**
 * 
 * @returns 随机返回images里的一张图片
 */
const toggle = () => {
    const n = images.length;
    return images[Math.floor(Math.random() * n)];
};

/**
 * 
 * @param {string} url 图片地址
 * @description 设置背景图片
 */
const setImage = (url) => {
    document.body.style.background = `url(${url})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
};

/**
 * @description 当日期改变的时候随机加载一张背景图片
 */
const LoadImage = () => {
    // 获取星期几 0~6 （0表示星期天，其余顺次表示星期1到6
    const day = new Date().getDay();
    if (!localStorage.getItem("day") || Number(localStorage.getItem("day")) !== day) { // 日期改变或者localStorage里没有设置day
        const url = toggle(); // 新的随机图片
        setImage(url); // 设置图片
        localStorage.setItem("day", day); // 更新日期
        localStorage.setItem("image", url); // 更新图片
    } else { // 日期不变
        const url = localStorage.getItem("image") || toggle(); // 拿到当天设置好的图片（如果设置了）否则随机一张
        setImage(url); // 设置图片
    }
};

// 页面加载时执行
LoadImage();

// 定时器，每个10分钟执行里面的逻辑 1000表示毫秒
// const id = setInterval(() => {
//     const day = new Date().getDay();
//     if (localStorage.getItem("day") !== day) {
//         setImage();
//         localStorage.setItem("day", day);
//     }
// }, 1000 * 60 * 10);

// 在销毁页面（关掉当前页面）的时候清除定时器
// window.addEventListener('beforeunload', function() {
//     clearInterval(id);
// });