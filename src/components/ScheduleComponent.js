// dependencies
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

// styles
import '../Styles/ScheduleStyles.css';

// components
import ScheduleCard from './ScheduleCardComponent';

function Schedule() {
    return (
        <div className="schedule bg-white px-1 mx-1 rounded pt-2">
            <ScheduleCard
                image='https://source.unsplash.com/random/850'
                title='Clean trash from yard'
                time='8:00 AM'
                price={45}
            />
            <ScheduleCard
                image='https://source.unsplash.com/random/750'
                title='Mow my lawn'
                time='10:00 AM'
                price={95}
            />
            <ScheduleCard
                image='https://source.unsplash.com/random/650'
                title='Help me move'
                time='12:00 PM'
                price={65}
            />
            <ScheduleCard
                image='https://source.unsplash.com/random/550'
                title='Cut my grass'
                time='1:30 PM'
                price={245}
            />
            <ScheduleCard
                image='https://source.unsplash.com/random/450'
                title='Wash my dishes'
                time='4:00 PM'
                price={75}
            />
                        <ScheduleCard
                image='https://source.unsplash.com/random/850'
                title='Clean trash from yard'
                time='8:00 AM'
                price={45}
            />
            <ScheduleCard
                image='https://source.unsplash.com/random/750'
                title='Mow my lawn'
                time='10:00 AM'
                price={95}
            />
            <ScheduleCard
                image='https://source.unsplash.com/random/650'
                title='Help me move'
                time='12:00 PM'
                price={65}
            />
            <ScheduleCard
                image='https://source.unsplash.com/random/550'
                title='Cut my grass'
                time='1:30 PM'
                price={245}
            />
            <ScheduleCard
                image='https://source.unsplash.com/random/450'
                title='Wash my dishes'
                time='4:00 PM'
                price={75}
            />
                        <ScheduleCard
                image='https://source.unsplash.com/random/850'
                title='Clean trash from yard'
                time='8:00 AM'
                price={45}
            />
            <ScheduleCard
                image='https://source.unsplash.com/random/750'
                title='Mow my lawn'
                time='10:00 AM'
                price={95}
            />
            <ScheduleCard
                image='https://source.unsplash.com/random/650'
                title='Help me move'
                time='12:00 PM'
                price={65}
            />
            <ScheduleCard
                image='https://source.unsplash.com/random/550'
                title='Cut my grass'
                time='1:30 PM'
                price={245}
            />
            <ScheduleCard
                image='https://source.unsplash.com/random/450'
                title='Wash my dishes'
                time='4:00 PM'
                price={75}
            />
        </div>
    )
}

export default Schedule
