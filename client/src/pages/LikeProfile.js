import React from 'react'


function LikeProfile({ match }) {
    console.log(match)
    return (
        <div className="align-content-center">
            <div className="card text-dark overflow-auto">
                <div className='text-danger border-bottom border-grey'>
                    <h2>{match.firstName} {match.lastName}</h2>
                </div>
                <div className='text-grey border-bottom border-grey py-2'>Images Here</div>
                <div className='border-bottom border-grey py-3'>
                    <div style={{ fontSize: '20px' }}>
                        <b>Location:</b> {match.area}
                    </div>
                    <div style={{ fontSize: '20px' }}>
                        <b>Age:</b> {match.age}
                    </div>
                </div>
                <div className='py-3'>
                    <div className='py2'>
                        <i style={{ fontSize: "15px" }}>Why did you join LA LOCALS?</i>
                        <p style={{ fontSize: "18px" }}>{match.question1}</p>
                    </div>
                    <div className='py2'>
                        <i style={{ fontSize: "15px" }}>Your Uncle has just posted something offensive on Facebook your next move is to:</i>
                        <p style={{ fontSize: "18px" }}>{match.question2}</p>
                    </div>
                    <div className='py2'>
                        <i style={{ fontSize: "15px" }}>Instead of asking how old you are select which social media app you prefer?</i>
                        <p style={{ fontSize: "18px" }}>{match.question3}</p>
                    </div>
                    <div className='py2'>
                        <i style={{ fontSize: "15px" }}>It is post pandemic in Los Angeles what is the first thing you do?</i>
                        <p style={{ fontSize: "18px" }}>{match.question4}</p>
                    </div>
                    <div className='py2'>
                        <i style={{ fontSize: "15px" }}>Lastly what’s your favorite delivery app? </i>
                        <p style={{ fontSize: "18px" }}>{match.question5}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LikeProfile
