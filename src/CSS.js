import React from 'react';
import './style/stylesheet.css';
import styles from './module/style.module.css';

function CSS() {
    // const myStyle={
    //     color: 'purple',
    //     fontSize: '20px',
    //     fontFamily: 'Arial',
    // }
    // const band={
    //     borderWidth: '2px',
    //     borderRadius: 20,
    //     backgroundColor: 'yellow',
    // }
    // const car={
    //     borderWidth: '1px',
    //     borderRadius: 10,
    //     backgroundColor: 'cyan',
    //     height: 50,
    //     width: 300,
    // }
    
    return(
       <div className={styles.bigred}>
        <h1 className={styles.div}>User Profile</h1>
       </div>
        // <form>
        //  <div><h1 style={{color: 'blue',fontSize: 30}}>welcome to the new CSS section</h1></div>
        //  <div style={car}>
        //  <label style={myStyle}>Enter your Name</label><br/>
        //  <input style={band} type='text' /><br/></div>
        // </form>
        
    );
}
export default CSS;
