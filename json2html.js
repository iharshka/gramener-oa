// json2html.js

export default function json2html(data) {
    // Get all unique keys from the data to create table headers
    const headers = [...new Set(data.flatMap(Object.keys))];
  
    // Generate the table header row
    const headerRow = headers.map(header => `<th>${header}</th>`).join("");
  
    // Generate the table body rows
    const bodyRows = data.map(row => {
      return `<tr>${headers.map(header => `<td>${row[header] || ""}</td>`).join("")}</tr>`;
    }).join("");
  
    // Combine everything into the full table HTML
    return `
      <table data-user="211119070@stu.manit.ac.in">
        <thead>
          <tr>${headerRow}</tr>
        </thead>
        <tbody>
          ${bodyRows}
        </tbody>
      </table>
    `;
  }
  