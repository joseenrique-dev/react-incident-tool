import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Table from './TableContainer';
import UserGeneralData from './UserGeneralData';
import { countProjectByUser } from '../helpers/entities-analizer';
const ShowResults = () => {
    const location = useLocation();
    const [data, setData] = useState([]);

  useEffect(() => {
    console.log('Location', location.state.data);
    setData(location.state.data)
  }, [location]);

  const columns = [
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
  ];
  return (
    <div>
      <h1>
        <center>React Incident Tool</center>
      </h1>
      <UserGeneralData data={data} />
      {
        data.length > 0 &&
        <Table columns={columns} data={data} />
      }
    </div>
  )
}

export default ShowResults
