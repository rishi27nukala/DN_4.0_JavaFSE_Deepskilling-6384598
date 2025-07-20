package com.cognizant.loan.controller;

import com.cognizant.loan.model.Loan;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @GetMapping("/{number}")
    public Loan getLoanByNumber(@PathVariable String number) {
        // Dummy response
        return new Loan(number, "car", 400000, 3258, 18);
    }
}
