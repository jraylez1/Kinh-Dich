<template>
    <div class="relative px-5 pt-16 desktop:h-screen laptop:h-screen tablet:h-[80vh] mobile:h-[120vh]">
        <div
            class="absolute top-0 right-0 left-0 h-full bg-cover brightness-50"
            style="
                background-image: url('https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/bg-01-min.jpg');
            "
        ></div>
        <div class="absolute desktop:top-16 laptop:top-16 tablet:top-16 mobile:top-8 left-5 right-5 mb-10">
            <div
                class="flex justify-center desktop:items-center laptop:items-center tablet:items-start mobile:items-start w-full flex-col desktop:px-[52px] laptop:px-[52px] tablet:px-[52px] mobile:px-[10px]"
            >
                <h2
                    class="text-white fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em]"
                >
                    Quyền lợi tham gia lớp học
                </h2>
                <h2
                    class="text-[#97dd55] fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em]"
                >
                    Kinh Dịch và Y học
                </h2>
            </div>
            <div
                class="grid desktop:grid-cols-2 tablet:grid-cols-1 laptop:grid-cols-2 mobile:grid-cols-1 gap-8 mt-8 desktop:px-[52px] laptop:px-[20px] tablet:px-[20px] mobile:px-[10px]"
            >
                <div class="grid desktop:grid-cols-2 tablet:grid-cols-1 laptop:grid-cols-2 mobile:grid-cols-1 gap-4">
                    <div class="w-full desktop:block laptop:block tablet:hidden mobile:hidden">
                        <img src="/9.jpg" class="w-full h-[270px] object-cover rounded-xl" />
                    </div>
                    <div class="w-full rounded-xl bg-[#E2FFEB] p-4 flex flex-col justify-center items-center">
                        <el-icon color="#009030" class="no-inherit text-4xl">
                            <Avatar />
                        </el-icon>
                        <h1
                            class="text-xl font-semibold leading-[1em] fontSpaceGrotesk py-4 text-[#0a3b50] text-center"
                        >
                            Tham gia khóa học cùng chuyên gia hàng đầu trong lĩnh vực Kinh Dịch
                        </h1>
                        <p class="leading-[1.8em] font-medium text-[#909090] text-center text-sm">
                            Là các Giáo Sư, Phó giáo sư và Tiến Sĩ, Thạc sĩ giàu kinh nghiệm và có trình độ chuyên môn
                            cao
                        </p>
                    </div>

                    <div class="w-full rounded-xl bg-[#E2FFEB] p-4 flex flex-col justify-center items-center">
                        <el-icon color="#009030" class="no-inherit text-4xl">
                            <Collection />
                        </el-icon>
                        <h1
                            class="text-xl font-semibold leading-[1em] fontSpaceGrotesk py-4 text-[#0a3b50] text-center"
                        >
                            Nhận chứng chỉ sau đào tạo
                        </h1>
                        <p class="leading-[1.8em] font-medium text-[#909090] text-center text-sm">
                            Được nhận chứng chỉ đào tạo liên tục do Học Viên Y - Dược học cổ truyền Việt Nam cấp theo
                            quy định
                        </p>
                    </div>
                    <div class="w-full desktop:block laptop:block tablet:hidden mobile:hidden">
                        <img src="/7.png" class="w-full h-[270px] object-cover rounded-xl" />
                    </div>
                </div>
                <div class="flex justify-center w-full flex-col">
                    <h2
                        class="text-white fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em] pr-8"
                    >
                        Lớp học Online đặc biệt đào tạo liên tục
                    </h2>
                    <h2
                        class="text-[#97dd55] fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em] py-4 pr-8"
                    >
                        Kinh Dịch và Y học
                    </h2>
                    <p
                        class="leading-[1.8em] font-medium text-[#909090] text-justify desktop:text-base laptop:text-base tablet:text-sm mobile:text-sm desktop:pr-12 laptop:pr-12 tablet:pr-0 mobile:pr-0"
                    >
                        Tham gia khóa học Kinh Dịch trực tuyến, các học viên có thể học mọi lúc, mọi nơi, trên nhiều
                        thiết bị như điện thoại, máy tính, tivi… có kết nối internet.
                        <br />
                        Các bài giảng bằng video được các giảng hàng đầu hướng dẫn chi tiết từ lý thuyết đến thực hành,
                        các điều cần lưu ý khi học tập.
                        <br />
                        So với cách học truyền thống tại lớp, học trực tuyến là phương pháp học vô cùng hiện đại và kinh
                        tế, không bị giới hạn cả về không gian và thời gian.
                    </p>
                    <div class="mt-8">
                        <NuxtLink
                            to="/signup"
                            class="bgMainColor text-center px-12 py-4 rounded-full text-white hover:scale-110 ease-in duration-300 hover:opacity-80"
                        >
                            Đăng ký
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Avatar, Collection } from '@element-plus/icons-vue';
</script>

<style></style>
