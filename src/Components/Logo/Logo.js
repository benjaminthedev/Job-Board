import React from 'react'
import GoogleFontLoader from 'react-google-font-loader';
import SearchField from "react-search-field";
import './Logo.css';

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
                weights: [700],
                },
            ]}
            subsets={['cyrillic-ext', 'greek']}
            />
        
            <p style={{ fontFamily: 'Roboto Mono, monospaced' }}>Remote | OK</p>
            <p>work anywhere, live anywhere #OpenSalaries</p>
            

            <div className='search__form'>
                <SearchField 
                    placeholder='Search item'
                />
            </div>

        </div>
    )
}

export default Logo
