// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ProductEntity } from '../domain/product.entity'

export interface ProductRepository {
  findProductById: (id: string) => Promise<ProductEntity | null>
  getProducts: (page: number, quantity: number) => Promise<ProductEntity[] | null>
  searchProductByName: (keyword: string, page: number, quantity: number) => Promise<ProductEntity[] | null>
  getTotalPages: (quantity: number) => Promise<number>
}
