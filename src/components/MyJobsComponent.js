import React from 'react'
import ProfileCard from './ProfileCardComponent'

function MyJobs() {
    return (
        <div>
            <h6 className="text-center p-2">My Jobs</h6>
            {/* map profilecaard or schedulecard for stored jobs */}
            <ProfileCard />
        </div>
    )
}

export default MyJobs
