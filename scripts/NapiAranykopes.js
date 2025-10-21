const allQuotes = window.quotesData;

export function getDailyQuote(quotes) {
  let dailyQuote = localStorage.getItem('daily-quote');

  if (!dailyQuote && Array.isArray(quotes)) {
    const validQuotes = quotes.filter(q => q.Content && q.Content.trim() !== '');
    if (validQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * validQuotes.length);
      dailyQuote = validQuotes[randomIndex].Content;
      localStorage.setItem('daily-quote', dailyQuote);
    }
  }

  return dailyQuote || 'Nincs mára Aranyköpésünk.';
}
