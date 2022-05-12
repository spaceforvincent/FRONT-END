# Youtube project



### 프로젝트 준비

1. vue create youtube-project
2. cd youtube-project
3. npm install lodash 
4. npm run serve로 옆에 띄워놓기
5. 필요 없는 것 지우기
   1. src -> helloworld
   2. logo.png 

### 유튜브 검색 데이터 만들기

1. components -> TheSearchBar.vue 생성
2. App.vue 정리

```javascript
// 1. 불러오기
import TheSearchBar from '@/components/TheSearchBar.vue'

// 2. 등록하기
 components: {
    TheSearchBar,
 }

<!-- 3. 사용하기(보여주기) -->
<template>
  <div id="app">
    <h1>Youtube Project</h1>
    <the-search-bar></the-search-bar>
</div>
</template>
```

7. TheSearchBar.vue에서 Emit Event

```javascript
<template>
  <div>
      <input @keyup.enter="onInputKeyword" type="text">
  </div>
</template>

<script>
export default {
    name: 'TheSearchBar',
    methods: {
        onInputKeyword: function(event){
            // console.log(event.target.value)
            this.$emit('input-change', event.target.value)
        }
    }
}
</script>

<style>

</style>
```



8. App.vue에서 이벤트 청취 후 함께 전달 된 데이터 할당

```javascript
<the-search-bar @input-change="onInputChange"></the-search-bar>

export default {
  name: 'App',
  data: function(){
    return {
      inputValue: null,
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
    },
  }
```



9. 유튜브 요청 & 응답 데이터 처리 (App.vue)

   - API_KEY, API_URL 할당
   - Youtube API 요청 & 응답 데이터를 변수에 할당

   ```javascript
   const API_KEY = '???'
   const API_URL = 'https://www.googleapis.com/youtube/v3/search'
   export default {
     name: 'App',
     data: function(){
       return {
         inputValue: null,
         videos: [],
       }
     },
     components: {
       // 2. 등록하기
       TheSearchBar,
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
   ```

   

10. Pass Props (App.vue -> VideoList.vue)

    - 할당한 응답 데이터를 하위 컴포넌트로 전달

    ```javascript
    //App.vue
    <video-list :videos="videos"></video-list>
    
    //VideoList.vue
    <template>
      <ul>
          <!-- 3. 사용하기 -->
          <video-list-item 
          v-for="(video, idx) in videos" 
          :key="idx"
          :video="video" //pass props (videolist -> videolistitem)
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
        }
    }
    </script>
    
    <style>
    
    </style>
    ```

    

11. videolistitem에서 내려받은 prop 데이터 선언 후 사용

 ```javascript
 //videolistitem.vue
 
 <template>
   <li @click="selectVideo">
       <img :src="video.snippet.thumbnails.default.url" alt="img">
       {{ video.snippet.title}}
   </li>
 </template>
 
 <script>
 export default {
     name: 'VideoListItem',
     props: {
         video: {
             type: Object,
             required: true,
         }
 
     },
     methods:{
         selectVideo: function(){
             //유튜브 상세영상정보 올리기(videoListitem -> videolist)
             this.$emit('select-video', this.video) 
         }
     }
 }
 </script>
 
 <style>
 
 </style>
 
 
 
 
 //videolist.vue
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
             this.$emit("select-video", video) //유튜브 상세 영상 정보 올리기 (VideoList->App)
         }
     }
 }
 </script>
 
 <style>
 
 </style>
 ```



```javascript
//App.vue
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

const API_KEY = '???'
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

```



```javascript
//VideoDetail.vue
//유튜브 iframe문서 참고
<template>
    <div v-if="video">
        <iframe :src="videoURI" frameborder="0"></iframe> 
    </div>
</template>

<script>
export default {
    name: 'videoDetail',
    props:{
        video:{
            type: Object,
        }
    },
    computed: {
        videoURI: function() {
            const videoId = this.video.id.videoId
            return `https://www.youtube.com/embed/${videoId}`
        }
    }
}
</script>

<style>

</style>
```

