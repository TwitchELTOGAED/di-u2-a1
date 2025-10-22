import Bio from './Bio.js';
import Gallery from './Gallery.js';
import Profile from './Profile.js';
import TodoList from './TodoList.js';
import TodoList2 from '/TodoList2.js'

export default function Home() {
  return (
    <div>
      <Profile />
      <Gallery />
      <Bio/>
      <TodoList/>
      <TodoList2/>
    </div>
  );
}
