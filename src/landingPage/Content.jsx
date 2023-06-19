import Welcome from "./contentContainer/Welcome"
import Cards from "./contentContainer/Cards"
import content from './content.css'

const Content = () => {
  return (
    <div>

<Welcome/>
<div className="cardsSpacing">
<Cards/>
<Cards/>
<Cards/>
<Cards/>
</div>



    </div>
  )
}

export default Content
