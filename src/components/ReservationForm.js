import { Box, Button, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Select, Text } from "@chakra-ui/react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useEffect } from "react"

const validationSchema = Yup.object().shape({
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number().required("Number of guests is required").min(1, "Number of guests must be at least 1").max(10, "Number of guests must be at most 10"),
    occasion: Yup.string().required("Occasion is required"),
})

const ReservationForm = ({ updateTimes, availableTimes, setAvailableTimes }) => {

    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guests: 1,
            occasion: "",
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    useEffect(() => {
        const fetchAvailableTimes = async () => {
            const response = await fetch(
                `https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`
                // `https://myapi.com/times?date=${formik.values.date}`
            )
            const data = await response.json()
            setAvailableTimes(data)
            updateTimes() // dispatch state change to update available times
        }

        if (formik.values.date) {
            fetchAvailableTimes()
        }
    }, [formik.values.date])

    const handleTimeChange = (e, times) => {
        formik.handleChange(e)
        const selectedTime = e.target.value
        const updatedTimes = times.filter((time) => time !== selectedTime)
        setAvailableTimes(updatedTimes)
    }

    return (
        <Box maxW={200} mx="auto">
            <form onSubmit={formik.handleSubmit}>
                <Grid gap={4}>
                    <GridItem colSpan={2}>
                        <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                            <FormLabel 
                                htmlFor="date" 
                                color='brand.highlight1'
                                fontWeight='bold'
                                fontSize={32}
                                textAlign="center"
                                >
                                    Choose date
                            </FormLabel>
                            <Input
                                type="date"
                                id="date"
                                name="date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.date}
                            />
                            <FormErrorMessage color="red">{formik.errors.date}</FormErrorMessage>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                            <FormLabel 
                                htmlFor="time" 
                                color='brand.highlight1'
                                fontWeight='bold'
                                fontSize={32}
                                textAlign="center"
                                >
                                    Choose time
                            </FormLabel>
                            <Select
                                id="time"
                                name="time"
                                onChange={(e) => handleTimeChange(e, availableTimes)}
                                onBlur={formik.handleBlur}
                                value={formik.values.time}
                            >
                                <option value="">Select a time</option>
                                {availableTimes.map((time) => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </Select>
                            <FormErrorMessage color="red">{formik.errors.time}</FormErrorMessage>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
                            <FormLabel 
                                htmlFor="guests" 
                                color='brand.highlight1'
                                fontWeight='bold'
                                fontSize={32}
                                textAlign="center"
                                >
                                    # of guests
                            </FormLabel>
                            <Input
                                type="number"
                                step={1}
                                min={1}
                                id="guests"
                                name="guests"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.guests}
                            />
                            <FormErrorMessage color="red">{formik.errors.guests}</FormErrorMessage>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
                            <FormLabel 
                                htmlFor="occasion" 
                                color='brand.highlight1'
                                fontWeight='bold'
                                fontSize={32}
                                textAlign="center"
                                >
                                    Occasion <Text fontSize={16}>(optional)</Text>
                            </FormLabel>
                            <Input
                                type="text"
                                id="occasion"
                                name="occasion"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.occasion}
                            />
                            <FormErrorMessage color="red">{formik.errors.occasion}</FormErrorMessage>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Button
                            type="submit"
                            disabled={!formik.isValid || formik.isSubmitting}
                            bg='brand.primary2'
                            p={2} 
                            borderRadius={16} 
                            fontWeight='bold'
                        >
                            {formik.isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </GridItem>
                </Grid>
            </form>
        </Box>
    );
};

export default ReservationForm