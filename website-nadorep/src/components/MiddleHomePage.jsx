export default function HoursAndLocation() {
  return (
    <div className="hours-location-container">
      <div
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: "3.5em",
        }}
        id="h-l-item"
      >
        Hours & Location
      </div>
      <hr className="line-across"></hr>
      <div
        style={{ fontFamily: "'Courier New', Courier, monospace" }}
        id="h-l-item"
      >
        <a id="address-link"  href="https://www.google.com/maps/place/Nado+Republic/@32.685065,-117.1811409,17z/data=!3m1!4b1!4m6!3m5!1s0x80deadc60462267b:0x4ed5d932869629c5!8m2!3d32.685065!4d-117.178566!16s%2Fg%2F11fc08mc8z?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D">
          1007 C Ave, Coronado, CA 92118
        </a>
      </div>
      <hr className="line-across"></hr>
      <div style={{ lineHeight: "2em" }} id="h-l-item">
        MON - THU: 4PM - 10pm <br />
        FRI - SAT: 12PM - 11:30PM <br />
        SUN: 12PM - 10PM
      </div>
    </div>
  );
}
