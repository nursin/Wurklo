import React from 'react'
import ProfileCard from './ProfileCardComponent'

function MyProjects() {
    return (
        <div>
            <h6 className="text-center p-2">My Projects</h6>
            {/* map profilecaard or schedulecard for stored projects */}
            <ProfileCard />
        </div>
    )
}

export default MyProjects
