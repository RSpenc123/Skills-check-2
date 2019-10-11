import React, {Component} from 'react'


function header(props){ 
    return(
        <div>
           {[props.item].name}
        </div>
    )
}

export default header;