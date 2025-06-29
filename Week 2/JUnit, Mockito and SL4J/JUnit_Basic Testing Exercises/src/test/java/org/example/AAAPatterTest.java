package org.example;

import org.junit.*;

import static org.junit.Assert.*;

public class AAAPatterTest {
    private Demo demo;

    @Before
    public void setUp() {
        // Setup method - runs before each test
        System.out.println("Setting up test...");
        demo = new Demo();
    }

    @After
    public void tearDown() {
        // Teardown method - runs after each test
        System.out.println("Cleaning up after test...");
        demo = null;
    }

    @Test
    public void addPos() {
        // Arrange
        int firstNumber = 2;
        int secondNumber = 3;
        int expectedResult = 5;

        // Act
        int actualResult = demo.add(firstNumber, secondNumber);

        // Assert
        assertEquals(expectedResult, actualResult);
    }

    @Test
    public void addNeg() {
        // Arrange
        int firstNumber = -10;
        int secondNumber = -5;
        int expectedResult = -15;

        // Act
        int actualResult = demo.add(firstNumber, secondNumber);

        // Assert
        assertEquals(expectedResult, actualResult);
    }

    @Test
    public void product() {
        // Arrange
        int a = 150;
        int b = 3;
        int expectedRes = 450;

        // Act
        int res = demo.product(a, b);

        // Assert
        assertEquals(expectedRes, res);
    }

    @Test
    public void negativeProduct() {
        // Arrange
        int a = -20;
        int b = 12;
        int expectedRes = -240;

        // Act
        int res = demo.product(a, b);

        // Assert
        assertEquals(expectedRes, res);
    }
}
