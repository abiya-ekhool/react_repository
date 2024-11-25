import { useEffect, useState } from "react";
import { UseAllGetUsers, UseCreateUser, UseDeleteUser } from "../../api";

const UserCreation = () =>{

    const [firstName, setFirstName]     = useState('');
    const [lastName, setLastName]       = useState('');
    const [email, setEmail]             = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [state, setState]             = useState('');
    const [city, setCity]               = useState('');
    const [pincode, setPincode]         = useState('');
    const [userDetails, setUserDetails] = useState([]);
    const [editDetails, setEditDetails] = useState([]);

    var __userID        = "";

    const emptyData = () =>
    {
        getAllUsers();
        setFirstName(''); 
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setState('');
        setCity('');
        setPincode('');
    }

    const editSingleUser = async(item) =>
    {        
        setEditDetails(item)
        setFirstName(item?.us_first_name); 
        setLastName(item?.us_last_name);
        setEmail(item?.us_email);
        setPhoneNumber(item?.us_phone);
        setState(item?.us_state);
        setCity(item?.us_city);
        setPincode(item?.us_pincode);     
    }

    const submitDetails = async(id) =>
    {
        if(editDetails != "")
        {
            id = editDetails?.us_id
        }       

        const data = {
            us_first_name : firstName,
            us_last_name  : lastName,
            us_email      : email,
            us_phone      : phoneNumber,
            us_state      : state,
            us_city       : city,
            us_pincode    : pincode,
            us_id         : id
        };       

        const createUser =  await UseCreateUser(data);

        if(!createUser?.error)
        {
            emptyData();
            closeModal('userModal');
        }
    }

    const getAllUsers = async() =>{
        const userData = await UseAllGetUsers();
        if(Array.isArray(userData?.data) && userData?.data?.length > 0)
        {
            setUserDetails(userData?.data);
        }   
    }

    const deleteSingleUser = (userId) => {
        __userID = userId
    }

    const deleteUserDetails = async() => {
        const param = 
        {
            'us_id': __userID
        }

        const deleteUser = await UseDeleteUser(param)

        if(!deleteUser?.error)
        {
            getAllUsers();
            closeModal('deleteUserModal');
        }        
    }

    const closeModal = (id) => {
        const closeButton = document.querySelector(`#${id} .btn-close`);
        if (closeButton) closeButton.click();
    };
    
    useEffect(() =>{
        getAllUsers()
    },[] )

    return(
        <>
            <div class="px-3">
                <div class="mt-3 mb-3">
                    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#userModal">Create user</button>
                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Sl.No</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone number</th>
                            <th scope="col">State</th>
                            <th scope="col">City</th>
                            <th scope="col">Pincode</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(userDetails) && 
                                userDetails.map((item, index) => {
                                    
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item?.us_first_name}</td>
                                            <td>{item?.us_last_name}</td>
                                            <td>{item?.us_email}</td>
                                            <td>{item?.us_phone}</td>
                                            <td>{item?.us_state}</td>
                                            <td>{item?.us_city}</td>
                                            <td>{item?.us_pincode}</td>
                                            <td>
                                                <div class="d-flex gap-2">
                                                    <button type="button" class="btn btn-outline-success" onClick={() => editSingleUser(item)} data-bs-toggle="modal" data-bs-target="#userModal"><i class="bi bi-pen"></i></button>
                                                    <button type="button" class="btn btn-outline-danger" onClick={() => deleteSingleUser(item.us_id)} data-bs-toggle="modal" data-bs-target="#deleteUserModal"><i class="bi bi-trash"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>

                <div class="modal fade" id="userModal" aria-labelledby="userModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">User details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="firstname_input" class="form-label">First name</label>
                                    <input type="text" class="form-control" id="firstname_input" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                </div>
                                <div class="mb-3">
                                    <label for="lastname_input" class="form-label">Last name</label>
                                    <input type="text" class="form-control" id="lastname_input" placeholder="Last name" value={lastName}  onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                                <div class="mb-3">
                                    <label for="email_input" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email_input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div class="mb-3">
                                    <label for="number_input" class="form-label">Phone number</label>
                                    <input type="text" class="form-control" id="number_input" placeholder="Phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                                </div>
                                <div class="mb-3">
                                    <label for="state_input" class="form-label">State</label>
                                    <input type="text" class="form-control" id="state_input" placeholder="State" value={state} onChange={(e) => setState(e.target.value)}/>
                                </div>
                                <div class="mb-3">
                                    <label for="city_input" class="form-label">City</label>
                                    <input type="text" class="form-control" id="city_input" placeholder="City" value={city}  onChange={(e) => setCity(e.target.value)}/>
                                </div>
                                <div class="mb-3">
                                    <label for="pincode_input" class="form-label">Pincode</label>
                                    <input type="text" class="form-control" id="pincode_input" placeholder="Pincode" value={pincode}  onChange={(e) => setPincode(e.target.value)}/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={() => {submitDetails(0)}}>Submit</button>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="deleteUserModal" aria-labelledby="deleteUserModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Delete user details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <h3>Are you sure!</h3>
                                <p>Do you want to delete the user!</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" class="btn btn-primary" onClick={deleteUserDetails}>Delete</button>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default UserCreation;