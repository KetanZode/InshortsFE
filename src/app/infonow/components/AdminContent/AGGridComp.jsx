import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useState } from 'react';
import { useEffect } from 'react'
import { apicall } from '/src/api/AxiosServicesSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { refresh } from '../../features/article/NewArtSlice';




export const AGGridComp = () => {
    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([]);
    const dispatch  = useDispatch()
    const rData     = useSelector((state)=>state.article.articles)
    
    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
      { field: "title" },
      { field: "src_link" },
      { field: "active" },
      { field: "created" },
      { field: "updated" },
      { field: "Category" },
      { field: "source" },
      { field: "language" },
    ]);

    const fetchdata = async () =>{
        const res = await apicall('fetcharticle')
        setRowData(res)
      }

    useEffect(()=>{
     fetchdata()
    }, [])
    
    const print = () =>{
      const { data, loading, error } = useSelector((state) => state.myData);
    }

    return (
        // wrapping container with theme & size
        <div
         className="ag-theme-quartz z-10" // applying the Data Grid theme
         style={{ height: 500 }} // the Data Grid will fill the size of the parent container
        >
          ABCD{rData}
          <button className='border p-1' onClick={print}>Click me</button>
          <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
          />
        </div>
       )   
   }