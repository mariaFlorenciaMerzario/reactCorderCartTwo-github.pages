import React from 'react'

const InputSearch = (props) => {
  return (
    <>
    <form>
        <div class="form-group">
       
        <input type="text" class="form-control" name='term' placeholder={props.placeholder}/> 
        </div>
    </form>
    </>
  )
}

export default InputSearch