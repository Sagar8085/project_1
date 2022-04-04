import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { useTable ,useSortBy,usePagination} from "react-table";
import { Columns } from "./Columns";
import CircularStatic from "../Components/Loader";



export default function React_Table() {
  // here you set a state to tell the component it need to wait
  //  until the result is fetched from the api
  const [loadingData, setLoadingData] = useState(true);
  const columns=useMemo(()=> Columns,[])

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get("https://fakestoreapi.com/users")
        .then((response) => {
          // check if the data is populated
          // console.log(response.data);
          setData(response.data);
          // you tell it that you had the result
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);


  // const { pageIndex, pageSize } = state;
  const TableInstanse=useTable({
      columns,
      data,
      initialState: { pageIndex: 2 },
  },
  useSortBy,
  usePagination)


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    prepareRow,
  } = TableInstanse

  return (<>
   <div width="100vw" className="row">
   <caption><h3>Using React Table </h3></caption>

   </div>
<div>
<div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      
      <div style={{display:'flex', justifyContent:'center', alignItems:'center',width:'800px', marginTop:'40px'}}>
        
      <div class="table-responsive" >
      
      {loadingData ? (
        <CircularStatic  />
      ) : (
        <table style={{width:'100%'}} class="table" {...getTableProps()}>
        <thead>
          {// Loop over the header rows
          headerGroups.map(headerGroup => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {// Loop over the headers in each row
              headerGroup.headers.map(column => (
                // Apply the header cell props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {// Render the header
                  column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {// Loop over the table rows
          rows.map(row => {
            // Prepare the row for display
            prepareRow(row)
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {// Loop over the rows cells
                row.cells.map(cell => {
                  // Apply the cell props
                  return (
                    <td {...cell.getCellProps()}>
                      {// Render the cell contents
                      cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
  

      )}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      
    </div>
      </div>
    </div>
  
  
  
</div>
  
  </>
   
  );
}

