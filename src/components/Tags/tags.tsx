import { stringify } from 'querystring';
import React, { useEffect, useState } from 'react';


const Tags = () => {
  const [butons_unselected, setButons_unselected] = useState(['Button 1', 'Bu', 'Button 3']);// Example array of strings
  const [butons_selected, setButons_selected] = useState([]);
  const [filterText, setFilterText] = useState('');
  const filteredStrings = butons_unselected.filter(str => str.toLowerCase().includes(filterText.toLowerCase()));

  const changeStateSelected = (value,button) => {

    if(value==0){
      const tempUnSelected = [...butons_unselected]
      const index = tempUnSelected.indexOf(button)
      tempUnSelected.splice(index,1)
      setButons_selected([button,...butons_selected])
      setButons_unselected(tempUnSelected)
    }else{
      const tempSelected = [...butons_selected]
      const index = tempSelected.indexOf(button)
      tempSelected.splice(index,1)
      setButons_unselected([button,...butons_unselected])
      setButons_selected(tempSelected)
    }
  }


  const addTag = (tagName) => {
    if(localStorage.getItem('myTagList')==null){
      localStorage.setItem('myTagList', JSON.stringify([tagName]))
      setButons_selected([tagName,...butons_selected])
    }else{
      const tagListTemp = JSON.parse(localStorage.getItem('myTagList'));
      console.log(tagListTemp)
      localStorage.setItem('myTagList', JSON.stringify([...tagListTemp, tagName]))
      setButons_selected([tagName,...butons_selected])
    }
  }

  useEffect(() => {
    if(localStorage.getItem('myTagList')==null){
    }else{
      const temp =JSON.parse(localStorage.getItem('myTagList'))
      setButons_unselected([...butons_unselected,...temp])
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter buttons..."
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
      />
      <button className='btn btn-outline btn-secondary ml-4' onClick={() => addTag(filterText)}> + </button>
      <h2>Selected</h2>
      {butons_selected.map((string, index) => (
        <button onClick={()=>changeStateSelected(1,string)} className="btn btn-outline btn-primary" key={index}>{string}</button>
      ))}
      <h2>Unselected</h2>
      {filteredStrings.map((string, index) => (
        <button onClick={()=>changeStateSelected(0,string)} className="btn btn-outline btn-primary" key={index}>{string}</button>
      ))}
    </div>
  );
};

export default Tags;
