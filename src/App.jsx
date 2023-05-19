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
    datas.map(data=><Table className='w-50 mx-auto mt-5' key={data.matchId} striped bordered hover>
    
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
          <td>Goals</td>
          <td >{data?.stats?.teamA?.goals}</td>
          <td >{data?.stats?.teamB?.goals}</td>
        </tr>
        <tr>
          <td>Possession</td>
          <td>{data?.stats?.teamA?.possession}</td>
          <td>{data?.stats?.teamB?.possession}</td>
        </tr>
        <tr>
          <td>Total Passes</td>
          <td>{data?.stats?.teamA?.passes}</td>
          <td>{data?.stats?.teamB?.passes}</td>
        </tr>
        <tr>
          <td>Shots</td>
          <td>{data?.stats?.teamA?.shots}</td>
          <td>{data?.stats?.teamB?.shots}</td>
        </tr>
        <tr>
          <td>Shots on target</td>
          <td>{data?.stats?.teamA?.shotsOnTarget}</td>
          <td>{data?.stats?.teamB?.shotsOnTarget}</td>
        </tr>
        <tr>
          <td>Corners</td>
          <td>{data?.stats?.teamA?.corners}</td>
          <td>{data?.stats?.teamB?.corners}</td>
        </tr>
        
        
      </tbody>
    </Table>)
  }

     
    </div>
  )
}

export default App
