<script>
  const quotes = [
    "may it never falter",
    "born 2 be a🦐",
    "🐟",
    "never kill yourself ",    
    "parra",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = randomQuote;
</script>
