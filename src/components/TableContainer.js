import { React } from "react";
import { useTable, useFilters, useGlobalFilter, useSortBy, useExpanded } from "react-table";
import { GlobalFilter, DefaultFilterForColumn } from "../Filter";
import ShowEntity from './ShowEntity';

export default function Table({ columns, data, renderRowSubComponent }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    visibleColumns,
    prepareRow,
    setGlobalFilter,
    preGlobalFilteredRows,
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultFilterForColumn },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useExpanded
  );

  return (
    <table {...getTableProps()}>
      <thead>
      <tr>
          <th
            colSpan={visibleColumns.length}
            style={{
              textAlign: "center",
            }}
          >
            {/* rendering global filter */}
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </th>
        </tr>
        {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    // Add the sorting props to control sorting. For this example
                    // we can add them into the header props
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        {/* Add a sort direction indicator */}
                        <span>
                    {column.isSorted
                        ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                        : ''}
                  </span>
                    </th>
                ))}
            </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <>
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
              {
                row.isExpanded &&
                <tr>
                  <td colSpan={visibleColumns.length}>
                  <h4>
                    <center>Entities</center>
                  </h4>
                  <hr />
                  <div class="container">
                    <div class="row">
                      {
                        row.values.expander.map(val => {
                          return (
                            <>
                              <ShowEntity {...val}/>
                            </>
                          )
                        })
                      }
                    </div>
                  </div>
                  </td>
              </tr>
              }
            </>
          );
        })}
      </tbody>
    </table>
  );
}
