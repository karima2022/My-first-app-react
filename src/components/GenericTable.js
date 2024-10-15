function GenericTable({ items, onEditItem, onDeleteItem, renderRow }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{renderRow ? renderRow(item) : item}</td>
              <td>
                <button onClick={() => {
                  const newItemValue = prompt("Modifier l'élément", item);
                  if (newItemValue) {
                    onEditItem(index, newItemValue);
                  }
                }}>Modifier</button>
              </td>
              <td>
                <button className="delete-button" onClick={() => onDeleteItem(index)}>&#10006;</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default GenericTable;
  