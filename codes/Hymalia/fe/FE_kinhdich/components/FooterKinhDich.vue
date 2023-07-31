<template>
    <div class="relative">
        <div
            class="bg-no-repeat bg-cover w-full desktop:h-[50vh] laptop:h-[40vh] tablet:h-[25vh] mobile:h-[40vh] object-cover brightness-50"
            style="
                background-image: url('https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/bg-01-min.jpg');
            "
        ></div>
        <div
            class="absolute desktop:top-20 laptop:top-16 tablet:top-16 mobile:top-12 desktop:px-60 laptop:px-16 tablet:px-16 mobile:px-8 flex justify-center items-center"
        >
            <div class="flex flex-col desktop:w-[80%] laptop:w-[80%] tablet:w-full mobile:w-full">
                <h2
                    class="text-white fontSpaceGrotesk desktop:text-[36px] laptop:text-[24px] tablet:text-[24px] mobile:text-[24px] font-semibold leading-[1.2em] text-justify"
                >
                    Tham gia lớp học online để được hướng dẫn chi tiết từ các giảng viên giàu kinh nghiệm trong lĩnh vực
                </h2>
                <h2
                    class="text-[#97dd55] fontSpaceGrotesk desktop:text-[36px] laptop:text-[24px] tablet:text-[24px] mobile:text-[24px] font-semibold leading-[1.2em] pt-4"
                >
                    Kinh Dịch và Y học
                </h2>
                <div class="mt-8">
                    <NuxtLink
                        to="/signup"
                        id="linklogin"
                        class="bgMainColor text-center px-12 py-4 rounded-full text-white hover:scale-110 ease-in duration-300 hover:opacity-80"
                    >
                        Đăng ký
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="w-full desktop:px-[100px] laptop:px-[20px] tablet:px-[20px] mobile:px-[20px] pt-8 pb-8">
            <div
                class="w-full flex justify-between items-center border-b-2 border-[#97D84F] pb-2 desktop:flex-row laptop:flex-row tablet:flex-col mobile:flex-col"
            >
                <div class="flex items-center">
                    <NuxtLink to="/">
                        <img src="../assets/img/logoheader.jpg" alt="" class="h-20 w-[70px] mr-4" />
                    </NuxtLink>
                    <div class="text-center">
                        <h1
                            class="desktop:text-2xl laptop:text-xl tablet:text-lg mobile:text-sm font-bold leading-[1em] my-1 text-[#009030] text-justify uppercase"
                        >
                            Học viện y dược cổ truyền Việt Nam
                        </h1>
                        <span
                            class="text-[#0a3b50] uppercase desktop:text-xl laptop:text-lg tablet:text-sm mobile:text-xs font-light"
                            >Viet Nam university of traditional medicine</span
                        >
                    </div>
                </div>
                <div class="mt-4">
                    <p class="leading-[1.8em] font-bold text-[#0a3b50] text-base mr-4">
                        BẢN QUYỀN THUỘC HỌC VIỆN Y - DƯỢC HỌC CỔ TRUYỀN VIỆT NAM
                    </p>
                    <div class="flex">
                        <el-icon color="#009030" class="no-inherit text-2xl mr-1">
                            <Location />
                        </el-icon>
                        <p class="leading-[1.8em] font-medium text-[#0a3b50] text-base mr-4">
                            Địa chỉ: Số 2, Trần Phú, Hà Đông, Hà Nội
                        </p>
                    </div>
                    <div class="flex">
                        <el-icon color="#009030" class="no-inherit text-2xl mr-1">
                            <PhoneFilled />
                        </el-icon>
                        <p class="leading-[1.8em] font-medium text-[#0a3b50] text-base mr-4">Tel: (84-24) 3382 4929</p>
                    </div>
                    <div class="flex">
                        <el-icon color="#009030" class="no-inherit text-2xl mr-1">
                            <Message />
                        </el-icon>
                        <p class="leading-[1.8em] font-medium text-[#0a3b50] text-base mr-4">
                            Email: hocvienyduoc@vutm.edu.vn
                        </p>
                    </div>
                </div>
            </div>

            <div class="pt-4 text-[#0a3b50] font-semibold text-base">Copyright © 2023 Vatm.edu.vn</div>
        </div>
    </div>
</template>

<script setup>
import { Location, PhoneFilled, Message } from '@element-plus/icons-vue';
</script>

<style></style>
