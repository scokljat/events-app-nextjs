import Link from "next/link";
import Image from "next/image";

function HomePage({ data }) {
  return (
    <div className="home_body">
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <a className="card">
            <div className="image">
              <Image src={ev.image} alt={ev.title} width={350} height={200} />
            </div>
            <div className="content">
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
