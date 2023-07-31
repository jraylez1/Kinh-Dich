<template>
    <Form @submit="homeStore.addMember()">
        <HeaderLogin />
        <div class="mt-24 w-full h-screen flex justify-center items-center bg-white">
            <div
                class="desktop:w-[50%] laptop:w-[80%] tablet:w-[90%] mobile:w-[95%] p-4 loginShadow rounded-2xl bg-[#E2FFEB]"
            >
                <h1
                    class="uppercase desktop:text-[36px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5 text-[#0a3b50] pt-4 text-center"
                >
                    Đăng ký học viên
                </h1>
                <p class="text-base text-[#009030] font-semibold pb-2">Họ và tên <span class="text-red-600">*</span></p>
                <div class="w-full flex flex-col mb-4">
                    <Field
                        name="name"
                        type="text"
                        :rules="validateSignUp"
                        v-model="homeStore.user.fullName"
                        placeholder="Điền họ và tên"
                        class="border-2 border-[#ced4da] px-4 py-2 rounded-lg focus:border-[#009030]"
                    />
                    <ErrorMessage name="name" class="text-red-600 text-sm mt-2 mx-2" />
                </div>
                <p class="text-base text-[#009030] font-semibold pb-2">
                    Số điện thoại <span class="text-red-600">*</span>
                </p>
                <div class="w-full flex flex-col mb-4">
                    <Field
                        name="number"
                        type="text"
                        :rules="validateSignUp"
                        v-model="homeStore.user.mobile"
                        placeholder="Điền số điện thoại"
                        class="border-2 border-[#ced4da] px-4 py-2 rounded-lg focus:border-[#009030]"
                    />
                    <ErrorMessage name="number" class="text-red-600 text-sm mt-2 mx-2" />
                </div>
                <p class="text-base text-[#009030] font-semibold pb-2">Email</p>
                <div class="w-full flex flex-col mb-4">
                    <Field
                        name="email"
                        type="email"
                        v-model="homeStore.user.email"
                        placeholder="Điền Email"
                        class="border-2 border-[#ced4da] px-4 py-2 rounded-lg focus:border-[#009030]"
                    />
                </div>
                <p class="text-base text-[#009030] font-semibold pb-2">Địa chỉ</p>
                <div class="w-full flex flex-col mb-4">
                    <Field
                        name="address"
                        type="text"
                        v-model="homeStore.user.address"
                        placeholder="Điền địa chỉ"
                        class="border-2 border-[#ced4da] px-4 py-2 rounded-lg focus:border-[#009030]"
                    />
                </div>
                <p class="text-base text-[#009030] font-semibold pb-2">Tuổi</p>
                <div class="w-full flex flex-col mb-4">
                    <Field
                        name="age"
                        type="text"
                        v-model="homeStore.user.age"
                        placeholder="Điền Tuổi"
                        class="border-2 border-[#ced4da] px-4 py-2 rounded-lg focus:border-[#009030]"
                    />
                </div>

                <div class="text-center w-full mb-4">
                    <p class="text-lg font-medium">
                        Đã có tài khoản?
                        <NuxtLink to="/login" class="font-semibold text-[#007bff]" @click="homeStore.resetModal()">
                            Vào lớp
                        </NuxtLink>
                    </p>
                </div>
                <div class="w-full flex justify-center items-center">
                    <button
                        class="bgMainColor text-center px-12 py-3 rounded-full text-white ease-in duration-300 hover:opacity-80 w-full"
                    >
                        Đăng ký
                    </button>
                </div>
            </div>
        </div>
        <FooterLogin />
    </Form>
</template>
<script setup>
import { useHomeStore } from '../store/homeStore';
const homeStore = useHomeStore();
onMounted(() => {});
</script>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            name: '',
            number: '',
            email: '',
            address: '',
            age: '',
        };
    },
    methods: {
        validateSignUp(value) {
            if (!value) {
                return 'Vui lòng điền thông tin';
            }
            return true;
        },
    },
};
</script>

<style></style>
