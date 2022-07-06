import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
import style from '../styles/upload.module.css';
const UploadFile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLoading(true);
    console.log('Loading 1', loading);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      console.log(data);
      setTimeout(() => {
        setLoading(false);
        console.log('Loading 2', loading);
        navigate('/results', { state: { data } });
      }, 3000);
    }
    reader.readAsText(file);
  }

  return (
          <div className="container">
            <div className="page-header">
              <h1>Upload file</h1>
              <h6>Load user pool data in json format</h6>
            </div>
            <div className="alert alert-info">
              This "app" is only with the propose of analyze the data from the json file.
            </div> 
            
            {
              loading ? 
                <div className='d-flex justify-content-center'>
                  <GridLoader/>
                </div>  
                 :
                <div className="card text-center">
                  <div className="card-header">
                  Select a file
                  </div>
                  <div className="card-body">
                    <div className="form-group d-flex flex-column align-items-center">
                      <br />
                      <div className="input-group d-flex justify-content-center">
                        <span className="input-group-btn">
                        <input type="file" className={`${style.customFileInput}`} onChange={handleChange}/>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>           
            }
              
          </div>
  )
}

export default UploadFile

