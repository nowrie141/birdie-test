import * as React from 'react';
import styled from 'styled-components';
export function ListElement(props: {
  id: string;
  payload: string;
}) {

  // Styles for the table
  const TableStyle = styled.table`
    border-collapse:collapse;
    border-spacing:0;
    margin: 1rem;
    min-width:500px;
    width: 500px;
    max-width: 500px;
  `;

  const TableHeaderStyle = styled.th.attrs({
    colSpan: 2
  })`
    border-color: black;
    border-style:solid;
    border-width:1px;
    font-family:Arial; sans-serif;
    font-size:14px;
    font-weight:bold;
    overflow:hidden;
    padding:10px 5px;
    word-break:normal;
  `;

  const TableCellStyle = styled.td`
    border-color:black;
    border-style:solid;
    border-width:1px;
    font-family:Arial, sans-serif;
    font-size:14px;
    overflow:hidden;
    padding:10px 5px;
    word-break:normal;
  `;

  function displayAttributes(data: string) {
    let structure: JSX.Element[] = [];
    // Parse the payload to JSON object
    const payload = JSON.parse(data);
    // Go through every attribute in the payload.
    Object.keys(payload).forEach(key => {
      if (typeof payload[key] !== 'object') {
        structure.push(
          <tr key={key}>
            <TableCellStyle>{key}</TableCellStyle>
            <TableCellStyle>
              {
                (typeof payload[key] !== 'string') ?
                  JSON.stringify(payload[key]) :
                  payload[key]
              }
            </TableCellStyle>
          </tr>
        );
      }
    });
    return structure;
  }

  return (
    <TableStyle>
      <thead>
        <tr>
          <TableHeaderStyle>{props.id}</TableHeaderStyle>
        </tr>
      </thead>
      <tbody>
        {displayAttributes(props.payload)}
      </tbody>
    </TableStyle >
  );
}