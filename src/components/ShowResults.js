import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import Table from './TableContainer';
import UserGeneralData from './UserGeneralData';
import { countProjectByUser } from '../helpers/entities-analizer';

const ShowResults = () => {
  const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState([]);

  useEffect(() => {
    setData(location.state.data)
  }, [location]);

  const columns = React.useMemo(
    () =>[
      {
        // Build our expander column
        id: 'expander', // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {/* {isAllRowsExpanded ? '↧' : '↦'} */}
          </span>
        ),
        accessor: (originalRow, rowIndex)=>Object.values(originalRow)[0].entities,
        Cell: ({ row }) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.values.expander.length > 0 ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  // We can even use the row.depth property
                  // and paddingLeft to indicate the depth
                  // of the row
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? '↧' : '↦'}
            </span>
          ) : null,
      },
      {
        Header: "User Id",
        accessor: (originalRow, rowIndex)=>Object.keys(originalRow)[0],
      },
      {
        Header: "Entities count",
        accessor: (originalRow, rowIndex)=>Object.values(originalRow)[0].entities.length,
        disableFilters: true,
        Cell: ({ cell: { value } }) => {
          return value || "-"
        },
      },
      {
        Header: "Asociated projects",
        accessor: (originalRow, rowIndex)=>countProjectByUser(Object.values(originalRow)[0].entities),
        disableFilters: true,
      },
      {
        Header: "Entities type",
        accessor: (originalRow, rowIndex)=>{
          const entities = Object.values(originalRow)[0].entities;
          return  entities.map(data => data.type).join(",");
        },
        disableFilters: true,
      },
      {
        Header: "Updated",
        accessor: (originalRow, rowIndex)=>{
          const entityKey = Object.values(originalRow)[0].entities;
          return `Updated: ${entityKey[0]?.updated}`
        },
        disableFilters: true,
        Cell: ({ cell: { value } }) => value || "-",
      }
  ],[]);
  
  return (
    <div>
      <h1>
        <center>React Incident Tool</center>
      </h1>
      <div className='mb-2'>
        <button className="btn btn-secondary" onClick={()=>navigate('/')}>Load another Json file</button>
      </div>
      <UserGeneralData data={data} />
      {
        data.length > 0 &&
        <Table columns={columns} data={data}/>
      }
    </div>
  )
}

export default ShowResults
