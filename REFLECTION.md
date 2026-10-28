# Reflection

## Model / provider
Big Pickle, a free model provided by OpenCode. I confirmed it in the model
picker, not just from the model's own reply.

## One useful prompt
"One change to the plan: instead of a theme toggle, the interaction should be
filter buttons (All / Tech / Food / Energy) that show only the watchlist cards
in that sector. Use real <button> elements with a click listener only; buttons
already handle Enter and Space. Mark the active filter with aria-pressed."

This helped because the agent's first plan was a generic light/dark theme
toggle with none of my content. Giving it my audience, the six companies, the
market terms, and the exact interaction I wanted turned it into a plan that
matched the Bull Pen site.

## Observed tool action
The agent ran `node -c script.js` to check the JavaScript syntax, and the
result came back OK.

## Issue checked before and after
Before: The footer disclaimer ("All companies and prices are fictional and for
learning only.") was small, dim gray text on the dark navy background, and was
hard to read.
Change: [what OpenCode said it changed, e.g. "lightened the text color and
increased the font size in style.css"]
After: [what you saw after refreshing, e.g. "the disclaimer is clearly readable
but still smaller than the main content"]

## How the interaction works
Each watchlist card is labeled with its sector (Tech, Food, or Energy). When I
click a filter button, the script marks that button as selected using
aria-pressed, then hides every card whose sector doesn't match and shows the
ones that do. "All" shows every card. Because the filters are real buttons,
they also work with the keyboard: Tab to a button and press Enter or Space.