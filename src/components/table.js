import React from "react"

const Table = ({tableHeadings, tableContent}) => {
  const tableHead = tableHeadings.map((heading, i) => <th key={`thead-${i + 1}`}>{ heading }</th>);
  const tableBody = tableContent.map((content, i) => <tr key={`tbody-${i + 1}`}>
    <td>{ content.elements.field_name.value }</td>
    <td>{ content.elements.input_type.value }</td>
    <td>{ content.elements.description.value }</td>
  </tr>);
  return (
    <table>
      <thead>
        <tr>
          { tableHead }
        </tr>
      </thead>
      <tbody>
        { tableBody }
      </tbody>
    </table>
  )
}

export default Table;