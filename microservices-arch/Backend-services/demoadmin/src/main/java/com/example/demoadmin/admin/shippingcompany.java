package com.example.demoadmin.admin;
import com.example.demoadmin.admin.admin;
import com.fasterxml.jackson.annotation.JsonBackReference;
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
//    @ManyToOne
//    @JoinColumn(name="admin")
//    private admin admin2;

    public int getId() {
        return id;
    }

    public Set<location> getLocations() {
        return locations;
    }

    public void setLocations(Set<location> locations) {
        this.locations = locations;
    }

//    public admin getAdmin2() {
//        return admin2;
//    }
//
//    public void setAdmin2(admin admin2) {
//        this.admin2 = admin2;
//    }

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
