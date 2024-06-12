package org.example.backend;


import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.findAllTodos();
    }

    @PostMapping
    public Product addProduct(@RequestBody @Valid NewProductDTO product) {
        return productService.addProduct(product);
    }
}