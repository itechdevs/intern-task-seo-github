import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container page">
      <h1>Contact Us</h1>

      <div className="three-col contact-cards">
        <div>
          <h3>Call Us</h3>
          <p>
            <a href="tel:+97714334802">+977-01-4334802</a>
            <br />
            <a href="tel:+97714334319">+977-01-4334319</a>
            <br />
            Mon-Fri, 9:30AM - 5PM
          </p>
        </div>
        <div>
          <h3>Email Us</h3>
          <p>
            <a href="mailto:info@itechosnepal.com">info@itechosnepal.com</a>
            <br />
            Quick response guaranteed. We reply within 24 hours.
          </p>
        </div>
        <div>
          <h3>Visit Us</h3>
          <p>
            <a href="https://maps.google.com/?q=Kumari+club,+Balkhu,Kathmandu">
              Kumari Club, Balkhu
              <br />
              Kathmandu, Nepal 44600
            </a>
          </p>
        </div>
      </div>

      <h2>Send us a Message</h2>
      <p>Fill out the form and we&apos;ll get back to you within 24 hours.</p>
      <ContactForm />

      <h3>Our Location</h3>
      <iframe
        className="map"
        src="https://maps.google.com/maps?q=Kumari%20Club%20Balkhu%20Kathmandu&z=15&output=embed"
        loading="lazy"
        title="Map of the iTechOS Nepal office in Balkhu, Kathmandu"
      />

      <h3>Office Hours</h3>
      <p>
        Sunday - Friday: 10:00 AM - 6:00 PM
        <br />
        Saturday: Closed
      </p>
    </div>
  );
}
