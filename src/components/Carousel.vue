<template>
    <b-carousel :indicator-inside="false">
        <b-carousel-item v-for="(item, i) in 5" :key="i">
            <span class="image">
              <img :src="getImgUrl(i)">
            </span>
        </b-carousel-item>
        <template slot="indicators" slot-scope="props">
            <span class="al image">
                <img :src="getImgUrl(props.i)" :title="props.i">
            </span>
        </template>
    </b-carousel>
</template>

<script>
export default {
    methods: {
      getImgUrl(value) {
          const img_arr =  [
                { path: 'https://res.cloudinary.com/rosefc/image/upload/v1600747645/project%204/test_cxubnb.jpg' },
                { path: 'https://res.cloudinary.com/rosefc/image/upload/v1600747645/project%204/stance_oo0g6x.jpg' },
                { path: '.https://res.cloudinary.com/rosefc/image/upload/v1600747645/project%204/seminar_qblhp4.jpg' },
                { path: '../assets/HiraldoKaiLogo.png' },
                { path: '../assets/carousel/kohama.jpg' }
            ] 

        return img_arr[value]
        //   return `https://picsum.photos/id/43${value}/1230/500`
      }
    }
}
</script>

<style>
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}
</style>






