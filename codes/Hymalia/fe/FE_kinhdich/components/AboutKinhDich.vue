<template>
    <div class="w-full desktop:py-16 laptop:py-12 tablet:py-18 mobile:py-4 px-5">
        <div class="w-full flex justify-center items-center flex-col">
            <img
                src="https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/divider-01-min.png"
                alt=""
                class="w-[400px] h-[30px] mb-5"
            />
            <div
                class="mb-[10px] flex justify-center items-center flex-col desktop:py-12 laptop:py-4 tablet:py-4 mobile:py-4 w-full"
            >
                <h1
                    class="desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[36px] font-semibold leading-[1em] fontSpaceGrotesk mb-5 text-[#0a3b50] pt-4 text-center"
                >
                    Thông tin lớp đào tạo liên tục
                </h1>
                <span
                    class="text-[#009030] desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[36px] font-semibold leading-[1em] fontSpaceGrotesk mb-5"
                    >Kinh Dịch và Y học</span
                >
                <div
                    class="w-full desktop:px-[200px] laptop:px-[200px] tablet:px-[40px] mobile:px-[10px] desktop:py-6 tablet:py-4 laptop:py-8 mobile:py-2"
                >
                    <p class="leading-[1.8em] font-medium text-[#909090] text-center">
                        Khóa học cung cấp các kiến thức bổ trợ và nâng cao kiến thức về Kinh Dịch ứng dụng trong Y học
                        cổ truyển. Vận dụng những lý thuyết của Kinh Dịch vào phương pháp chuẩn đoán và diều trị bệnh
                        bằng Đông y. Việc chữa bệnh trong ngành Y học Cổ Truyền dựa trên cơ sở diều chỉnh cân bằng Âm
                        Dương - Ngũ Hành cân đối, kết hợp với các bài thuốc điều trị cho hiệu quả
                    </p>
                </div>
            </div>
        </div>
        <div
            class="grid desktop:grid-cols-3 laptop:grid-cols-3 tablet:grid-cols-1 mobile:grid-cols-1 gap-4 desktop:mx-14 laptop:mx-10 tablet:mx-6 mobile:mx-2"
        >
            <div class="flex p-10 bg-[#EFFFF4] shadow-xl rounded-lg">
                <el-icon color="#009030" class="no-inherit text-6xl">
                    <UserFilled />
                </el-icon>
                <div class="ml-5">
                    <h3 class="fontSpaceGrotesk text-2xl font-semibold leading-[1.5em] text-[#0a3b50] mb-1">
                        Đối tượng
                    </h3>
                    <p class="leading-[1.8em] font-medium text-[#909090] text-justify text-sm">
                        Bác sĩ, cán bộ y tế, giảng viên và học viên trong lĩnh vực y dược cổ truyền của các cơ sở y tế,
                        các công ty, các đơn vị và cá nhân trong toàn quốc
                    </p>
                </div>
            </div>
            <div class="flex p-10 bg-white">
                <el-icon color="#009030" class="no-inherit text-6xl">
                    <Calendar />
                </el-icon>
                <div class="ml-5">
                    <h3 class="fontSpaceGrotesk text-2xl font-semibold leading-[1.5em] text-[#0a3b50] mb-1">
                        Số buổi & thời gian giảng dạy
                    </h3>
                    <p class="leading-[1.8em] font-medium text-[#909090] text-justify text-sm">
                        Số buổi: 6 buổi (30 tiết)
                    </p>
                    <p class="leading-[1.8em] font-medium text-[#909090] text-justify text-sm">
                        Thời gian dự kiến 6 - 7/2023
                    </p>
                </div>
            </div>
            <div class="flex p-10 bg-[#EFFFF4] shadow-xl rounded-lg">
                <el-icon color="#009030" class="no-inherit text-6xl">
                    <Avatar />
                </el-icon>
                <div class="ml-5">
                    <h3 class="fontSpaceGrotesk text-2xl font-semibold leading-[1.5em] text-[#0a3b50] mb-1">
                        Giảng viên
                    </h3>
                    <p class="leading-[1.8em] font-medium text-[#909090] text-justify text-sm">
                        Là các Giáo Sư, Phó giáo sư và Tiến Sĩ, Thạc sĩ giàu kinh nghiệm và có trình độ chuyên môn cao
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { UserFilled, Calendar, Avatar } from '@element-plus/icons-vue';
</script>

<style lang="scss" scoped></style>
