const TripCard = ({ trip }) => {
  const { location, date, single_price, double_price, hotel, hotel_desc } = trip
  console.log(trip);
  return (
    <>
      <h1>{ location }</h1>
      <h4>{ date }</h4>
    </>
  )
}

export default TripCard;