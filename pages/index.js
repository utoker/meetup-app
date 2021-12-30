import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Meeting 1",
    image:
      "https://worldbulletin.dunyabulteni.net/images/haberler/250x190/2012/08/07/img-3369.jpg",
    address: "hungary",
    description: "dont forget to bring your horse",
  },
  {
    id: "m2",
    title: "Meeting 2",
    image:
      "https://worldbulletin.dunyabulteni.net/images/haberler/250x190/2012/08/07/img-3369.jpg",
    address: "hungary",
    description: "dont forget to bring your horse",
  },
];
const Homepage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default Homepage;
