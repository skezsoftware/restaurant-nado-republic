export default function HoursAndLocation() {
  return (
    <div className="hours-location-container">
      <div
        style={{
          fontSize: "2.1em",
        }}
        id="h-l-item"
      >
        HOURS & LOCATION
      </div>
      <hr className="line-across"></hr>
      <div id="h-l-item">
        <a
          id="address-link"
          href="https://www.google.com/maps/place/Nado+Republic/@32.685065,-117.1811409,17z/data=!3m1!4b1!4m6!3m5!1s0x80deadc60462267b:0x4ed5d932869629c5!8m2!3d32.685065!4d-117.178566!16s%2Fg%2F11fc08mc8z?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
        >
          1007 C Ave, Coronado, CA 92118
        </a>
      </div>
      <hr className="line-across"></hr>
      <div style={{ lineHeight: "2em" }} id="h-l-item">
       <ul className="hours-list">
        <li><strong><span id="day-of-week">SUNDAY</span></strong><br />12PM - 10PM<br /> KITCHEN: 12PM - 9PM</li>
        <li><strong><span id="day-of-week">MONDAY - THURSDAY</span></strong><br /> 4PM - 10PM<br />KITCHEN: 4PM - 9PM</li>
        {/* <li><strong>TUESDAY:</strong>4PM - 10PM<br />KITCHEN: 4PM - 9PM</li>
        <li><strong>WEDNESDAY:</strong>4PM - 10PM<br />KITCHEN: 4PM - 9PM</li>
        <li><strong>THURSDAY:</strong>4PM - 10PM<br />KITCHEN: 4PM - 9PM</li> */}
        <li><strong><span id="day-of-week">FRIDAY & SATURDAY</span></strong><br />12PM - 11:30PM<br />KITCHEN: 12PM - 9:30PM</li>
        {/* <li><strong><span id="day-of-week">SATURDAY</span></strong><br />12PM - 11:30PM<br />KITCHEN: 12PM - 9:30PM</li> */}
       </ul>
      </div>
    </div>
  );
}
