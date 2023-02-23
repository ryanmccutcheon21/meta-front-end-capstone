import { Box, Button, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Select, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const validationSchema = Yup.object().shape({
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number().required("Number of guests is required").min(1, "Number of guests must be at least 1").max(10, "Number of guests must be at most 10"),
    occasion: Yup.string().required("Occasion is required"),
});

const ReservationForm = () => {
    const [availableTimes, setAvailableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ]);

    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guests: 1,
            occasion: "",
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const handleTimeChange = (e) => {
        formik.handleChange(e);
        const selectedTime = e.target.value;
        const updatedTimes = availableTimes.filter((time) => time !== selectedTime);
        setAvailableTimes(updatedTimes);
    };

    return (
        <Box maxW={200} mx="auto">
            <form onSubmit={formik.handleSubmit}>
                <Grid gap={4}>
                    <GridItem colSpan={2}>
                        <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                            <FormLabel htmlFor="date">Choose date</FormLabel>
                            <Input type="date" id="date" name="date" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.date} />
                            <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                            <FormLabel htmlFor="time">Choose time</FormLabel>
                            <Select id="time" name="time" onChange={handleTimeChange} onBlur={formik.handleBlur} value={formik.values.time}>
                                <option value="">Select a time</option>
                                {availableTimes.map((time) => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </Select>
                            <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
                            <FormLabel htmlFor="guests">Number of guests</FormLabel>
                            <Input type="number" id="guests" name="guests" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.guests} />
                            <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
                            <FormLabel htmlFor="occasion">Occasion</FormLabel>
                            <Select id="occasion" name="occasion" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.occasion}>
                                <option value="">Select an occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Corporate event">Corporate event</option>
                                <option value="Other">Other</option>
                            </Select>
                            <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Button colorScheme="teal" type="submit" isDisabled={!formik.isValid}>Submit</Button>
                    </GridItem>
                </Grid>
            </form>
        </Box>
    );
};

export default ReservationForm;

