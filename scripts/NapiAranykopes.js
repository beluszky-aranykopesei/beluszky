const allQuotes = window.quotesData;

function getDailyQuote(quotes) {
  let dailyQuote = localStorage.getItem('daily-quote');
  if (!dailyQuote && quotes && quotes.length > 0) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    dailyQuote = quotes[randomIndex].Content;
    localStorage.setItem('daily-quote', dailyQuote);
  }
  return dailyQuote || 'Nincs mára Aranyköpésünk.';
}
