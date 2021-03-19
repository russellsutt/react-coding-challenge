

const ShowCard = (props) => {

    const show = props.show
    return(
        <div className='placeholder-show-card'>
            <h1>{show.title}</h1>
        </div>

    )
}

export default ShowCard