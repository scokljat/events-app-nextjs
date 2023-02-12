import Image from "next/image";
import Link from "next/link";

function EventsPage({ data }) {
  return (
    <div>
      <h1>Events</h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} passHref>
            <a>
              <Image src={ev.image} alt={ev.title} width={300} height={300} />
              <h2>{ev.title}</h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}

//a sa wrapperom Link za brze ucitavanje
