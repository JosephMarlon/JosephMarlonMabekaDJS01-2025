import { podcasts } from '../data.js';
import Podcast from './models/Podcast.js';
import { createPodcastCard } from './components/PodcastCard.js';
import Modal from './components/Modal.js';

document.addEventListener('DOMContentLoaded', () => {
    const podcastGrid = document.getElementById('podcast-grid');
    const modal = new Modal();
    
    // Map raw data to Podcast instances
    const podcastInstances = podcasts.map(data => new Podcast(data));
    
    // Render the grid
    podcastInstances.forEach(podcast => {
        const card = createPodcastCard(podcast);
        
        // Setup click handler for modal
        card.addEventListener('click', () => {
            modal.open(podcast);
        });
        
        podcastGrid.appendChild(card);
    });
});
