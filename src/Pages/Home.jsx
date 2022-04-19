import React from "react";

function Home (){




return (
<div className="App">
<h2>hola</h2>
                           
            
          
             <form className='formulario'>
                <textarea
                     name="tweet"
                     
                     cols="30"
                     rows="5"
                     placeholder="escribe un tweet..."
                 />
                 <div className='input-group'>

                     <button>Enviar tweet</button>
                 </div>
             </form>
            <h1>Tweets:</h1>
         
         </div>
)
};

export default Home;