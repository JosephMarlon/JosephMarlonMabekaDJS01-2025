import { formatDate, formatList } from '../utils/formatters.js';

/**
 * Class representing the Podcast Details Modal.
 */
export default class Modal {
    constructor() {
        this.dialog = document.getElementById('podcast-modal');
        this.closeBtn = document.getElementById('close-modal');
        this.modalBody = document.getElementById('modal-body');

        this.initListeners();
    }

    /**
     * Initialize event listeners for the modal.
     */
    initListeners() {
        // Close on button click
        this.closeBtn.addEventListener('click', () => this.close());

        // Close on clicking outside the modal content
        this.dialog.addEventListener('click', (e) => {
            if (e.target === this.dialog) {
                this.close();
            }
        });
        
        // Close on escape key is handled natively by <dialog>
        this.dialog.addEventListener('close', () => {
             document.body.style.overflow = '';
        });
    }

    /**
     * Opens the modal with populated podcast data.
     * @param {import('../models/Podcast.js').default} podcast 
     */
    open(podcast) {
        this.populate(podcast);
        this.dialog.showModal();
        this.dialog.setAttribute('aria-hidden', 'false');
        // Disable body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }

    /**
     * Closes the modal and cleans up.
     */
    close() {
        this.dialog.close();
        this.dialog.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    /**
     * Populates the modal inner HTML with podcast details.
     * @param {import('../models/Podcast.js').default} podcast 
     */
    populate(podcast) {
        const seasons = podcast.getSeasonDetails();
        const formattedDate = formatDate(podcast.updated);
        const genres = formatList(podcast.getGenreNames());

        const seasonsHtml = seasons.map(s => `
            <li class="season-item">
                <span class="season-title">${s.title}</span>
                <span class="season-episodes">${s.episodes} Episodes</span>
            </li>
        `).join('');

        this.modalBody.innerHTML = `
            <div class="modal-header-image">
                <img src="${podcast.image}" alt="${podcast.title} cover" />
            </div>
            <div class="modal-details">
                <h2 class="modal-title">${podcast.title}</h2>
                <p class="modal-meta">
                    <span class="modal-genres">${genres}</span> &bull; 
                    <span class="modal-date">Updated: ${formattedDate}</span>
                </p>
                <p class="modal-description">${podcast.description}</p>
                
                <h3 class="seasons-heading">Seasons</h3>
                <ul class="seasons-list">
                    ${seasonsHtml || '<li>No season information available.</li>'}
                </ul>
            </div>
        `;
    }
}
