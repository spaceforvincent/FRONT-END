<template>
  <div id="app">
    <!-- 3. 사용하기(보여주기) -->
    <h1>Youtube Project</h1>
    <header>
    <the-search-bar @input-change="onInputChange"></the-search-bar>
    </header>
    <section>
      <video-detail :video="selectVideo"></video-detail>
      <video-list :videos="videos" @select-video="onVideoSelect"></video-list>
    </section>
      </div>
</template>

<script>
import axios from 'axios'
// 1. 불러오기
import TheSearchBar from '@/components/TheSearchBar.vue'
import VideoList from '@/components/VideoList.vue'
import VideoDetail from '@/components/VideoDetail.vue'

const API_KEY = 'AIzaSyAkl5qS5bAYFgqLp2Vi-yO6ZHYv9994vLU'
const API_URL = 'https://www.googleapis.com/youtube/v3/search'
export default {
  name: 'App',
  data: function(){
    return {
      inputValue: null,
      videos: [],
      selectVideo: null,
    }
  },
  components: {
    // 2. 등록하기
    TheSearchBar,
    VideoList,
    VideoDetail,
  },
  methods: {
    onInputChange:function (inputText){
      this.inputValue = inputText

      //axios 요청
      const params = {
        key: API_KEY,
        part: 'snippet',
        type: 'video',
        q: this.inputValue
      }
      axios({
        method: 'get',
        url: API_URL,
        params,
      })
      .then(res => {
        // console.log(res)
        console.log(res.data.items)
        this.videos = res.data.items
      })
      .catch(err => {
        console.log(err)
      })
    },
    onVideoSelect: function(video){
      this.selectVideo = video
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
