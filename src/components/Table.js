import React from 'react'
import "./Table.css";

const Table = ({ data, columns }) => {
    const getCaps = (str)=>{
        return str.toUpperCase();
    }

  return (
    <div>
        <table>
            <thead>
                <tr>
                    {columns.map((head)=>{
                       return <>
                        <th>{getCaps(head.header)}</th>
                       </>
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((row)=>{
                    return <>
                    <tr>
                        {columns.map((col)=>{
                            return <>
                            <td>{row[col.field]}</td>
                            </>                            
                        })}
                        <td><button>Manage Invoice</button></td>
                     </tr>
                     </>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Table