import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GifGrid = ({ category }) => {

    const { data: images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h1>{category}</h1>
            {isLoading && (<h2>cargango</h2>)}
            <div className="card-grid">
                {images.map((image) =>
                (
                    <GifGridItem key={image.id} {...image}></GifGridItem>
                )
                )}
            </div>
        </>
    )
}