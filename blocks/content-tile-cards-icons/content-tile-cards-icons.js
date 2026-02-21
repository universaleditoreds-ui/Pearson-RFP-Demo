<script>
document.addEventListener("DOMContentLoaded", function () {

  const block = document.querySelector(".content-tile-cards-icons.block");
  if (!block) return;

  const items = Array.from(block.children);

  // Skip first 4 (heading, title, paragraph, main image)
  const staticItems = items.slice(0, 4);
  const cardItems = items.slice(4);

  // Clear block
  block.innerHTML = "";

  // Re-append static items
  staticItems.forEach(item => block.appendChild(item));

  // Create card wrapper
  const cardWrapper = document.createElement("div");
  cardWrapper.className = "cards-wrapper";

  // Group every 4 items into a card
  for (let i = 0; i < cardItems.length; i += 4) {
    const card = document.createElement("div");
    card.className = "card";

    for (let j = i; j < i + 4; j++) {
      if (cardItems[j]) {
        card.appendChild(cardItems[j]);
      }
    }

    cardWrapper.appendChild(card);
  }

  block.appendChild(cardWrapper);
});
</script>
