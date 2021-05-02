import React from 'react'
import axios from 'axios';


function Jobs() {




axios.get('https://remoteok.io/api')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });



    return (
        <div>
            <h1>The Jobs</h1>
        </div>
    )
}

export default Jobs
