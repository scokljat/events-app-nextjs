//dynamic page
import SingleEvent from "@/src/components/events/single-event";

function EventPage({ data }) {
  return <SingleEvent data={data} />;
}

export default EventPage;

export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");
  const id = context.params.id;
  const eventData = allEvents.find((ev) => id === ev.id);
  console.log(eventData);
  return {
    props: { data: eventData },
  };
}

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}
