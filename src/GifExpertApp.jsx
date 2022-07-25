import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

const GifExpertApp = ({ texto }) => {

    const [categories, setCategories] = useState([texto])

    const onAddCategory = (e) => {
        if (!categories.includes(e)) {
            setCategories([e, ...categories])
        }
    }

    const deletec = ({ index }) => {

        if (categories.length <= 1) {
            setCategories([])
        } else {
            setCategories([categories.splice(index, 1)])
            setCategories([...categories])
        }

    }

    return (
        <>
            <h1>GifExpertApp {texto}</h1>
            <AddCategory OnNewCategory={onAddCategory} />

            {categories.map((value, index) =>
            (
                <div key={value}>
                    <br />
                    <button onClick={() => deletec({ index })}>-</button>
                    <GifGrid key={value} category={value}></GifGrid>
                </div>

            )
            )}
        </>
    )
}

export default GifExpertApp
