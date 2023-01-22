
import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/router';


function App() {
  return (
    <div className='max-w-[1400px] mx-auto'>
     <RouterProvider router={routes}>

     </RouterProvider>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
