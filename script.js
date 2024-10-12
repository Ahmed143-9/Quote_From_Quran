const quoteText = document.querySelector("blockquote");
const quoteAuthor = document.querySelector("span");
const newQuoteBtn = document.querySelector("button");

const quotes = [
    {
        text: "Indeed, with hardship [will be] ease.",
        author: "Qur'an, 94:6"
    },
    {
        text: "So be patient. Indeed, the promise of Allah is truth.",
        author: "Qur'an, 30:60"
    },
    {
        text: "And whoever relies upon Allah - then He is sufficient for him.",
        author: "Qur'an, 65:3"
    },
    {
        text: "So remember Me; I will remember you.",
        author: "Qur'an, 2:152"
    },
    {
        text: "And He found you lost and guided [you].",
        author: "Qur'an, 93:7"
    },
    {
        text: "And whoever fears Allah - He will make for him a way out.",
        author: "Qur'an, 65:2"
    },
    {
        text: "Allah does not burden a soul beyond that it can bear.",
        author: "Qur'an, 2:286"
    },
    {
        text: "So verily, with the hardship, there is relief.",
        author: "Qur'an, 94:5"
    },
    {
        text: "My mercy encompasses all things.",
        author: "Qur'an, 7:156"
    },
    {
        text: "The help of Allah is always near.",
        author: "Qur'an, 2:214"
    },
    {
        text: "He is with you wherever you are.",
        author: "Qur'an, 57:4"
    },
    {
        text: "Do not despair of the mercy of Allah.",
        author: "Qur'an, 39:53"
    },
    {
        text: "For indeed, it is not the eyes that are blinded, but blinded are the hearts which are within the breasts.",
        author: "Qur'an, 22:46"
    },
    {
        text: "And whoever is grateful, he is grateful for the benefit of himself.",
        author: "Qur'an, 31:12"
    },
    {
        text: "And your Lord is going to give you, and you will be satisfied.",
        author: "Qur'an, 93:5"
    },
    {
        text: "And whoever puts his trust in Allah, then He will suffice him.",
        author: "Qur'an, 65:3"
    },
    {
        text: "Indeed, Allah is with the patient.",
        author: "Qur'an, 2:153"
    },
    {
        text: "Indeed, the hereafter is better for you than the first [life].",
        author: "Qur'an, 93:4"
    },
    {
        text: "Allah is the best of providers.",
        author: "Qur'an, 62:11"
    },
    {
        text: "Indeed, Allah loves those who rely [upon Him].",
        author: "Qur'an, 3:159"
    },
    {
        text: "And your Lord is Forgiving, Full of Mercy.",
        author: "Qur'an, 18:58"
    },
    {
        text: "So do not weaken and do not grieve, and you will be superior if you are [true] believers.",
        author: "Qur'an, 3:139"
    },
    {
        text: "Verily, in the remembrance of Allah do hearts find rest.",
        author: "Qur'an, 13:28"
    },
    {
        text: "And whoever fears Allah - He will make for him a way out.",
        author: "Qur'an, 65:2"
    },
    {
        text: "And rely upon Allah; and sufficient is Allah as Disposer of affairs.",
        author: "Qur'an, 33:3"
    },
    {
        text: "Whoever desires the reward of this world - then with Allah is the reward of this world and the Hereafter.",
        author: "Qur'an, 4:134"
    },
    {
        text: "And whoever is patient and forgives - indeed, that is of the matters [requiring] determination.",
        author: "Qur'an, 42:43"
    },
    {
        text: "Indeed, good deeds do away with misdeeds.",
        author: "Qur'an, 11:114"
    },
    {
        text: "Call upon Me; I will respond to you.",
        author: "Qur'an, 40:60"
    },
    {
        text: "And Allah invites to the Home of Peace.",
        author: "Qur'an, 10:25"
    },
    {
        text: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good.",
        author: "Qur'an, 2:201"
    },
    {
        text: "And the hereafter is better for you than the first life.",
        author: "Qur'an, 93:4"
    },
    {
        text: "But perhaps you hate a thing and it is good for you.",
        author: "Qur'an, 2:216"
    },
    {
        text: "Indeed, Allah is ever Merciful and Forgiving.",
        author: "Qur'an, 4:96"
    },
    {
        text: "Allah is the Protector of those who have believed.",
        author: "Qur'an, 2:257"
    },
    {
        text: "Indeed, the patient will be given their reward without account.",
        author: "Qur'an, 39:10"
    },
    {
        text: "And whoever is guided is only guided for [the benefit of] his soul.",
        author: "Qur'an, 27:92"
    },
    {
        text: "Allah loves those who purify themselves.",
        author: "Qur'an, 9:108"
    },
    {
        text: "Indeed, Allah does not wrong the people at all, but it is the people who are wronging themselves.",
        author: "Qur'an, 10:44"
    },
    {
        text: "Indeed, He is the Knowing Creator.",
        author: "Qur'an, 36:81"
    },
    {
        text: "And whoever holds firmly to Allah has [indeed] been guided to a straight path.",
        author: "Qur'an, 3:101"
    },
    {
        text: "He created death and life to test you as to which of you is best in deed.",
        author: "Qur'an, 67:2"
    },
    {
        text: "And those who strive for Us - We will surely guide them to Our ways.",
        author: "Qur'an, 29:69"
    },
    {
        text: "Allah is the Light of the heavens and the earth.",
        author: "Qur'an, 24:35"
    },
    {
        text: "And whoever fears Allah - He will make for him of his matter ease.",
        author: "Qur'an, 65:4"
    },
    {
        text: "And We will surely test you with something of fear and hunger.",
        author: "Qur'an, 2:155"
    },
    {
        text: "Allah does not intend to make difficulty for you, but He intends to purify you.",
        author: "Qur'an, 5:6"
    }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.innerText = randomQuote.text;
    quoteAuthor.innerText = ` ${randomQuote.author}`;
}

generateQuote();

newQuoteBtn.addEventListener("click", generateQuote);

function shareAndCopyToFacebook() {
    const quote = document.querySelector("blockquote").innerText;
    const author = document.querySelector("span").innerText;
    const fullQuote = `"${quote}" - ${author}`;
    
   
    Promise.all([
        navigator.clipboard.writeText(fullQuote),
        new Promise((resolve) => {
            setTimeout(resolve, 100);
        })
    ]).then(() => {
        alert("Quote copied to clipboard: " + fullQuote);
    }).catch(() => {
        alert("Failed to copy the quote.");
    });
}
