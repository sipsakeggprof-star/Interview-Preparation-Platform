import React, {useState, useEffect} from 'react';


export function AddingUsers(){


    const [userName, setUserName] = useState([]);
    const [userSurname, setUserSurname] = useState([]);
    const [userEmail, setUserEmail] = useState([]);
    const [userPhoneNumber, setUserPhoneNumber] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {

        try{
            const trimmedUserName = userName.trim();
            const trimmedUserSurname = userSurname.trim();
            const trimmedUserEmail = userEmail.trim();
            const trimmedUserPhoneNumber = userPhoneNumber.trim();

            if(!trimmedUserName || !trimmedUserSurname || !trimmedUserEmail || !trimmedUserPhoneNumber){
                alert("Please fill in all fields.");
                return;
            }

            const generateRandomDigits = () =>{
                return Math.floor(100+ Math.random() * 900);
            };

            const namePart = trimmedUserName.slice(0,3).toUpperCase();
            const surnamePart = trimmedUserSurname.slice(0,3).toUpperCase();

            const newUser = {

                id:`${namePart}-${surnamePart}-${generateRandomDigits()}`,
                name: trimmedUserName,
                surname: trimmedUserSurname,
                email: trimmedUserEmail,
                phoneNumber: trimmedUserPhoneNumber
            }
            console.log("Form Submitted");
            setError(null);

            onManageUsers(newUser);
            console.log("New User Added:", newUser);

            setUserName('');
            setUserSurname('');
            setUserEmail('');
            setUserPhoneNumber('');

        }
        catch(error){
            setError(error.message);
            console.error("Error adding user:", error);
        }
    };

    return(
        <>
          <input 
          type="text" 
          placeholder="Search users..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          style ={{
            padding: '8px',
            marginBottom: '10px',
            width: '100%',
            boxSizing: 'border-box'
          }} />
          
          <form onSubmit={handleSubmit} className="add-user-form">

            <label htmlFor="userName">Name:</label>
            <input 
            type="text" 
            id="userName" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} placeholder="Enter name" required />
            
            <label htmlFor="userSurname">Surname:</label>
            <input 
            type="text" 
            id="userSurname" 
            value={userSurname} 
            onChange={(e) => setUserSurname(e.target.value)} placeholder="Enter surname" required />
            <br/>
            <label htmlFor="userEmail">Email:</label>
            <input 
            type="email" 
            id="userEmail" 
            value={userEmail} 
            onChange={(e) => setUserEmail(e.target.value)} placeholder="Enter email" required />

            <label htmlFor="userPhoneNumber">Phone Number:</label>
            <input 
            type="tel" 
            id="userPhoneNumber" 
            value={userPhoneNumber} 
            onChange={(e) => setUserPhoneNumber(e.target.value)} placeholder="Enter phone number" required />
            <br/>
            <br/>
            <button type="submit">Add User</button>
           

          </form>

           {error && <p style={{ color: 'red' }}>{error}</p>}
        
        </>
    )

}