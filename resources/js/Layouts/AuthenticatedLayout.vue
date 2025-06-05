<script setup>
import Sidebar from "@/Components/Sidebar/Sidebar.vue";
import AdminNavbar from "@/Components/Navbars/AdminNavbar.vue";
import FooterAdmin from "@/Components/Footers/FooterAdmin.vue";
import {Notification, Notivue, pastelTheme} from "notivue";
</script>

<template>
    <Notivue v-slot="item">
        <Notification
            :item="item"
            :theme="pastelTheme"
        />
    </Notivue>

    <div>
        <Sidebar/>

        <div class="relative md:ml-64 bg-blueGray-100">
            <AdminNavbar>
                <template #breadcrumb>
                    <slot name="breadcrumb"/>
                </template>
            </AdminNavbar>

            <!-- Header -->
            <div class="relative pt-12 pb-32 bg-sky-950 md:pt-32">
                <div class="w-full px-4 mx-auto md:px-10">
                    <div>
                        <!-- Card stats -->
                        <slot name="headerState" />
                    </div>
                </div>
            </div>

            <div class="w-full px-4 mx-auto -m-24 md:px-10">

                <slot/>

                <FooterAdmin/>
            </div>
        </div>
    </div>
</template>
