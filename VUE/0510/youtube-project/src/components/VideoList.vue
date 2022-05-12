<template>
  <ul>
      <!-- 3. 사용하기 -->
      <video-list-item 
      v-for="(video, idx) in videos" 
      :key="idx"
      :video="video"
      @select-video="onSelectVideo"
        >
      </video-list-item>
  </ul>
</template>

<script>
// 1. 불러오기
import VideoListItem from '@/components/VideoListItem.vue'
export default {
    name: 'VideoList',
    components: {
        // 2. 등록하기
        VideoListItem,
    },
    props: {
        videos: {
            type: Array,
            required: true,
        }
    },
    methods: {
        onSelectVideo: function(video){
            this.$emit("select-video", video)
        }
    }
}
</script>

<style>

</style>