import { useState } from "react"
import { Container, Heading, Box, SimpleGrid } from "@chakra-ui/react"
import ReservationForm from "../components/ReservationForm"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

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

    const initializeTimes = async (e) => {
        e.preventDefault()
        const date = new Date
        const res = await fetch(date)
        const data = await res.json()
        return data
    }

    return (
        <Container bg="brand.primary1" pb={2}>
            <Navbar />
            <Heading as="h1" my={10} color='brand.primary2' fontWeight='extrabold' fontSize={64} style={{ whiteSpace: 'nowrap' }}>
                Make a Reservation
            </Heading>
            <Box my={5}>
                <SimpleGrid columns={[1, null, 2]} gap={10}>
                    <ReservationForm updateTimes={updateTimes} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
                    <Box>
                        <Heading 
                            as="h2" 
                            size="md" 
                            mb={5} 
                            color='brand.highlight1'
                            fontWeight='bold'
                            fontSize={32}
                            textAlign="center"
                            >
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
            <Footer />
        </Container>
    )
}

export default Reservation
