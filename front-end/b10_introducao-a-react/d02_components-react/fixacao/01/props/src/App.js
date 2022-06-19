import './App.css';
import staringCat from './staringCat.jpeg';
import Image from './Image';

function App() {
  return (
    <main>
      <Image source={staringCat} alternativeText="Cute cat staring" />
    </main>
  );
}
export default App;
