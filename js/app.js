import { podcasts } from '../data.js';
import Podcast from './models/Podcast.js';
import { createPodcastCard } from './components/PodcastCard.js';

document.addEventListener('DOMContentLoaded', () => {
    const podcastGrid = document.getElementById('podcast-grid');
    
    // Map raw data to Podcast instances
    const podcastInstances = podcasts.map(data => new Podcast(data));
    
    // Render the grid
    podcastInstances.forEach(podcast => {
        const card = createPodcastCard(podcast);
        
        // Setup click handler for modal (to be implemented in phase 4)
        card.addEventListener('click', () => {
            console.log('Open modal for:', podcast.title);
            // Modal logic will be triggered here
        });
        
        podcastGrid.appendChild(card);
    });
});
