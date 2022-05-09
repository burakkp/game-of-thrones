import { useState, useMemo } from 'react'
import { sortRows, filterRows, paginateRows } from '../../utils/helpers';
import './Table.scss';

const Table = ({ columns, rows }) => {
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' });
  const rowsPerPage = 10

  const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters])
  const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort])
  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage)

  const handleSearch = (value, accessor) => {
    setActivePage(1)

    if (value) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [accessor]: value,
      }))
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters }
        delete updatedFilters[accessor]

        return updatedFilters
      })
    }
  }

  const handleSort = (accessor) => {
    setActivePage(1)
    setSort((prevSort) => ({
      order: prevSort.order === 'asc' && prevSort.orderBy === accessor ? 'desc' : 'asc',
      orderBy: accessor,
    }))
  }

  const getUrlInfo = async (url, label, current) => {
    const res = await fetch(url);
    const data = await res.json();
    
    if(label === 'Father'){
        current.innerText = data.name
    }else if(label === 'Mother'){
        current.innerText = data.name
    }else if(label === 'Spouse'){
        current.innerText = data.name
    }
  };
    
  const fetchAges = async (name, current) => {
      console.log(current)
      await fetch('https://api.agify.io/?name='+name)
        .then((res) => res.json())
        .then(data => {
            console.log(data.age)
            
            current.target.firstChild.nodeValue = '';
            current.target.innerText = data.age === undefined || data.age === null ? 'Age not found' : data.age 
        });
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => {
              const sortIcon = () => {
                if (column.accessor === sort.orderBy) {
                  if (sort.order === 'asc') {
                    return <span key={column.accessor+'-asc'}>↾</span>
                  }
                  return <span key={column.accessor+'-desc'}>⇂</span>
                } else {
                  return <span key={column.accessor+'default'}>⇋</span>
                }
              }
              return (
                <th key={column.accessor}>
                  <div>
                    <span className='thSpan' onClick={() => handleSort(column.accessor)}>{column.label} {sortIcon()}</span>
                    <input
                            key={`${column.accessor}-search`}
                            type="search"
                            className='input is-small'
                            placeholder={`Search ${column.label}`}
                            value={filters[column.accessor] || ''}
                            onChange={(event) => handleSearch(event.target.value, column.accessor)}
                        />
                  </div>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {calculatedRows.map((row, id) => {

            return (
              <tr key={id}>
                {columns.map((column, idx) => {
                  if (column.format && row[column.accessor] !== '') {

                    return <td key={column.accessor}><span className='getInfoSpan' onClick={(e) => getUrlInfo(row[column.accessor], column.label, e.target)}><p>{column.label}</p><i>Please click for learn </i></span></td>
                  }
                  if(column.accessor === 'age'){
                    let name = row['name'].split(' ')[0];
                    return <td key={column.accessor}><span className='getInfoSpan' onClick={(e) => fetchAges(name, e)}>{row['name'] !== '' ? <i>Please click for learn </i> : ''}</span></td>
                    
                  }
                  return <td key={column.accessor}>{row[column.accessor]}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table;