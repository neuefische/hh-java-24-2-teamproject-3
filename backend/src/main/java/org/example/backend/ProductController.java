package org.example.backend;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/product")
@RequiredArgsConstructor

public class ProductController {

    private final ProductRepository productRepository;


    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }



    @PostMapping
    public Product addProduct(@RequestBody NewProduct newProduct) {
        Product product = new Product(null, newProduct.title());
        return productRepository.save(product);
    }

}
