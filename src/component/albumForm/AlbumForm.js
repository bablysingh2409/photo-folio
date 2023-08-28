import { useState } from 'react';
import styles from './AlbumForm.module.css';

export default function AlbumForm() {
  const [albumName, setAlbumName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(albumName);
  };

  return (
    <div className={styles.formContainer}>
      <span>Create an album</span>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={albumName}
          placeholder="Album Name"
          onChange={(e) => setAlbumName(e.target.value)}
        />
        <button>Clear</button>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
