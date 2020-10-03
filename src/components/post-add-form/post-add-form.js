import React from 'react'
import './post-add-form.css'

const PostAddFrom = ({onAdd}) => {
    return (
        <div className='bottom=panel d-flex'>
            <input
            type='text'
            placeholder='Напишите что-нибудь'
            className='form-control new-post-label'
            />
        <button 
        type='submit'
        className='btn btn-outline-secondary'
        onClick={() => onAdd('Body')}>
        Добавить
        </button>
        </div>
    )
}
export default PostAddFrom;