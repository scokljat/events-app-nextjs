import Link from "next/link";
import Image from "next/image";

function HomePage({ data }) {
  return (
    <>
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <a>
            <Image src={ev.image} alt={ev.title} width={300} height={300} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
        </Link>
      ))}
    </>
  );
}

export default HomePage;
