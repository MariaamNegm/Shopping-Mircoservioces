package com.example.demotrial.customer;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    public String getName() {
        return name;

    }

    public void setName(String name) {
        this.name = name;
    }

    private String name ;



    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public shippingcompany getCompany() {
        return company;
    }

    public void setCompany(shippingcompany company) {
        this.company = company;
    }

    @ManyToOne
    @JoinColumn(name="Shippingcompany")
    @JsonIgnore
    private shippingcompany company ;
}
