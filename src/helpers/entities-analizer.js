
export const countProjectByUser = ( entities )  => {
    
    let countExistingProjects = 0;
    entities.forEach( entity => {
        if ( entity.type === 'project' ) {
            countExistingProjects++;
        }
    } );
    return countExistingProjects;
    }

  