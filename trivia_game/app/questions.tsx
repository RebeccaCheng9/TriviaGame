export interface Question {
    question: string;
    options: string[];
    answer: string;
    funfact: string;
}

export const questions: Question[] = [
    {
        question: "When was RPI established?",
        options: ["1800", "1820", "1814", "1824"],
        answer: "1824",
        funfact: "Did you know that RPI is the oldest technological research university in the US?!",
    },
    {
        question: "True or False: Majoring in mechanical engineering was always offered.",
        options: ["True", "False"],
        answer: "False",
        funfact: "Degrees in electrical and mechanical engineering were first offered in the 1910s.",
    },
    {
        question: "The founders of RPI are...",
        options: ["Stephen Van Rensselaer and Palmer Ricketts", "Stephen Van Rensselaer and Russell Sage", "Stephen Van Rensselaer and Benjamin Franklin Greene", "Stephen Van Rensselaer and Amos Eaton"],
        answer: "Stephen Van Rensselaer and Amos Eaton",
        funfact: "Stephen Van Rensselaer was an influential politician who served in the House of Representatives from 1822 - 1829.",
    },
    {
        question: "Which dormitory was built in 1932, converted into a laboratory in 1961, before converting back to student housing?",
        options: ["E-complex", "North Hall", "Quad", "Blitman"],
        answer: "North Hall",
        funfact: "Did you know that each unit in North Hall and E-complex is named after an RPI alumni that became a president of a railroad company?",
    },
    {
        question: "The Polytechnic, the school newspaper, has had continous publication since what year?",
        options: ["1850", "1824", "1885", "1900"],
        answer: "1885",
        funfact: "You are actually using the Polytechnic website right now!!",
    },
    {
        question: "The 1950 graduating class is unique due to the fact that...?",
        options: ["Over 80% were veterans", "Over 60% were female", "Over 70% were atheletes", "Over 50% were younger than 20"],
        answer: "Over 80% were veterans",
        funfact: "Additionally, the average age was 32, and over 40% were married.",
    },
    {
        question: "Steven Sasson (RPI Class of 1972) is known for creating the first...?",
        options: ["Digital Camera", "Digital Watch", "VCR", "Cell Phone"],
        answer: "Digital Camera",
        funfact: "Another notible RPI alumni is George W. G. Ferris (Class of 1881), the inventor of the first Ferris Wheel.",
    },
    {
        question: "True or False: Puckman was not the first mascot.",
        options: ["True", "False"],
        answer: "True",
        funfact: "The mascot of RPI has gone through multiple changes, including ones like \"The Bachelors,\" and \"Red Hawks\"."
    },
    {
        question: "The granite staircase connecting the RPI campus to downtown Troy is called...",
        options: ["The Climb", "The Grand Granite Staircase", "The Approach", "It doesn't have a name"],
        answer: "The Approach",
        funfact: "The Approach staircase was originally completed in 1907 but closed in the 1970s due to its dangerous conditions. It was rebuilt in the 1990s and officially reopened to the public in 1999.",
    },
    {
        question: "What was RPI's original name?",
        options: ["Rensselaer School", "Rensselaer Institute", "Rensselaer University", "Rensselaer Polytechnic Institute"],
        answer: "Rensselaer School",
        funfact: "All the options above were once the name of RPI except for Rensselaer University!",
    },
    {
        question: "What is the most recently constructed building on campus?",
        options: ["EMPAC", "Barton Hall", "ECAV", "CBIS"],
        answer: "ECAV",
        funfact: "Did you know ECAV is LEED gold status certified?!",
    },
    {
        question: "The first freshman dorms were completed in the:",
        options: ["1940s", "1950s", "1960s", "1970s"],
        answer: "1950s",
        funfact: "The freshman dorms have been around for over 75 years!",
    },
    {
        question: "The basement of the 87' Gym contains the old...",
        options: ["Swimming Pool", "Basketball Court", "Running Track", "Tennis Court"],
        answer: "Swimming Pool",
        funfact: "In addition to the swimming pool, there are also four bowling alleys.",
    },
    {
        question: "The Mason Laboratory, demolished in May of 1975, contained labs for mainly which department?",
        options: ["Physics", "Chemical Engineering", "Chemistry", "Nuclear Engineering"],
        answer: "Nuclear Engineering",
        funfact: "The Mason Laboratory was originally purchased to provide postwar housing for 230 students in the late 1940s.",
    },
    {
        question: "Which freshman dorm is named after a geologist with one of the largest fossil collections featured in the American Museum of Natural History?",
        options: ["Crockett Hall", "Barton Hall", "Bray Hall", "Hall Hall"],
        answer: "Hall Hall",
        funfact: "Did you know James Hall studied under Amos Eaton (another geologist)?!",
    },
];