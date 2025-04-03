const episodes = [
    {
        title: 'title of this episode',
        runtimeMinutes: 36,
        runtimeSeconds: 14,
        url: 'https://example.com/episode1.mp3' // Example URL for the episode
    },
    {
        title: 'title of this episode',
        runtimeMinutes: 36,
        runtimeSeconds: 14,
        url: 'https://example.com/episode2.mp3' // Example URL for the episode
    },
    {
        title: 'title of this episode',
        runtimeMinutes: 36,
        runtimeSeconds: 14,
        url: 'https://example.com/episode3.mp3' // Example URL for the episode
    },
    {
        title: 'title of this episode',
        runtimeMinutes: 36,
        runtimeSeconds: 14,
        url: 'https://example.com/episode4.mp3' // Example URL for the episode
    },
    {
        title: 'title of this episode',
        runtimeMinutes: 36,
        runtimeSeconds: 14,
        url: 'https://example.com/episode5.mp3' // Example URL for the episode
    },
    {
        title: 'title of this episode',
        runtimeMinutes: 36,
        runtimeSeconds: 14,
        url: 'https://example.com/episode6.mp3' // Example URL for the episode
    }
]
const episodeList = document.getElementById('episode-list');

console.log(episodes);

//set episode count

document.getElementById('episode-count').textContent = `${episodes.length}`;

episodes.forEach((episode, index) => {
    // Create a list item for each episode
    const listItem = document.createElement('li');
    listItem.className = 'episode-item';
    
    // Create a link for the episode
    const episodeLink = document.createElement('a');
    episodeLink.href = episode.url;
    episodeLink.textContent = `${index + 1}. ${episode.title} (${episode.runtimeMinutes} min ${episode.runtimeSeconds} sec)`;
    episodeLink.target = '_blank'; // Open in a new tab

    // Append the link to the list item
    listItem.appendChild(episodeLink);

    // Append the list item to the episode list
    episodeList.appendChild(listItem);
});