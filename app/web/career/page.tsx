import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | iTechos Nepal",
  description: "Explore career opportunities at iTechos Nepal",
};

export default function CareerPage() {
  return (
    <div className="container page">
      <h1>Careers at iTechOS Nepal</h1>
      <p className="lead">
        We are always looking for people who enjoy solving technical problems
        and helping customers. Browse current openings on KaamHubs.
      </p>
      <p>
        <a href="https://kaamhubs.com" className="button">
          Join iTech
        </a>
      </p>
    </div>
  );
}
