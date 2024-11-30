const quotes = [
    '"🫂🤍💍🥹🫶🏻😉🫰🏻🌹🌷🧕🏻💪🏻"',
    '"Sayangg gimana hari ini??"',
    '"Rasanya pasti berat banget yaa sayangg."',
    '"Gapapa gapapa, its okeyy cantikk."',
    '"Tapi seandainya terlalu berat heem."',
    '"Mau nangis juga gapapa kok, silahkan sayangg."',
    '"Gapapa kalo sesekali kaya anak kecil."',
    '"Kan, kita memang anak kecil yang sedang belajar jadi dewasa sayanggg."',
    '"Jangan berlarut-larut yaa cantikk sedihnya🫂🌹."',
    '"Sayanggg pasti lagi ngerasa cape banget yaa hari ini??."',
    '"Lagi ngerasa semuanya mengecewakan??."',
    '"Lagi ngerasa lelah dll?? rasanya pengen nyerah semuanya??."',
    '"Heyy sayanggg kamu ga sendirian ada aku disini cantikkk kita lewatin ini semuanya bareng bareng yaa😉🫂."',
    '"Sayangg kamu mau tau ga??."',
    '"SAAT KAMU BERHASIL."',
    '"IM PROUD OF YOU."',
    '"SAAT KAMU GAGAL."',
    '"IM PROUD OF YOU ."',
    '"YOU DID GREAT!!! aku akan selalu bangga dengan perjuangan kamu sayanggg. inget aku setia hari, setiap waktu dan saat ini yaa cantikk🫰🏻."',
    '"You do well every day dear."',
    '"Kamu hebat sayangg kamu bisa lewatin ini semaunya cantikk bahkan posisi kamu sekarang ini karna usaha perjuangan kamu sayangg🥹."',
    '"Sayanggg pelan pelan aja yaa, jangan lupa istirahat, jaga kesehatannya jangan sampe sakitt."',
    '"Cantiknya aku engga ada yang sia sia dari apa yang telah kamu usahakan setiap harinya sayanggg."',
    '"Teruslah melangkah maju dan terus bersyukur atas apa yang telah di dapat setiap harinya yaa cantikk."',
    '"Everything will be fine, kita jalanin ini semuanya bersama sama yaa sayangg🫂🥺."',
    '"Karna hanya saat bersamamu, aku menemukan versi bahagiaku yang seutuhnya. I LOVE YOU FOREVER SAYANGG 🫂🤍🫶🏻💍."',
    '"maapinn aku yaa aku engga bisa ungkapin semuanya sayangg tapi percayalah sayangg perasaan aku yg belom tersampaikan kata kata yg aku ucapkan lebih dari ini semuanya sayangg hanya hati aku dan hati kamu yg menjelaskan semaunya sayangg, karna kamu dunia aku dan belahan jiwa aku sayangg selama selalu tentang kamu, kamu, kamu dan kamu. jangan tinggalkan aku yaa sayangg🥺🫂🤍."',
    '"SAYANGGG LOVE U FOREVER SAYANGG🫂🤍🤍."'
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("btn");

let index = 0; // Mulai dari element pertama

button.addEventListener("click", () => {
  // Increment index dan reset ke 0 jika mencapai mencapai array
    index = (index + 1) % quotes.length;
    quoteElement.textContent = quotes[index];
});
