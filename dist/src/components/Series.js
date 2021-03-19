import ShowCard from './ShowCard'


const Series = props => {



    const renderSeries = () => {
        let renderedSieres = props.series.map((serie, index) => {
            return <ShowCard key={index} show={serie} />
        })
        return renderedSieres
    }

    return(
        <div>
            {renderSeries()}
        </div>
    )

}

export default Series