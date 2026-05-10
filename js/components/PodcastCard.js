import { formatDate, formatList } from '../utils/formatters.js';

/**
 * Generates the HTML for a podcast card preview.
 * @param {import('../models/Podcast.js').default} podcast - The podcast object.
 * @returns {HTMLElement} The constructed DOM element for the podcast preview.
 */
export function createPodcastCard(podcast) {
    const card = document.createElement('div');
    card.classList.add('podcast-card');
    card.dataset.id = podcast.id;
    card.tabIndex = 0; // Make focusable for accessibility
    card.setAttribute('role', 'button');

    const genreNames = podcast.getGenreNames();
    const formattedDate = formatDate(podcast.updated);

    card.innerHTML = `
        <img src="${podcast.image}" alt="${podcast.title} cover" class="card-image" loading="lazy">
        <div class="card-content">
            <h3 class="card-title">${podcast.title}</h3>
            <p class="card-meta">
                <span class="seasons-count">${podcast.seasonsCount} Season${podcast.seasonsCount !== 1 ? 's' : ''}</span>
            </p>
            <p class="card-genres" aria-label="Genres: ${formatList(genreNames)}">${formatList(genreNames)}</p>
            <p class="card-date">Updated: <time datetime="${podcast.updated.toISOString()}">${formattedDate}</time></p>
        </div>
    `;

    // Accessibility: Trigger click on Enter/Space key
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });

    return card;
}
