const team = [
  "Managing Director",
  "Marketing Officer",
  "Full Stack Developer",
  "Technical Support Officer",
  "Business Development Officer",
  "Graphic Designer",
  "Web Developer Intern",
  "Accountant",
  "Technician",
  "Office Staff",
];

export default function AboutPage() {
  return (
    <div className="container page">
      <h1>Transforming Businesses Through Innovation</h1>
      <p className="lead">
        Founded with a vision to revolutionize technical support, we&apos;ve
        grown from a small team to a comprehensive solution provider. Our
        journey is marked by continuous innovation and unwavering commitment to
        client success. We believe in building lasting partnerships and
        delivering excellence in everything we do.
      </p>

      <h1>Meet our Team</h1>
      <div className="team-grid">
        {team.map((role) => (
          <div key={role} className="team-card">
            <h3>{role}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
