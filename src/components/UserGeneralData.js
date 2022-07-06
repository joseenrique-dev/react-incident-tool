 import { countProjectByUser } from '../helpers/entities-analizer';
 
 const UserGeneralData = (props) => {
  
  const totalUser = props.data.length;

  const countTotalProjects = (data) =>{
    let totalProjects = 0;
    data.forEach(user => {
      if(Object.values(user)[0].entities.length > 0){
        totalProjects += countProjectByUser(Object.values(user)[0].entities);
      }
    });
    return totalProjects;
  }
  return (
    <div className="card">
      <div className="card-header">
        Users Resume
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <div className="row">
            <div className="col-md-6 data-user-item">
              <p>Total Users: {totalUser}</p>
            </div>
            <div className="col-md-6 data-user-item">
              <p>Total Projects: {countTotalProjects(props.data)}</p>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
}

export default UserGeneralData;