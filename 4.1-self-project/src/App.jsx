import Card from './components/Card'
import ImgCard from './components/ImgCard';

const colors = [
  { color: "#46467A"},
  { color: "#7766C6" },
  { color: "#E0DFFD" },
  { color: "#FFC212" },
  { color: "#F9B0C3" }
];
const events = [
  {
    date: "08 Jun",
    img: "https://cdn.pixabay.com/photo/2022/03/26/15/49/blob-7093145_1280.png",
    title: "Wine Tasting",
    place: "Wine & Design",
    time: "7:30PM - 9:00PM"
  },
  {
    date: "12 Jun",
    img: "https://cdn.pixabay.com/photo/2022/03/26/15/49/blob-7093145_1280.png",
    title: "Art Therapy",
    place: "Studio Bloom",
    time: "4:00PM - 5:30PM"
  },
  {
    date: "22 Jun",
    img: "https://cdn.pixabay.com/photo/2022/03/26/15/49/blob-7093145_1280.png",
    title: "Yoga Flow",
    place: "Lotus Space",
    time: "6:00AM - 7:00AM"
  },
  {
    date: "27 Jun",
    img: "https://cdn.pixabay.com/photo/2022/03/26/15/49/blob-7093145_1280.png",
    title: "Coding Meetup",
    place: "DevHub",
    time: "5:00PM - 7:00PM"
  },
  {
    date: "03 Jul",
    img: "https://cdn.pixabay.com/photo/2022/03/26/15/49/blob-7093145_1280.png",
    title: "Pottery Class",
    place: "Clay Corner",
    time: "2:00PM - 4:00PM"
  },
  {
    date: "10 Jul",
    img: "https://cdn.pixabay.com/photo/2022/03/26/15/49/blob-7093145_1280.png",
    title: "Music Jam",
    place: "SoundBox",
    time: "8:00PM - 10:00PM"
  }
];
const App = () => {
  return(
     <div className='parent'>
      <h1>Colors & Illustrations</h1>
      <div className='color-palette'>
        {colors.map((item, index) => (
        <Card key={index} color={item.color}/>
      ))}
      </div>
     <div className='image-card'>
       {events.map((item, index)=>(
        <ImgCard key={index} date={item.date} img={item.img}  title={item. title} place={item.place}
        time={item.time}/>
      ))}
     </div>
    </div>
  )
}

export default App