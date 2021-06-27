import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { useEffect } from 'react';
import Versions from './Versions'

const Previous = ({ idd }) => {
  const [post, setPost] = useState([])
  const [cont, setCont] = useState("")
  const [id, setId] = useState("")
  const [msg, setMsg] = useState("")
  const [prvs, setPrvs] = useState([])


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
      setPrvs([])
    }
    var path='/file/'+idd+'/'+val
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        setCont(data.content)
        setId(val)
        setMsg(data.msg)
        setPrvs(data.prev)
        document.getElementById(val).className="data"
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
        {(data.prev.length!==0)?<Versions idd={idd} prev={data.prev}/>:<h6 id="no-data">No Previous Versions available</h6>}
        </div>
        </ul>
      ))}
      </ul>)
      }
    </div>
  );
};

export default Previous;