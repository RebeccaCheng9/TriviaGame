export interface Question {
    question: string;
    options: string[];
    answer: string;
    funfact: string;
    category: string;
}

export const questions: Question[] = [
    {
        question: "When was RPI established?",
        options: ["1800", "1820", "1814", "1824"],
        answer: "1824",
        funfact: "RPI is the oldest technological research university in the US?!",
        category: "General History",
    },
    {
        question: "True or False: Majoring in mechanical engineering was always offered.",
        options: ["True", "False"],
        answer: "False",
        funfact: "Degrees in electrical and mechanical engineering were first offered in the 1910s.",
        category: "General History",
    },
    {
        question: "The founders of RPI are...",
        options: ["Stephen Van Rensselaer and Palmer Ricketts", "Stephen Van Rensselaer and Russell Sage", "Stephen Van Rensselaer and Benjamin Franklin Greene", "Stephen Van Rensselaer and Amos Eaton"],
        answer: "Stephen Van Rensselaer and Amos Eaton",
        funfact: "Stephen Van Rensselaer was an influential politician who served in the House of Representatives from 1822 - 1829.",
        category: "General History",
    },
    {
        question: "Why were the Rensselaerwyck dorms demolished in the late 1900s?",
        options: ["Due to a fire", "To make room for athletic fields", "Due to flooding", "To make room for more laboratories"],
        answer: "To make room for athletic fields",
        funfact: "The Rensselaerwyck dorms were primarily for married students after WWII, and the area even had a nursery school.",
        category: "Dorms",
    },
    {
        question: "Which dormitory was built in 1932, converted into a laboratory in 1961, before converting back to student housing?",
        options: ["E-complex", "North Hall", "Quad", "Blitman"],
        answer: "North Hall",
        funfact: "Each unit in North Hall and E-complex is named after an RPI alumni that became a president of a railroad company.",
        category: "Dorms",
    },
    {
        question: "True or False: Just like all the other buildings, J-ROWL had a traditional ribbon-cutting ceremony in 1961.",
        options: ["True", "False"],
        answer: "False",
        funfact: "To celebrate the addition of the Jonsson-Rowland Science Center, RPI used a chain and a blow torch.",
        category: "Buildings",
    },
    {
        question: "The Polytechnic, the school newspaper, has had continous publication since what year?",
        options: ["1850", "1824", "1885", "1900"],
        answer: "1885",
        funfact: "You are actually using the Polytechnic website right now!!",
        category: "General History",
    },
    {
        question: "What ice cream shop used to be available to students in the Union?",
        options: ["Dairy Queen", "Ben and Jerry's", "Baskin-Robbins", "Carvel"],
        answer: "Ben and Jerry's",
        funfact: "This was one of the first Ben and Jerry's on a college campus!",
        category: "General History",
    },
    {
        question: "The 1950 graduating class is unique due to the fact that...?",
        options: ["Over 80% were veterans", "Over 60% were female", "Over 70% were atheletes", "Over 50% were younger than 20"],
        answer: "Over 80% were veterans",
        funfact: "The average age for the 1950 graduating class was 32, and over 40% were married.",
        category: "General History",
    },
    {
        question: "Steven Sasson (RPI Class of 1972) is known for creating the first...?",
        options: ["Digital Camera", "Digital Watch", "VCR", "Cell Phone"],
        answer: "Digital Camera",
        funfact: "Another notible RPI alumni is George W. G. Ferris (Class of 1881), the inventor of the first Ferris Wheel.",
        category: "Alumni",
    },
    {
        question: "True or False: Puckman was not the first mascot.",
        options: ["True", "False"],
        answer: "True",
        funfact: "The mascot of RPI has gone through multiple changes, including ones like \"The Bachelors,\" and \"Red Hawks\".",
        category: "General History",
    },
    {
        question: "The granite staircase connecting the RPI campus to downtown Troy is called...",
        options: ["The Climb", "The Grand Granite Staircase", "The Approach", "It doesn't have a name"],
        answer: "The Approach",
        funfact: "The Approach staircase was originally completed in 1907 but closed in the 1970s due to its dangerous conditions. It was rebuilt in the 1990s and officially reopened to the public in 1999.",
        category: "General History",
    },
    {
        question: "What was RPI's original name?",
        options: ["Rensselaer School", "Rensselaer Institute", "Rensselaer University", "Rensselaer Polytechnic Institute"],
        answer: "Rensselaer School",
        funfact: "All the options above were once the name of RPI except for Rensselaer University!",
        category: "General History",
    },
    {
        question: "What is the most recently constructed building on campus?",
        options: ["EMPAC", "Barton Hall", "ECAV", "CBIS"],
        answer: "ECAV",
        funfact: "ECAV is LEED gold status certified!",
        category: "Buildings",
    },
    {
        question: "The first freshman dorms were completed in the:",
        options: ["1940s", "1950s", "1960s", "1970s"],
        answer: "1950s",
        funfact: "The freshman dorms have been around for over 75 years!",
        category: "Dorms",
    },
    {
        question: "The basement of the 87' Gym contains the old...",
        options: ["Swimming Pool", "Basketball Court", "Running Track", "Tennis Court"],
        answer: "Swimming Pool",
        funfact: "In addition to the swimming pool, there are also four bowling alleys.",
        category: "Buildings",
    },
    {
        question: "What is RPI's slogan?",
        options: ["Knowledge is power", "A university for the real world", "Why not change the world?", "Learn to thrive"],
        answer: "Why not change the world?",
        funfact: "RPI's motto is \"Knowledge and Thoroughness.\"",
        category: "General History",
    },
    {
        question: "The Mason Laboratory, demolished in May of 1975, contained labs for mainly which department?",
        options: ["Physics", "Chemical Engineering", "Chemistry", "Nuclear Engineering"],
        answer: "Nuclear Engineering",
        funfact: "The Mason Laboratory was originally purchased to provide postwar housing for 230 students in the late 1940s.",
        category: "Buildings",
    },
    {
        question: "True or False: An RPI alumni was the inventor of the network email.",
        options: ["True", "False"],
        answer: "True",
        funfact: "Raymond Tomlinson (Class of 1963) is also the reason why email addresses use the \"@\" sign.",
        category: "Alumni",
    },
    {
        question: "Which freshman dorm is named after a geologist with one of the largest fossil collections currently featured in the American Museum of Natural History?",
        options: ["Crockett Hall", "Barton Hall", "Bray Hall", "Hall Hall"],
        answer: "Hall Hall",
        funfact: "James Hall studied under Amos Eaton (another geologist)?!",
        category: "Dorms"
    },
];