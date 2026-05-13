import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Language = "me" | "en" | "de" | "ru" | "fr" | "pl" | "tr";

interface Translations {
  [key: string]: {
    me: string;
    en: string;
    de: string;
    ru: string;
    fr: string;
    pl: string;
    tr: string;
  };
}

export const translations: Translations = {
  // Navigation
  "nav.home": {
    me: "Početna", en: "Home", de: "Startseite", ru: "Главная",
    fr: "Accueil", pl: "Strona główna", tr: "Ana Sayfa",
  },
  "nav.locations": {
    me: "Lokacije", en: "Locations", de: "Standorte", ru: "Локации",
    fr: "Emplacements", pl: "Lokalizacje", tr: "Lokasyonlar",
  },
  "nav.about": {
    me: "O nama", en: "About Us", de: "Über uns", ru: "О нас",
    fr: "À propos", pl: "O nas", tr: "Hakkımızda",
  },
  "nav.faq": {
    me: "Pitanja", en: "FAQ", de: "FAQ", ru: "Вопросы",
    fr: "FAQ", pl: "FAQ", tr: "SSS",
  },
  "nav.contact": {
    me: "Kontakt", en: "Contact", de: "Kontakt", ru: "Контакт",
    fr: "Contact", pl: "Kontakt", tr: "İletişim",
  },

  // Hero Section
  "hero.badge": {
    me: "Taluma rent a car — flota od 60+ vozila",
    en: "Taluma rent a car — fleet of 60+ vehicles",
    de: "Taluma rent a car — Flotte mit 60+ Fahrzeugen",
    ru: "Taluma rent a car — автопарк 60+ автомобилей",
    fr: "Taluma rent a car — flotte de 60+ véhicules",
    pl: "Taluma rent a car — flota 60+ pojazdów",
    tr: "Taluma rent a car — 60+ araçlık filo",
  },
  "hero.title.rent": {
    me: "Iznajmite auto u Crnoj Gori",
    en: "Rent a Car in Montenegro",
    de: "Mietwagen in Montenegro",
    ru: "Аренда авто в Черногории",
    fr: "Location de voiture au Monténégro",
    pl: "Wynajem samochodu w Czarnogórze",
    tr: "Karadağ'da Araba Kiralama",
  },
  "hero.title.transfer": {
    me: "Transfer usluge u Crnoj Gori",
    en: "Transfer Services in Montenegro",
    de: "Transferdienste in Montenegro",
    ru: "Трансфер в Черногории",
    fr: "Services de transfert au Monténégro",
    pl: "Usługi transferowe w Czarnogórze",
    tr: "Karadağ'da Transfer Hizmetleri",
  },
  "hero.subtitle.rent": {
    me: "Pouzdana lokalna rent-a-car agencija sa flotom od 60+ vozila. Bez skrivenih troškova, brza isporuka na cijelu Crnu Goru.",
    en: "Trusted local rent-a-car agency with a fleet of 60+ vehicles. No hidden fees, fast delivery anywhere in Montenegro.",
    de: "Vertrauenswürdige lokale Autovermietung mit über 60 Fahrzeugen. Keine versteckten Kosten, schnelle Zustellung in ganz Montenegro.",
    ru: "Надёжная местная компания по аренде авто с автопарком 60+ машин. Без скрытых платежей, быстрая доставка по всей Черногории.",
    fr: "Agence locale de location de voitures fiable avec une flotte de 60+ véhicules. Sans frais cachés, livraison rapide partout au Monténégro.",
    pl: "Zaufana lokalna wypożyczalnia samochodów z flotą 60+ pojazdów. Bez ukrytych opłat, szybka dostawa w całej Czarnogórze.",
    tr: "Karadağ'da 60+ araçlık filosuyla güvenilir yerel kiralama acentesi. Gizli ücret yok, ülke genelinde hızlı teslimat.",
  },
  "hero.subtitle.transfer": {
    me: "Profesionalni transferi sa aerodroma i između gradova. Komforna vozila, pouzdani vozači, fiksne cijene.",
    en: "Professional airport and intercity transfers. Comfortable vehicles, reliable drivers, fixed prices.",
    de: "Professionelle Flughafen- und Stadttransfers. Komfortable Fahrzeuge, zuverlässige Fahrer, Festpreise.",
    ru: "Профессиональные трансферы из аэропорта и между городами. Комфортные автомобили, надёжные водители, фиксированные цены.",
    fr: "Transferts professionnels depuis l'aéroport et entre les villes. Véhicules confortables, chauffeurs fiables, prix fixes.",
    pl: "Profesjonalne transfery lotniskowe i międzymiastowe. Komfortowe pojazdy, niezawodni kierowcy, stałe ceny.",
    tr: "Profesyonel havalimanı ve şehirlerarası transferler. Konforlu araçlar, güvenilir sürücüler, sabit fiyatlar.",
  },

  // Tabs
  "tab.rentacar": {
    me: "Rent a Car", en: "Rent a Car", de: "Mietwagen", ru: "Аренда авто",
    fr: "Location de voiture", pl: "Wynajem auta", tr: "Araba Kiralama",
  },
  "tab.transfer": {
    me: "Transfer", en: "Transfer", de: "Transfer", ru: "Трансфер",
    fr: "Transfert", pl: "Transfer", tr: "Transfer",
  },

  // Form - Rent a Car
  "form.pickup": {
    me: "Lokacija preuzimanja", en: "Pick-up location", de: "Abholort", ru: "Место получения",
    fr: "Lieu de prise en charge", pl: "Miejsce odbioru", tr: "Alış yeri",
  },
  "form.dropoff": {
    me: "Lokacija vraćanja", en: "Drop-off location", de: "Rückgabeort", ru: "Место возврата",
    fr: "Lieu de restitution", pl: "Miejsce zwrotu", tr: "Bırakış yeri",
  },
  "form.pickupDate": {
    me: "Datum preuzimanja", en: "Pick-up date", de: "Abholdatum", ru: "Дата получения",
    fr: "Date de prise en charge", pl: "Data odbioru", tr: "Alış tarihi",
  },
  "form.dropoffDate": {
    me: "Datum vraćanja", en: "Drop-off date", de: "Rückgabedatum", ru: "Дата возврата",
    fr: "Date de restitution", pl: "Data zwrotu", tr: "Bırakış tarihi",
  },
  "form.carType": {
    me: "Tip vozila", en: "Car type", de: "Fahrzeugtyp", ru: "Тип автомобиля",
    fr: "Type de véhicule", pl: "Typ pojazdu", tr: "Araç tipi",
  },
  "form.name": {
    me: "Vaše ime", en: "Your name", de: "Ihr Name", ru: "Ваше имя",
    fr: "Votre nom", pl: "Twoje imię", tr: "Adınız",
  },
  "form.phone": {
    me: "Telefon / WhatsApp", en: "Phone / WhatsApp", de: "Telefon / WhatsApp", ru: "Телефон / WhatsApp",
    fr: "Téléphone / WhatsApp", pl: "Telefon / WhatsApp", tr: "Telefon / WhatsApp",
  },
  "form.email": {
    me: "Email (opciono)", en: "Email (optional)", de: "E-Mail (optional)", ru: "Email (необязательно)",
    fr: "Email (facultatif)", pl: "Email (opcjonalnie)", tr: "E-posta (isteğe bağlı)",
  },
  "form.message": {
    me: "Dodatne napomene", en: "Additional notes", de: "Zusätzliche Anmerkungen", ru: "Дополнительные примечания",
    fr: "Notes supplémentaires", pl: "Dodatkowe uwagi", tr: "Ek notlar",
  },
  "form.submit": {
    me: "Pošaljite upit", en: "Send inquiry", de: "Anfrage senden", ru: "Отправить запрос",
    fr: "Envoyer la demande", pl: "Wyślij zapytanie", tr: "Talep gönder",
  },
  "form.submitWhatsapp": {
    me: "Pošaljite preko WhatsApp-a", en: "Send via WhatsApp", de: "Über WhatsApp senden", ru: "Отправить через WhatsApp",
    fr: "Envoyer via WhatsApp", pl: "Wyślij przez WhatsApp", tr: "WhatsApp ile gönder",
  },

  // Form - Transfer
  "form.from": {
    me: "Odakle", en: "From", de: "Von", ru: "Откуда",
    fr: "De", pl: "Skąd", tr: "Nereden",
  },
  "form.to": {
    me: "Dokle", en: "To", de: "Nach", ru: "Куда",
    fr: "À", pl: "Dokąd", tr: "Nereye",
  },
  "form.date": {
    me: "Datum", en: "Date", de: "Datum", ru: "Дата",
    fr: "Date", pl: "Data", tr: "Tarih",
  },
  "form.time": {
    me: "Vrijeme", en: "Time", de: "Uhrzeit", ru: "Время",
    fr: "Heure", pl: "Godzina", tr: "Saat",
  },
  "form.passengers": {
    me: "Broj putnika", en: "Number of passengers", de: "Anzahl der Passagiere", ru: "Количество пассажиров",
    fr: "Nombre de passagers", pl: "Liczba pasażerów", tr: "Yolcu sayısı",
  },
  "form.flightNumber": {
    me: "Broj leta (opciono)", en: "Flight number (optional)", de: "Flugnummer (optional)", ru: "Номер рейса (необязательно)",
    fr: "Numéro de vol (facultatif)", pl: "Numer lotu (opcjonalnie)", tr: "Uçuş numarası (isteğe bağlı)",
  },

  // Car types
  "car.economy": {
    me: "Ekonomija", en: "Economy", de: "Economy", ru: "Эконом",
    fr: "Économique", pl: "Ekonomiczny", tr: "Ekonomi",
  },
  "car.compact": {
    me: "Kompakt", en: "Compact", de: "Kompakt", ru: "Компакт",
    fr: "Compact", pl: "Kompaktowy", tr: "Kompakt",
  },
  "car.suv": {
    me: "SUV / Džip", en: "SUV", de: "SUV / Geländewagen", ru: "Внедорожник",
    fr: "SUV", pl: "SUV / Terenowy", tr: "SUV / Arazi",
  },
  "car.van": {
    me: "Kombi / Van", en: "Van / Minivan", de: "Van / Minivan", ru: "Минивэн",
    fr: "Van / Monospace", pl: "Van / Minivan", tr: "Van / Minivan",
  },
  "car.luxury": {
    me: "Luksuz", en: "Luxury", de: "Luxus", ru: "Люкс",
    fr: "Luxe", pl: "Luksusowy", tr: "Lüks",
  },
  "car.any": {
    me: "Svejedno", en: "Any", de: "Egal", ru: "Любой",
    fr: "Peu importe", pl: "Dowolny", tr: "Farketmez",
  },

  // Trust Section
  "trust.title": {
    me: "Zašto Taluma?", en: "Why Taluma?", de: "Warum Taluma?", ru: "Почему Taluma?",
    fr: "Pourquoi Taluma ?", pl: "Dlaczego Taluma?", tr: "Neden Taluma?",
  },
  "trust.local.title": {
    me: "Lokalni tim", en: "Local team", de: "Lokales Team", ru: "Местная команда",
    fr: "Équipe locale", pl: "Lokalny zespół", tr: "Yerel ekip",
  },
  "trust.local.desc": {
    me: "Sa sjedištem u Podgorici. Lokalni tim koji poznaje crnogorske puteve i pomaže vam u svakom trenutku.",
    en: "Based in Podgorica. A local team that knows Montenegrin roads and is here to help at any moment.",
    de: "Sitz in Podgorica. Ein lokales Team, das Montenegros Straßen kennt und Ihnen jederzeit hilft.",
    ru: "Офис в Подгорице. Местная команда, которая знает дороги Черногории и поможет в любой момент.",
    fr: "Basée à Podgorica. Une équipe locale qui connaît les routes du Monténégro et vous aide à tout moment.",
    pl: "Siedziba w Podgoricy. Lokalny zespół, który zna czarnogórskie drogi i pomoże w każdej chwili.",
    tr: "Merkez ofisimiz Podgorica'da. Karadağ yollarını bilen yerel ekibimiz her an yanınızda.",
  },
  "trust.fast.title": {
    me: "Odgovor za 5–10 minuta", en: "Response in 5–10 minutes", de: "Antwort in 2 Stunden", ru: "Ответ за 2 часа",
    fr: "Réponse en 2 heures", pl: "Odpowiedź w 2 godziny", tr: "2 saat içinde yanıt",
  },
  "trust.fast.desc": {
    me: "Odgovaramo u roku od 5–10 minuta i organizujemo isporuku vozila na adresu po vašem izboru.",
    en: "We reply within 5–10 minutes and deliver the vehicle to the address of your choice.",
    de: "Wir antworten innerhalb von 5–10 Minuten und liefern das Fahrzeug an die gewünschte Adresse.",
    ru: "Отвечаем в течение 5–10 минут и доставляем автомобиль на удобный для вас адрес.",
    fr: "Nous répondons sous 5–10 minutes et livrons le véhicule à l'adresse de votre choix.",
    pl: "Odpowiadamy w 5–10 minut i dowozimy pojazd pod wskazany adres.",
    tr: "5–10 dakika içinde yanıtlıyor, aracı dilediğiniz adrese teslim ediyoruz.",
  },
  "trust.price.title": {
    me: "Transparentne cijene", en: "Transparent pricing", de: "Transparente Preise", ru: "Прозрачные цены",
    fr: "Prix transparents", pl: "Przejrzyste ceny", tr: "Şeffaf fiyatlar",
  },
  "trust.price.desc": {
    me: "Cijena uključuje osiguranje, neograničenu kilometražu i 24/7 podršku. Bez skrivenih troškova.",
    en: "Price includes insurance, unlimited mileage and 24/7 support. No hidden fees.",
    de: "Preis inklusive Versicherung, unbegrenzten Kilometern und 24/7-Support. Keine versteckten Kosten.",
    ru: "Цена включает страховку, неограниченный пробег и поддержку 24/7. Без скрытых платежей.",
    fr: "Le prix comprend l'assurance, le kilométrage illimité et un support 24/7. Sans frais cachés.",
    pl: "Cena obejmuje ubezpieczenie, nielimitowany przebieg i wsparcie 24/7. Bez ukrytych opłat.",
    tr: "Fiyata sigorta, sınırsız kilometre ve 7/24 destek dahildir. Gizli ücret yoktur.",
  },
  "trust.support.title": {
    me: "Podrška 24/7", en: "24/7 support", de: "24/7-Support", ru: "Поддержка 24/7",
    fr: "Support 24/7", pl: "Wsparcie 24/7", tr: "7/24 destek",
  },
  "trust.support.desc": {
    me: "Naš tim je dostupan u svako doba — WhatsApp, telefon ili email — za pomoć tokom putovanja.",
    en: "Our team is reachable any time — WhatsApp, phone or email — to help during your trip.",
    de: "Unser Team ist jederzeit per WhatsApp, Telefon oder E-Mail für Sie da.",
    ru: "Наша команда на связи в любое время через WhatsApp, телефон или email на протяжении всей поездки.",
    fr: "Notre équipe est joignable à tout moment via WhatsApp, téléphone ou email pendant votre voyage.",
    pl: "Nasz zespół jest dostępny przez całą dobę — WhatsApp, telefon lub email — w trakcie podróży.",
    tr: "Ekibimiz her an WhatsApp, telefon veya e-posta ile yolculuğunuz boyunca yanınızda.",
  },

  // How it works
  "how.title": {
    me: "Kako funkcioniše?", en: "How does it work?", de: "Wie funktioniert es?", ru: "Как это работает?",
    fr: "Comment ça marche ?", pl: "Jak to działa?", tr: "Nasıl çalışır?",
  },
  "how.step1.title": {
    me: "Pošaljite upit", en: "Send an inquiry", de: "Anfrage senden", ru: "Отправьте запрос",
    fr: "Envoyez une demande", pl: "Wyślij zapytanie", tr: "Talep gönderin",
  },
  "how.step1.desc": {
    me: "Popunite kratku formu ili nam pišite na WhatsApp sa datumima i željenim tipom vozila iz naše flote.",
    en: "Fill out the short form or message us on WhatsApp with your dates and preferred vehicle from our fleet.",
    de: "Füllen Sie das kurze Formular aus oder schreiben Sie uns auf WhatsApp mit Daten und dem Wunschfahrzeug aus unserer Flotte.",
    ru: "Заполните короткую форму или напишите нам в WhatsApp с датами и желаемым автомобилем из нашего автопарка.",
    fr: "Remplissez le formulaire ou écrivez-nous sur WhatsApp avec vos dates et le véhicule souhaité dans notre flotte.",
    pl: "Wypełnij krótki formularz lub napisz na WhatsApp z datami i preferowanym pojazdem z naszej floty.",
    tr: "Kısa formu doldurun veya tarihler ve filomuzdaki tercih ettiğiniz araçla WhatsApp'tan bize yazın.",
  },
  "how.step2.title": {
    me: "Dobijte ponudu", en: "Get a quote", de: "Angebot erhalten", ru: "Получите предложение",
    fr: "Recevez une offre", pl: "Otrzymaj wycenę", tr: "Teklif alın",
  },
  "how.step2.desc": {
    me: "U roku od 5–10 minuta šaljemo vam ponudu sa ukupnom cijenom — bez skrivenih troškova.",
    en: "Within 5–10 minutes we send a clear all-in quote — no hidden fees.",
    de: "Innerhalb von 5–10 Minuten senden wir Ihnen ein All-in-Angebot — ohne versteckte Kosten.",
    ru: "В течение 5–10 минут отправляем вам прозрачное предложение — без скрытых платежей.",
    fr: "Sous 5–10 minutes, nous vous envoyons un devis tout compris — sans frais cachés.",
    pl: "W 5–10 minut wysyłamy przejrzystą wycenę all-inclusive — bez ukrytych opłat.",
    tr: "5–10 dakika içinde net ve her şey dahil bir teklif gönderiyoruz — gizli ücret yok.",
  },
  "how.step3.title": {
    me: "Preuzmite auto", en: "Pick up the car", de: "Auto übernehmen", ru: "Заберите авто",
    fr: "Récupérez la voiture", pl: "Odbierz samochód", tr: "Aracı teslim alın",
  },
  "how.step3.desc": {
    me: "Dostavljamo vozilo na aerodrom, hotel ili adresu po vašem izboru u Crnoj Gori.",
    en: "We deliver the car to the airport, hotel or any address you choose in Montenegro.",
    de: "Wir liefern das Fahrzeug an Flughafen, Hotel oder die gewünschte Adresse in Montenegro.",
    ru: "Доставим автомобиль в аэропорт, отель или на любой адрес в Черногории.",
    fr: "Nous livrons le véhicule à l'aéroport, à l'hôtel ou à toute adresse au Monténégro.",
    pl: "Dowozimy auto na lotnisko, do hotelu lub pod dowolny adres w Czarnogórze.",
    tr: "Aracı havalimanına, otele veya Karadağ'da seçtiğiniz adrese teslim ediyoruz.",
  },

  // Locations
  "locations.title": {
    me: "Dostupne lokacije", en: "Available locations", de: "Verfügbare Standorte", ru: "Доступные локации",
    fr: "Emplacements disponibles", pl: "Dostępne lokalizacje", tr: "Mevcut lokasyonlar",
  },
  "locations.subtitle": {
    me: "Pokrivamo cijelu Crnu Goru - od aerodroma do najudaljenijih destinacija",
    en: "We cover all of Montenegro - from airports to the most remote destinations",
    de: "Wir decken ganz Montenegro ab - von Flughäfen bis zu den entlegensten Zielen",
    ru: "Мы покрываем всю Черногорию - от аэропортов до самых отдалённых направлений",
    fr: "Nous couvrons tout le Monténégro - des aéroports aux destinations les plus reculées",
    pl: "Obejmujemy całą Czarnogórę - od lotnisk po najbardziej odległe miejsca",
    tr: "Havalimanlarından en uzak destinasyonlara kadar tüm Karadağ'ı kapsıyoruz",
  },
  "locations.viewMore": {
    me: "Pogledajte ponudu", en: "View offers", de: "Angebote ansehen", ru: "Смотреть предложения",
    fr: "Voir les offres", pl: "Zobacz oferty", tr: "Teklifleri görüntüle",
  },

  // Fleet
  "partners.title": {
    me: "Naša flota", en: "Our fleet", de: "Unsere Flotte", ru: "Наш автопарк",
    fr: "Notre flotte", pl: "Nasza flota", tr: "Filomuz",
  },
  "partners.subtitle": {
    me: "60+ vozila — od ekonomske klase do SUV-a i luksuznih modela",
    en: "60+ vehicles — from economy class to SUVs and luxury models",
    de: "Über 60 Fahrzeuge — von der Economy-Klasse bis zu SUVs und Luxusmodellen",
    ru: "60+ автомобилей — от эконом-класса до внедорожников и люкс-моделей",
    fr: "60+ véhicules — de la classe économique aux SUV et modèles de luxe",
    pl: "60+ pojazdów — od klasy ekonomicznej po SUV-y i modele luksusowe",
    tr: "60+ araç — ekonomi sınıfından SUV ve lüks modellere",
  },

  // FAQ
  "faq.title": {
    me: "Često postavljana pitanja", en: "Frequently asked questions", de: "Häufig gestellte Fragen", ru: "Часто задаваемые вопросы",
    fr: "Questions fréquemment posées", pl: "Często zadawane pytania", tr: "Sıkça sorulan sorular",
  },
  "faq.q1": {
    me: "Da li je potrebna kreditna kartica?", en: "Is a credit card required?", de: "Ist eine Kreditkarte erforderlich?", ru: "Нужна ли кредитная карта?",
    fr: "Une carte de crédit est-elle nécessaire ?", pl: "Czy karta kredytowa jest wymagana?", tr: "Kredi kartı gerekli mi?",
  },
  "faq.a1": {
    me: "Nudimo opciju bez kreditne kartice i bez depozita za većinu vozila iz naše flote. Navedite to u upitu i pripremićemo vam odgovarajuću ponudu.",
    en: "We offer no-credit-card and no-deposit options for most vehicles in our fleet. Mention it in your inquiry and we'll prepare a suitable offer.",
    de: "Für die meisten Fahrzeuge unserer Flotte bieten wir Optionen ohne Kreditkarte und ohne Kaution. Erwähnen Sie es in Ihrer Anfrage.",
    ru: "Для большинства автомобилей нашего автопарка доступна аренда без кредитной карты и без залога. Укажите это в запросе.",
    fr: "Nous proposons des options sans carte de crédit et sans caution pour la plupart des véhicules de notre flotte. Mentionnez-le dans votre demande.",
    pl: "Dla większości pojazdów oferujemy opcje bez karty kredytowej i bez depozytu. Wspomnij o tym w zapytaniu.",
    tr: "Filomuzdaki çoğu araç için kredi kartsız ve depozitosuz seçenekler sunuyoruz. Talebinizde belirtmeniz yeterli.",
  },
  "faq.q2": {
    me: "Koji dokumenti su potrebni?", en: "What documents are required?", de: "Welche Dokumente werden benötigt?", ru: "Какие документы нужны?",
    fr: "Quels documents sont nécessaires ?", pl: "Jakie dokumenty są wymagane?", tr: "Hangi belgeler gereklidir?",
  },
  "faq.a2": {
    me: "Potrebni su vam pasoš ili lična karta i važeća vozačka dozvola. Za državljane van EU, preporučuje se međunarodna vozačka dozvola.",
    en: "You need a passport or ID card and a valid driver's license. For non-EU citizens, an international driving permit is recommended.",
    de: "Sie benötigen einen Reisepass oder Personalausweis und einen gültigen Führerschein. Für Nicht-EU-Bürger wird ein internationaler Führerschein empfohlen.",
    ru: "Вам нужен паспорт или удостоверение личности и действующие водительские права. Для граждан не из ЕС рекомендуется международное водительское удостоверение.",
    fr: "Vous avez besoin d'un passeport ou d'une carte d'identité et d'un permis de conduire valide. Pour les citoyens hors UE, un permis international est recommandé.",
    pl: "Potrzebujesz paszportu lub dowodu osobistego i ważnego prawa jazdy. Dla obywateli spoza UE zalecane jest międzynarodowe prawo jazdy.",
    tr: "Pasaport veya kimlik kartı ve geçerli bir ehliyet gereklidir. AB dışı vatandaşlar için uluslararası ehliyet önerilir.",
  },
  "faq.q3": {
    me: "Mogu li preuzeti auto na aerodromu?", en: "Can I pick up the car at the airport?", de: "Kann ich das Auto am Flughafen abholen?", ru: "Могу ли я забрать машину в аэропорту?",
    fr: "Puis-je récupérer la voiture à l'aéroport ?", pl: "Czy mogę odebrać samochód na lotnisku?", tr: "Aracı havalimanından alabilir miyim?",
  },
  "faq.a3": {
    me: "Da! Nudimo preuzimanje na aerodromima Podgorica (TGD) i Tivat (TIV), kao i na bilo kojoj lokaciji u Crnoj Gori.",
    en: "Yes! We offer pick-up at Podgorica (TGD) and Tivat (TIV) airports, as well as any location in Montenegro.",
    de: "Ja! Wir bieten Abholung an den Flughäfen Podgorica (TGD) und Tivat (TIV) sowie an jedem Ort in Montenegro.",
    ru: "Да! Мы предлагаем получение в аэропортах Подгорица (TGD) и Тиват (TIV), а также в любом месте Черногории.",
    fr: "Oui ! Nous proposons la prise en charge aux aéroports de Podgorica (TGD) et Tivat (TIV), ainsi qu'à tout endroit au Monténégro.",
    pl: "Tak! Oferujemy odbiór na lotniskach Podgorica (TGD) i Tivat (TIV), a także w dowolnym miejscu w Czarnogórze.",
    tr: "Evet! Podgorica (TGD) ve Tivat (TIV) havalimanlarında ve Karadağ'ın herhangi bir yerinde teslim sunuyoruz.",
  },
  "faq.q4": {
    me: "Koliko košta iznajmljivanje auta?", en: "How much does it cost to rent a car?", de: "Wie viel kostet es, ein Auto zu mieten?", ru: "Сколько стоит аренда автомобиля?",
    fr: "Combien coûte la location d'une voiture ?", pl: "Ile kosztuje wynajem samochodu?", tr: "Araba kiralamak ne kadar?",
  },
  "faq.a4": {
    me: "Cijene počinju od 40€ dnevno za ekonomiju klasu, do 100€+ za SUV u sezoni. Što ranije rezervišete, cijene mogu biti niže! Pošaljite upit za tačnu cijenu.",
    en: "Prices start from €40/day for economy class, up to €100+/day for SUVs in high season. The earlier you book, the lower the price can be! Send an inquiry for exact pricing.",
    de: "Die Preise beginnen bei 40€/Tag für Economy bis 100€+/Tag für SUVs in der Hochsaison. Je früher Sie buchen, desto günstiger! Senden Sie eine Anfrage für genaue Preise.",
    ru: "Цены начинаются от 40€/день за эконом-класс, до 100€+/день за внедорожник в сезон. Чем раньше бронируете, тем ниже цена! Отправьте запрос.",
    fr: "Les prix commencent à 40€/jour pour la classe économique, jusqu'à 100€+/jour pour les SUV en haute saison. Plus vous réservez tôt, moins c'est cher ! Envoyez une demande.",
    pl: "Ceny zaczynają się od 40€/dzień za klasę ekonomiczną, do 100€+/dzień za SUV w sezonie. Im wcześniej zarezerwujesz, tym taniej! Wyślij zapytanie.",
    tr: "Fiyatlar ekonomi sınıfı için günlük 40€'dan başlar, yüksek sezonda SUV için 100€+'ya kadar çıkar. Erken rezervasyon yaparsanız daha ucuz! Talep gönderin.",
  },
  "faq.q5": {
    me: "Da li mogu voziti van Crne Gore?", en: "Can I drive outside Montenegro?", de: "Kann ich außerhalb Montenegros fahren?", ru: "Можно ли ездить за пределы Черногории?",
    fr: "Puis-je conduire en dehors du Monténégro ?", pl: "Czy mogę jeździć poza Czarnogórą?", tr: "Karadağ dışında araç kullanabilir miyim?",
  },
  "faq.a5": {
    me: "Dozvoljavamo vožnju u susjedne zemlje (Hrvatska, Srbija, BiH, Albanija) uz prethodno odobrenje. Navedite destinaciju u upitu.",
    en: "We allow driving to neighboring countries (Croatia, Serbia, Bosnia, Albania) with prior approval. Mention the destination in your inquiry.",
    de: "Fahrten in Nachbarländer (Kroatien, Serbien, Bosnien, Albanien) sind mit vorheriger Genehmigung erlaubt. Geben Sie das Ziel in der Anfrage an.",
    ru: "Поездки в соседние страны (Хорватия, Сербия, Босния, Албания) разрешены с предварительным согласованием. Укажите направление в запросе.",
    fr: "Nous autorisons la conduite dans les pays voisins (Croatie, Serbie, Bosnie, Albanie) avec accord préalable. Précisez la destination dans votre demande.",
    pl: "Pozwalamy na jazdę do krajów sąsiednich (Chorwacja, Serbia, Bośnia, Albania) po wcześniejszym uzgodnieniu. Podaj cel w zapytaniu.",
    tr: "Önceden onay ile komşu ülkelere (Hırvatistan, Sırbistan, Bosna, Arnavutluk) araç kullanmaya izin veriyoruz. Talebinizde destinasyonu belirtin.",
  },
  "faq.q6": {
    me: "Da li je osiguranje uključeno?", en: "Is insurance included?", de: "Ist eine Versicherung inbegriffen?", ru: "Включена ли страховка?",
    fr: "L'assurance est-elle incluse ?", pl: "Czy ubezpieczenie jest wliczone?", tr: "Sigorta dahil mi?",
  },
  "faq.q7": {
    me: "Da li tražite depozit ili ima skrivenih troškova?",
    en: "Do you require a deposit or any hidden fees?",
    de: "Verlangen Sie eine Kaution oder gibt es versteckte Kosten?",
    ru: "Требуется ли депозит или есть скрытые платежи?",
    fr: "Demandez-vous une caution ou y a-t-il des frais cachés ?",
    pl: "Czy wymagacie depozytu lub są jakieś ukryte opłaty?",
    tr: "Depozito veya gizli ücret talep ediyor musunuz?",
  },
  "faq.q8": {
    me: "Da li dostavljate auto na aerodrom?",
    en: "Do you deliver the car to the airport?",
    de: "Liefern Sie das Auto zum Flughafen?",
    ru: "Доставляете ли вы автомобиль в аэропорт?",
    fr: "Livrez-vous la voiture à l'aéroport ?",
    pl: "Czy dostarczacie samochód na lotnisko?",
    tr: "Aracı havalimanına teslim ediyor musunuz?",
  },
  "faq.q9": {
    me: "Mogu li voziti van Crne Gore i koliko košta?",
    en: "Can I drive outside Montenegro and how much does it cost?",
    de: "Kann ich außerhalb Montenegros fahren und was kostet das?",
    ru: "Можно ли выезжать за пределы Черногории и сколько это стоит?",
    fr: "Puis-je conduire hors du Monténégro et combien cela coûte-t-il ?",
    pl: "Czy mogę wyjechać poza Czarnogórę i ile to kosztuje?",
    tr: "Karadağ dışına çıkabilir miyim ve ne kadar?",
  },
  "faq.q10": {
    me: "Da li dajete popust ako se odlučim za vozilo?",
    en: "Do you offer a discount if I decide on a vehicle?",
    de: "Bieten Sie einen Rabatt, wenn ich mich für ein Fahrzeug entscheide?",
    ru: "Есть ли скидка, если я уже выбрал автомобиль?",
    fr: "Offrez-vous une remise si je choisis un véhicule ?",
    pl: "Czy oferujecie rabat, jeśli zdecyduję się na pojazd?",
    tr: "Bir aracı seçersem indirim sunuyor musunuz?",
  },
  "faq.a7": {
    me: "Ne tražimo depozit i nemamo skrivene troškove za većinu vozila iz flote. Cijena uključuje osnovno osiguranje i neograničenu kilometražu u Crnoj Gori — što kažemo, to platite.",
    en: "We do not require a deposit and there are no hidden fees for most fleet vehicles. The price includes basic insurance and unlimited mileage within Montenegro — what we say is what you pay.",
    de: "Wir verlangen keine Kaution und haben für die meisten Fahrzeuge keine versteckten Kosten. Der Preis enthält Grundversicherung und unbegrenzte Kilometer in Montenegro — was wir nennen, zahlen Sie.",
    ru: "Мы не требуем депозит и не берём скрытых платежей для большинства автомобилей. Цена включает базовую страховку и неограниченный пробег по Черногории — сколько называем, столько и платите.",
    fr: "Nous ne demandons pas de caution et n'avons pas de frais cachés pour la plupart des véhicules. Le prix inclut l'assurance de base et un kilométrage illimité au Monténégro — ce que nous annonçons, vous le payez.",
    pl: "Nie wymagamy depozytu i nie mamy ukrytych opłat dla większości pojazdów. Cena obejmuje podstawowe ubezpieczenie i nielimitowany przebieg w Czarnogórze — ile podajemy, tyle płacisz.",
    tr: "Filomuzdaki çoğu araç için depozito istemiyoruz ve gizli ücret yok. Fiyat, Karadağ içinde temel sigorta ve sınırsız kilometre dahildir — söylediğimiz fiyatı ödersiniz.",
  },
  "faq.a8": {
    me: "Dostava na aerodrom Podgorica je besplatna. Dostava na aerodrom Tivat je 20€. Možemo dostaviti i na hotel, adresu ili bilo koju lokaciju u Crnoj Gori.",
    en: "Delivery to Podgorica Airport is free. Delivery to Tivat Airport is €20. We can also deliver to your hotel, address, or any location in Montenegro.",
    de: "Die Zustellung zum Flughafen Podgorica ist kostenlos. Die Zustellung zum Flughafen Tivat kostet 20 €. Wir liefern auch ins Hotel oder an jede Adresse in Montenegro.",
    ru: "Доставка в аэропорт Подгорица — бесплатно. В аэропорт Тиват — 20 €. Также доставляем в отель или на любой адрес в Черногории.",
    fr: "La livraison à l'aéroport de Podgorica est gratuite. La livraison à l'aéroport de Tivat coûte 20 €. Nous livrons aussi à l'hôtel ou à toute adresse au Monténégro.",
    pl: "Dostawa na lotnisko Podgorica jest bezpłatna. Dostawa na lotnisko Tivat: 20 €. Możemy też dostarczyć do hotelu lub pod dowolny adres w Czarnogórze.",
    tr: "Podgorica Havalimanı'na teslimat ücretsizdir. Tivat Havalimanı'na teslimat 20 €'dur. Otele veya Karadağ'da herhangi bir adrese de teslim ediyoruz.",
  },
  "faq.a9": {
    me: "Cijene koje navodimo važe samo za Crnu Goru. Za vožnju van Crne Gore (Hrvatska, Srbija, BiH, Albanija) važi doplata od 15€ po danu, uz prethodno odobrenje.",
    en: "The prices listed apply within Montenegro only. For travel outside Montenegro (Croatia, Serbia, Bosnia, Albania), an additional €15 per day applies, with prior approval.",
    de: "Die angegebenen Preise gelten nur innerhalb Montenegros. Für Fahrten ins Ausland (Kroatien, Serbien, Bosnien, Albanien) fallen mit Vorabgenehmigung zusätzlich 15 €/Tag an.",
    ru: "Указанные цены действуют только на территории Черногории. Для поездок за границу (Хорватия, Сербия, Босния, Албания) доплата 15 € в день, с предварительным согласованием.",
    fr: "Les prix indiqués s'appliquent uniquement au Monténégro. Pour voyager hors du Monténégro (Croatie, Serbie, Bosnie, Albanie), un supplément de 15 € par jour s'applique, avec accord préalable.",
    pl: "Podane ceny obowiązują tylko w Czarnogórze. Za podróże poza Czarnogórą (Chorwacja, Serbia, Bośnia, Albania) obowiązuje dopłata 15 €/dzień, po wcześniejszej zgodzie.",
    tr: "Belirtilen fiyatlar yalnızca Karadağ için geçerlidir. Karadağ dışına (Hırvatistan, Sırbistan, Bosna, Arnavutluk) günlük 15 € ek ücret uygulanır, önceden onayla.",
  },
  "faq.a10": {
    me: "Ako se odlučite za konkretno vozilo iz naše flote, javite nam — možemo ponuditi mali popust na ukupnu cijenu rezervacije.",
    en: "If you decide on a specific vehicle from our fleet, let us know — we can offer a small discount on the total reservation price.",
    de: "Wenn Sie sich für ein bestimmtes Fahrzeug aus unserer Flotte entschieden haben, sagen Sie uns Bescheid — wir können einen kleinen Rabatt auf den Gesamtpreis anbieten.",
    ru: "Если вы выбрали конкретный автомобиль из автопарка — сообщите нам, и мы дадим небольшую скидку от итоговой цены.",
    fr: "Si vous choisissez un véhicule précis de notre flotte, dites-le nous — nous pouvons offrir une petite remise sur le prix total.",
    pl: "Jeśli zdecydujesz się na konkretny pojazd z naszej floty, daj nam znać — możemy zaproponować niewielki rabat od całkowitej ceny.",
    tr: "Filomuzdan belirli bir aracı seçtiyseniz bize bildirin — toplam fiyatta küçük bir indirim sunabiliriz.",
  },
  "faq.a6": {
    me: "Da, osnovno osiguranje (CDW) je uključeno u cijenu za sva vozila iz naše flote. Full coverage je dostupan uz doplatu.",
    en: "Yes, basic insurance (CDW) is included in the price for all our fleet vehicles. Full coverage is available for an extra fee.",
    de: "Ja, die Grundversicherung (CDW) ist im Preis für alle Fahrzeuge unserer Flotte enthalten. Vollkasko ist gegen Aufpreis erhältlich.",
    ru: "Да, базовая страховка (CDW) включена в стоимость для всех автомобилей нашего автопарка. Полное покрытие доступно за дополнительную плату.",
    fr: "Oui, l'assurance de base (CDW) est incluse dans le prix pour tous les véhicules de notre flotte. La couverture totale est disponible moyennant un supplément.",
    pl: "Tak, podstawowe ubezpieczenie (CDW) jest wliczone w cenę dla wszystkich pojazdów naszej floty. Pełne ubezpieczenie dostępne za dopłatą.",
    tr: "Evet, temel sigorta (CDW) filomuzdaki tüm araçlarda fiyata dahildir. Tam kapsamlı sigorta ek ücretle mevcuttur.",
  },

  // Footer
  "footer.desc": {
    me: "Taluma rent a car — lokalna agencija iz Podgorice. Flota od 60+ vozila, isporuka po cijeloj Crnoj Gori, transparentne cijene i podrška 24/7.",
    en: "Taluma rent a car — local agency based in Podgorica. Fleet of 60+ vehicles, delivery across Montenegro, transparent pricing and 24/7 support.",
    de: "Taluma rent a car — lokale Agentur aus Podgorica. Über 60 Fahrzeuge, Lieferung in ganz Montenegro, transparente Preise und 24/7-Support.",
    ru: "Taluma rent a car — местная компания из Подгорицы. Автопарк 60+ авто, доставка по всей Черногории, прозрачные цены и поддержка 24/7.",
    fr: "Taluma rent a car — agence locale basée à Podgorica. Flotte de 60+ véhicules, livraison dans tout le Monténégro, prix transparents et support 24/7.",
    pl: "Taluma rent a car — lokalna agencja z Podgoricy. Flota 60+ pojazdów, dostawa w całej Czarnogórze, przejrzyste ceny i wsparcie 24/7.",
    tr: "Taluma rent a car — Podgorica merkezli yerel kiralama acentesi. 60+ araçlık filo, Karadağ genelinde teslimat, şeffaf fiyat ve 7/24 destek.",
  },
  "footer.links": {
    me: "Brzi linkovi", en: "Quick links", de: "Schnelllinks", ru: "Быстрые ссылки",
    fr: "Liens rapides", pl: "Szybkie linki", tr: "Hızlı bağlantılar",
  },
  "footer.popular": {
    me: "Popularne lokacije", en: "Popular locations", de: "Beliebte Standorte", ru: "Популярные локации",
    fr: "Emplacements populaires", pl: "Popularne lokalizacje", tr: "Popüler lokasyonlar",
  },
  "footer.contact": {
    me: "Kontakt", en: "Contact", de: "Kontakt", ru: "Контакт",
    fr: "Contact", pl: "Kontakt", tr: "İletişim",
  },
  "footer.rights": {
    me: "Sva prava zadržana.", en: "All rights reserved.", de: "Alle Rechte vorbehalten.", ru: "Все права защищены.",
    fr: "Tous droits réservés.", pl: "Wszelkie prawa zastrzeżone.", tr: "Tüm hakları saklıdır.",
  },

  // CTA
  "cta.title": {
    me: "Spremni za avanturu u Crnoj Gori?", en: "Ready for an adventure in Montenegro?", de: "Bereit für ein Abenteuer in Montenegro?", ru: "Готовы к приключению в Черногории?",
    fr: "Prêt pour une aventure au Monténégro ?", pl: "Gotowy na przygodę w Czarnogórze?", tr: "Karadağ'da maceraya hazır mısınız?",
  },
  "cta.subtitle": {
    me: "Pošaljite upit sada i dobićete ponudu u roku od 2 sata. Besplatno, bez obaveza.",
    en: "Send an inquiry now and get an offer within 5–10 minutes. Free, no obligations.",
    de: "Senden Sie jetzt eine Anfrage und erhalten Sie ein Angebot innerhalb von 2 Stunden. Kostenlos, unverbindlich.",
    ru: "Отправьте запрос сейчас и получите предложение в течение 2 часов. Бесплатно, без обязательств.",
    fr: "Envoyez une demande maintenant et recevez une offre en 2 heures. Gratuit, sans engagement.",
    pl: "Wyślij zapytanie teraz i otrzymaj ofertę w ciągu 2 godzin. Bezpłatnie, bez zobowiązań.",
    tr: "Şimdi talep gönderin ve 2 saat içinde teklif alın. Ücretsiz, yükümlülük yok.",
  },
  "cta.whatsapp": {
    me: "Pišite nam na WhatsApp", en: "Message us on WhatsApp", de: "Schreiben Sie uns auf WhatsApp", ru: "Напишите нам в WhatsApp",
    fr: "Écrivez-nous sur WhatsApp", pl: "Napisz do nas na WhatsApp", tr: "WhatsApp'tan bize yazın",
  },

  // Location page
  "location.from": {
    me: "od", en: "from", de: "ab", ru: "от",
    fr: "à partir de", pl: "od", tr: "başlayan",
  },
  "location.perDay": {
    me: "/dan", en: "/day", de: "/Tag", ru: "/день",
    fr: "/jour", pl: "/dzień", tr: "/gün",
  },
  "location.backHome": {
    me: "Nazad na početnu", en: "Back to home", de: "Zurück zur Startseite", ru: "Назад на главную",
    fr: "Retour à l'accueil", pl: "Powrót na stronę główną", tr: "Ana sayfaya dön",
  },

  // Fleet section
  "fleet.kicker": {
    me: "Naša flota", en: "Our fleet", de: "Unsere Flotte", ru: "Наш автопарк",
    fr: "Notre flotte", pl: "Nasza flota", tr: "Filomuz",
  },
  "fleet.title": {
    me: "Izaberite vozilo",
    en: "Choose a vehicle",
    de: "Wählen Sie ein Fahrzeug",
    ru: "Выберите автомобиль",
    fr: "Choisissez un véhicule",
    pl: "Wybierz pojazd",
    tr: "Bir araç seçin",
  },
  "fleet.subtitle": {
    me: "Od ekonomske klase do luksuznih SUV-ova i kabrioleta — svako vozilo iz naše flote dolazi sa punim osiguranjem i neograničenom kilometražom.",
    en: "From economy to luxury SUVs and cabriolets — every vehicle in our fleet comes with full insurance and unlimited mileage.",
    de: "Von Economy bis zu Luxus-SUVs und Cabrios — jedes Fahrzeug unserer Flotte hat Vollkaskoschutz und unbegrenzte Kilometer.",
    ru: "От эконом-класса до люксовых внедорожников и кабриолетов — каждое авто из автопарка с полной страховкой и без лимита километров.",
    fr: "De l'économique aux SUV de luxe et cabriolets — chaque véhicule inclut assurance complète et kilométrage illimité.",
    pl: "Od klasy ekonomicznej po luksusowe SUV-y i kabriolety — każdy pojazd z pełnym ubezpieczeniem i bez limitu kilometrów.",
    tr: "Ekonomiden lüks SUV ve kabriolete — filomuzdaki tüm araçlar tam sigorta ve sınırsız kilometre ile sunulur.",
  },
  "fleet.cat.all": {
    me: "Sve", en: "All", de: "Alle", ru: "Все",
    fr: "Tous", pl: "Wszystkie", tr: "Tümü",
  },
  "fleet.cat.suv": {
    me: "SUV", en: "SUV", de: "SUV", ru: "Внедорожники",
    fr: "SUV", pl: "SUV", tr: "SUV",
  },
  "fleet.cat.luxury": {
    me: "Luksuz", en: "Luxury", de: "Luxus", ru: "Премиум",
    fr: "Luxe", pl: "Luksus", tr: "Lüks",
  },
  "fleet.cat.cabrio": {
    me: "Kabriolet", en: "Cabrio", de: "Cabrio", ru: "Кабриолет",
    fr: "Cabriolet", pl: "Kabriolet", tr: "Cabrio",
  },
  "fleet.cat.sedan": {
    me: "Limuzina", en: "Sedan", de: "Limousine", ru: "Седан",
    fr: "Berline", pl: "Limuzyna", tr: "Sedan",
  },
  "fleet.cat.compact": {
    me: "Kompakt", en: "Compact", de: "Kompakt", ru: "Компакт",
    fr: "Compacte", pl: "Kompakt", tr: "Kompakt",
  },
  "fleet.cat.family": {
    me: "Porodična", en: "Family", de: "Familienauto", ru: "Семейные",
    fr: "Familiale", pl: "Rodzinne", tr: "Aile",
  },
  "fleet.badge.luxury": {
    me: "Premium", en: "Premium", de: "Premium", ru: "Премиум",
    fr: "Premium", pl: "Premium", tr: "Premium",
  },
  "fleet.reserve": {
    me: "Rezerviši", en: "Reserve", de: "Reservieren", ru: "Заказать",
    fr: "Réserver", pl: "Rezerwuj", tr: "Rezerve et",
  },
  "fleet.priceNote": {
    me: "Cijene su okvirne i variraju u zavisnosti od sezone, dužine najma i dostupnosti. Konačnu cijenu potvrđujemo nakon upita.",
    en: "Prices are indicative and vary by season, rental length and availability. Final price is confirmed after your inquiry.",
    de: "Die Preise sind Richtwerte und variieren je nach Saison, Mietdauer und Verfügbarkeit. Der Endpreis wird nach Ihrer Anfrage bestätigt.",
    ru: "Цены ориентировочные и зависят от сезона, срока аренды и наличия. Окончательная цена подтверждается после запроса.",
    fr: "Les prix sont indicatifs et varient selon la saison, la durée et la disponibilité. Le prix final est confirmé après votre demande.",
    pl: "Ceny są orientacyjne i zależą od sezonu, długości najmu i dostępności. Końcową cenę potwierdzamy po zapytaniu.",
    tr: "Fiyatlar yaklaşıktır; sezona, kiralama süresine ve müsaitliğe göre değişir. Nihai fiyat talebinizden sonra teyit edilir.",
  },
  "fleet.disclaim.deposit.title": {
    me: "Bez depozita",
    en: "No deposit",
    de: "Keine Kaution",
    ru: "Без депозита",
    fr: "Sans caution",
    pl: "Bez depozytu",
    tr: "Depozito yok",
  },
  "fleet.disclaim.delivery.title": {
    me: "Dostava na aerodrom",
    en: "Airport delivery",
    de: "Lieferung zum Flughafen",
    ru: "Доставка в аэропорт",
    fr: "Livraison à l'aéroport",
    pl: "Dostawa na lotnisko",
    tr: "Havalimanına teslimat",
  },
  "fleet.disclaim.cross_border.title": {
    me: "Van Crne Gore",
    en: "Outside Montenegro",
    de: "Außerhalb Montenegros",
    ru: "За пределами Черногории",
    fr: "Hors du Monténégro",
    pl: "Poza Czarnogórą",
    tr: "Karadağ dışı",
  },
  "fleet.disclaim.discount.title": {
    me: "Popust na izabrano vozilo",
    en: "Discount for chosen vehicle",
    de: "Rabatt für Wunschfahrzeug",
    ru: "Скидка на выбранный авто",
    fr: "Remise sur véhicule choisi",
    pl: "Rabat za wybrany pojazd",
    tr: "Seçilen araca indirim",
  },
  "fleet.disclaim.deposit": {
    me: "Bez depozita, bez skrivenih troškova, neograničena kilometraža u Crnoj Gori. Što vam kažemo to i platite — bez dodatnih troškova.",
    en: "No deposit, no hidden fees, unlimited mileage within Montenegro. What we say is what you pay — there are no additional costs.",
    de: "Keine Kaution, keine versteckten Kosten, unbegrenzte Kilometer in Montenegro. Was wir nennen, zahlen Sie — keine Zusatzkosten.",
    ru: "Без депозита, без скрытых платежей, неограниченный пробег по Черногории. Сколько мы говорим — столько и платите.",
    fr: "Sans caution, sans frais cachés, kilométrage illimité au Monténégro. Ce que nous annonçons, vous le payez — aucun coût supplémentaire.",
    pl: "Bez depozytu, bez ukrytych opłat, nielimitowany przebieg w Czarnogórze. Ile podajemy, tyle płacisz — brak dodatkowych kosztów.",
    tr: "Depozito yok, gizli ücret yok, Karadağ içinde sınırsız kilometre. Söylediğimiz fiyatı ödersiniz — ek ücret yoktur.",
  },
  "fleet.disclaim.delivery": {
    me: "Besplatna dostava na aerodrom Podgorica. Dostava na aerodrom Tivat je 20€.",
    en: "Free delivery to Podgorica Airport. Delivery to Tivat Airport is €20.",
    de: "Kostenlose Zustellung zum Flughafen Podgorica. Zustellung zum Flughafen Tivat kostet 20 €.",
    ru: "Бесплатная доставка в аэропорт Подгорица. Доставка в аэропорт Тиват — 20 €.",
    fr: "Livraison gratuite à l'aéroport de Podgorica. Livraison à l'aéroport de Tivat : 20 €.",
    pl: "Bezpłatna dostawa na lotnisko Podgorica. Dostawa na lotnisko Tivat: 20 €.",
    tr: "Podgorica Havalimanı'na teslimat ücretsizdir. Tivat Havalimanı'na teslimat 20 €.",
  },
  "fleet.disclaim.cross_border": {
    me: "Cijene važe samo za teritoriju Crne Gore. Za putovanja van Crne Gore važi doplata od 15€ po danu.",
    en: "Prices are valid for Montenegro only. For travel outside Montenegro, an additional €15 per day applies.",
    de: "Die Preise gelten nur innerhalb Montenegros. Für Fahrten ins Ausland fallen zusätzlich 15 € pro Tag an.",
    ru: "Цены действуют только на территории Черногории. За поездки за пределы Черногории — доплата 15 € в сутки.",
    fr: "Les prix s'appliquent uniquement au Monténégro. Pour les trajets hors du Monténégro, un supplément de 15 € par jour est appliqué.",
    pl: "Ceny obowiązują tylko na terenie Czarnogóry. Za podróże poza Czarnogórą obowiązuje dopłata 15 € dziennie.",
    tr: "Fiyatlar yalnızca Karadağ için geçerlidir. Karadağ dışına yolculukta günlük 15 € ek ücret uygulanır.",
  },
  "fleet.disclaim.discount": {
    me: "Ako se odlučite za konkretno vozilo, javite nam koje — možemo ponuditi mali popust na ukupnu cijenu.",
    en: "If you decide on a vehicle, let us know which one — we can offer a small discount on the total price.",
    de: "Wenn Sie sich für ein Fahrzeug entschieden haben, sagen Sie uns welches — wir können einen kleinen Rabatt auf den Gesamtpreis anbieten.",
    ru: "Если вы определились с автомобилем — напишите нам, и мы дадим небольшую скидку от итоговой цены.",
    fr: "Si vous avez choisi un véhicule, dites-nous lequel — nous pouvons offrir une petite remise sur le prix total.",
    pl: "Jeśli zdecydujesz się na konkretny pojazd, daj nam znać — możemy zaproponować niewielki rabat od ceny całkowitej.",
    tr: "Bir araç seçtiyseniz hangisi olduğunu bildirin — toplam fiyatta küçük bir indirim sunabiliriz.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("taluma-lang");
      if (saved && ["me", "en", "de", "ru", "fr", "pl", "tr"].includes(saved)) {
        return saved as Language;
      }
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === "de") return "de";
      if (browserLang === "ru") return "ru";
      if (browserLang === "fr") return "fr";
      if (browserLang === "pl") return "pl";
      if (browserLang === "tr") return "tr";
      if (["sr", "hr", "bs", "me"].includes(browserLang)) return "me";
    }
    return "en";
  });

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("taluma-lang", lang);
    document.documentElement.lang = lang === "me" ? "sr-Latn-ME" : lang;
  }, []);

  const t = useCallback(
    (key: string) => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[language] || entry["en"] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
