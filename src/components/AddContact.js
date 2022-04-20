import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";

export const AddContact = () => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const contacts = useSelector(state => state.contactReducer); console.log(contacts);
  const dispatch = useDispatch();
  // Validations //
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!email || !name || !number) {
      return toast.warning("Please complete all the fields.");
    };
       //  ERROR   //
  
    
    // NewContact+Id //
    const data = {
      id: contacts[contacts.length - 1].id + 1, //making the id
      name,
      email,
      number,
    };
    // Dispatch+Action //
    dispatch({ type: 'ADD_CONTACT', payload: data });
    toast.success('Contact added.');
    console.log('new: ', data); console.log(contacts);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">

          <div className="display-3 text-center">
            <h1> New Contact  </h1>
          </div>

          <div className="col-md-6 shadow mx-auto p-5 mt-2">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <input type='text' value={name} onChange={evt => setName(evt.target.value)} placeholder="Name" className="form-control"></input>
              </div>
              <div className="form-group mb-2">
                <input type='email' value={email} onChange={evt => setEmail(evt.target.value)} placeholder="Email" className="form-control"></input>
              </div>
              <div className="form-group mb-2">
                <input type='number' value={number} onChange={evt => setNumber(evt.target.value)} placeholder="number number" className="form-control"></input>
              </div>
              <div className="form-group text-center">
                <input type='submit' value='Done' className="btn btn-block btn-success w-100"></input>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};
