import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment, useState,useEffect } from 'react';

const Edit = () => {
  const idd=localStorage.getItem("idd")
  const [post, setPost] = useState([])
  const [cont, setCont] = useState("")
  const [id, setId] = useState("")
  const [msg, setMsg] = useState("")
  const [time, setTime] = useState("")


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
    var path='/file/'+idd+"/"+val
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        setCont(data.content)
        setId(val)
        setMsg(data.msg)
        setTime(data.time+"  "+data.date)
        document.getElementById(val).className="data"
        console.log(data.content)
      });
  }
  const edit=(val)=>{
    var path='/file/'+val
    console.log({content:cont,msg:msg,time:time})
  fetch(path,{method:'PATCH',body:JSON.stringify({content:cont,msg:msg,time:time,id:idd}),headers: {
    'Accept': 'application/json','Content-Type': 'application/json'}}).then((response)=>response.json()).then((data)=>{
      console.log(data.msg);
      alert(data.msg)
      
  })
  }
  function handleChange(event) {
    setCont(event.target.value);
  }
  function handlemsg(event) {
    setMsg(event.target.value);
  }
  return (
    <div>
      {useEffect(() => {
        getBlogPost()
        }, [])}      <Link to='/login/home' className='btn'>Back</Link><br/>
      {(post.length===0)?((<div className="hidden"></div>)):(
      <ul id="data" >
      {post.map((data) => (
        <ul key={data._id}>
        <button className='btn' id='wd' onClick={()=>getfileData(data.name)}>{data.name} &nbsp;<i className="fa fa-edit"></i></button>
        <div id={data.name} className="hidden">
        <input type="text" name="msg" id='textbox' onChange={handlemsg} placeholder='Commit Message' className="text" style={{padding:"0.5vw",minWidth :"max-content"}}></input>
        <button className='btn' onClick={()=>edit(data.name)}>Push</button>
        <textarea name="newcont" value={cont} id="cont" onChange={handleChange}></textarea>
        </div>
        </ul>
      ))}
      </ul>)
      }
    </div>
  );
};

export default Edit;