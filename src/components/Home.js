import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
  let contacts = useSelector(state => state);
  
  return (
    <>
      <div className="container">
        <div className="row">

          <div className="mt-5 text-end">
            <Link to='/add' className="btn btn-success"> + Add </Link>
          </div>
          <div className="mx-auto text-center">
            <h2> Contacts Book  </h2>
          </div>

          <div className="col-md-6 mx-auto">
            <table className="table table-hover">
              <thead className="text-white bg-dark text-center">
                <tr>
                  <th scope="col"> # </th>
                  <th scope="col"> Name </th>
                  <th scope="col"> Email </th>
                  <th scope="col"> Number </th>
                  <th scope="col"> Action </th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, id) => (
                  <tr key={id}>
                    <td> {id + 1} </td>
                    <td> {contact.name} </td>
                    <td> {contact.email} </td>
                    <td> {contact.number} </td>
                    <td className="text-center">
                      <Link to={'/edit/' + contact.id} className='btn btn-small btn-primary' > Edit </Link>
                      <button type="button" className="btn btn-small btn-danger"> Delete </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
};
