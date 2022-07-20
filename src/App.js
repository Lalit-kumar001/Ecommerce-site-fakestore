import Restaurant from './component/basics/main';
import Single from './component/basics/Single';
import {BrowserRouter,Routes,Route} from  "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Restaurant/>}/>
      <Route path="products/:id" element={<Single/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
