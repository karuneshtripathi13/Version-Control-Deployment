import Message from './message'
import axios from 'axios';
import React, { Fragment, useState } from 'react';
import Progress from './Progress';
import { BrowserRouter as Router, Route, Switch,Redirect,Link } from "react-router-dom";



const Upload = () => {
    const idd=localStorage.getItem("idd")
    const [file, setFile] = useState({});
    const [upload,setupload]=useState('')
    const [message,setmessage]=useState('')
    const [uploadPercentage, setUploadPercentage] = useState(0);


    function onChange(e){
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
        setupload(file.name)
    }
    async function onFileUpload(e) {
      e.preventDefault();
      const formData=new FormData();
      let dat=""
      formData.append('file',file)
      formData.append('msg',e.target.msg.value)
        // Details of the uploaded file
          const reader = new FileReader()
          dat=reader.readAsText(file)
        console.log("DATA"+dat);
        try{
          const res=await axios.post(('/file/up/'+idd),formData,{
            headers:{
              'Content-Type':'multipart/form-data'
            },
            onUploadProgress:ProgressEvent=>{
              setUploadPercentage(
                parseInt(
                  Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
                )
              );
    
              // Clear percentage
              setTimeout(() => setUploadPercentage(0), 5000);
            }
          })
          setmessage(res.data.msg);
        }catch(err){
          if(err.response.status===500){
            setmessage("There was problem with server")
          }
          else{
            setmessage(err.response.data.msg);
          }
        }
        // Request made to the backend api
        // Send formData object
      };
    function filedata(){
        try{
        if (file) {
            return(
              <div id='text'>
                <h2>File Details:</h2>         
                <p>File Name: {file.name}</p>
                <p>File Type: {file.type}</p>
                <p>Last Modified:{" "}{new Date(file.lastModifiedDate).toDateString()}</p>
              </div>
            )
          } else {
              return(
              <div id='text'>
                <h4>Choose before Pressing the Upload button</h4>
              </div>
              )
          }
        }
        catch(e){
            return(
                <div id='text'>
                  <h4>Choose before Pressing the Upload button</h4>
                </div>
                )
        }
    }
    return (
        <Fragment>
          {message ? <Message msg={message}/> : <Message msg={"Please Upload the File Below."}/>}
          <form onSubmit={(e)=>onFileUpload(e)}>
            <input id='ip' type='file' name='file' onChange={(e)=>onChange(e)}/>
            <label htmlFor='ip'><i className="fa fa-upload"></i>&nbsp;&nbsp; Choose File...</label>
            <Link to='/login/home' className='btn'>Back</Link>
            <Progress percentage={uploadPercentage} />
            <label className="text">Commit Message:&nbsp;&nbsp;</label>
            <input type="text" name="msg" id='textbox' className="text"></input>
            <input type="submit" value="Push" className='btn'/>
            <br/>
            <br/>
            {filedata()}
          </form>
          {upload ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h5 className='text-center'>{upload.fileName}</h5>
            <img style={{ width: '100%' }} src={upload.filePath} alt='' />
            {console.log(upload.filePath)}
            {console.log(upload.fileName)}
            <object width="300" height="300" type="text/plain" data={upload.filePath} border="0" >
</object>
            {/* <embed type="text/html" src={upload.filePath} style={{ width: '30vw' ,height:'40vw'}} /> */}
          </div>
        </div>
      ) : null}
        </Fragment>
    )
}
export default Upload
