// src/data/combined-data.ts
import { StaticImageData } from 'next/image';
import { Locale } from "../types/locales";

// Импорт изображений
import promo_1 from '@/assets/img/promo/1-167@x2.webp';
import promo_2 from '@/assets/img/promo/978x720+(2)-5@x2.webp';
import promo_3 from '@/assets/img/promo/978x720-1806@x2.webp';

import avatar_1 from '@/assets/img/nft/nft_avatar01.png';
import avatar_2 from '@/assets/img/nft/nft_avatar02.png';
import avatar_3 from '@/assets/img/nft/nft_avatar03.png';

// Интерфейс для промо-данных
export interface PromoTypes {
  id: number;
  img: StaticImageData;
  title: Record<string, string>;
  subtitle: Record<string, string>;
  creator: StaticImageData;
  creator_name: string;
  eth: number;
  trending?: boolean;
  price: string;
}

// Тип для данных спина
type SpinDataItem = {
  pretitle?: Record<Locale, string[]>;
  title?: Record<Locale, string[]>;
  [key: string]: Record<Locale, string[]> | undefined;
};

// Объединенные данные
export const combinedData = {
  promo: {
    data: [
      {
        id: 101,
        img: promo_1,
        title: {
          en: "Cashback every day",
          pl: "Cashback każdego dnia",
          es: "Cashback todos los días",
          fr: "Cashback chaque jour",
          de: "Täglich Cashback",
          nl: "Dagelijks Cashback",
          el: "Επιστροφή χρημάτων κάθε μέρα",
          it: "Cashback ogni giorno",
          ro: "Cashback în fiecare zi",
          pt: "Cashback todos os dias",
        },
        subtitle: {
          en: "Spin your favorite slots without worries – well give you cashback!",
          pl: "Graj na swoich ulubionych automatach bez obaw – zwrócimy Ci cashback!",
          es: "Gira tus tragamonedas favoritas sin preocupaciones – ¡te devolvemos cashback!",
          fr: "Faites tourner vos machines à sous préférées sans souci – nous vous offrons du cashback!",
          de: "Drehen Sie Ihre Lieblings-Slots ohne Sorgen – wir geben Ihnen Cashback!",
          nl: "Draai je favoriete slots zonder zorgen – wij geven je cashback!",
          el: "Γυρίστε τα αγαπημένα σας φρουτάκια χωρίς άγχος – σας επιστρέφουμε cashback!",
          it: "Gira le tue slot preferite senza preoccupazioni – ti offriamo cashback!",
          ro: "Joacă sloturile tale preferate fără griji – îți oferim cashback!",
          pt: "Gire seus slots favoritos sem preocupações – nós te damos cashback!",
        },
        creator: avatar_1,
        creator_name: "Jonyk",
        eth: 500,
        trending: true,
        price: "Total Win",
      },
      {
        id: 102,
        img: promo_2,
        title: {
          en: "Be in the flow of luck!",
          pl: "Bądź w nurcie szczęścia!",
          es: "¡Sumérgete en la suerte!",
          fr: "Soyez dans le flux de la chance!",
          de: "Bleib im Fluss des Glücks!",
          nl: "Blijf in de flow van geluk!",
          el: "Μπες στη ροή της τύχης!",
          it: "Sii nel flusso della fortuna!",
          ro: "Fii în ritmul norocului!",
          pt: "Esteja no fluxo da sorte!",
        },
        subtitle: {
          en: "An incredible chance to grab huge rewards in a thrilling new promotion!",
          pl: "Niesamowita szansa na zdobycie wielkich nagród w ekscytującej nowej promocji!",
          es: "¡Una oportunidad increíble de ganar grandes premios en una nueva promoción emocionante!",
          fr: "Une occasion unique de décrocher des récompenses impressionnantes dans une promotion palpitante !",
          de: "Eine unglaubliche Chance, riesige Gewinne in einer aufregenden neuen Aktion zu sichern!",
          nl: "Een geweldige kans om grote beloningen te winnen in een spannende nieuwe promotie!",
          el: "Μια απίστευτη ευκαιρία να κερδίσεις φανταστικά βραβεία σε μια συναρπαστική νέα προσφορά!",
          it: "Un'opportunità straordinaria per conquistare fantastici premi in una nuova promozione entusiasmante!",
          ro: "O șansă incredibilă de a câștiga premii uriașe într-o promoție captivantă!",
          pt: "Uma oportunidade incrível de garantir grandes prêmios em uma nova promoção empolgante!",
        },
        creator: avatar_2,
        creator_name: "Malabara",
        eth: 30000,
        trending: true,
        price: "Total Win",
      },
      {
        id: 103,
        img: promo_3,
        title: {
          en: "Crazy Roulette",
          pl: "Szalona ruletka",
          es: "Ruleta loca",
          fr: "Roulette folle",
          de: "Verrücktes Roulette",
          nl: "Gekke roulette",
          el: "Τρελή ρουλέτα",
          it: "Roulette pazza",
          ro: "Ruletă nebună",
          pt: "Roleta louca",
        },
        subtitle: {
          en: "Take your place at the roulette table and claim your victory!",
          pl: "Zajmij miejsce przy stole ruletki i sięgnij po zwycięstwo!",
          es: "¡Toma el control de la mesa de ruleta y haz historia!",
          fr: "Prenez place à la table de roulette et imposez votre style !",
          de: "Erobern Sie den Roulettetisch und sichern Sie sich den Sieg!",
          nl: "Neem de leiding aan de roulettetafel en pak je winst!",
          el: "Πάρε θέση στο τραπέζι της ρουλέτας και διεκδίκησε τη νίκη σου!",
          it: "Siediti al tavolo della roulette e conquista la tua vittoria!",
          ro: "Ia-ți locul la masa de ruletă și revendică-ți succesul!",
          pt: "Sente-se à mesa de roleta e conquiste a sua vitória!",
        },
        creator: avatar_3,
        creator_name: "Hala Hoop",
        eth: 100000,
        trending: true,
        price: "Total Win",
      },
    ] as PromoTypes[],
  },
  spin: {
    button_text: {
      en: ["Login", "Sign In", "Access"],
      pl: ["Zaloguj", "Wejdź", "Dostęp"],
      es: ["Entrar", "Iniciar", "Acceso"],
      fr: ["Connexion", "Entrée", "Accès"],
      de: ["Login", "Anmelden", "Zugriff"],
      nl: ["Inloggen", "Aanmelden", "Toegang"],
      el: ["Σύνδεση", "Είσοδος", "Πρόσβαση"],
      it: ["Accedi", "Entra", "Accesso"],
      ro: ["Conectare", "Intră", "Acces"],
      pt: ["Entrar", "Login", "Acesso"],
    },
    list_of_games: {
      pretitle: {
        en: ["List of Games", "Explore Games", "Our Games"],
        pl: ["Lista Gier", "Odkryj Gry", "Nasze Gry"],
        es: ["Lista de Juegos", "Explorar Juegos", "Nuestros Juegos"],
        fr: ["Liste des Jeux", "Explorer les Jeux", "Nos Jeux"],
        de: ["Spielübersicht", "Spiele Entdecken", "Unsere Spiele"],
        nl: ["Lijst van Spellen", "Ontdek Spellen", "Onze Spellen"],
        el: ["Λίστα Παιχνιδιών", "Εξερευνήστε Παιχνίδια", "Τα Παιχνίδια μας"],
        it: ["Elenco Giochi", "Esplora Giochi", "I Nostri Giochi"],
        ro: ["Lista Jocurilor", "Explorează Jocuri", "Jocurile Noastre"],
        pt: ["Lista de Jogos", "Explorar Jogos", "Nossos Jogos"],
      },
      title: {
        en: ["Best Slots", "Top Slots", "Favorite Slots"],
        pl: ["Najlepsze Automaty", "Top Automaty", "Ulubione Gry"],
        es: ["Mejores Slots", "Top Slots", "Slots Favoritos"],
        fr: ["Meilleures Machines", "Top Machines", "Machines Préférées"],
        de: ["Beste Slots", "Top Slots", "Beliebte Slots"],
        nl: ["Beste Slots", "Top Slots", "Favoriete Slots"],
        el: ["Καλύτερα Φρουτάκια", "Κορυφαία Φρουτάκια", "Αγαπημένα Φρουτάκια"],
        it: ["Migliori Slot", "Slot Top", "Slot Preferite"],
        ro: ["Cele Mai Bune Sloturi", "Sloturi de Top", "Sloturi Favorite"],
        pt: ["Melhores Slots", "Top Slots", "Slots Favoritos"],
      },
    },
    top_games: {
      pretitle: {
        en: ["Our Games", "Explore Games", "Featured Games"],
        pl: ["Nasze Gry", "Odkryj Gry", "Polecane Gry"],
        es: ["Nuestros Juegos", "Explorar Juegos", "Juegos Destacados"],
        fr: ["Nos Jeux", "Explorer les Jeux", "Jeux en Vedette"],
        de: ["Unsere Spiele", "Spiele Entdecken", "Ausgewählte Spiele"],
        nl: ["Onze Spellen", "Ontdek Spellen", "Uitgelichte Spellen"],
        el: ["Τα Παιχνίδια μας", "Εξερευνήστε Παιχνίδια", "Προτεινόμενα Παιχνίδια"],
        it: ["I Nostri Giochi", "Esplora Giochi", "Giochi in Evidenza"],
        ro: ["Jocurile Noastre", "Explorează Jocuri", "Jocuri Recomandate"],
        pt: ["Nossos Jogos", "Explorar Jogos", "Jogos em Destaque"],
      },
      title: {
        en: ["Top Rated", "Editor's Picks", "Highly Rated"],
        pl: ["Najwyżej Oceniane", "Wybór Redakcji", "Najlepiej Oceniane"],
        es: ["Mejor Valorados", "Selección del Editor", "Altamente Valorados"],
        fr: ["Mieux Notés", "Choix de l'Éditeur", "Hautement Notés"],
        de: ["Top Bewertungen", "Redaktionsempfehlung", "Höchst Bewertet"],
        nl: ["Hoogst Beoordeeld", "Redactie Keuze", "Top Beoordeeld"],
        el: ["Υψηλή Βαθμολογία", "Επιλογές Συντάκτη", "Πολύ Καλά Βαθμολογημένα"],
        it: ["Migliori Valutazioni", "Scelti dal Redattore", "Altamente Valutati"],
        ro: ["Cele Mai Bune Evaluări", "Alegerea Editorului", "Foarte Bine Evaluat"],
        pt: ["Mais Bem Avaliados", "Escolha do Editor", "Altamente Avaliados"],
      },
    },
    most_lucky_players: {
      pretitle: {
        en: ["Most Lucky Players", "Luckiest Players", "Biggest Winners"],
        pl: ["Najszczęśliwsi Gracze", "Szczęśliwi Gracze", "Największe Szczęście"],
        es: ["Jugadores Más Afortunados", "Ganadores con Suerte", "Mayores Ganadores"],
        fr: ["Joueurs les Plus Chanceux", "Gagnants Chanceux", "Plus Grands Gagnants"],
        de: ["Glücklichste Spieler", "Spieler mit Glück", "Größte Gewinner"],
        nl: ["Meest Gelukkige Spelers", "Gelukswinnaars", "Grootste Winnaars"],
        el: ["Πιο Τυχεροί Παίκτες", "Τυχεροί Νικητές", "Μεγαλύτεροι Νικητές"],
        it: ["Giocatori più Fortunati", "Vincitori Fortunati", "Grandi Vincitori"],
        ro: ["Cei Mai Norocoși Jucători", "Jucători Norocoși", "Marii Câștigători"],
        pt: ["Jogadores Mais Sortudos", "Sortudos", "Maiores Vencedores"],
      },
      title: {
        en: ["Play to Earn Games", "Win & Earn", "Earn While Playing"],
        pl: ["Gry Zarabiające", "Wygraj i Zarób", "Zarabiaj Grając"],
        es: ["Juegos para Ganar", "Juega y Gana", "Gana Mientras Juegas"],
        fr: ["Jouez pour Gagner", "Gagnez en Jouant", "Jouez et Gagnez"],
        de: ["Spiele, um zu Gewinnen", "Gewinnen & Verdienen", "Beim Spielen Verdienen"],
        nl: ["Spel & Verdien Spellen", "Win & Verdien", "Verdien Terwijl Je Speelt"],
        el: ["Παίξτε για να Κερδίσετε", "Κερδίστε και Αποκτήστε", "Κερδίστε Παίζοντας"],
        it: ["Giochi per Guadagnare", "Vinci e Guadagna", "Guadagna Giocando"],
        ro: ["Jocuri pentru a Câștiga", "Joacă și Câștigă", "Câștigă În Timp ce Te Joci"],
        pt: ["Jogos para Ganhar", "Ganhe e Lucre", "Lucre Jogando"],
      },
    },
    top_promotions: {
      en: ["Top Promotions", "Hot Deals", "Best Offers"],
      pl: ["Top Promocje", "Gorące Oferty", "Najlepsze Oferty"],
      es: ["Top Promociones", "Ofertas Calientes", "Mejores Ofertas"],
      fr: ["Top Promotions", "Offres Chaudes", "Meilleures Offres"],
      de: ["Top Aktionen", "Heiße Angebote", "Beste Angebote"],
      nl: ["Top Aanbiedingen", "Hete Deals", "Beste Aanbiedingen"],
      el: ["Κορυφαίες Προσφορές", "Καυτές Προσφορές", "Καλύτερες Προσφορές"],
      it: ["Top Promozioni", "Offerte Calde", "Migliori Offerte"],
      ro: ["Cele Mai Bune Promoții", "Oferte Fierbinți", "Cele Mai Bune Oferte"],
      pt: ["Melhores Promoções", "Ofertas Quentes", "Melhores Ofertas"],
    },
    top_winners_of_the_day: {
      en: ["Top Winners of the Day", "Today's Champions", "Winners Circle"],
      pl: ["Najwięksi Zwycięzcy Dnia", "Dzisiejsi Mistrzowie", "Krąg Zwycięzców"],
      es: ["Principales Ganadores del Día", "Campeones de Hoy", "Círculo de Ganadores"],
      fr: ["Meilleurs Gagnants du Jour", "Champions d'Aujourd'hui", "Cercle des Gagnants"],
      de: ["Top-Gewinner des Tages", "Heutige Champions", "Gewinnerkreis"],
      nl: ["Top Winnaars van de Dag", "Kampioenen van Vandaag", "Winnaarscirkel"],
      el: ["Κορυφαίοι Νικητές της Ημέρας", "Πρωταθλητές Σήμερα", "Κύκλος Νικητών"],
      it: ["Migliori Vincitori del Giorno", "Campioni di Oggi", "Cerchia dei Vincitori"],
      ro: ["Cei Mai Buni Câștigători ai Zilei", "Campionii Zilei", "Cercul Câștigătorilor"],
      pt: ["Maiores Vencedores do Dia", "Campeões do Dia", "Círculo dos Vencedores"],
    },
    footer_our_social_networks: {
      en: ["Our Social Networks", "Follow Us Online", "Stay Connected"],
      pl: ["Nasze Media Społecznościowe", "Śledź Nas Online", "Pozostań w Kontakcie"],
      es: ["Nuestras Redes Sociales", "Síguenos Online", "Mantente Conectado"],
      fr: ["Nos Réseaux Sociaux", "Suivez-nous en Ligne", "Restez Connecté"],
      de: ["Unsere sozialen Netzwerke", "Folgen Sie uns online", "Bleiben Sie in Kontakt"],
      nl: ["Onze Sociale Netwerken", "Volg Ons Online", "Blijf Verbonden"],
      el: ["Τα Κοινωνικά μας Δίκτυα", "Ακολουθήστε μας Online", "Μείνετε Συνδεδεμένοι"],
      it: ["I Nostri Social Network", "Seguici Online", "Resta Connesso"],
      ro: ["Rețelele Noastre Sociale", "Urmărește-ne Online", "Rămâi Conectat"],
      pt: ["Nossas Redes Sociais", "Siga-nos Online", "Fique Conectado"],
    },
    promo: {
      title: {
        en: ["Cashback every day", "Be in the flow of luck!", "Crazy roulette"],
        pl: ["Cashback każdego dnia", "Bądź w nurcie szczęścia!", "Szalona ruletka"],
        es: ["Cashback todos los días", "¡Sumérgete en la suerte!", "Ruleta loca"],
        fr: ["Cashback chaque jour", "Soyez dans le flux de la chance!", "Roulette folle"],
        de: ["Täglich Cashback", "Bleib im Fluss des Glücks!", "Verrücktes Roulette"],
        nl: ["Dagelijks Cashback", "Blijf in de flow van geluk!", "Gekke roulette"],
        el: ["Επιστροφή χρημάτων κάθε μέρα", "Μπες στη ροή της τύχης!", "Τρελή ρουλέτα"],
        it: ["Cashback ogni giorno", "Sii nel flusso della fortuna!", "Roulette pazza"],
        ro: ["Cashback în fiecare zi", "Fii în ritmul norocului!", "Ruletă nebună"],
        pt: ["Cashback todos os dias", "Esteja no fluxo da sorte!", "Roleta louca"],
      },
      subtitle: {
        en: [
          "Spin your favorite slots without worries – well give you cashback!",
          "Huge prizes await you in an exciting new promotion!",
          "Your chance to rule the roulette table and claim your share of incredible prizes!",
        ],
        pl: [
          "Graj na swoich ulubionych automatach bez obaw – zwrócimy Ci cashback!",
          "Ogromne nagrody czekają na Ciebie w ekscytującej nowej promocji!",
          "Twoja szansa na rządzenie stołem ruletki i zdobycie niesamowitych nagród!",
        ],
        es: [
          "Gira tus tragamonedas favoritas sin preocupaciones – ¡te devolvemos cashback!",
          "¡Grandes premios te esperan en una nueva promoción emocionante!",
          "Tu oportunidad de dominar la mesa de ruleta y reclamar increíbles premios!",
        ],
        fr: [
          "Faites tourner vos machines à sous préférées sans souci – nous vous offrons du cashback!",
          "D'énormes prix vous attendent dans une nouvelle promotion passionnante!",
          "Votre chance de dominer la table de roulette et de réclamer votre part des incroyables prix!",
        ],
        de: [
          "Drehen Sie Ihre Lieblings-Slots ohne Sorgen – wir geben Ihnen Cashback!",
          "Riesige Preise erwarten Sie in einer spannenden neuen Aktion!",
          "Ihre Chance, den Roulettetisch zu beherrschen und unglaubliche Preise zu gewinnen!",
        ],
        nl: [
          "Draai je favoriete slots zonder zorgen – wij geven je cashback!",
          "Enorme prijzen wachten op je in een spannende nieuwe promotie!",
          "Jouw kans om de roulettetafel te domineren en geweldige prijzen te winnen!",
        ],
        el: [
          "Γυρίστε τα αγαπημένα σας φρουτάκια χωρίς άγχος – σας επιστρέφουμε cashback!",
          "Τεράστια βραβεία σας περιμένουν σε μια συναρπαστική νέα προσφορά!",
          "Η ευκαιρία σας να κυριαρχήσετε στο τραπέζι της ρουλέτας και να διεκδικήσετε φανταστικά βραβεία!",
        ],
        it: [
          "Gira le tue slot preferite senza preoccupazioni – ti offriamo cashback!",
          "Grandi premi ti aspettano in una nuova promozione emozionante!",
          "La tua occasione per dominare la roulette e vincere incredibili premi!",
        ],
        ro: [
          "Joacă sloturile tale preferate fără griji – îți oferim cashback!",
          "Premii uriașe te așteaptă într-o nouă promoție palpitantă!",
          "Șansa ta de a domina masa de ruletă și de a revendica premii incredibile!",
        ],
        pt: [
          "Gire seus slots favoritos sem preocupações – nós te damos cashback!",
          "Prêmios incríveis esperam por você em uma nova promoção emocionante!",
          "Sua chance de dominar a mesa de roleta e ganhar prêmios incríveis!",
        ],
      },
      price: {
        en: ["Total win"],
        pl: ["Całkowita wygrana"],
        es: ["Ganancia total"],
        fr: ["Gain total"],
        de: ["Gesamtgewinn"],
        nl: ["Totale winst"],
        el: ["Συνολική νίκη"],
        it: ["Vincita totale"],
        ro: ["Câștig total"],
        pt: ["Ganho total"],
      },
    },
    tournament_box: {
      sub: {
        en: ["SLOTS", "JACKPOT", "SLOTS"],
        pl: ["AUTOMATY", "JACKPOT", "AUTOMATY"],
        es: ["TRAGAPERRAS", "JACKPOT", "TRAGAPERRAS"],
        fr: ["MACHINES À SOUS", "JACKPOT", "MACHINES À SOUS"],
        de: ["SLOTS", "JACKPOT", "SLOTS"],
        nl: ["GOKAUTOMATEN", "JACKPOT", "GOKAUTOMATEN"],
        el: ["ΦΡΟΥΤΑΚΙΑ", "ΤΖΑΚΠΟΤ", "ΦΡΟΥΤΑΚΙΑ"],
        it: ["SLOT", "JACKPOT", "SLOT"],
        ro: ["PĂCĂNELE", "JACKPOT", "PĂCĂNELE"],
        pt: ["CASSINOS", "JACKPOT", "CASSINOS"],
      },
      title: {
        en: ["of weekly", "Lucky players", "of month"],
        pl: ["z tygodnia", "Szczęśliwi gracze", "z miesiąca"],
        es: ["de la semana", "Jugadores afortunados", "del mes"],
        fr: ["de la semaine", "Joueurs chanceux", "du mois"],
        de: ["der Woche", "Glückliche Spieler", "des Monats"],
        nl: ["van de week", "Gelukkige spelers", "van de maand"],
        el: ["της εβδομάδας", "Τυχεροί παίκτες", "του μήνα"],
        it: ["della settimana", "Giocatori fortunati", "del mese"],
        ro: ["din săptămână", "Jucători norocoși", "din lună"],
        pt: ["da semana", "Jogadores sortudos", "do mês"],
      },
    },
  },
};

export default combinedData;