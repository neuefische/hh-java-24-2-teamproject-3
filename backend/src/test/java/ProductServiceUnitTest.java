import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ProductServiceUnitTest {

    ProductRepository productRepository = mock(ProductRepository.class);
    ProductService productService = new ProductService(productRepository);

    @Test
    void getAllProducts() {
        //GIVEN
        Product product1 = new Product("id1", "title1", 1);
        Product product2 = new Product("id2", "title2", 2);
        Product product3 = new Product("id3", "title3", 3);
        List<Product> products = List.of(product1,product2,product3);
        when(productRepository.findAll()).thenReturn(products);

        //WHEN
        List<Product> actual = productService.getAllProducts();

        //THEN
        //error!!!:       verify(productRepository.findAll());
        verify(productRepository).findAll();
        assertEquals(products,actual);                      //Test for successful
        //assertEquals(List.of(product1,product2),actual);    //Test for fail


    }
}