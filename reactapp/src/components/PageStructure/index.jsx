import React from 'react'
import Header from '../Header'
import Footer from '../Footer'


export default function PageStructure(props){
    return(
        <div className="pageStructure">
            <Header/>
                {props.children}
            <Footer/>
        </div>
    )
}