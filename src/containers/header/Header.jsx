import './header.css'
import ai from'./../../assets/ai.png'
import people from'./../../assets/people.png'
function Header(){
    return(
        <div>
            <div className="header section_padding">
                <div className="content">
                    <h1 className='gradient-text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <div className="form">
                        <input type="text" placeholder='Your Email Address'/>
                        <button>Get Started</button>
                    </div>
                    <div className="people">
                        <img src={people} />
                        <p>1,600 people requested access a visit in last 24 hours</p>
                    </div>
                </div>
                <div className="image">
                    <img src={ai} />
                </div>
            </div>
        </div>
    )
}
export default Header;