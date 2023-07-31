<template>
    <div>
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
