import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
// import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
  imports: [
    // ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
