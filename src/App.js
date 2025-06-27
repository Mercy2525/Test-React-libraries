import logo from './logo.svg';
import './App.css';
import ImageCarousel from './components/ImageCarousel';

function App() {
  return (
    <div>
       <div>
      <h1 className="text-center text-2xl font-bold my-4 w-[2/3] h-[1/4]">React Image Carousel</h1>
      <ImageCarousel height="h-[560px]" />
    </div>
    </div>
  );
}

export default App;
