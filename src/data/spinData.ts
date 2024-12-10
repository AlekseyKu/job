type Locale = "en" | "pl" | "es" | "fr" | "de" | "nl";

type SpinDataItem = {
    pretitle?: Record<Locale, string[]>;
    title?: Record<Locale, string[]>;
    [key: string]: Record<Locale, string[]> | undefined;
};

export const spinData: Record<string, SpinDataItem | Record<Locale, string[]>> = {
    header_button_text: {
        en: ["Login", "Sign In", "Access Account"],
        pl: ["Zaloguj się", "Zarejestruj się", "Dostęp do konta"],
        es: ["Iniciar Sesión", "Entrar", "Acceder"],
        fr: ["Connexion", "Se Connecter", "Accéder au Compte"],
        de: ["Einloggen", "Anmelden", "Konto Zugriff"],
        nl: ["Inloggen", "Aanmelden", "Toegang tot Account"],
    },
    list_of_games: {
        pretitle: {
            en: ["List of Games", "Explore Games", "Our Games"],
            pl: ["Lista Gier", "Odkryj Gry", "Nasze Gry"],
            es: ["Lista de Juegos", "Explorar Juegos", "Nuestros Juegos"],
            fr: ["Liste des Jeux", "Explorer les Jeux", "Nos Jeux"],
            de: ["Spielübersicht", "Spiele Entdecken", "Unsere Spiele"],
            nl: ["Lijst van Spellen", "Ontdek Spellen", "Onze Spellen"],
        },
        title: {
            en: ["Best Slots", "Top Slots", "Favorite Slots"],
            pl: ["Najlepsze Automaty", "Top Automaty", "Ulubione Gry"],
            es: ["Mejores Slots", "Top Slots", "Slots Favoritos"],
            fr: ["Meilleures Machines", "Top Machines", "Machines Préférées"],
            de: ["Beste Slots", "Top Slots", "Beliebte Slots"],
            nl: ["Beste Slots", "Top Slots", "Favoriete Slots"],
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
        },
        title: {
            en: ["Top Rated", "Editor's Picks", "Highly Rated"],
            pl: ["Najwyżej Oceniane", "Wybór Redakcji", "Najlepiej Oceniane"],
            es: ["Mejor Valorados", "Selección del Editor", "Altamente Valorados"],
            fr: ["Mieux Notés", "Choix de l'Éditeur", "Hautement Notés"],
            de: ["Top Bewertungen", "Redaktionsempfehlung", "Höchst Bewertet"],
            nl: ["Hoogst Beoordeeld", "Redactie Keuze", "Top Beoordeeld"],
        },
    },
    top_promotions: {
        en: ["Top Promotions", "Hot Deals", "Best Offers"],
        pl: ["Top Promocje", "Gorące Oferty", "Najlepsze Oferty"],
        es: ["Top Promociones", "Ofertas Calientes", "Mejores Ofertas"],
        fr: ["Top Promotions", "Offres Chaudes", "Meilleures Offres"],
        de: ["Top Aktionen", "Heiße Angebote", "Beste Angebote"],
        nl: ["Top Aanbiedingen", "Hete Deals", "Beste Aanbiedingen"],
    },
    top_winners_of_the_day: {
        en: ["Top Winners of the Day", "Today's Champions", "Winners Circle"],
        pl: ["Najwięksi Zwycięzcy Dnia", "Dzisiejsi Mistrzowie", "Krąg Zwycięzców"],
        es: ["Principales Ganadores del Día", "Campeones de Hoy", "Círculo de Ganadores"],
        fr: ["Meilleurs Gagnants du Jour", "Champions d'Aujourd'hui", "Cercle des Gagnants"],
        de: ["Top-Gewinner des Tages", "Heutige Champions", "Gewinnerkreis"],
        nl: ["Top Winnaars van de Dag", "Kampioenen van Vandaag", "Winnaarscirkel"],
    },
    most_lucky_players: {
        pretitle: {
            en: ["Most Lucky Players", "Luckiest Players", "Biggest Winners"],
            pl: ["Najszczęśliwsi Gracze", "Szczęśliwi Gracze", "Największe Szczęście"],
            es: ["Jugadores Más Afortunados", "Ganadores con Suerte", "Mayores Ganadores"],
            fr: ["Joueurs les Plus Chanceux", "Gagnants Chanceux", "Plus Grands Gagnants"],
            de: ["Glücklichste Spieler", "Spieler mit Glück", "Größte Gewinner"],
            nl: ["Meest Gelukkige Spelers", "Gelukswinnaars", "Grootste Winnaars"],
        },
        title: {
            en: ["Play to Earn Games", "Win & Earn", "Earn While Playing"],
            pl: ["Gry Zarabiające", "Wygraj i Zarób", "Zarabiaj Grając"],
            es: ["Juegos para Ganar", "Juega y Gana", "Gana Mientras Juegas"],
            fr: ["Jouez pour Gagner", "Gagnez en Jouant", "Jouez et Gagnez"],
            de: ["Spiele, um zu Gewinnen", "Gewinnen & Verdienen", "Beim Spielen Verdienen"],
            nl: ["Spel & Verdien Spellen", "Win & Verdien", "Verdien Terwijl Je Speelt"],
        },
    },
    footer_our_social_networks: {
        en: ["Our Social Networks", "Follow Us Online", "Stay Connected"],
        pl: ["Nasze Media Społecznościowe", "Śledź Nas Online", "Pozostań w Kontakcie"],
        es: ["Nuestras Redes Sociales", "Síguenos Online", "Mantente Conectado"],
        fr: ["Nos Réseaux Sociaux", "Suivez-nous en Ligne", "Restez Connecté"],
        de: ["Unsere sozialen Netzwerke", "Folgen Sie uns online", "Bleiben Sie in Kontakt"],
        nl: ["Onze Sociale Netwerken", "Volg Ons Online", "Blijf Verbonden"],
    },
};
