
import './App.css';
import Headers from './componets/headers/Headers';


import ProductList from './componets/productLIst/productList';

import { Provider } from 'react-redux';
import  {store} from './componets/redux/store'

function App() {
  return (
   <Provider store={store} >
     <Headers />
    <ProductList/> 
   </Provider>
  );
}

export default App;
