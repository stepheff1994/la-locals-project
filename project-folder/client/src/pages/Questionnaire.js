import React, { useState } from 'react';

function Questionnaire () {
    const [area, setArea] = useState('');
    const available_areas = [{'zip': ['90210', '90038'], 'area': 'Bev Hills'}, {'zip': ['91406', '90029'], 'area': 'The Valley'}, {'zip': ['90401', '90265'], 'area': 'Beach Cities'}]


    function addressEntered (zip) {
        
        let found_area = ""

        for(var i = 0; i < available_areas.length; i++) {
            let currentAreaObj = available_areas[i]
            let currentAreaObjectZips = currentAreaObj.zip
            for(var j = 0; j < currentAreaObjectZips.length; j++) {
                let currentZip = currentAreaObjectZips[j]
                console.log('current zip', currentZip)
                console.log('zip', zip)
                if (currentZip === zip ) {
                    console.log('area matched', currentAreaObj.area)
                    found_area = currentAreaObj.area
                    break;
                }
                
            }   
        }   
        setArea(found_area)
        console.log('area found is ',found_area)
      

    }
    
    return (
        <div>
            <h1>
                {area}
               <input type="text" onChange={event => { addressEntered(event.target.value)}} />
            </h1>
        </div>
    )
}



export default Questionnaire