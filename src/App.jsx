import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function App() {
const [datas, setData] =useState([])
useEffect(()=>{
  fetch('https://football-backend.vercel.app/getMatchStats')
  .then(res=>res.json())
  .then(d => setData(d))
},[])
console.log(datas);
  return (
    <div>
  {
    datas.map(data=><Table key={data.matchId} striped bordered hover>
    
      <tbody>
        <tr>
          <td>Date</td>
          <td colSpan={2} className='ps-2'>{data.date}</td>
          
        </tr>
        <tr>
          <td></td>
          <td> Team 1</td>
          <td> Team 2</td>
        </tr>
        <tr>
          <td>1</td>
          <td >Mark</td>
          <td >Otto</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        
        
      </tbody>
    </Table>)
  }

     
    </div>
  )
}

export default App
