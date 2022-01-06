// dependencies
import React from 'react';

// styles
import '../Styles/ScheduleStyles.css';

// components
import ScheduleCard from './ScheduleCardComponent';

//images for testing
import profilePic__test1 from '../shared/wurklo_profile_pic.jpg';
import profilePic__test2 from '../shared/michael_profile_pic.jpg';
import profilePic__test3 from '../shared/barbara_profile_pic.jpeg';
import profilePic__test4 from '../shared/michael2_profile_pic.jpg';
import profilePic__test5 from '../shared/wurklo2_profile_pic.jpeg';
import profilePic__test6 from '../shared/nikki_profile_pic.jpg';


function Schedule() {
    return (
        <div className="schedule bg-white px-1 mx-1 rounded pt-2">
            <ScheduleCard
                image={profilePic__test1}
                title='Clean trash from yard'
                time='8:00 AM'
                price={45}
            />
            <ScheduleCard
                image={profilePic__test2}
                title='Mow my lawn'
                time='10:00 AM'
                price={95}
            />
            <ScheduleCard
                image={profilePic__test3}
                title='Help me move'
                time='12:00 PM'
                price={65}
            />
            <ScheduleCard
                image={profilePic__test4}
                title='Cut my grass'
                time='1:30 PM'
                price={245}
            />
            <ScheduleCard
                image={profilePic__test5}
                title='Wash my dishes'
                time='4:00 PM'
                price={75}
            />
            <ScheduleCard
                image={profilePic__test6}
                title='Clean trash from yard'
                time='8:00 AM'
                price={45}
            />
            <ScheduleCard
                image={profilePic__test2}
                title='Mow my lawn'
                time='10:00 AM'
                price={95}
            />
            <ScheduleCard
                image={profilePic__test1}
                title='Help me move'
                time='12:00 PM'
                price={65}
            />
            <ScheduleCard
                image={profilePic__test4}
                title='Cut my grass'
                time='1:30 PM'
                price={245}
            />
            <ScheduleCard
                image={profilePic__test5}
                title='Wash my dishes'
                time='4:00 PM'
                price={75}
            />
            <ScheduleCard
                image={profilePic__test2}
                title='Clean trash from yard'
                time='8:00 AM'
                price={45}
            />
            <ScheduleCard
                image={profilePic__test4}
                title='Mow my lawn'
                time='10:00 AM'
                price={95}
            />
            <ScheduleCard
                image={profilePic__test3}
                title='Help me move'
                time='12:00 PM'
                price={65}
            />
            <ScheduleCard
                image={profilePic__test5}
                title='Cut my grass'
                time='1:30 PM'
                price={245}
            />
            <ScheduleCard
                image={profilePic__test1}
                title='Wash my dishes'
                time='4:00 PM'
                price={75}
            />
        </div>
    )
}

export default Schedule
