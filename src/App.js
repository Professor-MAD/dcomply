import React, { useState } from 'react';
import './App.css';

function App() {
  const [video, setVideo] = useState(null);

  // Fetch a video by its ID
  const fetchVideo = (id) => {
    fetch(`/api/videos/${id}`)
      .then(response => response.json())
      .then(data => setVideo(data))
      .catch(error => console.error('Error fetching video:', error));
  };

  return (
    <div>
      <h1>BComply Training Videos</h1>
      <button onClick={() => fetchVideo('YOUR_VIDEO_ID_1')}>Show Introduction to BComply</button>
      <button onClick={() => fetchVideo('YOUR_VIDEO_ID_2')}>Show Advanced Compliance Techniques</button>

      {video && (
        <div>
          <h2>{video.title}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
