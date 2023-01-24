import styles from './Form.module.css';
import { useState } from 'react';
import validation from './validation';


export default function Form (props) {
    
    const [userData, setUserData] = useState({
         username: '',
         password: '' 
        });
   /*creamos un estado local donde guardar username o password  
   Ahora conecta tu estado local con los inputs correspondientes 
   utilizando la propiedad value (abajo del return)*/

   const [errors, setErrors] = useState({
    username: '',
    password: '' 
   })
   
   
   const handleInputChange = (event) => {
    const {name,value} = event.target;
    setUserData({
        ...userData,
        [name]: value
   })
    setErrors(
        validation(({
            ...userData,
            [name]: value
        }))
     )
  console.log(errors);
   }

    return(
        <div className={styles.container}>
            <form>
                <div>
                    <label>Username:</label>
                    <input 
                    type='text' 
                    name='username'
                    value={userData.username}
                    onChange={handleInputChange}
                    />
                    <p className={styles.error} >
                    {errors.username ? errors.username : null }
                    </p>
                </div>

                <label>Password:</label>
                <input 
                type='password' 
                name='password'
                value={userData.password}
                onChange={handleInputChange}
                />
                <p className={styles.error} >
                    {errors.password ? errors.password : null }
                    </p>
                <button>LOGIN</button>
            </form>

        </div>


    )}