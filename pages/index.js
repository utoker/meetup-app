import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

const Homepage = (props) => {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Browse from list of meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(apiLogin);
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  };
}

export default Homepage;