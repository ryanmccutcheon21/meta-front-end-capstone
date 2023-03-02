import { useState } from "react"
import { Container, Heading, Box, SimpleGrid } from "@chakra-ui/react"
import ReservationForm from "../components/ReservationForm"

const Reservation = () => {
    const [availableTimes, setAvailableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ])

    const updateTimes = (newTimes) => {
        setAvailableTimes(newTimes)
    }

    return (
        <Container>
            <Heading as="h1" my={10}>
                Make a Reservation
            </Heading>
            <Box my={5}>
                <SimpleGrid columns={[1, null, 2]} gap={10}>
                    <ReservationForm updateTimes={updateTimes} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
                    <Box>
                        <Heading as="h2" size="md" mb={5}>
                            Available times:
                        </Heading>
                        {availableTimes.length > 0 ? (
                            <ul>
                                {availableTimes.map((time) => (
                                    <li key={time}>{time}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No available times for the selected date.</p>
                        )}
                    </Box>
                </SimpleGrid>
            </Box>
        </Container>
    )
}

export default Reservation
