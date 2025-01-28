import { Locale } from "../types/locales"
// type Locale = "en" | "pl" | "es" | "fr" | "de" | "nl" | "el" | "it" | "ro";

type SpinDataItem = {
  pretitle?: Record<Locale, string[]>;
  title?: Record<Locale, string[]>;
  [key: string]: Record<Locale, string[]> | undefined;
};

export const spinData: Record<string, SpinDataItem | Record<Locale, string[]>> = {
  button_text: {
    en: ["Login", "Sign In", "Access Account"],
    pl: ["Zaloguj się", "Zarejestruj się", "Dostęp do konta"],
    es: ["Iniciar Sesión", "Entrar", "Acceder"],
    fr: ["Connexion", "Se Connecter", "Accéder au Compte"],
    de: ["Einloggen", "Anmelden", "Konto Zugriff"],
    nl: ["Inloggen", "Aanmelden", "Toegang tot Account"],
    el: ["Σύνδεση", "Είσοδος", "Πρόσβαση στον Λογαριασμό"],
    it: ["Accedi", "Entra", "Accedi al Conto"],
    ro: ["Conectare", "Autentificare", "Accesează Contul"],
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
  },
};
