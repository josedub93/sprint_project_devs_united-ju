import React from 'react';
import PropTypes from 'prop-types';



function ColorPicker({color, handleColor}) {  
   
  
 const ColorStyle = color.choose ? "color-square-border" : undefined;
    
             return (
                 <li
                     className= {`color-square ${ColorStyle} `}
                     id= {color.hex}
                     onClick = {(e) => handleColor(e, color)}
                     style= {{backgroundColor: color.hex}}
                                          
                 />
             );
        
     }

     export default ColorPicker;


     ColorPicker.propTypes = {
         color: PropTypes.shape({
            name: PropTypes.string,
            choose: PropTypes.bool.isRequired,
            hex: PropTypes.string.isRequired
          })
         
     };
