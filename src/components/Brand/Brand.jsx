import "./brand.css";
import { atlassian, dropbox, google, shopify, slack } from "./imports";
function Brand() {
  return( 
  <div className="brand section_padding">
    <div>
        <img src={atlassian}/>
    </div>
    <div>
        <img src={dropbox}/>
    </div>
    <div>
        <img src={google}/>
    </div>
    <div>
        <img src={shopify}/>
    </div>
    <div>
        <img src={slack}/>
    </div>
  </div>
  )
}
export default Brand;
