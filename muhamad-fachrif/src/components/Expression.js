import React, { useState } from 'react'; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Expression =  () => {

    
    const [date,setDate] = useState(new Date().getFullYear())
    var age = new Date().getFullYear() - new Date(date).getFullYear();
    const [npm, setNpm] = useState('')
    const [initialDate, setInitialDate] = useState(age)
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('')

    const handleInput = () => {
        setFirstName('')
        setMiddleName('')
        setLastName('')
        setDate('')
        setNpm(`NPM: ${npm}`)
        setInitialDate(`Age : ${initialDate}`)

        setFullName(`fullname: ${firstName} ${middleName} ${lastName}`)
    }

    return (
        <div className="container">
            <form onSubmit={handleInput}>
                <div className="mb-3">
                    <label htmlFor="exampleInputNpm" className="form-label">NPM</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="exampleInputNpm" 
                        aria-describedby="emailHelp"
                        value={npm}
                        onChange={(e) => {setNpm(e.target.value)}}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputFirstName" className="form-label">First Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputPassword1"
                        value={firstName}
                        onChange={(e) => {setFirstName( e.target.value)}} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputMiddleName" className="form-label">Middle Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        value={middleName}
                        onChange={(e) => {setMiddleName( e.target.value)}}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputLastName" className="form-label">Last Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        value={lastName}
                        onChange={(e) => {setLastName(e.target.value)}}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputBirthdate" className="form-label">Birth date</label>
                    <DatePicker 
                        className='form-control'
                        dateFormat='yyyy-MM-dd'
                    />
                </div>
                <button type="submit" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button>
            </form>

            <div className="modal" id='exampleModal' tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {npm} <br />
                        {fullName} <br />
                        {initialDate}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expression;