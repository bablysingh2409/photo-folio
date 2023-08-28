import { useState } from 'react';

export default function AlbumForm() {
  const [albumName, setAlbumName] = useState('');

  return (
    <div>
      <h1>Create an album</h1>
      <form>
        <input type="text" value={albumName} />
        <button>Clear</button>
        <button>Create</button>
      </form>
    </div>
  );
}
