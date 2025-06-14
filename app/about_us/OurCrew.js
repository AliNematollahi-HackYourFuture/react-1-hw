import style from './page.module.css'

const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <section>
      <div>
        <p>
          Our crew is the heart and soul of Galactica. We are a diverse team of
          seasoned space explorers, engineers, and visionaries who are united by
          a common goal: to make space travel accessible and exciting for all.
        </p>
        <p>
          Captain Sarah Vega: A former NASA astronaut with over 15 years of
          experience, Captain Vega leads our missions with unparalleled
          expertise and a passion for space exploration.
        </p>
        <p>
          Dr. Leo Redding: Our chief astrophysicist, Dr. Redding, is a renowned
          scientist who has contributed to major space discoveries. He ensures
          that every journey is as educational as it is exhilarating.
        </p>
        <p>
          Chief Engineer Hana Lee: With her extensive background in aerospace
          engineering, Hana Lee is responsible for the state-of-the-art
          technology that powers our spacecraft. Her innovation ensures that our
          travelers are always in safe hands.
        </p>
        <p>
          Mission Specialist Alex Santos: As a mission specialist, Alex’s job is
          to ensure that every aspect of the journey runs smoothly. With a
          background in both science and adventure tourism, Alex is the perfect
          guide for our space travelers.
        </p>
        <p>
          Crew Member Maya Patel: Maya brings a unique blend of technical skills
          and customer service experience to the team. She’s always ready to
          assist with any needs and to make sure every traveler has an
          unforgettable experience.
        </p>
      </div>
      <div className={style.cardContainer}>
        <img src="/crew/image-anousheh-ansari.png" />
        <img src="/crew/image-douglas-hurley.png" />
        <img src="/crew/image-mark-shuttleworth.png" />
        <img src="/crew/image-victor-glover.png" />
      </div>
    </section>
  );
};

export default OurCrew;
