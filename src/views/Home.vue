<template>
  <div class="">
    <section
      class="my-10 md:flex items-center justify-between container mx-auto"
    >
      <div class="ml-5">
        <h1 class="text-4xl xl:text-5xl font-bold">
          To be Always on <br />
          Demand
        </h1>
        <p class="text-base xl:text-lg text-gray-500 my-5">
          Deliver results in accordance with the wishes and expectations of
          customers.
        </p>
        <a href="#" class="py-3 px-10 bg-blue-700 text-white rounded"
          >Contact</a
        >
      </div>
      <img
        src="@/assets/img/jumbotron.png"
        alt=""
        class="w-3/4 md:w-1/2 xl:w-3/5 ml-auto mt-10"
      />
    </section>
    <section class="container mx-auto">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-2">Our Product & Services</h2>
        <p class="text-gray-600">
          We provide pipes of the highest quality and of a high standard.
        </p>
      </div>
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10">
        <a
          href="#"
          class="bg-gray-200 m-5 p-5 rounded h-52"
          v-for="(data, index) in products"
          :key="index"
        >
          <h3 class="font-bold text-xl mb-3">{{ data.title }}</h3>
          <p class="text-sm">{{ data.desc }}</p>
        </a>
      </div>
    </section>
    <!-- <section class="bg-blue-900 mt-20">
      <div class="container mx-auto text-center text-white p-10">
        <h3 class="text-4xl font-bold mb-20">Sales Network</h3>
        <img src="@/assets/img/map.png" alt="" width="70%" class="mx-auto" />
      </div>
    </section> -->
    <section class="bg-gray-200 mt-10 relative">
      <div
        class="md:flex md:justify-between md:items-center container mx-auto xl:h-map"
      >
        <div class="md:w-2/5 py-10 px-5">
          <h3 class="text-4xl font-bold mb-4 text-center md:text-left">
            Where are we?
          </h3>
          <div class="">
            <p class="mb-3">
              From geographical location of Batam, it’s very near from Singapore
              which only 41 km to Batam. Batam also have 5 International
              Seaport, 1 Domestic Seaport and 1 International Airport. The other
              advantage is Batam International trading route, it’s be the first
              gate from other country to enter Indonesia so that helping to
              advance the economy.
            </p>
            <p>
              We have branch office which located in Singapore and Our head
              Office located in Batu Ampar.
            </p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7977.975871872276!2d104.00714100000002!3d1.168983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98a0376ddab11%3A0x757160be7f4cc3e3!2sJl.%20Todak%2C%20Batu%20Merah%2C%20Kec.%20Batu%20Ampar%2C%20Kota%20Batam%2C%20Kepulauan%20Riau!5e0!3m2!1sid!2sid!4v1644821963715!5m2!1sid!2sid"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          class="md:absolute bottom-0 right-0 md:w-1/2 md:h-full w-full h-96"
        ></iframe>
      </div>
    </section>

    <section class="container mx-auto mt-28">
      <h3 class="text-4xl font-bold mb-10 text-center">Pictures</h3>
      <carousel perPage="1" autoplay>
        <slide>
          <img
            src="@/assets/img/carousel/img.png"
            class="w-10/12 mx-auto rounded"
            alt=""
          />
        </slide>
        <slide>
          <img
            src="@/assets/img/carousel/img.png"
            class="w-10/12 mx-auto rounded"
            alt=""
          />
        </slide>
        <slide>
          <img
            src="@/assets/img/carousel/img.png"
            class="w-10/12 mx-auto rounded"
            alt=""
          />
        </slide>
        <slide>
          <img
            src="@/assets/img/carousel/img.png"
            class="w-10/12 mx-auto rounded"
            alt=""
          />
        </slide>
      </carousel>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Home",
  components: {
    Carousel,
    Slide,
  },
  computed: {
    products() {
      return this.$store.state.product.reports;
    },
  },
};
</script>
