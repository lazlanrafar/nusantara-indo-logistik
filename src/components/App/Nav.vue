<template>
  <header>
    <div
      class="container hidden md:flex justify-between mx-auto py-2 border-b-2 opacity-90 text-sm"
    >
      <div class="flex">
        <div class="flex border-r-2 pr-5 mr-5">
          <box-icon type="logo" name="gmail" class="mr-2"></box-icon>
          <div class="">
            <p>Email :</p>
            <p><a href="#" class="">info@nusantaraindologistikbatam.com</a></p>
          </div>
        </div>
        <div class="flex">
          <box-icon name="time-five" type="solid" class="mr-2"></box-icon>
          <div class="">
            <p>Jadwal :</p>
            <p href="#" class="">8:00AM to 5:00PM</p>
          </div>
        </div>
      </div>
      <div class="flex">
        <box-icon name="phone" type="solid" class="mr-2"></box-icon>
        <div class="">
          <p>0778-4103641</p>
          <p>021 5081 2002</p>
        </div>
      </div>
    </div>
    <nav class="bg-white sm:px-4 dark:bg-gray-800 shadow-md">
      <div
        class="container flex flex-wrap justify-between items-center mx-auto py-5"
      >
        <a href="#" class="flex">
          <img src="@/assets/logo.png" alt="" />
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul
            class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
          >
            <li v-for="(nav, index) in Navs" :key="index">
              <router-link
                :to="nav.link"
                class="block py-2 pr-4 pl-3"
                aria-current="page"
                >{{ nav.title }}</router-link
              >
            </li>
          </ul>
        </div>
        <a
          href="#"
          class="py-2 px-7 rounded bg-blue-800 text-white hidden md:block"
          >Contact Us</a
        >
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      Navs: [
        {
          title: "Home",
          link: "/",
        },
        {
          title: "About Us",
          link: "/",
        },
        {
          title: "Product & Services",
          link: "/",
        },
        {
          title: "Gallery",
          link: "/",
        },
      ],
    };
  },
};
</script>
