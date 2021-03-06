import React,{useState} from 'react';
import './App.css';
import Homepage from './Components/Home/Home';
import Aboutus from './Components/Abouts-us/Aboutus';
import CompetitionPage from './Components/CompetitionPage/CompetitionPage';
// import LoadingPage from './Components/Loadingpage/Loading';
import Sponsor from './Components/Sponsors/Sponsors';
import Button from '@material-ui/core/Button';
import Login from './Components/loginPage/Login';
function App() {
  
  const [torender , settorender] = useState('Home Page');
  
  return (
    
    <div className="App">
       {torender==='Home Page'?<Homepage 
       clickedhome ={()=>settorender('Home Page')}
       clickedaboutus = {()=>{settorender('About us')}}
       clickedcompetitionspage = {()=>{settorender('Competition Page')}}
       clickedsponsor ={()=>{settorender('Sponsor')}}
       />
       :null}
       {torender==='About us'?<Aboutus/>:null}
       {torender==='Competition Page'?<CompetitionPage/>:null}
       {torender==='Sponsor'?<Sponsor/>:null}
       {torender!=='Home Page'?<div style={{position : 'fixed' , right: '0' , bottom :'0' , margin: '5px'}}>
        <Button onClick={()=>{settorender('Home Page')}} style={{color: 'white', background : 'rgba(0,0,0,0.5)'}} variant="contained" color="neutral">Home</Button>;
       </div>:null}
    </div>
  );
}

export default App;
