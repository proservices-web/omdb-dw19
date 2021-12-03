import React from 'react';
import styles from './Input.module.css'
function Input(props, ref) {
    return (
        <div className={styles.container}>
           <label htmlFor={props.id}>{props.label}</label> 
           <input type={props.type} id={props.id} name={props.name} ref={ref} />
        </div>
    );
}

export default React.forwardRef(Input);