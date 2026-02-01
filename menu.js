// menu.js
// Expanded Nigerian Lounge Menu with per-item pricing

// featuredEvents.js
const featuredEvents = [
  {
    id: "event-1",
    title: "Urban Friday Night",
    date: "Jan 30, 2026",
    image: "https://i.ibb.co/WNW7Gb5J/photo-2026-01-28-00-40-09.jpg",
  },
  {
    id: "event-2",
    title: "DJ Night Special",
    date: "Feb 5, 2026",
    image: "https://i.ibb.co/zhQbmCqr/photo-2026-01-28-00-37-32.jpg",
  },
  {
    id: "event-3",
    title: "Cocktail Lounge Evening",
    date: "Feb 12, 2026",
    image: "https://i.ibb.co/7xR10h6n/photo-2026-01-29-23-28-06.jpg",
  },
  {
    id: "event-4",
    title: "DJ Night Special",
    date: "Feb 5, 2026",
    image: "https://i.ibb.co/XZcb2MNt/photo-2026-01-29-23-27-56.jpg",
  },
  {
    id: "event-5",
    title: "DJ Night Special",
    date: "Feb 5, 2026",
    image: "https://i.ibb.co/jkL5JCb7/photo-2026-01-29-23-28-02.jpg",
  },
  {
    id: "event-6",
    title: "DJ Night Special",
    date: "Feb 5, 2026",
    image:
      "https://carabana.vercel.app/_next/image?url=%2Fcarab.jpg&w=640&q=75",
  },
];

// Global access
window.featuredEvents = featuredEvents;

const menuData = {
  tequilla: [
    {
      id: "teq-1",
      name: "AZUL BLACK MEZCAL",
      price: 1200000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJWvdcYpjaTpj_vccrWVqermpTo2PNcXFEw&s",
      description: "Classic Marlboro taste",
      featured: true,
    },
    {
      id: "teq-2",
      name: "AZUL CLASE",
      price: 600000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7SQyXsjx3QpyVVk5MXWWwjvpC20N4u7eROg&s",
      description: "Smooth & light",
      featured: false,
    },
    {
      id: "teq-3",
      name: "DON JULIO",
      price: 700000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8csSGThVj72YsAUvDD4gnTEsh7ixZwaXI-A&s",
      description: "Popular Nigerian brand",
      featured: true,
    },
    {
      id: "teq-4",
      name: "DON JULIO REPOSADO",
      price: 350000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6p5QRgwSVnUevbpmgR9k7PBdrLT2HoQ7xdg&s",
      description: "Menthol capsule cigarette",
      featured: false,
    },
    {
      id: "teq-5",
      name: "VOLCAN XA",
      price: 450000,
      image:
        "https://bodegaslacatedral.com/cdn/shop/files/El_volcan_X.A._Bodegas_La_Catedral.jpg?v=1704559534&width=1214",
      description: "Premium cigarette brand",
      featured: false,
    },
    {
      id: "teq-6",
      name: "VOLCAN WHITE",
      price: 200000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsj5OgHVPX-62e31mmvmBUMYJj2luI6GJF3J_wf_hukQ&s",
      description: "Smooth classic cigarette",
      featured: false,
    },
    {
      id: "teq-7",
      name: "VOLCAN GOLD",
      price: 200000,
      image:
        "https://dramfellows.com/cdn/shop/files/volcan-de-mi-tierra-reposado-tequila-713612.jpg?v=1707645896",
      description: "Smooth classic cigarette",
      featured: false,
    },
    {
      id: "teq-8",
      name: "SIERRA TEQUILLA",
      price: 40000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsmaCaPZznmoDpRRifNOJpATBSVJ2_bTHDpQ&s",
      description: "Smooth classic cigarette",
      featured: false,
    },
    {
      id: "teq-9",
      name: "OLMECA TEQUILLA",
      price: 80000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyHY2CKjTQrvBCQlb05sB2zeklCYHgA73TQ&s",
      description: "Smooth classic cigarette",
      featured: false,
    },
    {
      id: "teq-10",
      name: "CASA MAESTRI",
      price: 250000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk80K2QiGuMvaeh5Qk1AT--EembbcvF3emLQ&s",
      description: "Smooth classic cigarette",
      featured: false,
    },
    {
      id: "teq-11",
      name: "CASAMIGOS WHITE",
      price: 300000,
      image:
        "https://cdn11.bigcommerce.com/s-ixos9dp5s/products/7187/images/11905/image_03258dd1-7778-473d-8a2a-3852256ca420__16378.1657011703.386.513__72811.1669695692.386.513.jpg?c=1",
      description: "Smooth classic cigarette",
      featured: false,
    },
    {
      id: "teq-10",
      name: "CASAMIGOS GOLD",
      price: 300000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjTJbVpX0_07MNuhgFWXHYvtNT6tzy0bhSw&s",
      description: "Smooth classic cigarette",
      featured: false,
    },
  ],

  cognac: [
    {
      id: "cog-1",
      name: "HENNESSY XO",
      price: 550000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmpyhEjQQToIAvlg-FputRdtvWKgj8unYhw&s",
      description: "Classic Marlboro taste",
      featured: true,
    },
    {
      id: "cog-2",
      name: "HENNESSY VSOP",
      price: 190000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1BfpYs72_F660XYxpmfhBTUJFn5e3p-nXQ&s",
      description: "Smooth & light",
      featured: false,
    },
    {
      id: "cog-3",
      name: "HENNESSY VS",
      price: 130000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pmTVnSAXM4UTwca8gSK_aN-gB_zGrFpcuA&s",
      description: "Popular Nigerian brand",
      featured: false,
    },
    {
      id: "cog-4",
      name: "MARTELL XXO",
      price: 600000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0ox8dHODmjIVCYpNxo_QNoDYZP7bVG9vtA&s",
      description: "Menthol capsule cigarette",
      featured: true,
    },
    {
      id: "cog-5",
      name: "MARTELL XO",
      price: 450000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIKdpiDwc9dthOpe7xWvnITQ0L5gxeeU5Q0g&s",
      description: "Premium cigarette brand",
      featured: false,
    },
    {
      id: "cog-6",
      name: "MARTELL BLUESWIFT",
      price: 150000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_y0HwXYexwVsnV0IRcY2b6qUIy0CuDTpedg&s",
      description: "Smooth classic cigarette",
      featured: false,
    },
    {
      id: "cog-7",
      name: "MARTELL VS",
      price: 80000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRXf6EEa6TSaE0T1xyqmkQbPN3l_2ohXLtg&s",
      description: "Smooth classic cigarette",
      featured: false,
    },
    {
      id: "cog-8",
      name: "REMY MARTINS XO",
      price: 450000,
      image:
        "https://img.drinksdirect.com/remy-martin-xo-excellence-cognac-70cl-in-branded-b-832/6146/800x800/remy-martin-xo-excellence-cognac-70cl-in-branded-b-832.webp",
      description: "Smooth classic cigarette",
      featured: false,
    },
    {
      id: "cog-9",
      name: "REMY MARTINS VSOP",
      price: 120000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9IRsvTJD8Cnu4LpjAYW89347FIbIyyobrvw&s",
      description: "Smooth classic cigarette",
      featured: false,
    },
    {
      id: "cog-10",
      name: "REMY MARTINS 1738",
      price: 180000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaphGB9enEQfTS0_I6u2IQvRFajIUXA6Br4Q&s",
      description: "Smooth classic cigarette",
      featured: false,
    },
    {
      id: "cog-11",
      name: "MEUKOW VS",
      price: 100000,
      image:
        "https://images-svetnapojov-cdn.rshop.sk/gallery-big/products/dc0f1e6b1eeb53e496a6fdb9ee944571.png",
      description: "Smooth classic cigarette",
      featured: false,
    },
  ],

  beer: [
    {
      id: "beer-1",
      name: "DESPERADO",
      price: 1550,
      image:
        "https://www.purvisbeer.com.au/cdn/shop/products/image_57e8b81a-bff5-470c-82d7-2356fb11a519.jpg?v=1620067363&width=1946",
      description: "Classic Nigerian lager",
      featured: true,
    },
    {
      id: "beer-2",
      name: "BIG STOUT",
      price: 2250,
      image:
        "https://carabana.vercel.app/_next/image?url=%2Fbigstout.webp&w=384&q=75",
      description: "Bold premium lager",
      featured: false,
    },
    {
      id: "beer-3",
      name: "HEINEKEN",
      price: 2050,
      image:
        "https://carabana.vercel.app/_next/image?url=%2Fhein.jpg&w=384&q=75",
      description: "Proudly brewed in Nigeria",
      featured: true,
    },
    {
      id: "beer-4",
      name: "MEDIUM HEINEKEN",
      price: 1550,
      image:
        "https://carabana.vercel.app/_next/image?url=%2Fhein.jpg&w=384&q=75",
      description: "International premium lager",
      featured: false,
    },
    {
      id: "beer-5",
      name: "BIG ORIGIN",
      price: 1850,
      image:
        "https://chomart.com/storage/images/big-origin-bitters-qi3gr241032.webp",
      description: "Premium American lager",
      featured: false,
    },
    {
      id: "beer-6",
      name: "TIGER",
      price: 1250,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OLu1t0poPmS4FzKIXbdNedfLSiE1PXTk3A&s",
      description: "Asian premium lager",
      featured: false,
    },
    {
      id: "beer-7",
      name: "SMALL STOUT",
      price: 1250,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImHd_wBPfSUQhRY9XwEr8k9xFSurqv09zLw&s",
      description: "Tequila flavoured beer",
      featured: false,
    },
    {
      id: "beer-8",
      name: "GOLDBERG",
      price: 1550,
      image:
        "https://theeagleonline.com.ng/wp-content/uploads/2017/11/Goldberg-lager-beer.jpg",
      description: "Strong Nigerian stout",
      featured: false,
    },
    {
      id: "beer-9",
      name: "GULDER",
      price: 1550,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShp78gCwaqlIYbD81oHGibyuAl7ThspPpZhQ&s",
      description: "Strong Nigerian stout",
      featured: false,
    },
    {
      id: "beer-10",
      name: "33 EXPORT",
      price: 1550,
      image:
        "https://cdn.shopperswarehouse.com/live/images/43126c-1752866575377-16c390.jpg",
      description: "Strong Nigerian stout",
      featured: false,
    },
    {
      id: "beer-11",
      name: "STAR",
      price: 1550,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LdzUAb4zuLigU-KCi39To1d5eOkGrUb8-g&s",
      description: "Strong Nigerian stout",
      featured: false,
    },
    {
      id: "beer-12",
      name: "LIFE",
      price: 1550,
      image:
        "https://cdn.shopperswarehouse.com/live/images/18c27b-1753292761953-261a18.jpg",
      description: "Strong Nigerian stout",
      featured: false,
    },
    {
      id: "beer-13",
      name: "TROPHY",
      price: 1550,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LdxraRXa1TCiCdg59M2DSJN7QlPwRlctCg&s",
      description: "Strong Nigerian stout",
      featured: false,
    },
    {
      id: "beer-14",
      name: "TROPHY STOUT",
      price: 1750,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmGXsyj1T41DJp-SWt1SO0JrIaX3tMrIdjKA&s",
      description: "Strong Nigerian stout",
      featured: false,
    },
    {
      id: "beer-15",
      name: "HERO",
      price: 1550,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON6nI1GCVGY-aw8mthNdgJjlmGPib8bUWjA&s",
      description: "Strong Nigerian stout",
      featured: false,
    },
    {
      id: "beer-16",
      name: "SMIRNOFF ICE",
      price: 1250,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBW0so6WW-g-VQrK460Z-9JJS70UM7rt3Szw&s",
      description: "Strong Nigerian stout",
      featured: false,
    },
    {
      id: "beer-17",
      name: "GUINESS EXTRA SMOOTH",
      price: 1050,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8A478inc_nz-JgKbUn_Up51Zeng39FCAtBg&s",
      description: "Strong Nigerian stout",
      featured: false,
    },
    {
      id: "beer-18",
      name: "LEGEND",
      price: 2050,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSM3W9I0D1jIL7-kcVHZQfOcW0GbNf2vX3Gw&s",
      description: "Strong Nigerian stout",
      featured: false,
    },
    {
      id: "beer-19",
      name: "ODOGWU BITTERS",
      price: 2050,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbqKM-Cayab29HJyIZ_wHxKHMrSQzp1Er9Ew&s",
      description: "Strong Nigerian stout",
      featured: false,
    },
    {
      id: "beer-20",
      name: "BUDWEISER",
      price: 1850,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRH41F4IXUpQmewjAEhLUpgD_V4qxdHipqTw&s",
      description: "Strong Nigerian stout",
      featured: false,
    },
    {
      id: "beer-21",
      name: "SMIRNOFF ICE DOUBLE BLACK",
      price: 2050,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOC1cGoKublDRjmSHm6gtkPUibsbdDx74FKA&s",
      description: "Strong Nigerian stout",
      featured: false,
    },
    {
      id: "beer-22",
      name: "FLYING FISH",
      price: 1250,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83E__YypiKG_xlYkok9yKgJvPJLsSOViQsg&s",
      description: "Strong Nigerian stout",
      featured: false,
    },
    {
      id: "beer-23",
      name: "CASTLE LITE",
      price: 1550,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrL7QZC0fn4dHhT1sxIRZkGiWtn2u2fEgqwA&s",
      description: "Strong Nigerian stout",
      featured: false,
    },
    {
      id: "beer-24",
      name: "HARMATTAN HAZE",
      price: 4000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGaygXkFaFL_nbFO0Enfz5TWsUD0rB3wmHQ&s",
      description: "Strong Nigerian stout",
      featured: false,
    },
  ],

  champagne: [
    {
      id: "cham-1",
      name: "ACE OF SPADES",
      price: 700000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlIpSCLMRKeSubrLs8yBVq5DzPxHY_iu22g&s",
      description: "Classic double apple",
      featured: true,
    },
    {
      id: "cham-2",
      name: "CRISTAL CHAMPAGNE",
      price: 700000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XYKhRN5ETxx75767pufCeSRNcAi8CAjHdqustfUlBg&s",
      description: "Cool mint flavour",
      featured: false,
    },
    {
      id: "cham-3",
      name: "DOM PERIGNON",
      price: 750000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZYB7TDpTMnAUaPvsYK-EihPW5J-U7vUtBg&s",
      description: "Sweet blueberry smoke",
      featured: true,
    },
    {
      id: "cham-4",
      name: "MOET ROSE",
      price: 200000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOkIhBIV3s-Z8iNA6Ucg9RpWWT5Asrr2auA&s",
      description: "Rich grape flavour",
      featured: false,
    },
    {
      id: "cham-5",
      name: "MOET ICE",
      price: 250000,
      image:
        "https://champagnegallery.com.au/cdn/shop/products/Moet_ChandonIceImperial.jpg?v=1613694943",
      description: "Refreshing citrus blend",
      featured: false,
    },
    {
      id: "cham-6",
      name: "VEUVE CLIEQUOT",
      price: 20000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOvMZoA7AomoldxoPE-T5gls45pnJ5T7tKw&s",
      description: "Sweet watermelon flavour",
      featured: false,
    },
    {
      id: "cham-7",
      name: "BELAIRE ROSE",
      price: 120000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3JWECn3QRa5fLwUvoQxoyvXRtYPpdZatZA&s",
      description: "Sweet watermelon flavour",
      featured: false,
    },
    {
      id: "cham-8",
      name: "BELAIRE LUX",
      price: 120000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHusgy7tNEaR2ciOXn2vLnCn9KnsmK7VL5uQ&s",
      description: "Sweet watermelon flavour",
      featured: false,
    },
    {
      id: "cham-9",
      name: "BELAIRE LUX FANTOME",
      price: 120000,
      image: "https://booze.ng/wp-content/uploads/2024/10/8244-1-1.jpg",
      description: "Sweet watermelon flavour",
      featured: false,
    },
  ],

  whisky: [
    {
      id: "whisky-1",
      name: "GLENFIDDICH (23 YEARS)",
      price: 800000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtI1w6EEXLjKM13aouqRXSSDtWNWAg3NTXxA&s",
      description: "Irish blended whisky",
      featured: true,
    },
    {
      id: "whisky-2",
      name: "GLENFIDDICH (21 YEARS)",
      price: 550000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbMw7Q4okW_TpmuNLQOXgRpnW_pZGD02iNow&s",
      description: "Rich & smooth finish",
      featured: false,
    },
    {
      id: "whisky-3",
      name: "GLENFIDDICH (18 YEARS)",
      price: 200000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldzYACDENGPntfHO7MkQ9116Pc6ViRsvATQ&s",
      description: "Tennessee whiskey",
      featured: true,
    },
    {
      id: "whisky-4",
      name: "GLENFIDDICH (15 YEARS)",
      price: 140000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQtmNUQPnK6WytDxttQFzXQc9NuLWmabmPg&s",
      description: "Sweet honey whiskey",
      featured: false,
    },
    {
      id: "whisky-5",
      name: "GLENMORANGIE (10 YEARS)",
      price: 80000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_ayFj35i3tLspYsdSfZl5vzOTIbCi4xzYQ&s",
      description: "Smooth blended Scotch",
      featured: false,
    },
    {
      id: "whisky-6",
      name: "GLENMORANGIE (18 YEARS)",
      price: 200000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMN0vLtjR9QujFE3hh1goe6w8sX3cNXpIZYg&s",
      description: "Premium aged Scotch",
      featured: false,
    },
    {
      id: "whisky-7",
      name: "GLENMORANGIE SIGNET",
      price: 550000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_JO3HJhKMhvBN6fSbOSFkgPkm48zc24IqA&s",
      description: "Popular Nigerian favourite",
      featured: false,
    },
    {
      id: "whisky-8",
      name: "NECTAR D'OR",
      price: 120000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDn9XZKQUI2buaHW8s5hq-vfGyI4IV6jAlcw&s",
      description: "Bold blended whisky",
      featured: false,
    },
    {
      id: "whisky-9",
      name: "BlUE Label",
      price: 450000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQ6CJCzv38ziSyt3YrAqKYnrlp1O3cg8paA&s",
      description: "Premium blended Scotch",
      featured: false,
    },
    {
      id: "whisky-10",
      name: "BlACK Label",
      price: 60000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR231Fpk2kAp3_h0e0FSKq9rRMBYMcD6eF2zg&s",
      description: "Premium blended Scotch",
      featured: false,
    },
    {
      id: "whisky-11",
      name: "RED Label",
      price: 35000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwV_MjheSbEZPKmmDIstI62LHizJ1bWo8M2g&s",
      description: "Premium blended Scotch",
      featured: false,
    },
    {
      id: "whisky-12",
      name: "GOLD Label",
      price: 80000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUNK1fFlEe4zRJ7ZU6gwC_UAqE_ubYkAuRw&s",
      description: "Premium blended Scotch",
      featured: false,
    },
    {
      id: "whisky-13",
      name: "AMERICAN HONEY",
      price: 40000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0iBF6YdeRK6ugrHp0kU3c3NkObdWnVvubQ&s",
      description: "Premium blended Scotch",
      featured: false,
    },
    {
      id: "whisky-14",
      name: "JAMESON GREEN BARREL",
      price: 50000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb7vIQOwI2LStRn21UiDoxNT-TdbbePaal1A&s",
      description: "Premium blended Scotch",
      featured: false,
    },
    {
      id: "whisky-15",
      name: "JAMESON BLACK BARREL",
      price: 60000,
      image:
        "https://www.bogeysny.com/cdn/shop/files/FullSizeRender_5ab2018e-7666-44c4-a046-afd26247f450_1024x1024.heic?v=1744316640",
      description: "Premium blended Scotch",
      featured: false,
    },
    {
      id: "whisky-16",
      name: "MONKEY SHOULDER",
      price: 40000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3_wthUrJIm7XO59rBqLncQbskxqNxF_JuQ&s",
      description: "Premium blended Scotch",
      featured: false,
    },
    {
      id: "whisky-17",
      name: "JACK DANIELS OLD NO7",
      price: 45000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_pf4Ur-b3jjIRVcV12n0VOP_OXuVE9afK_g&s",
      description: "Premium blended Scotch",
      featured: false,
    },
    {
      id: "whisky-18",
      name: "CHIVAS REGAL 18 YEARS",
      price: 120000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmHP9gKUGfIveB4lgT3KAwY5-5aj3e9eBAw&s",
      description: "Premium blended Scotch",
      featured: false,
    },
    {
      id: "whisky-19",
      name: "CHIVAS XV 15 YEARS",
      price: 100000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9T8r31eHnBbqfQNho2mW4TgVpRtxwCvfUSA&s",
      description: "Premium blended Scotch",
      featured: false,
    },
    {
      id: "whisky-20",
      name: "CHIVAS 25 YEARS",
      price: 250000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz2vAIU0-CYifyVuHXa0IPsyJMHTsSIndgMw&s",
      description: "Premium blended Scotch",
      featured: false,
    },
    {
      id: "whisky-21",
      name: "OBSERVATORY 20YRS",
      price: 150000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDzSoU4_21OkGpgxImCX2o6FH1W9hR8-u3g&s",
      description: "Premium blended Scotch",
      featured: false,
    },
    {
      id: "whisky-22",
      name: "BALVENIE",
      price: 120000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXj01IY0StuFGqMK2abaHH4Yfp-29ELQQag&s",
      description: "Premium blended Scotch",
      featured: false,
    },
    {
      id: "whisky-23",
      name: "GENTLEMAN JACK",
      price: 110000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpfrYc2oiZBYLcUa2HVJ1nENyWjg0w8WiD6A&s",
      description: "Premium blended Scotch",
      featured: false,
    },
    {
      id: "whisky-24",
      name: "SINGLE BARREL JD",
      price: 150000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROxiL1lIP_UkaEOt9StXwVJDqj1052pkxFag&s",
      description: "Premium blended Scotch",
      featured: false,
    },
  ],

  vodka: [
    {
      id: "vodka-1",
      name: "CIROC",
      price: 100000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2K0THYl5Ejv3OQnzJyFlrBgcwddIZJCFZw&s",
      description: "Triple distilled vodka",
      featured: true,
    },
    {
      id: "vodka-2",
      name: "BELVEDERE VODKA",
      price: 80000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8636EjZsm4fuv0GhCpv_dE57D7rIrgLl1fA&s",
      description: "Vodka mixed drink",
      featured: false,
    },
    {
      id: "vodka-3",
      name: "SMIRNOFF XI",
      price: 10000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AnOQYy-HN26cWXWepmd6lUtQgW9CmqEOCLV3HGxt_A&s",
      description: "Swedish premium vodka",
      featured: false,
    },
    {
      id: "vodka-4",
      name: "ABSOLUT VODKA",
      price: 30000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3PbtXFyBgDEipaL0KdiKRrozZoc_7p__iA&s",
      description: "Lemon flavoured vodka",
      featured: false,
    },
    {
      id: "vodka-5",
      name: "BIG MAGIC MOMENT",
      price: 15000,
      image:
        "https://static.livcheers.com/static/content/images/liquor/LCIN01328.webp",
      description: "Ultra-premium vodka",
      featured: true,
    },
    {
      id: "vodka-6",
      name: "WILLIAMS LAWSON",
      price: 25000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r92S2xFVL12vd4BY0vee6rGUEsN18kbvA&s",
      description: "Apple flavoured vodka",
      featured: false,
    },
    {
      id: "vodka-7",
      name: "SMIRNOFF XI SMALL",
      price: 4000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AnOQYy-HN26cWXWepmd6lUtQgW9CmqEOCLV3HGxt_A&s",
      description: "Luxury French vodka",
      featured: false,
    },
    {
      id: "vodka-7",
      name: "SMIRNOFF XI MEDIUM",
      price: 6000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdL3oizjCC2UUG3L4idIdkKWe14oIow7oSA&s",
      description: "Luxury French vodka",
      featured: false,
    },
  ],

  shisha: [
    {
      id: "shisha-1",
      name: "Double Apple",
      price: 80000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJomWNP4GXJi47S_IVjKXdGD0KuKBDUw_g9Q&s",
      description: "Classic double apple",
      featured: true,
    },
    {
      id: "shisha-2",
      name: "Mint",
      price: 85000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFftZIDmCAarBgyb4in6C9QHunXYQiuOYaSA&s",
      description: "Cool mint flavour",
      featured: false,
    },
    {
      id: "shisha-3",
      name: "Blueberry",
      price: 90000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQbo8mTvYd1xD2RN94eKCz7Bpi4vkJr94uQ&s",
      description: "Sweet blueberry smoke",
      featured: true,
    },
    {
      id: "shisha-4",
      name: "Grape",
      price: 90000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_tLzSiYt4J978DEwL1qYTJXlotTMEfjTzg&s",
      description: "Rich grape flavour",
      featured: false,
    },
    {
      id: "shisha-5",
      name: "Lemon Mint",
      price: 100000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlft1aQtcMt7qzX1J7GVF9zKtE8dPm5Fbdzw&s",
      description: "Refreshing citrus blend",
      featured: false,
    },
    {
      id: "shisha-6",
      name: "Watermelon",
      price: 95000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFaZF-3WxIqcw79zCiMl04Jy0w5Uwp_QDew&s",
      description: "Sweet watermelon flavour",
      featured: false,
    },
  ],
};

// Global access
window.menuData = menuData;

// menu.js - Logic for Carabana Smart Menu

// Ensure menuData is accessible globally if defined in this file
if (typeof menuData !== "undefined") {
  window.menuData = menuData;
}

// menu.js - Logic with Quantity Controls and Clear Cart

document.addEventListener("DOMContentLoaded", () => {
  let currentMode = "dine-in";
  let currentCategory = "tequilla";
  let cart = []; // Array of objects: { ...item, quantity: 1 }

  const menuGrid = document.getElementById("menuGrid");
  const cartFab = document.getElementById("cart-fab");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotalDisplay = document.getElementById("cartTotal");

  // ── 1. RENDER MENU (Compact & Aligned) ──
  function renderSmartMenu() {
    if (!menuGrid || !window.menuData[currentCategory]) return;
    menuGrid.innerHTML = "";

    window.menuData[currentCategory].forEach((item) => {
      const card = document.createElement("div");
      card.className = "menu-card";

      const actionHtml =
        currentMode === "delivery"
          ? `<button class="add-btn-small add-to-cart-btn" data-id="${item.id}">+</button>`
          : "";

      card.innerHTML = `
                <div style="position: relative; overflow: hidden; height: 100%;">
                    <img src="${item.image}" alt="${item.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
                    
                    <div class="content" style="
                        position: absolute; 
                        bottom: 0; 
                        left: 0; 
                        right: 0; 
                        background: linear-gradient(transparent, rgba(0,0,0,0.9)); 
                        padding: 8px 12px;
                    ">
                        <h3 style="
                            margin: 0; 
                            font-size: 0.9rem; 
                            color: #fff; 
                            text-align: left;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        ">${item.name}</h3>
                        
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
                            <span style="color: #e67e22; font-weight: 700; font-size: 0.85rem;">₦${item.price.toLocaleString()}</span>
                            ${actionHtml}
                        </div>
                    </div>
                </div>
            `;
      menuGrid.appendChild(card);
    });

    document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        addToCart(btn.getAttribute("data-id"));
      });
    });
  }

  // ── 2. CART LOGIC (Increment existing items) ──
  function addToCart(id) {
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      let foundItem = null;
      for (let cat in window.menuData) {
        const match = window.menuData[cat].find((p) => p.id == id);
        if (match) {
          foundItem = { ...match, quantity: 1 };
          break;
        }
      }
      if (foundItem) cart.push(foundItem);
    }
    updateCartUI();
  }

  // ── 3. QUANTITY & CLEAR FUNCTIONS ──
  // These are attached to the window so the HTML buttons can see them
  window.changeQty = function (id, delta) {
    const item = cart.find((i) => i.id === id);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== id);
    }
    updateCartUI();
  };

  window.clearCart = function () {
    if (confirm("Are you sure you want to clear your cart?")) {
      cart = [];
      updateCartUI();
    }
  };

  // ── 4. UPDATE CART UI (Drawer Side) ──
  function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector(".cart-count").innerText = totalItems;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML =
        '<p class="empty-msg" style="text-align:center; padding:50px; color:#888;">Cart is empty</p>';
      cartTotalDisplay.innerText = "₦0.00";
      return;
    }

    // Header with Clear Cart
    let html = `
            <div style="text-align: right; margin-bottom: 15px;">
                <button onclick="clearCart()" style="background:none; border:none; color:#ff4444; font-size:0.7rem; font-weight:bold; cursor:pointer; text-transform:uppercase;">[ Clear Cart ]</button>
            </div>
        `;

    // Item List with +/- buttons
    html += cart
      .map(
        (item) => `
            <div class="cart-item" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; background:#111; padding:10px; border-radius:8px;">
                <div style="flex:1;">
                    <p style="margin:0; font-weight:600; font-size:0.9rem;">${item.name}</p>
                    <p style="margin:0; color:#e67e22; font-size:0.8rem;">₦${(item.price * item.quantity).toLocaleString()}</p>
                </div>
                <div style="display:flex; align-items:center; gap:10px; background:#222; padding:5px; border-radius:5px;">
                    <button onclick="changeQty('${item.id}', -1)" style="background:none; border:none; color:#fff; cursor:pointer; font-size:1.1rem; width:20px;">-</button>
                    <span style="font-size:0.85rem; font-weight:bold; min-width:15px; text-align:center;">${item.quantity}</span>
                    <button onclick="changeQty('${item.id}', 1)" style="background:none; border:none; color:#e67e22; cursor:pointer; font-size:1.1rem; width:20px;">+</button>
                </div>
            </div>
        `,
      )
      .join("");

    cartItemsContainer.innerHTML = html;

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    cartTotalDisplay.innerText = `₦${total.toLocaleString()}`;
  }

  // ── 5. MODE & CATEGORY BUTTONS ──
  document.querySelectorAll(".mode-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".mode-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentMode = btn.dataset.mode;
      cartFab.classList.toggle("hidden", currentMode !== "delivery");
      renderSmartMenu();
    });
  });

  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".category-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      renderSmartMenu();
    });
  });

  // ── 6. DRAWER CONTROLS ──
  cartFab.addEventListener("click", () => cartDrawer.classList.add("active"));
  document
    .querySelector(".close-cart")
    .addEventListener("click", () => cartDrawer.classList.remove("active"));

  // Initial load
  renderSmartMenu();
});
