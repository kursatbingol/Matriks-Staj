function showOptions(tribunName) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `Talebiniz alınmıştır. ${tribunName} tribününden koltuk rezerve edilmiştir.`;
}
const coaches = [
    {
        name: "Luis Enrique",
        img: "Luis.webp",
        desc: "Luis Enrique Martínez García, bilinen adıyla Luis Enrique, İspanyol teknik direktör ve eski millî futbolcu. Ligue 1 ekiplerinden Paris Saint-Germain'i çalıştırmaktadır. Futbolcu olarak Luis Enrique, iyi bir tekniğe sahip çok yönlü bir oyuncu olarak çeşitli pozisyonlarda oynayabiliyordu, ancak genellikle orta saha veya forvet olarak oynuyordu ve ayrıca hırsı ve dayanıklılığıyla da dikkat çekiyordu. 1991'de başlayıp 2004'te sona eren kariyerinde Real Madrid ve Barcelona'yı hem bireysel hem de takım başarısıyla temsil etti. 500'den fazla resmî maça çıktı ve 100'den fazla gol attı. İspanya millî takımıyla üç Dünya Kupası ve bir Avrupa Şampiyonası'nda yer aldı."
    },
    {
        name: "Christophe Galtier",
        img: "Galtier.webp",
        desc: "Christophe Galtier, Fransız teknik direktör ve stoper mevkiinde oynayan eski futbolcudur. Futbolcu olarak kariyerinin büyük kısmını Fransa'da geçirdi. Kariyeri boyunca tüm kulvarlarda 240 maça çıktı ve sadece tek gol attı. Galtier, Saint-Étienne ile 2013 yılında Carlo Ancelotti ile paylaştığı Trophées UNFP du football'da Yılın Teknik Direktörü ödülünü kazandı ve Lille'in 2018-19 Ligue 1 sezonunu ikinci sırada bitirmesinin ardından 2019'da tekrar kazandı. 2020-21 sezonu Lille ile lig şampiyonluğunu kazandı ve Ligue 1 Yılın Menajeri seçildi."
    },
    {
        name: "Mauricio Pochettino",
        img: "Mauricio.webp",
        desc: "Pochettino profesyonel futbol hayatına Newell's Old Boys kulübünde başladı ve 1994-95 sezonunda İspanya'nın Espanyol takımına transfer oldu. 2000 yılındaki Copa del Rey şampiyonluğuna katkısı oldu. Ocak 2001'de Pochettino Paris Saint-Germain'in yolunu tuttu. 2003-04 sezonunda ise Fransa'da kalıp Bordeaux'ya transfer oldu. Sezonun sonunda Espanyol'a geri döndü. İki buçuk yıllık bir sözleşme imzaladı. 34 yaşında olmasına rağmen düzenli olarak forma giymeye devam etti ve 2005-06 sezonunda yine Copa del Rey'i aldılar."
    }
    
];

let currentCoachIndex = 0;

const coachImage = document.querySelector('.coach-image');
const coachName = document.querySelector('.coach-info h2');
const coachDesc = document.querySelector('.coach-info p');

function showCoach(index) {
    coachImage.src = coaches[index].img;
    coachName.textContent = coaches[index].name;
    coachDesc.textContent = coaches[index].desc;
}

document.querySelector('.left-arrow').addEventListener('click', () => {
    currentCoachIndex = (currentCoachIndex - 1 + coaches.length) % coaches.length;
    showCoach(currentCoachIndex);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentCoachIndex = (currentCoachIndex + 1) % coaches.length;
    showCoach(currentCoachIndex);
});

// Sayfa yüklendiğinde ilk antrenörü göster
showCoach(currentCoachIndex);

function switchTheme(theme) {
    console.log("Switching to theme:", theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

document.addEventListener('DOMContentLoaded', function() {
    var currentTheme = localStorage.getItem('theme') || 'light';
    console.log("Current theme on load:", currentTheme);
    switchTheme(currentTheme);

    document.getElementById('theme-switcher').addEventListener('click', function() {
        var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        console.log("New theme selected:", newTheme);
        switchTheme(newTheme);
        currentTheme = newTheme;
    });
});
