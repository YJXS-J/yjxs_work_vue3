<template>
    <module-slot pTitle1="Weather" class="w2">
        <template v-slot:moduleSlot>
            <div class="df-column">
                <div class="icon-txt-box">
                    <div class="icon-txt-1">
                        <span class="icon-txt1">福田区</span>
                        <span class="icon-txt2" v-if="FutianWeatherInfo">{{ FutianWeatherInfo.lives[0].weather }}</span>
                    </div>
                </div>
            </div>
        </template>
    </module-slot>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
    name: 'WeatherInfo',
    setup() {
        var FuTianCityCode = '440304';
        var LongHuaCityCode = '440309';
        var key = 'a55213abd50d108145f74b0b2cf1d5cd';

        const FutianWeatherInfo = ref();
        const LongHuaWeatherInfo = ref();

        async function getWeatherInfo(cityCode: string | undefined) {
            var data = null;
            var url = 'https://restapi.amap.com/v3/weather/weatherInfo?city=' + cityCode + '&key=' + key;
            await axios
                .get(url)
                .then(function (response: any) {
                    // handle success
                    // console.log(response);
                    data = response.data;
                })
                .catch(function (error: any) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
            return data;
        }

        getWeatherInfo(FuTianCityCode).then(res => {
            console.log(res);

            FutianWeatherInfo.value = res;
        });
        // FutianWeatherInfo.value = getWeatherInfo(FuTianCityCode);
        // LongHuaWeatherInfo.value = getWeatherInfo(LongHuaCityCode);

        return { FutianWeatherInfo, LongHuaWeatherInfo };
    },
});
</script>

<style scoped></style>
