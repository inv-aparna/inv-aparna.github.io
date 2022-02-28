
import './App.css';
import {Login, Practice,Child, ThankYou,IfCondition, IfCondition2,ArrayMap,ArrayDesrtuction1,MathOperations, ObjectInsideFunction, SpreadOperator1, Car, ReactProps, Property2a} from './ButtonPage';
import { BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route end path='/' element={<Login/>}/>
    <Route path='/practice' element={<Practice/>}/>
    <Route path='/parent-child' element={<Child/>}/>
    <Route path='/thankyou' element={<ThankYou/>}/>
    <Route path='/if-condition' element={<IfCondition/>}/>
    <Route path='/ternary' element={<IfCondition2/>}/>
    <Route path='/arraymap' element={<ArrayMap/>}/>
    <Route path='/arraydes1' element={<ArrayDesrtuction1/>}/>
    <Route path='/mathoperations' element={<MathOperations/>}/>
    <Route path='/objfun' element={<ObjectInsideFunction/>}/>
    <Route path='/sprdop' element={<SpreadOperator1/>}/>
    <Route path='/reactclass' element={<Car/>}/>
    <Route path='/reactprops' element={<ReactProps/>}/>
    <Route path='/property2' element={<Property2a/>}/>
    </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
