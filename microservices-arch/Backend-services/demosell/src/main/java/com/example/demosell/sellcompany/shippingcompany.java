package com.example.demosell.sellcompany;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity

@Table(name = "shippingcompany")
public class shippingcompany {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(mappedBy="company", fetch=FetchType.EAGER)
    public Set<location> locations = new HashSet<location>();



    public int getId() {
        return id;
    }

    public Set< location> getLocations() {
        return locations;
    }

    public void setLocations(Set<location> locations) {
        this.locations = locations;
    }



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

    public int Id() {
        return id;
    }


}
