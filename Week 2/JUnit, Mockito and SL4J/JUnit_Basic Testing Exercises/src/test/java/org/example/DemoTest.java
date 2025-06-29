package org.example;

import org.junit.Test;

import static org.junit.Assert.*;

public class DemoTest {
    private Demo demo;
    @Test
    public void twoPlusThreeShouldEqualFive() {
        var demo = new Demo();
        assertEquals(5, demo.add(2,3));
    }

    @Test
    public void threeTimeTwoShouldEqualSix() {
        var demo = new Demo();
        assertEquals(6, demo.product(3, 2));
    }
}
