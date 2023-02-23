import AllEvents from "@/src/components/events/events-page";

function EventsPage({ data }) {
  return <AllEvents data={data} />;
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
