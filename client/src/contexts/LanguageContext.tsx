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
  "hero.priceRange": {
    me: "Cijene od 24.99€ do 149.99€ po danu.",
    en: "Prices from €24.99 to €149.99 per day.",
    de: "Preise von 24,99 € bis 149,99 € pro Tag.",
    ru: "Цены от 24,99 € до 149,99 € в сутки.",
    fr: "Prix de 24,99 € à 149,99 € par jour.",
    pl: "Ceny od 24,99 € do 149,99 € za dzień.",
    tr: "Fiyatlar günlük 24,99 €'dan 149,99 €'ya kadar.",
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
    me: "Neograničena kilometraža i 24/7 podrška. Bez skrivenih troškova.",
    en: "Unlimited mileage and 24/7 support. No hidden fees.",
    de: "Unbegrenzte Kilometer und 24/7-Support. Keine versteckten Kosten.",
    ru: "Неограниченный пробег и поддержка 24/7. Без скрытых платежей.",
    fr: "Kilométrage illimité et support 24/7. Sans frais cachés.",
    pl: "Nielimitowany przebieg i wsparcie 24/7. Bez ukrytych opłat.",
    tr: "Sınırsız kilometre ve 7/24 destek. Gizli ücret yoktur.",
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
    me: "Koji dokumenti su mi potrebni za iznajmljivanje auta?",
    en: "What documents do I need to rent a car?",
    de: "Welche Dokumente brauche ich, um ein Auto zu mieten?",
    ru: "Какие документы нужны для аренды автомобиля?",
    fr: "Quels documents me faut-il pour louer une voiture ?",
    pl: "Jakie dokumenty potrzebuję, aby wypożyczyć samochód?",
    tr: "Araç kiralamak için hangi belgeler gerekli?",
  },
  "faq.a1": {
    me: "Potrebna vam je samo važeća vozačka dozvola i pasoš (ili lična karta). To je sve što treba za proces iznajmljivanja.",
    en: "You only need a valid driving licence and a passport (or ID card). That's all required for the rental process.",
    de: "Sie benötigen lediglich einen gültigen Führerschein und einen Reisepass (oder Personalausweis). Mehr ist für den Mietvorgang nicht erforderlich.",
    ru: "Вам нужны только действующее водительское удостоверение и паспорт (или удостоверение личности). Это всё, что необходимо.",
    fr: "Vous avez seulement besoin d'un permis de conduire valide et d'un passeport (ou carte d'identité). C'est tout ce qui est requis.",
    pl: "Potrzebne jest tylko ważne prawo jazdy i paszport (lub dowód osobisty). To wszystko, co wymagane.",
    tr: "Yalnızca geçerli bir ehliyet ve pasaport (veya kimlik kartı) yeterlidir. Kiralama için tek gereken bu.",
  },
  "faq.q2": {
    me: "Da li je zaista bez depozita? Ima li skrivenih troškova?",
    en: "Is it really no deposit? Are there any hidden costs?",
    de: "Wirklich keine Kaution? Gibt es versteckte Kosten?",
    ru: "Это правда, что нет депозита? Есть ли скрытые расходы?",
    fr: "Vraiment sans caution ? Y a-t-il des frais cachés ?",
    pl: "Czy naprawdę nie ma depozytu? Czy są ukryte koszty?",
    tr: "Gerçekten depozito yok mu? Gizli masraf var mı?",
  },
  "faq.a2": {
    me: "Da, 100% bez depozita i bez skrivenih troškova. Plaćate samo cijenu najma i vozite — nema dodatnih ili neočekivanih troškova.",
    en: "Yes, it is 100% no deposit and no hidden fees. You simply pay the rental price and drive — there are no additional or surprise charges.",
    de: "Ja, zu 100 % ohne Kaution und ohne versteckte Gebühren. Sie zahlen einfach den Mietpreis und fahren — keine zusätzlichen oder überraschenden Kosten.",
    ru: "Да, на 100% без депозита и без скрытых платежей. Вы просто оплачиваете аренду и едете — никаких дополнительных или сюрпризных расходов.",
    fr: "Oui, c'est à 100 % sans caution et sans frais cachés. Vous payez simplement le prix de location et vous conduisez — aucun supplément ni surprise.",
    pl: "Tak, w 100% bez depozytu i bez ukrytych opłat. Płacisz tylko cenę wynajmu i jedziesz — żadnych dodatkowych ani niespodziewanych kosztów.",
    tr: "Evet, %100 depozitosuz ve gizli ücret yok. Sadece kiralama ücretini ödüyor ve yola çıkıyorsunuz — ek veya sürpriz ücret yoktur.",
  },
  "faq.q3": {
    me: "Da li mi treba kreditna kartica kao garancija?",
    en: "Do I need a credit card for guarantee?",
    de: "Brauche ich eine Kreditkarte als Sicherheit?",
    ru: "Нужна ли кредитная карта для гарантии?",
    fr: "Ai-je besoin d'une carte de crédit comme garantie ?",
    pl: "Czy potrzebuję karty kredytowej jako gwarancji?",
    tr: "Garanti için kredi kartı gerekiyor mu?",
  },
  "faq.a3": {
    me: "Ne, kreditna kartica nije potrebna za garanciju ili rezervaciju.",
    en: "No, a credit card is not required for guarantee or booking.",
    de: "Nein, eine Kreditkarte ist weder als Sicherheit noch für die Buchung erforderlich.",
    ru: "Нет, кредитная карта для гарантии или бронирования не требуется.",
    fr: "Non, aucune carte de crédit n'est requise pour la garantie ni pour la réservation.",
    pl: "Nie, karta kredytowa nie jest wymagana ani jako gwarancja, ani do rezerwacji.",
    tr: "Hayır, garanti veya rezervasyon için kredi kartı gerekmez.",
  },
  "faq.q4": {
    me: "Kada i gdje mogu preuzeti auto?",
    en: "When and where can I pick up the car?",
    de: "Wann und wo kann ich das Auto abholen?",
    ru: "Когда и где я могу забрать автомобиль?",
    fr: "Quand et où puis-je récupérer la voiture ?",
    pl: "Kiedy i gdzie mogę odebrać samochód?",
    tr: "Aracı ne zaman ve nereden teslim alabilirim?",
  },
  "faq.a4": {
    me: "Auto možete preuzeti u bilo koje vrijeme, 24/7. Dostavljamo i na lokaciju po vašem izboru — hotel, apartman ili aerodrom.",
    en: "You can pick up your car anytime, 24/7, and we also deliver to your preferred location — hotel, apartment, or airport.",
    de: "Sie können Ihr Auto jederzeit, rund um die Uhr, abholen. Wir liefern auch an Ihren Wunschort — Hotel, Apartment oder Flughafen.",
    ru: "Забрать автомобиль можно в любое время, 24/7. Также доставляем по удобному адресу — в отель, апартаменты или аэропорт.",
    fr: "Vous pouvez récupérer votre voiture à tout moment, 24h/24 et 7j/7. Nous livrons aussi à l'endroit de votre choix — hôtel, appartement ou aéroport.",
    pl: "Samochód możesz odebrać o dowolnej porze, 24/7. Dowozimy też pod wskazany adres — hotel, apartament lub lotnisko.",
    tr: "Aracı 7/24 herhangi bir saatte teslim alabilirsiniz. Tercih ettiğiniz yere — otel, apartman veya havalimanı — teslim de ediyoruz.",
  },
  "faq.q5": {
    me: "Mogu li vratiti auto na drugoj lokaciji?",
    en: "Can I return the car at a different location?",
    de: "Kann ich das Auto an einem anderen Ort zurückgeben?",
    ru: "Можно ли вернуть автомобиль в другом месте?",
    fr: "Puis-je rendre la voiture à un autre endroit ?",
    pl: "Czy mogę zwrócić samochód w innym miejscu?",
    tr: "Aracı farklı bir noktada iade edebilir miyim?",
  },
  "faq.a5": {
    me: "Da, vozilo možete ostaviti na drugoj lokaciji uz prethodnu najavu i dogovor.",
    en: "Yes, you can drop off the car at a different location with prior notice and agreement.",
    de: "Ja, mit vorheriger Absprache können Sie das Auto an einem anderen Ort zurückgeben.",
    ru: "Да, автомобиль можно сдать в другом месте по предварительному согласованию.",
    fr: "Oui, vous pouvez restituer la voiture à un autre endroit avec accord préalable.",
    pl: "Tak, samochód można zwrócić w innym miejscu po wcześniejszym uzgodnieniu.",
    tr: "Evet, önceden bildirim ve mutabakat ile aracı farklı bir noktada bırakabilirsiniz.",
  },
  "faq.q6": {
    me: "Da li je sjedalica za dijete uključena?",
    en: "Is a child seat included?",
    de: "Ist ein Kindersitz inbegriffen?",
    ru: "Включено ли детское кресло?",
    fr: "Le siège enfant est-il inclus ?",
    pl: "Czy fotelik dziecięcy jest wliczony?",
    tr: "Çocuk koltuğu dahil mi?",
  },
  "faq.a6": {
    me: "Da, sjedalica za dijete je potpuno besplatna na zahtjev.",
    en: "Yes, a child seat is completely free of charge upon request.",
    de: "Ja, ein Kindersitz ist auf Anfrage komplett kostenlos.",
    ru: "Да, детское кресло предоставляется бесплатно по запросу.",
    fr: "Oui, le siège enfant est totalement gratuit sur demande.",
    pl: "Tak, fotelik dziecięcy jest całkowicie bezpłatny na życzenie.",
    tr: "Evet, çocuk koltuğu talep üzerine tamamen ücretsizdir.",
  },
  "faq.q7": {
    me: "Da li se doplaćuje dodatni vozač?",
    en: "Do I pay extra for an additional driver?",
    de: "Zahle ich extra für einen zusätzlichen Fahrer?",
    ru: "Платится ли отдельно за дополнительного водителя?",
    fr: "Y a-t-il un supplément pour un conducteur additionnel ?",
    pl: "Czy dopłacam za dodatkowego kierowcę?",
    tr: "İlave sürücü için ek ücret var mı?",
  },
  "faq.a7": {
    me: "Ne, dodatni vozač je besplatan.",
    en: "No, an additional driver is free of charge.",
    de: "Nein, ein zusätzlicher Fahrer ist kostenlos.",
    ru: "Нет, дополнительный водитель — бесплатно.",
    fr: "Non, un conducteur additionnel est gratuit.",
    pl: "Nie, dodatkowy kierowca jest bezpłatny.",
    tr: "Hayır, ilave sürücü ücretsizdir.",
  },
  "faq.q8": {
    me: "Da li nas čekate na aerodromu?",
    en: "Do you meet us at the airport?",
    de: "Holen Sie uns am Flughafen ab?",
    ru: "Встречаете ли вы нас в аэропорту?",
    fr: "Nous accueillez-vous à l'aéroport ?",
    pl: "Czy odbieracie nas z lotniska?",
    tr: "Bizi havalimanında karşılıyor musunuz?",
  },
  "faq.a8": {
    me: "Da. Pošaljite nam ime i prezime, a naš agent će vas čekati ispred aerodroma sa natpisom sa vašim imenom za brzu primopredaju.",
    en: "Yes. Just send us your name and surname, and our agent will be waiting for you outside the airport with your name sign for a fast handover.",
    de: "Ja. Schicken Sie uns einfach Ihren Vor- und Nachnamen, unser Agent erwartet Sie mit einem Namensschild vor dem Flughafen für eine schnelle Übergabe.",
    ru: "Да. Просто пришлите имя и фамилию — наш агент будет ждать вас у выхода из аэропорта с табличкой с вашим именем для быстрой передачи.",
    fr: "Oui. Envoyez-nous simplement votre nom et prénom, et notre agent vous attendra à la sortie de l'aéroport avec une pancarte à votre nom pour un transfert rapide.",
    pl: "Tak. Wystarczy przesłać nam imię i nazwisko — nasz agent będzie czekał przed lotniskiem z tabliczką z Twoim imieniem, by szybko przekazać auto.",
    tr: "Evet. Adınızı ve soyadınızı bize gönderin; temsilcimiz isminizin yazılı olduğu tabela ile havalimanı çıkışında sizi bekleyecek — hızlı bir teslim için.",
  },
  "faq.q9": {
    me: "Da li nudite SIM karticu ili internet?",
    en: "Do you offer SIM cards or internet?",
    de: "Bieten Sie SIM-Karten oder Internet an?",
    ru: "Предлагаете ли вы SIM-карты или интернет?",
    fr: "Proposez-vous des cartes SIM ou Internet ?",
    pl: "Czy oferujecie kartę SIM lub internet?",
    tr: "SIM kart veya internet sunuyor musunuz?",
  },
  "faq.a9": {
    me: "Da, SIM karticu možemo obezbijediti odmah po preuzimanju na aerodromu, sa internet paketima od 15€ do 20€ — tako da ste odmah po dolasku online.",
    en: "Yes, we can provide a SIM card right after airport pick-up, with internet packages from €15 to €20 so you stay connected immediately after arrival.",
    de: "Ja, eine SIM-Karte können wir direkt nach der Abholung am Flughafen bereitstellen, mit Internetpaketen von 15 € bis 20 € — so sind Sie sofort nach Ankunft online.",
    ru: "Да, SIM-карту мы можем выдать сразу после получения авто в аэропорту, с интернет-пакетами от 15 € до 20 €, чтобы вы были на связи с первой минуты.",
    fr: "Oui, nous pouvons fournir une carte SIM dès la prise en charge à l'aéroport, avec des forfaits Internet de 15 € à 20 € pour rester connecté dès votre arrivée.",
    pl: "Tak, kartę SIM możemy przekazać zaraz po odbiorze auta na lotnisku, z pakietami internetowymi od 15 € do 20 € — będziesz online od pierwszej chwili.",
    tr: "Evet, havalimanı tesliminin hemen ardından, 15 € ile 20 € arası internet paketleriyle SIM kart sağlayabiliriz — varır varmaz bağlantıda olursunuz.",
  },
  "faq.q10": {
    me: "Kakva je politika goriva?",
    en: "What is the fuel policy?",
    de: "Wie ist die Kraftstoffregelung?",
    ru: "Какая политика по топливу?",
    fr: "Quelle est la politique de carburant ?",
    pl: "Jaka jest polityka paliwowa?",
    tr: "Yakıt politikası nedir?",
  },
  "faq.a10": {
    me: "Vozilo predajemo sa minimalnom količinom goriva (jer ne uzimamo depozit), a vraća se na isti način. Benzinska pumpa je 1 minut od aerodroma za jednostavno dotakanje.",
    en: "We provide the car with minimal fuel, since we do not take a deposit, and it is returned the same way. A petrol station is located just 1 minute from the airport for easy refueling.",
    de: "Da wir keine Kaution erheben, übergeben wir das Auto mit minimaler Tankfüllung — und Sie geben es genauso zurück. Eine Tankstelle befindet sich nur 1 Minute vom Flughafen entfernt.",
    ru: "Мы передаём автомобиль с минимальным количеством топлива (поскольку не берём депозит), и возвращается он так же. Заправка находится в 1 минуте от аэропорта.",
    fr: "Nous remettons la voiture avec un minimum de carburant — puisque nous ne prenons pas de caution — et elle est restituée de la même manière. Une station-service se trouve à 1 minute de l'aéroport.",
    pl: "Auto przekazujemy z minimalną ilością paliwa (bo nie pobieramy depozytu) i tak też je zwracasz. Stacja paliw znajduje się minutę drogi od lotniska — łatwo doleć paliwa.",
    tr: "Depozito almadığımız için aracı minimum yakıtla teslim ediyoruz; aynı şekilde iade ediyorsunuz. Havalimanına 1 dakika mesafede bir benzin istasyonu vardır.",
  },
  "faq.q11": {
    me: "Šta ako mi let kasni?",
    en: "What happens if my flight is delayed?",
    de: "Was passiert, wenn mein Flug Verspätung hat?",
    ru: "Что делать, если мой рейс задерживается?",
    fr: "Que se passe-t-il si mon vol est retardé ?",
    pl: "Co jeśli mój lot się opóźni?",
    tr: "Uçuşum gecikirse ne olur?",
  },
  "faq.a11": {
    me: "Bez brige — pošaljite nam podatke o letu i pratimo ga u realnom vremenu, tako da će naš agent biti tu kada sletite.",
    en: "No problem — just send us your flight details and we will track your flight in real time, so our agent will be there when you land.",
    de: "Kein Problem — schicken Sie uns einfach Ihre Flugdaten, wir verfolgen den Flug in Echtzeit, sodass unser Agent bei Ihrer Landung bereit ist.",
    ru: "Не беспокойтесь — пришлите нам данные рейса, мы отслеживаем его в реальном времени, и агент будет на месте к моменту прилёта.",
    fr: "Pas de souci — envoyez-nous les détails de votre vol, nous le suivons en temps réel pour que notre agent soit présent à l'atterrissage.",
    pl: "Bez obaw — prześlij nam dane lotu, śledzimy go w czasie rzeczywistym, więc nasz agent będzie czekał, gdy wylądujesz.",
    tr: "Sorun değil — uçuş bilgilerinizi gönderin, uçuşunuzu canlı olarak takip ediyoruz; temsilcimiz iniş anında orada olacak.",
  },
  "faq.q12": {
    me: "Prihvatate li rezervacije u poslednjem trenutku?",
    en: "Do you accept last-minute bookings?",
    de: "Nehmen Sie Last-Minute-Buchungen an?",
    ru: "Принимаете ли вы бронирование в последнюю минуту?",
    fr: "Acceptez-vous les réservations de dernière minute ?",
    pl: "Czy przyjmujecie rezerwacje last-minute?",
    tr: "Son dakika rezervasyonları kabul ediyor musunuz?",
  },
  "faq.a12": {
    me: "Da, last-minute rezervacije su uvijek dobrodošle. Fleksibilni smo i možemo organizovati vozilo i u kratkom roku.",
    en: "Yes, last-minute bookings are always welcome. We are flexible and ready to arrange a car even on short notice.",
    de: "Ja, Last-Minute-Buchungen sind jederzeit willkommen. Wir sind flexibel und organisieren auch kurzfristig ein Fahrzeug.",
    ru: "Да, бронирование в последнюю минуту всегда приветствуется. Мы гибки и готовы предоставить авто даже в короткие сроки.",
    fr: "Oui, les réservations de dernière minute sont toujours bienvenues. Nous sommes flexibles et prêts à organiser un véhicule à court préavis.",
    pl: "Tak, rezerwacje last-minute są zawsze mile widziane. Jesteśmy elastyczni i potrafimy zorganizować auto nawet w krótkim czasie.",
    tr: "Evet, son dakika rezervasyonları her zaman kabul ediyoruz. Esneğiz ve kısa sürede de araç ayarlayabiliriz.",
  },
  "faq.q13": {
    me: "Da li moram platiti unaprijed? (Rezerviši sada, plati kasnije)",
    en: "Do I need to pay in advance? (Book now, pay later)",
    de: "Muss ich im Voraus zahlen? (Jetzt buchen, später bezahlen)",
    ru: "Нужно ли платить заранее? (Бронируйте сейчас, платите позже)",
    fr: "Dois-je payer à l'avance ? (Réservez maintenant, payez plus tard)",
    pl: "Czy muszę zapłacić z góry? (Zarezerwuj teraz, zapłać później)",
    tr: "Önceden ödemem gerekiyor mu? (Şimdi rezervasyon yapın, sonra ödeyin)",
  },
  "faq.a13": {
    me: "Nije potrebna avansna uplata. Možete rezervisati sada i platiti kada preuzmete auto.",
    en: "No prepayment is required. You can book now and pay when you pick up the car.",
    de: "Eine Vorauszahlung ist nicht erforderlich. Sie können jetzt buchen und bei der Abholung des Autos bezahlen.",
    ru: "Предоплата не требуется. Бронируйте сейчас, оплачивайте при получении автомобиля.",
    fr: "Aucun prépaiement n'est requis. Réservez maintenant et payez lors de la prise en charge.",
    pl: "Przedpłata nie jest wymagana. Możesz zarezerwować teraz i zapłacić przy odbiorze auta.",
    tr: "Ön ödeme gerekmez. Şimdi rezervasyon yapıp aracı teslim alırken ödeyebilirsiniz.",
  },
  "faq.q14": {
    me: "Šta da uradim prilikom preuzimanja auta?",
    en: "What should I do when picking up the car?",
    de: "Was sollte ich bei der Abholung des Autos beachten?",
    ru: "Что мне сделать при получении автомобиля?",
    fr: "Que dois-je faire lors de la prise en charge de la voiture ?",
    pl: "Co powinienem zrobić podczas odbioru samochodu?",
    tr: "Aracı teslim alırken ne yapmalıyım?",
  },
  "faq.a14": {
    me: "Toplo preporučujemo da prilikom preuzimanja snimite kratak video vozila, posebno ako postoje vidljive ogrebotine ili oštećenja. Pošto imamo više zaposlenih, ponekad se neki detalj propusti, pa ovo obezbjeđuje punu transparentnost i izbjegava nesporazume.",
    en: "We strongly recommend that you record a short video of the vehicle at pick-up, especially if there are any visible scratches or damage. Since we have multiple staff members, it can sometimes happen that a previous detail is not noted, so this helps ensure full transparency and avoids any misunderstandings.",
    de: "Wir empfehlen Ihnen dringend, bei der Abholung ein kurzes Video des Fahrzeugs aufzunehmen, besonders wenn sichtbare Kratzer oder Schäden vorhanden sind. Da bei uns mehrere Mitarbeiter tätig sind, kann es vorkommen, dass ein Detail nicht vermerkt wurde — so wird volle Transparenz gewährleistet und Missverständnisse vermieden.",
    ru: "Настоятельно рекомендуем при получении снять короткое видео автомобиля, особенно если есть видимые царапины или повреждения. Поскольку у нас несколько сотрудников, иногда какая-то деталь может быть не зафиксирована — это обеспечивает прозрачность и исключает недоразумения.",
    fr: "Nous recommandons fortement de filmer une courte vidéo du véhicule lors de la prise en charge, surtout s'il y a des rayures ou dommages visibles. Comme plusieurs collaborateurs interviennent, un détail peut parfois échapper — cela garantit une transparence totale et évite tout malentendu.",
    pl: "Zdecydowanie zalecamy nagranie krótkiego wideo pojazdu przy odbiorze, zwłaszcza jeśli widoczne są rysy lub uszkodzenia. Mamy kilku pracowników i czasem jakiś szczegół może umknąć — dzięki temu mamy pełną przejrzystość i unikamy nieporozumień.",
    tr: "Aracı teslim alırken, özellikle görünür çizik veya hasar varsa, kısa bir video çekmenizi şiddetle öneririz. Birden fazla çalışanımız olduğundan bir detay atlanmış olabilir — bu yöntem tam şeffaflık sağlar ve olası yanlış anlamaları önler.",
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
  "fleet.cat.economy": {
    me: "Economy", en: "Economy", de: "Economy", ru: "Эконом",
    fr: "Économique", pl: "Ekonomiczny", tr: "Ekonomi",
  },
  "fleet.cat.sedan": {
    me: "Limuzina", en: "Sedan", de: "Limousine", ru: "Седан",
    fr: "Berline", pl: "Limuzyna", tr: "Sedan",
  },
  "fleet.cat.suv": {
    me: "SUV", en: "SUV", de: "SUV", ru: "Внедорожники",
    fr: "SUV", pl: "SUV", tr: "SUV",
  },
  "fleet.cat.cabrio": {
    me: "Kabriolet", en: "Cabrio", de: "Cabrio", ru: "Кабриолет",
    fr: "Cabriolet", pl: "Kabriolet", tr: "Cabrio",
  },
  "fleet.cat.van": {
    me: "Van", en: "Van", de: "Van", ru: "Вэн",
    fr: "Van", pl: "Van", tr: "Van",
  },
  "fleet.badge.luxury": {
    me: "Premium", en: "Premium", de: "Premium", ru: "Премиум",
    fr: "Premium", pl: "Premium", tr: "Premium",
  },
  "fleet.reserve": {
    me: "Traži ponudu", en: "Get offer", de: "Angebot anfordern", ru: "Получить предложение",
    fr: "Demander un devis", pl: "Poproś o ofertę", tr: "Teklif al",
  },
  "fleet.priceNote": {
    me: "Cijene vozila kreću se od 24.99€ do 149.99€ po danu. Konačna cijena zavisi od broja dana najma, prelaska granice, kao i ljetnje ili zimske sezone. Za tačnu ponudu i dostupnost vozila, kontaktirajte nas.",
    en: "Vehicle prices range from €24.99 to €149.99 per day. The final price depends on the number of rental days, cross-border travel, and summer or winter season. For an exact offer and availability, please contact us.",
    de: "Die Fahrzeugpreise liegen zwischen 24,99 € und 149,99 € pro Tag. Der Endpreis hängt von der Mietdauer, Grenzüberschreitungen sowie Sommer- oder Wintersaison ab. Für ein genaues Angebot und die Verfügbarkeit kontaktieren Sie uns.",
    ru: "Цены на автомобили — от 24,99 € до 149,99 € в сутки. Окончательная цена зависит от количества дней аренды, выезда за границу и сезона (лето/зима). Для точного предложения и наличия свяжитесь с нами.",
    fr: "Les prix des véhicules varient de 24,99 € à 149,99 € par jour. Le prix final dépend du nombre de jours de location, du passage de frontière et de la saison (été ou hiver). Contactez-nous pour un devis exact et la disponibilité.",
    pl: "Ceny pojazdów wahają się od 24,99 € do 149,99 € za dzień. Cena końcowa zależy od liczby dni wynajmu, przekraczania granicy oraz sezonu letniego lub zimowego. Po dokładną ofertę i dostępność skontaktuj się z nami.",
    tr: "Araç fiyatları günlük 24,99 €'dan 149,99 €'ya kadar değişir. Nihai fiyat kiralama süresine, sınır geçişine ve yaz/kış sezonuna göre değişir. Kesin teklif ve müsaitlik için bize ulaşın.",
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
    me: "Cijene za korišćenje vozila van Crne Gore mogu se razlikovati i uključuju dodatne naknade.",
    en: "Prices for using the vehicle outside Montenegro may differ and include additional charges.",
    de: "Die Preise für die Nutzung des Fahrzeugs außerhalb Montenegros können abweichen und beinhalten zusätzliche Gebühren.",
    ru: "Цены за использование автомобиля за пределами Черногории могут отличаться и включают дополнительные сборы.",
    fr: "Les prix pour l'utilisation du véhicule hors du Monténégro peuvent varier et incluent des frais supplémentaires.",
    pl: "Ceny za korzystanie z pojazdu poza Czarnogórą mogą się różnić i obejmują dodatkowe opłaty.",
    tr: "Aracın Karadağ dışında kullanımı için fiyatlar farklılık gösterebilir ve ek ücretler içerir.",
  },
  "fleet.disclaim.discount": {
    me: "Ako izaberete vozilo, javite nam — možemo ponuditi mali popust na ukupnu cijenu, u zavisnosti od broja dana najma ili trenutnih mjesečnih ponuda.",
    en: "If you choose a vehicle, let us know — we may offer a small discount on the total price, depending on the number of rental days or current monthly offers.",
    de: "Wenn Sie ein Fahrzeug auswählen, sagen Sie uns Bescheid — wir können je nach Mietdauer oder aktuellen Monatsangeboten einen kleinen Rabatt auf den Gesamtpreis anbieten.",
    ru: "Если вы выбрали автомобиль, сообщите нам — мы можем предложить небольшую скидку от итоговой цены, в зависимости от количества дней аренды или текущих месячных акций.",
    fr: "Si vous choisissez un véhicule, dites-le nous — nous pouvons offrir une petite remise sur le prix total, selon le nombre de jours de location ou nos offres mensuelles en cours.",
    pl: "Jeśli wybierzesz pojazd, daj nam znać — możemy zaproponować niewielki rabat od ceny całkowitej, w zależności od liczby dni wynajmu lub aktualnych ofert miesięcznych.",
    tr: "Bir araç seçerseniz bize bildirin — kiralama süresine veya güncel aylık tekliflere göre toplam fiyatta küçük bir indirim sunabiliriz.",
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
