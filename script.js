/**
 * Bull Pen Website - Watchlist Filter Interaction
 * 
 * Interaction: Filter buttons (All / Tech / Food / Energy) show only watchlist cards
 * in the selected sector. Uses click listeners only (buttons handle Enter/Space natively).
 * Active filter is marked with aria-pressed="true".
 */

function initWatchlistFilter() {
    const filterGroup = document.querySelector('.filter-group');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const watchlistCards = document.querySelectorAll('.watchlist-card');
    
    if (!filterGroup) {
        return;
    }
    
    // Use event delegation on the filter group for click events
    filterGroup.addEventListener('click', function(event) {
        const clickedButton = event.target;
        
        // Ensure we clicked a button
        if (!clickedButton.classList.contains('filter-btn')) {
            return;
        }
        
        const selectedSector = clickedButton.getAttribute('data-sector');
        
        if (!selectedSector) {
            return;
        }
        
        // Update active state - mark clicked button as pressed, others as not pressed
        filterButtons.forEach(function(button) {
            if (button === clickedButton) {
                button.setAttribute('aria-pressed', 'true');
            } else {
                button.setAttribute('aria-pressed', 'false');
            }
        });
        
        // Filter watchlist cards based on selected sector
        watchlistCards.forEach(function(card) {
            const cardSector = card.getAttribute('data-sector');
            
            if (selectedSector === 'All') {
                // Show all cards
                card.style.display = 'block';
            } else {
                // Show only cards matching the selected sector
                if (cardSector === selectedSector) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
}

// Initialize the filter when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWatchlistFilter);
} else {
    // DOM is already ready
    initWatchlistFilter();
}
