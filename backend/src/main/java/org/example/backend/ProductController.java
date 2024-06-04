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
     List<Product> getAllProducts() {
        return List.of(new Product("", "Birne", 5 ));
    }



    @PostMapping
    public Product addProduct(@RequestBody @Valid NewProductDTO product) {

        return productRepository.save(new Product(product.getTitle(), product.getAmount()));

    }

}
