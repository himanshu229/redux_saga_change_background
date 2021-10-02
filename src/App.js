import React,{useEffect} from 'react'
import './App.css'
import {useDispatch,useSelector} from 'react-redux'
import {setColors} from './Redux/actions/Actions';
function App() {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.allColors.colors);

  useEffect(()=>{
    dispatch(setColors())
  },[]) 

  const handleClick=(data)=>{
    let color = data.background
    console.log(data)
    document.body.style.backgroundColor = color
  }



  return (
    <React.Fragment>
      <div className="box_center">
      {colors.map((data,index)=>(
        <React.Fragment key={index}>
        <input type="button" value="Button"  style={{background:data.background,color:data.color}} onClick={()=>handleClick(data)}/><br/>
        </React.Fragment>
      ))
      }
        
      </div>     
    </React.Fragment>
  )
}

export default App
