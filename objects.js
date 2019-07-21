var playlist = new Object({Beatles: 'Abbey Road'});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
