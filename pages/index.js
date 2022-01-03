import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import apiLogin from "./api/api-secret";

const Homepage = (props) => {
  return <MeetupList meetups={props.meetups} />;
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
