
let login = document.getElementById("log");

if (localStorage.getItem("vibeuser")) {
    login.innerHTML = `مرحبا ${localStorage.getItem("vibeuser")}`;
    login.onclick = function(e) {
        e.preventDefault();
    };
}


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
    { id: 70, name: "بنطلون كارغو بيج عصري", price: 750, category: "pants", image: "images (70).jpg" },
    { id: 12, name: "حذاء نسائي سبورت", price: 1350, category: "shose", image: "images (12).jpg" },
    { id: 43, name: "تيشرت أبيض طباعة ريترو", price: 360, category: "t-shirt", image: "images (43).jpg" },
    { id: 71, name: "بنطلون جينز أسود بقطوع خفيفة", price: 690, category: "pants", image: "images (71).jpg" },
    { id: 13, name: "حذاء هاف بوت أزرق", price: 1700, category: "shose", image: "images (13).jpg" },
    { id: 44, name: "تيشرت زيتي غامق سادة", price: 320, category: "t-shirt", image: "images (44).jpg" },
    { id: 72, name: "بنطلون جينز أزرق غامق واسع", price: 670, category: "pants", image: "images (72).jpg" },
    { id: 14, name: "حذاء جري خفيف أسود", price: 1400, category: "shose", image: "images (14).jpg" },
    { id: 45, name: "تيشرت أسود بيزك كلاسيك", price: 280, category: "t-shirt", image: "images (45).jpg" },
    { id: 73, name: "بنطلون ميلتون أسود ثقيل", price: 490, category: "pants", image: "images (73).jpg" },
    { id: 15, name: "سنيكرز ابيض سكيت", price: 1000, category: "shose", image: "images (15).jpg" },
    { id: 46, name: "تيشرت أسود بطبعة دائرية", price: 370, category: "t-shirt", image: "images (46).jpg" },
    { id: 74, name: "بنطلون جينز ثلجي فاتح", price: 650, category: "pants", image: "images (74).jpg" },
    { id: 16, name: "حذاء اولد سكول أسود", price: 920, category: "shose", image: "images (16).jpg" },
    { id: 47, name: "تيشرت أسود هيفي قطن", price: 460, category: "t-shirt", image: "images (47).jpg" },
    { id: 75, name: "بنطلون أسود فضفاض ستريت", price: 630, category: "pants", image: "images (75).jpg" },
    { id: 17, name: "حذاء جري فسفوري", price: 1550, category: "shose", image: "images (17).jpg" },
    { id: 48, name: "تيشرت رمادي مطبوع هيب هوب", price: 430, category: "t-shirt", image: "images (48).jpg" },
    { id: 76, name: "بنطلون جينز كلاسيك مريح", price: 580, category: "pants", image: "images (76).jpg" },
    { id: 18, name: "سنيكرز جلد ابيض كلاسيك", price: 1280, category: "shose", image: "images (18).jpg" },
    { id: 49, name: "تيشرت بيج فاتح سادة", price: 310, category: "t-shirt", image: "images (49).jpg" },
    { id: 77, name: "بنطلون جينز ثلجي واسع", price: 660, category: "pants", image: "images (77).jpg" },
    { id: 19, name: "حذاء رياضي أسود سادة", price: 1190, category: "shose", image: "images (19).jpg" },
    { id: 50, name: "تيشرت أبيض قطن نقي", price: 299, category: "t-shirt", image: "images (50).jpg" },
    { id: 78, name: "بنطلون جينز أزرق مائل للرمادي", price: 610, category: "pants", image: "images (78).jpg" },
    { id: 20, name: "سنيكرز كاجوال أزرق غامق", price: 1080, category: "shose", image: "images (20).jpg" },
    { id: 51, name: "تيشرت أسود ستريت ستايل", price: 395, category: "t-shirt", image: "images (51).jpg" },
    { id: 79, name: "بنطلون جينز أزرق مميز", price: 625, category: "pants", image: "images (79).jpg" },
    { id: 21, name: "حذاء كاجوال بيج x أخضر", price: 1320, category: "shose", image: "images (21).jpg" },
    { id: 52, name: "تيشرت أسود كاجوال هادي", price: 340, category: "t-shirt", image: "images (52).jpg" },
    { id: 80, name: "بنطلون أبيض قطن ناعم", price: 500, category: "pants", image: "images (80).jpg" },
    { id: 22, name: "حذاء رانينج أخضر تريندي", price: 1490, category: "shose", image: "images (22).jpg" },
    { id: 53, name: "تيشرت كحلي أوفر سايز", price: 440, category: "t-shirt", image: "images (53).jpg" },
    { id: 81, name: "بنطلون جينز أبيض ثلجي", price: 695, category: "pants", image: "images (81).jpg" },
    { id: 23, name: "سنيكرز رياضي ملون", price: 1650, category: "shose", image: "images (23).jpg" },
    { id: 54, name: "تيشرت أسود هودي صيفي", price: 480, category: "t-shirt", image: "images (54).jpg" },
    { id: 82, name: "بنطلون بيج فاتح كاجوال", price: 560, category: "pants", image: "images (82).jpg" },
    { id: 24, name: "حذاء فلات أسود خفيف", price: 850, category: "shose", image: "images (24).jpg" },
    { id: 55, name: "تيشرت زيتوني بطبعة خفيفة", price: 365, category: "t-shirt", image: "images (55).jpg" },
    { id: 83, name: "بنطلون جينز سماوي فاتح", price: 640, category: "pants", image: "images (83).jpg" },
    { id: 25, name: "سنيكرز أزرق فاتح عالي", price: 1220, category: "shose", image: "images (25).jpg" },
    { id: 56, name: "تيشرت أبيض أوفر سايز ناعم", price: 425, category: "t-shirt", image: "images (56).jpg" },
    { id: 84, name: "بنطلون قماش زيتي بجيوب", price: 570, category: "pants", image: "images (84).jpg" },
    { id: 26, name: "حذاء جري رمادي فاتح", price: 1380, category: "shose", image: "images (26).jpg" },
    { id: 85, name: "بنطلون اسود تراك بانتس", price: 460, category: "pants", image: "images (85).jpg" },
    { id: 27, name: "حذاء رياضي مريح أسود", price: 1120, category: "shose", image: "images (27).jpg" },
    { id: 86, name: "بنطلون كارغو بني غامق", price: 740, category: "pants", image: "images (86).jpg" },
    { id: 28, name: "سنيكرز أخضر فخم", price: 1260, category: "shose", image: "images (28).jpg" },
    { id: 87, name: "بنطلون جينز رمادي غامق واسع", price: 685, category: "pants", image: "images (87).jpg" },
    { id: 29, name: "حذاء كاجوال رمادي داكن", price: 1040, category: "shose", image: "images (29).jpg" },
    { id: 88, name: "بنطلون كارغو ثلجي بجيوب", price: 760, category: "pants", image: "images (88).jpg" },
    { id: 30, name: "حذاء جري أزرق x أسود", price: 1500, category: "shose", image: "images (30).jpg" },
    { id: 89, name: "بنطلون أسود بيزك ضيق", price: 510, category: "pants", image: "images (89).jpg" },
    { id: 31, name: "حذاء سبورت أخضر فسفوري", price: 1420, category: "shose", image: "images (31).jpg" },
    { id: 90, name: "بنطلون ميلتون أزرق داكن", price: 475, category: "pants", image: "images (90).jpg" }
];

let all = document.getElementById("viewAll");
let shose = document.getElementById("shose");
let tshirt = document.getElementById("tshirt");
let pants = document.getElementById("pants");
let add = document.getElementById("add");


function showitem(categoryname) {
    add.innerHTML = "";

    for(let i = 0; i < products.length; i++) {
        if(products[i].category == categoryname || categoryname == "all") {
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


shose.onclick = function() { showitem("shose"); }
tshirt.onclick = function() { showitem("t-shirt"); }
pants.onclick = function() { showitem("pants"); }
all.onclick = function() { showitem("all"); }



let cart = document.querySelector(".cart");

cart.onclick = function() {
    if(localStorage.getItem("vibeuser")) {
        window.location.href = "cart.html";
    } else {
        window.location.href = "login.html"
    }
}