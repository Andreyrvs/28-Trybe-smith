import ProductModel from '../models/product.model';
import connection from '../models/connection';
import IProduct from '../interface/IProduct';

class ProductService {
  public productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public create = async (product: IProduct) => {
    const result = await this.productModel.create(product);

    return result;
  };
}

export default ProductService;