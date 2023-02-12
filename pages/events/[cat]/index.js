import Image from "next/image";
import Link from "next/link";

function EventsCatPage({ data, pageName }) {
  return (
    <div>
      <h1>Events in {pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h1>
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
          <a>
            <Image width={300} height={300} alt={ev.title} src={ev.image} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default EventsCatPage;

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);

  return {
    props: { data, pageName: id },
  };
}

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

//fallback - sta ce next js uraditi ako korisnik unese nesto sto nije u allPaths, ako stavimo false page ce se buildat samo za allpaths, i za druge unose ce vracati 404 a za true dobit cemo nasu stranicu
