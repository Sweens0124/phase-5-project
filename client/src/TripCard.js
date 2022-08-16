const TripCard = ({ trips }) => {

  console.log(trips);
  const tripDetails = trips.map((trip) => {
    const { location, date, single_price, double_price, hotel, hotel_desc } = trip
    return (
      <div>
        <h1>{ location }</h1>
        <h3>{ date }</h3>
      </div>
    )
  })

  return (
    <>
      { tripDetails }
    </>
  )
}

export default TripCard;