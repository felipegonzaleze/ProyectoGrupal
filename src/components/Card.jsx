import './Card.css'

export const Card = ({urlImagen, alt, texto }) => {
    return (
        <div className="card">
            <div className="card-imagen">
                <img
                src={urlImagen}
                alt={alt}
                />
            </div>
            <div className='card-texto'>
                <p>{texto}</p>
            </div>
        </div>
    )
}