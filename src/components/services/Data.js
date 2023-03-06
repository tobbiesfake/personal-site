import { ServiceItem } from './ServiceItem.js';

export const servicesData = [
    {
        keyItem: 'frontend-developer',
        title: 'Frontend Developer',
        icon: 'uil uil-arrow',
        items: (<>
            <ServiceItem data={'I develop the user interface.'} />
            <ServiceItem data={'Web page development.'} />
            <ServiceItem data={'I create ux element interactions.'} />
            <ServiceItem data={'I position your company brand.'} />
            <ServiceItem data={'Design and mockups of products for companies.'} />
        </>)
    },
    {   
        keyItem: 'uiux-design',
        title: 'UI/UX Design',
        icon: 'uil uil-web-grid',
        items: (<>
            <ServiceItem data={'Web page development.'} />
            <ServiceItem data={'I create ux element interactions.'} />
            <ServiceItem data={'Design and mockups of products for companies.'} />
            <ServiceItem data={'I develop the user interface.'} />
            <ServiceItem data={'I position your company brand.'} />
        </>)
    },
    {   
        keyItem: 'backend-developer',
        title: 'Backend Developer',
        icon: 'uil uil-circuit',
        items: (<>
            <ServiceItem data={'I create ux element interactions.'} />
            <ServiceItem data={'I develop the user interface.'} />
            <ServiceItem data={'Web page development.'} />
            <ServiceItem data={'I position your company brand.'} />
            <ServiceItem data={'Design and mockups of products for companies.'} />
        </>)
    },
    {   
        keyItem: 'branding',
        title: 'Branding',
        icon: 'uil uil-edit-alt',
        items: (<>
            <ServiceItem data={'I create ux element interactions.'} />
            <ServiceItem data={'I develop the user interface.'} />
            <ServiceItem data={'Web page development.'} />
            <ServiceItem data={'I position your company brand.'} />
            <ServiceItem data={'Design and mockups of products for companies.'} />
        </>)
    },
]