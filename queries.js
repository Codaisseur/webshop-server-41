const Category = require("./models").category;
const Product = require("./models").product;

const getCategoryWithProducts = async () => {
  const categories = await Category.findAll({ include: [Product] });
  const plainCategories = categories.map(c => c.get({ plain: true }));
  console.log(plainCategories[0]);
};

getCategoryWithProducts();
