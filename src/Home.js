import React from 'react';
import './Home.css'
import Product from './Product';
const Home = ()=>{
    return(
        <div className="home">
            <img
            className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner" />
        <div className="home__row">
        <Product 
        id={12233}
        name="JBL Speaker 300hz Best quality" 
        price={100}
        rating={4}
        image="https://www.harmanaudio.in/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw81af9967/JBL_Boombox_Black_Hero-1605x1605.jpg?sw=556&sh=680&sm=fit&sfrm=PNG"
         />
        <Product 
        id={12234}
        name="Home Daily Needs A bulky feast Offer" 
        price={200}
        rating={3}
        image="https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/all-products-20170125054108782.gif"
         />
        </div>
        <div className="home__row">
        <Product 
        id={12235}
        name="iPhone 11 2020" 
        price={599}
        rating={4}
        image="https://cdn.pocket-lint.com/r/s/1200x/assets/images/151750-phones-review-oneplus-8-pro-review-image1-pscaojoll0.jpg"
         />
                 <Product 
        id={12236}
        name="Vasline skin care" 
        price={20}
        rating={5}
        image="data:image/jpeg;base64,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"
         />
                 <Product 
        id={12237}
        name="Smart Watch Nov_29 Model" 
        price={299}
        rating={5}
        image="https://cdn.mos.cms.futurecdn.net/DxpaKaHPBL5yF8vBjh2MjX.jpg"
         />
        </div>
        <div>
        <Product 
        id={12238}
        name="Android Televison @299" 
        price={299}
        rating={5}
        image="https://cdn.mos.cms.futurecdn.net/78kzT5oZeDve55LifhMHZ3.jpg"
         />
        </div>
        </div>
    )
}

export default Home;