import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Event Planing */}
        <article className="services">
          <div className="service__head">
            <h3>Event Planning</h3>
          </div>

          <ul className="service__list">
            <li>
              <div>
                <BiCheck className="service__list-icon" />
                <p>Strategic Planning</p>
              </div>
              <p>
                Proficient in meticulously crafting event blueprints,
                considering every detail from logistics to ambiance, to ensure
                seamless and memorable experiences.
              </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
                <p>Creative Conceptualization</p>
              </div>
              <p>
                Skilled in brainstorming and conceptualizing innovative event
                themes, decorations, and experiences that align with clients'
                visions and objectives.
              </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
                <p>Vendor Coordination</p>
              </div>
              <p>
                Experienced in liaising with diverse vendors, negotiating
                contracts, and managing relationships to secure top-tier
                services within budget and timeline constraints.
              </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
                <p>Guest Experience Enhancement</p>
              </div>
              <p>
                Dedicated to enhancing guest satisfaction by curating engaging
                programs, entertainment, and catering that resonate with
                attendees and leave a lasting positive impression.
              </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
                <p>Crisis Management</p>
              </div>
              <p>
                Equipped to handle unexpected challenges with a level-headed
                approach, adapting to changing circumstances swiftly while
                maintaining a high standard of event quality and attendee
                satisfaction.
              </p>
            </li>
          </ul>
        </article>

        {/* Front-Desk Operations */}
        <article className="services">
          <div className="service__head">
            <h3>Front-Desk Operations</h3>
          </div>

          <ul className="service__list">
            <li>
              <div>
                <BiCheck className="service__list-icon" />
                <p>Exceptional Guest Relations</p>
              </div>
              <p>
                Proficient in creating a warm and welcoming environment at the
                front desk, ensuring every guest feels valued and attended to
                from arrival to departure.
              </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
                <p>Efficient Check-in/Check-out</p>
              </div>
              <p>
                Skilled in streamlining check-in and check-out processes,
                minimizing wait times, and optimizing guest flow while
                maintaining accuracy in handling reservations and payments.
              </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
                <p>Effective Communication</p>
              </div>
              <p>
                Experienced in handling inquiries, providing information about
                hotel amenities, local attractions, and addressing guest
                concerns promptly and professionally.
              </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
                <p>Conflict Resolution</p>
              </div>
              <p>
                Adept at managing guest complaints and conflicts with diplomacy
                and empathy, ensuring swift resolution and turning potentially
                negative experiences into positive ones.
              </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
                <p>Multitasking and Organization</p>
              </div>
              <p>
                Capable of managing a range of tasks simultaneously, from
                answering phone calls and managing reservations to assisting
                other departments, all while maintaining a well-organized front
                desk area.
              </p>
            </li>
          </ul>
        </article>

        {/* Customer Satisfaction */}
        <article className="services">
          <div className="service__head">
            <h3>Customer Satisfaction</h3>
          </div>

          <ul className="service__list">
            <li>
              <div>
                <BiCheck className="service__list-icon" />
                <p>Personalized Service</p>
              </div>
              <p>
                Dedicated to providing tailored experiences by anticipating
                guest needs and preferences, ensuring each visitor feels valued
                and attended to on an individual level.
              </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
                <p>Attentive Problem Solving</p>
              </div>
              <p>
                Committed to promptly addressing guest concerns and issues with
                a proactive and empathetic approach, ensuring their comfort and
                satisfaction throughout their stay.
              </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
                <p>Exceeding Expectations</p>
              </div>
              <p>
                Striving to go above and beyond in every interaction, whether
                it's arranging surprise amenities, remembering guest
                preferences, or offering unexpected gestures that create lasting
                positive memories.
              </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
                <p>Continuous Engagement</p>
              </div>
              <p>
                Actively engaging with guests throughout their stay, seeking
                feedback, and making adjustments based on their input to enhance
                their experience and improve overall service quality.
              </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
                <p>Feedback Integration:</p>
              </div>
              <p>
                Skillful in gathering guest feedback and insights, using this
                information to identify trends, implement improvements, and
                contribute to a culture of continuous enhancement in service
                delivery.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
