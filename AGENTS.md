# Project Constraints

This project follows these constraints:

## Files
- Only `index.html`, `style.css`, and `script.js` should be created/modified
- No dependencies or CDN - use only vanilla HTML, CSS, and JavaScript
- All fonts must be system fonts only

## Content Requirements
- Heading: "Bull Pen"
- Introduction paragraph about the student club
- Two content sections: "Practice Watchlist" and "Market Terms for Beginners"
- One useful interaction: Filter buttons (All / Tech / Food / Energy) for watchlist cards
- Small note at the bottom: "All companies and prices are fictional and for learning only."

## Functionality
- Interaction: Filter buttons that show only watchlist cards in the selected sector
- Use real `<button>` elements with click listener only (buttons handle Enter and Space natively)
- Mark active filter with `aria-pressed` attribute
- Watchlist items as cards in a grid that stacks into one column on phones
- Must work at narrow and wide browser widths
- Must be keyboard accessible

## Accessibility
- Use semantic HTML
- Include `+` or `-` signs in price changes (not just color)
- Green for gains, red for losses
- Focus styles for keyboard navigation
- Proper ARIA attributes where needed

## Scope
- Keep all work inside this project
- Serve only on localhost
- Do not build, install packages, create accounts, or deploy anything
- Do not commit, push, or start a server

## Technology
- Vanilla HTML5, CSS3, JavaScript (ES5/ES6 compatible)
- No build tools, bundlers, or frameworks
- No external resources
