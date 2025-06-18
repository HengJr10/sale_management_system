<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head} from '@inertiajs/vue3';
import InputError from "@/Components/InputError.vue";
import {useForm} from '@inertiajs/vue3';
import {ref} from 'vue';
import Button from "@/Components/Button.vue";
import SubmitButton from "@/Components/SubmitButton.vue";
import AsyncVueSelect from "@/Components/AsyncVueSelect.vue";
import {showToast} from "@/Utils/Helper.js";
import default_image from "@/assets/img/default-image.jpg";

defineProps({
    filters: {
        type: Object
    },
});

const nameInput = ref(null);
const isHovered = ref(false);
const fileInput = ref(null);
const previewImage = ref(null);

const form = useForm({
    category_id: null,
    supplier_id: null,
    name: null,
    description: null,
    product_code: null,
    root: null,
    buying_date: null,
    buying_price: null,
    selling_price: null,
    unit_type_id: null,
    quantity: null,
    photo: null,
    status: 'active',
});

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        previewImage.value = URL.createObjectURL(file);
        form.photo = file;
    }
};

const createProduct = () => {
    form.post(route('products.store'), {
        preserveScroll: true,
        onSuccess: () => {
            showToast();
        },
        onError: () => nameInput.value.focus(),
    });
};
</script>

<template>
    <Head title="Product"/>

    <AuthenticatedLayout>
        <template #breadcrumb>
            Products > Create
        </template>

        <div class="flex flex-wrap">
            <div class="w-full px-4">
                <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
                    <div class="px-4 py-3 mb-3 border-0 rounded-t">
                        <div class="flex flex-wrap items-center">
                            <div class="relative flex-1 flex-grow w-full max-w-full px-4">
                                <div class="flex items-center justify-between">
                                    <h4 class="text-2xl">Create Product</h4>
                                    <Button
                                        :href="route('products.index')"
                                        buttonType="link"
                                    >
                                        Go Back
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="block w-full px-8 py-4 overflow-x-auto">
                        <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                            <div class="flex flex-col">
                                <label for="category" class="text-sm font-medium text-stone-600">Select Category</label>
                                <AsyncVueSelect
                                    v-model="form.category_id"
                                    resource="categories.index"
                                    placeholder="Select category"
                                    class="mt-2"
                                />
                                <InputError :message="form.errors.category_id"/>
                            </div>
                            <div class="flex flex-col">
                                <label for="supplier" class="text-sm font-medium text-stone-600">Select Supplier</label>
                                <AsyncVueSelect
                                    v-model="form.supplier_id"
                                    resource="suppliers.index"
                                    placeholder="Select supplier"
                                    class="mt-2"
                                />
                                <InputError :message="form.errors.supplier_id"/>
                            </div>
                            <div class="flex flex-col">
                                <label for="name" class="text-sm font-medium text-stone-600">Name</label>
                                <input
                                    id="name"
                                    ref="nameInput"
                                    v-model="form.name"
                                    @keyup.enter="createProduct"
                                    type="text"
                                    placeholder="Enter name"
                                    class="block w-full px-2 py-2 mt-2 border border-gray-200 rounded-md shadow-sm outline-none focus:outline-none focus:shadow-outline"
                                />
                                <InputError :message="form.errors.name"/>
                            </div>
                            <div class="flex flex-col">
                                <label for="product_code" class="text-sm font-medium text-stone-600">Product Code</label>
                                <input
                                    id="product_code"
                                    v-model="form.product_code"
                                    @keyup.enter="createProduct"
                                    type="text"
                                    placeholder="Enter product code"
                                    class="block w-full px-2 py-2 mt-2 border border-gray-200 rounded-md shadow-sm outline-none focus:outline-none focus:shadow-outline"
                                />
                                <InputError :message="form.errors.product_code"/>
                            </div>
                            <div class="flex flex-col">
                                <label for="root" class="text-sm font-medium text-stone-600">Root</label>
                                <input
                                    id="root"
                                    v-model="form.root"
                                    @keyup.enter="createProduct"
                                    type="text"
                                    placeholder="Enter root"
                                    class="block w-full px-2 py-2 mt-2 border border-gray-200 rounded-md shadow-sm outline-none focus:outline-none focus:shadow-outline"
                                />
                                <InputError :message="form.errors.root"/>
                            </div>
                            <div class="flex flex-col">
                                <label for="buying_date" class="text-sm font-medium text-stone-600">Buying Date</label>
                                <input
                                    id="buying_date"
                                    v-model="form.buying_date"
                                    @keyup.enter="createProduct"
                                    type="date"
                                    placeholder="Enter buying date"
                                    class="block w-full px-2 py-2 mt-2 border border-gray-200 rounded-md shadow-sm outline-none focus:outline-none focus:shadow-outline"
                                />
                                <InputError :message="form.errors.buying_date"/>
                            </div>
                            <div class="flex flex-col">
                                <label for="buying_price" class="text-sm font-medium text-stone-600">Buying Price</label>
                                <input
                                    id="buying_price"
                                    v-model="form.buying_price"
                                    @keyup.enter="createProduct"
                                    type="number"
                                    placeholder="Enter buying price"
                                    class="block w-full px-2 py-2 mt-2 border border-gray-200 rounded-md shadow-sm outline-none focus:outline-none focus:shadow-outline"
                                />
                                <InputError :message="form.errors.buying_price"/>
                            </div>
                            <div class="flex flex-col">
                                <label for="selling_price" class="text-sm font-medium text-stone-600">Selling Price</label>
                                <input
                                    id="selling_price"
                                    v-model="form.selling_price"
                                    @keyup.enter="createProduct"
                                    type="number"
                                    placeholder="Enter selling price"
                                    class="block w-full px-2 py-2 mt-2 border border-gray-200 rounded-md shadow-sm outline-none focus:outline-none focus:shadow-outline"
                                />
                                <InputError :message="form.errors.selling_price"/>
                            </div>
                            <div class="flex flex-col">
                                <label for="quantity" class="text-sm font-medium text-stone-600">Quantity</label>
                                <div class="flex mt-1">
                                    <AsyncVueSelect
                                        v-model="form.unit_type_id"
                                        resource="unit-types.index"
                                        placeholder="Select unit type"
                                        class="w-1/2 bg-gray-300 border-none outline-none rounded-l-md focus:outline-none"
                                    />
                                    <input
                                        id="quantity"
                                        v-model="form.quantity"
                                        @keyup.enter="createProduct"
                                        type="number"
                                        placeholder="Enter quantity"
                                        class="w-full px-2 py-2 border border-gray-200 shadow-sm outline-none rounded-r-md focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <InputError :message="form.errors.unit_type_id"/>
                                <InputError :message="form.errors.quantity"/>
                            </div>
                            <div class="flex flex-col">
                                <label for="status" class="text-sm font-medium text-stone-600">Status</label>
                                <select
                                    id="status"
                                    v-model="form.status"
                                    class="block w-full px-2 py-2 mt-2 border border-gray-200 rounded-md shadow-sm outline-none focus:outline-none focus:shadow-outline"
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                                <InputError :message="form.errors.status"/>
                            </div>
                            <div class="flex flex-col">
                                <div class="relative cursor-pointer" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
                                    <img
                                        @click="fileInput.click()"
                                        :alt="$page.props.auth.user.name"
                                        :src="previewImage || default_image"
                                        class="absolute h-auto align-middle border-none shadow-xl max-w-150-px"
                                        style="max-width: 400px !important; height: 150px !important;"
                                        title="Upload Photo"
                                    />
                                    <div
                                        v-if="isHovered"
                                        class="absolute flex items-center justify-center rounded-full"
                                    >
                                        <i class="text-2xl text-black fas fa-camera"></i>
                                    </div>
                                    <input type="file" class="hidden" accept="image/*" ref="fileInput" @change="handleFileChange" />
                                </div>
                                <InputError :message="form.errors.photo"/>
                            </div>
                            <div class="flex flex-col">
                                <label for="description" class="text-sm font-medium text-stone-600">Description</label>
                                <textarea
                                    id="description"
                                    v-model="form.description"
                                    type="text"
                                    rows="3"
                                    placeholder="Enter description"
                                    class="block w-full px-2 py-2 mt-2 border border-gray-200 rounded-md shadow-sm outline-none focus:outline-none focus:shadow-outline"
                                ></textarea>
                                <InputError :message="form.errors.description"/>
                            </div>
                        </div>
                        <div class="flex justify-end my-6">
                            <SubmitButton
                                :processing="form.processing"
                                @click="createProduct"
                                class="px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-600 hover:shadow-lg focus:outline-none"
                            >
                                Submit
                            </SubmitButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
