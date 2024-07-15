import  React, {useState} from 'react'

import './index.css'

const Welcomepage = ( {onStart}) => {
    const [name, setName] = useState('');
    

    const onSubmitting = event => {
        event.preventDefault()
        localStorage.setItem('username', name)
        onStart();
    }

    return(
        <div className='welcome-bg-container'>
            <h1 className='welcome-heading'>React Tiles</h1>
            <form className='form-holder' onSubmit={onSubmitting}>
                <p className='form-heading'>Enter Your Name</p>
                <input id='name' value={name}
                className='user-name-input'
                onChange={(e) => setName(e.target.value)}/>
                <button type='submit' className='play-btn'>Play</button>
            </form>
        </div>
        )
    
}

export default Welcomepage
