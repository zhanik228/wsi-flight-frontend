

<template>
<body>
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
                        <a href="index.html" class="fs-500 menu-list__link active">Home</a>
                    </li>
                    <li class="menu-list__item">
                        <a href="#promotions" class="test-0-nav-1 fs-500 menu-list__link"><i class="fas fa-ad"></i> Promotions</a>
                    </li>
                    <li class="menu-list__item">
                        <RouterLink to="flights" class="test-0-nav-2 fs-500 menu-list__link"><i class="fas fa-search"></i> Search</RouterLink>
                    </li>
                    <li class="menu-list__item">
                        <a href="#" class="test-0-nav-3 fs-500 text- menu-list__link"><i class="fas fa-list-alt"></i> Check-in for the flight</a>
                    </li>
                </ul>
            </nav>
            <nav class="mobile-menu">
                <ul class="mobile-menu-list">
                    <li class="mobile-menu-list__item">
                        <a href="#promotions" class="test-0-nav-1 mobile-menu-list__link"><i class="fas fa-ad"></i> Promotions</a>
                    </li>
                    <li class="mobile-menu-list__item">
                        <a href="search.html" class="test-0-nav-2 mobile-menu-list__link"><i class="fas fa-search"></i> Search</a>
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
    <main>
        <section class="intro">
            <div class="container">
                <div class="intro__cta cta">
                    <h2 class="fs-900 fw-bold text-primary-200">Get Started to Book <br> Your Perfect Escape</h2>
                    <p class="fs-secondary-heading text-primary-200">
                        Choose our company to fly to where you are always expected
                    </p>
                </div>
                <form class="search-form" @submit.prevent="onSearchSubmit">
                    <div class="search-form__tab text-primary-200 bg-accent-400 tab">
                        <h2><i class="fas fa-fighter-jet"></i> Flights</h2>
                    </div>
                    <div class="search-form__elem">
                        <label class="search-form__label" for="origin">From <span class="arrow-down"></span></label>
                        <input v-model="from" id="origin" class="test-0-fd search-form__input" type="text" placeholder="From">
                    </div>
                    <div class="search-form__elem">
                        <label class="search-form__label" for="to">Destination <span class="arrow-down"></span></label>
                        <input v-model="to" id="to" class="test-0-fa search-form__input" type="text" placeholder="To">
                    </div>
                    <div class="search-form__elem">
                        <label class="search-form__label" for="departure-date">Depart <span class="arrow-down"></span></label>
                        <input v-model="departure_date" class="test-0-fdt search-form__input" type="date" id="departure-date">
                    </div>
                    <div class="search-form__elem">
                        <label class="search-form__label" for="return">Return <span class="arrow-down"></span></label>
                        <input v-model="return_date" class="test-0-fat search-form__input" type="date" id="return">
                    </div>
                    <div class="search-form__elem">
                        <label class="search-form__label" for="people">People count <span class="arrow-down"></span></label>
                        <input v-model="passengers" class="test-0-fnp search-form__input" id="people" type="number" min="1" max="8" placeholder="Number of passengers">
                    </div>
                    <div class="search-form__elem">
                        <button href="search.html" class="test-0-fbs primary-btn">Search</button>
                    </div>
                    <p class="flight-info">Price for selected date: <span class="flight-info__data" id="price-display"></span></p>
                    <p class="flight-info">Departure probability: <span class="flight-info__data" id="departure-probability-display"></span> </p>
                    <p class="flight-info">Booked tickets: <span class="flight-info__data" id="booking-count-display"></span> </p>
                </form>
            </div>
        </section>
        <section class="trust">
            <div class="container trust__inner">
                <div class="plane-container">
                    <img class="plane-img" src="..//media1/images/307246.svg" width="380" alt="plane">
                    <img class="cloud-img" src="..//media1/images/clouds/304241.svg" width="200" alt="cloud">
                    <img class="cloud-img" src="..//media1/images/clouds/304241.svg" width="230" alt="cloud">
                </div>
                <div class="trust__inner-left">
                    <div class="title-block">
                        <h2 class="fs-primary-heading">Why <span class="text-accent-400">Choose</span> Us</h2>
                        <p class="text-primary-400">We offering unbeatable prices and personalized experiences</p>
                    </div>
                    <ul class="features">
                        <li class="features__feature feature" data-active="active">
                            <div class="feature__icon-container"><i style="color: #156CF0" class="fas fa-plane"></i></div>
                            <div class="feature__content">
                                <h2 class="feature__name">Wide Range Options</h2>
                                <p class="feature__description">Offers a diverse selection of accomodations</p>
                            </div>
                        </li>
                        <li class="features__feature feature">
                            <div class="feature__icon-container"><i style="color: #156CF0" class="fas fa-wallet"></i></div>
                            <div class="feature__content">
                                <h2 class="feature__name">Best Prices and Special Offers</h2>
                                <p class="feature__description">Guarantee the best prices for every booking</p>
                            </div>
                        </li>
                        <li class="features__feature feature">
                            <div class="feature__icon-container"><i style="color: #156CF0" class="fas fa-plane"></i></div>
                            <div class="feature__content">
                                <h2 class="feature__name">Wide Range Options</h2>
                                <p class="feature__description">Offers a diverse selection of accomodations</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="promotions" id="promotions">
            <div class="container promotions__container">
                <div class="title-block">
                    <h2 class="fs-primary-heading">Our <span class="text-accent-400">Promotions</span></h2>
                    <p class="text-primary-400">Great opportunities to go abroad</p>
                </div>
                <ul class="promotions__inner">
                <li class="promotion">
                    <img class="test-0-ai promotion__img" src="./media1/images/promotions/promotion1.jpg" width="420" alt="promotion 1">
                    <div class="promotion__content">
                        <h2 class="promotion__title fw-bold fs-700">Promotion 1</h2>
                        <h3 class="test-0-an promotion__heading fs-600">Returning and Changing Your Tickets</h3>
                        <p class="test-0-ad promotion__body fs-500">The pandemic has changed many travelers’ plans, but we know that it will not last forever. 
                            Once all of this is over, we will continue exploring this world the way we used to. 
                            Special rules that have been developed for this challenging situation will help you cancel your trip
                            or postpone it until later.</p>
                        <button class="test-0-abm primary-btn">Show more</button>
                    </div>
                </li>
                <li class="promotion">
                    <img class="test-0-ai" src="./media1/images/promotions/promotion2.jpg" width="420" alt="promotion 2">
                    <div class="promotion__content">
                        <h2 class="promotion__title fw-bold fs-700">Promotion 2</h2>
                        <h3 class="test-0-an promotion__heading fs-600">Best offers</h3>
                        <p class="test-0-ad promotion__body fs-500">To see again the streets that witnessed so much. To hug your beloved ones and look back to see
                            what you’ve come through. And to think of new dreams that will be so special!</p>
                        <button class="test-0-abm primary-btn">Show more</button>
                    </div>
                </li>
                <li class="promotion">
                    <img class="test-0-ai" src="./media1/images/promotions/promotion3.jpg" width="420" alt="promotion 1">
                    <div class="promotion__content">
                        <h2 class="promotion__title fw-bold fs-700">Promotion 3</h2>
                        <h3 class="test-0-an promotion__heading fs-600">See you more often</h3>
                        <p class="test-0-ad promotion__body fs-500">
                            Since the beginning of January, we have been expanding the geography of flights in Russia so that you can
                             see your loved ones more often. Choose our company to fly to where you are always expected.</p>
                        <button class="test-0-abm primary-btn">Show more</button>
                    </div>
                </li>
            </ul>
            </div>
        </section>
        <section class="subscribe">
            <div class="container subscribe__container">
                <img width="120" src="./media1/images/clouds/304241.svg" alt="cloud" class="cloud-img">
                <img width="120" src="./media1/images/clouds/304241.svg" alt="cloud" class="cloud-img">
                <div class="subscribe__inner">
                    <div class="title-block">
                        <h2 class="text-primary-200 fs-primary-heading">Subscribe to Get Exclusive Deals and Offers</h2>
                        <p class="text-primary-200">Unlock exclusive deals and offers by subscribing to closed Promotions</p>
                    </div>
                    <form class="subscribe-form">
                        <input autocomplete="email" name="email" class="test-0-sie" type="email" placeholder="Enter your mail">
                        <button class="test-0-sbs primary-btn">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    </main>
    <footer class="footer">
        <div class="container footer__container">
            <div class="title-block">
                <h2 class="text-primary-200 fs-700">FlightPool</h2>
                <p class="text-primary-200">Book your flights in a minute</p>
                <p class="text-accent-200">Phone: <a class="test-0-phone" href="tel:88001001010">8 (800) 100-10-10</a></p>
            </div>
            <div class="even-columns">
                <nav class="footer-nav">
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <RouterLink to="/login">Login</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/register">Sign up</RouterLink>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <a href="#">Return</a>
                        </li>
                        <li>
                            <a href="#">Feedback</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
</body>
</template>

<script>
import router from '@/router';

export default {
  data() {
    return {
      from: '',
      to: '',
      departure_date: '',
      return_date: '',
      passengers: 1
    }
  },
  methods: {
    onSearchSubmit(event) {
      // const from = document.getElementById('origin')
      // const to = document.geteleme
      router.push({ path: `flights/from/${this.from}/to/${this.to}/departure_date/${this.departure_date}/return_date/${this.return_date}/passengers/${this.passengers}`} )

      
    }
  }
}
</script>
