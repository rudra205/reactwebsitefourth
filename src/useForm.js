import { useState, useEffect } from "react";

const useForm =(callback, validate ) => {
    const [values, setvalue] = useState({
        username:'',
        email:'',
        pasword:'',
        pasword2:''

    });
     const [errors, setErrors] = useState({});
     const [isSubmitting,setIsSubmitting] = useState(false);

     const handleChange = e => {
         setvalue({...values, [e.target.name] : e.target.value })
     }
     const handleSubmit = e =>{
         e.preventDefault();
         setErrors(validate(values));
         setIsSubmitting(true);
        };

        useEffect(() => {
            if(Object.keys(errors).length === 0 && isSubmitting){
                callback();
            }
            
        },)
     return { handleChange , values , handleSubmit , errors};
};

export default useForm;


