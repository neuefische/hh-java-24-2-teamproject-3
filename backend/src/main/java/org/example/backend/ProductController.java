package org.example.backend;


import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor

public class ProductController {

    private final ProductRepository productRepository;


    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }



    @PostMapping
    public Product addProduct(@RequestBody @Valid NewProductDTO product) {

        return productRepository.save(new Product(product.title()));
    }

}
