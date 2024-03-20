<template>
        <main>
        <section class="flights">
            <div class="container">
                <div class="flight-cards__wrapper">
                    <div class="flight-card" :id="flight.flight_id" v-for="flight in flights">
                        <div class="flight-card__icon"><i class="fas fa-plane"></i></div>
                        <div class="flight-card__body">
                            <p class=" flight-card__info flight-card__number">
                                <span class="flight-card__info-title">Flight Number: </span>
                                <span class="test-5-fc">{{ flight.flight_id }}</span>
                            </p>
                            <p class="flight-card__info flight-card__aircraft">
                                <span class="flight-card__info-title">City Departure: </span>
                                <span class="test-5-fcity">{{ flight.from.city }}</span>
                            </p>
                            <p class="flight-card__info flight-card__aircraft">
                                <span class="flight-card__info-title">Airport of Departure: </span>
                                <span class="test-5-from">{{ flight.from.airport }}</span>
                            </p>
                            <p class="flight-card__info flight-card__depature-date"><span class="flight-card__info-title">Departure Date: </span>
                                <span class="test-5-dd">{{ flight.from.date }}</span></p>
                            <p class="flight-card__info flight-card__departure-time"><span class="flight-card__info-title">Departure Time: </span>
                                <span class="test-5-dt">{{ flight.from.time }}</span></p>
                            <p class="flight-card__info flight-card__arrival-time"><span class="flight-card__info-title">Arrival Time: </span>
                                <span class="test-5-at">{{ flight.to.time }}</span></p>
                            <p class="flight-card__info flight-card__travel-time"><span class="flight-card__info-title">Destination City Name: </span>
                                <span class="test-5-tcity">{{ flight.to.city }}</span></p>
                            <p class="test-5-to flight-card__info flight-card__travel-time"><span class="flight-card__info-title">Destination Airport Name: </span>
                                <span class="test-5-to">{{ flight.to.airport }}</span></p>
                        </div>
                        <div class="flight-card__footer">
                            <p class="flight-card__info flight-card__footer-elem flight-card__cost"><span class="flight-card__info-title">Cost: </span>
                                <span class="test-5-fp">{{ flight.cost }}$</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="passenger">
            <div class="container">
                <div class="passengers">
                    <div class="user-card" v-for="user in users">
                        <div class="user-card__left">
                            <div class="user-card__img-wrapper">
                                <img class="user-card__img" width="64" height="64" src="./media1/fontawesome-free-5.14.0-web/svgs/regular/user-circle.svg" alt="user">
                            </div>
                            <div class="user-card__content">
                                <h2 class=" user-card__name"><span class="test-5-name">{{ user.first_name }}</span> <span class="test-5-last">{{ user.last_name }}</span></h2>
                                <p class="user-card__role test-5-dob">Date of birth: 14.09.2004</p>
                                <p class="user-card__role test-5-doc">Document number: {{ user.document_number }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="test-5-add add-passenger-btn primary-btn">Add a passenger</button>
                <button class="test-5-remove remove-passenger-btn primary-btn primary-btn--danger">Remove a passenger</button>
                <h2 class="test-5-price flight__final-cost">Final Cost: 100$</h2>
                <a href="booking_management.html" class="test-5-book primary-btn">Make a Book</a>
            </div>
        </section>
    </main>
</template>

<script>
import { GET_USER } from "@/constants/api/constants.js"

export default {
    data() {
        return {
            flights: JSON.parse(localStorage.getItem('selectedSeats')),
            users: []
        }
    },
    async mounted() {
        console.log(this.flights)

        if (localStorage.getItem('token')) {
            try {
                const response = await fetch(GET_USER, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                let result = await response.json()
                const newUser = {
                    first_name: result.first_name,
                    last_name: result.last_name,
                    phone: result.phone,
                    document_number: result.document_number
                }
                this.users.push(newUser)
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>