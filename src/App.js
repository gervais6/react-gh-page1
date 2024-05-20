
import { Button } from 'bootstrap';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {useState} from 'react';

function App() {
  

  const[value,setValue]=useState('');


  
   
  
    
     
  

  return (
    <div className="container  mt-5 ">
  <div className="row  justify-content-center  ">
    <div className="col-6 ">

    <div class="input-group-lg mb-3">
    <input type="text " id="text " className="form-control mb-5 " value={value}  style={{fontSize:70,textAlign:'right'}}/>
    </div>
     
     <div class='col-12'>
    <input type="button" className="btn border  col-3 " value="7" onClick={e=>setValue(value + e.target.value)} style={{padding:15,fontSize:30}}/>
    <input type="button" className="btn  col-3 border "  value="8" onClick={e=>setValue(value + e.target.value)}  style={{padding:15,fontSize:30}}/>
    <input type="button" className="btn  col-3 border "  value="9" onClick={e=>setValue(value + e.target.value)}  style={{padding:15,fontSize:30}}/>
    <input type="button" className="btn  col-3 border "  value="x"  onClick={e=>setValue(value + e.target.value)}  style={{padding:15,fontSize:30}}/>
    </div>

    <div class='col-12'>
    <input type="button" className="btn  col-3 border "  value="4"  onClick={e=>setValue(value + e.target.value)}  style={{padding:15,fontSize:30}}/>
    <input type="button" className="btn  col-3 border "  value="5" onClick={e=>setValue(value + e.target.value)}   style={{padding:15,fontSize:30}}/>
    <input type="button" className="btn  col-3 border "  value="6"  onClick={e=>setValue(value + e.target.value)}  style={{padding:15,fontSize:30}}/>
    <input type="button" className="btn  col-3 border "  value="-"  onClick={e=>setValue(value + e.target.value)}  style={{padding:15,fontSize:30}}/>
     </div>

    <div class='col-12'>
    <input type="button" className="btn  col-3 border "  value="1"  onClick={e=>setValue(value + e.target.value)}  style={{padding:15,fontSize:30}}/>
    <input type="button" className="btn  col-3 border "  value="2" onClick={e=>setValue(value + e.target.value)}  style={{padding:15,fontSize:30}}/>
    <input type="button" className="btn  col-3 border "  value="3" onClick={e=>setValue(value + e.target.value)}  style={{padding:15,fontSize:30}}/>
    <input type="button" className="btn  col-3 border "  value="+" onClick={e=>setValue(value + e.target.value)}   style={{padding:15,fontSize:30}}/> 
    </div>

    <div class='col-12'>
    <input type="button" className="btn  col-3 border "  value="C"  onClick={e=>setValue('')}  style={{padding:15,fontSize:30}}/>
    <input type="button" className="btn  col-3 border "  value="0" onClick={e=>setValue(value + e.target.value)}  style={{padding:15,fontSize:30}}/>
    <input type="button" className="btn  col-3 border "  value="CE" onClick={e=>setValue(value.slice(0,-1))}  style={{padding:15,fontSize:30}}/>
    <input type="button" className="btn  col-3 border "  value="/" onClick={e=>setValue(value + e.target.value)}  style={{padding:15,fontSize:30}}/>
     </div>

    <div class='col-12'>
    <input type="button" className="btn  col-12 border mt-3 "  value="=" onClick={e=>setValue(eval(value))}   style={{padding:15,fontSize:30}}/>
    </div>
   

    
    </div>

   
    
  </div>
</div>
  );
}

export default App;

