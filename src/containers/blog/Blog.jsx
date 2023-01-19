import { Article } from '../../components';
import './blog.css'
import { blog1 ,blog2,blog3,blog4,blog5 } from './imports';
function Blog(){
    return(
        <div className='blog section_margin'>
            <h1 className='gradient-text'>A lot is happening, We are blogging about it.</h1>
            <div className="boxes">
                <div className="boxA">
                    <Article img={blog1} history="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" read="Read Full Article"/>
                </div>
                <div className="boxB">
                <Article img={blog2} history="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" read="Read Full Article"/>
                <Article img={blog3} history="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" read="Read Full Article"/>
                <Article img={blog4} history="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" read="Read Full Article"/>
                <Article img={blog5} history="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" read="Read Full Article"/>
                    
                </div>
            </div>
        </div>
    )
}
export default Blog;