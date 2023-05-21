package com.example.demoadmin.admin;

import com.example.demoadmin.admin.admin;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.io.Serializable;

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
