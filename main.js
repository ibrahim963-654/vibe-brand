let login = document.getElementById("log");

if (localStorage.getItem("vibeuser")) {
    login.innerHTML = `مرحبا ${localStorage.getItem("vibeuser")}`;
    login.onclick = function(e) {
        e.preventDefault();
    };
}

// مصفوفة المنتجات
const products = [
    { id: 1, name: "حذاء كاجوال ابيض", price: 1200, category: "shose", image: "images (1).jpg" },
    { id: 2, name: "حذاء جري سبورت", price: 1450, category: "shose", image: "images (2).jpg" },
    { id: 33, name: "تيشرت أسود جرافيك", price: 390, category: "t-shirt", image: "images (33).jpg" },
    { id: 58, name: "بنطلون جينز أسود واسع", price: 680, category: "pants", image: "images (58).jpg" },
    { id: 3, name: "سنيكرز عصري أحمر", price: 950, category: "shose", image: "images (3).jpg" },
    { id: 34, name: "تيشرت بيج سادة أوف وايت", price: 320, category: "t-shirt", image: "images (34).jpg" },
    { id: 59, name: "بنطلون اسود ستريت ستايل", price: 620, category: "pants", image: "images (59).jpg" },
    { id: 4, name: "حذاء فلات أسود", price: 890, category: "shose", image: "images (4).jpg" },
    { id: 35, name: "تيشرت كحلي بيزك", price: 290, category: "t-shirt", image: "images (35).jpg" },
    { id: 60, name: "بنطلون جينز أزرق كلاسيك", price: 590, category: "pants", image: "images (60).jpg" },
    { id: 5, name: "سنيكرز جلد كلاسيك", price: 1300, category: "shose", image: "images (5).jpg" },
    { id: 36, name: "تيشرت أسود سليم فيت", price: 310, category: "t-shirt", image: "images (36).jpg" },
    { id: 61, name: "بنطلون جينز أزرق داكن", price: 600, category: "pants", image: "images (61).jpg" },
    { id: 62, name: "بنطلون جينز أزرق فاتح", price: 640, category: "pants", image: "images (62).jpg" },
    { id: 63, name: "بنطلون جينز رمادي غامق", price: 660, category: "pants", image: "images (63).jpg" },
    { id: 64, name: "بنطلون اسود سليم فيت", price: 520, category: "pants", image: "images (64).jpg" },
    { id: 6, name: "حذاء رياضي مريح", price: 1100, category: "shose", image: "images (6).jpg" },
    { id: 37, name: "تيشرت أبيض بطبعة صغيرة", price: 340, category: "t-shirt", image: "images (37).jpg" },
    { id: 65, name: "بنطلون قماش أسود رسمي", price: 580, category: "pants", image: "images (65).jpg" },
    { id: 7, name: "حذاء رانينج رمادي", price: 1600, category: "shose", image: "images (7).jpg" },
    { id: 38, name: "تيشرت رمادي ستريت وير", price: 420, category: "t-shirt", image: "images (38).jpg" },
    { id: 66, name: "بنطلون ميلتون رمادي فاتح", price: 450, category: "pants", image: "images (66).jpg" },
    { id: 8, name: "سنيكرز فنتج أزرق", price: 1050, category: "shose", image: "images (8).jpg" },
    { id: 39, name: "تيشرت أسود أوفر سايز", price: 450, category: "t-shirt", image: "images (39).jpg" },
    { id: 67, name: "بنطلون كارغو أسود بجيوب", price: 720, category: "pants", image: "images (67).jpg" },
    { id: 9, name: "حذاء رياضي أسود x رمادي", price: 1250, category: "shose", image: "images (9).jpg" },
    { id: 40, name: "تيشرت أسود قطن مريح", price: 300, category: "t-shirt", image: "images (40).jpg" },
    { id: 68, name: "بنطلون قماش زيتي كاجوال", price: 540, category: "pants", image: "images (68).jpg" },
    { id: 10, name: "حذاء كاجوال زيتي", price: 990, category: "shose", image: "images (10).jpg" },
    { id: 41, name: "تيشرت أحمر غامق سادة", price: 330, category: "t-shirt", image: "images (41).jpg" },
    { id: 69, name: "بنطلون جرو رمادي سبورت", price: 480, category: "pants", image: "images (69).jpg" },
    { id: 11, name: "سنيكرز بيج هادي", price: 1150, category: "shose", image: "images (11).jpg" },
    { id: 42, name: "تيشرت أسود جرافيك فخم", price: 410, category: "t-shirt", image: "images (42).jpg" },
    { id: 70, name: "بنطلون كارغو بيج عصري", price: 750, category: "pants", image: "images (70).jpg" }
];

let all = document.getElementById("viewAll");
let shose = document.getElementById("shose");
let tshirt = document.getElementById("tshirt");
let pants = document.getElementById("pants");
let add = document.getElementById("add");

// دالة عرض المنتجات
function showitem(categoryname) {
    if (!add) return; 
    add.innerHTML = "";

    for(let i = 0; i < products.length; i++) {
        if(products[i].category === categoryname || categoryname === "all") {
            let pdiv = document.createElement("div");
            pdiv.className = "product-div";
            add.appendChild(pdiv);

            let img = document.createElement("img");
            img.src = products[i].image;
            img.className = "pimg";
            pdiv.appendChild(img);

            let titlediv = document.createElement("div");
            titlediv.className = "titlediv";
            pdiv.appendChild(titlediv);

            let title = document.createElement("h3");
            title.textContent = products[i].name;
            title.className = "title";
            titlediv.appendChild(title);

            let price = document.createElement("span");
            price.textContent = `${products[i].price} ج.م`;
            price.className = "price";
            titlediv.appendChild(price);

            let btn = document.createElement("button");
            btn.textContent = "اضافه للسله";
            btn.className = "add-btn";
            
            btn.onclick = function() {
                if(localStorage.getItem("vibeuser")) {
                    let productToCart = {
                        id: products[i].id,
                        name: products[i].name,
                        price: products[i].price,
                        image: products[i].image
                    };

                    let cart = JSON.parse(localStorage.getItem("userCart")) || [];
                    cart.push(productToCart);
                    localStorage.setItem("userCart", JSON.stringify(cart));

                    window.location.href = "cart.html";
                } else {
                    window.location.href = "login.html";
                }
            };
            
            titlediv.appendChild(btn);
        }
    }
}

// دالة التحكم في كلاس active لأزرار الفلترة فقط لمنع التداخل مع الـ navbar
function filterActive(clickedElement) {
    // نبحث عن العنصر الأب المشترك للأزرار وهو الـ .select
    let filterButtons = document.querySelectorAll(".select div");
    filterButtons.forEach(btn => btn.classList.remove("active"));
    
    // إضافة الكلاس للعنصر الحاضن (الـ div) الخاص بالزر المضغوط
    clickedElement.parentElement.classList.add("active");
}

// ربط الأزرار بالوظائف وحل مشكلة الضغط على الـ div
if(shose) shose.onclick = function() { filterActive(this); showitem("shose"); }
if(tshirt) tshirt.onclick = function() { filterActive(this); showitem("t-shirt"); }
if(pants) pants.onclick = function() { filterActive(this); showitem("pants"); }
if(all) {
    all.onclick = function() { 
        let filterButtons = document.querySelectorAll(".select div");
        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.parentElement.classList.add("active");
        showitem("all"); 
    }
}

// عرض المنتجات تلقائياً عند فتح الصفحة لأول مرة
showitem("all");

// كود السلة
let cartBtn = document.querySelector(".cart");
if(cartBtn) {
    cartBtn.onclick = function() {
        if(localStorage.getItem("vibeuser")) {
            window.location.href = "cart.html";
        } else {
            window.location.href = "login.html";
        }
    }
}

// كود التحكم في الـ active الخاص بشريط التنقل (Navbar) فقط
let navLinks = document.querySelectorAll(".links li");
navLinks.forEach(e => {
    e.onclick = function() {
        navLinks.forEach(el => el.classList.remove("active"));
        e.classList.add("active");
    }
});
