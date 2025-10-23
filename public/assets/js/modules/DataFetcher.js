const cameras = [
    // 🌎 North America
    { name: "Grizzly Cam - Yellowstone", lat: 44.6, lng: -110.5 },
    { name: "Eagle Eye - Yosemite", lat: 37.7, lng: -119.6 },
    { name: "Moose Patrol - Banff", lat: 51.2, lng: -115.5 },
    { name: "Canyon Watch - Arizona", lat: 36.1, lng: -112.1 },
    { name: "Polar Scout - Alaska", lat: 64.2, lng: -149.5 },
    { name: "Gator Vision - Everglades", lat: 25.3, lng: -80.9 },
    { name: "Rocky Ranger - Colorado", lat: 39.7, lng: -105.7 },
    { name: "Volcano Cam - Hawaii", lat: 19.6, lng: -155.5 },
    { name: "Falls Cam - Niagara", lat: 43.08, lng: -79.08 },
    { name: "Desert Tracker - Baja", lat: 30.5, lng: -115.9 },

    // 🇧🇷 South America
    { name: "Jaguar Eye - Amazon", lat: -3.4, lng: -62.2 },
    { name: "Toucan Tower - Manaus", lat: -3.1, lng: -60.0 },
    { name: "Llama Lens - Andes", lat: -13.5, lng: -71.9 },
    { name: "Sloth Cam - Costa Rica", lat: 9.9, lng: -84.0 },
    { name: "Piranha Patrol - Brazil", lat: -2.1, lng: -54.7 },
    { name: "Condor Watch - Chile", lat: -33.5, lng: -70.7 },
    { name: "Penguin Port - Argentina", lat: -54.8, lng: -68.3 },
    { name: "Rainforest Ranger - Peru", lat: -6.2, lng: -75.5 },
    { name: "Cacao Cam - Colombia", lat: 5.5, lng: -74.5 },
    { name: "Beach Spy - Rio", lat: -22.9, lng: -43.2 },

    // 🌍 Europe
    { name: "Fox Finder - London", lat: 51.5, lng: -0.1 },
    { name: "Wolf Watch - Berlin", lat: 52.5, lng: 13.4 },
    { name: "Owl Tower - Paris", lat: 48.8, lng: 2.3 },
    { name: "Hedgehog Hub - Brussels", lat: 50.8, lng: 4.3 },
    { name: "Deer Vision - Oslo", lat: 59.9, lng: 10.7 },
    { name: "Bear Tracker - Helsinki", lat: 60.1, lng: 24.9 },
    { name: "Boar Cam - Warsaw", lat: 52.2, lng: 21.0 },
    { name: "Lynx Lens - Zurich", lat: 47.3, lng: 8.5 },
    { name: "Falcon Feed - Madrid", lat: 40.4, lng: -3.7 },
    { name: "Goat Guard - Athens", lat: 37.9, lng: 23.7 },

    // 🌍 Africa
    { name: "Lion Lookout - Serengeti", lat: -2.3, lng: 34.8 },
    { name: "Elephant Eye - Botswana", lat: -19.4, lng: 23.8 },
    { name: "Hippo Cam - Nile Delta", lat: 30.8, lng: 31.0 },
    { name: "Cheetah Chase - Kenya", lat: -1.3, lng: 36.8 },
    { name: "Rhino Ranger - South Africa", lat: -24.0, lng: 31.5 },
    { name: "Meerkat Monitor - Kalahari", lat: -25.0, lng: 22.0 },
    { name: "Flamingo Feed - Tanzania", lat: -3.4, lng: 35.8 },
    { name: "Croc Watch - Congo", lat: -1.6, lng: 15.8 },
    { name: "Savanna Sentinel - Nigeria", lat: 9.0, lng: 8.7 },
    { name: "Dune Cam - Namibia", lat: -23.0, lng: 15.0 },

    // 🌏 Asia
    { name: "Tiger Trail - India", lat: 22.6, lng: 78.9 },
    { name: "Panda Point - China", lat: 31.2, lng: 103.8 },
    { name: "Snow Leopard Lookout - Nepal", lat: 28.3, lng: 84.1 },
    { name: "Yak Yard - Tibet", lat: 31.4, lng: 89.5 },
    { name: "Crane Cam - Japan", lat: 43.1, lng: 141.3 },
    { name: "Komodo Cam - Indonesia", lat: -8.5, lng: 119.5 },
    { name: "Monkey Mountain - Thailand", lat: 13.7, lng: 100.5 },
    { name: "Elephant Garden - Sri Lanka", lat: 7.8, lng: 80.7 },
    { name: "Desert Falcon - Saudi Arabia", lat: 24.7, lng: 46.7 },
    { name: "Red Panda Post - Bhutan", lat: 27.5, lng: 90.5 },

    // 🏝 Oceania
    { name: "Kangaroo Cam - Outback", lat: -25.0, lng: 133.0 },
    { name: "Koala Korner - Sydney", lat: -33.8, lng: 151.2 },
    { name: "Platypus Pond - Tasmania", lat: -42.9, lng: 147.3 },
    { name: "Shark Scout - Great Barrier Reef", lat: -18.3, lng: 147.7 },
    { name: "Penguin Point - New Zealand", lat: -45.0, lng: 170.5 },
    { name: "Emu Eye - Perth", lat: -31.9, lng: 115.8 },
    { name: "Croc Creek - Darwin", lat: -12.5, lng: 130.8 },
    { name: "Outback Owl - Alice Springs", lat: -23.7, lng: 133.9 },
    { name: "Rainforest Rover - Cairns", lat: -16.9, lng: 145.7 },
    { name: "Seal Spot - Auckland", lat: -36.8, lng: 174.7 },

    // 🌊 Antarctica & Misc
    { name: "Penguin Patrol - McMurdo", lat: -77.8, lng: 166.7 },
    { name: "Seal Cam - Ross Sea", lat: -75.0, lng: 175.0 },
    { name: "Iceberg Eye - Antarctic Peninsula", lat: -64.8, lng: -62.9 },
    { name: "Aurora Watch - South Pole", lat: -90.0, lng: 0.0 },
    { name: "Whale Watch - Southern Ocean", lat: -60.0, lng: 40.0 },
    { name: "Polar Puffin - Svalbard", lat: 78.2, lng: 15.6 },
    { name: "Arctic Fox Cam - Greenland", lat: 71.7, lng: -42.6 },
    { name: "Snowy Owl Nest - Iceland", lat: 64.9, lng: -18.0 },
    { name: "Seal Squad - Barents Sea", lat: 75.0, lng: 40.0 },
    { name: "Frostbite Feed - North Pole", lat: 89.9, lng: 0.0 },
];

export { cameras };
