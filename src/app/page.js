import Bio from './Bio.js';
import Gallery from './Gallery.js';
import Profile from './Profile.js';

export default function Home() {
  return (
    <div>
      <Profile />
      <Gallery />
      <Bio/>
    </div>
  );
}
