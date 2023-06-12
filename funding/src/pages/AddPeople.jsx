
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from "react";
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";


const AddPeople = ({ inputs, title }) => {
  const [data, setData] = useState({})
  const navigate = useNavigate()

  const handleInput = (e) =>{
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value});
  };

  console.log(data)

  const handleAdd = async(e) =>{
    e.preventDefault();
    await addDoc(collection(db, "people"),{
      ...data,
      timeStamp: serverTimestamp()
    });
    navigate(-1)
    
  }

  return (
    <div className="new">
      <Navbar />
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            <form onSubmit={handleAdd} className="formControl">
              

              {inputs.map((input) => (
                <div className="formInput1" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} />
                </div>
              ))}
              <button type="submit" className="btnSubmit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddPeople;
