import cards from './cards.css'

const Cards = () => {
    return (
        <div className='card'>


            <div className='card_image'>500x325</div>
            <div className='card_text'>
                <div><h3>Card Title</h3></div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

            </div>
            <div className='card_footer'>

                <div><button>Find Out More!</button></div>
            </div>


        </div>
    )
}

export default Cards
