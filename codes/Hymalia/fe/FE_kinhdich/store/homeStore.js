import { defineStore } from 'pinia';
import { ElMessage } from 'element-plus';
import axios from 'axios';

export const useHomeStore = defineStore('home', {
    state: () => ({
        user: {
            fullName: '',
            mobile: '',
            email: '',
            address: '',
            age: null,
            diseases: '',
        },
        number: '',
        runTimeConfig: useRuntimeConfig(),
    }),
    getters: {},
    actions: {
        async checkNumber(number) {
            try {
                const response = await axios.get(
                    `${this.runTimeConfig.public.baseUrl}Api/Course/CheckNumber?number=${number}`,
                );

                const data = response.data;

                if (data.error === true) {
                    ElMessage.error(data.message);
                }
                const response2 = await axios.post(`${this.runTimeConfig.public.baseUrl}Api/Course/LoginLiveClass`, {
                    transId: data.data.transId,
                    displayName: data.data.displayName,
                });
                const data2 = response2.data;
                if (data2.error === false) {
                    if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
                        window.location = `zoomus://zoom.us/join?action=join&confno=${
                            data2.data.meetingID
                        }&uid=${encodeURI(data2.data.displayName)}&uname=${encodeURI(
                            data2.data.displayName,
                        )}&browser=chrome&pwd=${data2.data.password}`;
                    } else {
                        window.location = `zoommtg://zoom.us/join?action=join&confno=${
                            data2.data.meetingID
                        }&uid=${encodeURI(data2.data.displayName)}&uname=${encodeURI(
                            data2.data.displayName,
                        )}&browser=chrome&pwd=${data2.data.password}`;
                    }
                } else {
                    ElMessage.error(data2.message);
                }
            } catch (error) {
                console.error('Lỗi kết nối đến máy chủ. Vui lòng kiểm tra kết nối internet trên thiết bị của bạn.');
            }
        },
        async resetModal() {
            this.user.fullName = '';
            this.user.mobile = '';
            this.user.email = '';
            this.user.address = '';
            this.user.age = null;
            this.user.diseases = '';
            this.number = '';
        },
        async addMember() {
            const router = useRouter();
            try {
                const response = await axios.post(`${this.runTimeConfig.public.baseUrl}Api/Course/Add`, {
                    fullName: this.user.fullName,
                    mobile: this.user.mobile,
                    email: this.user.email,
                    address: this.user.address,
                    age: this.user.age,
                    diseases: this.user.diseases,
                });
                const data = response.data;
                if (data.error === false) {
                    ElMessage({
                        message: data.message,
                        type: 'success',
                    });
                    this.resetModal();
                    router.push('/login');
                } else {
                    ElMessage.error(data.message);
                }
            } catch (error) {
                console.error('Lỗi kết nối đến máy chủ. Vui lòng kiểm tra kết nối internet trên thiết bị của bạn.');
            }
        },
    },
});
