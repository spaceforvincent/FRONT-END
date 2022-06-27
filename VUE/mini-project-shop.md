### 1. Maria db

- docker 설치
- Cmd창에서 ```docker pull mariadb```
- ```docker image ls``` 통해 잘 설치 되었는지 확인
- ``` docker run --name mariadb -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=mariadb mariadb``` : 컨테이너 이름은 mariadb, 백그라운드 실행, 포트번호 3306, 비밀번호는 mariadb 
- ```docker ps``` 로 확인
- ```docker exec -it mariadb /bin/bash```
- `mysql -u root -p`
- sequel pro 설치
- 하단 +버튼 눌러 생성
- Add database -> utf8

### 2. DB 테이블 설계

- t_product

![스크린샷 2022-06-23 오후 4.20.36](./asset/스크린샷 2022-06-23 오후 4.20.36.png)![스크린샷 2022-06-23 오후 5.07.53](./asset/스크린샷 2022-06-23 오후 5.07.53.png)

- t_seller

![](asset/스크린샷 2022-06-23 오후 5.10.56.png)

- t_image

![](asset/스크린샷 2022-06-23 오후 5.11.08.png)

![](asset/스크린샷 2022-06-23 오후 5.11.17.png)

- t_user

![](asset/스크린샷 2022-06-23 오후 5.11.38.png)

- t_category

![](asset/스크린샷 2022-06-23 오후 5.11.29.png)



### 3. SQL

```sql
select t1.*, t2.category1, t2.category2, t2.category3 , t3.path
from t_product t1, t_category t2, t_image t3
where t1.category_id = t2.id and t1.id = t3.product_id and t3.type=1

select t1.*, t2.category1, t2.category2, t2.category3 , t3.path
from t_product t1, t_category t2, t_image t3
where t1.category_id = t2.id and t1.id = t3.product_id and t3.type=3 and t1.id=1

select * from t_image where product_id=1 and type=2

insert into t_product (product_name, product_price, delivery_price, add_delivery_price, tags, outbound_days, seller_id, category_id)
values('테스트 제품', 50000, 2500, 5000, '테스트', 5, 1, 1)
```



### 4. Node.js & Express.js

- `cd server`
- `npm init` -> 쭉 엔터 누르기
- `npm i express --save`
- `npm i express-session --save `
- `npm i mysql --save `
- app.js 생성

```js
const express = require("express");
const app = express();
const session = require("express-session");
const fs = require("fs");

app.use(
  session({
    secret: "secret code",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, //쿠키 유효시간 1시간
    },
  })
);

const server = app.listen(3000, () => {
  console.log("Server started. port 3000.");
});

let sql = require("./sql.js");

fs.watchFile(__dirname + '/sql.js', (curr,prev) => {
    console.log('sql 변경 시 서버 재시작 없이 반영되도록 함')
    delete require.cache[require.resolve('./sql.js')]
    sql = require("./sql.js")
})

const db = {
  database: "dev",
  connectionLimit: 10,
  host: "192.168.0.11",
  user: "root",
  password: "mariadb",
};

const dbPool = require("mysql").createPool(db);

app.post("/api/login", async (request, res) => {
  request.session["email"] = "jmr2882@naver.com";
  res.send("ok");
});

app.post("/api/logout", async (request, res) => {
  request.session.destroy();
  res.send("ok");
});


//로그인, 로그아웃 제외한 모든 값
app.post("/apirole/:alias", async (request, res) => {
  if (!request.session.email) {
    return res.status(401).send({ error: "You need to login." });
  }
  try {
    res.send(await req.db(request.params.alias));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

app.post("/api/:alias", async (request, res) => {
  try {
    res.send(await req.db(request.params.alias));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

const req = {
  async db(alias, param = [], where = "") {
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != "ER_DUP_ENTRY") console.log(error);
          resolve({
            error,
          });
        } else resolve(rows);
      })
    );
  },
};

```

- sql.js

```js
module.exports = {
  productList: {
    query:
      "select t1.*, t2.category1, t2.category2, t2.category3 , t3.path\
        from t_product t1, t_category t2, t_image t3\
        where t1.category_id = t2.id and t1.id = t3.product_id and t3.type=1",
  },
  productDetail: {
    query:
      "select t1.*, t2.category1, t2.category2, t2.category3 , t3.path\
    from t_product t1, t_category t2, t_image t3\
    where t1.category_id = t2.id and t1.id = t3.product_id and t3.type=3 and t1.id=?",
  },
  productMainImages: {
    query: "select * from t_image where product_id=? and type=2",
  },
  productInsert: {
    query:
      "insert into t_product (product_name, product_price, delivery_price, add_delivery_price, tags, outbound_days, seller_id, category_id)\
    values(?, ?, ?, ?, ?, ?, ?, ?)",
  },
  productImageInsert: {
    query: "insert into t_image (product_id, type, path) values (?, ?, ?)",
  },
  sellerList: {
    query: "select * from t_seller",
  },
};

```

- 서버 구동 : node app.js
- 포스트맨으로 작동 확인



### 6. Vue

1. vue create mini-project-shop

2. cd mini-project-shop

3. src -> .prettierrc 생성

   ```json
   {"semi":false, "bracketSpacing": true, "singleQuote": true, "useTabs": false, "trailingComma":"none", "printWidth": 80}
   ```

4. package.json -> eslintConfig

```json
"rules": {"space-before-function-paren":"off"}
```

1. public -> index.html에 Bootstrap cdn 추가

2. 화면 레이아웃 만들기 : header, main, footer

   - Header :  애플리케이션 로고, 메뉴에 해당하는 네비게이션

     - src/layouts/Header.vue

     ```vue
     <template>
       <div>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
           <div class="container-fluid">
             <a class="navbar-brand" href="#">Soldout</a>
             <button
               class="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
             >
               <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                 <li class="nav-item">
                   <router-link class="nav-link" to="/">Home</router-link>
                 </li>
                 <li class="nav-item">
                   <router-link class="nav-link active" to="/"
                     >제품리스트</router-link
                   >
                 </li>
                 <li class="nav-item">
                   <router-link class="nav-link" to="/detail"
                     >제품상세페이지</router-link
                   >
                 </li>
                 <li v-if="user.email != undefined" class="nav-item">
                   <router-link class="nav-link" to="/sales"
                     >제품등록페이지</router-link
                   >
                 </li>
               </ul>
               <form class="d-flex" role="search">
                 <input
                   class="form-control me-2"
                   type="search"
                   placeholder="Search"
                   aria-label="Search"
                 />
                 <button class="btn btn-outline-success" type="submit">
                   Search
                 </button>
               </form>
             </div>
           </div>
         </nav>
       </div>
     </template>
     <script>
     export default {
       name: 'HeaderComponent'
     }
     </script>
     
     ```

     

   - Footer : 애플리케이션을 제공하는 회사 정보

     - Src/layouts/footer.vue

     ```vue
     <template>
       <div>
         <footer class="mt-5 py-5 bg-dark text-white">&copy; 2021</footer>
       </div>
     </template>
     <script>
     export default {
       name: 'FooterComponent',
     
     }
     </script>
     
     ```

4. App.vue

```vue
<template>
  <div>
    <header-component />
    <router-view />
    <footer-component />
  </div>
</template>
<script>
import HeaderComponent from './layouts/header.vue'
import FooterComponent from './layouts/footer.vue'
export default {
  components: { HeaderComponent, FooterComponent },
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>

```

5. 라우터 구성

```js
import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ProductCreate from '../views/ProductCreate.vue'
import ProductUpdate from '../views/ProductUpdate.vue'
import SalesList from '../views/SalesList.vue'
import ImageInsert from '../views/ImageInsert.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductList
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/create',
    name: 'ProductCreate',
    component: ProductCreate
  },
  {
    path: '/update',
    name: 'ProductUpdate',
    component: ProductUpdate
  },
  {
    path: '/sales',
    name: 'SalesList',
    component: SalesList
  },
  {
    path: '/image_insert',
    name: 'ImageInsert',
    component: ImageInsert
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

```

