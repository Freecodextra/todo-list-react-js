import React, { useState, useEffect } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import Input from '../input/Input';
import './AddButton.css'

function AddButton() {
  const [isAdd, setIsAdd] = useState(false);
  return (
    <>
    {isAdd && <Input />}
    <div className='add-button neuphormism center' onClick={()=> setIsAdd(!isAdd)}>
        <AiOutlinePlus />
    </div>
    </>
  )
}

export default AddButton