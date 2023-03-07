<template>
    <module-slot pTitle1="Time" class="w1">
        <template v-slot:moduleSlot>
            <div class="df-column">
                <div class="icon-txt-1" v-show="TimeOffWork != '1'">
                    <span class="icon-txt1">距离上班还有</span>
                    <span class="icon-txt2">{{ TimeOffWork }}</span>
                </div>

                <div class="icon-txt-1" v-show="TimeServed != '1'">
                    <span class="icon-txt1">今天已认真工作</span>
                    <span class="icon-txt2">{{ TimeServed }}</span>
                </div>

                <div class="icon-txt-1" v-show="StartYourLunchBreak != '1'">
                    <span class="icon-txt1">距离开始午休还有</span>
                    <span class="icon-txt2">{{ StartYourLunchBreak }}</span>
                </div>

                <div class="icon-txt-1" v-show="BreakALunchBreak != '1'">
                    <span class="icon-txt1">距离午休结束还有</span>
                    <span class="icon-txt2">{{ BreakALunchBreak }}</span>
                </div>

                <div class="icon-txt-1" v-show="afterWorkTime != '1'">
                    <span class="icon-txt1">距离下班还有</span>
                    <span class="icon-txt2">{{ afterWorkTime }}</span>
                </div>

                <div class="icon-txt-1" v-show="getOffWork == '0'">
                    <span class="icon-txt1">今天已经下班咯！</span>
                </div>
            </div>
        </template>
    </module-slot>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
    name: 'WorkTime',
    setup() {
        const TimeOffWork = ref('--');
        const TimeServed = ref('--');
        const StartYourLunchBreak = ref('--');
        const BreakALunchBreak = ref('--');
        const afterWorkTime = ref('--');
        const getOffWork = ref('--');

        function getTime() {
            var nowDate = new Date();
            // 获取现在时间的时间戳
            var yy = nowDate.getFullYear();
            var mm = nowDate.getMonth() + 1;
            var dd = nowDate.getDate();
            // 上班时间09点
            var time1 = new Date(yy + '/' + mm + '/' + dd + ' 09:00:00').getTime();
            // 下班时间18点
            var time2 = new Date(yy + '/' + mm + '/' + dd + ' 18:00:00').getTime();
            // 当前时间戳
            var nowTime = nowDate.getTime();
            // 午休时间12点
            var time3 = new Date(yy + '/' + mm + '/' + dd + ' 12:00:00').getTime();
            // 午休结束时间14点
            var time4 = new Date(yy + '/' + mm + '/' + dd + ' 14:00:00').getTime();

            // 计算距离上班时间
            if (nowTime < time1) {
                TimeOffWork.value = count(nowTime, time1);
            } else {
                TimeOffWork.value = '1';
            }

            // 判断是否开始午休
            if (nowTime > time1 && time3 - nowTime >= 0) {
                StartYourLunchBreak.value = count(nowTime, time3);
            } else if (nowTime > time1 && time3 + 1000 * 3600 * 2 - nowTime >= 0) {
                time1 += nowTime - time3;
                StartYourLunchBreak.value = '开始午休了';
            } else {
                time1 += 1000 * 3600 * 2;
                StartYourLunchBreak.value = '1';
            }
            if (time4 - nowTime >= 0 && nowTime - time3 >= 0) {
                BreakALunchBreak.value = count(nowTime, time4);
            } else {
                BreakALunchBreak.value = '1';
            }

            // 计算上下班时间
            if (nowTime - time1 >= 0 && time2 - nowTime >= 0) {
                TimeServed.value = count(time1, nowTime);
                afterWorkTime.value = count(nowTime, time2);
            } else {
                TimeServed.value = '1';
                afterWorkTime.value = '1';
            }

            if (
                TimeServed.value == '1' &&
                StartYourLunchBreak.value == '1' &&
                BreakALunchBreak.value == '1' &&
                afterWorkTime.value == '1'
            ) {
                getOffWork.value = '0';
            } else {
                getOffWork.value = '1';
            }
        }
        function count(time1: number, time2: number) {
            var time = (time2 - time1) / 1000 / 60 / 60;
            var h = ('0' + Math.floor(time)).slice(-2);
            var m = ('0' + Math.floor((time % 1) * 60)).slice(-2);
            var s = ('0' + Math.floor((((time % 1) * 60) % 1) * 60)).slice(-2);
            return h + '小时' + m + '分钟' + s + '秒';
        }
        getTime();
        setInterval(() => {
            getTime();
        }, 1000);

        return { TimeOffWork, TimeServed, StartYourLunchBreak, BreakALunchBreak, afterWorkTime, getOffWork };
    },
});
</script>

<style scoped>
.icon-txt-1 {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 0.5rem;
}

.icon-txt-1 .icon-txt1 {
    font-size: 21px;
    font-weight: 600;
    line-height: 25px;
    color: #000;
}

.icon-txt-1 .icon-txt2 {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #515154;
}
</style>
