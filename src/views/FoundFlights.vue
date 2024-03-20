<template>
        <header class="header">
        <div class="container header__inner">
            <div class="logo">
                <img class="test-0-logo" width="120" src="./media1/logo.png" alt="Logo">
                <a href="index.html"><h1 class="logo__title fs-700">FlightPool</h1></a>
            </div>
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <nav class="menu">
                <ul class="menu-list">
                    <li class="menu-list__item">
                        <a href="index.html" class="fs-500 menu-list__link">Home</a>
                    </li>
                    <li class="menu-list__item">
                        <a href="#" class="test-0-nav-1 fs-500 menu-list__link"><i class="fas fa-ad"></i> Promotions</a>
                    </li>
                    <li class="menu-list__item">
                        <a href="#" class="test-0-nav-2 fs-500 menu-list__link active"><i class="fas fa-search"></i> Search</a>
                    </li>
                    <li class="menu-list__item">
                        <a href="#" class="test-0-nav-3 fs-500 text- menu-list__link"><i class="fas fa-list-alt"></i> Check-in for the flight</a>
                    </li>
                </ul>
            </nav>
            <nav class="mobile-menu">
                <ul class="mobile-menu-list">
                    <li class="mobile-menu-list__item">
                        <a href="#" class="test-0-nav-1 mobile-menu-list__link"><i class="fas fa-ad"></i> Promotions</a>
                    </li>
                    <li class="mobile-menu-list__item">
                        <a href="#" class="test-0-nav-2 mobile-menu-list__link"><i class="fas fa-search"></i> Search</a>
                    </li>
                    <li class="mobile-menu-list__item">
                        <a href="#" class="test-0-nav-3 mobile-menu-list__link"><i class="fas fa-list-alt"></i> Check-in for the flight</a>
                    </li>
                    <li class="mobile-menu-list__item">
                        <a href="profile.html" class="test-0-nav-4 mobile-menu-list__link test-0-nav-4"><i class="fas fa-user"></i> Personal account</a>
                    </li>
                </ul>
            </nav>
            <a href="profile.html" class="pc-profile primary-btn test-0-nav-4"><i class="fas fa-user"></i> Personal account</a>
        </div>
    </header>
    <main class="search-main">
        <section class="search-results">
            <div class="container">
                <h2 class="search-title">Search Results</h2>
                <input v-model="depart_time_filter" type="date"></input>
                <select @change="onFilterSelect">
                    <option value="fast">Fastest</option>
                    <option value="cheap">Cheapest</option>
                </select>
                <div class="flight-cards__wrapper">
                    <div @click.stop="selectCard(flight.flight_id)" class="flight-card" draggable="true" :id="flight.flight_id" v-for="flight in filteredFlights" :key="flight.flight_id">
                        <div class="flight-card__icon"><i class="fas fa-plane"></i></div>
                        <div class="flight-card__body">
                            <p class=" flight-card__info flight-card__number">
                                <span class="flight-card__info-title">Flight Number: </span>
                                <span class="test-4-fn">{{ flight.flight_id }}</span>
                            </p>
                            <p class=" flight-card__info flight-card__aircraft">
                                <span class="flight-card__info-title">Aircraft: </span>
                                <span class="test-4-at">{{ flight.flight_code }}</span>
                            </p>
                            <p class=" flight-card__info flight-card__depature-date"><span class="flight-card__info-title">Departure Date: </span>
                                <span class="test-4-dd">{{ flight.from.date }}</span></p>
                            <p class="flight-card__info flight-card__departure-time"><span class="flight-card__info-title">Departure Time: </span>
                                <span class="test-4-dt">{{ flight.from.time }}</span></p>
                            <p class="flight-card__info flight-card__arrival-time"><span class="flight-card__info-title">Arrival Time: </span>
                                <span class="test-4-at">{{ flight.to.date }}</span></p>
                            <p class=" flight-card__info flight-card__travel-time"><span class="flight-card__info-title">Travel Time: </span>
                                <span class="test-4-ft">{{ flight.to.time }}</span></p>
                        </div>
                        <div class="flight-card__footer">
                            <p class="flight-card__info flight-card__footer-elem flight-card__cost"><span class="flight-card__info-title">Cost: </span><span class="test-4-fp">{{ flight.cost }}$</span></p>
                            <p class="flight-card__info flight-card__footer-elem flight-card__departure-probability"><span class="flight-card__info-title">Departure Probability: </span><span class="test-4-fh">50%</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="select-flight-section">
            <div class="container">
                <h2>Selected Flights</h2>
                <div class="select-flight-section__inner">
                    <div class="select-flight-section__title">Selected to there: <div draggable="true" id="display-selected-there"></div></div>
                    <div class="select-flight-section__title">Selected to return: <div draggable="true" id="display-selected-return"></div></div>
                </div>
                <a @click="handleBookingClick" class="test-4-bsb primary-btn">Go To Booking</a>
            </div>
        </section>
    </main>
</template>

<script>
import { FLIGHT_SEARCH } from "@/constants/api/constants";
import router from "@/router"

export default {
    data() {
        return {
            flights: [],
            depart_time_filter: '2020-09-20',
            filter_type: 'fast',
            selectedToThereId: null,
            selectedToReturnId: null,
        }
    },
    async mounted() {

        console.log(this.$route.params)
        const flights = await fetch(`${FLIGHT_SEARCH}?from=${this.$route.params.from}&to=${this.$route.params.to}&date1=${this.$route.params.departure_date}&date2=${this.$route.params.return_date}&passengers=${this.$route.params.passengers}`)
        const returnedFlights = await flights.json()
        console.log(returnedFlights.data)
        const allFlightsTo = returnedFlights.data.flights_to
        const allFlightsBack = returnedFlights.data.flights_back
        const allFlights = [...allFlightsTo, ...allFlightsBack]
        this.flights = allFlights
    },
    computed: {
        filteredFlights() {
            return [...this.flights].filter((flight) => {
                return flight.from.date === this.depart_time_filter
            })
        }
    },
    methods: {
        onFilterSelect(event) {
            console.log(event.target.value)
            if (event.target.value === 'cheap') {
                this.flights.sort((a, b) => {
                    return parseFloat(b.cost) - parseFloat(a.cost)
                })
            }

            if (event.target.value === 'fast') {
                this.flights.sort((a, b) => {
                    const date1 = new Date(a.to.date).getTime()
                    const date2 = new Date(b.to.date).getTime()
                    return parseFloat(date1) - parseFloat(date2)
                })
            }
        },
        selectCard(flight_id) {
            const placeholderThere = document.getElementById('display-selected-there')
            const placeholderReturn = document.getElementById('display-selected-return')
            const selectedItem = document.getElementById(flight_id)

            if (confirm('do you wanna select it for there?')) {
                placeholderThere.appendChild(selectedItem)
                this.selectedToThereId = flight_id
            } else if (confirm('do you wanna select it for return')) {
                placeholderReturn.appendChild(selectedItem)
                this.selectedToReturnId = flight_id
            }
        },
        handleBookingClick() {
            // const selectedSeats = []
            let selectedSeats = [...this.flights].filter((flight) => {
                return flight.flight_id == this.selectedToThereId ||
                flight.flight_id == this.selectedToReturnId
            })
            console.log(selectedSeats)
            localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats))
            router.push({ path: `/booking/there/${this.selectedToThereId}/return/${this.selectedToReturnId}` })
        }
    }
}
</script>