import { useState } from "react";

function ListGroup() {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
    ];

    const [selectedItem,setSelectedItem] = useState(-1);

    const handleOnClick = (item) => {
        console.log('Item clicked:', item);
        setSelectedItem(item.id);
    }

  return (
    <>
    <h1>List</h1>
    <ul className="list-group">
    {items.length === 0 && <p>There are no items in the list.</p>}
      {items.map((item) => (
        <li className={selectedItem === item.id? "list-group-item active": "list-group-item"} key={item.id} onClick = {() => handleOnClick(item)} >{item.name}</li>
      ))}
    </ul>  
    </>
  );
}
export default ListGroup;