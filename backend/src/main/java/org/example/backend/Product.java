package org.example.backend;

public record Product(
        String id,
        String title

) {
    Product(
            String title
    ){
        this(null,title);
    }
}
