import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState ({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //register logic to send to api
        // fetch('https://fakestoreapi.com/users',{
        //     method:"POST",
        //     body:JSON.stringify(
        //         {
        //             email:'John@gmail.com',
        //             username:'johnd',
        //             password:'m38rmF$',
        //             name:{
        //                 firstname:'John',
        //                 lastname:'Doe'
        //             },
        //             address:{
        //                 city:'kilcoole',
        //                 street:'7835 new road',
        //                 number:3,
        //                 zipcode:'12926-3874',
        //                 geolocation:{
        //                     lat:'-37.3159',
        //                     long:'81.1496'
        //                 }
        //             },
        //             phone:'1-570-236-7033'
        //         }
        //     )
        // })
        //     .then(res=>res.json())
        //     .then(json=>console.log(json))
        // console.log('Form submitted', formData)
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={{handleSubmit}}></form>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input className="firstname"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input className="lastname"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input className="email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input className="password"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
              </div>
              <button type="submit">Register</button>
        </div>

    )
}



export default Register