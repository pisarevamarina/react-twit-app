import React from 'react'
import './post-add-form.css'

const PostAddFrom = () => {
    return (
        <form className='bottom=panel d-flex'>
            <input
            type='text'
            placeholder='Напишите что-нибудь'
            className='form-control new-post-label'
            />
        <button 
        type='submit'
        className='btn btn-outline-secondary'>
        Добавить
        </button>
        </form>
    )
}
export default PostAddFrom;