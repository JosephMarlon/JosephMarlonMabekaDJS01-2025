import { genres, seasons } from '../../data.js';

/**
 * Class representing a Podcast Show.
 */
export default class Podcast {
    /**
     * Create a podcast.
     * @param {Object} data - The raw podcast data.
     * @param {string} data.id
     * @param {string} data.title
     * @param {string} data.description
     * @param {number} data.seasons
     * @param {string} data.image
     * @param {number[]} data.genres
     * @param {string} data.updated
     */
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.seasonsCount = data.seasons;
        this.image = data.image;
        this.genreIds = data.genres;
        this.updated = new Date(data.updated);
    }

    /**
     * Get genre names for this podcast.
     * @returns {string[]} Array of genre names.
     */
    getGenreNames() {
        return this.genreIds.map(id => {
            const genre = genres.find(g => g.id === id);
            return genre ? genre.title : 'Unknown';
        });
    }

    /**
     * Get detailed season information.
     * @returns {Object[]} Array of season details.
     */
    getSeasonDetails() {
        const podcastSeasons = seasons.find(s => s.id === this.id);
        return podcastSeasons ? podcastSeasons.seasonDetails : [];
    }
}
