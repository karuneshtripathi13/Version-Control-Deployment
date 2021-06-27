import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment, useState ,useEffect} from 'react';

const View = () => {
  const idd=localStorage.getItem("idd")
  const [post, setPost] = useState([])
  const [cont, setCont] = useState("")
  const [id, setId] = useState("")
  const [msg, setMsg] = useState("")


  const getBlogPost=()=>{
    console.log("idd is: "+idd)
    if(idd!=null){
    fetch('/file/'+idd)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPost(data)
      });
    }
    else
    window.location.reload()
  }
  const getfileData=(val)=>{
    if(id!="")
    {
      document.getElementById(id).className="hidden"
      setCont("")
      setId("")
      setMsg("")
    }
    var path='/file/'+idd+'/'+val
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        setCont(data.content)
        setId(val)
        setMsg(data.msg)
        document.getElementById(val).className="data"
        console.log(data.content)
      });
  }
  return (
    <div>
      {useEffect(() => {
        getBlogPost()
        }, [])}
      <Link to='/login/home' className='btn'>Back</Link><br/>
      {(post.length===0)?((<div className="hidden"></div>)):(
      <ul id="data" >
      {post.map((data) => (
        <ul key={data._id}>
        <button className='btn' id="wd" onClick={()=>getfileData(data.name)}>{data.name}</button>
        <div id={data.name} className="hidden">
          <h5 id="dispmsg">Commit Message: {msg} <h5 id="time">Time: {data.time} &nbsp;&nbsp;&nbsp;Date: {data.date}</h5></h5>
          <textarea name="newcont" value={cont} id="cont"></textarea>
        </div>
        </ul>
      ))}
      </ul>)
      }
    </div>
  );
};

export default View;