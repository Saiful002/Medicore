import React, { useEffect, useState } from 'react';
import sImage from '../../../images/1180_generated.jpg'
import Card from '../Service-Card/Card';

const Service = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <img src={sImage} className='img-fluid' alt="" />
            <h1 className='text-center mt-5'>Read about our services</h1>
            <div>
                <div className="row row-cols-1 row-cols-md-2 g-4 mx-3 mt-5">
                    {
                        services.map(service => <Card
                            service={service}
                            key={service.id}
                        >

                        </Card>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Service;