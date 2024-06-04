package org.example.backend;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record NewProductDTO(
        @NotBlank
        @Size(min = 2, max = 50)
        String title,
        int amount
) {

    public String getTitle() {
        return title;
    }

    public int getAmount() {
        return amount;
    }
}
