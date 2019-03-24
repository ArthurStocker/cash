import { Account } from './account.class';

export const ACCOUNTS: Account[] = [
  {
    id: 1000,
    name: 'Porte-Monnaie',
    class: '1',
    order: 0,
    serial: 0,
    amount: 100.00,
    operator: '=',
    description: 'Bargeld Porte-Monnaie'
  },
  {
    id: 1010,
    name: 'Kässeli',
    class: '1',
    order: 0,
    serial: 0,
    amount: 0.00,
    operator: '=',
    description: 'Geld im Kässeli'
  },
  {
    id: 1020,
    name: 'Bank',
    class: '1',
    order: 0,
    serial: 0,
    amount: 0.00,
    operator: '=',
    description: 'Geld auf dem Bankkonto'
  },
  {
    id: 3000,
    name: 'Kleider',
    class: '3',
    order: 0,
    serial: 0,
    amount: 120.00,
    operator: '~',
    description: 'Kleider (4 Hosen)'
  },
  {
    id: 3010,
    name: 'Schuhe',
    class: '3',
    order: 0,
    serial: 0,
    amount: 220.00,
    operator: '~',
    description: 'Winter, Freizeit, Sandalen'
  },
  {
    id: 3020,
    name: 'Mobile',
    class: '3',
    order: 0,
    serial: 0,
    amount: 150.00,
    operator: '~',
    description: 'Anschaffungen'
  },
  {
    id: 3100,
    name: 'Büromaterial',
    class: '3',
    order: 0,
    serial: 0,
    amount: 42.70,
    operator: '~',
    description: 'Bleistift, Radierer, Lineal, Geodreieck, Kugelschreiber, Filzschreiber, TippEx, Spitzer'
  },
  {
    id: 3200,
    name: 'Essen',
    class: '3',
    order: 0,
    serial: 0,
    amount: 380.00,
    operator: '~',
    description: 'Auswärtige Mahlzeiten'
  },
  {
    id: 3210,
    name: 'Coiffeur',
    class: '3',
    order: 0,
    serial: 0,
    amount: 80.00,
    operator: '~',
    description: ''
  },
  {
    id: 3220,
    name: 'Kosmetika',
    class: '3',
    order: 0,
    serial: 0,
    amount: 135.00,
    operator: '~',
    description: 'Schminke & Haarpflege'
  },
  {
    id: 3230,
    name: 'Fahrrad',
    class: '3',
    order: 0,
    serial: 0,
    amount: 75.00,
    operator: '~',
    description: 'Fahrradservice'
  },
  {
    id: 3240,
    name: 'Fahrkosten',
    class: '3',
    order: 0,
    serial: 0,
    amount: 125.00,
    operator: '~',
    description: 'ÖV - 2 Wochen/Jahr'
  },
  {
    id: 3300,
    name: 'Unterhaltung',
    class: '3',
    order: 0,
    serial: 0,
    amount: 416.00,
    operator: '~',
    description: 'Taschengeld: Kino, Konzerte, Disco, Kiosk, Heftli, …'
  },
  {
    id: 5000,
    name: 'Sport',
    class: '5',
    order: 0,
    serial: 0,
    amount: 0.00,
    operator: '~',
    description: 'Sportgeräte, Sportbekleidung und Sportausrüstung'
  },
  {
    id: 5200,
    name: 'Mobileabo',
    class: '5',
    order: 0,
    serial: 0,
    amount: 0.00,
    operator: '~',
    description: 'Abo/Prepaid'
  },
  {
    id: 6000,
    name: 'Lohn',
    class: '6',
    order: 0,
    serial: 0,
    amount: 0.00,
    operator: '~',
    description: 'Jugendlohn'
  },
  {
    id: 6100,
    name: 'Honorar',
    class: '5',
    order: 0,
    serial: 0,
    amount: 0.00,
    operator: '~',
    description: 'Einnahmen aus zusätzlichen Arbeiten/Leistungen'
  },
  {
    id: 6400,
    name: 'Batzen',
    class: '6',
    order: 0,
    serial: 0,
    amount: 0.00,
    operator: '~',
    description: 'Geschenktes Geburtstag-, Ostern- und Weihnachtsgeld'
  },
  {
    id: 7500,
    name: 'Geschenke',
    class: '7',
    order: 0,
    serial: 0,
    amount: 60.00,
    operator: '~',
    description: 'Wichteln, Weihnachten Freunde + Familie'
  }
];

/*
.Kleider (4 Hosen)                                                                                      120.00	9.25	ja
.Schuhe (Winter, Freizeit, Sandalen)		                                                                220.00	16.90	ja
.Coiffeur		                                                                                            80.00	  5.15	ja
.Fahrradservice		                                                                                      75.00	  5.75	ja
.Fahrkosten öV (2Wochen/Jahr)		                                                                        125.00	9.60	ja
.Kosmetika, Haarpflege		                                                                              135.00	10.40	ja
.Sportgeräte, Sportbekleidung und Sportausrüstung	                                                      0.00	  0.00	nein
.Handy (Anschaffung)		                                                                                150.00	11.55	ja
.Handy Abo/Prepaid		                                                                                  0.00	  0.00	nein
.Büromaterial: Bleistift, Radierer, Lineal, Geodreieck, Kugelschreiber, Filzschreiber, TippEx, Spitzer  42.70	  3.30	ja
.Taschengeld: Kino, Konzerte, Disco, Kiosk, Heftli, …		                                                416.00	32.00	ja
.Auswärtige Mahlzeiten		                                                                              380.00	29.25	ja
.Geschenke (Wichteln, Weihnachten Freunde + Familie)		                                                60.00	  4.60	ja
*/
