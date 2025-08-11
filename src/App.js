import logo from './logo.svg';
import './App.css';
import ImageCarousel from './components/ImageCarousel';
import TestIFrame2 from './components/TestIFrame2';



function App() {
  return (
    <div>
       <div>
      <h1 className="text-center text-2xl font-bold my-4 w-[2/3] h-[1/4]">React Image Carousel</h1>
      <ImageCarousel height="h-[560px]" />
      <TestIFrame2 />


    </div>
    </div>
  );
}

export default App;
