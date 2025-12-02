// Data Data
const vocabulary = [
    { word: "Ubiquitous", phonetic: "/juːˈbɪkwɪtəs/", meaning: "無所不在的 - Present, appearing, or found everywhere", example: "Smartphones have become ubiquitous in modern society." },
    { word: "Ephemeral", phonetic: "/ɪˈfɛmərəl/", meaning: "短暫的 - Lasting for a very short time", example: "Fashions are ephemeral, changing with every season." },
    { word: "Pragmatic", phonetic: "/præɡˈmætɪk/", meaning: "務實的 - Dealing with things sensibly and realistically", example: "We need a pragmatic approach to solve this crisis." },
    { word: "Alleviate", phonetic: "/əˈliːvieɪt/", meaning: "減輕 - To make suffering or a problem less severe", example: "The new medicine helped alleviate her pain." },
    { word: "Scrutinize", phonetic: "/ˈskruːtənaɪz/", meaning: "詳細檢查 - To examine or inspect closely and thoroughly", example: "The auditor scrutinized every transaction in the ledger." },
    { word: "Ambivalent", phonetic: "/æmˈbɪvələnt/", meaning: "矛盾的 - Having mixed feelings or contradictory ideas", example: "She remained ambivalent about her marriage." },
    { word: "Complacent", phonetic: "/kəmˈpleɪsənt/", meaning: "自滿的 - Showing smug or uncritical satisfaction with oneself", example: "We cannot afford to be complacent about our competitors." },
    { word: "Diligence", phonetic: "/ˈdɪlɪdʒəns/", meaning: "勤奮 - Careful and persistent work or effort", example: "Due diligence is required before buying a property." },
    { word: "Exacerbate", phonetic: "/ɪɡˈzæsərbeɪt/", meaning: "加劇 - To make a problem, bad situation, or negative feeling worse", example: "The rising interest rates exacerbated the housing crisis." },
    { word: "Lucrative", phonetic: "/ˈluːkrətɪv/", meaning: "獲利豐厚的 - Producing a great deal of profit", example: "The merger proved to be a lucrative deal for both parties." },
    { word: "Mitigate", phonetic: "/ˈmɪtɪɡeɪt/", meaning: "緩和 - To make less severe, serious, or painful", example: "Measures were taken to mitigate the environmental impact." },
    { word: "Obsolete", phonetic: "/ˌɒbsəˈliːt/", meaning: "過時的 - No longer produced or used; out of date", example: "Typewriters have been rendered obsolete by computers." },
    { word: "Paradigm", phonetic: "/ˈpærədaɪm/", meaning: "範例/典範 - A typical example or pattern of something; a model", example: "The discovery created a new paradigm in physics." },
    { word: "Resilient", phonetic: "/rɪˈzɪliənt/", meaning: "有彈性的/有恢復力的 - Able to withstand or recover quickly from difficult conditions", example: "The economy has proven to be remarkably resilient." },
    { word: "Substantiate", phonetic: "/səbˈstænʃieɪt/", meaning: "證實 - To provide evidence to support or prove the truth of", example: "They could not substantiate their claims with data." },
    { word: "Tentative", phonetic: "/ˈtɛntətɪv/", meaning: "暫定的 - Not certain or fixed; provisional", example: "We have a tentative agreement, but nothing is signed yet." },
    { word: "Viable", phonetic: "/ˈvaɪəbl/", meaning: "可行的 - Capable of working successfully; feasible", example: "Solar power is becoming a more viable energy source." },
    { word: "Vulnerable", phonetic: "/ˈvʌlnərəbl/", meaning: "易受傷的 - Susceptible to physical or emotional attack or harm", example: "Small businesses are vulnerable to economic downturns." },
    { word: "Aesthetic", phonetic: "/ɛsˈθɛtɪk/", meaning: "美學的 - Concerned with beauty or the appreciation of beauty", example: "The building has a pleasing aesthetic." },
    { word: "Benevolent", phonetic: "/bəˈnɛvələnt/", meaning: "仁慈的 - Well meaning and kindly", example: "The benevolent donor gave millions to charity." }
];

const grammarRules = [
    { title: "Subjunctive Mood 虛擬語氣", content: "用於表達願望、建議或假設情況。例如：'I suggest that he study harder' (不是 studies)。" },
    { title: "Inversion 倒裝句", content: "用於強調。例如：'Never have I seen such a thing' (而不是 'I have never seen')。" },
    { title: "Participle Clauses 分詞構句", content: "簡化句子。例如：'Walking down the street, I saw him' (相當於 While I was walking...)。" },
    { title: "Cleft Sentences 分裂句", content: "強調句子的特定部分。例如：'It was John who called me' (強調 John)。" },
    { title: "Mixed Conditionals 混合條件句", content: "混合過去與現在的假設。例如：'If I had studied harder (過去), I would be rich now (現在).'" }
];

const phrases = [
    { text: "Play it by ear", meaning: "見機行事 - To decide how to deal with a situation as it develops" },
    { text: "Wrap my head around", meaning: "理解複雜的事物 - To understand something complex" },
    { text: "Cut to the chase", meaning: "切入正題 - To get to the point without wasting time" },
    { text: "Bite the bullet", meaning: "咬緊牙關去做 - To decide to do something difficult or unpleasant" },
    { text: "Hit the nail on the head", meaning: "一針見血 - To describe exactly what is causing a situation or problem" },
    { text: "Let the cat out of the bag", meaning: "洩漏秘密 - To reveal a secret carelessly or by mistake" },
    { text: "Once in a blue moon", meaning: "千載難逢/極少 - Very rarely" },
    { text: "The ball is in your court", meaning: "決定權在你 - It is up to you to make the next decision or step" }
];

const newsLinks = [
    { title: "The Economist", source: "Economist", url: "https://www.economist.com/" },
    { title: "BBC Learning English", source: "BBC", url: "https://www.bbc.co.uk/learningenglish/" },
    { title: "NPR News", source: "NPR", url: "https://www.npr.org/" },
    { title: "TED Talks", source: "TED", url: "https://www.ted.com/" }
];

// State
let currentWords = [];
let progress = 0;

// DOM Elements
const vocabContainer = document.getElementById('vocab-container');
const grammarContainer = document.getElementById('grammar-container');
const phrasesContainer = document.getElementById('phrases-container');
const newsContainer = document.getElementById('news-container');
const progressCount = document.getElementById('progress-count');
const progressFill = document.getElementById('progress-fill');
const finishBtn = document.getElementById('finish-btn');
const navBtns = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadDailyWords();
    renderGrammar();
    renderPhrases();
    renderNews();
    loadProgress();
    setupTabs();
    setupEventListeners();
});

// Logic
function loadDailyWords() {
    // Simple rotation based on day of year to ensure everyone sees same words on same day
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const wordsPerDay = 10;
    const startIndex = (dayOfYear * wordsPerDay) % vocabulary.length;

    currentWords = [];
    for (let i = 0; i < wordsPerDay; i++) {
        currentWords.push(vocabulary[(startIndex + i) % vocabulary.length]);
    }

    renderVocab();
}

function renderVocab() {
    vocabContainer.innerHTML = currentWords.map((word, index) => `
        <div class="card" style="animation-delay: ${index * 0.1}s">
            <div class="card-header">
                <div>
                    <span class="word">${word.word}</span>
                    <span class="phonetic">${word.phonetic}</span>
                </div>
                <button class="speak-btn" onclick="speak('${word.word}. ${word.example.replace(/'/g, "\\'")}')">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <p class="meaning">${word.meaning}</p>
            <p class="example">"${word.example}"</p>
        </div>
    `).join('');
}

function renderGrammar() {
    grammarContainer.innerHTML = grammarRules.map((rule, index) => `
        <div class="card" style="animation-delay: ${index * 0.1}s">
            <div class="card-header">
                <span class="word" style="font-size: 1.2rem">${rule.title}</span>
                <button class="speak-btn" onclick="speak('${rule.title}. ${rule.content.replace(/'/g, "\\'")}')">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <p class="meaning">${rule.content}</p>
        </div>
    `).join('');
}

function renderPhrases() {
    phrasesContainer.innerHTML = phrases.map((phrase, index) => `
        <div class="card" style="animation-delay: ${index * 0.1}s">
            <div class="card-header">
                <span class="word" style="font-size: 1.2rem">${phrase.text}</span>
                <button class="speak-btn" onclick="speak('${phrase.text}. ${phrase.meaning.replace(/'/g, "\\'")}')">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <p class="meaning">${phrase.meaning}</p>
        </div>
    `).join('');
}

function renderNews() {
    newsContainer.innerHTML = newsLinks.map((news, index) => `
        <a href="${news.url}" target="_blank" class="news-item" style="animation-delay: ${index * 0.1}s">
            <div>
                <div class="news-title">${news.title}</div>
                <div class="news-source">${news.source}</div>
            </div>
            <i class="fa-solid fa-external-link-alt" style="color: var(--primary-color)"></i>
        </a>
    `).join('');
}

function speak(text) {
    window.speechSynthesis.cancel(); // Stop previous
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

function loadProgress() {
    const savedDate = localStorage.getItem('dem_date');
    const today = new Date().toDateString();

    if (savedDate === today) {
        const savedProgress = localStorage.getItem('dem_progress');
        if (savedProgress === 'done') {
            progress = 10;
            updateProgressUI();
            finishBtn.textContent = "Come back tomorrow!";
            finishBtn.disabled = true;
            finishBtn.style.opacity = 0.7;
        }
    } else {
        // Reset for new day
        localStorage.setItem('dem_date', today);
        localStorage.setItem('dem_progress', '0');
        progress = 0;
        updateProgressUI();
    }
}

function updateProgressUI() {
    progressCount.textContent = progress;
    progressFill.style.width = `${(progress / 10) * 100}%`;
}

function setupTabs() {
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            navBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

function setupEventListeners() {
    finishBtn.addEventListener('click', () => {
        if (progress < 10) {
            progress = 10;
            updateProgressUI();
            localStorage.setItem('dem_progress', 'done');
            finishBtn.textContent = "Great Job! See you tomorrow.";
            finishBtn.disabled = true;

            // Celebration effect
            confetti();
        }
    });
}

// Simple confetti effect
function confetti() {
    const colors = ['#8b5cf6', '#ec4899', '#ffffff'];
    for (let i = 0; i < 50; i++) {
        const spark = document.createElement('div');
        spark.style.position = 'fixed';
        spark.style.left = '50%';
        spark.style.top = '50%';
        spark.style.width = '10px';
        spark.style.height = '10px';
        spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        spark.style.borderRadius = '50%';
        spark.style.pointerEvents = 'none';
        spark.style.zIndex = '9999';
        document.body.appendChild(spark);

        const angle = Math.random() * Math.PI * 2;
        const velocity = 5 + Math.random() * 10;
        const tx = Math.cos(angle) * 100 * (Math.random() + 0.5);
        const ty = Math.sin(angle) * 100 * (Math.random() + 0.5);

        spark.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0, .9, .57, 1)',
        }).onfinish = () => spark.remove();
    }
}

// Expose speak to global scope for HTML onclick
window.speak = speak;
