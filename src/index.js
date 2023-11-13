

const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

const newItems=document.querySelectorAll("header nav a");
for(let i=0;i<newItems.length;i++){
  newItems[i].setAttribute("class","italic");
 
}
newItems[0].textContent=siteContent.nav["nav-item-1"];
newItems[1].textContent=siteContent.nav["nav-item-2"];
newItems[2].textContent=siteContent.nav["nav-item-3"];
newItems[3].textContent=siteContent.nav["nav-item-4"];
newItems[4].textContent=siteContent.nav["nav-item-5"];
newItems[5].textContent=siteContent.nav["nav-item-6"];

//console.log(newItems[3]);

const logoImg=document.querySelector(".logo").src=siteContent.images["logo-img"];
 
const sectionH1=document.querySelector(".cta .cta-text h1").textContent=siteContent.cta.h1;
const sectionButton=document.querySelector(".cta .cta-text button").textContent=siteContent.cta.button;
const sectionImage=document.getElementById("cta-img").src=siteContent.images["cta-img"];

const contentFeatures=document.querySelectorAll(".main-content .top-content .text-content h4");
const contentParag=document.querySelectorAll(".main-content .top-content .text-content p");

contentFeatures[0].textContent=siteContent["ana-içerik"]["özellikler-h4"];
contentParag[0].textContent=siteContent["ana-içerik"]["özellikler-içerik"];

contentFeatures[1].textContent=siteContent["ana-içerik"]["hakkımızda-h4"];
contentParag[1].textContent=siteContent["ana-içerik"]["hakkımızda-içerik"];

const contentImg=document.getElementById("middle-img").src=siteContent.images["accent-img"];

const bottomContentH4=document.querySelectorAll(".bottom-content .text-content h4");
const bottomContentParag=document.querySelectorAll(".bottom-content .text-content p");

bottomContentH4[0].textContent=siteContent["ana-içerik"]["servisler-h4"];
bottomContentParag[0].textContent=siteContent["ana-içerik"]["servisler-içeriği"];

bottomContentH4[1].textContent=siteContent["ana-içerik"]["ürünler-h4"];
bottomContentParag[1].textContent=siteContent["ana-içerik"]["ürünler-içeriği"];

bottomContentH4[2].textContent=siteContent["ana-içerik"]["vizyon-h4"];
bottomContentParag[2].textContent=siteContent["ana-içerik"]["vizyon-içeriği"];


const contactH4=document.querySelector(".contact h4").textContent=siteContent.iletisim["iletişim-h4"];
const contactParag=document.querySelectorAll(".contact p");
contactParag[0].textContent=siteContent.iletisim.adres;
contactParag[1].textContent=siteContent.iletisim.telefon;
contactParag[2].textContent=siteContent.iletisim.email;

const footerContent=document.querySelector("footer a");
footerContent.setAttribute("class","bold");
footerContent.textContent=siteContent.footer.copyright;





/* Kodlar Buradan aşağıya */