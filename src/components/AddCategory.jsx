import { useState } from 'react'

export const AddCategory = ({ OnNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const OnInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 0) {
            //setCategories([])
           // OnNewCategory(cats => [...cats, inputValue])
            OnNewCategory(inputValue.trim())
            setInputValue('')
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="buscar gifs"
                value={inputValue}
                onChange={OnInputChange}
            />
        </form>

    )
}
