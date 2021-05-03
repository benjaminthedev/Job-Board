import React from 'react'
import GoogleFontLoader from 'react-google-font-loader';
import SearchField from "react-search-field";

function Logo() {

    return (
        <div>   
            <GoogleFontLoader
            fonts={[
                {
                font: 'Roboto',
                weights: [400, '400i'],
                },
                {
                font: 'Roboto Mono',
                weights: [400, 700],
                },
            ]}
            subsets={['cyrillic-ext', 'greek']}
            />
        
            <p style={{ fontFamily: 'Roboto Mono, monospaced' }}>Remote | OK</p>
            <p>work anywhere, live anywhere #OpenSalaries</p>
            



            <SearchField 
            placeholder='Search item'
            
            />


        </div>
    )
}

export default Logo
