import React from 'react';

const ShowEntity = ( props ) => {
    console.log('ShowEntity props: ', props);
    const { id, status, name, type, versionNumber, created, updated } = props;
  return (
   
    <div className="col-lg-4" style={{marginBottom:"23px"}}>
        <div className="card card-margin">
            <div className="card-header no-border">
                <h5 className="card-title">Version #: {versionNumber}</h5>
            </div>
            <div className="card-body pt-0">
                <div className="widget-49">
                    <div className="widget-49-title-wrapper">
                        <div className="widget-49-meeting-info">
                            <span className="widget-49-pro-title">Name:</span>
                            <span className="widget-49-meeting-time">{ name }</span>
                        </div>
                    </div>
                    <div className="widget-49-meeting-points">
                        <div className='d-flex'>
                            <div className="element-title">Type:</div>
                            <div className="widget-49-type-element"> <span className='element-m-l'>{ type }</span></div>
                        </div>
                        <div className='d-flex'>
                            <div className="element-title">Status:</div>
                            <div className="widget-49-type-element"> <span className='element-m-l'>{ status }</span></div>
                        </div>
                        <div className='d-flex'>
                            <div className="element-title">Create:</div>
                            <div className="widget-49-type-element"> <span className='element-m-l'>{ created }</span></div>
                        </div>
                        <div className='d-flex'>
                            <div className="element-title">Updated:</div>
                            <div className="widget-49-type-element"> <span className='element-m-l'>{ updated }</span></div>
                        </div>
                    </div>
                    <div class="widget-49-meeting-action d-flex justify-content-center">
                        <div class="btn btn-sm btn-flash-border-primary">ID: <span className='element-id'>{id}</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowEntity
