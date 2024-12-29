import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom'

const List = ({url}) => {

  

  const [list, setList] = useState([]);


  const fetchList = async () => {
      const response = await axios.get(`${url}/api/medicine/list`);
      
      if (response.data.success){
        setList(response.data.data)
      }

      else{
        toast.error("Error")
      }
  } 

  const removeMedicine = async(medicineId) => {
           const response = await axios.post(`${url}/api/medicine/remove`, {id: medicineId});
           await fetchList();
           if (response.data.success){
                  toast.success(response.data.message)
           }
           else{
             toast.error("Error");
           }
  }

 const navigate = useNavigate();

 const updateMedicine = async(medicineId) => {
  // const response = await axios.post(`${url}/api/medicine/update`, {id: medicineId});
    navigate(`/update/${medicineId}`)
 }


  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Medicines List</p>
      <div className='list-table'>
         <div className='list-table-format title'>
              <b>Image</b>
              <b>Name</b>
              <b>Category</b>
              <b>Price</b>
              <b>Action</b>

         </div>
          {list.map((item, index) =>{
               return (
                <div key={index} className='list-table-format'>
                     <img src={`${url}/images/`+item.image} alt="" />
                     <p>{item.name}</p>
                     <p>{item.category}</p>
                     <p>${item.price}</p>
                     <div className='action'>
                     <p onClick={() => removeMedicine(item._id)} className='cursor'>Remove</p>
                     <p onClick={() => updateMedicine(item._id)} className='cursor'>Update</p>
                     </div>
                </div>
               )
          })}
      </div>
    </div>
  )
}

export default List
