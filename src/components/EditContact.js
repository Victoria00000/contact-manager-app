import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const EditContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactReducer);

  const currentContact = contacts.find(contact => contact.id === parseInt(id));
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // NewContact+Id //
    const data = {
      id: parseInt(id), //same id
      name,
      email,
      number,
    };
    // Dispatch+Action //
    dispatch({ type: 'UPDATE_CONTACT', payload: data });
    toast.success('Contact edited.');
    console.log('new: ', data); console.log(contacts);
  };

  return (
    <>
      <div className="container mt-5">
        {currentContact ? (
          <div className="row">

            <div className="display-3 text-center">
              <h1> Edit Contact  </h1>
            </div>

            <div className="col-md-6 shadow mx-auto p-5 mt-2">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                  <input type='text' placeholder="Name" className="form-control" value={name} onChange={evt => setName(evt.target.value)} ></input>
                </div>
                <div className="form-group mb-2">
                  <input type='email' placeholder="Email" className="form-control" value={email} onChange={evt => setEmail(evt.target.value)} ></input>
                </div>
                <div className="form-group mb-2">
                  <input type='number' placeholder="Phone number" className="form-control" value={number} onChange={evt => setNumber(evt.target.value)} ></input>
                </div>
                <div className="form-group text-center">
                  <input type='submit' value='Edit' className="btn btn-success w-25"></input>
                  <Link to='/' className="btn btn-danger w-25 m-2"> Cancel </Link>
                </div>
              </form>
            </div>

          </div>
        ) : <h1> This contact: {id} does not exists </h1>}

      </div>
    </>
  );
};
