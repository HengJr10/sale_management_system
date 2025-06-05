<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head} from '@inertiajs/vue3';
import CardProfile from "@/Components/Cards/CardProfile.vue";
import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm.vue";
import UpdatePasswordForm from "@/Pages/Profile/Partials/UpdatePasswordForm.vue";
import UpdateSettingsForm from "@/Pages/Profile/Partials/UpdateSettingsForm.vue";

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
    settings: {
        type: Object,
    },
});
</script>

<template>
    <Head title="Profile"/>

    <AuthenticatedLayout>
        <template #breadcrumb>
            Profile
        </template>

        <div class="flex flex-wrap">
            <div class="w-full px-4 lg:w-8/12">
                <div
                    class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100"
                >
                    <div class="px-6 py-6 mb-0 bg-white rounded-t">
                        <div class="flex justify-between text-center">
                            <h6 class="text-xl font-bold text-blueGray-700">My account</h6>
                        </div>
                    </div>
                    <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
                        <UpdateSettingsForm
                            :settings="settings"
                        />

                        <hr class="mt-6 border-b-1 border-blueGray-300"/>

                        <UpdateProfileInformationForm
                            :must-verify-email="mustVerifyEmail"
                            :status="status"
                        />

                        <hr class="mt-6 border-b-1 border-blueGray-300"/>

                        <UpdatePasswordForm/>
                    </div>
                </div>
            </div>
            <div class="w-full px-4 lg:w-4/12">
                <CardProfile/>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
