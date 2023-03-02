import { render } from "@testing-library/react"
import Reservations from "./pages/Reservations"

const availableTimes = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00"
]

test('Renders the ReservationForm heading', () => {
  render(<ReservationForm />)
  const heading = screen.getByText('Make a Reservation')
  expect(heading).toBeInTheDocument()
})

describe("Reservations", () => {
  it("returns the expected available times", () => {

    const { getByText } = render(<Reservations />)
    const availableTimes = getByText(/Available Times/i)

    expect(availableTimes).toBeInTheDocument()
    availableTimes.forEach((time) => {
      expect(availableTimes).toHaveTextContent(time)
    })
  })

  it("should return the same value that is provided in the state", () => {
    const initialState = {
      availableTimes
    }

    const { result } = render(<Reservations />, { initialState })

    expect(result.current.updateTimes()).toEqual(initialState.availableTimes)
  })
})
