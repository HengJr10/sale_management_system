<template>
    <nav
        class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
    >
        <div
            class="container px-4 mx-auto flex flex-wrap items-center justify-between"
        >
            <div
                class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
            >
                <Link href="/" class="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                    <ApplicationLogo class="w-20 h-20 fill-current text-gray-500" />
                </Link>
                <button
                    class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    v-on:click="setNavbarOpen"
                >
                    <i class="text-white fas fa-bars"></i>
                </button>
            </div>
            <div
                class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"
                :class="[navbarOpen ? 'block rounded shadow-lg' : 'hidden']"
                id="example-navbar-warning"
            >
                <ul class="flex flex-col lg:flex-row list-none mr-auto">
                    <li class="flex items-center">
                        <a
                            class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-auth-navbar"
                        >
                            <i
                                class="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"
                            />
                            Docs
                        </a>
                    </li>
                </ul>
                <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li class="flex items-center">
                        <Link
                            :href="$page.props.auth.user ? route('dashboard') : route('login')"
                            class="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                            type="button"
                        >
                            {{ $page.props.auth.user ? "Dashboard" : "Get Started" }}
                            <i class="fas fa-arrow-alt-circle-right"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import PagesDropdown from "@/Components/Dropdowns/PagesDropdown.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import {Link} from "@inertiajs/vue3";

export default {
    data() {
        return {
            navbarOpen: false,
        };
    },
    methods: {
        setNavbarOpen: function () {
            this.navbarOpen = !this.navbarOpen;
        },
    },
    components: {
        ApplicationLogo,
        PagesDropdown,
        Link
    },
};
</script>
