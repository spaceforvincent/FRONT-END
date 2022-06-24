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
