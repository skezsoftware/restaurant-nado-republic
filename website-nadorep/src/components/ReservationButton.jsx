import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ReservationButton() {
  const handleClick = () => {
    window.location.href =
      "https://www.exploretock.com/nado-republic--coronado";
  };

  return (
    <div className="reservation-button-container">
      <Stack spacing={2} direction="row">
        <Button 
        variant="contained" 
        id="reservation-button"
        onClick={handleClick}>
          Reservation
        </Button>
      </Stack>
    </div>
  );
}
