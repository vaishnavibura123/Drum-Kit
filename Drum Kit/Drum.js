// Drum sound files
const drumSounds = {
    drum1: 'musics/music1.wav',
    drum2: 'musics/music2.wav',
    drum3: 'musics/music3.wav',
    drum4: 'musics/music4.wav',
    drum5: 'musics/music5.wav',
    drum6: 'musics/music6.wav',
    drum7: 'musics/music7.wav',
  };
  
  // Function to play drum sound
  function playDrumSound(drumId) {
    const audio = new Audio(drumSounds[drumId]);
    audio.play();
  }

  // Event listeners for drum clicks
  const drums = document.querySelectorAll('.drum');
  drums.forEach((drum) => {
    drum.addEventListener('click', () => {
      const drumId = drum.id;
      playDrumSound(drumId);
    });
  });
  
//   // Event listener for keyboard key press
//   document.addEventListener('keydown', (event) => {
//     const key = event.key.toLowerCase();
//     if (drumSounds.hasOwnProperty(key)) {
//       playDrumSound(key);
//     }
//   });
  

  