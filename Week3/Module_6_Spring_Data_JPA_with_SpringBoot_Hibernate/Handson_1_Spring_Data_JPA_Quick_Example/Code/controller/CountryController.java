package com.country.controller;

import com.country.entity.Country;
import com.country.repository.CountryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {

    private final CountryRepository countryRepo;

    public CountryController(CountryRepository countryRepo) {
        this.countryRepo = countryRepo;
    }

    @PostMapping
    public Country addCountry(@RequestBody Country country) {
        return countryRepo.save(country);
    }

    @GetMapping
    public List<Country> getAllCountries() {
        return countryRepo.findAll();
    }
}
