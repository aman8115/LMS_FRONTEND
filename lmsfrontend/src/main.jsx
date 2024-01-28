// component imports
// tailwindcss imports
import './index.css';

// Library imports
import ReactDOM from 'react-dom/client';
import{Toaster} from 'react-hot-toast';
import{BrowserRouter} from 'react-router-dom';

import App from './App.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<App />
<Toaster/>

</BrowserRouter>

  

)
