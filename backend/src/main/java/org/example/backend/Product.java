package org.example.backend;

public record Product(String id, String title, int amount) {
    public Product(String title) {
        this(null, title, 0);
    }

    public Product(String title, int amount) {
        this(null, title, amount);
    }
}

