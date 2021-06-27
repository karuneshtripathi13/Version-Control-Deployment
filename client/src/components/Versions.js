import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment, useState ,useEffect} from 'react';

const Versions = (props) => {
  const [post, setPost] = useState([])
  const [cont, setCont] = useState("")
  const [id, setId] = useState("")
  const [msg, setMsg] = useState("")

  const getfileData=(val)=>{
    if(id!="")
    {
      document.getElementById(id).className="hidden"
      setCont("")
      setId("")
      setMsg("")
    }
    console.log(val)
    var path='/file/path/'+props.idd+"/"+val
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById(val).className="data"
        console.log(data.content)
        setCont(data.content)
        setId(val)
      });
  }
  return (
    <div>
      {(props.prev.length===0)?((<div className="hidden"></div>)):(
      <ul className="verall">
      {props.prev.map((data) => (
        <ul key={data.name} id="version">
        <button className='btn' id="wd" onClick={()=>getfileData(data.name)}>{data.name}</button>
        <div id={data.name} className="hidden">
          <h5 id="dispmsg">Commit Message: {data.msg} <h5 id="time">{data.time}</h5></h5>
          <textarea name="newcont" value={cont} id="cont"></textarea>
        </div>
        </ul>
      ))}
      </ul>)
      }
    </div>
  );
};

export default Versions;