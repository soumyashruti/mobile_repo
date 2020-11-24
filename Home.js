import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom' 

export default function Home() {
    return (
        <div>
             <nav class="navbar navbar-light bg-primary" style={{}}>
                <span class="navbar-brand mb-0 h1"> Soumya Mobile World</span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="login">Login<span class="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </nav>
            <h1 id="home">Welcome to My Mobile Stores</h1>
            {/* <p id="hpara">Mobile has become a very basic need for people all over the world. Everyone uses a smartphone, even small kids are obsessed with it.
                 Mobile has become an entertainment medium more than its basic use which is to connect with others. Interest in mobile phones and the number of mobile phone brands entering the Indian market has steadily risen over the last decade. 
                 With new players like JIO entering the market and releasing cheap data plans.</p> */}
           <div className="card" style={{width: "23rem"}}>
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144838" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"black"}} class="card-text"><b>Apple</b><br/>website: WWW.apple.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="https://static.digit.in/default/583eeb3b610ca5ab2d34ff167caae41ad695cc27.jpeg?tr=n-product_detail_leader_thumb" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"black"}} class="card-text"><b>Samsung</b><br/>website: WWW.samsumg.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="https://image01.realme.net/general/20200828/1598597610235.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"black"}} class="card-text"><b>Realme</b><br/>website: WWW.realme.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="https://images-na.ssl-images-amazon.com/images/I/61-FZzBlpsL._AC_SL1000_.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"black"}} class="card-text"><b>One+</b><br/>website: WWW.oneplus.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="https://images-na.ssl-images-amazon.com/images/I/514ETCdN3CL._SL1200_.jpg" class="card-img-top" alt="..."/>
                <div class="card-body" >
                <p style={{color:"black"}} class="card-text"><b>Vivo</b><br/>website: WWW.vivo.com </p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="https://static.digit.in/default/deb2162982e36fc9d2f43943d9292f538f73ecac.png?tr=n-product_detail_leader_thumb" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"black"}} class="card-text"><b>Oppo</b> <br/> website: WWW.oppo.com</p>
            </div>
            </div>
        </div>
    )
}
