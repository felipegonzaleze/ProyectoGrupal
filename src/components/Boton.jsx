import './Boton.css'


export const Boton = ({nombre}) => {
    return (
        <>
            <button className='boton-personalizado'>
                <p>{nombre}</p>
            </button>
        </>
    )
}