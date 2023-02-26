import { BannerService } from './bannerService';
import { ProductService } from './productService';
import { TypeProduct } from './typeProductService';
import { UserService } from './useService';

export const userService = new UserService();
export const bannerService = new BannerService();
export const typeProduct = new TypeProduct();
export const productSevice = new ProductService();
