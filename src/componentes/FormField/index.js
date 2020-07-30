import React from 'react';

function FormField({ label, type, name,  value, onChange }, props){
    return (
        <div>
            <label>
            {label}:
            {/* <input 
                type={type}
                value={value}
                name={name}
                onChange={onChange}
            /> */}
            </label>
{/* 
            <input 
            type={type}
            value={value}
            name={name}
            onChange={onChange} /> */}
            
            {type === 'textarea' ?
            (
                <textarea 
                type={type}
                value={value}
                name={name}
                onChange={onChange}
           />

           ) : (
                <input 
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                />
           )
            
            }

{/*                  
            {type === 'textarea' &&
            <textarea {...props}/>
            } */}
        </div>
    )
}

// function FormText({ label, type, name,  value, onChange }){
//     return (
//         <div>
//             <label>
//             {label}:
//             <textarea 
//                 type={type}
//                 value={value}
//                 name={name}
//                 onChange={onChange}
//             />
//             </label>
//         </div>
//     )  
// }

export  default FormField;