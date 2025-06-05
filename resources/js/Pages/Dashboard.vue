<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head, useForm} from '@inertiajs/vue3';
import CardLineChart from "@/Components/Cards/CardLineChart.vue";
import CardBarChart from "@/Components/Cards/CardBarChart.vue";
import HeaderStats from "@/Components/Headers/HeaderStats.vue";
// import Datepicker from "@vuepic/vue-datepicker";
// import '@vuepic/vue-datepicker/dist/main.css';
import {watch} from "vue";

const props = defineProps({
    date: String,
    total_orders: Object,
    total_profit: Object,
    total_loss: Object,
    total_expense: Object,
    profit_line_chart: Object,
    orders_bar_chart: Object,
});

const form = useForm({
    date: props.date,
});

watch(() => form.date, async (newDateRange, oldDateRange) => {
    form.get(route('dashboard'), {
        preserveScroll: true,
    });
})
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #breadcrumb>
<!--            <Datepicker-->
<!--                v-model="form.date"-->
<!--                model-type="yyyy-MM-dd"-->
<!--                format="yyyy-MM-dd"-->
<!--                range-->
<!--                auto-apply-->
<!--                :enable-time-picker="false"-->
<!--                placeholder="Select date range"-->
<!--            />-->
            <input
                type="month"
                placeholder="Select Month"
                v-model="form.date"
                class="relative w-full px-3 py-3 pl-10 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
            />
        </template>

        <template #headerState>
            <HeaderStats
                :total_orders="total_orders"
                :total_profit="total_profit"
                :total_loss="total_loss"
                :total_expense="total_expense"
            />
        </template>

        <div>
            <div class="flex flex-wrap">
                <div class="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
                    <CardLineChart
                        :profit_line_chart="profit_line_chart"
                    />
                </div>
                <div class="w-full px-4 xl:w-4/12">
                    <CardBarChart
                        :orders_bar_chart="orders_bar_chart"
                    />
                </div>
            </div>
<!--            <div class="flex flex-wrap mt-4">-->
<!--                <div class="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">-->
<!--                    <CardPageVisits/>-->
<!--                </div>-->
<!--                <div class="w-full px-4 xl:w-4/12">-->
<!--                    <CardSocialTraffic/>-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </AuthenticatedLayout>
</template>
