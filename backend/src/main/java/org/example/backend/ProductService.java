package org.example.backend;

import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final IdService idService;



    public ProductService(ProductRepository productRepository, IdService idService) {
        this.productRepository = productRepository;
        this.idService = idService;
    }



    public List<Product> findAllTodos() {
        return productRepository.findAll();
    }

    public Product addProduct(NewProductDTO newProductDTO) {
        String id = idService.randomId();

        Product productToSave = new Product(id, newProductDTO.title(), newProductDTO.amount());

        return productRepository.save(productToSave);
    }





}