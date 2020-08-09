package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
public class ToysController {

    @Autowired
    private ToyRepository toyRepository;

    @GetMapping("/test")
    public String toysTest() {
        return "Test Success";
    }

    @GetMapping("/api/v1/toys")
    public List<ToysResponse> getAllUser() {

        List<ToysResponse> toysList = new ArrayList<>();

        Iterable<Toy> toys = toyRepository.findAll();
        for (Toy toy: toys) {
            toysList.add(new ToysResponse(
                    toy.getId(),
                    toy.getName(),
                    toy.getGender(),
                    toy.getAge(),
                    toy.getPrice(),
                    toy.getAvailability(),
                    toy.getBrand()
            ));
        }
        return toysList;
    }

//    @GetMapping("/api/v1/toys/{id}")
//    public ToysResponse getUserById(@PathVariable int id) {
//        Optional<Toy> toy = toyRepository.findById(id);
//        return new ToysResponse(
//                toy.get().getId(),
//                toy.get().getName(),
//                toy.get().getGender(),
//                toy.get().getAge(),
//                toy.get().getPrice(),
//                toy.get().getAvailability(),
//                toy.get().getBrand()
//        );
//    }


}
