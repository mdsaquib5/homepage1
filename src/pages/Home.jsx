import Services from '../components/Services';
import MenuHighlights from '../components/MenuHighlights';
import Testimonials from '../components/Testimonials';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <MenuHighlights />
            <Testimonials />
            <ContactForm />
        </>
    )
}

export default Home;