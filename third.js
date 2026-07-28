const quotes = [
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "Dream big and dare to fail. — Norman Vaughan",
  "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
  "The future depends on what you do today. — Mahatma Gandhi",
  "Hard work beats talent when talent doesn't work hard. — Tim Notke",
  "Small steps every day lead to big results.",
  "Discipline is the bridge between goals and accomplishment. — Jim Rohn",
  "Your only limit is your mind.",
  "The best way to predict the future is to create it. — Peter Drucker",
  "Every expert was once a beginner.",
  "Push yourself because no one else is going to do it for you.",
  "Mistakes are proof that you are trying.",
  "Great things never come from comfort zones.",
  "Stay hungry, stay foolish. — Steve Jobs",
  "Consistency is more important than perfection.",
  "Learning never exhausts the mind. — Leonardo da Vinci",
  "Code is like humor. When you have to explain it, it's bad. — Cory House",
  "First, solve the problem. Then, write the code. — John Johnson"
];


function generateQuotes(){
    const text = document.getElementById("quote");

    const index = Math.floor(Math.random()*quotes.length);
    text.textContent = quotes[index];
}
setInterval(generateQuotes,2000);